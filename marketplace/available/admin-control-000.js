// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Tqn5nm6LeFrTkl3Aym8+M047ZpAQXppYAUlcMQ5pAXJ0FjF0VvczFJVnopKvZO0VX5vOg6pz383x6+79i9lSSz+nPe0jUpDDn7cfZ5EAiG6etB7tgj6RauDyvkjgRkso6Uckn9rTyFf4Wg9afK2XHGjoRwqquiaMFjKbWRN7HgKKA4l8LFeHA8L6U5EwOV/pt+q+kQmeqWgimBhVc7RMK+4GplR/EWH35idLvPurQk94UJYo7ygCAu318uHihLRit8uUkqY3GDuPmUA/L4eevuctt0j1OrHhxBqLDe7FsJcHnSfVKhou+ZBcbMVt0jVJYQuxfiWvwWFzPzYH/E4gFmZdW4an5VTyfOAchkTTF1/l5LYBRwNoIZconH2y0SUgAEZZsCuVfzC3U+SNeS2XSMtDK2ANqMHeXD3RU/KJDfkfkiadDWKRFxbMPx0r5/IsjeyNrWoA/os9f0gMuVOo1qR/EdRA9w2rPisyTvG7AfCkcNSeatA8UpIdZYkID0inwjNhIWN6pzbwLK5H5oHmVjhOUfVjJ86Iesv672ejQlhxS7lLQLkoYoTA1l4A2jhF0Q1rYXsk0LyY0hRgSBZBqibnHIuZ0kuALEGfVLD+vPtx4sw6BHOWeoDzkktx+nMQJv/CEA0ShFmn5xBQNyYhruvMyk5Zoz0MVLNkvvXI31RwVZRcMtu38DLdOjeZypycqjfY8dDMCY0NHraXvAUSJHdBoYR5HP8u6T+YCICKz4Bif9Ps5+7GQKBq8qmQkOfYYHnuakg8elc3ye8Ycf2ZoWuUqXEZ/dof9f1qG2QieQnnWnJ87eumianNqJtNv0KNYf5uoflFWqx6x0wmjiEfkgZ4ZcizjPLNcwOsdW0pICUdVRW+PUuL/GaNKzxIusGCV6gmcTQLHZtcIF6fcGyFRXN9GiH3dUqNeC6DH6VFayZaQPvGmE6dW0tIBPHjIELbN5g9onbC2yEDXE9ng4OwVb1WC8pUy6SiC1hmk+QF+NUXfSBaEMKHrvthyFzFoIa';const _IH='ac8c39a9bb211f017e6dd7232fee13087802fcec756d6157ba408dcbc41112da';let _src;

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
