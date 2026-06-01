// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ72DyB/hEhO04UIzA/RfnVAL4rdK57u0IIHh8VvlmraNOLK7EswDkvt4/wZTCYI34Ax8X3EuLxXM2ZGZEGeoiCZJyOT6OrqHcOlTuJjWZa+zM580OIwdLGkab4baF4osUFj2FzLEHArb9KEOAcGBH0fzPPMjtglT90dEHA7fYuAkH+2+lkZ6/X5WiARFZWeOn/vgLmJpQuwOsFeqgrtgWqKnwCFw2bBtElrRa+BEt8vkJ1B9KY03xvd5BnKF2UXXINl2Zh3tWAaZXF3BRuCOPsyRXaM5LJFetYfTdavw1WJeg37KR6DgFFY9bcdF4zqqSWkKhgzqhsWMvqolzdPTi0jirUMpwAhxJDqow7XIX8DHfXyXXGC1V1/lke9g6Rr5ppjW3ocC6+UmH5NKtQ+HrMT3+2gg9PQF7rJ08DKh45n36Fsa46wfmAkVbp2DYwz2uDDSzGQvapqaDlIUbDtDnzkRbN8Ug/m1/LtEE1QD5+LF7MhJq8pyaPiD5DYRZ21cCqx7yNvwDKKL4jDUlZ/t3PgM9kQgECu615a4NC+DcYL4YoDXOhyCiZn3EPjTKjxb1vcOtjh9A1Ik0qfOv9fondBnX83qLgn04gY08mh0UNRJxPj3WPfgJ9zldwtZGjakRn8ClGJBnMBWn3JdqssSwiuSXoD0EWdtEuyVgxbPX/uUX3aLZszhPv2JRqlcZa0Vc/YiJHkwhugO2m3s4XVQb33s771IW6bqV/KUxQCR6Z842vA=';const _IH='45ef4c1cd34d9eeacf99af3a1b7e9a525f2c60618b06b9d9a4162cf9917012b7';let _src;

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
