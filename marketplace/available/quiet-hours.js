// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rPEkP24oXAUxDllLV35jvQj04jjU9j7ag/DaTzlwNUsZfmPRAPZoYWYT8E4uBoGgCXNZXDRtY2uYlqfQHMpyZKUQPhHZJYn4xBA0JQSBhOnNwndn7Y/3ibdXUI2tkkoZeEVdCqoZMRkTzMjhcZ5ufoHyO9ayGK3ezLFVgUxe4dspVVbRmeIXUxR3oZdRj5X1xjP3kFWv0lLCCcWhrCOv+feG1xsGu+p594UbhR9Qc+dkRFwjB88u6Zs4gcT2rLtuVWhIaoQB9fSwuJYoxJYmzHxrz2ILtPy5KaBGfdqBwDEjqGf5oteLI4fc4GBx9wSt0V9ZQ7mXL4f4GKwlbWRct6cwL0eRPSz4xTtuAfXGqBPtCbaxv3FtnRu12iS4KVwO8EiGoQABe1FrhAGdLJnXpNKYpMOvT8R88H6p68CPbOLUnUZcWkj/HA03PF/68/We6R/gbAULkVYGbe2B7veuh+559sIQDO4WlOmFXTkTUmcnFaJh5W0vpiPBb5uyLdQjbDRn/SY0ycYYY2LNkQcn7Gszrd71ydpDXjT+vRph00+QGzFcSybwtVrZo9h+BQnee9EV6oV3UETic5FtTd8zRltYG8fa89GfMqBTUj9C0ZoZIwm+Eq0t56I09zygZJSFF9J/h+Y110bGMBMHVlJEShC6pbuknT7/s4UER24F/2B4XNgb2cwCXccwd5HYK4A08Fl0DA+eBtiNVkz+MZLwNFXR6CNlA1vQWZr5QTH0B7MRiZ19T5D/g30CJL8l7TmiDG7nCDhYp6QGV7UDzIYVBF+2UnK8krqCz0+9XpH2Z42tF8NoTnXlOYn556+rXZ3w3iUgAIlZ5V2aUYRVUWEUQ9Nqck7+FLaKCSsFYN7SozKm7oILR1HBMPCtqYbO2KoxAcd/5WR0w0DSBjUjnh6eFysaZcLUAQmIxSXOytly5slNFi0kYp+/lGZIkyr59W7rJyBezwi0kBtjBSnTASqPj1fXxSNDT9/Ueuwk/OvZWyZ1+bDbdyUiTD0P+vRnpGeE81vdrO77cSYbaVKpgqZ2HTSEWQP+9ii0u7PRCQhqJ080lSu44e1tydaGX0Rd0OoOxYtMbPa+RwYDPBfgICSbmn34BQWf+uUpX+Y6CTdPknRpG0A5SLxujYlK8rBiVjR4cey8/Eka65gWQclNoRNCeGDQdv1JuautA+QRZEN2Lm+iOG3IMTo0byqCeNrAOhs7L8PYboWuOQGIyqcq7BPBfIjytoGPlq1u9ML32ofqobPN4Jtz9RazqRf9FtXTH7yxJZmlOymccsnX6T/EVErJM67EMGjYf4WVIZs+0o53PHmXMY+CY0b+ywEWmDTgSnzyJi3kZbkA4Lgkx3YGyEElhpWvPvA6L/LE0fMMz9dAKirgFxlHhje3hkXKKQK1E7eBflSPXsHrzVWB+Q9Wy507CQahRZyGDf+CkZEHy96ZJwMy2Qdp1qq2uM8+D/Xs/b2bXX2hdVZnQDoLvmaBAsKOhKD9A75+5uw8oM5Y3br72tS9Chfg4JQVY63NQBbvy10iqCeLPVV/zaztUV3kFbM2VvAacwQ/zsi42bumR6ijwHJqd2tqeVXuENnSTHGFjUv4vbVtyvWY/TYvCa/IAvJV8EQvAMPctlnPjpqAtbpcSUMDGOD1TPOKyYsjmCPwq3TWXcrLFofUvENPnHtuVyZ4+7Pn2/rScXEdAblKLhx+i28W';const _IH='b9c5a49dede7eae448d6d6f0f23fdd227d01b78c8add5fcc575ea8bb451cbab1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
