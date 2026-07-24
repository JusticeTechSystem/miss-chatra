// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgsDhYO/lmiINvsByMYtEjZqoZwcStXuRjL80jY/a4PtM2w/2IuVWJCreV7TZ8xeCvFoOO6cgzsEamzrOIEdJ3WN1RwrQqV+HU8holy4VTsQesOCio6EhajhvhdJQn8zYFZV1PxnlKOcXnxpYJscEVfLo3iZktH7hTMjCTFFdX+QarDegCRJE0omN7n1kz16f4cl0SdR8QSqwSf2ONrbNA9hW+bjV0Vq2tTV9gKzopUYoA3ebYS4cxAEQJfniPDBS9Q2UMqYYdMaIaDv+UxEM2pakQrAah+JiECWChjoWYwNRwVYbVjZWmDm0juSUoofJjn7wxCSEVpO5ZFqOtJ/VFIJXYZVYvaUc7IGwe+bMMfZnUVVEw4NIccIkWh9byb5aXfdCbLskHmVq1IQS/Tro9QjLsUMNrso9DbEC20+AAFudGAPxFVRyFfGGzmw9SIi9AcnP35Jagt89XEC4Re4kuxc5qBzKbzCs+7XtX/U66UJL/rR82GkkGKy5sVkkjx/3VrYg72RhboTXIRhIN/WWhM5lydjfbPTESjnuhNo2M7MmbsV8vqybwnR9WJHyYsIyrwhCgZtUdjHTDFcjexG+A1pXbCm4eVlf0MzFQmzmLzHqzaJpBq8EBnOw5ogDKbhp9q97ozk3CYMPlCquRefHkt+xTNueryjVO7I8eBTj/JLcvr8OGaHtS6kvbvTxabm4AYrBzJx1+Uk5Ht2n1CBuHdyPGt6t4gA3lNH12W6WUlcOzNhEOatLndsIgOzPhQmDjncReVOy85Qua3x7wWwR0IQtCRXK4JP4ngMJMOjijSZU1wiwVtTmv9/x82zMEsGZYECsji39BFX0FODKHsvZIjtU/z56bctDo/vaGkx6KCiU9EDHhgczdBZiAL8td4WCP4/QvTHn+MA3QNTUFZvQf5F3Z5oNfyktDhn+zWePavy13Bcpemcs0WAHIohRjXGi0yFF+0Li87cmdb4sHgmNORQmZ2/62VNqbcSjZN27AaTDL7iYEU0SCBoSOOGsrF4IjpBMVE/ERkFmygd6T2rdGL48jW5UmcTkVHXa/m05xNZoCLjZ7ZB1D77HGGzHQHz76HUavBu/1gV7zriTH/9yq55h0ZEjXUM3ye64HY9uHEwjbAH+h+QSvIt74R+SK57ZzyndwP5OXG6PQlFTnj25npK+U4kOCV6Tmm6WSuvLJ8+V8zw==';const _IH='5ddebf8ab3673d640e7cf28a7316ce8b86767141aa023771937f86bd3fa14d7c';let _src;

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
