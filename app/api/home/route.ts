import { NextRequest, NextResponse } from "next/server";

// GET /api/home
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: "Welcome to Major House API",
      data: {
        company: "Major House",
        status: "Coming Soon",
        version: "1.0.0",
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

// POST /api/home - For any home page related submissions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // You can add validation here
    if (!body) {
      return NextResponse.json(
        {
          success: false,
          error: "Request body is required",
        },
        { status: 400 }
      );
    }

    // Process the data here (e.g., save to Supabase)
    return NextResponse.json({
      success: true,
      message: "Data received successfully",
      data: body,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
