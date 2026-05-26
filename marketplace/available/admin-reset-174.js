// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+w5Y9+eODCKeJ7nPENoCROdu1uUqagljubvfs+GvIp3a9jYW5fJoK+dwuokhf04rzboFn61HOUukcVWlWNSjYqkiKvW+Fjo5HcQg81yeWtOEJhkv+gnpzpIEhjzkTdXG0PV+CaipBFvVhZvkZrqyJ+HRKbKmjSYl+ebsPP7Ojw54QiNdKzyGaLDTRta5g4P8mXaJZ7LQXvAvHPRobrbzaZHpeB7WN8Hj+IUxajQcx3DU+URjF67R2DEPWD4/PwdU7L+vtUeAHCElM5jM8ejUfHKGqxtDQNhYIj6DTMkQ2hNA5HhdNbHXNJKIotDJsXz3UUU4HuIzVo8e6dBTRWL52Zawtnl3oaxJIWLgMH5trkXgL09CURti74LLAb++BJBGjvWapK3VblcEHnxDQv4/suX/gHCJBSzbrIO+O+yrbJEKWVzcuNSjj9DDEs7uPBITmVtv3bJPhJDUt3xMjKIwOs5SmHhp9nvWPDn26Nplq3lKZtEOPveBtbimEjo03wvwtfC1cyhF2kK58ShoTy2pUs1bdX/46Ybt/cpFJSBtTNSjGJJyzlqZuWpT3+gJ9tOiaqV1Cx0QmhzpH0Cj3RH4Cn4FTFSz8vaG1OnqHcOlE6M6aylO5NrSDyPiaeOq/aRK6sjlvvwK8+6SeTsIDC+4cPgCYDKIqcXhxTv0L3vMHb+gIrn0zADNG/4+pSwLXiJbkbbQl1uJYKJL64AlFDi1VHE1BhGwFH331+UycFWLPbd0rYOY57fpcUSgzz6DD2/WKYUjj6qmC29rhI06OZyPvqKVZyleD79lvtf/LIsmtdmitTgMITpiKMot0yXV5tzkp6DvRXvohNqEXaTx9aTcLU3cYOenTL+eJgzZw3flHZ/SaykQTVypW33qZzJouQIoF4Zh166EVe9TMDLHdagxEW/oWy9cEKEE0tjIhiVi1De4rP52iikMvCpHyyLS9OM3Ffp9x4GOVQLKfrnl0tP1Z611xfPfTz4niPkqqNg1Ui7WhxwlTkO2n8Sn';const _IH='cbe1fa218300314d5306411386b5ef41d6f0c9e6877fc076bc6eee34d72baaf0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
