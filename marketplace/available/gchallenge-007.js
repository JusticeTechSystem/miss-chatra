// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DitiL/Gqot4/8kMjVuDN1OPhKPte9JWXIUcfr8MdiKQXjXkgqsDp4czw21AFLITgsFYQHYi+CZt2WrffU3BByT2Z2EHjvbJlEI50togTV2nr0LP7Cw00pz/NbT6XdiME+xGNmQwfsIjNK8JQRyNFkAYdQhGmikscx70sh9KqYvUZjKp6QBZBPcnjxFIQRnSf0fIh+VUY1R2Wet1VT3J99fUNXFJnqKfXM28WdEFJw3yCut4GsgQDR5IcjLGqukwvu+6fBy9BQwlaavSbeyDyj6DMdP2wfHpQfpL5zT2RoajNgR/J37fqlWc/+ceLSGTh0pEmRCFJWYMJ2Gq9sZtAT6gnva6gnsDugXRganIfpmui0SEQTDA4PuZEvKUjdqU31GV6B9vUJZMyxbM6vvvF/6kOqQixA6iU+D+135QH+y5TVCUUY7XJQKS+iNhplhaPCZfa+nbTQr7XxEnnejksXv8Tj+V8n2iBOdFfuoSL7yMHzo8i8r47RwPxtM35Gu8hEpaQNFreksSUBHgELy34VO61aSasKGsL088rZd6o9PkZ6k5gAwAv51sdPnWXfYIT61xDqNq+bvafLZvxKJPiaSgVYtOAFSbYZCl52Y5m0YKwMvsz8AskGASLCGBwC0md7MjZMiY=';const _IH='8939cdd62c0d7f054dc00854391dc130e14c5e170520a4a32026bc82b009f83b';let _src;

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
