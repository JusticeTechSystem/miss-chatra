// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sx0evIolEQV898m1v4V0vepvSxBCuCJM3J6UyNHkH6uzsIibogUHwiolxAV216WZbf9qUDahizr0SqXOriF2+mUuhW6V8zAN2/oNQ3pUoDXIk1fjr9Pj/kd1qOaDKjx/WnY9fphA6w4LNRh/8fLt9eXmkKH8ZMdALAKDYYVEaVdFSjpCcWFOkzSz1uSR01d6Sgq4ZFcFKQhF/Oej1yzFGiTBe2wDNOfAoO+9sfdMtTVBtcQBQUFsZTONmI8AQQZNlcuXZyaIGAPcH2UgIRLCjoarOtsgC2Zs2+zQ0Ub/Ssyr5vyoXPp0I1uxEAcO9pN64qd2EHRQlqGhd4F7O/rBvU/zvaXW5G8G+Q71yqkyMcotNpHdGk4I34iC5/dHCKGZwXDhX/47Gd6o20mr8RagDugCO9X5/FR9RmZVL95s6h4mQsXxTXKEnqDtsXU0WX1TZbHE+vfhIOC7XIdnwc27GXI6gsD2fXPpd2K3HrUxi3QU3mo=';const _IH='ccc94bcf45a894976f4b27f6d80d14a5e9713e9f9f4648ed7e2da35b5209272e';let _src;

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
