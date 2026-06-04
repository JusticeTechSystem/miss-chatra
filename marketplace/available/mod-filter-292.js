// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='13+lPOXhFr9XTooyMQOGZUOwWXUu5s/e0dMEHsoP8oCnH+eHNr2UT1xog6SIMa0+whGpWiIF14Tfjz884/yyA0jkbXezA3F7pJwpwEd5qxvlufDSvuV2a3yQL2QXDAOE8ytSk+1hIRSxzn6kcbytBaNxqlpkUBOIHXHGgUjDqgm3VVFG/BJ89BUSP4FWnyayGNDFsxzsP+4FHEeCjicIm6LeKiXX5tnZbQcAAMslvAzOyUTGSUtvpC11r5vf+E5VAUSGyvBKvrgbuGPpRx103arrQfu+ZCRaK5PQhT5slRTTZl3SA81XbwdEaJzpWz26vQNu4tVklCq4PSD2RrPhCZ5yLDdbpjs0TeOPkCyrK4bfcPbrOpIt8A5qCi5A0HG1bf4RNb7Al1fDHt+EABsEnsmgfH+IwDfINM2Ralvhy2iYYoMhZja2U1mXS49avt7SH4nigRKB6+zDRaVX6wVbWu5WI92rWdi8/sMk59Sl67zyUNbe+QcnxbHSfW+Zj53tRHYxtaUVCjk+p9mqztLmfxUjzNtYSVTmzUVtpzhpKCCVeVACWpND/kjqQ0pfYVuXI4mcywb8MANwEcf9BqPDJqFE99JsFmlNj1uFXtaI1oBchJoOFaagJrr8Bnk3yDZhJ+SfbAzs6f+I75FL9wTRq3Xd4cqh7MGrQm9++2nPPqSMEjQJveWVOI3kWaGgPlItTbsWWGTAXYXOG2OtdB+9jqXkIIaxCVCdVrkc4Y/jWYhevpYRzrRN9cuyQcGiNrk+EB2BRz4BmV45hcLn9azE7c8K5274CDCR6I9XYddo5U+/F2dE5yjXOJ5n+MErdW9UzmsudQbdJAKATltYU9J2CCzlqU2/aXZuLOwySTCDDS3ctW3B+bXq7imwcT92+QUp0ILYSmQ1BwLvLFzil7c35HLwfjWfFEDnkY+K9TUjkgpyVU5Rh1kbGRfIqFTjGHFimyBRE/g+WbcTkLfXII+YZDiR05XnTECEzlWVx2gQEJbkFMQ9GVN/n2bNplm5MLeozyfJKoKWImQVesum5QXH704IazL36qwg6BYmwUXUNpOO++eJF4VauqKEB+7tc1e9QdYT4PJgD556/Wk7ZgKf10S7tavRnk01IK0txSbmBxkRgreNtcDCkl+fZFIt2CldXeV/FV2sGTgdJOd0xo8SWhPAgXxJ9Nw8WuTy8V0HNlvyfExpinAB6+Jor+AxbFVpKUE/cGJjQWK77J0ROLiN4zwMCq7WgdTcj1LPqEgwWNGz3ZH5JIPuJvAEDdv09+tWlEbfFhCCXrMl48MmTzgWlCNHyK4cRPI8z/Zd72nagwSNfdD4u36Kc3QUm85VEJcI7pH7KRqwA0WznGSfTqTnYsJN2verxcoKOMKusKVCOi8a5EhZtxVTXg==';const _IH='51e9ea6858129e4690f5e877e83da758094ae771a6a5af4a744f1804e93a85aa';let _src;

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
