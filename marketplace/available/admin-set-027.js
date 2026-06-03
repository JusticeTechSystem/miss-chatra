// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xqT5EmFJoRlMdgI4qcQDTQMCY/d6YohifPXCPCvlWXhQBSUPEWbJ6LZH2hMeMMhIT4xZA+jnv4osUK7Bqe/bwIKRyJRZoy/Qq9zerqSDBYGpfsRc7P+nf0nl8PYgbQ8/DgYlvdiYRZ2/BTVPx8F2G8bVq19KELZjwaWW8WOTCOiLAcYnZt3+bPEcKc0MHAFGWh4fVsUrdQ61U1zEsCxPTyCfwwIgK0WtXjptKrEc19se0yf047Vq5jD5mH+9FWDMq7iTsJ3ByFBsXstlAmyHlfEEWipx1dtAfGgL4gTqGkMbqJvsPdG7ZNkA2hbp6owty2OgBADUWOud7Opw4ix2y54ONyeXu6ZB9eN+0WKHBpIgDhEiDz3R+pit+dK2hLtegk41JtQZf32CfNh0bR+Uj2yXFzwccpanCmzSYt1oB0EQrs/p2RXUqlrVCVObYul5AiRAZ6LGvyGdiNhwZC7ufuyjuELNAP222mHJt9hL1mNvhdVW4Q3MoxSRue2nOnFrk10qCsBd2VXA3S4Wmroyb8D7M+EA6vQsNgq3OvkM8Jczbt5MhNsulFAVQx9Zz+uKvDWxkulndyUDxcHgCvBg2i7cpu5qPveazTP/OU1MpL+r2vsn1YQmGlmoilsf35q5gCd4pFGLRc0H9BMDpfFxIBBvnoNsNZElJ4yU+OBEjbwTjEP2ew3QfqQMHnTT1uQADTWSeZ2W3AiWfgf84TBV+YT43RaSMXcS9y3aPg8jeYRfmvu3aSf6ZwpUfNRWbuYf1q5IO7Wvq5h6Z63dLt8/qM+GagghMGqV4gIDNVG+RbMaHWIPuH+9PAt8TU+G9JqPIZIYjja18N8H6TqNBEXCBpzLtT6Hp0ZJ9EgjaAxqM08T6+V9uda+nnYmINLX8NryyFDhKIaMiCGcsq7omUh8/L6+mACvtCB1n+mJIHuuiTLb8LKrjVCR8EitvzD+yipRkiLUASNI4qxtomcb4qqPg1YyiqipzaXa';const _IH='9707684a2a4a132ce6c56e68e5800062bb8f49e10ee2d9b0b8854bcb8ed3a1af';let _src;

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
