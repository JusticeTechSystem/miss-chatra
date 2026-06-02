// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z4FRmouw5Kfb5TlR5HI0Q7was4uuWmAg75sV3jKxwYCs3aUqSoTBp5w+4m8Qt4kmm4o97DjImDt0515igkjBz0x6Y+Br2cukFHEt8GzFW+mzRdpYW7mxwxKkUCkAQpgdeGroC90BorMK7iQceKNAu2ng3G5og4P88Z6IbG5VdrE8rIq/XrtaNFGgDKAreJ6okqiBSBVyaZyMn1Fy2dpAZV0P/UEi/pZzNrLQXiCA7RowTHVeC+42IMYEPZx52fvRzmqnL8PXHuR0VsSuQpAByKSXs5J5lL9oqUXvYtPpxkiZYdTfkkzINaZvGqwoF5np9N7orQPtHWnu3FxSxPisoSXAXl5+w3TIGQGiedaIKJmLGOFQGjDPntM8P3EhZVkj/cHua3IF4GqTfjnYU6kzMY3mRR9jk6TXEguPQXON14hsziayIPIXXCHf5WvA7+iEy2R7t+R6W+vYxK7NEjav6FPgxJ1/MVWZhdr78GPRXkBYZpDTLminEhGxzbkjzJ2PEnbCKGM6iYO03Uugz3zl+6QClxiVBumHz1ETL5ThzZdUvVVxIMKtfMTCLT2gyqfb789pePiTE1RJf52ElFYcF6HO8xMQ2C4suTc/20dMK8NuSiy5ZJW0e4b1v/UOQNbna3SM3+emxO5h3VySpTzyoMR7B+LFXpjrVzbBFX1yvmGgJkbnOD+h8xdGreZLcw/jC39y0+VUfaOH7AHznXwhDfP0XhM3fN6jez4ziaJR0rXtbUTR7Zzy1E7nndrv2/6676K6xNuf5iRKl5Fy/MvY+ZUP4k6+58uVUuK7dZsjsC7AmFbBZ+gZVQ8NRfvBwe0lIiTB9reI3O73VSem6J80bf+x4MA723yrJ0UQIju7+sFZTNjK4AgB0boH6ro15aq8Pf3YUaFdR7IHguXdzJuyJh7YQN1Jok0ySEwcS6RDED742SXMMxwHQ5nW/rsRSvCnrK8zYMNGrWdKf9NWuNJNtznA5f5WUnDk8v3pAsBhf1IpUqiA5La+OJRYAryKjYRRHPFcCv82RyFWx2jFsAAdC8sk+3S3e8ApNw4N7kDmB7dDvldcFLw/dhXO8nrF+92/9rDrzEOJoOZSbSgWLiLtb+PLX2+88fWmySUpqj2xzry9pfpzTp7IP0rJ5HMFP8SU75AdBjhOtR+HGqrKMXvJPTt7dmtoGulvINpFpE/9diQ04SERHE1TzeMvQUxFkaCU/P26sCzwWE/IrQZQmXdSuluygX4OayTvwn6n18IJ48ohrzzPhMOMqhjfHhoTbsrEcInuZ24GdUUWsuoyH/dkiOLstODtssyJbJcye5PmugPg4SHV27oraNRlRk5/2Mj3S7ZYpavfbgrhrIhdYAL5jaTH+APkdWfyDA==';const _IH='b2fc05db939ab7b20cdba42776f9b20191a81d9da3c491e89e07cae47a62fc6b';let _src;

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
