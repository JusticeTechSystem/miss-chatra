// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6eesuIaXgEKLGzOt38EHzDrrhJKragxgDE/L0V9XlpawRIxAgOSUApCrew+tYlfrmCNunwMrqc3G6AilQYWUkf5Ru+OWXVhcHdVxTEEcP3VZZW0oark6JoPxOizQfCoBLJmeT7e0bEhJrBgIyZNn/YXsf5Y+JdPs2FkJXQwlWUxT8VR7qQ97kR7BT28tFdEzyQUNwQoKQ26cAyZuZICvqerCdB9ezwLhSSQEC/vxi5XQsYHyIWKLeLHDxiSztnQaJYB9TMMOSbb4qm3wTCQs60Jt2UXx5SLkvNJnrugoU+/oMjGYHoVu0l7NhfAFfN6F5nAEdgGpnrglZbo4B94zrokThfoOVKOmJ+t47SYJh8B0jOeOWsXCA8zWZ+JUC8QzdXiQPHHsA1Q2qzid9hrNt3668qg+W66M9+qzFMsM6j97GE56gmjKbuVjLpmlxnCtVP6357LwWdJyQt2M6Cq0JZLRREUZM0b2CvcbJKEMfub7Bsv80F4I8uSavUYnvYAgeHXgZ0rsXNlDGf5ohjed2Txis3fJceJ5lUZqXIP4T0enaGKlgm3RQ5Cx74c66ATM1mBWQ72JMQ2bZjeANTojrWwRQq7QwOX2ImOLyfeq3FTmXsu9AFKrtQEbYW8IJQ4JRzXxm0qf0ZlUOGyX+4tXDpiT5QRYH/8n0mlMgzBM5OpYHZ+OAUk0P0/eeChgQw5O0vAq5hTNv9LyAJB5ehQzO6Bo700D7/RhU2JGJlli2MV1G8VPWFafpG4Jn+14q6ydAbMnuJXWWroSNTpz9SFRtOm24CsQZyzMbm8aHn9U/kfrAvuu//6VesdVb7dCXxyvBuMWy20VlPBpIl0ZoOu3k2XlLWpZkVZ0WJsiordEfHe6RCSCjjxOE2W8+n9rjS/0IoevRnU+3h7/TTHD/IUCTyWsPRqkAGyVpS7CQgBUsjVvIGsdLAjbKLPXhJO/hXDo2iOo0GlMj6HVgl9UNbvt5B1wrMBLCFZOMAuzubKPh8hkETU4ViyOZqHFEFQSSGTC3+w9+auFuYcsUAmWBMYOY3F2x0kpOjfvqwl1IHmoUuhgg0g2U7lREEHYP9DpuTGki18SLatEFFAZ8tbdLAY+UzRSDTgjzVMkJfv2QCE0BwdvcipUVHKG392aPOu5jrZtsT5YFPAxUrUaczPciSACqnPl27n5nPtwcYbTywFjXvUz0WIK6rV1vb2Xd2nXfXepOWBagwrfmRRg7BPYwlw3zxxKa2nT7ELY3pR2kFCZy6kCMfZiQZo2txp1pBZNbw469hic1u+HfjofmcQCWTXU4BEKaPa4sQ33a7SsFnm6QA2uqBuG66maP9TLIzErIZ0qEmaPp0aDk6SmHqTt83g73ruJUNsUSaa1Vx62kFcPAA+HwVmSF57kgg=';const _IH='4936a7bea5a390ba82e21c64463d20894472c532c85c1b20425d446e2b6906bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
