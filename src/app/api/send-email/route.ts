import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { emailConfig } from '@/lib/config'

const resend = new Resend(emailConfig.apiKey)

interface OrderItem {
  product: string
  qty: string
  unit: string
}

function buildContactHtml(data: {
  name: string
  business: string
  email: string
  phone: string
  enquiry: string
  message: string
  orderItems: OrderItem[]
}): string {
  const orderTable =
    data.orderItems && data.orderItems.length > 0
      ? `
      <div style="margin:24px 0;">
        <h3 style="color:#92c640;font-family:Arial,sans-serif;font-size:14px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Products Requested</h3>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <thead>
            <tr style="background:rgba(146,198,64,0.1);">
              <th style="padding:10px 14px;text-align:left;font-family:Arial,sans-serif;font-size:12px;color:#92c640;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid rgba(146,198,64,0.2);">Product</th>
              <th style="padding:10px 14px;text-align:left;font-family:Arial,sans-serif;font-size:12px;color:#92c640;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid rgba(146,198,64,0.2);">Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${data.orderItems
              .map(
                (item, i) => `
              <tr style="background:${i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent'};">
                <td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:13px;color:#ddedb0;border-bottom:1px solid rgba(146,198,64,0.08);">${item.product}</td>
                <td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:13px;color:#ddedb0;border-bottom:1px solid rgba(146,198,64,0.08);">${item.qty} cases</td>
              </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>`
      : ''

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#000000;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000000;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#0b0e0b;border:1px solid rgba(146,198,64,0.14);border-radius:12px;overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding:32px 40px 24px;background:linear-gradient(135deg,#060806,#0f1a0f);border-bottom:1px solid rgba(146,198,64,0.14);position:relative;">
              <div style="display:inline-block;">
                <span style="font-family:Georgia,serif;font-size:24px;font-weight:700;color:#92c640;letter-spacing:4px;">BIOBRUST</span>
              </div>
              <p style="margin:6px 0 0;font-size:11px;color:#6a7a50;letter-spacing:3px;text-transform:uppercase;">Dealer Enquiry Received</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:32px 40px;">
              <h2 style="margin:0 0 8px;font-family:Georgia,serif;font-size:22px;color:#ffffff;">New Dealer Enquiry</h2>
              <p style="margin:0 0 24px;font-size:13px;color:#6a7a50;">Received via biobrust.com contact form</p>

              <!-- CONTACT DETAILS -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td width="50%" style="padding-right:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Full Name</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;font-weight:600;">${data.name}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Business Name</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;font-weight:600;">${data.business || 'Not provided'}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-right:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Email</p>
                      <p style="margin:0;font-size:14px;color:#92c640;">${data.email}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Phone</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;font-weight:600;">${data.phone}</p>
                    </div>
                  </td>
                </tr>
                ${
                  data.enquiry
                    ? `<tr>
                  <td colspan="2" style="padding-bottom:12px;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Enquiry Type</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;">${data.enquiry}</p>
                    </div>
                  </td>
                </tr>`
                    : ''
                }
              </table>

              ${orderTable}

              <!-- MESSAGE -->
              <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:18px 20px;margin-bottom:24px;">
                <p style="margin:0 0 8px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Message</p>
                <p style="margin:0;font-size:14px;color:#ddedb0;line-height:1.7;">${data.message.replace(/\n/g, '<br>')}</p>
              </div>

              <!-- CTA -->
              <div style="text-align:center;padding:16px 0;">
                <a href="mailto:${data.email}" style="display:inline-block;background:#92c640;color:#000000;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:14px 32px;border-radius:4px;">
                  Reply to ${data.name}
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(146,198,64,0.08);text-align:center;">
              <p style="margin:0;font-size:11px;color:#6a7a50;">BIOBRUST &mdash; Fuel Every High Performance Moment</p>
              <p style="margin:4px 0 0;font-size:10px;color:#4a5a40;">This email was sent from the BIOBRUST website contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildOrderHtml(data: {
  name: string
  business: string
  email: string
  phone: string
  product: string
  qty: string
  city: string
  message: string
}): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#000000;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000000;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#0b0e0b;border:1px solid rgba(146,198,64,0.14);border-radius:12px;overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding:32px 40px 24px;background:linear-gradient(135deg,#060806,#0f1a0f);border-bottom:1px solid rgba(146,198,64,0.14);">
              <span style="font-family:Georgia,serif;font-size:24px;font-weight:700;color:#92c640;letter-spacing:4px;">BIOBRUST</span>
              <p style="margin:6px 0 0;font-size:11px;color:#6a7a50;letter-spacing:3px;text-transform:uppercase;">New Dealer Order Request</p>
            </td>
          </tr>

          <!-- ORDER HIGHLIGHT -->
          <tr>
            <td style="padding:24px 40px 0;">
              <div style="background:linear-gradient(135deg,rgba(146,198,64,0.12),rgba(146,198,64,0.04));border:1px solid rgba(146,198,64,0.3);border-radius:8px;padding:20px 24px;text-align:center;">
                <p style="margin:0 0 6px;font-size:10px;color:#6a7a50;letter-spacing:3px;text-transform:uppercase;">Product Ordered</p>
                <h2 style="margin:0 0 4px;font-family:Georgia,serif;font-size:26px;color:#92c640;">${data.product}</h2>
                <p style="margin:0;font-size:16px;color:#ddedb0;font-weight:600;">${data.qty} Cases Requested</p>
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <h3 style="margin:0 0 16px;font-size:12px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Dealer Information</h3>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="50%" style="padding-right:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Name</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;font-weight:600;">${data.name}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Business</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;font-weight:600;">${data.business || 'Not provided'}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-right:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Email</p>
                      <p style="margin:0;font-size:14px;color:#92c640;">${data.email}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:8px;padding-bottom:12px;vertical-align:top;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Phone</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;font-weight:600;">${data.phone}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-bottom:12px;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">City / Location</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;">${data.city || 'Not provided'}</p>
                    </div>
                  </td>
                </tr>
                ${
                  data.message
                    ? `<tr>
                  <td colspan="2" style="padding-bottom:12px;">
                    <div style="background:rgba(146,198,64,0.05);border:1px solid rgba(146,198,64,0.12);border-radius:6px;padding:14px 16px;">
                      <p style="margin:0 0 8px;font-size:10px;color:#6a7a50;letter-spacing:2px;text-transform:uppercase;">Additional Notes</p>
                      <p style="margin:0;font-size:14px;color:#ddedb0;line-height:1.7;">${data.message.replace(/\n/g, '<br>')}</p>
                    </div>
                  </td>
                </tr>`
                    : ''
                }
              </table>

              <div style="text-align:center;padding:16px 0 0;">
                <a href="mailto:${data.email}" style="display:inline-block;background:#92c640;color:#000000;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:14px 32px;border-radius:4px;">
                  Reply to ${data.name}
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(146,198,64,0.08);text-align:center;">
              <p style="margin:0;font-size:11px;color:#6a7a50;">BIOBRUST &mdash; Fuel Every High Performance Moment</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type } = body

    let subject = ''
    let html = ''

    if (type === 'contact') {
      subject = `[BIOBRUST] New Dealer Enquiry from ${body.name}${body.enquiry ? ` — ${body.enquiry}` : ''}`
      html = buildContactHtml(body)
    } else if (type === 'order') {
      subject = `[BIOBRUST] Order Request: ${body.product} × ${body.qty} cases — ${body.name}`
      html = buildOrderHtml(body)
    } else {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    const sendPayload: {
      from: string
      to: string
      reply_to: string
      subject: string
      html: string
      cc?: string
    } = {
      from: emailConfig.from,
      to: emailConfig.to,
      reply_to: body.email,
      subject,
      html,
    }
    if (emailConfig.cc) sendPayload.cc = emailConfig.cc

    const { error } = await resend.emails.send(sendPayload)

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
