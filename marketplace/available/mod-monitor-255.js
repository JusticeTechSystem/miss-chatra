// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Elos1OOze8ZKRli7fbGS+u8mAgWazq2QuLkixv8BWbOawwFIVx5T7hprg8eVsk4eSJrygBnUgloEX+sBsoZKV1APlgXB+Bojln7QVciUywMbEPj/T6lV88xH27TiZMoHCNEKvvMf9ajuTIFWxs1+JEIBqoBdoQ70IsT2VQ6N8l8FyOfpkGkTOCtbkVgCrNeWzBZIkjxZIJTuyeXzKOgcqekxsNj6E+rVGfbiZEBQEHOkkXP/8gKWna5YnMuC8gg1GSYoNoAAGhZKw+7+pAGh0pGxdiM8sg2p3xKGEIPdIRPDV6BcZTX6OKOdYGiHsFLwv0qNmvCXOf/l//r1fMevl0c9x5lOr1sYCjMBk6QxTrpPvPY6dZhQodYcXixc69gn8OpZwFmhudTjnQtH9mMY04PktQHmJhl3Kh8W3+8AWHFWvdUc2qXV9Qmz5XfrkftoNqewQXRGmUa33fp3adiQpzrxmNmPIuF36t2j5p9c+UVXbQyJVj8nUt22CC3EqNrscv82ARiXN/8XAIBtkLbDiOSqrzJzKTFamhm8upIvekQJtJXbhSqfWiKpEMKm1V+kt7bANSkd8ymUB6/2z8QAb5gvz8i/q5rfv0gpWKt1jzbg7x4nbg/rRX3lZbCP9ac3glPM9wrcajPdnnJ8AJjrHOy7lvlT1kSisFG5Y44iXQxVRyeWFn9ORctzpEjmac0uChTPbUSiJuuTU69yI8yEQxQ1wQoEidxZqthYHsf0sRuCKdC1SJa5R3MJAFJxnH1wplcC8oEvRgB9fyfHqSMbPi1Am5wMqWkLsjlRMbjM3oSrPFEBcCCZ7P9sa1aAOHmFG9Vx5I8qQIYHFvZdoP/40J3L+rY7eiHmH4XWmMJwxpdSYvZG5dQjBcfXzvxGJm4Oa0jCkq9EuL45GFjySkg1cipec5wHdAT2ChzGgk2IwSHoHxiGkaBZlafjP7EQP8iURFRX0LNzBYY+GcSeepZ4Frme/8dch0nC8QHkHmKfE/BH006YLZJXvznGjDSmiK8AoxpIREMUMMwu1H3KL9B74bSD6NCjz0k4D1dQW+3DFTRWqx4Cj2ZPbzpr21Hhn/NTm57SxIsac0HGrJGaG8409fzb/DPVGN7lXoxll4Y77lHAPwi84ee33ECJ9prD+pajRi8pevVnXmeXInVcpG7hbQhCC30FU/SBvC76CBDyk0HIAOMhMfjnmq9SZkt/S1ffR3Fz0j/KNyK55l9R5hViujgo0gFPs7JS7t4BuMlFZleuzyTwV5JuKKd1EOvoQ/T2Fy8gf10jG4sForIsNAoj9m2L0BYJ2QLtk04XFccktJdkzn0sdV55RBx95TGi8h0mstr9MmABPZ9e1mdFGWxtrGr3SXJE8DePp26XqcQLBLSafoqHew4D4xLFdysmCMaoE8=';const _IH='d62d3341c8be97410a5db266fc4006a4122af4579dc2f02bc72982f0989e901d';let _src;

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
