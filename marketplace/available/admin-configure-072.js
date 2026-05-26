// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t4Z6isHn57tjsbLpVwLxI5lOhpFacntC/M2a6XCzOHaUduCUUj2yaBvpRVLjEsN9RAnyjiI0VJjqlQ/XejMPnlJXcT2A5xk8AIU3DqCzipGeRC/3F8OmY4/HNUCe6oMM8MIwJyiqkIyXoBI5y7UL4UQpkYmCLClUOA1/dOKkPjR/cxb3K4wuDkWsGxxAn7ROHG66sya4srOXF1sdYo/L/9O9J0Ra3qSxk98YNcah41KosoQPygX+kYNoEViFXL4dSoBcwY/LNmSa4ppxW7/kMJrjGLyFI+vu+nX21KGhG7mItrb/9iswpNa1+0m4twCIEq2k61ClaR38Mvssxvr3jUEm+c9czru3T5PE7UJcZy8SxuNZjRwuhAw1Yzz4s1RExA6vLA/M8AuqefcIdLp/JhGDDM8Qh9+UdTHVnYcyR/b7VONz2Vhou8Fd2kJZERRDrb8V2MhHd14j/oASND36VYu6RQOFVDRjXbrp6rmFyaHuKmYPxQMwNTRkN4XpyVWP9RKZepD3/aVbGfBQrdpsgn9pzgpSJRjXhU6/9Bd+eWPLy1M5rGJRO053eka2wu/gyBvCwUZo0ow1FjSSipUaVs4x7P1fvflmTZL9pjKngBsMP+2pG9Q4Pf/XdeWgNNfGIcc1uvwUM5z+hznPGi1lHb+DxfpOVknxnEoGFm454EG9mxGNLkIFfkzbykH49eAkWS55uVtUoAcsyPBN+tGko9uT79JjjPTjYfaVTKRjQdZpag1RMFyS9foWwfm343cI+GLBUMCtwQTEYGkBq72f/Zf5LSse2euklUSHzmo+TRfxUDOxeM0aCbrIaG4VuLliH6/U1/hY6VxH/5gSSr52Hw1rlyB9O2qHVZMNO+3f1lQwMNolcsEpQ1Hp7hAD9di+YimFGjH8c3EQ6WoSXKMAVvC10+WSox3kiLZLB0pfFG56tQAqRKFxcR+4c+NnT1jfxqfkfkP2Bwrqid6+S120yHcAylmW+KchVzxN6E3bdMtI+JzNCdvZAkM1vr4JiDrMRSRsVkZONeYETPB/uKm30E87';const _IH='18be91697e13eb2a61a2320665f13c24e10eb7616d9bfc00e9e75b8aae820e76';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
