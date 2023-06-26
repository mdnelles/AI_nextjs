# AI NextJS project

<img src="/public/assets/images/chatLogo.png" width="80" height="80" style="border-radius: 5px; border: 1px solid #333;">
<img src="/public/assets/images/mongo2.png" width="80" height="80" style="border-radius: 5px; border: 1px solid #333;">
<img src="/public/assets/images/next2.png" width="80" height="80" style="border-radius: 5px; border: 1px solid #333;">
<img src="/public/assets/images/react2.png" width="80" height="80" style="border-radius: 5px; border: 1px solid #333;">

### .env file NEXTAUTH

```
NEXTAUTH_URL=(i)
NEXTAUTH_URL_IN_PROD=(ii)
NEXTAUTH_SECRET=secret=(iii)
```

-  (i) during dev example: http://localhost:3000
-  (i) during prod example: https://example.com
-  same goes for (ii)

(iii) can be generated by running `openssl rand -base64 32` in terminal

### .env file MONGODB

set up a free cluster (shared) or paid: https://cloud.mongodb.com/

```
MONGODB_URI=mongodb+srv://<user>:<pass>@<link>/?retryWrites=true&w=majority
```

### .env GOOGLE AUTH

https://console.cloud.google.com/apis/credentials

```
GOOGLE_ID=<your google id>
GOOGLE_CLIENT_SECRET=<your google secret>
```
