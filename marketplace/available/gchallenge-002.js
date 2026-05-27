// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7hLWXzyHL0V6tWlWGP74mzGXVHCGg836Sw0EyFRpE0zfzRTg8DbhwxcUbRsSEE88mr+eQHiatDhh55LNZuN7HAfI4Nc0FPg4Y9Wf5QF76N8V2e/736nI57hxqy4Xw5uCK+NB5Z6GfpypvIYgOp+fUYOvE/UhRGnVC8iX/gJ+53Wf2UOiKYNaFjLPY1EYQXZWo9simvI5uYNDPYom+Nfu9LUgvkJClI0Do2Glk8a1k1GwNNupfitV5JHLyOh5NIFQ/hgSYyECpom0SEnKYKnCppt2WIZRIaF1XUDuEBe+7bwG5TJD328UvFEEkclH1etEq1w59XSxXUxnKtb8feRq6EYvtF0cvZQ64K7cc2ztddyPtDmLTs7CJaijd5f6/0Jjnoky18a7NOr1hik781871RAjAu6jYl+3qBM4LOVSF6tnyj0ka+SwUK0BIhl8MoZfr0x2yc2hPdpQVhj6i0H1hKc+m8fXudJlI0yZLnEIoBSI7Izoe6DeMz+6vIqnPh+MfI3W3YdkKKiPXpXa9kGFqyOOsUpqyiYuWp083MUEiwPk7iWOf4tEL7IRSd2Iwc7TC+jMLc4ppQJsM3JkI/8MDjl2E6bmpk7oFShe1vAnlNrxRymlx3yN1BXAafzQ9TlzDSF9sK+tGPjtZvKmwpDuE0MLMaaFQeYQwQ==';const _IH='2c7ccf1d844783b6984605c36b32bf0c44f13089ac254ca4c97b282bb2f2ef0f';let _src;

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
