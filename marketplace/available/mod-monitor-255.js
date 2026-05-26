// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Z26xm7Ht0516Ymnmz/ahV7MtiLT6NR9orGMPK2Aipsry/7wORl4Z0eyLrzygNZnnWxbSz5Bhku3hKLMoaDwPbmOgWTfez6/dVpn7cYdNs9ts4AX2YNE+1grTeRzLYcMgyzDz0MXBEjkZ7E/yStJo4rw/5v8nccxTdJ1r1uTs6slSY6nOy74E+gwZTZHBUer0KzIXK/bqvSYXGVqWRnSankzBMPRDCFREpL0lz99uNhQSNSHedPwBJCtLqSB1yCDhx0VDVRiUOLs2f9L19l9xbcZtCWsIa/KcxlgQJYyGpPZXUpp4SwzPANoBT/7TahNXHL/VGiD0KpGzKnKptlyZewcrWLi8FwSmOcZiAlrNHORZ7EAk0S5zuZMm960M5cWJoALkLmc2YJ65Wdfhg021WSB5bPa7am4ojmCkk363ErGY5PzyWBTWyb3wWWWrWKQ0mF/3yRZz/yorACNecn9ZrGPyhLPU4ZP3fxOgm6SdlfQU3B8PCJm5l8a5MwyI6GiMDHunK8LV0BndB6HkDF9tT7U4WAs46XaVKMP1hW6uvb46A4Dstx0cFWFypm9LoPNPXqZJsrLpNZz4ZEQ3U6d2dhmwrfVvcH9Vsqf3ESvvtcyOtnv6Aq6gF5Mn3hss0GSsMB1leeON3w+EXP7oxE2+FTsfglxIG3L3EHdwl6/affn7ARDrUGgQDN8Hk+i3Kc2+Mj1e8slOTXH1PfAJGZy84iiA8ITE0Q99rGQPqDilOiukuoUBuKlyT3iJzIBVDkHtaUmZ2cJnl8+P2CDo4rmwShJOg6WaX4goJyaL9F2556L6DBi89YF0lf+Xx1rCNZ4Tlj7tEwstiUoBdZYYrFuiNm0wXgGZRilgdgK00IkcVNcbb8XdOx7wsS4T78C3KdDwxBTCMOgpsYAU1inbaugXsHxS+FxR94Szx76lYPUJtWmGVvnXjOyU53SEEsyCbSTd1s4qk/xqXnlT6CwKgDHruPbAr+vJNaEReMAF++x9V+38lvb5mXWMLScOi3qjKMnljJMql6NbMoHHCmsi/94hlCwyhYX7T1zbLserC4rVmHahhnPabq7JHHUoCSuIJaba9JdwMlQlgwnqwDwoPcdztG4HUO2YGNjTsWczmS2MvIqhEKoiDNagvFrvhOkAbGHxoY+1aZi8uueuTjT4HhGlNkOBnTWf4Qc5d9DCnoI9afFeAofq4FIJAoqDkkIQMfAc96GNozFBgxQft8VhteBx6ZzljH73JI0wR1tZa6x0IHS1ZnFhLZ7xJjWBk52ir60D93fGaW8DRbVJdx0B16Nr9iqwb34akwWJGoAQ3BYfWrpvaltddv4wuEXW0213yuS4cuCG2AzGbuYsPkLlpxdWqEfVBiA4LV5HLsZ6Vl5F0+NNRSPkgZ5/NDxhaZEAqAu7H8=';const _IH='aec088a8993d7eef95b1e59c41d28b7bc4d914385cef2457a711765829189cbf';let _src;

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
