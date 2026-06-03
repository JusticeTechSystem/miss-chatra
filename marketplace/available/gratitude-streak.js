// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8OzH7zHImyD5TYHmFD+0yrpK+1U2m8aWGNJYkiktR6XbcJdBINlHea/eLIoo3UCaJsC5nlnon6NHHTZpU1Alr0bHQBx3yEiiZxRXMUtXqOT69Nuq/m1WjZO4vVDokzLJh2IKlG92t56RNFtzKDLPuc+IDO7REdsevQgdPqnWByu8347fkbH6RSj8woClIqeAO7Tpes12h01dbuQ6OGcWS5xab6/+CZiiV1C3/McrPOc8yrdS0qHel/W2gI3SecVrANa801Fk2J3U1XHt6jAYzBdAnEoGFvLYEWi8/1Aq94Ozj8359E3GzJ2mhD/pAee5n9kGzbuYLMG9k6WCfg7RNSd3A43jHZfqvhLmsvDoY/yafpP2VZLPzkcTLXht7YZs70KRC/uwT7YTOSQlKnaswHRaBhEwRCjlJw4Rd6N8xAZayNceK55swjNYHySYd+JXW8MSXQpi4k6TP8zhbh+QPqblGr6gYH/S4iZ5TPoSK9rbj7i7L6r9';const _IH='a2cb2cc85d4564bf0249d62dde839d9e1ba9837c3923110f683da4a031e71066';let _src;

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
