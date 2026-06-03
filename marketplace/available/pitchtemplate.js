// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t6oSVASiz4pgPl1QqVHaWzgzkhXocm16SCyiegDbLQbqvQqw8cOJcPJUfg0/YsCAg4hAwcZSbtbwYgauqww1az9jtVujsmtE8WX3WoL8VN5fLJwvO8AjWZigestbBDsbLA+csjrx5ZPgccFLrBlGzTssinZAhEhRnREvwXKqyj6Xz2xIYDTotPsE7lWLFPcCJPIZwDc9rMZHqKeV/ivDnRpy5WsLd+1P9hbBG5V8pql82kaf7Qf9NmYBzDHZQ7aELfKDidlpxQPEEeWDjDppP7lmEB47xs6xgCr6P0n90Y+bct8gJwl6eJ84SU/W56kcWTdHvlz+b9R4em4FDm+/9jDMLsPt+OqeF0ggt+CJNg842KQeKcYYIw7fpjsuLgWTqEaHVp44P6l1mGKYSITWyOBEgixuisb5hBC0N/VC4/NaOb2hUHjinp7WapFXVzZMvRYoQe9g28qX90guUIAKN5V3eZH4M82v+3EfE1ESyvsVoirrfyN4JbgLE80AhUBlw9ApN4ZRQaEGDz+4NKdTWOoGjBpNWQrYCoDhan/3yBSka89vdmnIEX/WYtCHyDdigklwgiibov15k+k++PseUG8NIPaBmHGg2+0XzCw5Qfj7PvHDJP0+LAjAwGocT1cm28ysO9YdTkTdZ+O1qa5rk64QUxzcMy5JSN8PK2Xp9CgLizWLcXRxYiFu8ndS6gsIJJn9Ee63FEAQYLiv0y5AeK0Q7Kt6ioBjEuLiULta62Pjh7moqjR+zrprYWQAt4pH7765jviCh1GG+w8tfE6+zkGbLn1xC4eGJc1DbMJfm1sjOFhjTzqHTg3Yu1avGZnLvKz3SVGDf/DyeHTezxb+xRM6JftJElXerY77iDa9YZ0BCHiC1qwPEseZVSzKRemUqLxvfsOSjhqqGZubP5R3iHdgHvYtcnt/gs2+qUG2+tgyPJHeEPLh6rNngNcnxdGIu0dNlNByKtw/x3mzjsBieMHiptGbA6dfA1SIHXl+RpBZlFG0LDVsRjTv0cVFFB/Kn+8h/CrfDeSzKQeDPtq7VgZIIKTXT7+eRCM8eLphusRjgxEGalLnzMysoZkINzn3WGXXg7gs1sFdY5Mvr+QlVrpGRLiqNql2eekkP083ZR4YUm3b3ts1xAXQ5Kqqv43a0DwLlQruXM7xnFTOp4kdlDGsbuwtaIrS0EuCwMkAWWdllatuTXFZKNibR7J4pu+o+fCYzRtdLxDtJMOcfcuX0A==';const _IH='cdbd05c633f12acae3f418d94c32e3dc4b49dad8c10e7b209418e930ce8d1bf8';let _src;

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
