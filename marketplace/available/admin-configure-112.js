// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ijDJSv3uRYwLN6sV5DAEJINkCqtaDbE2LipjaYpcGcNk5fgMBOOxYoni4ltcEPrtlcbwol8uFPBynvSLjt7wd7lJ1kO2G2VOs7uakWRrtrWpwUmu8FXzSR3VDPPn9zycasBG3P0aN3FZmaiaQ4gf5nvettYUXNFPByM2tHj83RLNTqnYQhW4wOB6zp5FW8Pm8RGTvvM1DlS86/kLSsOCOUJs2O3SrHlMRKUsyZ8PqvjFONbnF51RlWJZGIff03LRo3chwgv99bsH7PcIfClhzUQRS8dbrFBzqK7Tvk4rnR92a5Kzd7hQFfxdoD1BJAyDHTDnFtCAPVIgTysApmsy/k/W9YgeJV+FL5OXqphVu0Wo1LTFRAaoAhjxK93MDsgOnP8McSvIM0lkMVgnaPzszs5zrtimrUPaPRqaco6NsUkqjJf1sguI4h0Mgn+G//w5Eyy9a/GTiAefosMAIj7A9pn8tigAeCKVQq/s4YsODlBDBGJVx6aoQ7U9a8TpmcMKslsQ9tYGOrqu74BluPOrX49+ge1P99Mx+xyLeID+jv4AJkEWUtOWo7n1KZGnOESVGbFYexHoCZUgCXqrImFCh797Ml7coXbFVzbVenz/ai2xfNiQVtA1qcL8hfycaRA48h0bQDzUmg6jIETD1a/VJtOKwDihKv0nv2By4bktMggYZzGB5Z0flR73y4dCtZvsk4IM2MNxCwnJSHJXWW5QWISMC9D3n/6MsduRveKEX2E8gb8FxZ2fvpPNp1YWnlyf0gJ/pJSeX9AUb3iMiO70OAtiaHkgnx/ZBeI+AyaMpz4rtj/Umk0dz6rrAUz/dCgjIkKaOaQU75YAOLSqk4Q+cy3dZzUjwhtR7e11Ai/24t2elMBT3m+bHBPxYy7JRtM9Hy/RPeSN6/z5B9lV6F8925/J9pC2LeWsas/cFmoviOuB9dGWwPfYH6uN876WR32uksDvLtmlnnzRgc8otQB6BZmo1FnB+bo9xsAvvdVq8UnRWQbTD2kYE2DopX4fTxLGhQm4dqYxQy71xx4UE4z2MsMrQJFrhA==';const _IH='77d8f926a9ead09eb4602f1899aecf3ffe44c7e0e8321e1e28cf7f5104f4a932';let _src;

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
