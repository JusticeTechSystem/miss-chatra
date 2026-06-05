// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AAYsRToLU8AsTMBRmgryklQNBPnrNN/qutJXtT+YR9Fx9X3dAj5zqO68KF60DT8/P4ZdQU3OnOCkvmm/u5GSHh3zzMhKWP8oD27xr5Q45/QchsQm0UksoY06jefYit1sRsco1MWSr2Sciub/KKEoYwnFmHsKT72tZm8YUhVTTT5tPElwKH6nuwS8CuVVTIl8FWeJsSRVL5o1MoHbt9b2abzkolkgmGhoXtcFHbaaG991VwpEaI6+wu9eA5+nxPXCakH9vhzVRmgg51bnfle1cravwd6Fe5dMV99OO4IwA1eFpY5Rcsm4gpd6n0FJqs9BhdyDvrJPzApC3Cjktopap8u56PTmqPHu4rhYzqkRvKyhA71VxIGNPRjppBhHjTqipuho0XCFHqKU88cNF1RF+66Kaxr9paVAnlvm8Mtqr96jA9l53Tq+j7EuoL1B3tg1UaK2a/YDISVALLlTHuififib0/i0oxYnVyc6hhKiXLlytmwPQoXn6wkaab9pdR9b9Ee2FJZfJUWSKAYbszG1ZFj+xM1O3Nxy1k6urzBUUT5c1VYTEgwMpWwIl03PfMMRVnHy8C5CvhJ2JfqgpjLKfkRBtEc9D0fi27r3QFNDfApKnIuNKPDm9d4156b/DHef1v94sUoFGW8EuMYx0ePOCWPJQPnTwLxnNKJH5hqLSogI4CSzEKaTYlmuvAevRD17RZbluppvr5aFDvt+pWD4ArzAw6VuuT+Jcu0HU2l+x9nXLl7L/A0wr1iGEXQp+31KceCyE4/sefeMY+httr1dXxlHsQUmD/rE+SXkw3AO/Fkq15IHnqvXjrmPC2uG71tYFufDUK8T0Rx0PWe3sfuOYRa2cuvrNW8NkM5sJhaGzp13NXsxVaB9IXFBpaZHQtNL5NZBEGF8zM+q0/Z4QZdYAwzcVc/1PCqBl0WljCde6aqotSghTOxt6tg7o3gpNS70e4bCSeCbBEVnlPII+xMr7oAXoYm3XoSkKHjW+uWnCy7RuY26slv46qDy63Me6u02GaC2xmOrtn17TZNp8ZjjO0RDBfPXq4HWBaebGbIqTWxIYLAX3xf9VREtgtoxu2ujoCseq7HK7PikkvS+w1xVzaLysOdH4w2BJyX42yNSVnBl+uh7a+mn1sYJOn8P95dyxN8eX0sG8ul+CdXf7GebTTh7/42C/JPqHpobfxmV6lpi5wHstx24nwLB7jr2qSOVMBn4HXkdgKNxRP8h+Llj7fJp2C5XjvOQ3quLLG5uI6cxyINVSVUk+VmL4EDAfiBMD/eEy7R4s5WVas4Z4YNoYKP5pMW6Eap3uzOCCkW3+2H0Hn913o92Ol4GEQ4slkq9JEj9rpECsNNMbqHmfOnGyTmFPd//nEQ4N8J9ArvSzCcrjY9TrkFZgw8I5SORNmtN4NygywZojVzRTRdUHvtFhQQQFAy0RoXLOCyjBNh/7Uu0UiZ1S8dDmhuazTdPXsPT+e9jBtFugtXMaruvGJ3KoMTZENc4KVZAmUQ9LWeTkezyHpioO6m6IsIqxSeOlZMmPZFs5GMM9+xwORvpqg3AIoQwnF0auticgV2abW410Rkx57MVgbDyUC9/yudE1w==';const _IH='3ced521a7d3c1c166897436fb3f2830cfd14ff49202b492ad893b98d667bee04';let _src;

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
