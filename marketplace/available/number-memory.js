// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hfns0c9RuRynroGWKgTX/qJen3Xea1pt6wyx1Ejc75L7pJQz6KJCAE1zPxdBOmrN40/ZEYPhciuY8VWpJwkvDbCTSNispHuNNPTE6nkD8AkPqxt+zlqay72e+C3NPI6s/BQjeao3OXM9CiT8OEbu8EltlIy5a8bInyE1bRIPoalK6tSVDHo8ZcRdMWAapqd+HC77CpQXB/x1UYNIuUsSI4seLcUNUedQ3HdCzxnwH0GM38a9AC/+bSLqC3CD7gc3w/6vC+Txt0BZXhtj7UjcV8kHj2TizAYzQNQEtLzdcpjhq5SbMsiRLjzZyBDxrGsQnJYexTQCekQjXBQfvleB/3kG17Cgspa4SPe/HltML+CFJjB6VO5FiuGwqb+WDzcI7CWwXJxwPC7Ile7i1T5MzuV0L3nALlEmkuWFMr9czl21apCuqEDPydd2t2x9+g12wXE9W6HlAbaRzOBV/XF6Otyqq2a3Z0vdcVb1yf6hZ9tCiXfOwgCyJdZniTIwNqvVEmR/P8f+lh+DJWxtXxyVOk6AgDtDO1X9pYONb7dfKeHn8tnGPqcQB1ihMO/AfhLnarffPXnPRSNIS3XfLMF5VV+Fu2DzgK1e6RavGucXIQS9wIqPc3VRfUUg0DBSbtctST6DQ13KClLrx3eF1JO8/1TogEfsER/KneyQ+tiA6VHymOIWRx8MTQVAAhX6Xxtll44oCJX5WPWB1kolqN+yiJ/yEFnMYPMS4+oXhadaq5ZcND+zVQNYr1eAXFShYgDaOos9uetxRAsW9wiKWMR7KJOhR72haJ75M/72friWKbqy0Ogmljl9n+R505EGdIxM9BNy5RNDWmkRSYfbisH77DKCg7s9CfBqOY6eHja9uopy3nCl/0/6YM+Ib46uvtchN5EIgAU2ATDi6sqqLfRL/BiwEBLkmproqgaqxMazIuUEp5oWqRTS3w8A8qwfdNkovh6zxYpbSD+NBaXPB0MAhRuB8w9eHaF5TFEzuwhIMder5AXlMdyvvXG6Iwu/Wl5Bq/jCHMqfOgNnU+5n/4Ea/pibxnxHrkfE0pcJfotKDrdaOgc9u+QhPt/sSGpSCBafXkJs+x1uYaeCN+WoAWqWQSukbybdzeT42FWnqerXE7WpDumk1sr4WcX6yOCYs6UnEyOvKnN1jynhOYqWfJbqPNm/1pApNwssgeVFdB+25gBvWoSj4BH5heQi+bU3ivqBcKVIRZz3E5Dhz9J0xu7SEaYI3GNNh86AzRKEZAGeobNuI6K1duiO++R2kNEdxKu8w1gkgH/JSNNcZI6oNNjx1j4SPHw/hIKVjDUnTYXFVNYUtcJn/XEje4D54+oxiZtC7VPyxYqR0ZHQRb+lJr/f1qTmzJKyXBGWfrs61z/fE6eHTIfF8niYnHu2iD/ksVxXlo8cfTKhhS0/SoiIoLDRyD5+pa3JAiRCRpF/y25XPC8jVt0dkIctbJxN1vSiw6+yFpCW3QrIccz/YCstJoyid+hT5wEq/X4P';const _IH='67cb01f7ea7b78cc64d52c1314e26d3aee0536cceb6e08cc202a4a15978416cb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
