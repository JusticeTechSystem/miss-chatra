// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T70OXPE8jlH7Ho2b1zigPDHavKJzC9MndXtdlSmrt9cSO/dJ6PUtmgT3QPzxSxkfYuhQob5qnW6piI2SYYemkutCzFkXLMtQ6efnl8TinuCUzYmKf4owjX0JZO3l+Ud4bKbnzhgst1rlFi15b7jT/an12JfhDYq3zESIzv9CWb4lTGYMCN/fKjDqKwGtr5Nm+6WFzEu0Dj7KrHP4JaHV9nMzlvF/vw29bcAgxZ7VXQYIWu6uE3XeVrtj5mMODuekQ7A1FvSbMxTSoETMD3oFWxMR6OvVdZAnkzC9d1Dmo7kVFIE6p0hBN/sJaxrGVTSioQ9Yi1PzBcOYGrg+WLxpQN1t5ISsZn/35foHoZAl41xcNLje8Y5qAsLMxK2GnWrlxP5hik+Rc7QCG4nn8gU56gTdjTX4OwaSI7RjjzqGOeqkwQabTMnANwKvn4v4VFfjXpdnTBOacZRZAs/qih4fTZbInyWiv1i3Owzuwx1GPB0suRSPN0Y88SIS5m1PPflKhpM2eJmTrwZMYF1nGUYmxpizcyokAviIObrWzVaWpEAzseLIIVKh9zUHxXERYzyBF+ojQrIdqrFBCC6H3eNpHRecpFBNXl6KKBD91h+4Rf2kogxoF24sT9Qf4By8uRvwIMcf5ucNIpfWB4zy0TPXgZNynhydHRltNEeA48I9Cvy3+fykbTco5+b8GLFGaXUEOD0rz+psUxgPdn6BUjvPOzDskYD5Sys0v1uYO9g=';const _IH='feec41cfecc219c35e0b97aa0b36bbc97cd019aa1b544eccbe5e9d41ad4ab451';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
