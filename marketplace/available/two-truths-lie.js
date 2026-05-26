// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2rahZs4S2JXKCGTL3U4b4h+X/WjiDHp8p9hfiBeqZZXhoY5w7BOuksuXB5EUvzZH/uQbKNyL/4Fld8ruEiqLFWI8fBZCJC7S/O6cF3P9F25vxxCuhtsYQ/KQjupbfgqiHijjEKhT/Ps8bSiDDjbVVRIb5d0Gyi0yGBqfWtrwN+LkDBU39iv8unlrjVaOxquhjxdvXSh5JYHpxOwGB7pRWrcYzvXyvg4uw6pwnXZvx1A6565n/YnA9PpoKgxRj2t3QA9usdT2gEXE4vOlLNym3uxSz7WRXPF71+zOKXwmlu3JZMwD5taQBjsrkMPAY0vdsFpX727Azk4/02bRnoKenkuuHDLAx1JzkfMlOPSw3kQv+KvJABa3oeiER0O9C0nbtmXq0aB4qh2uh88wCaMjtT7DruqB9hLiR5LwLEztxPIHkUlrkOrO8KBkpPyH4UzLe36pAWp+kvQo94bxoNrzmOax2oQAY15D1DhBrEKZVTyuxVlbk+Py5e7yDdSwp3rTI8pyKNMHFaYVPXAipGXspcY6s/dXIPkJO8YO0KgaBaNzE5ikq8zsuRymRO8IN5n4iZzRPny1NBeKn74wQeULR7tjllBn4qyKWYKVDu+u2U44pJt93SsYNTKpkSlxh8MBqAa1i/Xbs698HZG/HRrhXTTKbUJEQHf0rtpjOtCPCmWZPLtmFfbyAQmZXrL9aH3Wc1vmgFG/rWBatEsMCLzdzAVNEN/g3IvXvSiDXQmJtyl7sx3gCA3wCQIdnQHRzI6hcaxQiIOLuxDJ2GPZuCF27cgTXKJi7oRBXXa2fcZYLz1xMMOFE17h498KxGryOQrcD5iM8LkzBlV06GierhmPrNRLPz34/P8PNk6JDdJ8Rl1VKbqQHVpBrsAuEFAiDWHULoZR0oYYnhUrTW9NXERRhUrMoyYn6In20TRxCR/WnVMSwMdA3zOm5hM4siz4269Bg2TivpJ+oZa7/BEhBTlf6k+tRPkB/UO9RTxYoVuY5Nau3tEexfQFofti/mxjY0xCptk7RoFAeyhOxImqYMEur0yKXXPuQEqRLwUC8B5fnuBH+sEy7s7731keyxMJ0Z4tRmbD+Y02n7UG8wLySpJSbZdHy2EN3Td5ryrd+RcmxqyCLa9x7dj+9+psJxXWB1HU12F3hlRWtrRpsicfGgibAK4JunhvfcOksBhpcyL7GJnrApwFg3izzi2VH3RFbnCuwu81LIobTiWwao5B5eBGnNX2yHI1MtJYXRRQgPXAJpH79voOFanJ4qIDeqQ2tzM8+JMrR4ozittiLlK7EaDYcl7FSW90s1/swdkgOk2ydTvRsIYOFju1Equ6cpdXSnEc3FBF+d+RMUmvS/I5ryGqlMAEIoO5Bn3d/f9K7BTxX+5FAow0mf5PAZh9pC5YAHUe0dny8NNEHpe0o5vUdIrLH/5JssFVUBwBG2x6AaQN0TANOmXhwe8Ak83RUGAfyqt52HhwCQ==';const _IH='4ce0ff69ee7986b34bf703aa09b56979611913bdd47358a88e52215123b2b976';let _src;

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
