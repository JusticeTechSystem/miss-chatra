// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lp9rxj10XsI3fi9k9LUKCeBxw2D2DzbtpUQMJ1nSuiOpe3+IIyA3n3vXdElHF8Jsr/c5fLbw7USZDL3F19nWSAl80rfBqchJrbTIJEi/rTWwBjkSZB7eaCQ8HFq3cFOkc0h9BnzoBxILK8vl/8PLJ3ZzjFrDkDZsAHBJCiK+UZVNNqtoL1eO/+36OI8bKWlUhqork4BZi2oTX3DiVNw3kS5GoZh8/i3nitmsw1VcRDYzNqjTQSpOLUbQNMNc1LPoZcBYcdziWs290dzK7ugDS1j1jwJ2TdfpM/OZtXWXNvK2kgdWK1dXH0xYjVmMiPpLoi9pQJRtV3IpGj7bwtxs7GNsXlMN4rdJPKDI/qLYlZFbdZiDqRIC2jaxGf4kPZvN+f9zDv1RXie72mF/CeBFlLrbt0tONlZ3ocasnb+HMMEUxk49UWAjJlaEXPz829rbO5d6K7w6sdscQ88l3C6LDpNCy7cDJwFv8/F7ehY3+fSWvzIrmq/ga8JoXfPvSXJS3YlgskpxCqNFtYkRmqZujYsQBSr3RMEzXlLPwOCSIbyuHMkkSQaLPTbN4y+d+Xmy3ErkXcD5GDA1+ek/DOU3z78eO2fYPPM4uVOWaTvZoAlEQjvoReYe26Mrp5+qAgE1WKDJkPWN5iqIuyXCWmZdE+K9M2TqXjqxqs4Ni4QeX4GexR0pqujbgzqEZuPDbdghrS4zPMclggpnSaQy6OxOB/PKxkKN3VRj4lJwQ0WGjU8Jx/8GahV4eElr0uhhYFC6MMgCZTEy8ie6GXntdmLaJ1A7XEG/gMas6fI+jZ+nFAzh81RJ1DWRLpaNaFJgeQ0A78a8wjcLEh48iF0ambonWj4Tr8ysRqQPHpEz7yxOQM9PRxk096dUr+SU2qGodjn+aoSm0UsqfrxQ4yZ/qCY0NqcnDkTRjWgtGqRorzLmZ+RVQIxI+5XwAOkS4mOLutqmgDZsauVM1eC5maM1i/p0swXeo90fIBznXhIGmvLplEfVGlK99zjyGKC3y9QbiL2Uo3/vhTK+wQ1g4fpOnBxSuytKI9GEmXKra7g3+yB8iXBTzbZihM84iyL/XlL2FDBPX1taqtDsMd2FHjQYemsp4nXIjcQzJ46ljUMumnx2Ib1ElsdI7AG5m/SSLJOAv7vYdGLOZdOHeylEZP1czj35Xblx/2dUxPFw8I7Zz+wrMqZr/fN1Q+iHjawDuhwALOOkYqdbuKIA1/taT33C/FuLxU7veq9rUEauL3SrwEdsOuWJoaHt97YHdMzkrGCiH9kywPBc4amxBtUboVuugeFvUN9aH3j+U/CLRraeruZTULmRsy8M7mtarruq/BtdfHitgMqbske9KM7/jAS31aIKGRoI55HdHcBmz00yh024xjVBB18=';const _IH='04005757a3fb96e2d01626d6cbb9e3e1ca5c14cb6852f2062dedea5a79f38b62';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
