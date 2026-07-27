// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4aHSjC9CX5t51Xbo/HdYfZ+UlvrnGf9OP7dQpe+pcev8ENplJ9YEJFkLnPLZadblgn7eXqC4E1Bba4KjHPaa1jQlzVCOOgj8UNMu3DqrpDrMhYrfwYoQJSvkjFWaJSZTRwjx7xiZA0FrrynLFFD8ZnCqTfgpEFuon2m7eJ9IFVt4fdEcnelILBQlJusCSOvMcOz8fNE4EtdfdVVTdHg+2tbEJUG6JJ4WFT1JSAY4Gbmz4yKHlcKnLicNhtpYoDF3Q0A/xFXDlzYGocOzK1wVtxt0BACT9LhQ1TYI14rehkKHc4OitxftAQhTdl6Zz3gwUda3B98vYoPhCt8n5CBPHF4alJ/Ncx7cUcdtG9lxFVtGNR8Xc2hF/J0/rzRjJPV29IofMqa0kCy7IWdKYHwLjkqjgwiI/3GD7BD1zGV6tYTZAN67M7mg02bsB6NL5xQNQSoEApIpLWdXwLYoHPVJCUYHHY0/1X7BwtFUkby5baZhaDeW4w/yA/vXZ3MrtuaFNSwSnEBl4OwxAvTk+o6Es9MiJwYSWJ3tPl3yFrajbpQ1shRDnVAB7wMZeggOy+PL4nOHEeInaiLtJ5Zvm8V7HedcjgOIa6cTZhsvTYnDID0NZXaYP4ac3NGh3wRZJKlU/rN6OHT1VHA8c0Hhj2QvJlsnkUDt1DnGEkppF2ei3tkd/pWuJc1dC1C7T1q6Mw6+RRHhcAcVyV2+kKdfqTIwFm5RRCHhXtwBQ5rm8UT+facLZ5gOoas24ze7M5po0AH7+ZiXwqBEhBuyvxEqsOAmrpXxqfDk9xwAvL5v3CPT590Tsj5LyvXXZvCLhqZsdKdldFUNpRyUiZaGWVM9xKGIuS0tE+ML/wGVpG+rKZh23wSoe0j/ZzZ6HOhNWxk/VNfyoPl/V3tOOSp+0tchst2hioMQQM928TcZR5CadrwIwedYXqYw3kfN8GKrq0Gq1CAjygKm275j48Ti5M1dCORGF8Fwjk4LwbnGuSrApUJtAWvWTV7V5RkHW4VtWnJl3KUAL9Rw6lyVZ/JNSvXEjGzi38MomuwxE/5BPYiQs5mnNlt1kcx1SBXoZI/w3c9+x4LtknO1pyP1LT5DbfVYLFPeH+t4LNSJsI5GffNdw5Q1hVEoofFN9KrrG9FiazfUGlffkkB54oO5uG+s4bllN89vKhw5qZ3Qgx2ph20MBMqaMzxsOGIVBE+JbeOMAzjEOMa9fciFOKC6WvR4UZroGe716e8iRpfJftEKehnDNfiXRKCxjgdGz/sKhwUBsPcth5cq0YCeobLBc64zeM0JV9nE0Hf2XjmDKNtg3i1Wki6n9CIZmMVIFCCxsqgWLdaUO6/wy23+PiheYpNtafZ1tXJ3kk1CAlCIkYUPbd3jhyVM=';const _IH='bb740cead5cd63a34931854fcc5624ebefb339afc43faaed03ed42e5b43e0fcd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
