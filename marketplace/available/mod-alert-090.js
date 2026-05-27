// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='abmJ2qPaK+6ne1ZvWyIvkKpn1iyFlQFaAqIEDLPLIodczbv19aXWH4jDsT4CTzu818PQBp8k1Bfso8xRKt2zkbw94Ub6Fw6ZR1P/wNgBKhMWmtTtAwm+mKNo0TyFZu1lymKSTIu1mzgShR+ir5cA0l5VtNKZejzYDOpOlo1KH5dnxhicaJElpG+DPYHuH0PcsLnJdvL+Pk71Udz1/crcvO6R+VftwDez7BP/PXJoXkP5QcP3lW0DJBaN8O7e3thMB9WxvBgqxKEUzGC6rRbTmQnLiWUKYb0nJbWtPpSAR62KcNgj7iyvQ4EpvAdq8qWelMJgVWe31vtv5RdzqRKbSv+9aIkMl54VHS5C6/h54WmzXkhA98MZuIaFE2u+ESF2eaaB/Hjv8piZkHzuaZpw6T9dH63oEzJ8HzpUu3F8NaFqIfA7xflRC1am5il7ydW3P3nZSM96LU2tX820C4pAOP6oyKpCqBscK/px2zbIK+7QkWFPa1QeL2NnbTILiOqITrzVL1E7+6QZVKlX1D0ICUWbCh+XfS18Vb0Bty4nOyXfA2i2jMDDKs1V10/u1XfAed2HKlhPrmMETXzhVQPzMLnpo5yzEOGjOZcepWbbJtcGVmnQuk+Ild2ks4+0cPKV35nmLMh9rx/vJrKW6/k3DsfA3xzTR34V5N+3rHml6biSOhxN2MavWebLYjqVYr55g/2NfcJsJqUNfKuhBWazQDe1LZdnopsx6NnMOaBkwfVa/3yBDG09z/j0S0Otc3HAE6NuiFNYW2DFk8pJ66BB9NRplkqlGfEGYpHMKCVZRlEvhGXaD7oQx/9C2iRkr6wq4ffCtCsooqkZyKre7LPxgd7d+txITFzmA0OQ8mm+ZY8eAaZFO9bGBfjDhASPRrQCEqN5YkD/isJxEW+XJfpqaabQbWu9dzE9vgZSUaqbhhvfsnk5SiBxE2XecgwE1F4zk8wi2De7pF7HsSalRdCVeU4MMaQ0QLLr+pD0K0IFgr0bOgLBynuZ5KBK7lj6qYY0ezDbHQkH6I67AylOEDPgntFGw86pqcELVHasXDkgE0RhvCqCd323rjILD8AE2sEjW2PBnGBihpzMk0brGmj1wP34WBK9M9WclVmyWwmjyXKDcZmihFuvfEG+bX9gnTfmPrb53AWpWTcdz4m9hzNb2bhtRKQAGcgFAL1WtLn8vaJRo8yK74aeJGAaQwInloYOhozPaa4Q84v+7wvTLWsgzDvEtopJ18QXfd+u8F63WRlvqBZRtbbTJdyrv3Wo/XxJuhN/0RyTez2dR+G6gld8zghqv6nNOFQ8UPpDtKMFPvorJJJRxIBcXVXBE9leXRlF3AYsPrIGXZViyc2i9apUL+8dHo4zl4iDxQ==';const _IH='5666768e3432bd5d059b44def852a25492d1e332b1660e77f899a89c79834d72';let _src;

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
