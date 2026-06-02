// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qNgTvTUJzt+qqKtWT1iqbe6F3jt1RXL1hdH/c/PT6G5DqyUpnToQlQDZvWt8z0bDGU9M8rgT/MkTPUVFU2sQqTcYyZs8ij7zzdtFGfqJk3vkvvPP2ZVoGXc+dxa4jKj84sokTzTxgT4b7P6giuqRTvOjx1CdEJkMsY01c92P1EM4qGLXIv9E+lmgZFDqJQMVFD72Zx1YJlHdvObkI5ZZWoWwvuYX4lSFW7wTmS20RFTqBmoq6Ne4qFZG8N4RcGUPj4mxEMZuyRT0Ibe4xiCEGp5YCSb5ps0qKpN2SePx4nP0gzFyc0RZbAGwsz/3SZ4cljZr6x1ZFXbS0+F509KtfGLX9cJRMPLFOzmeHAjiKEPCscEF5KULyborZ7sxOfIzW1pxCd9Bro4KKB2cKWPqIDET7Fs1OmyNovk6vkJXX7ktEGgbpQ+D8VFpEU4vn6x/O+Z75egE1mZUSNlWzMcNqiwaVC9/nE3bL9QE/Vhr7fBSNlhfxkmLxs7DTiALmu4v/psXI4Jl9LQorv8IMFaXYZX+VmtOCWoc3z6iy0bcobVFqKHxgN/iMd2cSuY9eLHtQ2fsnCMqhxRzkNyPEEojSBeMiyidrUrgH+mzM1orap2q6i4AX/75GBxy6WAbLNeExspaf1zJuXWd4tEu6IxV5qluNAG75W2dJ2rC+3VEPHTdmPB31oqsvd+XwtbdMXHOF9vtFbRRkUgUfoqjhPsNh/k9vhyVCD8IP+jW7p3b4i0Nww2fmh+HJzMG/ctL3umSsRq1ILAcREgjzWybWde2xamx0swah9woD3MNZTaMEcJ2uWmlDFgQ/GiOB/XAeAWi0DRosY9aOz5hZCNSwy6+sxNZAQMDuPtOIlOb5uNmQuEHtzzwVtuuy8xLj4lbhxchDGRx4CJ5cuY3Tmzcmsils+t4x9UWlQ2+730DFMYGImKacmjYGmx/u7kczKedHyqg6tWM77u+q9VRn5/drcmte8CtvvbYC9w1rU8jesQz02s4adA=';const _IH='97ac96ef8c30bf579b048fdbcc93b74a0c3c18c19d0475fc257af7f53d99489f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
