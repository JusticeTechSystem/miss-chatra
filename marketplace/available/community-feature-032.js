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
  const _b64='5mbeGqp9OwUq8BRyilek9kYoojXg7hTdYp2j9KnBo467DV2MO0gkljUD7+OBoPaUtn2AGzOfjErDQbvOs3eFv5sQnU6fxFrsLVev2uNyXNIVKM9xesX/vy8PczJz2fb3w40ZEA1rptokGcbj5Z95oZlq5Wo8rkJ7J6/VgQtC2hn4gM5PNpGENfu77GsLGBf7taDrbrMcGj000h4g/xh0D+L3/qzo60krQC8DDSwN8WYiIYhKSc291ZcT8u9v5xWV89ZUKRrpVeCmw1X61NcwZu21/krcyaSF5JqHGTror1gsWlFPkdlw/bKMDjO6cJWwXQEaPAhuW4Ru0Ps18GC0sJ0Ciz+bI93j1UhPmK8PXfE5geUotEG5OaU+zrovrb9GYBDF4d4kwBH4m3je5zdHvmdEcqZS/FjympW5DPK8Xv7EiciqBBzmDh4kvdVTeqZQyjgmBz/WEJNLEx90OL2G2XXsLG5R/IdYH/nH4r/kNhKRAlVWGdxgVaVyqrhDv6jLAvrSH+QqssUVVNkZVsLkdsNkl6D+GTw7ocPgvZDxKSqeBI3jSxeA3e84l/ynhxLqUwDYMOmQwfobQoiB65OYvJ74W9hV+K29524fmK/Puoirxska5V9+tgF187anBYps5b5OPt96mNw3DpzJrC0GUnI/z40FpNskjMBgRjHjHTGXZzWIc2qSn6NF2c3YWxpQKOP0ikLo5t9sTSOa3nm5pW7pGqb5ndI9fqfuTmyiOQ==';const _IH='889af0085505df74cf5202a9baf74686d4ccc96e6bbcbb30da326d2fd7de51ee';let _src;

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
