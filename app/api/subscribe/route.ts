import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Here you would typically integrate with your email service provider
    // For example, using ConvertKit, Mailchimp, etc.
    console.log('New subscription:', email)

    // For now, we'll just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
} 