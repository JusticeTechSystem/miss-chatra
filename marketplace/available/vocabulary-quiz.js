// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aa/3FpmGAf9/gs3j9oYdyTP0R4rhQtvBow/UGDTqNt5pa2GXbiKqImXmCHX0Wm5FgyhFt7vpQBlFnrBxb90wyZHEWeBgSUSFb0ybfX1NqvvNlc4IOygrFgx/3o/+B4H3KtcxKAJ4bcT8PHI1Ag2i/CNwKsjc8ekJBL+yCXonxhit8vQhD82ZKtpOL8PkpiVh1SfxWrcmE6kAxt5helwMq6Vyl3M5tCHUgo4S+zcBU0qTbKXP4+7P9aRJn3FK/Ub4+ci0JZVe6Q/xr+LKGELZetkm5b/wTk26svqb8/PExaEkWWCcYzYGtBEJFsqhDtg9I2iWhBxxCGQchN4X+mcyymTOGKSoA8pIe0ivNOTeok8joYyUi0pFUa3F5V/ENmpdC19lh9xmiIflkYQ0XeDxnlMnZTfHQkOJk+FPX13xFB2jzAvkCJsj8TXPTAsjJIzMh/AXeZ0mNQsRnHd7qPPn9Cnf3fjQzWp/eVgQ8xYR0iBWc84=';const _IH='a206329b14d261fa90a22744d29365b4c3d1eabdedf97455cb0804d5ba6197b7';let _src;

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
