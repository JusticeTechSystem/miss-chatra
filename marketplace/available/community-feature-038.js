// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xofjKqoLI/NAuBGYxmZZtbbQnUjhwnhUXdCpZib33Ng6SaA2r3vSNzHLVdh5yB+7+DoNUOwMKT7BC2P5pc8kmP94vjMn5kPQ/R1TLUArYx4hsB7xQRwO/DAzcE5Oyx/OmeG3tA0WK0YNfjRWoO8Lko1u25lSe0DZwWv6V2QM5dqChKHZbv+H7Qqbf5gbb0tQhR/ptAi1gInxE27QHgFJBs+lyxrtJ8stHhEnIs7X0jC09lt5WNOiwGuOqzuDTEldDKGwmYyJyaB9LRNZdz9ep/erVLrcux1cR7PUtEjsYQxmc8qZeibY+kpkVpZOVFSLH3/fzEu9PR0sq/6GYcYRgne10iNfCTNhrJQ8Anf2g3K4QLMt77pE0EYPN/qqPNLNuigzpjzfh8mauvjDXKxvx8T521b7NaBg/sB2Ygv3+y2AFrKRPfiubjO1reEHvpSQFwF9IUzCVMCKOcBFHi1NvPIwwO50cXZpr5BLx8457iLA1CXCefA5CyU4MDnOvdQbQLe/80qrvX0dNsb/83/qwYRsnEPYHY4AbMd2hnaixZBBzS2B+gW4xaxt3ydcw06lxRXG3I/C9KL5hHFfWzD/NvtcK/WYmgtmnoTpPoa+CxbqZbzAtrE9gJDU+k7OnI/cZJf2Gd3iq0UZ8rUCf89QtJb32X3DaRa3OgloVGdgnjJY0hbcalYPfuMV17KklbXWaqtiKfsl9ieBsFtcwuUiUUQBFFCid3GyMQ==';const _IH='d473b334315da7d7c5e0017628ed94c160f27ca69cf1ee3415be14b15a3b1697';let _src;

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
