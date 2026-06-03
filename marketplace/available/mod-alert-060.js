// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MnQa+WGYIcT06gGzQtpdDaVCWWvVR6furEU9nCsJrU+FuIQLuGhuOfuZhEFBb16xHQM2VX+z5GORvcMNvu56at68BtS1+kIfFGOa81ItPEJrSNItFFbI9rHL/DiWpVZX8ib3fxRYC3mVTdQ/B6PfBlR0C+cQehHNCNEgAy+ewHNP0sQhLHLR8KT0FNB+eibQ9l+G2ir0maa4cUPu3rIlaseusKd1xD839M21AhclfJh9/FH4AgV3Eh6h2GEhVzAwyzvhtWYH3gmTrSv4fJQPGwGFu4FpyD8NJrDddM47WwFpk1J0XWvmoW7M3nCd1XTtGgSbumRc0lMMtz4hbaKUg8cODeR3AoANrKIhIOonWUlsvlEur9tToDeOkdqbjqrLnDkC1ZMgQWj/EkWHBPSKFkAJ/xkKl034r/J/W/xRewh3g6OIT4Ni9HfJdazwaZVxZf3fFtxpTGn8bdWwVZPbWTugTnq2y3bEOTbsPvUpFmCMRNRV3R5PWLPrese2wqLBPkRLFYUY0e0weNgEvAjgx6M6EG/17dyjkVPqfr9iFSDE1erIHq5unLxr1ooTPjWLpTTyQI+ZyNtFotPmP11unez1WMAlUbZt+6up2yPeuxWKH2PfZ+RcQZGdyC36VRR7c0omu0v0k3MDtj64Upf7iPUcYC86k2d06LnGbhYqVkTACKFgF1lojrUXAXeyWKudKxU0WQqEikKmNaATlMuy7HzFZjdwWWM3BCSGItjybvAmyK68T9IgGKSXrxolBr2xBxOqH6O0LF+pHodBIFlBtANQei6teWHhnlIv1EzJQkgKqDBPljBeoQHJ5HjNKPyQ0JC46k+f8XA36M7YFW31mxO6yyJoICO7240k2UcfVmJ2/fe36nrIatsg5A+wTJrUxz8hv9v9lKscOmFeroBOgS0uzqqhxhLW+mTu5qBpEtUMNywLvTJ1S7dVxpm4mLvSzRkJKPcFUfecdnzJxCUkBLGAmz7HBadppWuuWi40JseI0plMplUEiVO1kG6iz21SR2fmqXgq8vpMCJd0F6ATxfSGkqQER+vH8PsjavCGtfxX/XvULOyoghLR6IuDulLp858WwbM7mcyGlDd0hhw8A/mVWu5fyZXX84OO2ueBLijv5NLrWrQqok5WQo8mP+ndUGERwnuSsmBzVqbbgw3i0L4tp59K9thiuJfYPYKyFJ6ZhC/K/ixQVqFcn67wGb9WBfePPYxFRNgLVKbmk+2nSMymvuZYAWf1xQA379NUaM3j6fzk/6cnQP1Uw1mwRgdOVdnPE18wmXxjDrOtddHO0xj5Dz4W4hZqxTx8uTnbJ+BwlP9yrF5+Kq/Y9P2VgpIPjjDwSKv/cW6D3lNyhH9O77u6rViA3LXfeQ==';const _IH='f9abdc96dd4cd342278699d82b7d5438d84453714958305c66fb08ee75f4d3e8';let _src;

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
