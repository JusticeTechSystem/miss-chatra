// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fUQObtUJV5e5N+LswUW51ZDw/pQiZcHnLjo5IkyaPw3/KRRxo7fHWivdi84NQu5mFnjwEUEj1G/B8rBel5uJKu+jYzhzv6LKVe6dmu3pzuHxoFIxe5xOZga5MOMdE2Dt3bkDwToZA0l9ZX9CI9uzhVOZT5yh0Y+Df/TiMv0bmJBKFhP5qls2BN7LY/W39fHx7lIrBKroDQ9XWOBpwJxkusp1qodG4rFjIYNSC1U39ho9BUD4uPtRgxA1KR/g64o+t3GCXRcv9qsceB/7UO7xG7oWAy5GGg6hTeHQiSBDOapB8upiqm3RPWvi1hcRLkDuwzaO6bpaGua6kv6RS26IW1uAPgwoPPrCAUC/UdyJHpCuCQNZdtZT+aK/z/3mJNMniELHkfQUz9fcOQw+6OI/akZnYjgVf0tbeMia9N4JIB9EdkHY20OSOBQz3+cad5+OKaz5Lenn6eBgf0isWXFDHyh61ZGpkyFoLJJ0sK1vw9l3x8JRipOMwgPs88miEzBkicXmwptLzrEUPQFUwR5BCvvk58fozc1JrayFdPLobk1hw7MzIQj9NyyllWKgyjyorfYbtp2shPYF5fyXSJy5i9Df6UdWvk9vfVydQa8k/VrQo2UPrdrTtsZZYxgq5JFrewGDotYZEeOZG9bBrw9GSdQ/1n8I+HV5ibXBfJ5+pKEtUhops06eXd8CTuTxzGQbp6dCLEajpa4yculSneUA3hYD9VAdnw5bjMciJws2+bBeSgkP3Mm19uVqcyVDBlvgbYdL7J1JjJcRhHSAQ3GiT+AqrdiBVEfGWwD23la+Mm8USEClRzDuGg/TcdO8gRHQ/mMgfcYuo7CA26beozPinVHRFWD80eLVe1uzEK5M3fv7Dht7v96SPGnclOvc+TBfJsHUKdpS4xrjN5zTzIN9L1cPHTI/fks6Vy2Mlr/bia8P0iS1VSdLeLPZBf0nw300MIhvrLHYAKDC9AnuueK0+UbPLRrklQ3DZ94TcYC0acC0zC2tVxldW6K5/OpBHEKxe2dPI0zPkmKUrlLVNz+HXMA50II8na6OhlvXPxmGOTwc1ca5ydwlsHJRyl1qfMoijgsA6cM6EqEXm82ShfLLYg9Mf6XAG4dJT1wCLbd9JiElVFMtwuNgH8O3r8E8LZaXwAVHn98XT6NjEHvWRXKeK9ei6o6ZJCAeiXKotCzucU3hrjFQUSXA4xdjYMHgs8m6A4hf9ReP96MQsAJZ1yEHsePN5Zv9WTtOVcI/CuD5KOLLPM9TfUeD0kWQFwAa8gC00qmRaXaQMXeofnNKjG/ESpXoxandaL7wFQcxWU70NBuYBJNO5mDPEWxq14Id8Bk0uca+PpXaCYYEMg3vzGHdV5MLvZfKlddDUaEeTXFpwQlD5ODmBeAoVg==';const _IH='b753ade9cb8a9b45dc865f12cfc5acfedca8a7610f0be9cf704c290f98d244f7';let _src;

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
