// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bpdkJtPOjwLLN5ynPs76fe95NVGf5vo8OHl/Ao59aB1oeha56q+TGUHOVMUNi0+ZKAoARMztElf28eszkKaCQ35CPdBqyPKGczZ7ArWCOTGrzZ4XIRhpO/KAgBXc2MTHVOoJkbGgmmY2MrtWBc1sNy+ba2Sv10dmDXR9ntonSlula20LdwCyStyn8uMpkEq2r88f35zpYyy8mJGEZg4mJRgC8o3WrkE8j6j5VhUbq/yEBvFq+dDz9MxgZUqmpllIAtPgOzVTSlY/Q7tZsRcQd34MiKEGARGgvEe5STbrGClYFAm2BJXPKCRc0CvJFSXANtRTAvgCmm6hHRAPebt5Iigr/0fVQSRs76ehiunzJZ3iX1GQQEPNlYLrN87flYfFoI3/JfETOPjxZeF19IyjL6X0oQKqU8lcuWrWHBn9D0lSbpJFHxrIvEfFCDf0E4TwLEaJRmXHXJiTcfwHNyZqtLzlEEBFnXj49pCv8jhfLgSz0Ra9f/cc/BWaLyRODbcBhL2q1RU9yW7UePpN5TfvKuafUvDFXSqV5ffHGBLQPrEZxpQi1rWKHRMEAqUfaTd5FfeNmjCyBbZBQVPGytL8bMD/nSsOvIJvmyBF8cG5/DzuF8kT3LIGhjxPRdJ8UNqFXBffg1MaSHilfr63EIFo94Q6htmHJL0+HmkpuOgpWYeQn3LQM7xBeNYm+siyKE/ELzGGFIW6hyMy0Rn2u8bHBPtV33rW7y5Frkv3tFWrHoZ7FQ13b5IAzsIxtZJZTPId4WWkPYrhLemSIh+kNvvSEUnjT08cDLQGo6uvInhljkns9zsAUnFSAxNVKnW+V11QY7q5pzU1yGvfMIzxnHcWXncY5liLPg/rgQ0suUHInoFQlIdPlM6ZUsPEhyP+jQDA4q+kQKmWMPLueP/igYMEmrhnjbaqQT1qt/8t64PSFJG0EmnNRtaglrFVkrg=';const _IH='a365c102c97882aa549a6ee03782617661aadb3e2bfb2332ebd9b2449018e5b5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
