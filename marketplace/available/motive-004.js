// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZ7IFXWVOWrmfojnaBJs10xVHnxcN9zIvm6EBNLqrGIgFo3Esi6YZ+jPM7AjIPevT4BMDoUOcVHYSDPo5OYKT0mdbgfjSHsKD2xXkg2cwRBIk2OTRNBHFq7XqC/8HBkK1G5fO9IwmnuYwCodVXPX03TuqR1qH8gdUAGuTuRdg1T016RrBBXimhBLt1z0XLQQn7Pg9Wi85yINU+s72qsXLlz6/PFAD8tBlE4vvLTetmoOum7kKyxmxnLlAlcizws6N6WUrZJR5JKT0mkc0wvDK7XNPSEIrLyOJ1E1cXnvBtWzQMxogfiJcW8PtEU3AoFYEE4AaFXQdkqXGUWOFl+TQZygaoi1fV0Er6K4My3DcZWvPxrBMlv/vOmgh60LY8rLhXTtvIZ9T51jkqgmmtE0mywQZqrpxCe1Vx+qn1bPE+F47tbaRLYj7CSlGzxjbguqxZPn/4XThhghejVSy0ADG/qOnjtWxjK7KzjKBw4d3daIs5DYk1soJRiT3gknZr9xCYqOZkHaZEn5Rc4RKl689ywHXA3vHSQ4NsQ7R6WEzOm50Y7tl4fe3CHHm8wKF6Y6JgBtCb5TNMm3tSp4pZ/mc3q0tCsNVyt81Ao90u0ECzxC4aM02dBWIZO1Yao99MxAj0v8+xp0p9a0as0mcGcPPenf+kftfYmQQsFHs3r3dFk9+dVB5Iq3UDmwS38MFa0EkSNyIhY4TCj/Za/DrbRQJeGUDZIyGP4bG+qRy3CYCyq90sdSHXgXsSieIuvNBXhvX9E2/5kUVXm8VaZ7rvUTuw/WzGMFTjeU213yLO1MVnptVv54HE3PVUYQJB3B+iOovMRjG0mUzvoFUiIMEIcRMqontdE/g0MFJbtDasrb09aLEvzCnT4R3kp1eNsZck/Oc5ZLSYlF44V/YdmiibYzMAbPzquIlhUH7hg6ugs3kIv4BWaYKdM2YEG+dp3ng2yGGv+RUXIk8Rx/q1gr6GbTOVvxHZmdUHZVAUpEIYjqc0iFFyzB2LqzzX+vn46s9EmSrzH4jgOituM8gBmAgwZg==';const _IH='110b82c26dd61a9327580f59fac274ac557df772e138d2345f548524749f8d80';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
