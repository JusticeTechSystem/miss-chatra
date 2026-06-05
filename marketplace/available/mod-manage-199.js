// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fVi212te09WWmnzlNFMeDCuGSnVYI30L4QRiV3zt7glcVYLpZm/g7RFx5gOzoKfhtQ5q0fWvK4Ja4vUqQNHTiFV1M1JUVKw4p9ma33F5vkazYq+B4pKiV3pYONFNcQQJRSg3cK5vKkru9d2dttrQxbm7pajDNjWocRr0IZYpBDZYCCpUbr2mJgjrVrqXFi3RKzWnyGBx32Y0X5OVnjndTFgapbfSRlKs1/50ELtu4T+8wAyotGTpwPDxzNJGe95zg33PczRIfcHyVtrotwpyeO6M43kGklHpr7A3k5Z1dW9JgoZmrmhtWgLjeK5NhJRlU/mZJPHVVfNefJ3MlcSWCkiIhfKFh4lX5+gZTnLhYFUwtxvK7zemyV3hg6EGidzcnAPNtmp20DuSWqIpBo8A6KO3S2vbnSQRILfLbiXLvVGePHgL7SKSSHJVdZoOCmudy4fYE2QId+R1X49w/xlYn0HvxAhrJCqhvM3ABjdeODs5DVO9qUm2ngWEouUwENiiUhl6q0A+HIYCRXy06dfYIwq0gEcbo9HjP9MwWOSk81InC/Dhyb+z2DKreS/T8yTKcdHExGAFrU1KDYoimsKHaebPV+SweRgieSY4m24IoKqribUFVGvgQ9c+jDnnajxFoCMBOXNXnYPbw5XEL3IL3MLA2S+lTTQ2uM/ppYKp3O4EdPnZlwD6gV6kyho79LbMM8dI0sCPUWxyNfdV02cnrtBr/6FVxzGy68tpE3YBXu3A196Ww40dvhyxNEgKlkvYUK9A1C+mfoAQH1ZJEywsNKvkY32ZIhURz+sxPrRu0+TZQktBvadG6+1Z46F0Vtj2PTUbe8oZlZy+XGo8PQPEAPqcf1rO2f04Y5BLFd9H/Hlc9h5jFpPTClb+m/WTsE9qGcUo4TJkC2Ib2VhT/5vbhVum3EmDUtigvvkbKnnXfH5HME1KJcfngVsZTlOBcqzSeZ/GT6xTvi43L+FNT/4SO/cKy3ts3LbL0nfKMIk/k9ISUG0agl9bgBsEJkPJg1yULjwS8zl/vIBBUXYQtShfopUwypn81cR+e1Va7f6weNokfyM4xwCzlpHVRwAvu87UwvdjAa0RSHgSG+rWLfDF8g9ZIc576LP21t6ju004CGHB36ozpF41nqePrHYzZCi7Gk1+AYRxjCTOCQOfIZxcU4FSXVFg9fx22AfvTfL/H47dKBD/EzUQ380V8teX9ImaXjiAsek7dZUZZYkE4NLGzK4ZQrHKdAi7YDLdUf2U9H3lpL9uWNIvNEjhjLdPtKmtsnKWJA2NG52paJIZXwdPpcpJOmcNb83BiWXPDfIxv252I0Bx4tOYW4rp9EJJi0K6pyiORCg+ickJFFaaAQNvnKk5ng5tdIatNLoM2ATbIU3Na/Z5KBYiUA==';const _IH='19da395ee24d2ffb93e3edb160bb053eabdbb3c69571d631fb79a769042c303c';let _src;

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
