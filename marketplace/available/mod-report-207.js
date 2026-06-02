// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zIzKf4nbTELAwlWw4J8GMARAer/I7rPtdeOXE0hJxT8jGoJTeVxL0isWeOq2Q6plzVNpwOXB3E3BNziz1iElDYvMwI9OqgJKg5S9bXBU5jNuFmF8OYW41Y8LIoFsAbvbslYDvqHXe1Og8qCTy/kU84RF/3glX0qqQTYYTf5CxiNwUKwkfEiyS4Y4abtK1boU/a+M9QpB4YzZhrjA+AeAjwKacJhPe41g7ssUmAYc7Gs+q+1QsqeqYY3Xb7l1GnRGGZpFF1Df3tyE4G0orxRuCYYfXEV0vyMHoOWBlyP9TMHnYN4gJA88EIP0wW1NW9vsh4bSivObKgHXggVcHkvy6nLItAYrPXQmDk4izi7xr1qWsPzidpnOkUhl5CExRKS6F3y3sssrnQkxp5MCcaN/FC2JEs/9PUZccki3C/ADHNbdfDqzsFpyZpxlwUtEs4ZjDB6F+mb1DFrpa9LixJApZXi2VHy1ZMFDErSjoAMLsPmKE+VCFclRVciKOCNCu2srHSBNhrqSPfZ/zCglXBXHbFrk9cmtPwYGKJ2tYWrBK5PYeaOESE2URTAkFtabLyeTmEYmt278DKo9TAHmjBjbbAsY2rpjAteD53gqkCmE0EB37EnsjdwnlRzhO2xXnoILdD9JOUf2eIoqNil1oUoqFfPPaeYTrLJ+iTsNuQLPuKDAfzJNDVIY/pHGrTw8lzbDF24HAppmFeDC4vKF5dLzhjvMCA1bGocA5h2kQ8nz5Im+b/6+yzreDTr4+bSMNuyTGygFyI2v0OyuSoTJKxK9v0svVW/z+9darunGePKmK+aEu3n/00+fXzESW+htdi41ZjsKMvEOqx1CHyBXhdyfVWmQ9ZQIVepICc3XCnhTND260uSxi73y8DO5aN9OGrYIeuqOGxKgh+8aWVcbZiU890Q81I/lVpUCEfnGLMgi4XCBTkJwtSIivsH2adGWUkjfC8ljL8qxqkgAV18uAhHJo6SJkGiwUPq3FHMYZbHG6VUxWNXG1naCSco5rWwVyIAzVmH5YKQd8qrtOgg/DJb1qkGu4yQAjK5akuTzCx9D3ut7wsW1c/RdDLpe7yMrfoASOiyqU2you3SxnTk2d8jhmldMqZ1Yr46s9Kv6NAHJE2S/374dm71OiK7HcsJnq5EeyBl4wFHvK4S3kWXS5vn92C4Ni3SvFTOgG/4fOPqbuxdHfWesCyxHgbxP+IFHZtRohZqQOl6+JKOmuK6qVuqATJUxKOACnv1vn6L8Zxn5zYsbvF4jdyELmkGbqy05aWFrP+CraJtOeBzJKy9PYMalaTKUFxG0zypOkl6uRq+BYhCOSOfSDCQUWyIS8/8DDUFsmgTd72DEh6ImvngYhtJX6jg195VRUUl3j3vlGrLL++uZvzUTGigICw==';const _IH='738a46d2fa49603b6011112c72a48151e94976d275355c22a52085b10cdf9c35';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
