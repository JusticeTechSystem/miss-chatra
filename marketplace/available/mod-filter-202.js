// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ30OXoqPl/IHzTzrgS60T+g3YSVT5cN1emUyMtZ6+eP1U1ZkRMvBVPsbNaUBl4jmUHcySvLLeWg2+kbGEBQUJuT5w8eLuPzavGh/Pn+JDn/lU7qQiUFMKsxKWg1J7K/jqWS8X+4/8PMDGpTFrLsqToSSrZc5Epjzw2n5Nx4tM5uEl3kEKl6hJXp53wnu9KTkvrpjUnuCIvvsgDseQ235G0AcpQHNEWR1oafiXdreoHrHG2iQ9fPByJTrrdBt/JeMHJorlMjGpqZBaJ0mnPwIaVR0XhRqbb3MgwUaL0gWaeNqXK0lGPBJaPvdXFjBiIHElWUlr3aBgFPFeqJNndfreJOrEDiHzC+xeFTU9RLxh6T4S/AsDOLt8iiVH2K7wHHFALITYaIG5yJM5yfg6JUpy+SHWmG+7YHP2dvFnz7jTCR5nn11Ar8Gw6YJtvyKpaUg+24zm+9qkDtLxHa1KDBZ+2LlD+iSTCsC4Ieo2C9jTpicwdGjOLK8NQge7vwpzMy4o+EW++z4tal8J/FYIMz7DmbK5mdH/KkbzfQR3OEgiRpiY19vnOMnTFtKPzP/z2FEHsvMxDh/Y+kg8P+lLmRZVuQIhYjT2olSQNOoni1ongfaxehwOPIqTH7apgpDTVNac5Rpj3yqB02VKlox3KA4FnmnvQCwX146VpnwFH5IkRiwC1pPhaXiIDhjp2NYtCwO6bIq6QLaABXtTYVsU7AuAt14wUAdUXdJvkoD/MKPlKk3P1ZDHsOgTDMes5fNDIA/WLZ+SbkNNLwjvSX9Z3bdjlTTtJebU0E0DBWoEyUYaD00KDnFBibnLohJo/7Gy6tEuQ4ic3YbAjGdNx+4YYsrRh5NcU91UGG9q2fd282/lSfV9aMCPJ8v0oYRRtlks4ISdXQnpbJAmMXxe84klqYH3fQcd6sLx2gZp8X6pilHbPfoJKKra7LwrXdCSdvCsIM2LOt2D8rfHWoea5OoULh5smBBBZFxzPEWQi2/8n5zga2KtvKG9mD+bgYkH0hZdIrntkFWRU5Wpqio1dMcMGKEsS0Z/fL5ggQWe/GhhVxkRrroVos0fh7/V0nMmqnO/C7I+wQKRV7yBkRPPqLi7PAmYiCv4jegIMAL9e0PzpLkv1FnlLI/mzlxXCS8eLcipEqh7vDUu5lQ+TLcA5WrbJGbQM+RUUeNKeEfnojUkUo+A197MlUiPOJbUF/Q1w4HTWKCiKqNiq1thRiwcYtqqZROQ1i0UsX7B9cIQf7xmIuOee40Nu/kWIJfFkM7d+5yxI+5t2y7VlYfv87jTXHqEQt57tsjg2Hj6hnPRLcEmAyErSAY7c3K4dLtf9aw3Y6u0MI+GhIQ6c9ps4laBkQ3Okurcwc+5v9pF4cc2WE0/aEgVTURs/wy3CgVH6c=';const _IH='7522cdf7906a74ae871a5a14076eeaa096d45f0a806a8628ad5617f6d44ca31f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
