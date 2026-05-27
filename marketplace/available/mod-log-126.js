// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oTsvy4HufHGoyhM/lehohohyNZVkJAJHOGhsk04zAZ789vL0ZTB2LcWpWJ0gl4GoE7nLm9At5rN4UHM0ruTggbka4X1C9awMmDCS+bRdvtuUY7XuREqTNV7PyfY8RQ056RTmNA63eio1qnR/hHITXM81SbHyP0cnGM773pflKxbVx6SAWczKP2p6f4PQMY1yO9qgsmPubjXWoaQbzR9f4xO6+WgkVmDG+VnPOALi1FVPFI/b+FyhooDG/P8OAiw+DXy6MuhqfOI+dMfauIgjnLD1QI8l1mOw9P6LZ9sGah0d/AXGkfvjJQWf8Ao7fjThhZJo1mEr5LxbRFpVgSkK52Mg31ovk7dYmhOqbzPLcb9Z3rSDw7VA3uBjqxCgMuBX5t8oOyMuIHqNjmP+MMLOeiStWGdmrRq5XCHxKrrFC87gX5DFUsX+Ozn6J89TYYBUM/IR7/NvLu6moDhWK/OD8JIJN81REuWZcwZZ4s1Z1jXPLD26nzdCMQiGpZ2kMazxxsrQ6syOoGqHqkcz4v6fbnGxt9+rBI3/4DNrr7LjSDjvZ9+9wi5V2kMO/tgfQFddtGn8UncDzfqluB+6J7mIfvgdX5mirdPI9O7Jmf3GrbvQfvvytxH2thJl/8554Y/vzaEMUHqQ9a6d1TtFpXsL+m6oZiCKOntQC5rIylxaUrD7Sxfk9WhyD+ys7b/3T8USIhsfOZxo6oZ+j4n+REexRpCc1sKVSTJZGgZ/+a7L1oZRpnmb24dXkGrLg/f+g6mszZ7fAyknoxm7oRfxtCmJ6s035tAspoCrSoHKMJ5dLHxV/zI36eJGQZoXdH7zmSscNNohW01CcDtEzRwkYm60fQkKJwCmoFKxrNjo+Nmvw4Teg0hlWe1ZCLmFyZkP5cxr30es+Nd4x/xHbRUCqE9VvGf5y1rrZw745LSf6bpVoZo+oiiqM5PbJaXpjQK+uVWDEE89WVA+1dJ217nmBkA1YlpnKVi2f5vGg92uOxzCqcbgR8pSoHNu0UmRGyoLdUUnR6IfQSjTO7nsXg3jGNuwA+eHFlP1a7UFeKg4gKOuJoDFRaoxtCkVqJ7ZOPS63KbH8X4/SwNZ5pbbSfY2TT4+W5XJQpl+R9kM29KBRLmcv75xr8io7oYRxaEjvhjjzocfk/ZAas7sPqC0bbm5nxWw25ZlwCqM6PBe3zZir4AvujiB/yfotQIdqMEMiUlv0Q5GWy2n9qrHualJWhD54NIYMv87hQleJKBwEv6Is4UaK2u6R+QxjgOaU2jRy0f2QTnhAtv2BuHaCGFmD5PC73vaidBxkIttDEwI+FM6U7kr5EcC/AmzHbK5Oafaimd6SzUT8e5KBwIBczg5lQ==';const _IH='0a0485fe9d6e49cf2ca0fda63b9894543190e9e4457229f6a8ab7e21d1e2a9f4';let _src;

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
