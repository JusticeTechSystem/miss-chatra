// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jiBosHDzYcfxAerHEjXmbUHBtxcIUwkiwxDzEESVyNOT88rEXG0Skzjeu4Ldlw59C0ipeGhE8os4JAeXO7F4UrL5k0VBWrjdenrRFiarWLy7Tn5sklIlr1B2O+eu0AReEKIFG3Dd1ZIxWgYwsX/hgpK8zcPy5KnYuVQEmBQJewcudzEqmdkRmzfj6/CCFzqyCIST2LxCbzStbFBuCkkH85OST5M1xzQ21Y3LNL6v1owJrY9WB+zYRt3rF7weWEb1XlVWAM6bzewvDR0bG8BNOulIxMT17KTrsImKdKW10S8luDw5qYeqTPrtR51zBiTwKGBeqGmBT4Ex05YBSkTZi1+sXLWSzZ1uA3hkoPXea+TiQ7BJXAL6HpvblNtE60YuZCcuWGrM5pgsylBNHwKgyKx+HvEfYD9KNSeKjyo79sZduebIL/CXotO30xk9rLMrq7IeXTA/PZX2MKr6w9hHBUw8K6PsWVrkNz1/Gjul4Jw7qIocUjF9a7A1x9JdMHdVwqS8zwXcejX4O4N1IQ9Pm/DbBj940nVXwjQEbQgHZ/iSSU/OO0aJhyFgd9bCGvEpHHKbgmuqhnxyY5X4pJU3JoflTsQVOBYsl5M9oy1Hk7yWMsWVD+9In6OsyEZBD9tcwGOmZZoCWyaNHtauaX+2XvmH2t3QqfXQmbUSINIC3enYN4KgtRyCrg/qUSrnmjjTn5RyAqzAHE+c6mo3YPIp/SFgRXLGUqTs+g==';const _IH='3376514a4f0423cfd21b60c978d63e22d5415909c5597ad9340906905bdf6c71';let _src;

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
