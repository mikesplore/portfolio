# Email Setup Instructions for Portfolio Contact Form

This document explains how to set up the email functionality in your portfolio using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Once created, note down the Service ID (e.g., `service_ak2zvfq`)

## Step 3: Create Email Templates

You need to create two templates:

### Template 1: Notification Template (For You)
This template will send you a notification when someone fills out the contact form.

1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it something like "Portfolio Contact"
4. Design your notification email with variables like `{{from_name}}`, `{{email}}`, and `{{message}}`
5. Note down the Template ID (e.g., `template_portfolio`)

### Template 2: Auto-Response Template (Optional)
This template will automatically send an email to the person who contacted you.

1. Create another template named something like "Auto Response"
2. Use our pre-designed responsive email template in `src/assets/email-template.html`
3. Customize it as needed with variables like `{{from_name}}` and `{{message}}`
4. Note down the Template ID (e.g., `template_autoresponse`)

## Step 4: Get Your Public API Key

1. Go to "Account" > "API Keys"
2. Copy your Public Key

## Step 5: Update Configuration

Open the file `src/utils/emailConfig.js` and update it with your EmailJS credentials:

```javascript
export const emailJsConfig = {
  serviceId: 'your_service_id', // Your EmailJS service ID
  templateId: 'your_template_id', // Your notification template ID
  autoResponseTemplateId: 'your_autoresponse_template_id', // Your auto-response template ID
  publicKey: 'your_public_key', // Your EmailJS public key
};
```

## Testing Your Setup

1. Fill out the contact form on your website
2. You should receive an email notification
3. If you set up an auto-response template, the sender should also receive an email

## Troubleshooting

- Check browser console for any errors
- Verify that your API keys and IDs are correct
- Make sure your email templates contain the expected variables
- Check your EmailJS dashboard for any failed deliveries

## EmailJS Usage Limits

The free plan includes:
- 200 emails per month
- 2 email templates
- 1 email service

If you need more, consider upgrading to a 
