// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JVCr7VR4o5ni0E4hDllXLsb+t2hekCTbC1VNMw/qQUi4qZtksd5OXwFkvHPrn4JgIc7hFXE4daYQGAsIKjpxoVO0mBr4ZN8CdQMkJEOLBVu1CNQc/80JVg78Sw5JABNOe/F0KkFNccEM+A36NnzZ96ii2UukZ7zTgLbiSFxaFdDsFoGS3nQp5dFsFs9zFD+Re3Fcu0Q0Po5HyDrMyt0gl3uRG3mrfShzkszmxSU40z45qX8+vEX/Hvss49jsuR6th/Q4Z7YmJnlcNkGU+L8KxZxAv3qzBYSB28LH8q6xrFPwQtryskZUkgoXOfAcwUuP3aBfRYRf42GGqgND8XHx+2N8GFDHUg4eKCO+VigW3lb2/9qZOdYfRSoBLaBE51DaKz2aBbRIDhQrSGNeRw3SMtkp9/bzHWgXB6+ZQegtOBYk7k1RHO06GpI3KnAx1KDi/0zGsJ2fOFW9pFFFb75yVfy0R+9PRloLfHthjRDKJaQ9yhgzXOWYZ/HxhFAl8FEKs9sVyjcBeBLORgZ0nIZsahu8pLRFm6YYmzhRSFBVOai0oh5/8Ftu06KjnraIBu3kxekKcR+xGVMGoS//CyyJMPmKh+4qLMwXxRRSHGX/qQr2+giYtKGz70KdCcw6Pv1qmy2frLsQctfE5oJIM+tmozqy0Ajg5jX7wrYXVxD5YGj7BojzcUbRkK/N322J6I920Mape0qpYd5h0eNgoIeAXeUXmtieeKi2GjHjFuzSq8jLLE+yeX2ks0nhcsm5Q01cK2mCYw7+cbr7xx50gMrgXrRxChCSt+fo+QcqfjunZjmFP9uyRwY9A1jVn2WwwegWuLTnGMf9GsZqXzjYr6Y2BNhGOrRRaJZ4keJ5T2CO2bwBCYhZLeA/OWMVX8XP8VDQnfDsaoVs/twV3b2r3PNoODRmk+9v/R/2I3q6RWu/zBqepl8/D71+jESg7EWMSs0iLQQR/zTnEOF8VO7GyR/cUCZHDeYU+V0n7DJQYq4l8Hy9J3tqhpeNbXBi1Fx1W/wNKVqL7RC61bslMaREy7+wym62Jghl16f5F2j/bpkTHuX5E265MvMFPCqyO0CfVxwutK7jumkvWj9uZNm9mqSD5Xxn2jXcAPvMMuIXJRYyTGosNHoGQAHAOKAO6pjzoQVhKiX7fZbCa5fMmjEOk8bBLYOAqd8w/bK6iH0wIHSU4JU7O2lTXz0+3rGV+bppvP6YnhBs/80x4GSWD+GQiQ==';const _IH='e5763dcf8bff86fb5f0a56d2866cc0d674d5f58f502ad7940998c6aa0b34c4e4';let _src;

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
