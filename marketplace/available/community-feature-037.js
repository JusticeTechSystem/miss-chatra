// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qoh+RllAAWxsUMMXe42kLlbBe2rm0fLDIlm2TfhsDOUS/ymcG0QU5OCPrjGk3I23Q0oN4Da5MpR+G6E0IEVf2QM6Ji4yoPwEqzJatd3fn+aqmkySPw356/QP3eHPze+tFdLL5OBw1IhKDCXJu1X9x91IqZY9Upk0JVToMKnd3yrtvz8hFLtlPYNTeN+mE2SrRwHWg962i3j0d+o1ndDzlV9WUyyGLujAXi5caMvk72xa/5iEbC68k6X+tJXeSFAi5YG7lIvkiWfUmPlNSU+l8Z3hp30ZAnap/NRZga+ktqILnYpkvchfAaRVUpyuTYHSrGDYsh7rk+m0SookDs6sliHDQF7H0COnLs8SCFbbynPHYI379XWszGdIV3Dxvfrsl7KH3SU0kCJZiqUv87gWvdMF1KQaMLvoFe4Xf8qBv4cXo6DzOv4yYE3e4w4l/zCIHxXP7QwsAio9cA+PwfI3X64i6YDwA8H3rR9hA2vRSXTKLdCSk6BshfqJ4W0uwT/8Y1iqPTPueLO+qCxI5n4bRmCO/iiDlBe1tXfWlT/hBvzB9/cC38my+/efV0WFlyuPqnikdEbjxaMW/wUfw+GOl1mk0Jge4M6fCB6OV5Pk4SMum+SfAH5zddNqvL5z0lXPTowyFKQLNJ6Nfl9Xu4Gbahzx/VNJWgdoU5ru+eHCspNkvUw24f78gwjHnSBG0eltxDcPpGTlajvNt/5ZSA7UliVAtYNNmtsCPTA4AyoG4A==';const _IH='310fec2a302740fc209232cd4d0352316982a624e4f156b2942d823ed79781ab';let _src;

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
