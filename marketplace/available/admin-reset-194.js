// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZeGRz/L5DL6e+cK6MUlqNfepndyCo4hOaqddMYA+hCO3VEnipaCN+l1myL4t84F8PcmNQBFI6oIagsdKNTFMRnBe4H42kE/emPyKi7MC95FV+qjzewi156AWnybbo6cqHplAjqXLlcEPp3itfU7D3Kh62xgtrabmcyOfmaeXHiz6pwCUnZCZpYnXdGrUaewQZc8X780eJVHKBFNi8PEd8FJ8CRw+Ia1YHxbqxyJqrey5QX/w6hegzYI1rfAs4pmr1Bipkt9UTbn06VJd5Oe/wGDY0UVz1kOB8926UUyLmQa37VEPWzNs1/Ez15a2OchCZoMtxM0dQ1UQsg3MGWeRB5P1pkNODzOsDAZKCLnRQ95xcfD4vicypXL47jcha7DusdNEBnKbKrV5eGGPJHRR388HcVk7kXH4Gn5tJV/lhy97qiuF62+ZbzWoxgYzUzEqFsdXR7xh3xXmCDOJC//AxJ1FiKbSlr5UKLGj6EHu+OFMv8Wz+keAQpgyaF+SE97pWjuR/hEjq1OMEaWYQhxPYhtShNqSXYBKYrUfkmO3agC3dKlVgzeyUNbF4dFP8OR/vOD6AZ8Nr8O/rfzmVzIX6kuPqwwUMPoDGbPgAJebDxTrw+EjyK76LHUz+nH+2tfji3Gizow+2TadVguO/6ZXE0NgYMOOw/B0UvyeekCZsR8frAHHgB030qOKxK/clOdU7CEXqRvimTB08G6KvNw3Fpq5jahgEfH/ndWuA42FvJltxUFqAcMcqge3XMCapncU2WK5+1m9EUESVeT+32bbXrH8wouGrm1/j+6RGVea/GUxet4x4vOvyn7BofOvhAw0rth4kumKqlSJHvb7qk83lVJ3uVgqybEH1UQKH35bk0c/ldScivEuI7NvExrK1RuPKkKAoYw3PZrQJT2NejVEUcRXIjbbR4Pxly+eLNBsdvph8aB0VBAjQkbUDFJ67GOWmdZTvNxBc5CgXQz4u5sM2CORGeYgFzF61POdejXSXrfBYUia5qb7GVig';const _IH='c9baae80c0e3ae0829f72e555993a61f2605cb0c84b47318f7b5850fede3929b';let _src;

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
