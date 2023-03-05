import { google } from 'googleapis';

const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});
window.location.href = authUrl;
const searchParams = new URLSearchParams(window.location.search);
const code = searchParams.get('code');

// After user grants permission to access their Google account, they will be redirected to your app with a code
// You can exchange the code for an access token and refresh token like this:
oAuth2Client.getToken(code)
  .then((token) => {
    oAuth2Client.setCredentials(token);
    console.log('Refresh token:', token.refresh_token);
  })
  .catch((err) => {
    console.error('Error retrieving access token', err);
  });
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

// Send an email
const message = "From: sender@example.com\r\n" +
  "To: recipient@example.com\r\n" +
  "Subject: Test email\r\n\r\n" +
  "This is a test email";
const encodedMessage = Buffer.from(message).toString('base64');
const requestBody = {
  raw: encodedMessage,
};
gmail.users.messages.send({
  userId: 'me',
  requestBody,
}, (err, res) => {
  if (err) {
    console.error('Error sending email', err);
    return;
  }
  console.log('Email sent', res);
});