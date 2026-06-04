// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C1MUGD3vzS0oHcR2cnXHMZicffcsiVUFderKZoUGad0CvwQg8j+p+yLLs+dOx9IkLCDptWyXZNuqv+CkuFDJZ/4r9gbukXTygiT7bO+FRFaVdkR0SmyUdlF6RdmG0c0edOBV4po4ZRgMchD2xIuKMFze8NqSyNrex9Wsu49XNVoyMI0ounZGk2mLeuJrvTZyBhMBglqUidivE9UJhbFhFUw1mby3+PLqVwwncsApUB7b0Wjjl02aYJu+spXa8EJqwWNVHY28prLvjqtSatQtGjJTLZdL8Fmi7taUTK0G4aI2XdYwZFZYqubO43ed19qR/dKRsN3r0Pb4AqS+TrSqG1PvhxFGx2HKPElI7mZke9UdwHJRtRzIQWEjlrkB9rcXwgM4jssz2hLRi6NKk8fQKL5E0MNkJwtlI9khlhfi/GdYX1fnnri+QEmC3tIr3Kp+r6VNHkO8llBIuqkvwgBX+dBK50pjj5aRO5VErtA9TuYjQ3MCJxZIiOWvxxFjmFItfZNhRhjgjhSZ7ytdpoSOJyCenc7PzS1X2HYZtLqkrco8zB/E5y4vKh2e7EFPTFmQALN9431t70pLgFEZ+TZLGv3rNN5j0mrPaf52FM140RbLpvpF8WSA+HAPs5mVmlDiXSIokii4jX1bq0bABhRRp3Iy9XPyKSFGyiHJgBiTf25gjMt8ZLjjd4PtAqvH5Bb5JYjTU4mrVV/+qfLXcXYC1ugLxnEzsA3LqqrAqs1Uc1kp47MzuEV/4dYcfyu2LsMuZm6gl2L8pzXbT1hyvfsQWzG7GBGhEEoMJBIKEWlBYQl952SA/Gnw387MDIiW/xsIt7Kxk0Nvc2VviuVvDU5rAnd9agIT3OCJp+dJDt99PhWx2nLCWNcXujg8/QgO/Ag3/Hiie0lFmS7ljqKzYHpHf9qJM2KDpf63TrMav1dVIMlujEt0imVCFVM1eq62OUnotV+CAuusgwLJMyS00iXpLLYSBn7wfP9AZd6IGaLmmJ6/ETAB4JrB3K13z/SrrszX8fsAgYHp/SLDmnpuxdDRzkMBAlCyQmdZ90qI8bim/ckT3bcq1IhW9B8hV2tnLbhRvzi+fH/tWAhmDCaoBwavSNtGKoKmvqkdE3Mkwgcp0reLmr25o2R7QLAh/ovuBRmnTrE7zjv+FfQac0C8fjJZkexH8uZ2TY4aNhIZlQ5UQ2tcIpuYi11m0d19cg3LfjzIqnjRbVh9g26jGZmHhS+xLd9aIl/oJzONqZu+bLFuhSl9TXIRArzV2fZlKU22f69OAc8Sp1zFI4GyiZz/wcjW3ugYH/xpGc3QikSlKoLjDGi7aMWnVhYYFnEsQRsgh+ZQU991b/Lif53MtD0IEqHyinPYy2ZHR5U2cVIeQJNUfYP/zrMXp9VvZA==';const _IH='eb0586f5dbd4eb3fb48518bda516277ba6ade35a76127ecbfaba0bf870656ded';let _src;

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
