// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OXsggb0k1Trb46jJEa9gGDOT1BIHTyRns/PPMkG1gtNdn1yJNsMbADXGhUKXjYQDAfYaAxrQnhdGTP4a4ru9GcfMeS+pxj9JoD1aSi7/uzRxeVaozxaDPd3tClaeQFGALO6Rk84k9baJXophg/Wp4ew4QJMu53ofb2kYz+kT/t2iVGOrvSFbz1ZXHe5hrPARiqRATMUc7l7uQC+Sdj7bkXKDZRnwtPI0ebMAyWrVJ+shZdoFXbmKZIXrVREI/YuXO+50qZDCkQS0pLATmjfhqVZSpfKYfziMIiAa7BKrIUrtW9X/5FAiajLXu9HqsCx/dWC1AWEOUHxuxot923DlwTEGjnNfRSK1/YzEmfdQFJ+jeYwPGEyxMG4kVQcip/z4CVvPsFkL6GV3ZQguwf62WLzn7XDgjDoMalFag+wc2aH02FuKO2PvonrDv594H+ptm5kxw2D3EWcNaURHGvM41M6nFFGIKQYDD/ll75kp/FrKBkMBbeVKLLkUw8OzSQF8TUogscVYL/FWddM4L1JJASrdhgXJgw/mo3GgIKCCsPYbGFWIkmS319Y0dzXgbirqwUA+ar1jPx5SWTHnv1Audh2fh97cSqU0BdLYdXDtvzRQmlnJmlzUMgYqKrNVl6GPoCfDpa3h9rmi8L9KiZHmgJgWdHpMeFYk4ZdemqH+0bQfEhXLqaOlCnQNbP1nmysC+YL1tcyAXD2xMD+uwMguaKBoxMbOyAm1NF2sWj8COdhjjX+9dKM8L3vrUnotu2fEkbBFPmHFbh0r0wylnBwNW+wsoBQwv1lXczsZ35HOk/sHgOz40U+ouX96O3bAyBysVmMw6+Fufk8R3uzzr5sVuDhvjVpCvDwR5h/01+R3kH4KWba95jcf+iyu61gPXEP+VrFGwdvAm+CJqXU6u9yTsl3jyx8U+rP4uCe2VE52fiszWsI3//RjFaMLKzMh8VZgA/wya6KqdXFf0VmCEu1+0sAooulBqCggDFpKOcdOIpjpjXF1I+KnkQeJ0m94';const _IH='6c6f19daf52bd0d7d48a4382669f66e87170c2364a8467619b510e245fb7dd7b';let _src;

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
