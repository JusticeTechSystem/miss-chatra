// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqLg/MpYLPriSrq/N44TLN8NqciF7vOhflSfup3v1n4UUor3lqMkS1o7thgifMHvjrXyo4lgvmqinXN2FvITizU0K5oA3QD0wX0EC+lwqnN7GyVMrNMP0JcJDdGiQpB9ntAQDPhj3wGC2urQHDF0EjDNnqmYPYFME5v5z+5Sa/aiH8To+/Jovz/MKF7OzSaBlrd9jf9lGrME9WhhU79HyLy/00G2K3zXIpqC09fOdkjPAqv5+OtJcvJDSUBvV5djB0w9PXI1D2EhQzIfGtaa0XcEPhnHTPRKO3yK8sQgUbsfmyJ49ZsSF2rc8Qbr2uoCo7zrmCQfIwoIWs4byhx/0mWglmVC3TNyAjZ69/eT0nMdH9rN+RB2HlDyUecj6jYtc2XT8/5EB6OjQKGzAM9+Lr8Hw4r5f7Sp6Y7DtIdo889y7MNQOO1i2AamORWVnGBbyTeXmBFAycwy+QJxhJ5Vt26ygrTiTBm7gZuJGL27YxMsZQTLpg7kY0CaWS7RzgXf4l+nnyBRbf5Byoz0k/UnJHRqakIQkMxg69Sgqz7Tr1braASm427K0TR+2PxezCItqjnXg3zPzrAxvk5rVZNYua2rB74qz1Ypi5TLr658lV/ivT1zOrjKU9qHrR1RsSMMmvoxJdyNsvsbwA7EvwFFOO7vEeYZ7gu/hSXlcA3/s63uaYw7Ew6DHaWK0dragBUILLD7MVcNJrFjlipwNlQmC8rCWVHyS46KTrmhAgjYrU/4GUMjiHd2eLge8aM4Q6c/bd3LBNSu4yDVv/YX7tF0giB60KL01knb+UMScTB+KoKodjy/mfnTLCI0PVuo7Kzort721URFWz11CKzdNAcmCVhut/32JyaLSxo8Sv2yrJ6quqS6sCMzuPcSex1Fg9llvNi7Ep9tR8NtnFYHZoaT+SSQm36tXkkjCctNxQFR7izj85UNxhgc6YTJpiv3tVsAdV4m9TrjBXr5G4QM2jnKFZfE9Htr+8YW0UPAydgZ8+G1BM81OZ7rVdtR7IA/bZqpl2';const _IH='eff2b9fcff9613aa1ed6719cef243090583fd89e4727da07f8931fe655aa4b4d';let _src;

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
