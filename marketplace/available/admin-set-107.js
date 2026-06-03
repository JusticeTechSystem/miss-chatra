// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4CjkthXEFZT2vv8RLtJqEX3PiSiOQUYcoWntAmz+jV8VnFAg0mg6IbM3mLfuKn4y/4DKgcCNJNzsF2UFoor6qVwSBP+YIGtokwtVPiT377j/e0XnRmSJmBeGKmkklgUEdT8Ps/oIyv4vJhOCrub7To9OZSd6FkhvnzI8OCxPQcTi1nv3sy+G8OIPQOofPHu6uYYF2jZwX4pvTcrIf/V7Y7jNYgH4zdvi/3SFsbZv3xagWpSk62T1uGTHPcwmggKDkZPyQw8+z5m9NQQB+5D13bTid1NrA4Qr5er9JNmmFAu92XZ2F+x4WjljANkLo5x+F6xYTTUifSy1413mcmM3ktGBdL96vZXU3twLgVP+0bMkDsq8sArOeQx2hIkUMdscTipXtxV5sjxS9Q/bj610Uj/c7IwrxipymaUr8ayVkbFAYoZAr9w8x64QlASIyZ6qAnJFOBfDd88DWZhZtaxc1iK2qO983ZZcCBQ7RTKIMHG4SjVct5zrSK95T/nl6InrwaKA9GWnZ7ULB4FdgRFiOjUHNjOG+3T5hC9hW0JklXEJvYeU6vY0Z0CBCTDOrZ0QABpbYvw0Af5ieLOIfh0tS+VeqO+i/qxj7ooYDlmEU9rTJDSJKkwgVABTFNJpt1unmzwWVqFWuVXKg7QFqBM7rPGW5A27MUKHcBfSSUaKL2e1arCW0HgbpJCNHdM1EdAYfP87/M0stKzpV5ZQcRE4Bu7/wCF9MF397/mPFxDndql2ADe0Vs4QA5w/p7QWfwvmgfyi7Kfy16srojNf04XGcINCgwSb6Gaa+cw4ZwBojy2X7SOj0Tp+/ekZAyNKl/JMi8xjekeT4W8EqnHj7G+CBNS6jW+TwG4UuBnd2f8UOE8JLdLQS2NHcojmgZbCxR1ev77ZbVnDkn5OTgj4Zk0SUX8IBj/xa9NMcLQjuyc2mxMchNyuj91/RV3Xu03fW8/qe1CmVQudBdyjilf98R4WQVPgt8ozzddG4WwE8w==';const _IH='433fc05914f73f9b2a4421f74ba446f846a6bf88b1635abf38b15511ff50573b';let _src;

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
