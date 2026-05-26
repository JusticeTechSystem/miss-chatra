// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bx/TCJC27p4o+ytAoiBwjv4muZTkMURXPSO/scMtQHZxJ/N16e7ZYj03HIFXQD7VqcqL24UQVyjyjJHfeoqC0ZvurpdXxKGzfeuWxERrSnYeQVRuME3Zs0S5UER6GQ7FXLJ1D65gmmIMN++VoPzthTIHZxFnkYQEFk1UHydsh6wIWIyHpiVjujSEZyfJhtTbTQ0I35yZlRHIfkoAzb0myt21Ta6N0/sUQXyKzH9QC3MYBi9MtydGzrcJVQ7cT7VKzhf00R9mXiK+ujcmGjpW1lvGwXi/q/FOO9yyxa5Z+WPh9aL198yy4MhEwUTbzmNTgLr2hn8JFRXmPECWE8tZR6vRG6gXbTTq464tBEF56/PikpCw+nkBuzH6k1z+w9etySqzCX3FAHg89ju6vSOz7mEzw1cYrrwMBeK4Aaamkp2BnxDlalnJ+/T+BBCulVeh7QkyB5I0wJTsdLKcM2epo6PZvNgumE9KFK7rfDaT9o1a2rbneZhWBuXMkwI+yWbjTY6VRRQ0fVvdMyV7py9PQ+tZyWrUqXzKwllwOGZek4N0dWJn2PRY81R5BiHz8EUJMjqvLCBqQ6l95REoJvOmjFpAx4ho8yFB88UBjkjMpyR2XP7y29uSm5ADk/fA5S3y+OMX9V+R7yUijumIZAaeDXY7kXUEC25jZ5ZJfrc4U4hSwsmDLVU3HvRjJgJs8q624FbLqMClu39AmxJKkIKa9bkwrrgpKTgbqUWovfVKZsOPEc/CzuJYHSyLoaO7ow3Yocwjc2IYepN1Gql+X/mMLittMaODVseccxsBqxc9hcJH1/Cc9VMpRUlpL59AX/Nzoo+IbAg1x30c6ZbjIuD9E1JYRXSumN7hiUT8OZU/9lnk13Dygp9kl1ZaleBBjecHZgs1RCyU0ZW1alLMN1VDlHYvTTgIG23Tlva0FOqOtjUapOCZoaZmI1SLj2BXKvEpD5Tu32Ap57DIMsE8HkN1iW29815Am2azbcSKHP/D+IiYTYhdUMcYRnRFMZkY6yfYkPNIr+UWqi7JJ+CjLptn4xdbiZVtZ0xxYyNQ0kIBoZI8AmPMLZuZ7Urp390alXXFlc15Xncq23oH9PpHXC0nAc25H52bPsU4L18b06bHeIGg5gv1c5BT1yaNwxlE3QU4NJJLFZrqUoC0vM1aZS6097nKJmAesjtsC9QkF3TOKlcoak+8KzXH8r6a4VzEPkDI7IJT7fBc913D';const _IH='f44dcd7ae6010532c695f0251c643534631fe3db18017e27925f0978fa127720';let _src;

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
