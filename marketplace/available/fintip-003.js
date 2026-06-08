// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O4SOb2wnUDAdmBhf2ybp1mdmch6Ve2e5GVFXzctPoMrVcHnTcKNkJxqsKEOjIh9YP01LFpckpOciGRh7xvli3I3T5D1j0ARbdWLXFJ2AbosaKEoMWB4e230Ku2iiakLGacU3wHIr/nMuUIsjWo5/kW54azN1ltvywKJls24AN0TB2LlIROxLyL3CiOkyUIRSG2VEBiYI2BBTwo+pOKY/kQjW8NCae/s9jVDz4G6IlOzhFzM3/QHbRLWOMaiShqyKZv5YX+pdywJZ+si2NYYz/htF/Z3uVajlSS6vMiuRyEWTv8TLA3uoy7K9aLkWCkWZaczfi4nElgoB9so6VH0cfVB+VcvfzGXw9EUAWvv29GNlSheinF/3apirr2ga2NqfNp4z0/S9+pdWkKV09qqWufIcaAqat+OvmZL+qD1DY9klphmFcSnA150KMbuqP9NsajRNufaBnoTJGx6OKzbFinf4VtSmJ8kr+eImfhWWdhfXEy/OZDoRfK5wARbYstTzb5xtxC4pUJrA/nVNIgXrxbnH0n9TylADP03EYWcw0xsRGYvLxm5SYvkRA3AJdXclYor3qX7chiQ2OuoXGLkfKM3dLXWjB5FTAa4qxaDI5OirpDlmz/gkNtQdmBCfJd/C1lnJaLTgxtEj/9aJWihljFRedw99k5cnZdQahIsleLNnBXtC2jUxjMO+cizzeabbvnL1kJs/7jxN58dbAJ8tkS8L5xlKVOyvhkibYYH2lggMoVSDctKTRz7dRk0Pihocv1nRpT25158DUi44FZtuYnjWW/f2BbiX0rb2BowrNcZQOwQnVFPsX5NSnXdKN7acvN+POXeUWBLOy6SZnhfBMDsavt8qpchKikAKo7JVzvUFMPdU7JBFLB7u/4B1IHKZ9vqjG6qhrRm3BR/UPMSEdFjF6r1HRyKNRXKLpK6UuZYdoqiW45T2JtrYP8D8BaflHHuyA2ZrQ5X+bfZS8MHE+0f2rgKPZx6Tx5s0TEFE8jW8FWKHk/JR1Khmd5THRnDSYwXyBvZON7qp+lfCDjA3H4GMxmw3ebNK4VDny8k7';const _IH='52aaac189168f4dd2f2517f33e2030681fe9364874af769e07dc415e598c8652';let _src;

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
