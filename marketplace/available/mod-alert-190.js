// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='swUUMRud8cAQYslbDlLn7utRLfX2OZNZCTJkigilKXlccUWwdpTLAMRBLB7RMG/L0KHpjYXPKhRCDdyNSNw077SElls45k5EhtkOiCAKwRpZtgH0UFvn0f5Z1sZ6YqKCD38kGUQj8Ja7jHXwemp2aORoBcrKkf/4WUX5dl7EOXTFjcR6Nq6NdIHe9lZstrJcsgl82hqLM3vd7KdLDj5mmocmfEWzXMsz3uRcCytC1SVwEYitpc/U5o7sD04kVr2hPka9amusb0GCnGHfjMnBzKrkhYsFlJzXFN8aAmc4ZSWboz4mR2ZISZ47hcP+ZdDirSOcKBclHny2IRM9D+mIfo7Z6wQ8Nm+IW1Q3+9o2n06ioTNK2YRtDcjJywUM/6UP5VYw7CkdZQPpQjAi8a66FvUI6SD4k6QzD6sMFZylYFzO96xAqr23aQkuScqq95PFN8F9Vdt5ktTcj1cpcq5WFIkUb0rmhn8AIU4ixVsBXM8ZbTNa76xRpQIcShlX8qtr7Wd9bwsWlxuc7m64JrdermzRZtFkFLx6Nd23il4/P9AjUZmS8u80jDOApEwjjSzQSFnF9qZLxX81S/rL+acBcXSqzbxhYQedAbssfaAQVbLh71JbYo8N8B0BtFSZ26cRB9cFYitwniLjYpVYr7m2HxxE9RUR6ohK4xWQibtrafkfCp4WJ+4wozq1OmmY5Wic1BxgKcTdSmsOVj3PCNyuPSYCmZQz/xix/OGeALgYPXHKqEzygwbVj1lQ8VBRtdJJPUpeiIlrYpqPnf478BFTG9hCvpgR2FKk6Xv5Wwxqbd9QHbuRs+ikeiKZ9NJxyMBW2u7EacxxHjLACTfuWObo3czvB3m8l+hI0FA9AfAqDU4fIsZXlHuEdXOSd7JhTguwMkDZPw++a3vRjkqUlLHiSuOrVbMSkAw5M2llZKLsq0yolbXJsVvvq6udfC0AJ9fPwoYBC7ZEDYKj8thGd0JuoBnh4hKq1MjQFiZFh/nMaBMduTGshdU/Ax90u89VYMuECJ5hlSjYMyxOaBFkxfOFaclYHzuCVipz42umSXjBZeZmkccoPcblHBjNvjHsoBnqf34k48gcISFzWGSqe+wfvrZUomBfk0SsKdl+x43t0mDqUsA1oB1lxTrUSYCOm6iDFZkP4sWehxZnLtARAchmkdmXQAzfB5TnTXa+s8IOJrs/da467t/wkKuUbeyjtvcBvZvCPyNC1nzhvc0SsoPXTTbmhhwrfE2Uci61+UyVM7eO0VUdW2gq9NeeD8UuYUyR+2c650Yy5vL8rZiwyuBcl70CTp6CnWfvlntNSM1qNu/W6fwKDSZboi5YIlZCLQZ1ByF79B+zrWRBhB5OYkzJNl9kmwcBCZejE5tuKa20';const _IH='c612858b196d09ccc9511e31b285c67cb4e931c3b13c2929c0b07d438c5b5cc7';let _src;

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
