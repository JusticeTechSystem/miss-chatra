// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy0dWq2q/E4WosadgM6D/VSWV0qqehJ1CrMKW8zp2v1U70mfT3lZCY1PUQQOZGGdTGGazsjEvAsj5I/DFaf6mWWahw1/ujjUHDvc2qjc3zBgOulWyNDWvyZWmmRUsBJRiuNOMPB+AGTo95MiqFpsFjHxw4NpbvmTq6xyjDSFJb6YYQ3wfbkIjLigk+IqFexy/eurQrUVVtcmNW9ONotC+Hse1guaJ+Lt9judMwMs5WCs1PkeNyU+MLVcq3Ltvf5gPPh8rTZv51A1ck6XU3Y5KmxwW0A820bho66/bFIbXZztrOQtiSD53Ktyjnve9cqKmfxplCSjAatvJHwrV7jYeBtDdLqk9UUxwjV9ypn+WLwVd0lNqJlz12BQqIRE5F84qY8ULnhmapsVP6cXuh4c03weBx58v9Q59M5QA0kDLGBSneehYBVOJIMLoaBxmQ77pAg6ZruRTcXyiAMIGVrBDA6PBTUlWzWhbMTvlNQT96Rv8Cl40tsNqWK2Y5u2nbWd5NtvOvd7eGQGJ51Ja3fXlQpiN9NDOJCCuUbWuRr9a3BQ8Zzmyb4a8rQ8/bqbcper9utX71SbIFIYlJRs+ebuvkFlLDap3oUPQHs/m5G60iDLUmmHM+Uc5IVwmR6aEnVguIhjgJ0vcVKLYYqa9Qk07ThNzqMRZbhp/b7OQTUWl1IX0YJMaJL95IAUBFGepTH1zESqJopnZT35BZfD424v5Tlep7xdkp496x+b1oYmVd4Otk29uo8T03+qDfJrHR5vrHJ1sr8baxfOcaJDfBCEYxSTarVE4CqymvDbU5ThZxryigTx/41HQOM7pxgUmxXJTAT6ITWTriqbyrFpWHbZWKx1vv38Ge3mf9BM0YApZKcCvgFdu3hsWK8A3GcfjuKvf83puWc36QMkR+T7NhhdODe+WRb5n6+D/LN4mkP2UPoB3xewT94q90wVgske0ELiaZfJU90ljeq4kIqreGGmnOF4j4r/GUljo/oxI4pSXFXYJiHLJmvcVi3A4Q==';const _IH='16ae8c976a39b0542e66802ea206c3a8047b8918aef022a664810ad1135e989f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
