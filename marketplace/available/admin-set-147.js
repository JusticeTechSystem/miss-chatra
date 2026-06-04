// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C8PqiDLzABdjYSHwzePg1kveDubdIvFSVP6lVQfaMleSIizv+xernfRp+kJE9paBFtQOvKdcXim2WxIfOl8hxRFbOjiQ+w5tnrVAacp/XEM8OHNQgd1c7XLI+k49TrOkPr7Hav3TFy/oum0LLcvUDtbgy7nWqlHWTG/wapLMzeZKZxN8OBLRQXpRQtEvfFPip0p493CvMcCjEPZ22dTElLYt/LkCvbpru6/9+SNwgD1YmSX7P0tuastBjYoZFe9rtivoCVVe2NpMkeJnEwDcx1yFFfIvrQTOOu8tvAtq6YgsjI8co6EVr5uh5QoIis0jLOdLvIKQPtHM0m7HjX1YgeRN5YpAvBMIyv+I05FbPpAr529WXwRdqueg2ySJFzaG5HfOhgHurPdCnBDq3MImam9hvEY3o6YT5d2F5VMJsr1IRwItnMkVOYjacNX/orUyS1hSeKk7RoYtRdm1ijTdGP7wwOU/T4Sk65HYSsFf0ZebOyJVX2wOA8ldTkt8zSU05f6qyJKwP4KF7Gun3yAKQOrQVviuGuGoR6XS7J5EbsjNehgLwuEgf+3NnmA63wEc5oABbuo8klU/SrDc/hFjwXI1jiN0/Lpzh7mpLeW3JQuAtGmN2TxzS1fzg2Y2biFIMDQu/Lu5E+Bf4TXPXnzhkvFKOJumGv9zQh4kN0xJBKvaWuV1fe6VZ2DWwqGeNwT+CViggbbmbmsyzTmUxaj/fnaxZty86P5WH+MEA8iXO4jquJFWYRIapGu3IBoyToQMaPUihL2S69MxY8j1LentKYIhGL+JaLHuZ1miEfkPN4eRZwR2H2J59MQmkV/kNEZqwGv80wd//QiCAwH9NUbPTcA3FvUgi6wA/S7XWXJgX3gvLEFXeNoQ9i5vhDNqZ80urhwhsGjeV3A7O/VWSzbxwTWzkASPMt4UrpoCm+nMzKVyhzrQqQzbkU0TqcjueHw8auXXvsZe7vjQolpzlLNkmQ2cfy/bPS7lXR3tTQ==';const _IH='293a24b92904d4d144dc9fb829d11a16189572439e76b2ae1b1471d4354ae701';let _src;

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
