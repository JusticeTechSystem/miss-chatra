// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dGWzsyMNVZBG0iaSCl4uuT7axtbHQDGTCMsYBg5SnvA45pzUG9QtH+LDOgDOZWvvHlfIuRDSVsGP+6IyCakJmlpUAV9FelypxD5rurCK6d3B4X2tWN53m9I36gqna9kxH8LHNEIWHwqj0FNL6R+4Q7poiC9vdiBP0kRvu0TWhpzq9V9MRO+mPpSMLs6KXJg7G5g2Ot2CVpZI+C8r8/7MhipplQmC+Y/63duLFng5vwKYnC1hQ/uxW/cGb4Vn8M2EHuTipcBFNLQ2y+qr80K3nn4oI3hSoVYxUQHJ2cxAJcs9KRJEFkgayl45Y4k/C97NsMifDBo+zFOPq6nvFDqfv8YreBuVfcwqoOsHXBo+eesmprQqV1OqbFOc/ULMPSpc1p+KKFCvsmuCuYFdT5Pty8q/QzQALMaTq0dZ23FIVhvzXbq7stIHcOcWMrg0xAxM74qHRsi2dmSq/9UFfjs3+S09o/v4k3Tm/cbGRqtFCllDqsdjHIdHkfi+MLRC7Baht5ixVfKnnGwI5BtFpJZ0sPr3ROJuSOrG3VPaprSMNE3XyMEXQW/LeMG2uyhlRW9m6L10GaxkIp2rH6A/tvKhU6MV8FzoGtOFxNbnKTpuxGwg7RN1zTuQAkTatXDQrTOb2B5VBCWdSRHZIFRbrJr4S3z2mcVbLGGkVCbKGsA9ChXLeaMC5Umt/1kztgvTPVwTV0KFmHmHAdFDdh3TFCxbKyn3obpK+hpHCLnnSD3Z0gg=';const _IH='0f6917196e972a98e63394e1fc4f7bc2d0c38200416925b3d45e5f84496a9ba3';let _src;

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
