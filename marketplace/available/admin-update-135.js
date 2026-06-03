// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='envLWxXrhDZei4wGX0GMuBmQYATil2GCXgnrD0cHaIfircH0cgyDhynf7aOMWm66CZ7lLzbcJ55RqA9luXcX5bUzZImfa1nCfoadtH3Lu6KoKDSorVIccANEecHX3ZWp24bltTgYzmJsZF2S6x+UPVT6a4QMW8kENxHb3xmryp0gRP2+RZbyZlphMGkUx+xTQvl+7rmd5IMgv10B62dv5WHP7rCczrNCc7/zb48vv4/mpgmDI4dYGRFlQWA/iMyhJY19QYHOLqCUVycB39tOq/pVfaFykZv1hknbOUagVpqHkvaWzGVeahLQxVUpxjVqkKeAFPl37HpM3QskMpYG0bsCyO30nbViTzbpDABir7sWMRgcoOgm3fhb253RGiVSuoDZmvA4qgILqXgrsw2roA5/RzWQJnauJ3lV5LYrkKVIXrXL8rm3zAXvFK9T+f+RIW1qPvPYRqhxwsvStwFiLC5SrCnnOTf4d+HQTfV7hksgQioiEHnH97il2fP2nZYYH0qEXIFzB3QTBtaBWgqaEayXRHHehc3/2t+RMxLiaQGErDZsuis/II4fXCZmDb/HZyWEgktRAz1RSJAy0e31s2c9FdK9+8Pn3ZFadwj5Vxa8jetm/nzwZFeYZXLIpj8hWeKYkSkJO4IZYg7Bbr+LTPOJdko+8zhz9dJNofpM0nz85ghiul0D8lPniCN61d2fIjpRIJojpm9ev/4UAVy35fNBbU5zpzMpXzKp0pf6Us11LVS9zll663vtBf7MoQQamkdBvo2OAnOgyc5CnmUk3zgihaalGwXoiLBcgGtphFlQW+XlKL0RcBmXbfuDD0FSFKGJpacZB/MEFHrHjQxdZZ5laPp5auRP3IrfdXgejs+K+GEihIQT0R449kOPpZxbt7zNlkrbtf/McaHh7D0FHcwr6XQVL3EZItwAwmmPllfT0367+0atXcoQQGwM3xh1n7wMOKgXjcfHlaHq0R6Qc/yOiPlz5hrtr5Qbz7w5nYXFTvdcaWO68ocLb/DdeeOHzQ==';const _IH='6789c1638294d5597f16fb8e78405414bb1fcafbb0571371535e05c902373852';let _src;

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
