// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MqOhGSbtZa7E0FN2HJZPqsHZYnjFODfc/IMh0+LSK5BHKWgHNbV+DEEIfPC603D8aLPsdfHyQ7ES+6pby+44a1mx65GD8ioWHrN8wltbkqQqPgSBL9l1fhp0LNzx1fAXAi3zFaht4k+l3zYKcB4IMsSwlRWcnh6fAPqMxrmAitMPH+/35l+5JeWy0fEfoDEBXJL7rVTWW/P1AtEdPmZtpBCaZKb1mjJzoxDNfG44ywE7RzkONg3Sj2x32LUc9JTUgsIZ5rPdb7ettQXEWyrsVUpBGiigyYojkeuDE/wCqayaXkpUgJmzJ/wPGX46SZxSyQW0CGnPZerZAveakMjscWfT1HqFKx2/nEa5zyJq8XdqKx+pkGiJk4kRkPpwkTT2V1NVSLRit5ZZU3lopBZ8PMZHsM2bv1f02a5bwIeXwlEHLidemqBsG7YVT9ltji0BvucHm8aERYVk1JLEjqEYH0/xDwrgCjwTWKIMdsRtpuEZ8VvkiikbZcQ8gBB1N4jtlEQuVeFgTHqichyT2ySIeCd2i6O3PWer20OUJRKuoLMjYf8Au90+hLg4hGxJbbwO9EdXzCKHYRWMWq8+N3Mt+A3C0lQlSz0ZK64kjaqnh3s52af1EV9ceW9qAQRkE6r9o4DJwZQKhgvyDxwwKeIOBQKub66w+O1MB4hDidh9z5AFqsWzwXuZh/+7pwR4U0C419T6Xtr9UNvSOQs99bdRtUh04+fE5CX53/D+3SECBmZhO6RDDA0TZr8fRL4S10SBhikJvszJxBeIAIUZVUfI8jXrwD/RCBl1h3JK4cO2m9aoEXPO0irNCpxSgfzbqWumc2slL60+AfH/3Z6ur5o6ByE7vRrImUqPgu1gZWuhDq10cq5qIlWWu5txbw8eO8Arp4/FPFcDokf3pfEkGJJh+n2QsNIsB3uTgKDbU1OZt6DuMxgCFB2+G0dvuZ4KjSmrK8UuIq+xpCITDqcyLSMxT3c/neaEIdrxcM3JzZQ+Ul3BLd3QTd1G+J87Na0bE2na97qpu371R9mG1/QaiZYEk0pruS4yvNc3yayLiFARbJnD8twVJ02R8uhcJYPJEevmp3+gDkkiDgHRibKx+frp5TXwHm8J9Q9PiWZLJNkzY0xdfNBsdeGvs5F5mSOjsYPwLhCXbhy8uDzt70Giz//f18XasM72v9z9xmCk6QgRj+sJWF3QoWS6NmccfHK3Jt9G2JslNCcNAgESMZykeE4h0UTH1bZZHF0TXdFYHpcXL2ZWGEnkxZxuxY5LrGmbUgoM7RgKuIPF2KZAFv6y2QcxXCBviCwhCWmNiiTup0jf3CmcwqJ0PL7x41Q50u9H4otXOvTPKB58hW9vy3cna3+LC2NfQKu4C/ZhMExjcycyiq5pTteJfP4l4iCFZjITdUpIc90=';const _IH='6582fa23cd027ccb9656fc3abc00a574dfa9c99d830dc3a72efa500622d2070e';let _src;

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
