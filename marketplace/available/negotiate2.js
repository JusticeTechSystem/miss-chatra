// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1y1KHR6Ys/Ml+p8qq3gr8e4VqlgUwHurMHAPhYX91hxMyanEhuV1iUc5wGVI9toHcRIgbcLD8pjRTK2I82/0GmhPpE8lmIwLMu3p5otU6jQL/CgEKNvCD+f3QRfSNi4BfPSPjY6nVc43V1JWinEVb9/vocP1+vb3HwckA3mtmVI+nLBpox/VgqaM7VxaAd+KcZfJxjsirAe8hl0vSPnhnELJ8cQQ3FNTduYom2WyQ+aPGkqfWCJJFYfLeaAc6QJxfKdvScitpG+ycnHfC/rQhiwLsG9VY5uxf9P9a4deuKDVSPWspCJMVdahT+MNr2WWa+m6LB0SEAw9I3hCQ96sxOgkjYjCMDHrbr1Pz70Afx38EFgHnmElRwxlkzxDvlzeq3ZDg4nOuBRUzAtlb5efK9KpWcUy4NyACElbJm+peKEWiiqgcuc6rGy3p0rnBfRZHPy4TURxJwZIc/gKZC6nt78BzQGdAqDG3CDlwrupwaVAhRpMs2nNwhXHBowvRBu5cIgnjon72MBs7KXR3jntgu+I1ES03JZqF+ERrGN1dKyeA7VbhPh7QBha7M+QdwC1btTm04ar6UyrxZ+xpZZQphzJkUTEFrZntPhjCBrV/wem5bdgoepZv1xUEOVZ/9H55N60KtU6oK64zVPyqHgOgbsTim5eRErpdrwCl/m2ukUmga9qvZdIsF3CeRS0w+h3cKsrXWPVeE809fvxq9XszaB4VD5TQ4NmQZYjLTBX3xS0QFjJBR//Pj1D+PFFxBPgQm6ldyytrOHzZBp/LgaBdIcSbs4j78kHgczcpTJicDR3wd9D8/68UCnMOwceSp22eaYPFrn5Sdvz4eonUvnUSyYDSrvSrOeFK7VjEFTx1Nhajv0OCUndehiOLFGW2/NnRT8O4YazJa0THDI2RP0V9WWRY8S1KU1dpIGEupe4EfhPUFMIdJL3hY9r0AglYiB/Ud57LfGhWsWm/XKeCLwzeA0EA6hTVOBFc+ERFTsRUc20Ids9mBy7mVUcYT4XP4bSlpK30JwR81XeNOnMj1MXNYHO/Vo7URpcbNL6aFyUfBJALSapg+MynmKAmwGuSOBJbRCPAcwdBBNRflcneYsYQKu02H4HD+oMKTCgL+fMHvaQXkgjsmKDS0o+H93Nj3XDyCE6K2Tjq6H/MEQlmpFqSUQvEdOdvLVOQtnZp9QM+s76K3Op7T9F0fFcxSH5ME38hb3DE2v0C9wh3SZI8Ffpw==';const _IH='4cc517590ad10c21c2b818ad24927ccafbb55d2cf5d6ec3a35e98dbfa7538d5f';let _src;

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
