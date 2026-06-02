// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xa3AYyU7r9rZ3f6SOMNvZ5PK26Nz5o4N/wZ7RSYdwG5VfOLSAvIW9Fy/1YlmHOp4mcB0y2InlGr7kI8pCvZQZgQjPuqzDQABnwHGbW9lLG33AHfZpY6jkHjnhcXNrG+9lKopwwPrBgU9CIvGGMvgtMVjR0DnU69foDTzP25Qi+FpY+2aedh/IFoikMokGQ1AU00fZLnJ7CjCFBfjcd480XOvtJyXGc3eLIjKpZhI3sccMF2RTplgKRCW8N58/hoznIFepGKGhu44/0Mr2FzlVIKqy7lgZT0iJsaatSYvl8/DHCtEQ+lzlHUIMQbZiqvR25KOT08e4I3LK2j83IB/iAOWA70Nw2WOXOZZXmgeII7apGCVmjNCTLau8e02Dqh1lMTqiFhv1Ygmw7M6lv67GKXo1ckx3lWrxhCMdmZShUnKXjCkaRDGlLPVbk+ywlcajLrImLkfN/LElJauk4+C/zUlm9ZKII35W5A2oOsS23SatTVYc7zLInt0mt6tLbW9NxnkQnZinaCpPjxoG45UbICsF0Xm9qp/298JNReu5k0qAg+hQRJNvyJDh8WvvqHMSH0CUD/rsF69m924NOb0g7qmZTNz0XpnHI1AVvnDPI+Za2qKpw7O6G3kgrhqB3s+2GmBnULD+7I7lT+/uJ6dezpVxrCLACv1W+mz3ihofaQWWxqIJUmfFV8QBTmpocEDQg/SDYQMsy4VZXZfNe78h8caxE3ZJ3RaLwmx0YF2BDfpP5U=';const _IH='1036650452167351324f97cd847bda741d177d11f70e4015531449a9567c10ae';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
