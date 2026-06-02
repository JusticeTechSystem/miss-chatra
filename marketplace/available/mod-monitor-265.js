// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nyl9JgpcAm5DcuVjExgUka4d1I6KhavDIF0CuWxvKYZxJDUJygtM3h06nt/upqJDe9B0lTkuJfop1ci4TNyoLAbbvLYc7UA7zrNDC2iuYe2hQ4h3SxGHabagG8ajbc5+a9mrWoVLibkk0/MmVTm9KdZQTVyaIIDAmWMkDmKsEDG1wMvc4TmE/OgpKIQX42O91uRP4vDUCWz+X7U/nIhLQ6Aum9jxf/B1cZjzD9iE3l9WDpgk2CkKWkyy5bKzXg6zZWzlkkuW+L8rhKeYIzJYWaP31au1NsfbhCCizVsvH+gvz5Hm3ZNZsjDHdTGMeFC1+MAlCwsXSKfP+9jQNU5JLGFszMreWZX/gt4kjzqAgAkM5K0VFDapgWTgVWc6kx5d7vvHdAngr/pertjeDswXQhSvmAgYOaOzhWwmAmRh9mfPKt4ngYJziOS+X2PkFXQKfhFMGEl8WCUrg2UKiupQDTAneMMd8wokV+Vic6W/VWIBAo5ggng+ynDq88wTwmcZs/MoeKz3RKU+4GgmRnzyCrqP/uIgT9Q2d7QaWqLEcreJKEqcAMONMtHEgUqUWsb08hqX8aeMvXPYtXb1D4kARKFKEDC2RtTzmqyreXV+uMWq0wIso5Tc81/UtEZArefGcLUwVI1hnbE8/ZdjDDkFNHEZjlp0CHZng29c/T5rZY384gKTtWhbir/dabDx+4433bklPiE/TBwGv6OZVh/6kDcqbejPoON/yVU5qNz327QNQql4QmoaVhU8yUnb7UxR3w/NU7m7EQJN2ddbD1Cm9QkanVSP5mNUE0KeF6ejlFJHQYjUChTA1kW/iJzeCtNzknlLUwKZ/goJjS1QFnEcfbWSCFOKm6kgXc4YfrxOnw3mgz4uyFkOnzdH8EQeV/Zsj1Ea81HZKt7ITyrHHF86jqpXM8uUJE8er4H5HYgxMh5mdszTM31y8X5cq1FxTBiB3bMEcRZFfIJoA++oLuUHDSsOYoZRBXI49tYVCsThsJuWqwaLkqjBQupsPFGtrKzuXYGw9Nix6phA3Qtflb+HnTRT4iA1sgVv1xtFhime3U+FIPpvU2T8wVQioYxkXZUGbWrWtERliwXFZeCM8OQxiJV+VFNrMRpTF2aFyn8lFDdG64Kswbp00qRHxYKfjY0nHfHQVWZT/b0ltS9jrs+3EeahFhZUsU36elyZ3dNKKSeuANWePzbnoClRyxOs4zIFAbXgGp4Ler9yFaF9WIa4FSGxI+5Vc6uJftIssDEKZSDfOS1EbpBexrYVkb+9kIvqF72iF2iMKNEB9PQGyy6RBGJmLc8Med3xuLTnUlwvKVzbBq9lqTwuEGutkUwcgmSjCxexDLVrnTeflV6n87miLIHXFp14MytjCOZShdEt2YfE+GhMCIAHMh8PeAsHHx2lU7A=';const _IH='61c56bae946a47e5498e6a188d56bdc8124e913da15ae2918e050a6e83c24692';let _src;

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
