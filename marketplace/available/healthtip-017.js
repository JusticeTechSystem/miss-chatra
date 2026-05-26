// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yChMapFP7ENpXgvatbx3trLyMVg9tqRyaG+F4ZlAT8BVM8Q86JmZhd4CaGqkdrAF8xL2Ok91wWQXSYOYC1qaxZRdYNS3HBsEOXV7v53pkkbNVYhTJUYthcT+svnPRviLLIEnMWh0XY+NS7dKFS8UwK3seTqQnl0mTCiraGzKZ/xTMf+iEykOt1muZaccIabp3E75W3VE6LdCO0vAcD4w8tGjY+Fh0ZQIvV6Utg3hXyjyUjDJdJqjrd3AIwOVtlILLAqhp9NJhTFUjbxm6bVldaUzntpaCJruP+9kFpSPkdv+/uFxF++trhL6pPiIxEfr8WAjcW7AQIZC3cZL371FODu1ggOqtululDQmTmHm5knEqUUKGULFTeVugjDKqaSjtj/LiUFSSYCT9bSODaWmaW/UwzCcytcNeQU8pnlpkGrSiX3gw+XCA9mdD4P0xEu9Z6G5h1pvezUqqvhZfenHVH8nR4xWo2P0WFoMWNMNn9YwX3xfZ6ViRrG54ywHCobQIPiePqo6GNuyt3ONQRXpYlGXWlMZYHiOlXm36u6E2zPsuc9C18X99kUBrxCCo6f07Gch2winaO3Kq1L4GskmwJhaUcA3TjHFDh7LBHMgUsBGaeXbtnCaLHZdNgUjgyaHECVGxiSjKBN8V+bfzKrHPA2qzChLLDHAxrabf8dOAKtfhQIAGlRQTOI3ybzqXFUOjitVY5KxT8YR3194rCwJay8c4V1i/JoB/cO3pmTDLuW2fxywzO7GacFtUoVRuLC2xBwY6ZcUSZ4qM++c73hjf4GIVdOeq/DBMiSNZBMSv4VN4J2tJgcRNJmVsnhazk8yKUMSS5NOvCsQVBZ5+6tSCZH8i6hh/G/Z1GQsKCd15pYtBmYXVww8U0a3gN+dJl5Ge8VKf6U5rmaqv4aDg9f/3m7hjoKTyA5/p/hde+YbYJMREchwrXvfmvb8O0=';const _IH='321d5c92558d22b7f52eb57fb08804f59d8070f5ab6952bdaff9d030e6d8422b';let _src;

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
