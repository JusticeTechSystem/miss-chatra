// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KWGvIt37czo+eResUFF9bWbXtBRQUTu4dbMxA8f9veB8D3UoJLN6sx75ELJreCs5S5OQetz5/F9rACQUO6SA2gZjsJ4Pr9WfJh48ukj9XsimA8Vi+f0ocd9WtuDPPZMRc7fGXOx9o9DFtCZuHGEBh4qilE7t2IhmjA+QRMW/R7vwsaPyHGC1xxTpQTcqGQwa6QKtBlm1PUs4B5SpLqakWBd4jc5JBvMlmd0bNPA9z1O3myZVaG+YzgVZU9CImpGE1sDOXjIqSTAQHcjG4runz/pbD6xX0NSvaid55A/8ICVC0+AXVeYzBDWM5rwS/t8O1PYgDjfphjz0Wl/06NgYfaJ9kBzAavmwnnxbyhQisxLpFMu9nOyoGi3TeLj4HVFnCx4CARl4zEFfpe4i6mx8q4yYhf1PX76xe7wyJuIiw0FGDfGH9I5PiNi7WcF8hoFKk1OmtEw5Ttj/ve/fJZZUyzjDbgT+1I3YdeTlQBFLkZ5WBBhWfsfxclMhJC1VjwtDhgZ+I4SHdFbMc0CrhOI+It8+DiJJyE3AHr1vpqbWD5al5l3xAIEvAcKfZEOg7SpZLt1bzDDs5FKYcB4Yx/oMNfUhi2egOShxyJMpc6kJBI2ipYARSUnQfjVwEJAmnd0G1b2noJNJFxLHKZ6+lfvNbwCV3TsutVMUzfNKZfcOQYjJXT0HL52TtBW4Hf50kP6J5jKilh6tCmXuzi2YZD8z6Eqk0cCx5H8ZT4bDr7BVHS01U8AD4ngXDe1HUC2c0svAwqlEyxaSU6PJVid6zIFSfnO8NdZziFx1H7FgvA+AsDXn/TlLCYDJ6vmQQfRhhKRiy4IGDaxJ962mj0M+fePLR32r0CDi8G3NnUYBcB5JLxHmdJvXpWNSDJAN+9HaVT9dH3+BqWg9KSoHlKJpK5d/gp851gjDaOk8MF1bApbuZIGBMg4cK1TCFYo3oNFinX89s8EkhyKnkyVo7y1twZFDQg0NFHb+TQ1OzBW+GXQv1WhYwHdg7D627YtSyR9zvIPqfGQ8a056wLw=';const _IH='bd582a4f2180501cdb1453efbfc2588cc5d5c242a40022a8e4546596d271fe63';let _src;

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
