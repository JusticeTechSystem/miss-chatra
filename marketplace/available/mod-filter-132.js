// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XxdKr+aAWNylfAbp4mSVfcY37kcB/j/2+xwOrSUmEDEqr6SLl4UQ2MLOoggwSLfbAwv5YZ6DjtRGHXnECgDrDs2/kyVLIs51m5VQ/U37MbZ55pUW71lESYGIIdFRxIJUe976LltiORYusd/TKfzoZpVC1rNrDXtSEquyzJfTZzJyiY2ef2oWh4Jwi/lbS5s4Ore23XGZwp0/K+BP0OrHCj6ONmN0h0gC4Q/85ubqAuLPV/jFwZj67yqWk9NqjnwpGfAXs+0cubcsla7HNP1LIdv3OAxAq+XF9tZzIBrbLPzgj4Iy2U4MLp+gnaYoXrMQCo0fKndaBeTA+4UIcdj/hIQAO1kKNbbZphfBNmsP2HO9nUtiwtMKBI2do/7utJSX/JExAxd9ZpNAOfMlHH1QIJUjWmWdYSOzLxw2UAH961yKtaLGt8mFHVpAC2l63Oz/n1CldjzOJhWVdZZXQ/skdC4PaGEHsKP0/qVVCscEWkkqu7jjZcnX3x67C5NO21BLaYeZT+Urt8Vt5kUvV0nAWuplMaJcK43GwKoMqWvEg3Qlz+R0dKn0AhwkjnW2Me2vi6QB8kXY7nKuRDJF9wH08CJLBsrV+vTBcKZg04mtJLBsvbWBzzfSTzri75TAI9gFsfyd8wleY+TwdUNSf0eCaWJWndD/coWJu+lq/789zJl45h9XzOXfCsf+21I5hqyUMev4l9C67XurVjISUmlIB2WzbGK1plA8uqjCCxHnQta6Ol/5MwD4dHwQ1sIOn3qSPXsPHYVLJOuFbVk92BCl0ySDxSEvHaZ79Lq445+Uv24aaLzBv5CKg9a6GHIq/o4Jl2CxA/arxvxFQITO5aoL0+FVK/BXoUeRg9YUkbH0hT2papq/j/HEGUEoqAvswVmkPmDoOahLPJdEfIOJRAOjlucOyI+GCrcCIOnY5kpK0ws/PqnMESe3FFKZThc8+cQL2u+nsqg1ZJD2yy70bLMaOmFc8KMYX5aEPmZkMxb+vae24ir2aNYWa75EoGQxj7i1PglMI7t+hhxOjiO5MwbFcqto0joXlXi7DmfGEyFzoZ2PkuqdCMwnu+DVp9+NsRU4AkN5Z7bRImbZEtMxKHgwx7ZepW6hirQeHssiNj6RyvuyVG7BXjHqVGrV7W4fEGnd/wkTNKImAQqPzJ9vz0hQfw/yEYodVtbnoNrZO366vcpjj6COYtBksKx5dkdv6XfSW5xTr9IcMNYyX3Ksv4KdfRwzj6OoXhwsFuOi5KkKAUb+Fb1xn9+/Aykv9DYZBiF5PBoHv41IurRx5xunDy3aBWQo0B2bMCkHgL7hwp1LP0ykcu4ouxmotSiiQ4Hv0NkcMw72bpAnp8Mk+QgR4Q3l19hRIU/0gEMHe7aoYXK4vqxYgrIUweMCzQ==';const _IH='ae4dbfeaab29a99337a8331d4a943031b1da03ab4b520cbc8e6a5ca903046bae';let _src;

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
