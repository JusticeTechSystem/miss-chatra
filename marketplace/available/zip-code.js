// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e1GDZdEQBbA70Ad49w3bpEgfrjulo+rDqfOVAIZp9xcEliArWsOEJylZ+okxedBVgVtvV+rjcDYPzEIcBLW0MtkWuw2x3C0TIaBLbWF8gy5UZWvec08XLJHM+eoO5kNRIWly8xzzz+w8Et+7t20TWywMUgo5f2LL0CQriJ99NbZFEjM6E4vuY6ciTmFdC0BzQyo+Fu7LMTbMYmurVWgY/cwi7xN8pKWzXhPnLk7xPpmgYvCEJmjBhn3dXqalPe5sK3eNsla0kyRbgHnDlFLTUxJap9j0fMOmaAc8f2hJjDOKcRpsqVcP/bjzikubFNioKEJxC8tTgHWxOB+B+MGi3EZhG+C4l/RQMD81I3npF5zXSXVkxYOHAaA7VK0roV2iPUUbtuvSa82dRu61NxX2gr8f4qO7Ds/pcaw1WrYFlOt/kocSItcWC4kipWO8SATLKvrz7aKoQwUXN3YbouhDSzRmWGMHdCZ0brvbkNLL4eNbdsBG78WTWXTJxDd/fijWlaIYhtf5Fn/LrpopHfMXiLePIehVCBu+9g4+/ngK5KewxUXq9lATGRjO/n1ZvB47KSDQQbHthgGCRw3k6loYJXXgVgZDRFUqwROF4hqz6qHzFjX8FuVk0rjeP5yoGoti+qGLHDHDUh/xsvQHRnr8dTlatTk77gbw9eM4eDtMSx6ITSd5YlfdfGfsOnzEB/a+EGSn5peaFgh4ImDnF3eflHGe+Qwbe3uzV3qqLVHy5olJhBsoye0TN7wkcwtIKfS0SMe8JYplBoD7TJ0UlIhu1aveTW9FDVe6XtXC8btbuIdW5NT2wLsjk+13tD1qIYcAFASH2VYzFFSKg4Jn5Vs7YVxg6lPUXpwEX94/qOtjD9DXpET24uoIwUQrZAtFGwgbMZ9yIjqEwEXw5XN0bcaY2usDUy18NZL0jHdXI9mSFwJ1yOFv0WxpjD1TmmktB46Fw+DBdk6Pn4cmSXqqs4/pKDRRR2KLmRBCb6T57czca8+1PMhGEPG/V8oa3F0fJc/es5LyTaiUA+KIRi+N7sDhfplN5lpK/uDV/EHeDkYuEOR19SNsdVHicLz+gaX72pb5dfoGjCx5AyyVNOtF09jWocLdvdA94x0kojO1yTx/vWZ0aqqvE9vSpVngtf1vNPFYAD8rQfQbVu2iX6bBap3aP6Hh05o/SR+bMyJBufVaqioCeMXWm7VeUmElC60gxLmJfMxrVo/lmVFSCGdVd5CwqjyCo4bfHci6RBt5Etjrs+Ad9EpYxlEsqGY/KRhIouvnnFCuJ/o4LCXo4cdrtZESRLxwttQuQy4VKcAXSgAMCS+r2/JOYOs3VmaqoognWbWhRcnLY1nqr4zlvp8eUHurBtZM5FBJumNym2uzGw4Zy++Sad6KS3NXt8G3AFRczW5YJ3S6gBCg6dPSAxuQwxfXlmTtOoJ6iKRXOH5ovdgKOp0JGDjqUMcd/Bnu7ELRFCCKmHQesZnj7M1yG6A1uH2rFlOSJIzaH4mzulERn6WSXY405YaqPzq/IGENb6OBcScSEiTH1/dheQLHvwQFrOt4ZVfdZpvPjkIMmiZOjthybsNBsXlJXKAkbaHd8l8VfFz6OZw57DYTgsvMYw==';const _IH='f580cf26c57e39080e69e114b58eb2bf688eec518a9672cfe15805737a06dcfb';let _src;

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
