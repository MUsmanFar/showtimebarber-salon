import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would connect to a database or email service here
    // e.g., await supabase.from('appointments').insert([data])
    // or send an email via Resend/SendGrid
    
    console.log('Received booking request:', data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Appointment request received successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { message: 'Failed to submit appointment request' },
      { status: 500 }
    );
  }
}
