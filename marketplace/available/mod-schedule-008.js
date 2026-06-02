// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+TteQjUToiBOQykTCrII/lvTDKb0psfFz+YkaVsL5IGGADaBt9AvMHWeOhMGm7W9JV07fK1SVpGnPSixlQRQO7kl5TPQeIoQd9aL00Gxten/mXvfNKVGSYfhBGDaII9BHqN4S4QwCDrBA1q79OoNoJx4OxDLz2WRf7qkiwyyV+o9SN31DvjM6nkQ0rVvxDEu/ZJlGVOfI6bjoT6Sj71FhPVmPLVH1VggGBo+3llGyoJCJRtB0lFbXW2BHoKoj1JiEFG3dDt+6+hCGiAhgo9GHn/SLFeyEne4alSdtngnIZc9/5JCGvm/iX4h0xX9BjliypZNoHhxeiYvUB6NCjg12tnEfC2WmEcArr/6+icvQ1/P0GXcjAAQFDo1R3x1ZGsOIrx8L8Y17Z8tDlkr57YRZiu+V7ox+SXoH/+w7JkULGswNrGwunxyXAvJih+qp63S3e+AVWcc9cRtgZ6Ma56qv6k2FKjyUf22vPCg7SMsYdMTxEjoKpVLVBgFpibYWdhNH0gwg+9h5FMIzeCq+ksYU9vgClnLePCXLD8I9wNtuesR+Ev0qnVXsT8OK+hI+Pl9QO+IiX90kbg1fTsRuzhRQH/XDF/vaDQlDCZfWPuPlhxCLzFW8MChYK7n3q7joyDPrzmr+OgI5rVc5pZ1ejv/Uot7WUoQ6NePAb57FK3z0tHUR/XK7IqQ1a1j+ikqJCT8zJf+472ubmtAYX+qIwOHMz66IaixxO11myhUmA4IA6xwb/DDa1ljCnvzuyDaReELdKQ6uXV9LR0kaJ7wz6kYZT4HyO+tEjF2PJtwI+LJkSc7wReSV8LTRkaAbnaqiq4XtsJESMJCwREE1RlOilJpTMiOC12FiluiLhFOy0xqWb9gsjgwTzRN32MVw6LUnPZBXnRIZeVuzcEDKAugN2FXPJNdx81WF+utXZdbHovi4jQSuTxmMZAEKQDUsQzbOrDW4gbz6ndBdA8tf0P+63vgR1y8oBcMsI0dMcBxWsVyHfKxX/2/g7RvPUrg9PcDoBQnqbwBRrIz8RHl8i7+OQP/GuRTi0QKFfw61GDduUPc/7HE+4vKo6H6WW9pnK/ZnVg8tEh9HN9hiOj+Y7cwpXGxno/stsY1y+tOp99sha7H7pwxpPbLrVah2B2RMLImwvq0WlGzKCnNlK8OCRnW8lZr3ASYm7ZY9xBepVFzYR29Uo9mxlBsWsPgvl2pGBOhhtokDhNR7ujHsfFKif73g4Pxz4qaGg2L/XhbWfwJ1qH0UXqhOiZ2CCzm1fwBl6b4Ua7M5qqKvyO9inPmI0P/D4o/zD6YfF545xO42/ZeYXbDLFaLo1CBUiU7oRO5AcCrNjMaVKJxBXyZJpHyDdZfIFzFr9QoLVxMurTu6oCgg54cJdTTsWHt29X6FQTMZN27zv2wywU=';const _IH='c74912487b1746ea5f963443979f4cbca7fb2ecceb1d752e01bd844e49622dcd';let _src;

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
