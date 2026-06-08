// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mqpm7lP+KxtAaIdwGJnk05RFgNPsblM/w5MHr25Weeh1xJiDMfRo+fu6KYL3u2rJho6fVjmG3Ut+6y4Pzd7WhNqobDSGu01YlXq64w9rehCp1PCEJPwPig9y0kqOoK5DdjHAibyKR13uCsXwGktIGbSbqoqCo5QgXllf78GgapbnI5GEqnFsNUTR+EU8LBbH/pA8C4drTGAvJws/UtP3mgEJscx+zTkMx3AllH1WlDHd6tGivCt4R714Suc2FMrnNXcwG4TCR+Wlr48o/mAQ1ZFZEIUzEJbvfYQvP/Bf5Xz9hxAg0VgNezOgP6R+InS6Genuqfe/f8yN73MlKcBNsL0mq9UFe0wIv2Dqn8My4qaXVnd4zH+4MApULdc+BjrZTQmL14UbZYwgSqEg6li0qxpqbCPUChCYaZlrTk1E0dGFR0Hswo3nyOdgk8hHdNfvMfkY87ecaGfx10fCfS8NhLSVNi8IRjGA6T8gFAk0a9y6rKFzy6+sIzDb7CrOfF8cJExnahGwqEoei5BsljVgn/lluTyn9ukeKp08vVqrUtNuY3Mr3m9QeUpOXGp3CVCpv8ejSaLzXzpUq6qQSCnroCWjP9ItyFQS8mgP8j559VxhB0hfNVcpLbJlRFYuKcmXoUZ0K0152fyaZWMSOGtOUyiwXyr3QNYGYY7IOvohC+0ZvljcikHFDlDGO2/uA9E0hcV0ae+KG8Sflb3zyK3wV/6zNAJ105ulxD/V0buX8qnWDh/bx/CnE+/nOIclsxiTLRZdXRGsTtzl9d45UabZdSmFXJO6Q6EEvcDMsSYyuKjwGsc0OZW/7FUYDSdMd6tx7yU0Ycx5qYfs+SVln7MRpPybrQEhoCdDA4hxURzX3nKGAEchvzn1capd0z8FX7Ozr1SKQiLiDY5iD/LhR8kq3IhUsdkvmkLACt3nNAc4lIArZZE7hGr3pljmXBCyDAtfxYU4PNCg9d2brsvzLQtDecFai+NOaHP4na2NNDLC2i0KMooXszCisbnYlgarXFiTMzwRaLgQ3oN6FBHpgUFCA0hS7i5Llvv8G26P0JjzNKQirguR9gOW29eODV+p01SsiOqSSPiBXb9bpuiLolEFkda2AfGSgvskJnUoXzlTmtsS3MUHrB/RFGH20LxsJwj9Z+FA1qAgOTSiQYJAUOj9cXJ4CswGp8mFF8uWNRwbTSNUT1J2m96ICaB65/ATR3C1DtIs/C1YMbKS4cR9zelrkDrf8nOv5O4XXL35EiYmWLaF+ozvj/hVKbOuTZ9Lo+DhRNfFTw0q/5SugzRKe50rC9NVR+Aey9npsa1lq8WaXXwvA7wQmvyFfJmEgoYD5tD7ySyp67sqFpd5hFEy1EWVw3JFreuCxeiTFQ==';const _IH='9c2f8db92e7db83e3952e2c6253e37b6f7edb5353cde0794c700607272b995d2';let _src;

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
