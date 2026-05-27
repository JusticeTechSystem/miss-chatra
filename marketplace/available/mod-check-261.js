// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vAJLDwT2R/xe1PR2odpUFVtL7TpJZ16j/QqF70Nzx0ZiVswzrv8MnDdg+4KiBcjXtpbTINj6d8m6UFGN5ZBdTjgy0LQ331rjY8mkyZ+ql6MSzbi4+zDgIsdF8WzUN4REIYAfki3xV9Sz5SJ+ZnDTO+YAzsuTfxHqNeF4PKekd1hvvzQ5EhB65vOiA+ph2x9ATNJ0XrBGRLfe4hF3gKkmbdZZMX27ZTD83WBhJyb7k68r68avIOG9LfqER4CLdOp0XX8STIxXlkk+9lMb+xZKk0/MSP9q5OLVPp11AfzQE7QsEnZnKAusygA02d1P4m8JA1IndkOHz006Bc1LBswpoiVc5cjba7g39neNuA9IztEMWTMqQUSUFDkbsSAreEmHe1V86P/3HA8wsJS9J4ew2rBEnn+AcLOCFEuzFAH6ywlGFM3P+bqvFWmfgbKdZ67ducT0bdCP7bSVlo/HRIev7Cz+0kYveo7pKRlbgzmKpIEbf0KMLPSot+DzegBb1om1VgBKWJnc9ZaO/eE4Gjfos3krqR/WDYiYif1f2evTiyH5tlyxbDUtVdkjw/rc2pzp1AGcJQq5wKdX14ausaavD9mXbSuhVNn/yD7g/GcKy9W7z3f+qQ8phkyoT8drUo792HoFlQjSfOmfmJcfDbyvv6ti27cOv+y40L3LX0h2kcdpCF7XQmJpeZ4mEKxNjA5G1hjIHUjRq2Ii9xHKo6UJ6nDry3fgHfkM70uUFgQwCDNF9XluV38Bqz4KIpd3IbA0d3MVRNfgp2lhYFdY6dnxkErvQ3deAGZAWcbS7TvOlU1SretIJfh7hl7mVvlqn1SdxDhiGXGRXV+I6+URdQwPnVsEq4JpwOYPfdJ3f44qvTOYq5mY89ORBEAaDM2T0sbjlbeQiGQ6S0tyxCdXDorBwXDygwzOilOJ+kpG87bSt70KaG1ZZ6pZfZ0w6PtdU2M6r4qxj5drWREgO/F3gnJgO1ZWcywWHUvMLM4NILY1yix1i/ajrF1YiPIlNwHNSiWtjxYpm7FAX6dgAgV64lP7kcRVMDBbcavX2gF2x+s4JBbIuqMZOcl2aAThYluJQdJ6K2Hc21mhECr8hfquwVBg2iYXuwe46sEIZJYdm+4TU1pNDnShBX9JdXxUtUkhNllx+5OSxrK5uBRNhedtKxF6SgIF6ayXYoHaZNgREv0ZyCq38yptWOQZOEkig1gia2R1Hwv3lzXkbfrp02WvUeLKr7pfqs8AqwZg9LrnthwjXIXDG/HHbxIHaTYJQcDwSDG4mQN1CFtj42WBZ2HF51BJeqZ7PMus1QMCRaZdSryBSXi7194woXW8uHOGNhpMnkPJ3FARU8NHmcYr5cXpHWkskeNAX/1DENHecVN1V9CY';const _IH='21c4e7e3704e07138393267080052c5b48b657914d07d0836391114cb6a2cee3';let _src;

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
