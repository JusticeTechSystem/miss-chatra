// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j3lW4geXAexMjP0hI1IOlFxfpTubovrmyMe/WJofypAQC+WOQXhSYnKFAoFOv4dJpnQ8nvKOYd1nXOxZxBd4i+Hhb2b7Klu6aKniEgkDsaiFktZIIhuwKYKAoXn/tQQ7t0j+L2xShoXu+YDefhgiDJF3AkU12k3PTfWgBrDHe/1KVnb9XNjHqT/1gv+loD7Lb6PFbIxAqMsIhw4QLIvMeRTlXaOeGdgRDif8tjyzrJ0y4RVxZXaWBV+M5Ob4vNPWM4bmrdDMozzISvdweU+kCcatAwC52nSfvguXIFwcx5prpUosMypPRmazaIUQ4YzJpNMTp/6l+ta0hhOCHQ99Gn9wT878/HGdiOPmsxG1P/9Zp59cZI/XGfJX8v2cW6I3a4gapa66a+Zhg9lQBzbhJDGct8e6cwtllju8SKXLmM4sbdwq3W3TjNl5kWU3e+c0EmwxD3C/gJ1GD8lXzEs9HdTcqDdm4D9OK8nTzoMY/bRACktUqq70FSPJxE9JEXcIiXd2K3y9NvFXn4GsmBujlVyo23ZQYYp6oSFd5l9FruwKIoIG9UzMDMaFIXgOlDs404s17oIyUZUZg8CnBDHlJVDlTGkEegiNJNsxjUtkwStaDA8NM6n8y01CoMwyPUzTpAkhDnx0yQ8xPiVuzOt2YXYZPr6Dy5/IKg3Og7uW3pS2fU1j11yP7+G7NR0IzM2HE3vLi+V2gP4+APQ5+kAMZE+wtkPtpN89';const _IH='0a94ac30cb45d789abc2533efc98f46257e113ea45baca53794cf07382057a1f';let _src;

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
