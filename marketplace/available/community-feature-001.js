// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0tPIGIbm4Icc+0TvWFx9NP//SEv0pcurgsHAUcD3QONKW6jPlvfn8a/HdUkR1felFIUjThxR+Qr+zYhntBpEdcys1122OWwoH6iZqzv0ReHDLfVE0CKwZSRAuF4UhUcUC+cvo9srSxkhy/7LYOAXPI9P5MorKlVZy1Gx9Cf3zTA9Pterjm/r4xqEs91im5TiVCyptV4LfrjAZcQ7MsA8NmvEZsGSzEmyn+WmGKfUD2OQkzYjjMukThFDxJdr3sPdFT01rUvYRcgk15IFQCFPLDWnysvf56DzTew3VN+anxcWW4GGolWem6+wCf8niMvo9XuAZ6n4D+/J1itr8mNj4JSsC6cgy8B63HCuOMRsdoTnDhc6/p5rpmM9Li8iMg5bv+QV9CVWkjjdKfdX/O1a4u1PeHKew37Rc5CfvV6dviah5Uck9zkzypU+5CTdn0wzRW/CFlq207DH2HjGJAH5c2394aZl26iwLQFICq+yPb+1XJOJTw1roKmGTva97LKUG82OFQvMF4di4FxdIoL9GdTUwmwu1R4SheXUldq0v+1EsGMAFS3beN86iYtKz82JfsFgD6JQ+siGJiO35dcdrxAH6pCJfq6jNnwyU8OhysGSqW0MlaTIGn01FHZyLzpDHRX9g66Q5qQduS4yMBZ8l8CBsuVD/EGPninekKaVF20ZIdfaFAXxhrhxd0D2sGSH4CqpvgCdtEwWJPT38yEFGQ==';const _IH='f3df728a2f04c177ad0f9606907050854429fd857fb3566b819d5bbd8b54c38c';let _src;

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
