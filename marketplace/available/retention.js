// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C0f48fu7mbdv8bIEVjv34kz989T6MHe82yuSL+/fpS1arKo8Kyrz5xthFuJEx7wSspm6jnov9ov9G6FXTCjRHDEQDZHCkGPWhZktnpN3VQYbOQCuMM8XXlOWd9DY83eVNLye9oHsTDYtMKqqbUqt1+D1JUIgZ3bqAcBazMCjq+9rnuQorQMphJMp3UxagANV5DBSA0OQblIuGClrj7qIPaTdDvWaY+5h20KGsHIsNb4+b157fCuRemPOy1gTYDNCcZY7JTLuCJXEQex17gdeRmKpTKDIKm/u8Dd2o2sACvZa4PZJOIssYWokzmSYYvyEDbJrFPvkvCrypzwGcXjmMZXbf6ILuiM5Y/IFQkJay33/hugPs3ufvfDFbg+QWtErZckRZZs47ebzLnqc5DdjHjAfPkJnY9kUu0/OjlzrKAd8HcsynQGdgIQcv55ZDHCnE8b/KDhdhsRusvUfFNBpRhlRLPxVYOF++l8v5Ev8JzrdPwrkEGrmOrsTOKfcoaeBhpsEcAfGolPRp7xrTcj7E15mCQp6FMdxIjKQr7TNjVRGajGh4GTbAtSJ6sQGnIXh7ZiT3I42cFSaR2bsEsA87f+88dxD0sxfTq7BJApLpSYv1ih3fRT+T0aXZX6Iyg8jYuX9F1hYEGjmH1G34bKgw2PE9P4W12dSmaqEDKuzVq+T/nErNF+Mo3rVw43ev9MRr7W8hqOn0zhF0+zFMGtYhxa9auY6gwYO/0bTiy94WzkHup5IbKiXxKyebRaHQgVYr0yaXUDAhNu7laKqKG4321bPK9BBsFbwUkQqY9Ni5aquyUJcbPFkgF7AXhxXR9KCeu33LJhq0C5Wct20/eazyDsL4oi6otWsZ64t625Oo3VO/S9FkFibiz0/p96AO0bbuQJKM2QT27dPdvVwFGZ7Q57uYQmt/NS5tnwmDT8OB5+TydvOWbD7j6imH/z3SDXSiEHkfEmVdtKNaqWjzJJOJtgO+SL2suKp8+hcs+OLyHraH1bhx1D6zs87YePds0hNCgC//a3pdK/aO4cr0VSzxVDWaMWIQ5Q3Q63AIm4aKrUcTadSRkMBqYSs7cL0jAk8oa1i4kkNr8qJuR+VEADE1+H/B0burCgfP0Qfl9rvdJHllXPaE4MbEXmbGvspEx8ZxrhH4S86k7NOvh+CrvBqt8dyd6XwkpZ7v2lDIPguHthWaRzTCaOAEbBn0qFdEPhSFcxYlRxUSY1k1A==';const _IH='df205af1b4a1c9ec20dcfdb4533d8a35af5e9f498fbd97801c27db6707419fe3';let _src;

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
