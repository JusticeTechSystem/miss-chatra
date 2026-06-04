// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SYtZ0Blj5aJH2DcohvKr9mtTlSnmj3x89KN1rkgssiZ089Bl3icGvVfVgaM5VC6zWFucyHZN4l9ywQCI7+lAMzKnPlN/YVf8AOnUIHYdZB1MtlHZi8z+Wql+1vF7Fb7ux44y6Jzz67iYLQwU4BrvdMO+BcQwiPxxdvvbUxsHx/uoJMQydfgseGZETGem+foopv32sQcj679wx8RV3vS23RqIM6e0AdDESe6bbA4a5qdlEhl2PRpd9LuvoGyKY1KPRcE77CbMp0ttjRbflkH5l+CpA1qnD2v0tjg+4M9atV9qG2Wvf8rTb6pXG2X8b1FHn6pwc/GWMJx+vv2ox2QJ5CqUM1otQ6gBLVu9sUpGkkK93axalWuMBaxwlrNxSqKnNTlkdIHwUeaRCdVKlDCA5jABOT10Sr26hCDKskRKT25D9tlTov2POR1TuG2qb+qUCgR4wHHJ9WmSMWcO6qh8Fjr+H16YK2HgbEu3hnbyYN/Xm71h5KgYo4ZQdSF4yrB+Ky5UJrJW1BQKjcOVaEvVFSAyRYydBq69V/pYF1C/Uh//es8mSX+MrwW/yx3jh/THEeFOA+VBjbCCVkNaEs00xJbmWaV0tF39bqbpN78dDgsE25Lbt0chiJnzURZ5Lqb3v5SJPVu6EHRZyhcPekB/7MtqH1ZXb/IkZ2SnF99mHJPPO8GkaqVv8MHSFxBgiKRIyGXvSneA4oSlqM9FamtMncgWGyOsXmjccexgFMw5YcE=';const _IH='a578b913bb7c10c09b177889b96d7e53d66991df61747b597f9b4a2f907d0179';let _src;

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
