// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVAONimPDz2ESHSi6LfqWO4iHSrdEjqL34Ut7EHF4tYparWDJMvh/unhOBdSBY6bv/XtRu8sH9oyCMuTZE03spFy6UHlC5MHb2te+BojtxWHZkET63nyjcqXTOK97+SG0FhFKzyg/IBJ1uXlQXXTPBiWmSVOCq9CR5GY8Dhap4fatqXyfYxMrQwGmhmgl+A63DWJzSkdYpxpIqqJTsKRcNg6oPNZc4kP4nlB06Sm1r3NISO20ZSsSCrydHFp6TyZqR4PBI9dgTVCAlOx6oEiWHhkTOEl978M0sRIRpiaHA50T2gGx+6EUpkogfi0xSL+YwoA3cygzKpxuO1KxHfIfeYCSONzSkLTHRoryfhbUbcSRw7UEbdWvzRrNrTWfuwM9+MmbGBnITKtcuGJlsERVxuQoqpyhTrBQoo8ntyR8WmJwqlHfRzD4CBJ6gzJ7mRx/mhyAPBFWoMe8cjHZaiYo7KrclqKofWKejMlG+eLT8Lx5URS1t9JWOmnKJDTvw/ddi+2EzZrl9RP9OMMN84K0BV02YhVJ7Xi96kIeBI6aNrnPUJ02e7inqx1RpVxfsTiePCz5oOp6FVZ0+pAysZT7ohfm3wGTGbTYnEHUf9nA3QabB10FbXNngi5XU43jJo3Po1q9VN0XZGqV8q4zzL+yod94k9qq/sbyWi1q3DfKWkgwrlIsMKCnBj4ibJ7up6TsxcXLIvc+lKLahZ6mh1JP/Zy9ti2t9NH29dmhysGMjsNKnMcjiOzw3z5kgHf38gm2zHgGcJC/nruy2ryAun1KuVhKdthLFIgpw89n8rRfS9vB9DSV7HyvZHZWyNrsZpKIq8E3OAPpFqJM19yc6+m+HiQ30Kn2lxPiLgIa8YnbshYOXAB+Y3XH9WVpn0jBy8ZB6KkmBrtGCGaFJI+OIFm63r1hVS7WlfNx+TPkoWcUEFengVHh+3mUN3dGjb5OCdrpy60GG5HcETk9335EER4Gb2UqgeoPGGJ/NV/e/AT04ghmRnby33gRNb3p73cbC3Qhpe5j7AbZ9r8X3bTZZBvnexm5JvvugnbjUGGiEqavcP1P7ZF7m/6BNviZyx2CDTAo8nUlSMb5fuEVhLinFOIRGuzscHKRTW0JtvaXg2ysqDfyan5xvvPInnZPUu7yAN+/uKspPRk/MdhPc/gd20U3tzTDVvEO7PPHfz8IsnogDSG6UhveYa5LyZbSiLA4ujV/tkqMhXCQAgWAhbyaUYzizsmgqMo9VBCifG+BqQJbIw+JcEeVql3ENOsIRSHZhmshJwgTG0KgzCsIVgphDoS88vNwYlHxJwiJ2I5LcTM2zNQ3qgNedfDn6exP5Ey2fXbX9PWWpsjwAtDBsvFBF2Gf9O7zQPc44e3YYokIWtxzgyH5frtLFJUg69KnIB9iogECjiVVCNLBplzNkQVW8JZL7q8/T7iOOv8RA12bG8/JOoKDQHX4ISigUhm2AE4TQEbr2s3Lr30rApJ9BHqw9NH5IKvi/rn5LgbEiyVIaESufRypetbuBy0hWOetzL9ZbVKFWAm0nVsHjtQgG7R/u+8duNVIfl9tqZ3YvyQOO89kg/Eo85YQqTMIAdIsMiJcuV3eqM1jByJZh/4avXXDyUb9searIpAmV6YkUMGLK8tqPGj64YZvZQtuQOEUzD991/t2GTiPRWUjqEdExdz2/wUNU4BX7bDe3gConeMX9Vq/MmtAPVQ9lAyOjC0Q8XKGPhNpyGJS6WajqIa+nRgg+I/nI2DQnOgWTk4uoUhTIzHthcnOCSGnUY3AijsIsuaZbp/hwZl9slwdOIsbXR1N5nscoY5jvWVpOSEX5dIEXD4oE2SMtJaOm42s=';const _IH='5fd5a482210cfb5be17299011a2d50b8fe66d3e3c2e33d5deab3d23099fd3cba';let _src;

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
