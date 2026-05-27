// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N+l2tf8hRGpaZx/Ud0y9ui743vmzwQqjWFy72RfcdxCG3C5qF+D2rUnTwOcWXRCJdgzutqijQ93N6XKA5l1vkQ2gJuvwJgR0ZUy3EVom7Y3QysnlfOcYKtQhZkRoGndM0jk+78oAu732QLuPpMdowyjxLWSCeyLkvjMCdBo6UFPV7ObJYfK4G3n2O5mz9YaPLnEjEqQE7FiXFNslYFzIHVIyG0/xBcTAujn9GLWSAhmpRf/r/f5G8kIgYSj+/6QySiC4oTbZY4qTCGsdcM5iV+VVfAe8MC3KO25QiIBEhH8B4GcNYv0C4ocaJvLsroifDZTgjaaPBhgXq2hVeV0vScjBa2+NI8OgRksBPLk8FRnLXM4VG4riTpZkKAeC29yffslOcoJnNijcI0Ihp+PrPTOOdGDwEG90/igPGm1n4tBjuA3YA+AaTsUf9+GrKukpiOuiaYs3nKUeG3jU3Dh91LX0fwtMBxDZQw4wWV6mPkxQibPvVB8DjVOHNV31zu+0aGoKCdaX79WriuEQNFDS0azO/hqgRjXF9Oq+Ad7eRJ2ewnW/wTmVtJi4mUJcdZ2rfnpp9qyXzcTnvw/xkSZ15zuG0ve8Rg1s63F1f/g0/nxM0pahv0xRf2FdeDmNdKe6C94MmMenKCY5S3mzyYKyzahnJMfsACFgVc7Mf2+goCM2YJHXt8cl2zHakLsEHyIHr0Dv6+DBShs/HUTYFaZESQMN8m+/1gJPxy75c0weWKnDNzgWRV+v5+pVP+MpRuOnki8u+gnpW9uDFp2jOzgcDgxyHbI2dMrxkh5Ao/z3PT9j0XFohO/U8gVzhgIg+xOEHdGdXLHhXJPlYEDxBHVjRL+IsqChLDt7Eovuc4DELgJQZHDvPAJomcGzgzweSOXA5juz0sSvIFwmkC6BDnB1ReQRxPHv8NXatA3i0miExv3Gt/f35H0faTattoeK6I4qIMFP9VDV9BpsHM7yvlLpERmTws5vGU+gx+rsB8DYrQFXbwRhPVloRIFzY1obWC5/UQ==';const _IH='2e5d1d7c11050929fd5a26ea1142631bed8c314cd0b25d49248d5512d9d06688';let _src;

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
