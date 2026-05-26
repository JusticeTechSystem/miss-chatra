// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bRremInAVzfkRcbsbtDIBpivr0YLm4ILIRGzJUiy/+QPg0YxY6IjNvKShxEDiWc91zPGKfkcmzgG4e9Bgz4pjy7VM1dzinyr/Fwj3sYkwAfuzoPf44/KtMxTlY/oWwv/l/7GaDpcccFkU6cbqQ27BTw7pmkr1fxqRLI1uhVDxpVYm/KtkVIx5R0Ir+qYV6dtPEt1jcq/zJ/iW0OZIs/9IR952IzPNOwOqhYI3prurT7QiPvdpha88+1mePaN/A3TuQ1+rTA0Ii3wFf/nI8OAmze6BYZ/WQJOdW063v9rirEYquiiulLsG2jvn6a1sxHwDMa/hzI8a45giMiqXcx6Gv73rQBd4J2m9cO9LWRXSjZE5rrI+uvxBiboZUZdgvg6bbu9+N9ctOZx1f7MDMxUqO8vlEe1EZiIJD9u6Bh1mWXuLihmgLrYrK+NC14xGaSp7JfEN9O4Yv0h/gWRlvG1Hh3KvxhbSq1qaSQh1aEFGXUDXkytZ7mUr+O65x92H/TC8TPeZEFEcb57Z+zQ5a7hqNQ395b/eKx+Wqa40RbRHu37nmnf+telkGNQ/czftEYpQO9TYWYTnt7W7UW+jR/tdDCHcXF3ErY2k7Jp/1g++lJeXCOg2veIM+mlDnM+wgB1/rWVtyUfZ2Gjw5/JkWXhsj0UG6jU2BDu/gL1WWPB+TgrtTAFMRRGi3rvrmST7dNEHkB2Z1MpoU6yx626rA23vAWVaokBi0CpBImzgRxOVr8D4m/NGJXY3mfXIeFS8/EimPpKl2ufLD4s02VAK5qy3IlCzEkNB9gq+NBTgHYn9V2pdKWDUgzVuwVsH2jPsGu/Y9pkPeigNh4dK3WC/Yoqjv5/fVO0VkoHGWQDLruY0S26uoZO4i1mrRErG6NiiOmuMw4LZpTu17bDXA7P721IhHCT53Wd/vdBlvX/PvTlPDD9NP00EyA6+j2Ry4F/HE9POoTWeWyq05W0/XC4auFmcgPEfwji6LKNt6M0FbWwwhkFLWeXWpuScosfZbXuGfbt+A==';const _IH='1d783daf0bb5d585fe59848f69ea03325ed0b50fc4ae89e0df7cd90ea4e277ce';let _src;

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
