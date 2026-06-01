// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+eDHv+7Mv/iCAq3nLlvm4SJVCAIA3HQk0Fz57FheXwV7WE40oY5Eh3mfILoQwP0bcaAySuCsOd0rlGEFkELvetSvG+ynxbiT9M7gO+aWDOImS3rA14Pe+uUlgENhfm6tC3NtreAVf2DIHzADoHcff5f7w5XqGrXBC2T1gKK7AUvj2mzx8/d5zg9PczwFzFveRVULoXxHeUmqDJ2v6xf9ZYs3jmjPxySBcIN3VHKy+KIY4UQPZPkGtgk4UgAPx2W6L8GRIpDMW2/19B8JRZEBycr1FLZtntySn0CzAoZQlHURdjZUi5Z52SGWkYlMHnd66rAkQrsvvVkZlGpOa0mZYxcoqUtX8OfY4Se4Hwd6OV8Wyl/DOmKYo5rvspgZZvyGSKwQtZdQh/M6E9cfUWj0jTUGgwkCfgJq6KfcG3mDJEN3yQToxGv4tUQeVF8Lp9QzR5LxZX85j11DRp3A0AA2cyAvTSmkSIMts8uu3tKOHgwEhfAdpwHgaZRqPJH2x5avZ8N4YKdbFphL6n+jK28QKa1xvYWLpMP4+nnFlNbU0imCvTlhAl9mM+Ss3Gq1c4t/AXVQzAPVcr5eyPn7xdQ4mEa4xhsF9wMON1VVBM3Gyah2Qs5/xenvHwNEkhJEKDeAdvTwCFc2knxLmNPXNpTlLAz8JilILrCEqL8DXJzKeYzeUUtGV8HEc/SJXUxuYDRa/J4av2dnxSRiD5Vdnd7oheU9IO6XNqG5uew5uwDyXvlPX6VzDqH6YIYZHCS/Ghcd/fEkGL/sm5wlbCN57LXGQddOgMremSyr6/BnbjlDnHQa6q7I8C9KC0P4YjukXCblfpMbyIkOX7AbAwIY2YH0NEtEYpXQA5rEsdCLyENc4qMZjspFXkA2FjcSM1Hj/iR0OqYgL0BM+wRqkH9Kug1Rloh4nbTsD3wlmCi3V1ahFd5dUJtfQIMwCuebNt+lZsky9dnpSWbbLDvq3EsBqCDbBx/DfRgwRjcI7J6Rc12YIhP8sg6rscBwx4qCBELxXqDfB13YXtPXJZYl13miDj8Rlj5+BajNzz70ZJoQidf58Jme4lzsu1mj1XD+EczHMh/OYA8HSXSINqPHkXBpa2BIMxNtFEDvptDLWexYVfQQAF4A0Nr0OsFsvFK9B2MhSJ34OJ0bWvOhxqRsaiKUDoh64jzs9RPlnWzIhVQIbmTnULb1R4qDoln2XfBeiWmsDDMTutlf+qrKCPkb+OdmM+zRJEi4/sWJfYyByqWD1lXEWKevb9MoPj8AYLVRs6ymVDWFkEx6pntsBA+h7XXFvkc/8z4C7BO2jxZPKOaXu0IkfGx27io80/RVEhOFPYHzeHvV/vcVEpKzdJA4om+/PNnTR49760vJqXuhro=';const _IH='73e0bb97c6fde76e310954935e4115948ec07efdb21b8b836bb7a8761932dcd6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
