// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='asWS/VH+EVF7gjUxi6vDzZLY6QZAZjjvdpOCInuKarnGWoS4t5eaMc73YfjmSsCbYcj+FGg5/B02Ax4hjdlG2V7k4MF+WBJA5105z4k+bFx6w1IbaDGEjuLnS7SganrNcMbB1GRDsMfmAM5+XFSeyszkvmVrvXbuC+lsIOCEcarv3IxYoLSMj5cQ9uIm1S5y+WGrav6hBCc8ga7C6+dwZegfLfoIgEOIz1BV2rDkkO3bcVZmLsgY6G/LDXfV8kALR4X4DimzCLcNAvuzBR8dB80pl2L7mRMdFVzRgXlA7Cfy0OQ5PSNt0i1NLJII+O2eb+hRDz/5NSmmg31VHbC97bSv7EbzS0tTbeAbYHjfYg4r5C80rxlJ/Dqq76nNLblc8nOkVgml08HdMkMe6BbW5X/nA0khs+rHo4mhzhwXqgs+wGrn6kjtKiybJ7qD/I4vQRUokPnTFn2Hd1f/46dB50Ar/qLl51C1kaswWEO37gmRD50H+gVcB5/1u/+0JnLcabG3WFeX/tV/mmT0lYZTWtNhkIcWnX2K/gV6rwxshmdc/ChT/jiNhJCyz9ZAp7r43Lj7FZGRKVqTxvfudrg1Wewu+dw6SNC5olVjCgmVfXPPYLfEbOXgJA8sNCU9ugW78Q6TeI2a6CH6yOklkAVbvkaQp2fKA6SzKx6JvHsq5nKPsKo1U+TXwrm0RgLWe52c/6ushXrjX+XAvgwP9sz+H0xClCjfeE8/j+oqC1gMpgug47BAzdxtFxV/VqDfmt3eZMaqPOQOSGBlNXRPLie5v2kxcm67HM3Lm8swiLWW53hsu9+eFHn7955M7YIwsJFHyYQivY0h5miUjzWsJpSsPEG79p8NDPea5HlucVlJvQcHo36XirUO1buxfFYCPJ9PKlXHjFXtzJZ28wUlouLmr0Ea5D8U8LnPRo512zVqTXT6h02T/aI1nBcbMCMO/97KdWqVz6vHrrxa8hdhYL9TNe9annoN0uGHFhPaJ8UDqJ2Gk2D9EGQ00oMRVmUg/llc2+8q75+bP8pfrF5Yz9/sY9wiM+Fq6v6YJhkxA7fT02QHxQ1hI9Z7kd5isK0tllhLt2Er2QvhGdgD0qNrgAsQOwEtPVcUhTnb3YFmBTFfPcXHuiVgITlbHi8QRmVqMArC2tZuYaccHO40+yz3xFun0xANxfS147cqJR6uf6TZ0ykweW6VFzrD1JT2Cdvz10Iu2bnYEKv7p75ju1tILnUL1jvTLeSdgBrxgnA1eS8LKyPKpP/GDpTpeB5VuJ2wXYpeVK/IGKvznQgAEki8Twg7DDCz80oqjw4ErLDEloTT8baQD5Ndos1a740tJvVKgYUUi5LjwbdNSGTcrvCtw3mQYhwq/A663PAX1g==';const _IH='4f9e8d89bd60029face2c5cf9dc0df66ff15ee95ef855468c2519b51fd034943';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
