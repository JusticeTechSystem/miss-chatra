// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UnvYnOotMLKklkUjWv7vTF8MXwGiSZw1dxs3SkwX7xyA/F7qvFA4yf+bSNi8NYbeutuUor8Kez6b64boNTRYV0y5jn4Goq2ZlMK7TrvTJA7PxYZTBgMOo7ylbQh8gerYPNn9ylOqr61CE41AqUpjix/W9TJMpY280SKK4F684V9OyAmNp5JdEzdmGDlYJZvCRF1r3GkQ/cpJR8Cg3cpw2gdQrpvauQmyYzhRH3cSEBNPIZCEvA7MJH1DAJqrRUrcBQJ7lwcTgfMHvf9OA0UNNKp3SPuro36K0wYgykXTfmCtl94qswG8k2QXPgyWzN9GKganD2JfzH11vncqOGwT5BaqzsMPxAElgYY4tNVILwsnSnsT1dQ6RWYgo9CAvpvPFbmK1vmi1bj+2IvKDF+o94bolhyARoUtT3cPBxkcl0WZzTTtq988+PdcMoU5+gCJ3pFqaI4RfyzMSeKzl8O0ZfiYvjpSSNJFlNQFdTZ3w97HRUwSR0gUPzesIaGHOEZp5A/UcIHXiVqFh/7M0t7o71VkAeDcjbWCND79hSCaoj6IZg9C/x4bSJWbPQ+k/6QzC7QH9Dh4izM9cjmS1aErcZwm2AzRYjjjMNq7vXpfs/Vs+/iLj1CYXCiPmbpOtWbDWgyo3Teai+BZ4rZvh2gPg8uHd2Apzc007YGOi+Vgbvjui2LvSdBSlTo8MkKJcq4beeJ7tdtGRfjoH6evTDc2RlzDR7+FQe2xglEr5HDNPCz3CRK6AYV4649W8obUcDBC3qv63USgTZvO/sIsd2rnNWsdK6uXG9WY4kooPNbKH+Grldoh8mCd+wUaBxkg+cB/WQIRtoOPAJqCBD/6gXQY7wVdbucQ5qkfQogiRIeEP3oFcEohsC6q4xb4W050omYifL9IFpc33YHBVZuOy0wxQhSb9KNl/Xpgy3kPeSjfox47Q5e40Nw/aQWd3Cw7EFpKP9XNLVJ9sdCvMcTk70JMjj1bGDJKxfpvL22wuJ519VdzGbOlN/DUfIYLljREDTpnSGd2T3V7IWiYsJZ85WPkpspqw3kC20bWK3jgm9qAcK1ldT04VKjqxPQo5erBuV48TlFmtMgzwQMVI8T3dIgBixWfXQoXn7TOSSejYNGc6pY7+95XGbJWPOIE8CvP6ONqoZNGMvcRmz2TDht7Tdwy63KISDiUXnxmAzAomKLOk4cRJ8Z8NWMxhAMS5XYmpqSz0fUQFgoitPS44pdRWaP2/cn+S3QBWL7gFPP+BcKC56iZE90Ut2hGKCmupXHgDcoPrn5nfrPTfz3OsVP741Da0ObTReSUYa3mDbEcTmFND7fhasZzzDLqsZyDixGchteIXscN3ARM0hyUGuZE6FgNw42fG49s+HpGNWYLjBWGMf35M6IczKWfZA==';const _IH='76228c6af78ce5a0cf596358fa23a42bb408f0a0342118130a0da02f8afa5c3e';let _src;

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
