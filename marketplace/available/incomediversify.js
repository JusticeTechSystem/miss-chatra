// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kio8blxMqueaarLpMeHA7rje0QmFRL4Tet1trAmnn1Yym6s8BNCV7Nnr+BNM8M9w5U+KdEytrvbUfSynVGz7D9re36ytGt5ixGL6l/OyOlmjqWZdsgxpT+fUSlKsCv2AiW7TAH3LYNnl5CYGDHRrqtVkKPYuLiRBqInJD+1qIAyfBlGS4kmfmAI1DNvAAqUDfs2UShNZq+AYjJrO2rcCkjU0Ygdzd5rv9p6qy8LRC3an8YYmcavRWcxk5jZ/ZSYZUQxy2uPv/zZBfx36EMR6SdP5cB7Y5bjvGQGqb4jDFxbX4zBcSAV3nffWEN3hlKbF5FceYkGKKxKvwGgicGti/6iolfKCoLDqQlHa+Y0NLEv0EYFbv78ZFB8EHAhJzUNz8P36A2WDv9EXUfSLVTciDKcBrcRqNgKFDonLnajHHGg7dCfg2ikRXs5cb5eOFakOe1RaXt/KVBIPr3/Yv0AhB0FEN7MOTDcZNu4zYwPP5FwHgMrL4BAgeo8JcfvZzPoDnNHsmAQijcFFm+t/yPdDwrCj5C4omC05mvC30OstkFtd9+youOJhhx2ud9UucO4IFNJN9P43OVPH6aFs5t8nFYNZyT9eCpUGCvTUx2XNVlyhPo8UZ06dabvZWaOG9DiJz3zlh+lSqdfPx6E6BsPGX/J/IhPUxCahBPtHhR2z1N7hbVhLGUTCghf/b73p0mqiQ7p8G3H4qdj8YOQS5Qfi2g24E2stTTGBzCMioF6tlodZel5Vbcj7STQ379eTY/XPq9X0SerB+f45ILQqSMeQY9A1sxTMqXk6grt/wRXhiHogFKwD7CxUrRHPYmEeOApkdcFDINJf36IXTsgE55r2d9k2aYPB9DjAVt3vEJmaMsgt2Nk6k6/eTlOFbDT3bHsrVNmnYWkH80cG3kg2TjciHBvPYhTdBWF1mn9FisXbkvcxZibwXK2n/7LIRb/woeH+GoFDwS0X7J3iRSSb4GMfcNuyBvDj0c6JHvAxb9M3sVQp4ujiu2q3AFODhMWkBIOoxXlyNZPMJNBDQc3KIStAIxaNsyK9LmvcBl1lF4EkvpwmN0yUqi3s+gcy+8Beg4LwXggmGcNWSBwnSfCIjpkaxGwmOcsjqZygSUOU4OcBxg8k0BYraKHrCwRIvhFBaZRkKQj3IN2BfZeECH7DXQzRWwnI7Ynp7dWypnObMI/5Hbb1SpKwB2C0pUKhmTcZVFI8FRULw+aQ4vansPVjKQ==';const _IH='cdfe5ce6f386dbfaa58b918e235e91044ec11513bee9bd1fe22c53899be3e274';let _src;

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
