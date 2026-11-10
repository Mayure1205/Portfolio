import { NextRequest, NextResponse } from "next/server";
import { PROJECTS } from "@/lib/constants";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const SYSTEM_PROMPT = `You are an AI assistant on Mayuresh Tardekar's portfolio website. You answer questions about Mayuresh in a friendly, professional, and concise manner. Here is information about Mayuresh:

**Personal Info:**
- Name: Mayuresh Tardekar
- Role: Software Engineering Intern — Full-Stack
- Location: Mumbai, India
- Email: mayutardekar1205@gmail.com
- LinkedIn: linkedin.com/in/mayuop
- GitHub: github.com/MayureshTardekar

**Education:**
- Master of Computer Applications (MCA) at Sardar Patel Institute of Technology (SPIT), Mumbai (2025-2027)
- Bachelor of Science in Information Technology at Thakur Ramnarayan College, Mumbai (2022-2025)
- Relevant coursework: Data Structures, Algorithms, DBMS, Computer Networks, Cloud Fundamentals, Software Engineering, OS, Distributed Systems

**Projects:**
${PROJECTS.map(
  (project, index) =>
    `${index + 1}. ${project.title} (${project.techStack.join(", ")}) ${project.year}\n   - ${project.longDescription}`
).join("\n\n")}

**Technical Skills:**
- Languages: JavaScript, Python, Java, C++, Solidity
- Frontend: React, TypeScript
- Backend: Node.js, Express
- Databases: MongoDB, MySQL, Supabase, pgvector, Prisma
- Cloud & DevOps: AWS, Docker, Kubernetes, Linux
- Tools: Git, GitHub, Postman

**Achievements:**
- Alkimi Move FWD Hackathon (2025)

**Languages:** English, Hindi, Marathi

Rules:
- Keep responses concise (2-4 sentences max)
- Be enthusiastic but professional
- If asked about things you don't know about Mayuresh, say so politely
- Suggest contacting Mayuresh directly for detailed discussions
- Don't make up information that's not provided above`;

export async function POST(request: NextRequest) {
  try {
    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json(
        {
          message:
            "AI chatbot is not configured yet. Please contact Mayuresh directly at mayutardekar1205@gmail.com!",
        },
        { status: 200 }
      );
    }

    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const reply =
      data.content?.[0]?.text || "Sorry, I couldn't process that. Try again!";

    return NextResponse.json({ message: reply });
  } catch {
    return NextResponse.json(
      {
        message:
          "Sorry, I'm having trouble right now. Feel free to email Mayuresh at mayutardekar1205@gmail.com!",
      },
      { status: 200 }
    );
  }
}
