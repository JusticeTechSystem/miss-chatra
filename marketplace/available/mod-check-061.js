// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2TYXuW+8gAdxji4IN/nSG6FgNxr5lRPh5zkIgz9tW8TuOZpnZ+5Bq9velsy8mYHY/A1/oN1DaqE20qIQk5LRave7NwvtKNr4cqbWNY+CgZV3ZARCQhulhrA4T57r5CAxsgaKne11qFBu1atQTMOpuMZWEZzATZ/ILWOeFtBTcMZ2sphWwL3G2Gl4OEDEfi0uyiTIsBdmCR6XW5jHxKiCrjf7rBEo0r2ebKIfFQzFg/EPEg/rHwPfOITEWB9hd8cNWK41v6cW/HOxCQCbQgcOiyaWxUBBRWpmfg7sYxRbexC4l5KygXUqhV98959HsqZc1HZ2pJpBZUm+LQSVj9qs5jTNX88zvtSgweh6j3CKFifTl8Q4RrrS6DXl5zGAaD2m36yqWLSe6oeSH9AlqGRX3qZAYc/uL5erGWeIWTAb84XeZLFSHsEYtsrEfaF3H49I/nDsM53wwKt4/pdpF6mAymtOZkVeUbVzltFDKjDWryawjGAVrEDr12wu0j8dVzKOA+ydlQK/0WF7tAfupUyEN9LxGgA3TED8T4fCp0fzcXRoJZC0Hz9wmZ2kDzjnrwGfdhkOF3CX8hMzn64DPoUY6QWtQupIqlyKxOX371yhqKeEg7zvqGXtkPiISfYVJOxFrgyBJuUeegW1KryOC9lt7qh2N4JlehHndym/934/rY0A5D9Q9xFNYLhjnJiB7Fjere5h8Id9qnxVKqYyElQOF7bgUq8UpgWXemNFgTJC53Ev6yWhiRJG5nDwnS+qcvY2Lj1Iqa7M68CysMbYaigJD4WIwumIrQwR6a/biKl1F/sauIjrnsG9ig/Nt1wCbzTzXfpeIkGqB1/WxfQl2KP5dnAuk90XSOtYPNBox3gLfsruzNJC97zk7dcBfNlLkKYmLrUiv4nnFooDMJ8AJr6ibH8a9CDba+DpOUuIQ7eZdMr87YYjH/IzTr+zPxUZPzQHPCPSKrIOZ3SM1c6i6ehPIGKEAu8h1X1PymCsvINXeSVtYiKS75HoNeFg8wQrukOl6/McbAyFxTxXrM0vCggZQY5YWoVWbesQL3kpGZVTL0tieMcwRUyHtmgI712wUY6CGRdrmiRjS2K3+0wlknxl+J68fNXBYaCInm6RvZpjWheolDzCva741CTeDtFMl5zCHMswkPdg7TT5eKoZBBvkPyUqYp/6A17yj5ExM4jO02TpJ5wNv+ylwW9QK/nmCcdPimx8Z71sttG85POVIqOwBq8qmjJGSTClVzGPExdx9UeD3J3rcccgQ80u4BcUaHz+u0iRoFQ+Fv0FwXe85MOeM1t+MkCt/2ApyNdSvz2/h+7klW9FlNehNd1nQXKfJYTJFYFsBHvXZUxhVUEViEvj4FUPqTaAf54S0w==';const _IH='6720c13e77066080cbb75b510df5109fe438b1c662d233cefe503338ea57ae64';let _src;

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
