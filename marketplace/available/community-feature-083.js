// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbSR36/zvyEvGlkuIgmLCtPoXTsJAFjedCWjMhkGO1HMtSEQADWnbz7jYfJhZ0es2vJPlsxN7s6cUS51te9deuaLvxQGZkMVgPvzSnl4TCgqFS55cNj5SN6J0omq33nwSBlxqKUp92w567Pm41PYKsC3rM+GZJMF2CQZnf8Z+Wrt3bUrHaS8XpKJXtsCauZqlrtavKg7NxjInCoAlen50OgVlrwPzDiT0BrGTUwXPTWeJ00ENvN9g8j8H12++OvCDtUrEKSfZ7ZrLpyJK2jnSEHZ8++9EekvWK9PMk//kx9HSAvVIyoAK3HwdQRFYYdeSiIhfbhAZXUX/PLhI/f/LVwow791L0XHOYd0VTe38RLQg9q8dQ0MpxKz5E8WWlZYasPsxXh5YKbPQKIBZhp3RvHdo63VwMnomGJw29bjPlqiiQDvmHUyx5I3fgbnKqfjsWR5QJrMptAmt5e8u3+JXCLzDLTQQSCex9AjqvPDrUAGKRNx3r9+EYwm5iur+yWKTXQTC3j7X6zY52DbpmEMNZ5jmCtH5yexHXNApyoIZavpeButgbMJQVG+e9FsDfHz5rloAvFK3kBi5Ot4bLIyv0aKrdGBK+EABLl1zl+QEVKgKnpHdpWx0aJVC4+nUgj0MXhHQE8gWtMdrwWij5Hmnbh9xxOaIHf5t9RdrtpoEn1aMHntOFQ08RbXC/iIaCEhfpun+1tLh1GN3NxTNu61PYNW+mGdtIlTsB';const _IH='318bbc8dbb8902080b93814948ce39d02ff87e7e35f46ca0ea95e44a7f039daa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
