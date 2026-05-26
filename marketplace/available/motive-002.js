// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tRB6jeTrm53M6m6sWbi+rycILHYi2IE7F3t/2XVQrheGDuzKlzLD/ZEvbfACNq/h8rnxowWX9LcAMCupPI1UbSojT5vUTTqF7d3cro8wLpw/Ag+tRb2Z1po1n0ABMI59CkDmwml9K437sBbC9qVehrqIY7MrqzDpEG8hZ51xWGA1SbxwexY/IAmuLrm5bumyuG4VMhtwMF7vQj2VIX7E/Ezu2vw+A4UJOyIj13nEggEzLVDknJW0n+kd/w8uENIHpw5t3QQjuTPTWPnSt7XpTBwn1sEzYnEtgDlYQ3wdfDXz3uAZRtqQAX3lID1g4lfBtqVUrSjRl7zEaPqFQ0hDt4DQGopWdfSnhWon6afn80Zo+5X8W0N1CqsvRW1sURzWrfQQEAUoTNN9a/ued7v34QQqLH4Z3nuvdHzAbcdgj6iEh2JyfxiSYO6tsrGYRSr/7zuepPgmI8kd2D//ybqWRiJzK3gJ9mP0pmMUuIR4j4TBU6UYIP/qG/Wl9g2wE2TwXkf1FVVK8Vz42va3Nr6BqQ7hNA5lmAWVGwp0HRLxYgAPVWeaZHHYH46pdAUygKRQrOtRRvkFayVPhYMcYEK5ee071BnsmhklQNdpf3EnUUdbPhR29/1rnYOU19KVZ0PVkRyfKVAaHRWW5XJ7Xoxb2UnhGUFV0k68C42F2ROQ895EGeG2Yh5YzuywhligynJJRJ3uFTQ2RhNm237YtR+HWDFuDGFrWYtMyPbQ4pGeNSeyy4nC+EvW43bue+ru7GPkC1bVZXY1tRHcf1Sj4FOWYncZidsX7gvOVuNYh7X/knng07j0nNkXu7g4V/u3dm0qmZ1LmhlASRaULVjWrgGxEryc516Ftqkp6f2PNF0dur/oEFqMEDMXF/XnVp3PMJYfG4h+4UKHM/+ho/JJMAuxQIgKLS33kqdJV62uRj/35XH1LrLJG6BqyJHP3KzOQbOmm1ZRBBrtM3Ri4EGPd4kStc9ARlE2yu5UcCke7rt4632OCe9RwNjd7wZKUJofs4LymNfdX9z5GtMlQm88OWM=';const _IH='a095372ef660f77ba1cd253a31af222f30d512bc0fab3224a0d000bab9e290f0';let _src;

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
