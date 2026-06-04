// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dl0DLfKUe+G6ACwamy2P3D5z2EI4ZUlE7+FiIJPJjqwcQr0AnhzNag+gryCcZjPqA6tsNNdn+iBNd6bYFDnol/s4I+2hmL7TmOoprEZK9dEkZGARXhy083XZDoZDM4UBbFNukNOhTG/B7lGQwKYBc7thqfoEjr1wSy4b/Hm+nsu9FJ0MNx+4on4qEwbaZFfSqQvopl+T4J1xvyVFrr2iIMs5IOToJXbD3Oqp7pTkvRvJ3xhJAJK1NQBI3cL3IO0ohCcDirH0tQWVl4BxuECxvSuabOEFN6z53y6vdT0riIRH78HkmNSEjAs6IQqA7KurwcgWDhMn7diLt9EvkGyoekjizllTrekeGXwpGu5xhtjhSQZaoUJsWyyYMYEq5Y0Hx5kLroCU7d4O4WhAJbtDjms1uHGbrvpzp1zc6+crWPxarE+W7t6C76u5r59tcwNC2oTTtjmZB6xF0MaTSLULzuM+SfYS/vPGdQmzl72BjcUhC1xvWRzj0EalRWsBfmSBQuDpAHZc8ztKxcCuyfNVBYMGJi94omjsL6XfsvtE43qYDjhLjU5NFYaL4xVzlD4NIxFCF+hQeZAwlW3YKcIvc3anWUHsIRP6SoodRDY8+JjfC0ieeLGIr7h4jxxh0OHljNleYkFJd1OgFi5yAXb+KxbpW0EGNl38a/aQ3VrSmjCq7uCy2jkyXW2O97IBI4yqFzjdEWz04QQaY4q+djuqbAjX6DxH2/fTJZhpKFzJkCm0iI+XLCegn74tgOaJGekM1SsfYTexwVZrbrefkxzEr7S53RRj5lDtXKn02s1YQj3aaCgp7gLUvxhBSs2vI2K+PYD3BQ4lPcOI2j75GbliuM8rSMRDY/9M0PANnv26RH9YpScKYtb9SylNWiJ5W5F3xAS28GTGj4IaaphdN3iwwZevuwerAQWpnKyZhTnYIcTbS9+27C7ykoAVvkrqqcRCk3q8jpgRh5/RzuUGzOxsI4fc6yGjdUHKQpVsQ3SezqH031D1qldnZKwnAWDQBhfsDbomjOSQ9VzoUeRUpLSzaYC/+AxSQs5XbbHJsy0Px84wNpPZKt7GzGe2bMG6flxUt5d2pvp6mFFysaeRz1ogRqXlaZW0FxmxxfYQHJTklwGPv7p1UklkD6t8Xi2De0mPB8aJTyCxd3ju4PfeQ2cRoBihzwHKYr+w3Wdg5YYM/GglgDAppQko4U4NESuwqNl9qQdM8bhtyifW6dweIUOOlYdy7RZBnWsDJ2ugjAiyjTtYJuQ92dFGPUjXokEIw5l0KQ5139SUtVFVpf97KK6fsP7KPrUVy39/GjMW6bDE/T8mo2J/naZMz2lMELn6DRq0qI8U9Ry9Uib3feBGQO+ZUpIfYpZvpYbuCZIfvkll+f+eL+EQWGzb8dmcDLpV2diRP5c34ZxSAQNBAsr4eZmejiHmgTnupKEyoB2CHg2GafieZrNj/XmkENkm0sKxRvt/p/3imCY8z+nprvYBo16MuHlrJgD68seH4d7EGfTSUa+EUEA1N/q5dEAe6kKKGkhPGSOYEZpx9L9nEkHvQG/ZzeKdydTZ5Vds7eIkCKProAbasmQHNMG4geS+lj9tQVP54CHRMJIW3TXBh5g/zXxx3/Wv9yeAV0YuYPoNnIxIQ7tuungtELIjsukmpkjIE54H3jtVBglGq2YSnRby7o/fnAWNVpvvGGUoMQ==';const _IH='87aa1833408203c35a44c36a7c3ff06e9f203d17e86b0d5a498930415fb27fd6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
