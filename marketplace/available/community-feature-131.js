// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aOfbtIoXI0RD7UsiOH8ZyzKMbjl35rgcaNmlfkU6E7JJtOfq1vrTv4lgU3cgfmzA1YLfdA8YzyTy5H3AsGq+yDVknsRMqeLNgDNCglqoKE5/S9DWI2OjM8LjXKMWw6yziSTLPXhnqD1MrKILkjpCseij/Dt3yceMzBGwh7QERizZQMxa3wv7GhghjGNPNePSU+Y/bIzCuJ3WhwMBysgRNcWKMsl5PYsXVsXarEdld7k/Mg7MfieB9a4FD/UwB50BD3z2G0drcYW/n51xc6H3RIctSEEvHpahH1x1HqH3qL0wu3scrQx9vPzX7wmazHa8bfwCHKcpOvA2bq/nj9jH78kuDOJDXgRROJVNgiJprVbjHb+cV8TwjueP9O3CS8M65Kkkh/1oC/iV9v8CU7vvbvSaMgwPt77yLf6wIw6XBonpvftOSpsCV8MU2Ppg53pznBvvgjhdYc/V6jSdgCjy56CFzzJySCikbruBpgS4kpR5SNJxOaOYq9n9qnylbhCckYdu+ot8x4it9F9JnSdRKCRyIQWTw6FdvnxVXj6UDqKZ3idvVq6ZJmPvQe80PWAwtjTiw5anak+BwquEgBaJd0z105UeCOXcz1ZmeJfJGqMPSHk8bRHLNNRwcYj4qjde5aXP4oMNGHU2v6AS0PNc1Kk7It8PURbWFmP6dAuhkScKRK/P1TMIHjVXHtydfzh79lZRodRlbrx5/kve1fxWwaKb5GWNCWqW';const _IH='295c4686f4c7882be1da2c330e191cacff93e97f4746df41baa2861d083a1b76';let _src;

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
