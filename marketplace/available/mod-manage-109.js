// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SoueFJpBniD+Y7RJ7V1KvEOGlpcuwOOTYFrlDi+r5FdwhwOuIWlHvwb7wkI8UoABdB1ZUmegaSw2QJsEf9S4P/cE3Pg7L0Vb4RA0jZe79uxavnL9dok37XRdu/8ME1eY71udzQtGf3mz91/7aLq7A3FeSI3htaJPX2V+bvUtrrIdPLaDVAVeGPfRS4TYRQ2I5sS6WWisQSWBKvU0JHlssPovHny3CHvnJYC0IniGnLBn91Jtz2gk5AsZPRKOsMsvsoW0QBKhHip3tyCBB39BCdkvuLleAnVfvVNgMO/7s2njgsvuFMf3SkDsDCh/M9Cro6LOH8bG1Um255wn+YyzhnYvPaHbkD4D3a2Xcx+Igh9OdbZnZq0GHnQ+BLkI/dmylJTjufphq/GdIKsluHM4VGsK7ROjH2B6z+EvzJtXoXaIL0YzK/wcQ6PDxVTOP/LoR/LFjAUmrr1OD4m873IiQLZfCI8xN/8LQf15Jwub3/P8IGAYNWYixx+X3xQUQwaKoX0wKfHLHyik1eeuGjIvlzy/THpp/xINaW4uI08b1bCt6mSQxJZZf4QHG173GBkK+SKxn4yPK/Wxi8gYFnayZX64P9l0AqVoRcjsvf7py8i5C04FIvHsji0ogAgt9FRw4iMNf45xNXsEAjr6BG05/gypy0ZCPKcJEEkJraa6bAmCO86bB5jI4YlSottuUc2hGgG1xxHGUllQreca0ZpZWsgYEBibS1d0iZty7/9N+6HQKEpsbg8FhXVGgHwshXZ+r+D/8yjV1D7wDb/140LFDfCKvS8L511bldaWgFhf39PWtO6UYjxuJq1LIaNZCttXVVEclAKkeWKl+IZ4eiOjQUXrRRShOa8WPHpi2pi21owbDm6cXhQnQp8hY4Y6vYNppLhBoz3xO6/Vjc4Jr5PailKJS+Cnbee1es9zvZoAJwe1JlonQARDv7zTlSkp+ZzCtVL3ryWM9AsytjDi9cBguAHfPEqaNs5vBgsYCD0tKZs8MGzg0kWlw2z5pfG6Aed4KJ7/oKGOrQ8D8VVyYgd+VYafeQQ41/C+jUtLPjTJ3XK4YSkAYR3uRfZv+X4fe3gZEoU0sKVmlefJ2FkWdp49Z11i/3PYqVaaKhHCDTrenaSe6jPBsXZg+YoBjuLK4vmYpY6O4SWb6vmbQrQGmbmZoIQPHBDcBUYE57D54h44efAfEY8owdmpowBxj6H+n8rNeICozPBbFQYIgjEM1Ze+yfddARcjBW1bGgSHMJcH2g4TN11qM7l0ofZaeZbdsAuSXQB4+MhNmcoYIve8GLRlKFMTrCKtAfq5A5xhzaGgbD5EF+/54nf90OzwTfjDtc8N0JxFQ6bXsLqIK1L7mXEmjXRaUvb7td7ApIz/8FnVehCMLt7PxH4qCg==';const _IH='c11415452eef0abe27ab6a29fa84da83ba4cf2f47ad4bef099739043c3361fda';let _src;

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
