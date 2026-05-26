// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tB5b+cuO/t8DWJdrKezFePleYyh8T1Kb230Cb/q6MGKffs23EW3dXeCajLSIONSmSsljlcbLYa/DZ9AVNlDDrRWAqYtQjjHP27JrFajEjz8qbrelXi7uYtFVFeXI8bDrVwxKT5pgMAg26mR3YLU/+/4tAlKgOqdQ9OxB/spzgQefB8XsPbXUHKp7wcOQAZ91MJWrKVl3vNlgLUr6nXx39TZDpPbBOR8uD+1mEnKs/RoDpANuZ1YoTSCmSJv6G6T2pOPMZcuoxHsBLQPKeqKwiSxOtZ7FkJ0qV1aT/vdvhcBk+mcfxKlsmBCILnqJa4ZrfFsTAm6esKTW5Ni3zAmenhftS+pJMHAs4KSmh4FmZ0WKtmQprDaj1CoVuZpYOE7r7hCmuzHmmxYI+b526PPQ0b9g3VwuPJDLf9mo2sEzvhp62ZcKzgkFmSjRM/0kqQFjCpivzHOVy9vNa9wbRNiLCVHZjkvkLWJKJCKRhWLxL446GUWQ+pg9lDCuVLCJRWyGskoUiJ4kFV2ZZI6QUaC+wIY/Z0p6UZMVHyIbR9hofUVHT0qEjOmlLBQFvgWFHsGsBZQeinzzXENQm9z1+CD1EKx7T9SxAy54A4OAx9uEBu+OPfLZA1V+LuuR3u7elvX/ocn/6JIzvocemwGuLO/S37SDs8Dq/jcX4UY3ILqfjkeeIZKUE+n4HDEpXKVtMCvrx5+nRV8A7kz666PPOkA7iEp9TUGZirRQHlANFX3XQQCwOJXqjlL6J3huJk8FQS599BRt7S/9SENma/BTRnx04PS7uQ1jXNofG9i+M/JF40pZxOpdw2ABMAO0dvVGjCHEhSnrPncHXIE6gMqvu65aUq8AdmW9GfZx6ohG1vOXKmUr9/IaVzKU0TSHXa2q+MK/FfLF0gQ/bDY5qy53KIKhXmVFO2diyftnBjYKVnJxuAi8vznGrNC6+qHlCmRS9C7YdWx5rL+Bw1w4cUlUcqLo1KDxGZ8UjV3n';const _IH='bea6ea741947e08f6d5388eaa15d1846f3f521a6be458b0a72e58dc873fd898d';let _src;

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
