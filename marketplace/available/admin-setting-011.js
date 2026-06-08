// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e2hdo0WL5aDfR9mySwHrRuytE3C6vmJ3D3WbTbz6dVeHQ3PtwZvz6SpH6DCfOn+oT+R9TTn4I/x25Tlbc0B1jtdb3NPYC18IsktOVbLpSbquW6yxWHAc4TrVI+C91xGX+xb3K4B6RZMAoNjVaard941LPGcw39dLpq8yczWUsyY6snuqwz2lM28Zq5xrPTW84iOksh+5VKW7jG3Mj5IbNaVvSCj1tcwobNEZcg10kOGt15KaQAeU2U6rlZm/gVQKesECItDeddBJwiLJnS2oCaTHmElAsH5SnWDLLLT7/xznmitzskHHuMDJm4Pt+7CqrXKHae0su8vjnag1z03ZyRoG2Jr7k+pfti1Um0Y2i8PzWYTKGRL4IHPUSjT6421l1PEHVGKGezWrlMtu0/Rub5uEtvQ6vK9dzIjtsz0H8PCLAu+ly44C/e3RIPH7kt4jrcBL/mUUGmz+NgjGeyloSNMBDHsgzHHxFIEOI8UjFhr2eXcb2jMpMCBHD4ooO0lbm1UC7NDiZ5oYu6hC2n/N1CNgC8JwJ979b2ctqVnkJhgDrS+NMwp9cV2MroC0T7fKwqIVXDZdQ0lhSQwclW3lvYfDdq/+8embM73nHqGO0x4Hrnb94hzSJ4ijNzlJWkMT39KOttTivsXfJF4ty3aD2ocq9/aIxM0ZjKfNVhUpRV0VCujxkBkDAniCR7xNbl4ffg0SpgOrvax6M9QSfXFNphh+UfWEublRidvjjPy3HvgG0x2+El9sSd9oVyV/0k1U7Fc4PZgb8Q9tz6dgUc7MFPsolwyBpmYx+Ts+xApFRyqeXpxlwdpMyUKuoq59qRZEyXIorQXgww8JMAEHaB15Fc80+Wb0LYAWYcCCrPA458UbZBLJcnjwfqk0YLJ/xnf2ONVGJFmhhBAxJI4teyQxYSCBPPIKajRLaZ3enmwkVeRlrFSWo1U5YOYDCHGQD2D8OhI5i+/naw3dny7LN2NvhYQUycGuzWt0j7H+qNyTxGD9rrsG70uhdjpiS6KD7wkE8beaew==';const _IH='5a21d32d25b015b1dc1853f0601bc9ee608550f521d6e8201c290d7f67d630d1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
