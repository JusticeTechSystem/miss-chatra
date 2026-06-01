// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6uKdnvno4vd3xXQRELgU0F138QNO4SH/PKjEV1GMgAs556Djz5T0tp5T3GjDR6wLOTUICK3yKsVZt1Hu+CE51CBEn+9L5oCDMraF+wEsYbSuxPyH2ErBJW5l/DkRG/51qTLC2oBDp8Zqt1v/k3+tBmELMxv754K63bMDtvC1to9kYcsh1DM8LkkzSjrtC6KcdvKz75pLZ220OX3FyZMXUbDBSjQ9B+LdoqMyzOEnHxnTD1XAlPXnqGAIAQaBFgro/wTD6d+H4fIxw8UtQQcHi5MqW4cLPZ+6Yzz6M9dNiioyofR4CRPL02rIh3z2a/G3C67JocZJAgF5P8cWAOjbwV7kPK6zOAHSt9Wvqyh9jqZt15w5iofxAwpEju/JEw0EkGnDFybMEgD6YMHF+7zSb+bn10x6D9BRVNFnsSsWOd3DKBn/Z32PF3FfRkft6uTeMyRzWxlt7tYRuxlsRqNRa3IVh3xe1c2vqWxX98GGWRrH4p8jevlSiKoPraie3vTEbyl55+/Yenyk5oeRUbFFeaJqP6EdIdAWqBs7xOB9ZB0cWe7Uyuy82qQxQTmwW2Gd+COlV2r4svb7xuGgGO0ya0O1RDkfYOcBV/vSo8ehIP0oh93yvHZPD/YwA9A0lPjD4KBMRGiPEGqgImvSfNV3n1Rz2Lz6IHW8bReB1GEyzX65iKIZuLAoYhyRtpaa1m82emx25i5k0KKOhXgTR9U5u1FyNenDsHGG0WW6LNPSIFZZSFJF+eamKgt88BLBLW/wb9SxhAcqUy/vUURzTTJH1j/WnFgMG8OV/ID5jBGUxr+WgmES25cO5iH3Ey3ydjuskNXgQfQclJ3mSji4MtyPPV+PjWhyiZUlHqUd0yGUPWgPem+Ef0jpW7DIOcbYS4LWbUSUMYwhVXEPKwF5Tds/a/OGklFO1iVviaQpZ5yGblAeH4wRDCcXe56C/IRiuuOHHEXGHXcvkyNztS8NJXpwIbZgFK+aqwUiTfQ8CatU2cHWcV3Lm4S0GBCLgv74Uds3gzH+IeOpYwCz7zIpfHtxsYuFy4XZokKi1kfykY0FtP9xkQakL3MTm/uQ27pw8fbCsCTS+9kcXtUmut/7KW961gFM1J8bToBMHAydmtN+qPJKbbUeiapM5s69O7nlw2uo8WfCyxdQtV7DeGMOUIUQAA56UGs9tnTCfzqc7KI79UZWjVBvMUtzergPMCyH/RsRiSP';const _IH='4ec05c508d600a591cc7dd923fdf61cfcd466d96ec1033e26c01e3eea6f49788';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
