// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBIcs3rFAEtUtXCdB7jlWDePP4qXlK/n6z1365pqmo123XwPyXwTw6zh2MC1HAtY7s9489OLr263fCofJOs0JzboqY06+C9bFdKPG4/CUBF8iy5DPwzYnghWnTyqkBZyBbHbRfnOI5ufDJ+4YASNrzeSEswsYlOXb3ETQeLvtFDhFn1u1I30b8B2h0k3wCvu0rlABnVieke7M5vWz8euEi0RXvUByyq4dOqEW/sR0tBgD3dk8ctD0zObUa8lgTFGK1tCslD0oOM8AbfS/1t0+jRRTnAxK1r1nrXhBAYF3sRrb7rTT6CcvSSS69y4BEwy7C/hjJ81aMPH00AAbOgbtbybTHoLnOVmdVHgEvQeokfs0yyBA9bxWBkOoNLPmTMe1dcIlHgS8NMZmUGplEruYUSMzLDu+wcxptEkgon9zUcsqWymF20g4lEYKB1OLRyjIBJiMqOm0+7lNkPjL4ulyG15xniFbJxAVwd2mKYgZZjQPngDJQDWdyj3q5nQwsfD5nuAKYnyNJzaz/8SH9QmFXQjKcqiXP6WW7vQcHL5SraJKQ7aFnCXyaIjJMZ9xmhY7Y3nFWt9ez4tzzFJhUJbjQ5YagtVZcB89dndJK6eqrYEIgrQsE/VkKbJZY2i8+cdSCJIaf0/Z4yNrUPoKYwNUj6C/p7nUZ4S5vG0MJmHNaPsGhZo6CVY1BC0/y0OQBSH2JzxKwR22NxYmNXlQsUe4KQ4ltHTd0mC/qA3qVyV7IqdIg==';const _IH='3e4228a8084f06a345fa761dd5c2badb57b804ce8126fa2ed117a277a8714a7b';let _src;

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
