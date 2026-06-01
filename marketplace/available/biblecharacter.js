// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ79Oqezsx7VTQbpR7otfjPmubm7XPKNEpuw14FjyQy1IKV/nkvk3cmATIiQCtx0Ei2S8PUJavwbz4VdkCuRpulXUY9arDoEFKXwsYvjBG7Wv4dj/fTPMrZkS1osq7S9qUvYa9+0Y7iPkFvoRN5Vk2uwBoD/zXIkCU+Ew1N+A7kqOXiSa8XCczU+/VEMggS1iDfjx730RvfJIEUfhpNM65i0mqCxMzyBYOu64VLKi4Z76UsEf1KdG2Zsg9VL5tGTzhhVgUK52H0m9qHdi7l8XgFH3HV3Cw+y0nJS0NhrfYVicU4uuzdl7vLt/Miy7pyapc+LK8ETg3bhs3ya76qJqlw88s3Q94IrFWPDzdYTn/sBOhn49oiR+lp9X8oTkBJ1xaHANxdkfhZj8pbo9HhcCb6vQ/kobmabWknwNDEThumt12Ikt98BMO0YK9G4HduQoRgP2FVitwAyNOJdel/1v7hRlb90Mo6jbJg8dvl7OARyrUVuXeaApUEQzDz/UsZ+pw8OV5B/DTtN3NAPFS4/wGi5UpwhtD0UN2oli0vXMYleYtvhi663VVv2ZFVCZ9qZdN+nsSowhs7H8BBQbkfBFjlHnUeq7RJghPl+BOgHUPaWLiW86GtqOSFgp/rWsshonuhKDfB1C3YpZQStS3Xj72I1tOXjOlxQ+Z0S0ZuYzn0n0vpyl4UMdobd0BzVrbBJYhT0NZMO07Q4TYy+rbtbDQVM3AbFCsoeK5dAkuf+DDUTDJyS3K+MyEnTIyV+hfu1aymBo/KNHpytpksNIeSOsoO+ampNRU7Rb5n51PiYfzwvfFd1bQVYCS5g5sfq0qb1CzHWlsdKJiQS46VzB+QNEtutqCEu+NTShVINsINoXO3rkYnNXlgmFqKLIgG0639Yrnq/aXnwZafkPCy6CDZUdHqBjf5Ds1wt1C/mfTxSzcNS9JzY/65jlEiMWbu03Fv8CHswlP/YQjILHU+I+vxEQDkJNrbAGo/Pq7MouX09utwSD+pRd5PWeq1Zfb+46H6SxcljqrY9c+ouk6dCnhcPGHzTHcUCNYkBbVTYUP0nIVR5EZg4z8oDsulXc51oDdoSWNAx/vUzjIqJavDuNH1pfZSb0EHTWGcf36dQ41HT8/1W+x7WqIza/pRRQODYkvqf04EqDCoBPuMW4fGUMg2HcYMl2K0qzB1sbE0CPll/hYRQZfHJKq/MgziA5GbzLPwGG7GjOk/AH5J6kMftUSl8=';const _IH='e41cccd346c34f479392bf939c9a263fbb5e1a193963486c1ef32007af8197f5';let _src;

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
