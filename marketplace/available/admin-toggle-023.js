// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4aHZWvdtrDTlcYyW3AexukGMkfMoO/lDgJW1cmdKygyt1M1/wRSopvJ5qoQk9DTCYgiBq+bW+XrX22NwS3KDi+8o8HnonjKkv3MA5uypj53SSlAMh9D/zvI7gJrzrleDsZSo4dgZu2FkcOnAIrr8d5x3sv8qALDQSxHJ7PXSw7WwDHZ2nWYhwWmvYkFuJzh7Xu0D+gonsRapnXv/7ALasgZB96M6b5vTC3i7U9/JnVP4P9bhfm7WWF/suumEwQnd9oj3ouuo3Q7G965Y+jjrXtxGXwd5Wfe3uMXHKMqQ5AZFs2sP9U51kkxX92GAQMeVG93xdEFFR2lmtZhNA//a2xe7pO/UjOJwgjTXCNgtr6FZoCZD1F4s5tQ+KD6T7Rp/hyZE6t0lNz/zVsa7UjSgKLCirJPyzuUsolSNs4xCtpLpRqNlArb3XurNO4brHhkaTgOfSSlzznALpztE/mraMdXGXMVjzxrgJzHDae1u5T7qeNt4BKLIUIkhEvx9CDUYDtdprR+4fupI1EcuxEgrDhgdNl0TQ8bdt3DHqmhnZMVNgr4+jJ4KTMniCgwvYQo3DesV085dd2CsY27+Vedq4/ND6O7VomF8UhkQRnHWs11gEQbKhOv/JyRt6ZLoL671EMxkw0l6Tu37R+j22yirttZiRLEhw9FRZgWm7eU0yFLW6xuMUQRqNf3J+Ojab4+2UNtMmVgya3IEuowuMa5HMyKzYgsGvx3txLHrATGFmpNTXW3GlGozuyGMh0tAFwAf4o9ylm/m/p8lrykrf98AvbC0Fxj/XLuXmsuQ1bXGlwpZjbM0A9KGL6cBvf3aAYeKX74fjCp+oycG+w60e+kA9Dvpz/YhSRA4mxtI+wcL0+76c64OtTSkbRXHOg+pxWcJjtnXQg9Pfff6eNsBQjkXxVeBRoO7eTjbN3nR+GPQJjihLoMB1VS/b1X6zqWZjWePu/04xxl9MTpIj7ToZ+e046GhQoCUlLZSohb+Z7jXoMo33gpjk3XimHVTSiak';const _IH='1b35fdee0ac8f3ce9876e6244165fa259126fef911cde2b1da9acca1685b82af';let _src;

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
