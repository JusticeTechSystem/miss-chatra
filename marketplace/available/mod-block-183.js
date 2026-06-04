// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0/gcLoxmQf2IO/dS/97Avm1q9CQcKaVPNxSkE9srhYwSKxNiDYGkaZCoNNvXjD6fAdkOPPDsnkbpOSyy/yXP14FOE04ZB2+iYXLPw5mFGJFCQXSCFBUk7Fj43ZsUOT6nYHzLcPSCcnRaZA2ECZUsgkmOKbiUYKC/enL7fxECzWCyPGUktN0jgNEY3dVNAuzhPEMragxASEFJTcVBtbR8r/5OFSg+xJsbVHi3OLKsITczazturHgqoqqqdYNnABBVodnN5tiYRVYC/3MY0uk+9RqgNsV+gSE5E0g1U1lHMBloNLuh7UItpmBEXz29rEznhCJ/4y6cjCr6taD2pmAMOVFQeHTYiQkJY+4aFFiTFRRjPLIqNpnSDa6hSPcWZ+rS3WrCJBhEuzAJ4Yroprh4o/7K3yKjo40kOPs6NfnMJ/TVUNWGvsL9sZs+oTN1YvS5INUBVHkGZl10fi/FOY1bL7qM9MVyZYUTjV3r38xCqXr+JNgeZy7S5Jpn/mG33A3DYkz21/x9KRBTDOUGQaEODZ5pi0uiqZ5gWgMsld08P5lqGWjSCHHygzPiFF0dbrS1mn72+QzQUG1WGy680LIXEf2I5QEKCiv9x2wzcJ+b70KuIhezjjKAZPV0jLkTfrUBqaBo8ZhN3wyRDFa4by169x95H41jf0cNqXuXKsj+g3QOrQ35ZaZPZU0SxykpJVt1BrSigIqFzw9HBm9Gqtk8x/+tAmD82WkmWGsucP0SmGPNhmpCKPljkU71OKXrGl0QlgEfpepRwgPFNGjnFAzJMQbiHjvur1cE7eyFhNsO4lh4IQXc+F75kEAKbPYSAhn5GuptCfSt3Snnuw9wnHgh/jpBJeukUpx5bjJCN+vv93ev92IlnzNUWueFOleN5I2KxQyusaosSJF++rlTviy/LJ/fx9JxpG9KBMUxaVnkzHTvfKDhGXETi7ckZghJpJr4P59FE0xAUIAlw2Nj+b2LV64B2gDH78SoCTdScOGUO5fGVQbuXL+t7QopuO7enKckPjDnYSqSvajyIlbQh5j61dHNK7wSuFr914N8Qb3gJWBgY2fHRQL/uPpfGxzF32P9x37RZ34Fk3xL0ED9kyb7lq9qCL8YvtFtIHPTnw7qSCS95V3vKaxsTb7x2LcqfE9KWbY+y4kf9JLdlAOSvCU6O4WWF4dunhoBjstBS6c5EBf/+usBwwnu3SZFL8V92ZMiE1aIkCPkkZ2UGb7hHLhGCpvlWVuUCibJC++B8LCNo8DSvu/29hZYafJKzFhphZSvr/9vWjyEsZq0utQ20FXuzcWoYmaH0A+qDoYd9pyPK6dTzgkeZ544P2wDa0ai0mFoCkv7VJBc/WvUbH3bfU1m54oQdZvvbSwlQyibi9zW';const _IH='935d0d21a430e0ba6f7866d6d21b5e4a753b40f2eb6fde2406c94b879923e992';let _src;

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
