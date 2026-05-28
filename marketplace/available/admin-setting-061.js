// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v4kb23GYpH/usSXzMFMeL79VXjBvQnS5XKega4HkHlOBDTjzS0FoEZH69xlBzGiUHVMeuVulWiPbzoQv+vUwVglGGl2JqzSSViFtxPVgn5T/phokc4cqEI9AFcbedzJKP6hR5r3AOVGnTcc1jg+H/z9ifxzqAjD98HWq2enFJCkyViXmFzHFMgxGlJ/dkw9QnpYYYYBbinE9jsZfEaFjAUASJQ81FOy+Vcl/bOEUH7sW8LjYR3fOx/xjPSYszY2ZSK+PRq8ZcnT+fZdwn5ZrzEGl8kOimtSSd2AHQqfnaLxKXEbszS4ZTnMPZbFyzx561sGNYEfSdX4K+R2s/d0Ebd6UTvojmcum8H7lrVnp5DpqgbhZh13SXDl+ePjRZOkEdxLEEK91tfBgEpJ81WYVZG98EpFN5YhOfBwxVk1yv1Umpz4PqA/bpTJ8XHe/hZyExN1jz5xlVqNtclCR6AsoXgae18cpRwrL50oXUM2d8htrYHEB1AIJhcJZm3fXntw1gVs510QJFF7HJIFQwfo6Sdd9+nCpv+lKb53RUUorRVeSO+fBXkKL4rcSkJJP8BRKmr5PhcyDrXPrr5LKG4xxiVTbvrnQrIUGS7+t0EIGS0nPHBJpUqJppx0GsBegI51kSoVNyKoOsqFX3LcrfpexQWI/hZibw4NI0VkS3+SfpFgNo+Q1L7QFZ+R7YExi+baf7HAhIl85Z3p0knC6f8ZgYBkYsbiMA/HvzFZC4F7UR52qPIyD+YfMIUaVBJHiwrFqhof4Zkhpc7QM/xFnZPpK6o2axgrDIdxlysSj0MYba1lmfZOzmKKSImhrZXXnavbfiCfDVEsUUG9v+aWQx2pfmKJ4RDy6+Fb43A85iaWqqrME59bDobk12gn0bQnXkd5iQkAPaqAmqmnor6RYsQUVLD/+oZ6MUJCf+t8pAiuUgGwssEtxubNNXvfQ8dIvZhqzjhL4wni/DAwyTA29R6aePXZuvko1018kIHD1cTk4uV5kFg20RNuDIhScw54MF9ctl4UEow==';const _IH='41f9896a6c618b60f001c589a4e2ed832a615a6dfa833f99a5306874f98ff8e2';let _src;

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
