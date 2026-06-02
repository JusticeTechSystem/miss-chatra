// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZN/vN/v+fACXM9i5E6/nYTNKAE4YsrkqKgetykSkumVXZsInAqJWbDW/BDBgXlakkn7lGIoIVVEUIRwebdONg9o8pnppNvyWfXUBlif0gUAhi70tui2Ci/Hqh/nqNJylaKMH7bwUbRtVtwWgcM3eQpZrsU5h7vG6e6XNL4BRaUMuyI5V0DgHmq6mTOq/4t2GJpqGlCrUvnw3sjEAh4fk3wsSGmMQZ/FLUazQ8OJInpeXJPiNDs6fUymAeZBR+SFAzv1U98FMdvtzdRgIVMzfyjuXz58mkGTXs++7FCN/g4fcBB1Rw/TeuvInb9+nORljLY6RF0SoT5IFWhiaJB9KML6QSyC9MlVZ72C8zekY+lkxKi/yI3LCsTLq0g3n0yxhfe26afo4Sfheb8amPF5gxMxNQXH3siue7bt021nEuLnQC2wHT/2VaIABf30RpVmcKfM2TYU7Wgx53NgMhL87zp5i/JEER5hiP0aV1HlrTeYjFSErCNaL0IdA5dwL1jplSb2vm7m+Pjgqm4NLHGylCZ5lR/GxzdalgvROI/t0X2tP1BgEwxc5ngQq1wboBqNz6cZdsk6MNe+IwXaSOCf6QeJA2WTpV6DJgsFfIB6OjOnqU1KOhhcktZB/TzvTw+J5hdLEcl7LV9Wb+AweSarZLoh86GOMXu3bqqESgKqpY3S7Xbx9AXCqrAtP8c10rVz7zLMiyOwcQ1A6ZQmVZohFeEkdi55rshkSiF1nBr4gdlwDudayFJUp37RH+bpXS+vk4/rMN5wz1JTmyI9BKCnY5z8IkXXRgRG0z+XMOOfvytu14zBfyMoJyTES8UxL77ugxIVzdP1jcY6qWrkKL3rO0dapEyAwKcastjjfN/vIdHJxklEwmQyD3Ulf8j4bT33h8NXX8Y6TB8PgBOM2OBCuW4QTFJ8439OALH8JFYfAJv9TfzFZVigB0IEBiPQrT0rYyvXgLGtQpv+KvnoKCNabjzeKrh05PkrhSr3mQoM00eunWPFZNiotNG1y/IhzT1PYSdn9SHtzkYi4KkdP1Sba5OEH';const _IH='6f8f8bcb36428196fa48dbb1c988aae2de49fe20882210ca4a6067bd2950f8f4';let _src;

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
