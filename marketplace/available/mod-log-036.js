// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x1kXYU8reE/74qapHDKPaFRBiQp0UDj5146AN+4xtvjTTneOvphjPNn2rsv5jN0OuhmMjL/ANsqpuCNKxXADn9uuZHvp0dHh7XX0igZ5ls+dtGB/TGF7P7WoA+itf2PdyFLSmIUONwui3RKZDPjY5DvN6FZ77pID93eLJ4mes1HzN1XMrJk+f/9Hxn/aClZwD4v8ssJ1VMcmeROkf97h4j07yj/c/bHQoRcF0CnloO0p3O0wSW1UXxv3Vxw41uar/mNNIHS1W+Y/hjMF6KPy6tB7j1+RA0fSifQdme4ha+0tCxVMWch6hBHKw0+gmihPv4u6sBMAH423ApAGUWHqQI5IV0Y2OxBAN2Nmqp9P7Xju4SCH/4iCeBEa9m2LOurnKBKNHap63YSNlSVc+OQciwqXp8VEVQlGCPlDzVpIvFEgQME4msmOIVTHSf0Lv9P2H6GocI9J1qsPLuKTcfmwUFC7qYP/e7AulWRmsmqfFr57GxvCl38woC4yvxNKJwX2ieshzy+aEsb/7zGZHrMbS9H5b8PVzzEDRGeMA+ssE5h8J/Ldd8CzxY35wx8RxvWPqjRmkpgeXUF6RISiwzc05YM1FGcpO7ggNpnN/pXhBs7rPwMhnXvXWYawLswjjQ1r0jrlCYxIJHDmx0LZeCuSGEiXivq5jrz28+HYxa7v+/lgglIcR3RjKra8SUiT2aiV3PXZM5kLdjt+6f0hyWN+1QbAUX4NpZcdYNCAWxHJbSEzggUk2143VFT45Qynp4qbDlZ1ORlHIWizndc2eYrl1ss1GSrDEOFalF3attWzkArehAUPly+XrbYkr99yq4lQgwgPa92CUSV+nFmGoGZi/1MExrjpyQu8qIN3qBVDnr5pTUF9t2RU35K41nuck7aLMXLvKLHwsj3LdCdBl3osZAtNkpDlRv8uIBPqEJOONNIjBns/OU77VOGYdCjBAAZVmpcadf2yJOTf9/hR2MflYqXDU191tuJmbsBlsB3JZSKKsUgLIuDWmsBEqijtiLcu0AWN8HCSSSckXLTevMMFg3MKIRJrH+9AxWAtVue60SkUf3tg3VuHLlWExmSM7nrJbXqq2vz5ig+Q1yqqLZQIwiQGOms6qMPOkciME7S1czRGwDKgQLEHqgC7lcsVN1M/xQWtQvQTSZIKgEv68Os7XldeWRE7WA2m00+on/Jt3QPuvYtcAKFo+gl5O6ID7OBVwaQQX1WRL9idNEapGZYkpwd+4XRrNh1y2AXmjQDLfNOyHAP+edyQeHK7I+Zrol0CtEkTtijtZSbzSwx0idLVfHh6K68FZHua911VI+SdcCvvx+oZjZYsHSqeiau7j3PfVkY0X4I=';const _IH='1d0b8e9078056fdd7555bd8c8211620dff6336ab4f4f79afcc1c6ef10574ce1a';let _src;

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
