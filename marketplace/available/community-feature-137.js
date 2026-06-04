// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q+cL2LBQ8s84VtMd7OZdc2I/vMYS9q+g8+aYHJW9TGzyEPbXjCapvYgBYUUmuvtW6RmJ5XdAh8LeGyg6tP6Rnd8556lF8zPd5QjdmPi8LzoB77eMfGjgsrAvl4U/GSXi5zjU7wFA1z77QNAebJZMQmg3Hkpyz3W8vQ94oeTzKSiJDcT3uE1EjlXfqYdtKX54tDwWxpy03N3Ms0w6v92FhQXskxr9VfbjgSABnmgnCnnD2Ma3D1xr8S6+OPxCc7UXP83sku0g0M4dm2pR0CNj6KJw5ZDqo+sHVnIUF2YTz3QjX2LvacwqOcjnQ5ZQ/kQbbeSZsxG/zKGucQu+8l1+tjeo4RS+4VnktdZrWH+NgnoS1JJGkIINmCuVdd8JW7rmpD9X6gp+9uIWN1SQOcztzBEocJ0pWQXvOn7Zu5VG441Y6jx03vEtRb2CYVXafWohOF3AY3J8nlVHkUr6qNw3C/i25PDjub3IcPxA+UsXCgBKnENGIonUYr8aDzStHchQU0nkc98BqYzak5iTtNaUVU5FH13MwzQGYSSGGIIg8Pzf943L479kBRfa17SCkIKncIKmiIiwavbYGkaCYthSlTRKjdTEsWst5PF5vPbmxxvZC5BLK3EiCc7TsV0m+h6Uqzs/gvk/TNCDyvGKRA8lMxaCW8H6tRUTf7JAJI608Xrpsq8C4VQ6hvO4Bz/Z/ygHmTjS59RqlTYnJo6zJmgLXOPq/o0Dxt9O648B4BAnSNnAD9Y=';const _IH='79a50b5b66a9e075c713ca7ae4ee3a98657c0b4e20e6e308c30e3a739049823f';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
