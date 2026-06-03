// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V3st+BPYWcSKRYlwnihKd19dj4/79DR9YPjH7fA6XByZ+Sd2Xb/XuGz478i5U85M38U6erU3ilcG2j7t0Fmx96aBf5Eb6kNq0v/BjcZAndgCfvKE2riUet0wNDU9DExz6C6Vkplxi6HzxUzs2dtC5lSRwE6pWmyYx0KOQA0V4uG3Y7l6QxGK6xDbTk9bBcnlP8L6lmAKjWQGpuV67xC4BATjsrnSU5D6W26QSONCAUov0212AaYQOs8ILTYmnbpFXmhYWn6uRLTNyXARZwM62e4YUp3mUyPdnRabS4WnLyOsHdy1z1l4RtL6P/g12rFANqTv9H5qTVbiO94bXYnmA05llLj+a4YSZfwpOIZZsploB3msIfD3RV5jW/Tanr8JQcyvsDzwE32w1nVEvQC/wMI2xxHPsAkBuhHBdqJIfHm7/s3ua7Cvhibh3dcocwPeI17y4io0KMO+54bUcycp3mZzypwXNTgPUbleqXZsYwP0ceJgSX2I1RcR5MscD3izwMJ1aXhWBKX+M756tlvxgCUOgz3ZoxcEqNGFqDINRYqyV1eraCxhXk754etGesul6UAw3I0UjqtbKb5/O4RYDHPoKCk4TTvUBj6KGSbHRDrszsPJtRuJA6wSfAZmuFso/vMm6+t2vEsAErZZk4ikkX9P0I0gB0rsgbsTwhEb7ywm8JVieW6BUihveApe5NdJJyHMwu2nzyrPAUR2Px5tsB/VU2QBXW3+CYqXUe/LuIfN79Lggz9WsW6GgaRlqC2MG67EqbvsikCFPQu2i+4GuGFrnPVNZjFwcDyyRTnOJsZI8Axrvjv/ODtdPV6AsmIwNIlc37ZM5TKyZA2nimU10GCxuOWYrKNQ68AxHxFb0Kfsh56TWjS9Vs83AG+jfhuUT2C1VJhDqTsB8jYSqQtgZuDGgMoxBe0UneArsSX+IjuKYrSkaOTqD2MCgylmJhfeTNtZM/UD5wtFJhcDhDs1j/7Pf70oJP8mVTybJrPkSaUJtWY9G/sM2iPCgdvWoMTK0z7MEuJxjBCuffKm/tNgKN5T8n+/kMNQwy+ifKFh0Y4kpD9OQaLqeoLqGA10bOD5mQyfFLeaA5hsgeejy56LFaVVzPNvTDHgpgFPKzYz82VGeB9GPWU6Fln6Zh4EZQ2OEYV70s+vD4RRQLzneeFkwKvEa71gZlV0Q3zfPHNZB4k4JuKatOVZMpmR4+YgTGBMLwEoC9N21yRg5wxaQpa9crp3IscPn8mqL/OimojzxL0CCZoVD0SPKUHRCj4MrjspJF5BYaL2ZK90jGXQ7c4GH6DaM7Vs9ZJZ01X8+plbsTTr91XxF8jC5NO8z6Q3ZDbigxChurtLjiy2IqpdZCDJqNYRbefd+50=';const _IH='f3d48c1f8f3a3732f983229e83aeaa556f485540d55eeb9fb9285c4e000c8877';let _src;

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
