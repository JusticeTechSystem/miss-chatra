// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q2rq2gIHiNsmCvMu0THN0U4MDf9qQXdb6HSu4GsQAESM5AsIWKZ4DNiqjxTIgEH4l+2AoSqVRiTDvkSvcEOXlfiLv8YEON0VM3JruTkS/AH8EySdGPhf2+gInXc4NShb5jQiAOYByTL7exVRdWYtUxJnjecnZrktyUW0SAA3KsBBr+3lhXrAZPPs8JsTYzxSZymssOXFSkOCGg/RvR+8Z9SJNG9ueHX8q438DguBxBSo1sH/qcZQGcy7/65vkvDpWoVVnxI5rYbd0zU9CJ9a2WGD8uCXBaxqreOeIfD6VOsS3SraD/wu+b+lwgNsCmtiwTelFOV13AvHBQR39TBx0DTG0ZRhyL/e+CJgzQ0LFsYV0Q6uwBEfSomOYP5u31hOVsUerZK4iIQ3t/P3TFFaIi6WQBHtCNe7Fn2khZpJrShjY/S6x3TD3BBJ+2c1ZrMCbmAPhncIIAKHvTeNQkfqaAj12HUAS7qsyEpZ+GdZ5cNS5MLhWYhI6hKZyO41jaZdhC75VJhZ1f25MkX/SfHPizLHKgCvh69TIUiB5KQeJqA8yVXM/+wCuIlNizmc5/EHyAFBnpVbDrQv3Xl68pkaaC/+5WMef+ZHghr9C0Vmzp3ankgqMQJ4T8IWAGJAtlP1IrCgZthWLYxZFZV8iAj7ervVzrCfr9Rck0kUI/9R4pbPJ9hmxLmIQhtPTGQFLtG+ftFhpebVTIiFzQJDu6/j7/u6PGrAPh6/MZ6yUtsAF88ZYuFCmNElCB8QwhlA9SL/KZvG0LveJOdtBUFU6JjoCpnHuJ26QqmlRUG92d7OnP/RTbCYdva4qPxD9ctr01oJO8V2PmnlmVFPePaMuMlyp08zNKkHtysvr4BGmjAgFO0Feei6W8N4tGrjJi0IUpZT3NtGYwWqz2pFDtVThi7kvZVnIH3YxMPxMK8UKzyNYbQQ0hj8cZats36kLGX1nz9ESCgndhPn5bOyJTJVk5/fPaSG7KbVQ8tskq9aa0lf0fgvk+wdJeYj8f74/5ouPTNmOJaB/LjC+AB6Uc2YWZAHtHAkzLOURNjetKW+TBHXs/tz6AEtdkhzsadcq4Qo+pxRWFqqkZNijVNKixVRLbX6A/y2EVAOONJ/KIhrkx3nyRVN5Juy1lyT66ERPyitVaIiLcNyMat8+k4vx41qLP51rO7L8MVrv1wkJ7lqCdSTeu1BueOQnEet/NhRd4Ptj1qm9pr7b9Yo3C2efHAj5cNQv0LxELAeI6UCuIDTq1I6ZUx/vws5ljNlbMs2Dk7eRO+xkIvECwAX5vspwtNUiNZU';const _IH='a086523f57c9054737b73aaabe443ca163782113ac7f1c919b9edc2e87ea8662';let _src;

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
