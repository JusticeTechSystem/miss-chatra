// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6gxXEZF6UWb09PYUT/Prwp+2UKigAzqt0i20tpNy/d6FhhKMeCmG1Q3DrgAlISaPU/0qIgFGs1dw2Pci6Wi7Ps4FrCnCwUhUOyl0UD9P7r+rOE5DltMwN6x97bPzHjJwY/CVhT9KDnQEb6rwdD58rNXI3xJrkUKzeq8K86RN3++53XF13JCwg4YXbtl11jzhs7XUYhkE9wDDpjSkcEZHxR8plJDHL225f3MQrXKneRLuvtiJFcQeDWzDvrtUpm/EULcMuTCdNIK2xu7fzfN7nvLGzv1QKgdTM/uMsv7jCrn6UbQ2xPkiUnTfUyZ9kt/Hx6ckBhfwHxBlfeMYD2fZWqJVfyLGWslr8Bb1KwWWt4O+XQmldO3z1/8umhwoZYrTiB6iLeQrxH963TqlLaCxGcUuzHk1yZKi1O61MzlcvrQoMOLFsJg0DfT82h35D6s6z5fg1rQci4VdeWbnHWJZhQhoXKO/RlrFZZ0VTC3Ors8S7fRtGEDUZobGfTcMY0KI5BTRjFkAa4QVK2+Rj4fuI27Magfml9+zg+8F30yQ4bT60KCKmhuVKZh7fwZQwycNwLOsYLX//PztiL095ZxF7SePbXPCZmb9qMTs7U1dQ5VOOmOiJQuKxwF7tJPuH1T7DaYBLz7T+wJGWAmUYcC4TpP9NMX+LA2y1wqdjy1II6MmnwcHKJMc5cecu1GAdUrFI3unN2afCrYYd4tFZ7YmSt1k4XyTFnC7s1M/MNc1wUWc10NDK7UcsDFVkI4o8dPn9vxqfoFI1ufo0098dI4YwhacgTEk3LOJxbBaVNzP4W/O2I3OrQeaqLuC0SKXJF7fXdxEn9xFMFnJ7UxQ0uR73Q//IYdF/ZfCZA5HRp+x6aGhOWuWpSNt5QEVAJHIxBvnicQ+cWbsu5XEi41GtrZ1Uj5U/EA/kz3L6PrPwC8tqKXG7L4dF4+IAbfJCkVGBWyVPkTiURt3xKP1SawrCPunmphfqPGbco6OXktSuRKHy9NnYLbvXwxuq9zGTUZ8y6dPJM=';const _IH='02f4f15bd5686176ccd16133b988db5a8aec6422ef85b64bb2efd1d07e928ca4';let _src;

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
