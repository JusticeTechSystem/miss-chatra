// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GCqP5da1WaA7nWyEKTJnB3JqIkCFVVZoee108dMNkDYrvXGKTEq3Zz6y43D5g3bc2Br++BzNMRoM4ywmXs52kRGGezfJqC9LMMUVf9VGzbVBKQCcj5FJeCXP59dfEhffx9CXAqa9CmOAr5JKsMhC739WkU+S72EJu7H6V5WZIvBCztvCs/ropMUhUHohETJRDM0E+BmQsqU12BHKNP9c/E3MC5Gnh9/5Re5/f749Q2LkCZ0L+TfUJ2YbsSQvSV60Gc4vfyCVl4I746LM75CuKPBGuIomzH0LBT8gp1+L0R/tyTtKL/FgPvcz0tYVtZ1Ond6DnayUbMy4wkAStRw0joyDnbt2DQ8Q3+541o4UbFPu+zP4E91/4VBsluzt1J6y/SxwPmOJWgy+ILkYEeQonVBPSrct2tdt2EYT1QV17BOQptUR3o6q03HM+/kaG7kgCE/80kNRUtVFBmCtgR2VeJ83xMofG3yqn6+6hnjq5yFM23Lq2avRxzuUB2Ux/IIF7958Hh4WrbEvZAtturQ795JI0YuSO7twBLj6gW0CjaqjSJP3jLORGM6EcL5P9q7S1+vGGnTH73B1yUJ5YgNI4B7AFzTKGSCm7gEwJCUZ9piR8Ywh6TAKCUVkaxlaqdtjwVddbDcFtcVN/NapsTi7gXjx7UgL473rmoU+VGzGu80VGJCfR5fHO148bySShCo6+TTgIS+X5zv0BLgEl2rqcl7EaaddR5X2y9jkhP9sSM4tOObLbaCAuIrRXX/gIwi2pCfeUZvWImRD2bmNJXPZFNZVqFBzmv/TfoUEhh7UOJ9ETzwSXtp1+gOb1AQXnHHBtqa1sux34LuVz7sAQlIIDtC19WRS8k5Xpx7WBtHkKJx0DRF6VvbLdUIAk0LYPjg+6sXq6mGcayP4s2uNsf5oZ5zLzWiPABrVieiIfKlLNjErUOPS3eTCA6Ber79WIIN9G6V8hnQSNi90rodsF36g4k+zEgXOA7X+RzpyJeomhqYzgpyvTIR47cELigZszLXFPXX3t8ah1Xhe8qLtzwtKObMAqEhuE8BFIBznC4Iw1laWsNM/KJiU/SVUvm+wtseCV0wqZ+hQe4D0y/r42gum2HUzmGacKMvVaIIduLwUh+Tvi0y/6NlnpIzbeg8x4tM3qXJiXH2y4a4d0c5UG6anC8ZHpJVDqfbJHZt8JlTgP+XnHOuJOAVl1NTmdN5kNSKkqw==';const _IH='ac07df1f0924efbad8df4f43c4a64400b9d55384dd68a0ccd2540c23d95f06e3';let _src;

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
