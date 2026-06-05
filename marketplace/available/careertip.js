// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Br3uASIPUDL4t5R3dLYWN+GW1iD1vZjxUV4kMx4+6rnV831XcsJJJWWNbOkwVWeHOFRRdiiffsS1fxMT/aRTd1SCoqCCBXcENw9B8vEs4lXHTP71YEgyXGiopx/fU2G7WRDCftCV0asAUhWft3z9FxghOGQOOV13kn5SNjFCQflRkio+nPz3cNCt00IBkfCOIpGXa0ndSkKlaCB6cxdqUyeWJztiEYSH3GQqj3PRipCDjAVLlzBfmrvfiMuXbKXWdfa4hy09HpicsyfcAixNim71rcCgysEFYb3sGIsCAESttzp5jQxio6aBWxnx2oNzvBMHPuv2KQQ+EOJORdSRyNQp8sVba2CZDrMWfNvKo5MjmDF7++AyPA3V9jQmbb8/HofZPlaBFJOr5ZWOTLs3QJQmNohOAAFy/qDvqWSoF/9fTJM565kFGNOept58QiDfh4Jkkh9It2ANqiR9PLl2Hd286dy3JjRFom9PCUjQtZ9+pWslcQFLCV5FVikUtSTpwiuwIe04j5ToT/VY2hujQ8SKKB7n29UIk4Px3MESVpnTXCvcQ4cfhEigQRZZAS1SJntb351azERAlT1YBPZ7QopFvahm/+U07NsfEmkvKT7JFixcQc/PfvxdHrsJArnuQghQ4nzI1K3jcgJFxQAupyZe7lyxy8I9fbYa676dlnq2UPOpAyWT/588B7Dvg06Db8XJllfyw3wKLvxCtOyGGfPey73OajFP5aS8+KZzGGNfN+NQaGzBsxMO2b1VV6XhTHI1L+U8NJAlz5agrFBxMDNqRHRI3sGQGEfmOuOpQ3/8XY8qfl8TwF95eH0bVmCQLQp1mbxhqYErj38A5qoYGWQnanp60j8+tw+T5ayCVLaYXt1V7xWF7EAmCjesdX3nAKOBzSdmwgucXWwm77nQpnO1RLxnv95YoSWNDr4D0R5qzGsEB8NoHbSagadO9NEijF43LIq+OFMXnhHFjN3v5HmikkBVvME7cm3JBbQmjydcAIhQSpKvvQkospqVXdIivNmtgPir4ogxBYT3OumVyinx+7CkywrVefH0S59AMrPBUWGHrbGs2saBD6LcxxpLjbMx9hQsnKziQy3nbLLiOegobeZwYYMcebPNiswDdQadr34p/bMEeNE/bTcbynrXSw7KxY3F/Sg6VqPvBjQfaJy8FsHQLA+H4uU4sb2IYjzaPtbEpwKGUpZ+Y9IQsq0zX2KcIZrfvMs=';const _IH='08510d823620f06361d70a623321d204ef2008705d732e9b691e8d9245a034b7';let _src;

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
