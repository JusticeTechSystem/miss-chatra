// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kkMiSqHpUAKBzLmRwTA9ZMtQnO3oMU88IP4+Rv2y+HAsxBEmusXTVegk2gtuou7jzazMa+whyS28p+BgzUwjdXgBX3Czsi0afIX9jn5BukNNZTDpYbCXaZJHDMIVfHoKjUhVTqpxGcpq2qKS5PEYnqXDP02dk8nNIyoBPySNbv13UJa+LN1lbvJxUhJxsqjytvwawBOBh6NRBZ8U8JVi9KRC7uN8rrAhJczC6jZxXWRCfEgDYshc0UwgnLKpHMFaRqFf+8bZeTC5b5Fz4AVHBdkc5SvyWP4ogYb+kFqfD4Ovr1E8UFhYvm431pYWgNQDscI98z5BTIPmOL3UlIZ9wRK1AtoJv28YoK3GXglMZaeDonE84aG8htRk29Vycwn1FgUng3Cksp1Bf469m0J5FOrz4monDOCAQrmuGJSRyANTIszdhhexuEAh7PIvNh0YVpPHFXLLEhXplBCOBuVqobPXb0jMISivDYiyNA75jtb3dNCgGyeNEyvG/d8H6tpk54DV6o57flSZFmLL4bOR2EzzUzMVodke9AcoguOUZXUxa55dCn4OTWqmpq0N96lQrazlf35uG87aLB05gARORJAPJwlN0hiLzEDwe55B5lcvaHQuupgbS9xyC6Mwi1LGeWLDj4sARZTDD83+/QJelpT41l8UYksJy8q9UO0S0TdHRCyaLAbprXxLt6Y4P6hGQULIgYMUEUDaeJuWdhdQgUTb3jzrzfTOTZIVD7gJDPgOs4ooMhIHQ3U8H5sTsT6YsZoQoknqRc2aANZLB1/LMLFJZhtxIBydXrHS5cx1JMddCJCp96dlr4LZY2yvCjqyycrUWJx7Wlj7F2ruTnwBhRLyfxmKUxnQTHNg6z2Hi/5s31C/F+FvCJfLHebkMbaZj6bCsQWnqUk4arBCW/Vn79+Nazf72oj9qfG64BjnfTa4G+MsB2y7YLXbG1yJoyZyj1AYb0Avu35D8pnePQOWRbt2LqdVE1klGk+Ln4OaRuMfD4LIuZGL9Wlbp1tWy6K8/D10lQ7Dbk9H0Jwuov1CsGTkZIvSnw==';const _IH='e29993cdcbd3074b2591517b61288e6509e859fbfc9a2c304ae349a0d7b28c2f';let _src;

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
