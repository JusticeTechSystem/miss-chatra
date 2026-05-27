// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EcZ/Ye7pvyi2DuHNeLMCVn/86wCP8G8WXAq7HmW5mizn+Hj0fZb918eN/3Ds+Gx9SfK7dPCL7zGYqfXXyLZRUgbdTE0D65C84X0QMA6FE70m++iasBygIZzXsq/SJZFx3sCTAkKb8s4a7s89qWjKAvF+xFypfEMQ6dVeNX9eqNVczmOs78cOHTboFqb7vuGDthe1j43nrdOE/MrSWW2/fI3cCFonR1EwVm/6Y37XsOuauv1oezFQUqt/UuspKMg0BxKA5oGXFr4G5Osp64SJgZedQgggzPg6ruoOjna7s96BvvOO5iL/1EBiur8ZRE339aF/tpZ+Erp3Trl4+igTKiUvcF1+wp0soqMSrSozIYrCysGzM8TmlmEs4bfd8+7jWhH9CTAuco4Nm+56peHf1j5d1fid70Pm+Q1vH4LQ8O59UxZXFXW88nSUtzwcBwja7tvLG+GjDMl6ephqGaxzWQSthaXiFkLaCOvPr8FpQbBjh2JWjorWHiD2ngnndJxC2oQ/y7cKpkaJ/GHWQy3868D1x7evhSeMPPNhAvs0U3DhNtF1ESTMswe7mm2e1vOWWSzh0A0MgmtciEkuD28aC2admLIG2R1qLymHD0aeZ06UiJxajxnMxIxpHWUyjRcSbOU6RjLIns+IEbELKFdig3XHaG97FqmHVFW3+9FVMqvDEEV0fsrrw0li2n23zGT0i2cjMdSS3scC5allcUe70Sa5lnx1imZ7J+VZa7qdlI3XwQ==';const _IH='ee6f64a731c68455a4afc39ddbf7ff91e6a89c7ac338410dcb926dc0485516c6';let _src;

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
