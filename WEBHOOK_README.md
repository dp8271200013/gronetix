# SCALESTACK Webhook Configuration

This project uses webhooks to integrate with automation platforms like n8n or Make.com for contact form submissions and chat widget interactions.

## Setup Instructions

### 1. Contact Form Webhook (src/pages/Contact.tsx)

**Location:** Line 33
```typescript
const webhookUrl = "YOUR_WEBHOOK_URL_HERE";
```

**Replace with your webhook URL from:**
- **n8n:** Create a Webhook trigger node and copy the webhook URL
- **Make.com:** Add a Webhook module and copy the webhook URL

**Payload sent:**
```json
{
  "name": "John Doe",
  "email": "john@business.com",
  "company": "Acme Corp",
  "message": "Tell us what you want automated...",
  "timestamp": "2025-01-01T12:00:00.000Z"
}
```

### 2. Chat Widget Webhook (src/components/ChatWidget.tsx)

**Location:** Line 13
```typescript
const webhookUrl = "YOUR_WEBHOOK_URL_HERE";
```

**Payload sent:**
```json
{
  "action": "book_demo" | "see_demos" | "pricing" | "talk_to_human" | "email_captured",
  "email": "user@business.com",
  "timestamp": "2025-01-01T12:00:00.000Z"
}
```

## Recommended Automation Workflows

### Contact Form Auto-Reply (n8n/Make)

1. **Trigger:** Webhook receives form submission
2. **Action:** Send personalized email reply
   - Use name from payload: "Hi {{name}},"
   - Include booking link
   - Keep message short and friendly

**Example auto-reply:**
```
Hi {{name}},

Thanks for reaching out to SCALESTACK! 

We received your message about {{message excerpt}}. Our team will review your request and get back to you within 24 hours.

In the meantime, feel free to book a 15-minute demo directly: [BOOKING_LINK]

Looking forward to helping you scale!

Best,
The SCALESTACK Team
```

### Chat Widget Actions

Each action can trigger different workflows:

- **email_captured:** Add to CRM, send welcome email
- **book_demo:** Send calendar invite, add to demo pipeline
- **see_demos:** Send demo video links
- **pricing:** Send pricing PDF or link
- **talk_to_human:** Create support ticket, notify team

## Testing

Use tools like:
- **Webhook.site** - Test and inspect webhook payloads
- **RequestBin** - Capture and debug webhook requests
- **n8n local** - Test workflows locally before deploying

## Security Notes

- Always validate incoming data on your automation platform
- Use HTTPS webhooks only
- Consider adding authentication headers for production
- Rate limit webhook endpoints to prevent abuse

## Example n8n Workflow

```
[Webhook] → [Filter] → [Email] → [CRM Update]
   ↓
[Validate Email] → [Send Auto-Reply] → [Create Task]
```

## Example Make.com Scenario

```
Webhook → Router → [Email Path]
              ↓ → [CRM Path]
              ↓ → [Slack Notification]
```

## Need Help?

Contact SCALESTACK support at support@scalestack.com for assistance setting up webhooks.
