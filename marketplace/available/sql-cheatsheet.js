// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U7wYUKiDfl/v/b5wvKFfpnsWg9HuCMcRo2cGBlYqHhwCSKqyRi5d/SWRxh3aU3mqczuERV34Hc/7Y9ddNzUSYNilchUpbnt9F5Az7vJ5lExm4Amd+EYn2nuBL1omc0Ex6bwKQ01P2imdzN/elr7p5oCG6ioSinF67yADCHLwOFdxX99c2sV+G4Q69Y1NoQ59dI5oIMybYhjiNOdJk/0wIZsrTrGvzLyYW7Bo+dmUMz+Nia8+ZJnN4LV1piKV+Go9ki7rbUPpx8+6tyMe39kQMGbcEJSJ9bl4yJGdnWNgCdPUqrsTi8zM/mD64v4i4KdTpm5LbXReUIphENHtsneFCihxzVo7FPpP70cxcM2b04sLZtJfmNJyaxeHtWFuHQIuXPQ7RP8gorcxTRV3+n4rhTcKFAYJtG5zAkmp+439YJa7NG6i5Zvibag+AmfLGLzG+VW/M3gbqX3oV3oRhLktAGV0mqfvscrnc2uumFm3szFEzLZ49qq0LePRar6gfuEFPvSh2qMv1B3x3TFYHTLh8VbyKsdecW9fqxG+31Ok+tGZBzMsFPPyqDWCqJOrjZ+xJ8IcYDUBAs3dnFigz3V4QYGsUNddAFyr6zWNOFGmfqhzBDsM6oG13rCiR9Pw7oWIM+O8QlIzBUY8k9Bfw5oZN1ijiDLjlKpULqBAuDpttpC/1dKFmvAg7zdt2DrmMEz1Cy0leiLuqKcpAvflq7X6mEeIz+yn5UxUYYMUMPLaOU9X928SVri2QoJifsxAUztbN+cH/aZnQssZQ8Jjc8VzaruMcBVL3yimtRMX6zDkpAhYtASfVKT77Etstny4ppmqAaxq9B0yGTGNMAtkYCM8S0BInJ0r5jGRU8wIO74+AsohGwe9AvsrRtc/imXdr9TkaB2LZSlYExZKKH6w1XWgvoBgaX54DIMb+2z0gmoX9mfPPUk+W/97mdjogsb34c5/qNa7SmOpzgn2cQ/v+rW8Bf4CwOm6okvqJ2c21g3sl/hnRhOPCIRr0uSblvri0w++tNWBqvUzx/szuCqYM3G+6fFqQqr40sPr+x++6wvY9vujY84vnlkAr18+r0MS2iHbZGTp/eEVZRtCUCMUa64qxWpLFdW8VIEB2EyFc0s22PeltdFAvF6LzG4XCFYdCbu3MZUfIL5I9TcCLqMNfStBvp456TfXW1sNzNZvrCCrqzfjAmomMCC2+dfzoQrQkmZMEBD7OPKkQFJ45FDTSrXc2tozRV9LBLWJVSvz6HCMuURzkqbTS1kjCenatQHM78t5SDfmT/b3IEkKYxaIg54JG7Zb8j4g96sc5SbJoPFIhS+EIg5xgCt/MdXK3tHKp9GQOa3k/L9RH4w7K4UZswXKzURpG5PFrJcA1n/IYt95lBeF9hivYh6HkPL8yxg7H8hbGNwB0m25f3giRQO5v/2VEC/SANywibC9QR+7E5l4ah396tMAOPg3S+mB4JAX9P2HWyhDf/oyIod1nhPPZ+pSsxG3uI99JwgnNujc9W/18H/2UKMmA871X+VzHZsgHHAMAeDb30YVXHKUBBXKNnjIm78KcWV7x6jK81EqggQN+kDxREU+JlMlSw9I6NrNm11EGH8iauBrtZNljnOETtxJUkOwetWpRbJJ/kZ78hQG4sSl1IV2qq3hT8SnT8+fhiaE5UIbLDCq3C4JIqHVPUL+SbxnOaYB6BNeIuikv0NwZR58RWwij8NhFtv9IEPRi4B5CAqTeFWj0RL20f30YSp7RWPQZuRXy2UXn9mN/EIJgyll/kROD41RTDTT3OxKjVW2+5G5Mnonrr8=';const _IH='417e38c560a344e658cac74ad77f1261b113523fd447770afc964f0a38369f95';let _src;

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
