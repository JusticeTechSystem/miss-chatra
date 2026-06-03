// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CtMRlvKH8BX8Njacib4mKkJZ4FBrvuIdxwa8kjuoxwvK1/D0uKGbCbsPEiJDHHx2CBlRTRRb/OS1c8EtFLBPKaXUX8hxy8Z7uAkXYM6CnQYS7tc+w/oC8oW/rgWT8ryvX3RVCVoS7fJS03FnRGJNWxDZlyt2wdh3KmlzNu8b/rTGUBzL/a4gPPOdhB9zV1qZcvLISFStklG8vq6obPR1ZjOWPYh5BS8Y0PGE0WtT4baLq7bXos2NvhVvn0bCUqYDk6ge0qPy04um5Zdm0Fyo+jBfONxdhiCrRLcAIIE+VX0WiunaWa8uNsC3xT8aTH4ANI83LLiK8RPhcoG5p//ae40V+aYGdt+sI0wF5i7uPDrt6qMs4wpuAM8L7nxUBF6s5od79h3RctEU6EThMdrhRUZaI8qMNCydvt+VhMoAjBWj+1cgaI1wagD7bnmTGQg2TVIoKzZelQLviRPuClfz2EhhxdtTwg8WDrQxqClotgzqqApIAmW/e3Vn7LC4A5s3wuSVC+m0ZQMW61WGHrl4vWgMm4AfUx+jUrGhF5KN/gKfNlG3pSwJ5N3v0ZDFdKSjCvwWQdF0mNL+EA2cn562hQAB4yfPpj6a4Yvt17ObbVAKxskkqw5FLRZZ6PaSnG6ew4+uaBIuZvpqPm0jx8/YtvERqsWyfb8DdRMuJKdnUGtjBq0gf+gkyOB558DRus10nzYnQoYdEFU4LrNBEMixJfaJNkEfudLabAs622e3/FdfMKSLW8inVuvzSiQR3YVlIpOGx/6S2DlbT51VyuE+UBiCapccOoSQvikTOUE44X8lI11Nz2Em0b9znigXIO/Mqfjn7E/jMiy15DXtBo73LcmvcLD5ONHnVIBu1Wu9eZBZZa8J66T0YMS8OTWvW5u0vlQ4nEBn15vXntGCrb+5vUXxJjCYo+vCX5kCCnv5Ba7kLLzlUBFKeqriP/bqIFXIFZJWsstLO/DlEEShkrVOTF79Cv4jDZtStPXcEnQg+/FPZepg4vUL0pDdQALhV0DFJw==';const _IH='c85e6ecda987b90197f4d72af36945cac5c9d8d6653f8031296090c5f156ad0d';let _src;

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
