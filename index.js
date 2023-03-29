import express from "express"
import helmet from "helmet"
import authRoutes from "./routes/auth.js"
import adminRoutes from "./routes/admin.js"
import studentRoutes from "./routes/student.js"
import cors from "cors"

import cookieParser from "cookie-parser"

const app = express()

app.use(helmet.contentSecurityPolicy({
    //CWE ID 693 Passive (10038 - Content Security Policy (CSP) Header Not Set)
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"]

    },
    // Passive (10021 - X-Content-Type-Options Header Missing) CWE 693
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    dnsPrefetchControl: false,
    expectCt: false,
    frameguard: {
        action: 'deny'
    },
    hidePoweredBy: true,
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    ieNoOpen: true,
    noSniff: true,
    referrerPolicy: {
        policy: 'strict-origin-when-cross-origin'
    },
    xssFilter: true
}))

app.use(function (req, res, next) {
    //Passive (10098 - Cross-Domain Misconfiguration) CWE ID 264
    res.header("Access-Control-Allow-Origin", "https://master--warm-strudel-d45ad5.netlify.app"); // update the domain name
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //Passive (10020 - Anti-clickjacking Header) CWE ID 1021
    res.setHeader('X-Frame-Options', 'DENY');
    next();
});

app.use(
    cors({
      origin: 'https://master--warm-strudel-d45ad5.netlify.app',
    })
  );

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/student", studentRoutes)


const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})