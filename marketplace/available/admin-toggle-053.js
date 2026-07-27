// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVVLqRxF4VnEOHOQ+NTM+tZ0wVMm2hLZQ72eRO7egcB9PG2a7Rx/j9AHSlqiI30ebI1MO239bTJxGM8KrgD0v+lEanXsXP4FFWJ/NQJ94H9WElY7sfrvSHJWJXj81LJ35Ndcgu6wvqM/BDVvRlcs8A6JniL59ys3IVedl16ihHqtSBso1nApkzJ9TBlCX65mBFIJHAsIuaesKQnGeJ7vwdeMVzA9Ui277Dh/XX1nl8xcMGlO3PXS/8Cx50f1r71tgmYz8k3gXrmgjBjWo8fCYr8Yz2qkH8Aj2S1WwRO/OFktrTtgWUhwJU/kZ7lLJTsO2k1p+jmNjoOsugU6QSsp+pOdJ0IWBAqttfPMDVvK8KlFJIFSf2HeoKT+/80FBwnmwhmP8Eu8DRBC24kZoEtCkS5R5yB7QRI1NBTuZQSltfreqFyvOy/kYxJlf4Jp83o1FI7uQ5VHm3iRIRDzOhbds38AGODaXHww42vkv5sSvaMa3YpGaEPLpyTQmgSkwxP1cJ+81zdla0mkWSW2SKOrsz6hPiZWGp3a10uCSvNcQI0Akjn+O6uGe3qU1zyS9OA11pL2ucxvnrbfqAVk9J2K7eVOtWv+za6i/GIOAnvXjk+1V4yTNNsd4vRxMNDjDdyYspqgKKoOJZ7J5g/LFEYCF58CPw8UfIYwRY5BiTr871Az8wp9fhtgEEbbJbpadD45UQcwX1lIzORfw3hWePI7LuVE9WDEBdvHs/E/ElGvfIl2bwEtb8zHFCrFexzJtPYMGHaUp2EDPfW+Ih0XVwlbTg2c1U4nKK+g8cYd3JTKDaWxcodHwQ3dayz1waSPst9xYYBFmTEqWivORSqPkxjnSPoz8mJf060cChpEGhudWnPfvlXDYhX4f5aPRXFtCub5ofjUuFTtqiEnFQ1O2YmpX6HiySxp2eWg5+u7mzUuelPFB1BiWI963orUZlD5KkKaHLTFHugEHWKoWHKFigJN+2oAVgs0UWCeIA0IaAKfIr2vixU5FTbhd7bFbxOuY=';const _IH='ac76568085363a2fa06459d325488e611b04afd39d2145c20163e58c71239b78';let _src;

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
