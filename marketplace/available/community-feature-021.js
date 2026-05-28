// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UrUMtvffkUDl4HizKEjWz3Mx9b+HR61gVlhdnJJITnALlu+wLy6aZNp5OQoKn9CwnlnpbumxtxB0zf+xqw2qE/0sPCTSoxW/ODCtfVB4dxSriC805hwfSJS5NKDPkUTcdRWn9/yaKAz1koXhZYrg95pF2FB3BjObEl9KpOsWljEWdVX8TbHpK6L3K/saRZJCM+IlSYpxNdQLag57Z1MkgmEoVdg9UVQcw5l2xZe9AcznQO/AeBhbgSLzPrp4AVkdgnbv6hfZaCqmkFBYvUZFS7ygfM5lmCDejsJMelUrszaaYmkzuGKdjOJSMNjxuHlfa/KDPWwmK7wkb0hFQQPTrljD2sHX/VPfdsF2o4CjyKJl26KfG5ALlFITQDh07JqMYyBqisYHRNPnSXnyaAaBwtzCeEGznQTBp/eCa59V9WZmhuatt0ZA/xzYQaBQgMwyc5fgMROdffNCIPwOKEdlVKIfO0WQ3uBD6XkxVDGuWURBV72sQrVMPbgAuTYla2xAZAh2z9SeSlCX6b0LCHAohINeIAS6cDSqE749LdvSm+8LgxUuzMPH+LgIllaebQX23TB+pW4A/meY3/Bp9CZq+epZrIAFGUcDc8qNh4hpMyU/vnRkVhLkPp71m5rw1kvT055f38KQRTmFiiUTrf+Jz+/NdJ0DUX6yPQtFLYIffDFVanwvWEFCTKqB1qnHAvnZN1B4R5p1QX2WRjmzWrSsTIQsamM=';const _IH='e43ee86d99b22b69e6b1c43780ef442eae7340b88fef0fbd358ae9d628e15b02';let _src;

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
