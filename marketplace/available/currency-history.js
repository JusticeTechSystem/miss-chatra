// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKNYAA5jxRHdNe99t4QRSGW6gBH34wo70ApUyi3A+kTxeMkkWPt/bCyOqpLvXNeW08140Z/bxCqUlEJeId7yfrATi3RVfB1EbNDjVdhFsfIsLZDu6d2YmIG3U4rYxtIz7cnHg4+Z/ST4Cvhb3xFWm8A7HMEQZQJaLlQ77ru0lWZdFXXXv5Hzcr0uZIuwjRfPMq0ZTL36ehIH9RZlnALE9ZI9hNAb0xrBc4dHal90f9rSyoz0yQJY+cfh/L7wCvteD51uz1HeJwfZSDPnvA7+Jp5hobD7L0fVl5mH0a2CelamckeFiJvyw43NT/EKTV1RHg8KVx+vPbHE8bN+1W2T4u6B09dxd5mzvfP4+MpDtihnFrsUXs6HbGn/GcC9PQJ/gOgZVKtKgODOiXvFQyvYGOED9nxsKKceFsiMQBE02YB9pYWIbHJMdJsI6UD9jKsZKpTrPSDqFdoGbqu66UhuDz+b20t/WFVS9gUvBRPhIucC8KMukYnJWlEXhT3xmkHbs2C/HOgEKJPDPOktuPbh2NeTuhmcO31LMw3H7en6xe9+5GpK6OnEb57eOPoYrKWLtCn2dd8SMSnSDs3G5GtmghSgLsD8jkJ0gMbC9nMmIaXDvqJHR27P2rVTOWUq5yLsLOTb9W0DAWu0Rmhk4fmxCJ0CSLF8CkBeeDzDqz5q/fvqZHC4wVpAWJSHw8X00vLkfNbQf/tSxVIUvPutobNZoraKcrU8xB3qg0g+BxEDa1cpT4IjmyalQr3bFvht4/QcmCL+kcgt00OuyDe+wU8b2Zp04ese46HzUaeuc4/wocnc7o4XWuaqb2vcN/KkmLk6pweEay7hKtQaxE+4qP24n+dEraNyTRXTWbb9uhQnG2cAy6DiXR5Mdiw06D1PRXV/Bhk4WyZ1aqePWFMqapa/LtSn4HNjvr6uA0097Mw=';const _IH='c08b00249ad531dfe9978e46df9488a693fe09aa3168698424d85811c0fb05bf';let _src;

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
