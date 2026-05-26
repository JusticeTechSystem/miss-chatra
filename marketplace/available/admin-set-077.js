// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tx94TRkQCuhzoTfqRBxSfkG4fDt6uu0oA/15lurUHDyFBt++jvdnHRdrqUHddhELEDDQ05r3DhDkRIuxExFKp3caBEU8bODUcJtWW7RNfCyGSyHK8KSC2X3teLNkJjBjUYkC1KXRSVQXN6SjseasyonE92sHJ0mS9JmZ50FPOVGLlmRuyhBNj4A563kuT212C9g/uVjZfeEJBraevV3LOHJyAn8ZT9reXRqBWQy/E+q3zbA9JIN0O4GO+l1XlkVoF2zYUHodgvLmWrj0HM2AoHqc3vEITiu32NrXzd6rdGBeZZTwxr1tcfUImJ1HoHtiHY/zl+4h6a1dpRyHcih01N7974MHLi3zKQ9baR3GjW8T0ZhxDSQQOstnyeGRVX5vW2RlooOXQyE4HT0iPR27+38uDVUnZ0rjp0J2SFb8WlMdq6q7IemEAY6dOK+VNd2hVoLvnxMhvihhaMNh5g4zG/d+oFmPrK8xLMxFd2iH3ES1LQaPdNC6wKvcLJzGfPoSwnVIhUEUooXlwlwfAokW0TO5oF0M4v6JkiXq79xvm/NaFAdu2Q7+Q466So4CSGof/RXa8XqDPZhs3u0uQPxDV7auQ25zqLbTt/6xNA4vs1dIhXoc+toKeX2XOdVRAqtK5v7N/i/CW4C488svb8nTSerrZDqrS09RU9kxcsRSOz9GFfNbI0DyJtbMbwO2fLqEPE3GIRSicEQCXTfR5wAh9CXCv6jp9mcGOEZ22NHFd7h85cGKPAzZVSdf3ZQtw7H/WAZ4gxssQyS9aBUECOdxRrgu9wgk6uun1pMt09+bpM9xPGzctMMCiSVd4gC9sqge2xEg1rvnKJFDUGIv0YdcLiAkt5soVF8gJtqcVB2VgRU4WtqZiegNZjjYNaspCKSoHArG2pji7o/Cbdd0a/RKJV9AQw7gVah5R7V0HKdGunPT1p0FkhO9UX5yaaV9NcJ+tv835BgfnVESKNQF35Adm0Ft1Z8zIA5V';const _IH='2c9330603ab5c4ce73080d2ac00c1de67056cfcf02935bea5e00fb0efc579d70';let _src;

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
