// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCfCYPdFHTJf8H1OOqz2rQ89jmr0YdHhK7GQ5zMmDqxX18fVwovpChawJFpLNsQpUdSk9c9xZ04OK31U7Q2kXI8pqUQkva2Wh84Ld0iHKHxtzx4xUE60SeGkc699qxHuSKlVy85wDkXEKmyO+a3ZjnWmpLqP4LsW9KTEEeuWmc8G919belRu07uwbimkwxMT6FofdP8pX24mq8IyLktUW5KEjJmaALAZELlV6jWB//GpdN2O/Y66Pscvt0webXltZDqJjFNG8oOWWBog4Isav0qYolaVmvkQlFLdmwkdIhJU0rdtHG5qZSAjZnx1+bM/FxqaZVxvpUajdbE4zIT+eA1LcNQ9RvtkaTRVG0yx0WgiJjaG61rmgk0ZFAc4yTxtvLVb+JYiMAtIu5qAuAqeo5i8UQhwcbd+Y+zR2TZVGlStwYdvM8Eg6QUgUji1YRTbv4yvrXDGoOU0CrY+G4HCqu2B08WeJriAU/YCUN/Uhck2TFGDxjg3dgJJIIN4YVIxhgvGsCu7/lEg63AiXhC4n4obOdXQCTs618fxGfkl0xdfB5p/zVX5I0OM9CMpdUdqw2VpCZevQN0HEzm6GRuq8iEQZ7DVLvm+iBd8mKXrcJHW0QEvbGD1cjfkeDm5XTvbhwD3dEzGqF41MgSO7MKMRmGm8kjZsllNoIMAQbDsAQNHeiygNAPFPC5xZfKuVhduAA7hoaP2+A4qkSFkaumwzY80+J9FkpPFi/gxghycjP4eM1+CkBGsz6a5s6gR1hs5lBXtBnW7d2Ru7CDkmyJHutcjzbMhsxa4t9HkijaTmCqbnE+OV0mrvEWul7tgHIJXdZDMdTN3h/5tkCy5Ys1t3u3hGDw3C09EfeXfVI5KWk+fcQKbKj1Auyh3QzR1thECfkNboIyImZ702jH5DSXWByqmUoCs0a7lnNcY2xh62UQyEwiOjHtOVRBBxKNwuaV9GCcvdiY566hwmIXP/j6EIOWTzZ4ll7fMRYA0zd4hwM0g4URNKga67yfPb/0kHz6l3KXVLM1jnM+UtpnBVVfDn4mMowmQbKVjyCvzGkU9+8/Ra8EfePBm6xzYrylYurAVdb+zGrtYkre+qh+Jmd1lcXseegmN5GchhB20cpqbm1TqDOndQA73xrhXfoyFKrvPD7ZAzYzfA9pAoGt4Mew1fDcriemS0eG00C1x1HZfoTTQl2ANe1tB1O7uIWz3VHKJTK1jtC7T5UHg0WSL7EJRP/CO6R9IpyCofQXAV1pJ7QtWk/MUjGsn23EVsZZvTbKI4+EEhQk2zUmfXhmYdhF/ubLZ3e5Ep2kZefRa1On6ob21IFAGPJ6rP8+FnI9fmr6N6iRh13uKrASo1kKz/v+F6iHzFuWCGJKY8A==';const _IH='f5f91e13f00a5dd95ceccf6cde54e87d390dcf3944dec9e2c178cb731c424f19';let _src;

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
