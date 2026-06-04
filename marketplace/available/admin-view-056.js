// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mQqRPYN18LOWZAWh6yUe9gqOLQXWGLzlS+irWzqq5Bq+PJLnNN7o6GzKW1IsO2Q/QyV12ZkM5ucLAeIF2sPYUAkgM5LGki6opNFbrsSk0/pz6e4oDCk7y6fdYKCuhg+rrVSgjHNNBoWV4LCAd0bp657v9Z1E2PjhCbIiXazKl2cUTp9RANAGXY8xX/qGYjreCvItn+8lfKEfKOPuI9aapwM8+nH7H7P4/VzN2YtA95CP76CPcfSVh31D34HbD1RaCA+3nS+wLzodlfLDtzQe3ii/erVtdYTxNHFLu3rEQcNVUVURvnLI55c+4X5XmRD4zYeMwBpKfgdRx692CSXTiOu4hMrQ7Bg19bAXGQsTrAmWg6rpbf7ShBTEM41geCt4a0JZvlYcxWGs+26PajZ9dpitQnKY6fD0fjy9ZkSUy8rCM+dCKEzGECCY2awW62jcSHlB/w3KCD/SNSLCIn6rS2HtAU9UemkXmCdSd6UxDrAyFdVyRUu4VmSYQtw4jstdLvk6xtOHCTCyq+VIf9fNTSJ4ysMkagZM4aJ1EGyEHD1fjudFW/oGVJNib/Rxg/OtrinMVQePw5CKMWgWlJsobw+HTgEmfXbPNYnJWYImOcwrLHO3IRBWDhTpTb1/xzAZ7X5SG3q9uC+m3/JWaM4+Nu8VUoCioRKk5xVnv3F12SXOGr8v5rpA5TgLVl7i5ZvXabwj1L/CDlznX/zMlqGM0EUylKZmXPBPE1OoyB/gVxN6icsHkgGvj/+a+lA7qsG4dsBFo31hNhlkTMpUR2iTqau5WogHjIWWTXd3Cdp5a9Y4F1ALR+bLc3UhnTFiSgnPioj4mKA+alfkeVhk/gsoNwUcosHSFZ28/OH+R1E3+Cy8RTV2JNix/U9YEf9DjP5qs+UQ0OnUyQN6lt6nH9riGEKi2d0E9VvE5kJy4g62IwQVcwpEqeCXqVG5NURWPfXKYJwCU24/9EtQMMrI4b57ZIzay9fxI/3N1ogEjuWO2Q==';const _IH='9e861d09fa945b6c544d5c36c853690eaa8854a1446cf1d8561e0959ffa8564b';let _src;

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
