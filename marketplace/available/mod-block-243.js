// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xj7GOfoGn0uESWFuJXCpQQ2uhyhvW0R61LyDD+8pTJqiZyyvOoKfPlBTCSqgvne+LRsoBRbXRQ/RNJSstsLPKgYVIK/QMrp7F1bL4o2c3Y8useZ5RurQCtE/7kY6O4gmvUsnvzwJqN9VfIirLzds43tX/uj4hAN1sRsBblYNmhv+s0lBvyW1G5fTSvzBuGfOex/BjZYuEnWN6qodxj65SWf/IKh8mrZY52WE+BZdRmrVAbyoEEbudq+exDtMLwJojRC0wA8CrQik42GqsYnBmYFKVkSeIQNqClFkxHNwBkffkCdcFFKf3JtAFxSr/SL1ZaIsrkIQ10WGZb1oMq0/BITDklxgZzy/ASazWD9H85VYuIEQx4TJsScLWmVJX3DxUFDq8aKLCDvIsyNCA9myr/5dG9wp/9ND1KORxDUpzFgahj4ZtTCZy4xik2HCFVvjAJMGxKmdpKYVIko0MKcFh7MXrUdtBZo2R2AFaDM0xdo0vObK5iIodnorbdAsfH+8YUD36v/WJdIFXbNLLFv5W37ZSbA6EiFlgFVz3HkQqekmSxVHMWabshlCahgaj00kyflzw5d5VwKvsPVtVM51ziM0tyKkHx4fADB01mX07G12NfM+RrMswfA0nAfHL9CNLMT5HnvtQiK4+Fu1eI24HPt8vroNbEXDiAu+3yth3HGmadif2A62wHUosmdmuWqVKw76YGHuVWJb8azGRnwZ/eSXTmO8Dili0+t0q8VAWJH7LeVnx7CZMsPiD4xEHfcQQpc/naDvcE7UL8dPEdrL4D0Rbc7PkEDz5qZiaCHlNR+Rzadbp3ny6VTDVMPAD0ej8TCJCPN72DI6D8G+GvD1yOKzPJgdN49f1hfx3Oelqr5QwSjSFK8Av0m4EJwCOXQ6ui4gLGuqsMMtFo9kndeNtagz1uT5YhPbIaxmFnAZnz+no1/6hwznsI0jJL3k4PYv9zeylTx0QSFwsFBoEXfg+KOZRk9+X9axS2OvfLqVqlUnUIE+bwVR34G7CQ9puaflB9p2rExDTRom8gRPvYOE9bGY5+MP1pBKbI7qnyRUTge+mxTgtKMkE2/zBntyqo+tKTqCp1YAG46k/mUwyvzsMsPqgEfg6sCMgVkYYGeCBnzcEcgPZBnya9MYjATKRZ+fyGBbA/VydmpH1HuJkswWqwUQTOUcIaEU5bJ1oL7Z9OracXdTuaFMaTkXWMduMirKOXpsu0fBN2aA32efiPE5BnRCfmjZ6RYxKKEP/92kqumBvtrstl4E2xnYeToZjoZLXCKllgMPECmh6wbERi3KFpcYCLtbDhCUrCfORPRX0uKQv56Qda/stA5oBhlpQ1+8MLXgy24/9MxlNl3oaSRUkhblBVaFP3PtXKr7WGus';const _IH='390e8d6a68825c1803557186633036a2bddb4f51c4c55ffd644da5be6d32365f';let _src;

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
