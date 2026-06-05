// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/xn5/TqAdHGOWJc1PKQJM/b+sBgq8TSqmW69PLHL5C/B4PdEN3YPgwZQcQMl5A6YiWHFOJGHSrviqmkky2JJYCb7NEewgy4whAP/6CMxGHDddtVkkMIkaIzSIX10lY3WJaZxKvUiZDyO2Iuyst7Hylzgk24RcfyBpvNJK8jRfA/06T6AtvZU98TShyi7uSzzJI0KS1k40ZY67A7icshpZMVmi3U80vRQZkesVQ5vECL+7LMrvmwet3QO0iFidPBUFQIJH6vvA1CatPY7rooSB3lFreDkjy3CfUrzIOioqB/YEPicTzGaSEaigUVriLwL8UuGwKWMWtcTi6MTj6xpgegA5txxXcsvTwbzNqeYh7u2sWsYr6wJsr5r9VDh5EaNQPql7bm2k0a8rIZxpDk0eDDxYS775aZPBkTnOcfkSXwUNyu7mv+1wbFo3yRkO55sQqj/fRelxwKwAQXAbDnnQjNk5YKVbUUgj8FhcQwx4TTfV+tCZ2SmNkjoe6VC/suYIu6ZdsFTmrtLCouBB4rcBpZNZ6V281fBdHw3tWLzLJcyaQeudyKEtg6JDyLHBNCZ6REqFNNND5UjXUz6QUniGoAkXQOJ+tN8Bg/WKfem4bNkn77+I4JVCElBEb2gEuFQYyh2Wm73O4SuHdZUGnbvDii2Q+IcjnEOzGCQA/nfdD1ftlXUHqpaCCD2I+YeFs0L0jVZtpfGhzMOPcyBJQUBg3iOI8=';const _IH='f78967fe20bfbaf6e1a42ce525e859869cfcbb41d9935768e74b7f62f1aeeb54';let _src;

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
