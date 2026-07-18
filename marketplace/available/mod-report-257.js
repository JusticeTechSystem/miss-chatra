// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTO+kJho0hl/m3AKfiU0hRfNSkqL3kK1PNFLR0FapZxA0YVQygN9802r2Y2Q5cvlOhqgkKf+zVa3jcxD5QA+FNVVGBRMjMk4rUWQjiDSB3bcyb33IEqnZLZRV5rrdBMwm+T0AnNsksx99V6ntk0YeavUsXT4R1FXnviKRtmr62eQ3nkQG1UcWRrD61/+cvt5XvpFay0Z1vSVb9iFuz1jkK5HILh5cv97GklAZgM0i6W19x8hDlczLzd6JHTn/3hLvGwsB0to86YGl0KEg93dhdLf8x88wf9wGj2N4xKVlddC42m4xd9o2QYOpSb8EumKfp1zH0YI5P5wjsrV1Invf4wJ6l3+Zb269wd0lLkcCF17teotReEDQgXP8wiC3+59A5syCdQ4MpbNFRZWJpC9lklvhg0y0LlKI80k2WXMOPPiHPpxm9HT3+mZ2XBbC359FQpzBOlZ/AUphN+5tMGdkN47pBaWrZiULHp0QkeZWQiO4Ig3prCOyirGORwb9E97AJfn0flcCJDSiF89qpkngz1LRQPQWwEILiJ2uG6QBkhNZq8Zlco6sVHckLEfxjOYyso3SXqW05MvGQGNOYRhFV0gvHfynVOTh/Q5S2lomwq4jqEeTz8TwovrDGJqs1aTMZkZnsYKyLdMHCgg0Vf6DihH70uPpUZ4DyEJPGcZeLOZKp8TFxjV4yr8HpCrZhnmErsG8D03vbMTMsvzn0CzSe+VxJv5tSEvwK2E0IlCkcJ4pIaMZSE0xfuFkFZdPcB1rr29KrLZiwSOI4hhUQsLcSOFAORkVZSdLpfdFqwQEEZXsMux2XtrZZhTlj7CwgicKt+5htqM9SaGfG1qT+jdp6GbJhFFEZaZONUMUdfgGCRbNBNzpJeSl+09vv3J+k05W/JJVjO4+148Um0bIRcCqyVQpR4yn+hVAwReV8epIOSIqRFE17WDnlG/5Bgvti7pwBKNVg+KlpchryImlUNBFsXeI8HztO/viJ8mhIeqJjCmU9ldayPBhBm2dTadZw8b145U2ZG7mztP3YXU0H2JTCvriisPBOMUFXg+/2YL71OVfADsofHx+x23hTgTOgdvEr3E+MVw7YPGk83a8NPNASmErDUBrAP3ztX0rND4vG0NSGvAvIZf+sBgr70WXIomp9gLJz1smBlZ4agxA6UKR2og7BtOkMSZUQ9M/hI/5tQcD/0MAa/uCXpHDVubD5Us9JKsta2k6IdDFVqJsNI4AMinx+dF9ZzH49l4AY3aM7jn0gglT0Ggv6zsMxjE2h1SFuIM/NfbAMuu5/x4ybDn13Im2rdz6YPvYaBnQK+YQqTAAIcy7zRI6SkPJnHbHgPDuDN2ogBw5Vz+Vr6yirhcmgzkceWdWAxvhld8Q+4AmPKN9fppkYtDqN8';const _IH='65d125d5c4a90f94abbd191a2878a19d65c9826c7008b26f650d9f40bbec6a30';let _src;

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
