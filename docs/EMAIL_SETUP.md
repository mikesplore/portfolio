# Email Configuration for Portfolio

This document explains how to set up real email functionality for the contact form in your portfolio using EmailJS.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be enough for a portfolio site

## Step 2: Set Up Your Email Service

1. Once logged in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Give your service a name (e.g., "portfolio_contact")
6. Note down the Service ID (you'll need this later)

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template using the variables from your form
4. For the notification email that you'll receive, here's a sample template:

```
Subject: New Contact Message from {{from_name}}

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

5. For an auto-response to the person who contacted you, you can use the HTML template in `/src/assets/email-template.html`
6. Save your template and note down the Template ID

## Step 3b: Setting Up Auto-Response (Optional)

If you want to send an automatic response to people who contact you:

1. Create a second email template in EmailJS
2. Use the HTML template provided in `/src/assets/email-template.html`
3. Make sure your template uses these variables:
   - `{{from_name}}` - The name of the person who contacted you
   - `{{message}}` - The message they sent (quoted back to them)
4. Set up a second EmailJS call in your code or use EmailJS's auto-response feature

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your Public Key

## Step 5: Update Configuration in Your Project

1. Open `/src/utils/emailConfig.js`
2. Replace the placeholder values with your actual values:

```javascript
export const emailJsConfig = {
  serviceId: 'your_service_id', // Replace with your EmailJS service ID
  templateId: 'your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
};
```

## Testing Your Contact Form

1. After setting up the configuration, try sending a test message through your contact form
2. Check your email to confirm that you received the test message
3. Check the browser console for any errors if the message doesn't go through

## Troubleshooting

If you encounter issues with sending emails:
1. Double-check that all IDs and keys are correct
2. Ensure your EmailJS account is activated
3. Check if you've reached the limit of your free tier (200 emails/month)
4. Verify that your email template is using the correct variable names from your form
