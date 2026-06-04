// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WfvGSkCXzCnADfqofMeuG0XkXEf2n72mWpaQSrRjRWRZwG7HekRBhpCBfr+ofvviVeC4IqYfpr6oXwIKRWo147GvhN6kho/SZt6Ph1j8pMHvhhk1tvmwrs5Eh4/XLP08z5vXCupPMVtX2H8bJ4UPPg34mX7gez0nKBZRD5jG3LSbtcVbjnLuI/jR0wMjf89knr6rhFbb95MV2oXnFihRhNQxAX3rSZbbSM6vLL6RS0WaucKjkkOBy8ff4PPQ9H4Xvqq5bOCuhkkAfd1cEzXk8/bw0g5c1vRekWNPJrnphYEikFWRZb+6EQ0DKQyXq5SiI+3GYXxz9JY3gkduK+wT3dLhJgy4sfhjLi0OvPxEHaWkoJwIEA9rksqLa19T2ph8bJCHCh0StxodJKSTgdSFhHOAG0t52fVCaN76Uk8lFkSs6Fi5MV5xQP7i0YCyJZKSL6OURmDUaDfhr0vcE7hnKCjnfVG3sEOWPEcyY7j814Lym/xRqaS9w0qINQm3syb7dQa1TL9yt5DrbrmwR8tgvWYPYEaHrrV3eJbUWwT/VKqZSc8naxFuBveZs7BCOgPXkAnfPb+5CN+hMxkGvI1nAbOMu2TAfMRYU8IVC9una4UO1H7ojevcJn5GAOtSRgkFhhqT96lAsg7pFu+Mr4YbXG3ingdNvnyOjB4I8ltQdyedLa/6caL3ywk4EVCIK9yv8TBL/b+VDiCZrp3FgyILY1rG8WeUJHnVz6uTBVlYfY7UTUZg0a+tnBYuR8FMP04tul8Mhy6D5r52s1PZ1PnfS3GkRO0BNgyqwngvsG0A121AuHeuVgW9LlmlHfYGa/mhORTdUaTTLPlvt9O2lNmIaiY34DUru3LJK/E+qvWwQKfeB+hxUx3xMWpdpY4/kgMG+r9YaY55wR6IQHNkyL0vwaYGjM5oGmIlFiXuyo12FhoBoR0kpFZ6QIDJSw9C2vkjss+W8MaBMwdTPaF1eEfyzNhI8SXK0H4QC20eHDEA2fh14N2jZ3MLOEX9ECf47ZMIo7DzBL1q7hloVxzs6stxVY3lDfje2xUMvLOW9RzdhsikVRx5o4HZMkpfqdZdnlkaUzuusGBIBK2oSTW43SulyoAW8QtaiYckl8RKiLS2lz1QVl1nEaVF8xcUrdjxvnVStJKKwoU2nF03S+pquWmmNUYWF0+/u7u4T+bHdqF+7/ia2pn/HCNqJXdIfwVrDmyZgPJezJHDx7KP1W0SYe/MOhFAEvWhBuE9b0wB2LjTo120oGjv9caR8biwYHsODAzOe6rPxBEaJxD3CdqpKbIK29vvMvnK85JpZAL0S4ZEoyLZTMUN7tbNLU8pgwZILWzINMpznuEmeV/2h5x1J1O3CWdQtGa7OyWWtKwQlvHitApPmKU=';const _IH='98aef91aee1d35a1caf91271bea3a79607854c36b77512d2d727aa4f31cd4a52';let _src;

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
