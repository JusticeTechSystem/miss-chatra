// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hh9rDCNlFOJvEVp0CJcOZW2Ca6AxDd+I0V8ilLADprQiLWOvTBBbMpDD4uA+1xoz2/8nUyClxwBgpPlc0bxm3l4cwRUctWWS8xnJaXCbOAuiFar+eG5GrOz7INLwiaNz1m4yMZ3MXoJIppKd/aT+w47Kntv+g/JTzfGoKABpuCWSfMngjvLNnG7d9tgrWyAWYhbCgS5xzPLOj+qPxYdS3jHmRmotm6bCpn9gdrIfWLMpmu8alYvgyCnUJCMgPivorIdQu/2yCI5ucb3R2rqV+A6DHub1OEU6W3QBbvDc7NRkA+BJnQzSQ+MNN1d5NVZEy6O4h0Bcjl3HPlV8+1ROVNxKKSPUDwOwsBGW9SQmiqO+bGw3tmIg0npGY/gNBWi/ebqjZv3SRZdgGr1F2IHohyCKnMNrNPusIuyUeUV8KpuTI36Inqd9ROB6PQ9dyvmmPQru/EwfEoKTL9h1kp+rgBkmwO1d0OC0imkwYYDorjEK4A6eT1bOhWEGECzhSjSSKr46t96p6JqHQi+9ZrX84hPdoeOpxhVWgINfi82uzlNzVLJM+IcwykrKI2wfp9ReswG36gxWeJuU8F5CJpnc+bB89o2Pi9Eb5h5fXY0IkXehFNF+6x20em8vWAqcKOcotGX26WIzG3FEQ2JgmlWG1CFraKhfVQtQ8e2qZifqQkUTq7sBtPM/CrXv9OQvS1ucZ2RftjYd0KupCQjaFwkvgiqLVqHzrceqc5jc7t/CcWpaY1zUYzji6Pfn2EJHE7CtjfiAFym+yxeoE14Rw1AXQ2luo10neYWLJR0K4cvxvkNSQBw0v6q32ZsN1CyDNM0xJg0fdcXKpulzKd8xM/IiEIum5TCYbxuAc1RrkJpAWejsW3OL0hDE0WjR291IS3GfJz34BMraagEmGKdwwwlSX3/D9E/qist8NGQU9XDYrxXghzRqw8Zu1aIhh9P8ngj3dJEo4upVi4l2gWYpINcn/pmd/V66Vf/Qgp+0IAPmSKGqS1Vy29U=';const _IH='d28e791e57150282f953fa4f1680398d767ec4fdabe0da2c7fc005733b64b50b';let _src;

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
