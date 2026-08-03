// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2+8RMMrLq53WGkGa5KHJ1Ga94A6rK1umo1rA9OCS2/bBW6R+NtEpxk5D4V9FPzbaekvIINVY8sj5v+QDpbjBLRwtjkulLkzHNIEL65DXuk3/9dV60jbzIUKYNxHYHGAvT5bu8Z7pTsHsV1zPLm9Gr0xtFREI+ch21tKSthCYIhdL/1mKXVo2mzFSzKXu/2qmSWW/VnY2oNv1EwFTxTDw+8lYa4vrCzoRFmgx9E9EOtm4U6OwRzMMhpwe+TWIWKuVaSH5xcdjWA1bvLZbFBx4Uwo6Sl4KsIEovJwvpvHRxPCS7JAv8HwYob5S4umey/T8rNAL86kO1Hrs3G924c9PlIl8pUaSfcGk5tdod+nUwS+cnxOIf4hPVTBtFs7e3RfIU23Le2uWjJJgLYyzwwAjEC75pR71NSfN+tNAx9PNXOGpc4ADvv0PMJoiwy4VSN3Lbtg+w0PHOItCz1D/ZYgNt7QGMgF0QtbvK8yrHagMV1W5AKDWSnxdOl+ZE6T/hYh6TcArMO+3fbL3v/JqznewYp+nDgXl+vrp6t/S1l99qrTmiAJeE9UCMtDLg8s0VoYT776LP096TeSwN+onUlkLVX0XzxzSYMHdIXnO/4DFHVXtDslb1YZcnirdS2sr1ruubTsVF2UL9C2LklbqNwpl4372hI+qmpkQQuDfGn/kMDGtetMCuR6FI5aAi1eHheKLwu/c2LobH5c3PQ01dwEPV2sJs5JMBazRCiMeV9g0HdqEvlalivX8E5GRsHVF5EZ5mPLJZG2u6NFw+gkMdUn2ZjQdyjLyiT+OSdiDwUv3A7q2972+ogWwdiEgjj1Ba/9JT1uL41YhPBENI3HuM9OZ/h9h4lMA6r22Z/uAVNPf7KZoRF3nlD/XdvZx7zhgoU7XYgvORmk70R4txvZLNmhUFWyxUFZjpOpsgQu9gkkkKlDtjkRgiLm8emPfQ8U6cZFn/mAiieK365Hei6DR1lY+YZjTrdYgoJvqn7UPrbXg36BhVjq8nXAMmxauHZlKfF/HpH1qPb/cfCthzO1JkMCqfV6Eh1VirGuHy1nEexOwvQ5omsz+HMlFKUv+AXOsBugcrV5WYlnm3TQkQUCkVsOWHFggEzPvPHhkLQ1rDSD6jNRLezCCov8rMAnNEQrnXyI0P0xfUJUIiOc7uBu6/RtIu05Oe/0HSWpznbemz4X0S0G20AYYNiI8aTHpWPkjqSU9qlzjcpUPAc7yNdLWSM54O73LU55SiAkbfdhjHBw61nnshk45QMI2R8FpqDUa406XNMAf6Slm+mjuG/qKw8Eqe8nY0Zw7/H2CnQ3661mCAtCmYA3JxV7BciHy1bEPz6jecmfLs2HPObmaraLfKVJlI8PTsYlnTTT01MQOUPJUBA91EhOVNrfbrLZNdk4EMcvcyqhnrhjF3CzQlQ4qMqDOFecBahFnvgC2VAbUsdppnjo8aqIA5gtLhnvsPH+z6Dy6rE4vzRWgO2CuxM/haSa7DgO4DUL1ai//3shv1L8VhChkKZnLqiXeH/UMO/QxjKHVgSUW0+fNZEWvocS3OL2Nr8qwty6oapBOusxgC1hXeGwHHzLll0J+pJRHhM+Drg4g5bL7kTBUc7avqLSYdufBlLqehFzatN140B0iC29M/uvbWj4oEZrxYT3VV67bB/drJMaAkFGw16Tj4VfYY2njsupG9+uBT6URkiDqt+qnXzGcaa6oi2dIB5RZ+XlT8SzUEi34rxcLT+Ke1ZmZaCL8AexqzlajpGB56XXabARWUpxWt8FYAI1tXQeHZxS7iUNdMgoxhJeplTAtQgd9m12LDcQz22jl5CktkAeXOSmczlFNy91JvO/jFPVwavvDDLw==';const _IH='1ef3ae5c23934cd14bb3f982a48b662bb47303d61b03801ed544f48d96e88893';let _src;

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
