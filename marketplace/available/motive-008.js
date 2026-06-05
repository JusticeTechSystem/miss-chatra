// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='coGCcrjOli0OGGZ6wuobX5Fk7HnMXXzba8E8qUdJoZQt53Sh+LtwGQG6GaP/n3rqKnf3BRsbdlGyg/j6prJ67Z4pxmglF8SZgZsab9e8XN8ymKsMXzQ4TIrfeMCCW9UZEIB5+HNw/zn9e8ffpT/5hfuj97oKa4av9+duhzyOjVe1nVxrq52wt6n7SlN6w+vvA5m28EPNTDwXXZW8t89Is2YKbjHauBufhfmBTjTn754EWhjdLrpE8at7rfZmM7xSG7Exw3mDuHM3wah/fEqGoXuwqdP5KukyR5MaB4b3RHe42f6QRfBLDozCGgqOujBJV8NIg8+4qQ1cXC1cvXAe6IJfd+pVpvEiNPRCx/8rJQwEPRyd2WTuqwROoB3UddTEFeaXxDn1SLvoZrXQDfsRM2nkPeA3MmsDaCkAxocwX0kDrGWzOvwL3dobWa2aa0bbJSNiam0hFj3nsyiflzGJ1nTAirjrRonrxlEkijfJ6FFnAIfxUHcVUrYoU4dvgJVo1uOS8TEr6NKUIT7/FdiT21s3JPgfnfqduGC3VYoA5mAREk1aDMoJ0sICyqKXaG3Xw6dmeISVP9kNdtzKi5w9D2MaTzkaOrDyAdtMErsfYrhs+8S7wKufT84R8tWmk/n35xpNptdbQyxczKy0iG5xXgwxCiWbsDhNPHDveroR7usGmlLX7Dyw0KozI4duV3IyncmpTGtqTsJ+H2r0DvIWWeRLxncd+CoqMKnVcZIgg0FK2fKAF0atvr9vLQEjq79GifCxJuMr/pvgLL4ImWc6mamYAQsyFXCb3Yavhjd/B92+7yXIx0JEcTolg+ciRpDoIFm6hnWacTyjHij/uoEcGm/QyRRapuHH7grBFlFp8EKtjiAXfconKvFLhznLQDVbzc02eLdToDlIBJg0HrtS9XlDQXUkrS3xUYvverYnCzf8QXne5pg1flWtS8+8BfgVt620Zs5Bvpft2uhPy0sjv53zYC9HpJVwsQNekXPHpPpu6xy3xqQC1AfntXv7edSvgCk8I8jSThEfSszjDCE=';const _IH='61b9b978921f1162bb76ff321db798a61ad6b804d2d41889229b42ee2f9390cc';let _src;

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
