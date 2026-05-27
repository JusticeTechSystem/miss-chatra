// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlhv873fEkuqEPx8bTClkZsBt8LfFUxs6v4hyqq6Mco5gNfxQh1jZ2evsbnZ+sMXC1BIaQWO0LgWmYntffyuyXn/VUkELbV9Hk446G2nScFXzYRN+PTCRhNzROMlbkopEjlJVnZ882/h/xbILM2+Z+7va9dsNRZ3fT3hUsFNzZaTpK2hoHJkb/IijqayFmuI+N5FYRGqRelmcrQKA8X1rfnl4fOjxI8588OIkcUNOxjuIYhJ9yTDamC2TXNrktg+slwqyoI5PRELMWDX+VWRNkt5ZaNC3tOX90uzVqsNe4U1rvTi9iZcQYPy4jB34ADs1AZz6nPquG3yrA+JNqpikHBN5ork27c2yweT+eiVAITmLAr88z2nsVUrd4/VvhqeBuxZxaSaLCZkct1nGZ2D5Z9cyvSIaKHAKsAdlErZI68GTtcSxye/V7uUa7lEnc/5HayQaPmmnVnLYzSUe4aoExV8RxeJeMewT8wXwTGJin3x2EH76uwJt0jxcu/YT2TLKxi5F/uQmYVgA9qYVVL7uRnbu4m4S9j2jIKWU6vyTe30+FaHGFbqeayM6k0RQ0BLsxMZPGJMcFe+wRTMJdURodA5oBQOLj5werb+7JzaDjVNPwHW7PZW2mFLe7KYdvgn4q3aFF+nTDR+WBVtWca4t+nKvNTjq3yg9Ldsr3ueLRTn2qunml0ky66ifWWTsUuZnIMzeGmklNbQtliWEFKuSiKYVjPwNCmueDf5OvRSjak0N1QPvMnY0cqNZ60byQRIjEL7iRQcqcDUXf3WzYqMfFZSVFMKQAQqFFQqaqZxjLxslqeHiFfE6Aq84kFqK1Kgf4sujQKFi+6P4gwkziKZQU25b+icad/2CayG8McgbtS8cKPxxEzsAIaBOO2XqQ13pvsIK5L157CJ7cIdE0AUevzpeLeXxQyiZ+cMKOsZa9A07R9CQlaI95LHFRzl+3wL/xHfXQ29LKI5bfrj7wm5vxElU0mSEMdOAg1mcckjbU1ZbzNpfPppilQj1haV7o7TTsr+l5ZGi+o=';const _IH='3bc987d7771fdb1e64602593ca72e8717f58d507714e13e9c101afc7864583fc';let _src;

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
