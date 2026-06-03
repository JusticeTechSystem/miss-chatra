// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4b5GXokqlPIHMDuW8e+BP+05UMowVOiURquiqFsx9yNplC3XsNHfhVl3ZCTHgNEWS4fJxcTnBEnd/FpuntrsE80lyqVmRl0RfA8catxgq0NPheQKfml5wmWKmexZ3DgOx9MF4LmHVdRhvYRi1zYQ6wMz4gFCynoaheM7ycgAMQJ4xAdF8LJy7IIcncjOZ8EKdrd+pauPjmOqjkdDbSNqzzFYpdmCboiO2msaig8YOgb04WoqnEO8pRW1/xVMjE6I9AbI3Xgjaz5dsMROKeiFdWF4rck4YzR2d/7MSoFnk4qAWcp9z6CYmh73Q5QW5xMGkhufLT566CBXDE12hk0iI3qc4f1xB1KhJLfPimhHWW6wRTZdbmq+ivknmbCtayVIu/Bk7dG0ho3Tvee+SnPwuR5FLkQ6A3Q13PoICGGhHWWtB9llqvOOyWkb93pSeKtEsOHCKpg6lragxEJ/YUJ8+54O9deEFRadDnn1sjytO9d1lOZiALF95pOuybPpW7oDwRZjNFC6Tk6gcMYfex1ojp8HjGj9hqmrZTedtJnESvJWOJBQ3BI7jhtu4kNyOSW8U+jhuqRlgQgbloWO6F9S1IWriLJIJpBXO+bf0e9/L272HLf/NaMZtGVHA60ieQTGEL8EY7we5aAUp+jzCTnRf89To1wYr4HYxE6PEfXr1/SQoo54Jt3DSEy2XYCJzG1sShaA/HZwygk+1VS18Z8I9Q6bdQFQTTbr2NpRup2VTQqpjoGpIJg=';const _IH='6e315410182eb060ff04d757edeb70e5f9d69901ca7803b39471c0a87b0dbe98';let _src;

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
