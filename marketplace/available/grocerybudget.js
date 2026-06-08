// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JBgA8mEJha66+MTSK2x93pzDnAoysKulUwGbfSjYKXgJgGm7FARIefEWjiUA1mJVWR+StDdzkc0RycOyv5QCx/UKQbWDyubitKhF/biI82sWdLdu9GfSHJc2nGwBSD+nhfXmO2RJkMk5rRpQ792qCsxBgVsTZGY9il8J78VsJ8ZmqWtiAO7AnRz3nBVnOgajdsZR/AoAS4yL9hW4ITN7RPNBcc2yNH3J4rVOJhmJ0OPkBEIJN3ZrxaPlG4MLBKOI4k8DJNELWg/eV9VBuEq765BJoa20O5MpYTSJ3tcVIRtQ7cTmbYRzCHzC9XvT8b3V2vzu8M3kt2AFM2zEQ8Gz7KURIZ31bkSRUIf2e8MjjWQoQ25y4Al04qwAL0GOUv9kFm/Oxh0yrHUDNlOWJYz0N/fe1r7kQSX6ewy2ilLw8HsHGioBqT/5wD+vWkRsRw/52elLNuZlkINERBMw7TvkmHon/Vk/wQqVg9VAN9Tsw/FmopmcfZ94/D3DwnbxRVHwYqvjVugA/Ig7t8u1f/wPDMJGp5bZZAb//GtZTLiDzkhi461m5yIlCuB9XSHwzgzwGSpb0h7whgMvqyNuu2CeBzqYJaX0OHk0PCag0Ia/RDc0Ll1dCCoj4j+kVrDecuDL9sSAPYSK5T5fHQeQcRfj67NcbGfqQvgyoQLV5zetOrMtVsztanyCCm0oMcdGUAAPgbhA5m9YN70sE3gPviW/U23yXcIbvdyx0ziVzIbQf9UPF6rpr7Jbj6aNNscNRbkrkFsz/vR1t92P2WzMVxyVQ2kGHjLua7+Q9A+iUy3aOhwjzZSwsDD6Nv4RsLARpIwuyee71GOZYef0dA1siUUeu0WrEPQpXFetIwWMBTewsVdLICrTU9KGzwH2sXnoLDCKrm3GscGBVpi+WE4i19gRRDZs+c4jyUJcGOm4EB+ubbetfJWK/e/hDGT4BmQJhxxGkOJK75Wfi5qp7mXcEAbyK4nOWAUsrzyvyTIGhUY32RKIzt7FPvXVoXtgwGeM537hnowRQBplf+CkmkkNFtV3L4+M3x08UJy7pGxK4hCPq4U5Q2GXmbudVGkVgluCtUikP1jPaQv/OB5Q7nVp+/cZ15HjjpSfATl/DBBYjZ8ZgQGhOpr7Ue8iKISBGslNNCBBdAM6E/J0PjijcaidpZ9O767EAp7oZxZ6dmJ72R5VSnbW26Ztj7UMEq2AwTCvtXmK+AT3tVbasPmi/w==';const _IH='b210ba6a50104a4326be8b2124dbceac45533288552e60bc2b7c9cfba1448365';let _src;

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
