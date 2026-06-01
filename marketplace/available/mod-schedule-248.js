// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/dLgE+Pi0hpcBGV0munObAHG/3gEN/2cNDyQ5RB4SSGvjJZC8UVu+/Gg0nHyuIvglDfZxK6yxPD8a5zRHUPE9mqW35QmwTaY9inEZjlUV99y4mS0VgGlPUg+AzlwXb9k7fn+Bg/ePhg/hHgSiDZhztA8jCAF5DuDJco94cROpQQiNdWsTYjsF9dPsomejZd9WIMMvS9+ksEWO/JgVHsnA6IZZXQuhkejh+3ONdz1gYCCzBQlPRDhPi6cCDdoP88KS1LYQLzmR28tfVwLvFIcqJNz37OztdwWa/SOvyboTyX4JQh6T2+2NnM+amPhOrb4Oj6ygpDU0PJyaW0mNUmKBWbx9dDfCqFa/nQ9yBPD8Mvsjg6Hjr3084F+DlmWuBkyhwB5SovkLeRW+ikqKCxQq09BfL5AiLJpLocpCoIWg0sbbgHlfhZ5I4ORzaiS/K6/JUlJHYxFTNGXOveoh1jhUS18P/Gba+PKxD34MdlTrvdAyCOEnh6hfb4Hq6qtZjUainkUvNb+jHe95drA63SRk9/5auPEYNxOLwDoqKtIsXMwQQzFKrq9LcA0e7tOV/URxfmb9L7e1wyv5vz2w5T0hV3YWiyQWwF0Pk85uB4EA+r2a9sizNt0rMfe7RWaFUlQVUkMjIBlXkIsy0xKXWughFmmqMQ1GwJsODHYHyLWMpUkudClJUcwn6AgQehrsUSPZIJ1oTGCYjwC34VH4LNsIb88O/vNIytHOXL6Zgk2cg70JRXci86CJJzlvs9WemeVnVVqY2vVuGla6IsKXsDgmV7jcbCoGT+pd6ALrDbAH6D+tc8xmtSKLSghpqWZHF4BDJ2arR+SwRRk9KNYKrmseApM57GU3yOddgS3xaDysLzBgabcago/e9+91BSyopvhLN++63wj4nNct1WXXsLuUtdEcSU9CBLdNc/v6PZsHzJBhwfZFNinVRwWQaoqN29h4vnsBLt8NuSyCwLXzDaZQry1gAlgM5HuzeV8wpHAfPgmHi3X50EGPxGve9q0IB0KkcOR0Mf1cX5IjFUQw12GepKPs5xvytADZ4dQ2GM+BvQS67bRD47E5UrnPTRSD/OktpQepvg46DWmn4lIT947qJxsTODztce8FPSSQLrammOZUAxyn1bpQSWS1njEQYn8FP9mmIDNdzhPjgSfTz/nZnaDFLGEyvgMO1bR5ZLbNq77sV6k3ZdkQOJHmdCoZV7l65UXxTIeruAULfBOM5cxe5N9jK6/LCkPbwhTU+SP3kMzH4WajjUw6qAMpJLdw1WExrSqdo/5P7cdxdVGXgjJq5zaXWd3KVuJUXHSQ4H6xJF2I7Bw1q5+Rvl61l1qeYVWHN4RVT+a8Gx6+kEnLIMYF5Msqhmom9t6WWUgI8zWzY5zbYdo8t+W0ZKMYaC8beHxgFpsOrvjKXfxpZCGA==';const _IH='2353b3b8f7ded824e73d27585b9d9c08dbe8829502130b6c19acc7c14da4819e';let _src;

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
