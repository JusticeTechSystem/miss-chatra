// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7R5OIVbks9U/hLIFB95jdp0JssMAEl94zajxvUyQAta/f6KOVLRGu0Nz90l11iB4j2TtbYG7N28C2fQhpVF9MUsq9mFqhjIe8wceLDJGPwpIsoJoVLVrB3Ebnb6FY3GE2/7gycOVzWc2bmsoDIgEe6xqOl+jAI2SIOGkOIlRuZ09WGuH1oKhBnf4rc7ifCEl171NybM5ZGeIyWwJeKzmtrSlP6DK8CoNAnbFh8U9L/cZx/fffen9UU9PV9jZgDi69fCwrMxUTvRc4aiyh0Cs3gULheANe/8bDKzyPE9t8Hee/G0ovh8zk7h2K5iIHi7mo8SL2ZUrZlcQYyHQkxcAcG2Dsr/B6FAqcBlqvKXzvO9Ajx6Q9IANu/P/n9fMsS9jfyH2OkLDq0WmtENyPawnB4BTp+WmYu7jSveDenv83w+MhRUVxVsXfedt7hJuJX8nNJ1DJkeUBjVN1etWfpHW08PBrOVNideDeobhIjCiStVH4xtki0dyHrj6ANqrTrPoXZPZMkEw8P7zKXIVsAM1aZCRLTBO7BetGd6nziFit9NnXoiJMU6dAujIIkMp5cU/lwTdi7aHGhSJ4MF5JZjEh8MiuSBvcO5lJbzFrhO+rDVJrEbvgBaxFtleWv8M5lrb65VVOsWIIh+5UrnP9RsbeW5WogMUjNUo1CeRsCnfOq18oSQl2otLIjDD7KMr8EhOF1+YZF/lMwLX0GhXxOiiENK9k7Ik0nYFqn0jwuHxBOPuAAWVlzrGUOpYThYDHPs4Y1vmZn1wnLZBSRP8xrLBZqB3VMt5ASfjEIVS6mgfFbP8+3FomeFhIf2RBvIu4trjMP/XcGtwWgcV2Ozrw7JrSbWCieoreHCkgooOZ2iFo5uTpd0FNVjDUI6mEvdJprldCQaL8NRSiBXWpaNqvg13hj5ueO/H/23THSOhcR3Kt4HYSBdIwj8B3oE2vOXVSzG4PeFO4boQGVlQYjb1TPMl1W/Nc0jvxwEx3PSqYd6GQQ4pIfeBgDIcOEYotfgYx21Z+lP99+2c9A68T8bKt1QIqE8gJe5yqUOWxVb70bgS1Hu49wgqHEClBwHDluy2V80rIXgYVNNGW2yi2REIY8A5roVctnpSMUaNZQljjAZmXcSR6Z2pb2nqglFU8XBq5P/ry0xlTzUwcCZ2kKpxQyeCq2+wtF1GXnq5NNI+ddl5F3RcjV6t53sh171EvBIMer7jgv6oQuV9PUA4e4zfDN3Fx28ApI6vQ9vKYanKR7CINMPavZSZbOebLgVfd2Ws/okHWf829olmUGneFGbEu3VZZ4852BKe/CwjcfkT0JHbhMqehocHJ5Daw1H2YoNSK8Q9ATdp28kizMA4nsOHYuAbXvah8Q+9w/JcAGsXy07aCHuEBJXUAwZL7Q==';const _IH='30f5c95ee9a1a8208fb49fe497e324b4ffe4a4231abf29a04d90210c9ea70469';let _src;

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
