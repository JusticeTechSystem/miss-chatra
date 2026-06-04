// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1FXH03vN9Nd80GEYiwVHmkBXrPLv/HAlPsC5iqHs4VGKZWzaCeI/yGNb4XgsUB10z+Hh6a5m4lZsNn7mHnUhzcPytmQmkM3S1QLEXMG0PrXAyZp2IetCSp/JA4tdt9/9pk5w/bzg1TxCbzSpkRrvu3tXPSVdlAVADKeObvvPQHedAOYcs0QTdWES/9yB4qhWYUy732Z5Sw/+SevWwA8opalaopcfsDaPDhfYrvByE4LgkQfIxDnfZ1O88AhXTVAcSFhqoTgtftE1NblcsGHzPpJw9FXbhNKsKqtBr5ssl5jsXxORGX/TdQSvQ9ZfyIddNN5onmznc+KGPaUy842Z5F96mCpxfphdJIUH2AWp9/UpKGP2hQAyx9NddSCIWXyqGMy/GTONiWnCLdJD3EtOSUgDRvjzlqeYrYto8POGE2LRjNcRCCd5UkR2IYwEJriATFiHl2v9o7uvIULHwiAFMXAJLHFxGpXMOWiD/6GbC/TmbGvUvyZYGpjT7weeZQwJRJsjMGsfpGtqsiWhf3bi+cyG2ClV3K5aGHh85dq/rlfyF6zclcHADXxRQPgSlAdWTSvnfuwVxe3m2HAfxQNUC4pD12TS8BJmANd+ijwbtTBJ0Qa+dxc1pRqKFU1XEQS6KfrjIts5CBCaaXwBRtjjAXA00VTpHMvVQmfnxYLeUNuln+/0Q5H/4z2fA+vJZ1N4q9zCI/MvKtjXE+nCcWWfpFdIDqXZbCscku2yLYzfHd+qLcBgplAHazzkoayhaTWcAbwbhQdw5lqo4GNwFMSuME8P4bt0H50YZVak7m+6YZWTyQe0j7zJXW5Dp6Rc9dk8RZUC5tSGVz8A30seGGmutt8CjsOdPmKYb5+zMo3ctyi0GPPkshMVYBigQCPZZHVPB8JCB2ZRBKgP+s4lRhSP4AGDFGrivwYYV/PlG6HHox7+roiWbdMvCUCRN50n+hXRMvVRWnLfl3OhJJsLcpQPVjxhqoJT7MoUu+qlhA5bJtYEFXL4wvp68mYFSdziilWcTVY7slfaos+g6YpIh//lf+cGZERcUi6Zv4USKYUa9VJGSWat7hoAXoNto7bGqdf2LuspKI4ytdmGi2Eu5jtd1LfDxsiW84t/02elFa4FUwz2SsQ2LT/ztdwgFxgvXz0WYCq2y+dv2OLuFBm6d3zUd5B8O7MkONpQkKP+hFyrIGCT';const _IH='195d88018f1f23f691d8fe86d8a211537e65d5dc75f1a534fdb196a699c9d6b8';let _src;

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
