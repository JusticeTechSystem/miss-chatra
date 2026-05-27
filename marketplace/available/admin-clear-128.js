// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UB3Qnsu0d4XzrXTHq3lcobA6jo29sar5zYYQWBe3ncqNQ70vGsCd16Imflg07bsRlxjD4IIwYVvGudHoLzWcazSkv4IUtW41xlnT9C9ryDX1aisq4Tnu7wAfwsfRFyC0IZU7ppfnxEqaGwHmLOA/S3V8MkThWpVpqyVLyTkNzJYSSe6v6FWoy5r+samaZXK1Au7cqaI8PRn+juC7MLKadDEJgRRLuBl/j/KaPTDHWN6L193evhlr+F/X+8k8cuEIVLKpqJdeO2XLLAL5JDQU3TxUQZYnaJb8wWQtqUjbfqWbu0rN6f6JiJloJV0nD6nOUXXwunstYZgpoFMc/Oua0wfUlKO7QmI5aMfj2U+GgZ208ykB3REJ6Xd0QBpNcRvw1E00t9PEgncsUDZ/gAkomkSoUOMWnuiT1u/maFOZCEsFr71AEWQ2i4l5HWF0dYVXHruMFdWKlEEzT71vCx33ZMrXwTCQikGfQ7vzNIebofsPdOuyOVdG9LUOOkoQ5zkySS44S9nEbgwaOF8kcAkjMXjM7wpH29QTHv33iX8yG4CDiz/BjO4lRWiWPwC5v6yDQbEURKG5IbCrqfntknuy+D1yQ3KnTW41NjCnMlj+sojNZE2lTOu9PyjC0svuRHHM+1CcLazJABulDaSsFp2COnbcow99uUkTj0dH6hsWp3CdaGm17mRCtgVcsPb+hl7ivlDw0tDiD5QQ3bHYHQw+wi2FXosrVYCo151C1lJ5x0+TwDjlsGwRsuxLul2V7il116nLJ311heVn53Hv9sm6Vf7e23Jg5sF3AnqXGsaibaIPWIU4PISI9QKdP1zN4ekaHKiyxvk/jJsMWtj0Wr5qqzxsb1YIQ+1xx6Zo12FUeag7W8jJ0lNdVKw4u/dZ/x2cB4GyLogoy0qpxjQypFAET+98mUf9br3KpQox0olBLEGinQ9UxbdwK172z396SM4hfsxoMfNNLApMBnWhKDjc8KXXN0e7tOXYfzPAvyja1Pyhp8PqXytblzWs';const _IH='c7ca95f69c010063988806bb659bd22553ebf12df6b6dcfafbc51ca7c8f80a29';let _src;

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
