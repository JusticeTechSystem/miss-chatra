// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqMWLz/tDBjNsCz8NwJ4GriOud+8GWVO9Y9XGyLcPx7NU4H9v20zUaqHghWCeTzkexGkoU/i6YJDw8t5L4d7N4kgCEigaA5NqIAgTuJF9aMNGAkq6oADrGS/txF+m9zvx8C4MhcL8bJKK+FhIfJIliWSw8c0Gui9ZPbU+uU13qRshIJBGajD1U22abkbmBKOFNmVJexOX5MLksK87N/C3InaHP8l1SsG9Izd8mAaESbMkXw7zvka6CiP4h8FvV1lLVCLJ+JNwAPRc1Uij6OysElOC4/3pt5K1YLUbGHhsXwZ2wEdoUhtvxoqQP4KAIUF0RVyQc8Fc95JULd/kxk6rBgZy9BJGoWExPJl1hkJjVwEI5uG2IEK/feUYNbQ/aGq6eUt3geUwOKOvrP49YSLgeLP/0/oleo4oqGgdza06JCgVV+8Y/Bd5kUrKl0rM2qY816GknoF2qxb2cE5wRAS4zYt2eOX2/eYML23xMD/LXp3Y4BxFvIePWC2D1dYz5Y1+0ZpLauSARIz3sr+SbO4z6hwgCJzobxUss2n47nwKelDRMDhmSRZg6W63h+YLZiOpCRHGPp1zknJTEO/kEaa/5cwvCmys+cDHP0YLRflZV0UwJuH8fcK1Bmk/k/GgSrybT+2r4bWPEnrScIOiXzmgEJs+2bM+8pWBQbDtXqt7PfTQAuwuZEu5yNOIxMjP2iZPzq8OJGVWrvUOXLhHR3wg2Brcrhd8BARsIY1m1xBmDrKpxwD1OewP+m1GpBziKcIKK0ihWKPFagoVYQZbACiByt0JpAKq2CcYnaxhzzcpQq4lLSi9RSOYyzIySCPEM8agXrCSgi6mC17/ciZDDJc6oIvs35jQDuqNHPgW9g6n4hKuRUa864+v2fB9tsZnO5g4UM97C9lyWDoNaQNI/a/0EGxwB0up1rJCVBH8RtsNn4qwuLX1EcfSlrcWsKKEaGDOsslzOD3Pi9rhVWSvOHsmy/XCeBoxrAW90fzXPu66t/Y584rAlRefXDrlUGJxVfAgJj/SSqaJSJih4a1cPk85UK6sTfcRFA0ymwdcf9hmTm86K1toPZ+QO5pz3fcSsEa551nldiaMYqCSVJoe639/dNmFRUyU+yYm+j4I9F3eSVwp45lOWKQMP9NzF6MD7LQBHJ7AudewnVntKwoRwM4EJVbOpJcbrzU4SRiFe9UtXgTXtRhISR58EV3pe0eIOg5Ta5RkINBUBPL1BgYHc2oFItZ25dLsFvZwPirEwmeXr6eg0Ejdb65H+cFLtN1fxDl38HtDE1XKatUgk4hy/6aJQkuQ/9kkkoQRVmW7LJM+0KvdxEaGKrw0mk5tjM3ZiiqVbfn3cNY4sRmTvViH2KqT02YaEUaUwF/5JEy6tBJk/P8UHnO8/LYRWTEgcRv7j1XdE6QBB5oF13QUEYDbj/vYbdXg67k/MRoiG6HjKInipZ12AQI8/GVB3Dz+2VQqlhpNN9IzDyPHyhIHQ3ZO/fl4TFpnAh+FBqLi1n56VGtkNlkuFS32D8c2FX2P3YTiHvdABw6TQwqGIlWWSo+SfM2HS99DoiA13fjZ/GJzUnHdWpC+pAbWG5Hikgc3qw8J6WeHoY35P9kmTaZIKB2FEUmP03Kfc/j5Rvav2hfB8Uqc+YiD6DzA+3UtbLrXrZmgA914X03Fzh4/WA9Cl9KaXGwgI+LqSBZVUrBIiNohrDhxGJwe7w7A1NTx1DmRZOeWzxq1y5gmKwMW/3bYQLL11aGqCA3zwLssh1s+i/Li58pZH3ImUmK/gWdgC3iQBA7U02AXe73TNPyRI0OLM2N2dPJ3YbLvD0H6F/lggaeAU9chutaZq0VQAU9c=';const _IH='e56e1376d6d31aca9b7a3dd7758b1becf6a4bd3e66c0ad6a0e06010045070291';let _src;

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
