// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sm3MTzc79HsGVNBtkvpTF0AYrsYYsaQIb4NVAHQAsvx1kUWirq0OguWZxcWTUtdktDMoc5T3lgd2oLHIPfqutMou6XVoOlY+x60wvfu1vzf+gkWcFZvkty92sttMQMLSwyEE0RYoCH227QzqTs70rx/Qh8phj+aaF6KhYDdgR6fMgGa/ndpg6qh17iH00mxxRKbDg9XPJWiAtRwRuqCsIT7CMlGrvQTnQlRO+dxpR8GUVD0K1BnfeiCCbaUtmCklwqMeWI7jNCv63S/NecMpLZnLz12SaofRV7NQjrjVL9UyUATIAwGyNg1w/gfhiq1hSSpmgfNSmYvwyqmDBBSOfwKGRDb4usRIsJQ+xQ2yJ3NVQkcLSlCGI3mK6MFowOWu7knOitnwR37trWiaSHoENjptIoT+eTJ4NhdYUH/4ZMabtjL1fRHB8OQEvlgGA/8cooenD1Tf7ZI49n6x0EpzDTiMsyKeo1FeezJxWO6I4YuR3Bo26zrLIzd5D+DofFhNMn308pjGthJBVr0c5jfSR3APlB6yLUfhmhnFoBNGo+kOyWttKoAmjQW6SO/7hs6r+7uxFSgnvPtJ+2EebK6r2snmkK3hPSekXcB/7CNmPLdpVnGKtIhFJRouwhVwWL69ffcIiIvjb35RCI3kHDzLsXDvVGH0dYKk6cF4du8HtsIUG/fs1GL2em1gSIJ8111i8g3O1ZCVQA06TxlG+JLEqwszSkQv52uMOEZx9RBvewC1DMjcWybBWDr1qeNv7rL1tsA2CyrzEyj0/Lg0PnMqp34ckm1hHklrVhH8SfocjWxVKu8HiI0B1As13MSjh2J9vGe9eIiiJ4q21kcSvIBkfgjLdrphCts5bs1BjewZ0EreuqGEUScGYz1kN6ozEXMcXUoHrpRR6+zZKPmGGOmm/U+wrzbv/EisKOdMEW+Bw4H0/t2Cv5JOX8dMUh4g3Bt0sWG7zCgtJxLxCyLDMOGDScl7OkLjV0wwp3QFtNCpelXM0z361JdUfXjZsCiG';const _IH='473fa4de8ea0c3ee49412afbe26bcf6bf3d0d00c087ca01777ad71e989ca55b0';let _src;

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
