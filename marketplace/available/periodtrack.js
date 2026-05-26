// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jwKrIKVqIq6QsKI7wBalm/5zqaakQlA20a9E9K+GqH3AWKQ1PGCTJzOGQyfMLea03TNqc7VYHY0OWgTCHJU2m9v6fv7wLh0IPuFwMneP1IMbD9cNAzq0KNVbrhv6xwgFeJcl55e31vtlAuwl1BpxUh9QWtWYtpMrAHQnjWFamcSc2EKMPFQzgiYeAPjx986ECDe2zxVFAxAX1Kg0fCQhUXUylE54cxvhFw+4nXiWItYPKAW3CdldlSBmFWtfykUswunRT9nxqCUCPlqptlr/VaCbIN0mmfiVoobCgdlHQtRKvoM/nmfCtZ+krbMNoNnDIRHAtYmATPoanQ9SeUMzzf7m7ziiq/+Irag8pxIxiaRpj6YZdftYxZCeEsJfpv/WOMmFEzZQ6P9xwKVapAeVPrG9Fa7NZgIhlvv6FuFcHn2wtBj5Xk4YPcAKHSz19Sqc0X5rekouyxn3H786/rGtqkhIDQ0ST+1mveAsYrQyyg2dtWx1lXhsT8w0c+ISn3J4hToududF83KNfj4sRi8f+xGDaAGxlPDuj5Yl61cCPlQdPFXEFqXZaf5OWTeOIzUetfddA2gLt0RLVxov9MYyu6KtczSO6KNoFHd/QDwmRhIQ0fXCnAV/rgJFEXYdBFWLOnBw3NihdvLMjui8hrSNIoail7/MaVRTS2fR8EQE4TZLl8MO0TF5GZSY7bQZjOzecpcNPKdw2M9ZLZeHvPtruiHULmGzIDa7Dj5fa0R3S/SSjGPzfZrNWqxfYv27o1hMFl7zYt0Nz0IJTT/R4vOej0+VRvT6o3qoxCIJf0/IBDmYfmnyeYyFW5lGrDisDCAmznht99XpPThA0jy/p5K5tlVnLPwc8skOtjPzTzUl9g5xmy+akWJwq5WaeKOwZhuAb9eJPQJvhL1sNk1368w1DEdSN+LWgl6kQyq2CwqtUDepZiRiBAJNvQedN8yTkiF6U3epC4OplS7hEA6kzQY/V3A7g+NRy6gCeCoDooKmBCAMYEm186w8RLud0sJFiYSB0bRqTBOjiJQTvhSAKlmYuYqIzd9A6G2H5RXc35HXACRRHBvtoejM4cFSKgBNgvVheq/bSyiUtp/DL8R2QJ6ampAgJHix2XL6pztu4mtJ0k9ptW+bMzozLlPk0h1eIRo2eZ1cUFw6xI+vjzJVPqbSVkJFMgPjfL+l8bqWyc1qAOSeOF9yzeRuCpiFSXOz8v5bnmMFZRM=';const _IH='cdbcb3fb3196cea9b4a0becf48066354b966c8946adfe4f4fe333c77f01899cc';let _src;

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
