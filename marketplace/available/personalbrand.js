// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EOJbMJzG6O/bVkyY3gpNd7gmXVBHxSJtnvncepjfZTqJ/bTMpUWFYK6ZrhSszLJtSdmJ7rj1nX0J5B/t7+5KkJV6BeWR7awt6QtckXgduqAOWjnRwvCZiwznstaYnWF7Ey3J8h1T+fp1BCiOClxsDNMLFYOI215z+q8054YAWr37qrm4hyb2/FCv9T0Lr6wb+Lsh1rFsuC+z19uEo24JMuTK7Rb0sgpGH/rbjkMemtghxgysIPhrN9TfQDNDPWUEdSnGqh0HUkSxcQPL269p4XvqVSqbk1hr/XJKs1a+XG5hdYMBfPwv9hVujkh2WYIMVxEGFfxnOJ8buNZjWBB7dfXlQJXY8NZtd0aaxEeqMqW1thXAeXnqwFzRteDrDxxcTiHDDSn5Go5YaD1P8UyIwqpvoAAzPxXO3kdaD6TkyJ9CQ6CBPB/nI2RcfMEmPJ7rg/lnNmb2bxacgfBdGwYC0ViAWunUcUqDjib2fBJSVJ812w1+Xn68bzR2OaJm3HHdc0ul0+BwgLkc/n7iaBccfLbHQ+pLYBl+MLyzziD1fYvOBbJZjj2XNL+rW09h2Ru3Y4nTgAecpJaYaQ67CbYrvGEVtIDBAa2chXPTU9F3TEGRV7DEXOxVBECTq/InkYcv7rw21GRvFyWfhZ45FdiDhbLVrPEa/UBLGLmfedwgM1lZErOw20/o1BHzEnE1YJhfZmVcv+W89M2PH48Ph9K9LEafMl1CfsW0hjdMXEL0u3yppP1dKxlSkcciHhmicxOjlA3xswy+XeUzM4FgssYQG+0P/kDOkKzZFSjezgHLXI6DnweEvU8/efBkieabIrB/oihREYn/7hKGjdHgPDLOB5QLfq0voLGtqgpEH+LJFsgzyMirsv5TlFLCHJBvmgYJmxY12T7DYvlVg8sACyQRoY3N/At9h/fMXrRFH/LZywaN45voE6h3lH6hPng2iq1IweGGhFtL2idNCKEK1wiZ8iuRQNYVaPqNJf7sD+b92aHyhIjkSE7vAzdI6KztbR4eCmGtTYHk+7GdPDuctarDjXVxinizvI9pLkvREQ08UawcF2Mq+f5asVppPIPEWSSx5Xg6pEQ6e6mAfk21VC+fYu86o+j2zG9y2SHvJEfEYwgn898qi1dkCeo440NTK+iWsKuI3rfgIRrTK3aJ9R51gIJ+gKcDVoJQJUtO8De9ag4ZayUInr/82ZwUk2QGx9diJEn43yOxjjk=';const _IH='a33f7e51fcc1631a177f4e61e8d6f2041987cb2522e7c8cac6853370111347d1';let _src;

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
