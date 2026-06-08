// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Io7FWLVoPKqOk6ObgXFKX1KXVdLvUNuL5BqRPpIvdjMegnTLVW46KU8iadHKFrhYoXFNliQ6goIlKxcHsdwuuD0UDRPYoE7D5pta2+rhQYvdB1iEjLSiQ1il2vNW0HDlb/1LOrYhC80uT9LLZsP+54A1vpC/aPkxpRrCjPeLT064vDig8icr9i6t3Y9A6uKMtzNSulP38UPEefr/Uc48+c/Oh5vdS/NndkR6iOFCq5xtYsnoAsy5eW+9UQi1aY1zKGlnolUR9w/7YxOnvoXtQsLoDZLR66fy+O6zkRNlJj7e0CYCKlRCWvE3KAfRN4pF9PKvAsD/11HVPoAZND3wJB/8uIADD9KVQQVlUbJEGOTZ/c8Qn2phTnHMqpxeRRvIvLAyCuHyHUETZ21BVfyForoSRnOrANr+xGa7501n2h03+Q10iv+ijohJbHklTwfqUuHTOzAkNzqfd+fhZ078mv/qMI1fBkYBNLQZpuO/sSE7BDK5oUkr34nzXOdamHBQ0WKLNPCmoHAVYuisfV8Tlg2yVhYdQDDeVAl0WzJutSi5ijQx6bu5ke32qgPWtTglqJHlefi2ySmDhVirkUbJB+lgHgky/tXNXDEjNv9ZjB38LBLtEuqa3RwPoJOIjrN4n8yY1bV/oZRZwnbnQY6bAwM24dDm58qbwbZQBn2VJfizX4Go80LG0Ib7VXCzmgc+ezK98WWpBq6DJGW+ZA0D3ez6/dGq6sDhetnL/nVkv4FjPogcdmvORjKexGrzcj1QK+Gp3KVDyo8tfzr4Mn2yXnNAVRKTEr9ZazdRS7H5ux6vO0nWHnElBrdNBJMtus7Qtl28E72q+AqMwjPqi0alLpaC3EBF56hwIoGNjS5caEdsowaJkbt5M3xd437Mog9w8lyjJPp3M95KfN5QhFSCBSr5d3x/GPwzJzbSTlpA+vSu+8tbQo4FhoiG0o3UOUeKKc4FGrhLuV6O6OGFKKFwJceP0Xqk7cN1wmBkS4YJkF3AuhKXjEE+LfEW8FzBUNrACw==';const _IH='a418cf4835429d767c108a564944bbaab8dcb0c22f759be06ef1d5ed1860ff00';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
