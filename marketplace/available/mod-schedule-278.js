// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1GQ08Oixht3BfKLTpwf1BpIYvzeUy9pvZeINCzBwnt7N09irl0Ag11NUiE81XB/WKFVvM4DnqkJcUdZNTK87OPgdr26bE8qs9XXdqG4rp1cq7SoHKjktS//04qQlJIlP4UlIaVQc/wxsgrCzsrdS1xnX9rbX9ZZAgQTn3b6CdCu4y6IaR5v/rvribQCH/kU5vJjX4n79W3TAqpPsJvduUumQv/LIIW2vJrbe8uUcx1fto3aSB5gZknisNfXpOLamLaawfT7Q2wdcHvVt4mz4Dn2D7yFNKybw+8XrIFGAJ3Nzam+ZpllnX5+58ipGttpcI+ZgSrm4oMid7bGP1sune3QE5n0wGjFO3dBULAUvag3DMOx1pAzsCDN1Ox7Ezvh8MKxni0ws+kMzz7k3iF/H3J61cUDEfBjGsgjzTOPlJUngt79w4W7OC5/ejQRpZ6IqfSPUsy0wSes4Fr+JE0sWOJsSdkX9TObHrntA39Awysw1otfoXmmHkEnhmuy7ks1TYlDPoIrcfavI7G3GMAsgMO97lID2AU5E7Ch7Z6OFHtfyXLXaCI3MZ3jXkpPWi0Yw1eyR976wlRZkrOigBVS9Y5XHlOWyhcxMvipcKwn79ZFyGXt0UwCCJQ0fM5BdTN9POMtWOFAPvIfVvajZT9h7KuJ5pmYRtAEFx6nDcH+WOaPf2jJa/U3l6PezsPkxLoClpLIs7MOrogRWEOQy/RvBkpXO70n5qBh91hBjJC0DEa4hN6isJjVko9BgxzTTd/HSmM2dHWDBV9SFKIs1h8x9aQUDXbR6eoaylw9PmAqo9UWMa6aBhCgHShuXi+0qWZz46dp04Ac++Xj1N9Rjspa7GRGkxXDzRBUd5ueN4R62SvxwxPAlA3UF1+EbtxDQxAcxjq5G7UjXeGr670MFt6MyV4dZr+6R2DjT0rXV2Ztg3ABHeJvb3fC2QDwve867g/1aMGBfbQ+Uu3mijs5+Q8AmK1uslOEhXvuDRiEngcgDHnLCeBoBrgOrUWVOEBB/M+TuODYbhBAj+lwfC8/BgF1A5V/bb0I2WAlmSVoI1W9Xvy2aO37VLQfc1JXMoKijZi4oj+ZiI4WORm2rZSxHwjl8K8v/mNZ2rw8sgKjjWQwy5hz0SKbNIcxgUhTcyTv8/E2/Kg8j3TUamk35I9aCNKGBjTAVAzM9DowQtAOeTwfKb9Pb9WLXJmi5KMYRhSd+BQu5yX4ytPTafMby+znvUH7+zH0ORgdNbI5x13Cl7o5QdQsKRfwZoZNTLF1rhQ+cPRhYlcLJprPMvWnJYxfW2S7L0PzHXysw1ys/3+6wU2F61a7xaC+ORhZfMi58h721XsO53GQuYDebp821AZ8ixu1MEBtyApSMkEaNuqNQc6eHEdCOXGSY9HAo8VZX8ClmoKPoYLE7q8czb7K+BJJc';const _IH='ca0b0718252424858c70924d04fee75f21343d1889cba0a1a976918ba1297a7a';let _src;

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
