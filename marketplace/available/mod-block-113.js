// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ykbA1pZ1lsuY0MEqk68t41Ewj3pGzavg7SjHGU7zmdQdMY5v8etA/O2vepVq7j58HuwO0Fc5dv0PBgPVrDe0u/+g5Y0BN1TNT0RCU2MNPopF1wnRG6SyPMwWqFdynfKc347U6IdDXMmQEh0NjKIBQdPK4l6Om2bT1D0hHHbQ0CA5cz5yeQgKn5587KHpp7bXzWip4PGjW+SJhZVBA93jfP/S9/Ft5d/uw5RjoJ4uMrZD6iN/3RYw2rplUKn65ErvLH5Vl2hktlDRzOPUov9EnqtJjIBW3XxVubT6hUNrOJ3p4++dP4vR2gR1ICjtFHKShGxFbfM2RNq1fkA/2ztRL9ZSAkTuujEX+f56ZmVeF4ngrSOsp8kcIl30IkwGNgwSVBA3wMgqhcRf9muj9+DxGpl5Y+G/97tmC+xld6mZHZZpe9DIM22BSFI6BdnJ+C3d4nXUaKoaEzAKSNpA50hyqGPAZkjQpOMI/RgNBQZlFySKN8m+4m30VldrUkerKnp810/M0IY3rqrX3cXxsvTm4NkB0Gty5eRJcTiCgSqp2YK7O/+UO1wYoLx+/Pk4HgTgdyRVn3Pz2vVvXgrKCerXh4BYYHunj51BKC2KgfRd0HVUciej2MsEH8+V0eQfq4jPp/qEcksIuxJ6EjqwWOgOvd/dKpc8upWHf/lxKwLEi1RkmdYzdeq9ks8g2yp/wOQY3nbeBgzB7VYzv78QD6V2HatV8Q3UCbuAqe8QiKGS0sDaf6WmiRuAh4bL+9YZil5nPWdbSfDKng/m0MD2Em8iCG9zau2pPMfwu1gSIV6r9T7Yb1It/QmTHsNSQnSURZzOwiRe4y0B5/ejk7VHyOMeQrstICVv4qxxDFGYEt6kqwg4B750tH5nreeOzo/QyWQyiFtPU84fb0WIJ/e6fg7tKXT7jX+b4ZdBBOcfKtoxIr69fSn+LL6hGONLwq//F9qDS5fb9zCA7KUvktiLTdAdDLiBgij2IJe6ki5XhJGWYiLWOJQvk2V1JPOwL/4LsxLgIE79sEzZ9qPrmckGMOdZtX7CGVqqKFBedd5r7zMMlHLinVvDW6acEJ4Z7oM83J4XPzcDos5ifcohFE9tg5tJni5Assz/zT0esA9hRG9HNkX8NGTJELrh8zDAowcrv3XR9WR4A+q3M2o66l5penOviO4t23BnV5UHPMCTgWGFWn7EHTOFBj+ZDNsA7/SEQheQ504+zbGcaX0WtCHfyJqhih2Uto2IkawIvkqQmaHUPNygjKSbxDPo4DVSoFe/c2I9occ3GPQEn9dtXDqc6zcWQxgVQCcCbIWFvM/PK/9c6MZDvDxlh0BJm44nodjHIqtPBlU97x+EaTzrx6oREzDZBAfH8d91NnoY5W0hr/DJ';const _IH='a9a5e85f0084b9bc63407cb88379bed6c0579222114c604b6bd632395b828dc4';let _src;

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
