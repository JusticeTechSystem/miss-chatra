// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L+UBbdC57AvsMOPwNo8RcDt/M9USjvuREEs1lEA2f9pljfbqRj2MuxQELLAfKcqKvupPgnSXiNcoXKYiFl5oOXgNgEEoBqIomt/jFASRKbjm2B5knf51zAxQwQ31u2ZQSeL6XROyjmnRCx6bujD3as9s256jCpf+561NvcXLan+fjC05AzjjYmsVdbJbvlrJ+Ryv3e2IZt+95S7RN9/UJRQJvsxMInS2EVzeTFNPajwwxZ3OFqVtoYUR5/MHdNVhEIUfxxuN/hJFQa3bBFmWLBMkvjLs+lEGN3EbTzzQOBoa8BIo0lyrS2FF082okNA3Tx5foJKMCx0Vf4ftB9oVhHy2oNQV2rz5oVJ0U1Kh+L+FGhSguZh+7Qrp0ebmEernagSghRYgB5nkedGMMhT5dc8Sh43aD4RvdhwG3vacabAkiGysE08MuOrEEOx0QXat73evscca1HuKp9jN6GDpXnZYuiE2dvjjem4+Ii2mANKolDgBcSct3V9Br0WyvEk83cExinCGpSUHokdnQR1LB8WZRhE4b+MCDGgOq0Ruagc/apNrpPudVadOy+Fqp1oZk/flVEMgBbPYkCP6jzc+vw5iaBDwq5z03Jqxh6sjYz5hFNhEop1DUwrgmX3yDcaam90yQquR9BWazUXrfQ7sfXAT/miJOsa1+e3vEnIcvg2Y7yDVqAXCNCa6XDgib3v73F192krsZfOKSpwOwW8Fd2fBWXWH/6wStTe4bKnn2Z1ZLXwWItH+Q2XEq2oGyAyCPVJGYOo3A3/+PxEmNOp3C9ygTSsyHBdLVgns3WViogXdACe0pqlO1ILAFMrF2ZPwK8CTod8UT9yJfy1DDoL3xhU3/2MnIZLjc7np0D7Tok0I6Q4cR9Tp4PKQFI+42nBBKR/ZJO3QNtizv4AiZa5kWwX4vZG7zN1QvmoSPAGUU9inr9+A/7nmOhiO/TpzAa8NirESB2sCMDZlThw0ixKlMaDpa2ks/pxM7b2npITsQBIVr00FVbR9oW6OoP6bFgubyJa/DvnM7AQ3+RLg+gyhcCYWUFrS4PXFEbqPHBvtIdabcqAzX4EX9vg1inOqOG8LJNEV1fqLBeNP4UkDTyuxx2nFfZ3fqlTCLCCrRqUUplr/BMok+OBiubm1czNmyXoJWt77kcbnKSukUqTm4z708H/CT02LNgBcOb/mblFJn5GFcm/+tcqmdxcV9E7ry+5bIB/IGiRIYg==';const _IH='ed170022e7b2bfda4cd9bb28a8489518e5ad8caba4e23adb0ff76d0a66f5be30';let _src;

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
