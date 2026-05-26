// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='01NpoOsX+qQhI6vCqMjhq3+LKJjyExDeg2fv75kTakvjW8w73yiQNdxhacaFPEricXJHnqMTTAcTvKaTf9e5qKc0r5ApiGX6QoYruDkIYyneSKjE5r+btY07aJtfYe9cI2gNAEXmib5+vH6sKcDXNVs9tJZQhQ7whUlGC+C7qibbWVJNOW/GW6koOFla+W+O3mgtI23LUX45REhj0qV+3icBFfqBHtv3sKFiib2pZfESQEbTvOnQEm2pz0MqgjsXNnKQluRCKIuM5qzK3n1F0zazDtgFFGixv3s6xG6kCdOIeU+hHZhRduWS2jCaKJeD5/cMz+PsCklufLZ7CGUW1EzvHegiyQ2HuCUTDB6f7HMaEHbPbDRvCFNMEF2sQR5os9jZwu5WvH3ihsjg2FFWqcfmCdqVkql2iVEvPGfqFVBD7xDqxgH9ZtmQtZM0jQsahfxk5Cxn25QuaFk0vC6vqTmTbMLKRZqe/pie+zxjltr6RJ0Zwsa9lQLnc3EkUapttwKp4okBa/pjmDaGVEvbisQx++JSBqnEuLZYGt7wAUf5AGmMM4XVK3SRebeNpPRhnZNHykWBsYURm5NbETnGXfeVo6lTzChRAZKFFNPDKDOe0bcSDeEXydit0qO9W1pXy27B9JRCaMBR4kzNdbmZUTLb5JPe+wDmd+4T2+ytS/RBLSzOt6UmnmQyQRYEdoVujN73MdaX1OWFcND+zMMunsPPLUIcGrtk+3Gh2CCYBLRdobG8dOTRT+LA29OqBsWBTFBMtvvYCpNtBWoIAWh4iIoMrw5WqpNxqToWR9avgd+0gTDsDqE0/VYylM+GrrwPyha1JioXD+lHIVY9NWvKVNRvuiTiI+oreRVdqpCSDCJ+Gu3qrDLg5TT8VB24qXYJtnSv+uvKRhmmQWA9ISelatAPJexl1X7qvyUgnWn5epaiNsJiPwrIoUQZ+2wOMFRq5PNbHyylQ4HLrBjAXcz9HJmVy7g4a3IuZvkyxQrN7IQRRE4rqjw=';const _IH='e2f831b7af0ea4da85d33542a6d6d03048db2f8bac585c9377e77415c12e460c';let _src;

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
