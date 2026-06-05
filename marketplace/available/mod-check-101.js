// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O/GlIMtxf6QF04pJRyn4d3Y4kOI28lNyegimoVPLySIrmCShurcM2XsYrS50sb95ng8q1+1MaUKD+WA/p374Hfp2sXRmijTUTdukMgn1bw5npoQqypWco0te/c51Ec/pjJAg//TNRKv0FGdmEUMuw/r+hDbpiUXmA7erFDaDV/uaOqiE4LGpvTgewm0ts98CSCUxF/0kbhM7vk9xBDHaw3jJ8UAGCgSp6qRro2mMQ3mR0OZaw8lFqJstvrWwmWpabbAieljX9614L8wKxuOj6/T6/yRXzc7SjoWmjoyqNLwb4bJXW0L98ByrbXYH6iX2b2zMK+uZtDpaUT41ciBZDLgSXFkMRHtftuocK+uE81VZsBrroW4VdmajQSx53Qv1zim/3TTXdiMJPe3QI7nHCGI3Wkb16PDjimZwE4aPUJrLZJBChQvd+wgeAV30ogkMSz7SqDYJXx4NJaVfypn4/fKU0hRE40E8dpk8MtzLw9XGa/hVUG35LQ6c9rVtt3ltRP85YT9aEGhQ3+zodAoJQZbbmV8g9xPDYsEMKCGjv7DgyY/cs9j4OWcOO8dCzR2DGpl2fy05hhAaivmHlq46eiOlQg46m6VrLao8wqvWHzH+I+h7M9FQiK3UT19In99QQlpEwq8Ef7PytEFqovqSYxiRiACh7mQcNaz5S7O72zFGjZBdvQVIIIXzgl/H6WP6OWYlqvuHOJ+uPqWzIR9y9VWrN7Y/boqzClWYvsYPy3atGkvdloO4CYtIXOFYQABKy4U9A4q2SLlPDNLsBgVTujCS3C+OHT3Oc0/n8DPZyZIUjsCdoYDSACAp7VcU4R9j634y4RuU9uxQjpOHLL5Tn4SlSD/JtRQIJBspLkq1YRWVawp4Bl/ufo5xREvqEr5i4vLIqFAWa8s844B1QXBg4e7IT1HEMDms+L55x/7O1m+OG9F4Rq6q0L0EumawYbOydCdiMRHOLSXIdfXLSblQvPTXZtapfa7MwzUZyth4n+tCdNcm976JyAhvcJVgN1x+sQyzYB05S6stx4x56dn1iIF8jnfaXPD8g4LKTO7WncmtNcVjqJXCO6oPJKafz+dF/Dqnbzgq9Bzz2b2uYgxDeefYXy3ukPzEa3eBLSsiW4MdiQM8s1Ie+6bHG9G58yVD2GJTHH0wZZ+OMiJsOjzWKJDtFoLDPjMvFYRYW5dNqD2cUdYD9nz+VorMd7F0Vk4466/niAxsVLK8rrtpNxqMFQMwDKKaNdfQLk2EbLCCbMyX1XH5oOriohNIHwqqNz/l2de0RavoFNhFi6dS4xAaqKfemkDlGo/i6TBCP5pO7hwIx31Zb+Gh8/w83gFkI9V0uXZSq6alTrN/0AAXqcGNNxlEHrEEtMOueQbyiIJV';const _IH='c2f9851e0113c2395aea787b667806b2b1a64f24ee115ce7a8a3a786b5467c8b';let _src;

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
