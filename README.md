# Nyika Statistics Website - Temporarily Disabled

This website has been temporarily disabled and replaced with a "Coming Soon" page until further notice.

## Implementation Details

The website has been configured to redirect all traffic to a "Coming Soon" page using multiple methods:

1. **Vercel Configuration**: The `vercel.json` file has been updated to redirect all traffic to the coming-soon.html page, except for assets like CSS, JS, and images.

2. **Apache Configuration**: An `.htaccess` file has been added to handle redirects for Apache servers.

3. **Client-Side Redirect**: A JavaScript redirect has been implemented in `js/redirect.js` and included in the main HTML files.

## How to Restore the Website

To restore the website to its normal functioning:

1. Remove or comment out the redirect rules in `vercel.json`
2. Remove or rename the `.htaccess` file
3. Remove or disable the `redirect.js` script from the HTML files

## Contact Information

For any inquiries during this downtime, please contact:

- Email: anchinga27@gmail.com
- Phone: +254 724407899
