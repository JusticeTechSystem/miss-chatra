// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ASoLQIPWGRArWToErjTFVvyuMxBrotZIOaWLF9O56bs3/AFHvUffXsqEtg3y+9VZI3pY92Htob65wb1JT/IIi58Im2Cp7Y6ZTGbof20rJJ1WTtCoILGVB/BwnuChJ+q6lFwT8I8q8OqH+KuwKVp67bz5ZbwQPqjKMaP700bkkt5mrSYQumNgjeYxvTWeoifDVJJ2HasgBODRM2uMcvtRtO6ye9kv6KLxr93eYgSqqEPbnkYuvGcedlNMRmGgjYCJ7u8FiKAQhBOu+fV/MBNt7kBUQDCEYPpwCyq0i3hjEBDtC7RpAPvV4i9oUMQIRke9j7mYqBh9S57SyhkD74TESA7447TihtfK56JnVDSod/fedSZPjcbPKzhpgaNa6Wl6OLomTAuj6Y9zwJhhPlUvL+B7pIdwIDZyy20AjQNmMx4n+O1KYgIwgC5AW/AVt/oXjw7ryMZZf7EsAZ9pNg3MXlbzQZklrQVuVNl8ghsQa20iorYonf/xFeTHUCi3z5PAjZXIJnXDFQgaeKuJLPT7LzHSd2Jigjl/uLdf1thCjfJRPmmrThf6/+OnhvahnK+5MpAKnUzvjQliamTk6PF0BLp2UZCbOCxKpyWVzpt7TA1MPFJznmb7YB+h+zk2oAqrkNiJf+X7KDErfwFjNsIW4YNX1K8T9drB65w5b16B5kEOFzRWtr5y3WVNnFRFNgmZAMCySqTWk1QBIy+TLWBJwky0HNc1OVXZ/tloGoKzamLGtpgx5ziFuGYP1yADPWJm4bYPxXdje7D+wYJozQYolUz5ProkFcqRWjALBtpS1Vfkh/A65jCk89g4R7mgSKpBC+Gmp+TPNiwK4zcwo02ulyt3W0+Tp3ab3vXrkRK/3RpdpBMiX0im0UI/9lBHpA/OES/tGKV9NqPr3T5wUqV258rJ9eB3MSJZKHcGTYRRDsISSOBGo8S+zFeBX55Y7sW1lVI6//OPdZ7i/BVLvxm0MtjMBGuRhKAmOzfyW8Jam/ic6P30rK7/Kf22WvzZm0ZbL6l7MBmCpK';const _IH='ce47ac269710e37fe0e125bc1ba223c5ee7f4091ce8d37f4376f9c83323baaad';let _src;

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
