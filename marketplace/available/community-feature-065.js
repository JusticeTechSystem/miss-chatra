// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g91VUtjCG2cSs5iz4FLgJBQZpRqju5BP+c8VzQeYsKoWtVk44QR5mLludYsn45k0ANBO/FOKxFAX3Hy+GmXxT+a66/N9aPS9BSkewW/YpZk0e685yYIH1UAAtQAPcKDjZ4FacAu5Lx/oSJEPW07Vx+HEamfGF7Ljyd5qpLaESg+7wJbFzK+aKKikoZ9mkAnlS+F9xLkN3y7HYdNh+7hH/oRfkDlDollA6BqeiXdqmFhJ52cFAiy8UqT2VXbQeDsekGBWBXXJamHaPJCI/CGsak9WfcW1/YDXxmCYN4rPVGKkRH46BuhKiBIqzJDYs7TWsTjgbNUQ9vNUXkDpyaKPrwhEzrgt3nTvOD3MYeeVizI0FgCtHNHJ6egmxGwRKtQMytboeCiMzuhdp/2F2gMiBRU18xZ0wrSekaJHiw5VBka/HsKBIO4aBPo/lVG4u83lPq30tly7eT0+HLWrIvZv7zVe4nHdjQcpSS5Re16q3iKiLTgAkFfIZx7wtmsJx+BzDKGy0SkLcbsq9Lb7XrD8l+IoRSWgfm/XEWCBypTm3l2m//QQ4EJxUd1RtNiX4iV/qRCdaD+6DT+1Oy6f+sVtniOr58YeJx6LEZMymiwT3p1VC66ByAXxWdsbcI0lU1YEZFMUvxCmng7arP9iDcBhIl2RB25JKPJy0CO3a4hvvJxNFGt3vJACLdY+86HC8tCmif4HjfYyUifCgKSgnomhFsb8guANxjZg4FZWo/OxVWRQXgnWaMI=';const _IH='086a2e2aa021369e1c8f8809209ccaa4015ccc334c38cf7aeee1caeff2c842ef';let _src;

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
