// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwfS8+/sBGbaT4onu6XhQdRMOXXbQgnZXMVrGQCsuShTIzQe36mL/1K4L8B32GIVS75OKR6hmX0SJh/Gt79Tfs/6Xg+tfXDWGPjdOceGAUrIfov/0bP4tSZDgd9Dq9ZUJFOkUBE77tGWqrQ8JYg/T6Q+ZfGlsJTOiVEDx0f8i59PB194XsmciMR52bDZ+SP52iY5vS7Fj9KK8/BZXST+/tIK4ig3qzS7ddSYLlGvTnyNGRKso02XWN+xRWyDfU8uzKXn8Be2EgQ9U0W8siEKTvSBlKtPaE3fTV1ioMYu8fj1OleYfo/Ae8cImHUPvkTTaj6gOXjMvXN4htJJ5MgTirwS4ewhgc+vjIuVmYsnnNo0ejQxsfBgD5C2cC+PbDUE/GNUabOfMRRMMA+W5UAB3ffp9NMGYP8XCeGTeH5x87QxCu11zABGpr7TyGdEj+1uVbPX2WiAYyzgLaYWIN/9GGZPm8GDiZHpSszXVDSpQrttFt1OG0fRRkPiOvtn6SC28Qxm8NJspbUO8nynnLYq3/pR+6mJfrcTNmggXvjR8q2120bjWSS+ceOlPK9amFb2vX2nUVVMTyACki5Op0V0BUf6a1W/gOyQNnC5LZvlu6pPdn5WoMaOj0cKLj1RRI1zFreInVCuPiqu1ED7F1n94uzj0+LnG/i7xUxtQAGzj2YtBCcAtiVKKoT5tTHgydNvkywh5xfc45MLTcfMcsU4f+DYkxdfM0aCiTmWwuYpFrxRxnsDfEYZwdy1mnpYzq0CbZnLlV+WjL0srR+M2HyCCD4LgHwFZW1w3NIXgOx9R/mtV+5VzJykRDlx4CxREg1P5qQcAqn1HMxmBVyiqBBJ+LDy4SHXh5Ye44BR+PmBn9Gj+894MIvPCFSR+4h1AV27ihvyLykN139+sttYIRRzuRUzxLOKcDSDJaJBX7H8YqGVrBJ2oYd3QNX3KfBBAM2LK08waU1FrRBdFxqClpKBSzCQqHIrih49QTWHJ7Z/lXpbWZ1QnXziak2KupClLQBhS4';const _IH='5db3c20f75d200a635f28a2f957164e779837eeb3fc9b2a9a6e4f17ecf88ae47';let _src;

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
