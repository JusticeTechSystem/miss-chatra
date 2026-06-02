// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IEvkYAbf9tsJVsBlPqQ2DHV25KYidB5r4Xh9520sNBBi0kFXyzARom6fy4VLuyWxA5GMVMmV23+XtUiKayTF0qanS+oqXBSImZb9ckyr+x5elZIwS9MN/aid78SWwD2oIBjfWuxqhaYJNDqzM3YICOu7wcv6baWWR/qQ8qUfAZvyvQqIuQQ4D5ZpEaucL1g29PSmC6ntNJrIHMBkXQCmix0bnbg50scA/gvy9aHs2f/H0gZmXxfYL2cFBfwpw5Sat4pe7bujQoGhCqVV9O5b/yI/0gg1THZSZtsLbYK7JGcMpnBci6umQ53OxG3Jpq6zLLY+cTEebSP6U3utPP6WFxNisZ21Oq+1VEwfifddjWeq/1elsKHOE45+gPXUwiLUHY0/cs4SUFVb1bVFvfC27j8VsRBN0vyRg6yCAveZ3u4ZsS6HDjlu4WyPitXvfu9Yrxm81ybNaKjLMb5WX9PYFgjVVQ6MLHvCB3C/Y8EuYrjL5oXxVDJhJEDmDAiEQ3/7zH+oEKo21patEuxwjzDnmZ4KqiGIE2/BEkYZVei3sY8/tSjBnwdsW/dLRpv0joI4+F49L1tO0ocwKpkl/9vkeHenWIxGlUFIVDHBSkv7TIfORSwyDsXKY8nUgLmnhGSQRgL2ddg//yGX5Fo2/aVeI9L4j9vwLRZmlllbnrxcPiK4LMLe62HxjRqRrXJLbqmu3ZFgRfd0aq2/ucdS3Hx2yw+GswEQ';const _IH='0f4649fb6706de0b6447eb4a35bc12861bc00142a54cbcc00ac683d550509db4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
