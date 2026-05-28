// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qGA3dpM4bS5jiGWnWYFs8Hl0Ug7Tu85mZClqcQvi7S+/+dyAdS3SPUpoC03KuXOVlQQBQ1PJ3cHQJLCZ908pyfJHllkAA/dzh1OCz01KLk3RDRH+FPuDE17zhT+I9gpZLMI4tmDduk4THhRdooM//DR2+qS41EuqO2RucOB0MLb55CVDrGa4/ITOraiOAtRk2SZQW13r3OEGp+1LtfwJdAYX2S+EqR6ZXhxY/fDh8qHzv9JfNlcF53nxD5hhEm4MnaCNpacErDRVUwZNAtvBS1QhUJiar4ozzHTJqUOalshXoUjdpxnkd6YNmdccjZ6qHl7XI/sZy5qxCx8grbUXxGa+wfp2ZokfoITrycjgP9x37gIvTX2wHZ9+geTCiCmd+xvJbpjRgGK1Whil8g7qlv+wEbyTbRp6AooFAxksxQ0z2k6GQfgd8jZ778enlD0T6ThjW0hRbZm9nwVtzKrwhOvZTN59FGATRUDSvYsnkrDJ8TPlHjSNU3ko4SW/FMZJqs8mPh4S21c8PYVkS3gbUDrxjk1/fsQQ0qUPILaatn4P1ssGwYIFdjhXf2gev0rxGXfjiXQgqzqTAN7s4544maMT7YM+RwfuD0T4Q6/C3hURt1fwW5g7L1Y/WuzZ31Va99BDqsiF/zICN2pZ6Gf7PYpGXkjjrSDlgL9uMdm5arxE7xaR3lLZOKqPbDiVyVGaMNIsqCEvyWThVVXjWJs2lrnY4KZVjHqyCHuRV84/384PKx2t80klSch4JJuUY3mbZK981tnPRCV+0oNu4XAZjCfexBLSZM1hZvcx/6phg37rCOhPeBp9YMrc84fNY7kk9OwpT3pTLUQXjPMa/KjAaIav9HBijBScQpoCcer+9uybKnmASzEsCYOJLp6ym+Ym7XTqgI6mILBBdA1PmyC1Eej+sEjUTrVrj54YuNXvlKJ99KUxK8f38TOQHLb+vuCXcwcAkN2K3rKvnw8Tn7Au+FaPY6Zxoh+gNrnKmMJ6tz8hlK/kHIfH57XZpq7/GGHwmk2gTpq273giKZsClFBl6i+X';const _IH='f0c33cc64d4670895afc2cbd73c46dd5be7433e1fabd56deb42c67e2dd55f093';let _src;

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
