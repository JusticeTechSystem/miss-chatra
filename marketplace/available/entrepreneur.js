// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lx4yZbJVPjMs4SZOjuGvoZKpQtTJrcoq10yhiOPdEoBlrZoA67cggzVzJP7iFCnK7TL21ogz+cQ1RSrUZ0yb/7xHy2RrEOwX/fpa4tS1movNy/HAK7S1Y07IsiWxA73AB1q/s7Fqj2z8+grus12cPnPpxm3la92FUEegp5SyECpcwCm699hqHSQQOrk4l9G2EPsqMs/vgZuiSSkaFmgLrucrZgc7x8SXYfdscHWWRyUZAka0Dp1cREJoOQp9i0ZpozKJFVl6kkTOSIl8XdQeW97lK+KLrd8mKiSfyThhr/PgamvVUdLMEENe90hKqas78guL7TsD5he5cqlOW+OcK8/2Fb1Dzf+l4sRFYxnPOnV7cXWzcyTpjLqdiAMfFIvsFnTd+2GKDSbcJ3fZ7kU/rc1Gas6Tcali5q0MRzzzOQR1J0QOQlwVHhvFIotJQCTn6Awr07w3rm9hTT+I35d3FAsbBDWzGToOl3IzoqTVcxtHFnaA0ENhY5dP1XCnYrfmgp6AWH2dv6YU72PAcvvDNs6XTcJOTjRkLsn5GhOk2S91OTsEHjyOGSy10RbatRCzPdpldT/pYKZGcdiEYgEYQB3DF7Qru/XVAEnnKUZd1PW9yvwl4krF5xQQ4EU7/MBDF+TnqAc6Ld05V7etvZEbHQza9Se1JxqYsJWhs8CBVlragFNZNqRICXIzAjln+aw8xJXtlWIoKe+BHqHqojYYguOOctsvnCT8B0Gdeo31wRFDFiTB9hp/EQhskZr4Gul3heMQIV0KBSzv8ilZ2lfw9nxJwjJ5T9/1o1bQtvJew+fm/fuPLWE4L4iupfFhkFBAZOzVCQUwR1QIF7696sxY9zvRvSSAeDCEEem9yHTK4myxaDCidydA6jgTGjuOuvI0ofTa1A7argH4Yacw84QDc6irEhhA7P8q43XnxTANtJy2M4bwhXn7b8RjMXzOPj5WYidBmVpH9Ccvwg//Ih56n1KwsnRaTwIwW2Y24brgS/PCV0He/ENbUNDBOWbs0GP5icSeEPxq6EPLHQmInZm+KeHJQOiJJIEVB+qocvyZFjJJ4PC/iOLu9WI9G/HVJsut4wnFxIlNX3acPGPWq6Q9z8JYe2oRqODinJunGOQzdqWo/dktYzZojUn0AVUlAUcd2IatLzW/nAnMafiwyB2GIpbHeXkJHRCcURlDZf12dUO7bSXCLa8hxDTMMXoZ+MUlXOFJx4CgytM=';const _IH='965d40de535e67f88798912bb91500376f874c01c44eab5e6bff3c0d660c0d7f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
