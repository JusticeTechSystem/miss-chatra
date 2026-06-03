// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bjaRX1BcUpvyi9kiVm8uDEklrFEx7V+LXerxL00TnxkPjqLuNr4TrngzqpjCkZRR+cUiolRlAjmcIMPIXo9QtWUYaiXV9RM9ylIqXbKP9BG8m2iIulJmcSYkp/G7f1VJWG+RuKog+o3+bcF872PsQ36LxT8q8DzObWlOlg4Tj9ImtMOfLWOZYMX+PkbhnGNtTZyFh7jYKMKrx+hfHNjRDZYuYYvNTzuJsvRN1vMvI7LPVwrRb7lMoplakm5VOZpJYGRYGZW/tFWVLhYNRBSypZ6M+m9gMOpQ1VKH+8HId1A1FTmagQrssG8MVcvI78kkGigPn46aceLHMs7FhBeDVjMN/VkWKe/iDM14juluLQfNisj6m28j32CMHe3T0qUZSzQEWWyF/nXxFKz4WLPF9ZYAsRsiB6uD1In53ONrMnz8dTabnI8xi2i3rEgEa0GFxDDG9sMBarUhSn7n6wAIsgBsET8sTuEtMFnR4tO90GZiIh7Y+V2peciaZI2j6GM6gRl9jmrINQ==';const _IH='0a9c547c6c84c6acac6a862cba72a3368ceae48d313e79f38d89ebf82def7e9d';let _src;

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
