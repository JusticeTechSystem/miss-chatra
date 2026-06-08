// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sM4ZS638OOKcCU0OBDBpqXJX2hZABHaPMRYwZNZcIEkyo16L4IqK43nOqjhc3MlV6i8rp2Gvm158GZZpWYeWabT+PxO+nwCouM9kK/NEcCIL6NjTR5Og5hwvDrcv4qfFqohXYA4V3Gn91B98sebXkC6PIiS5GGFDzhtIwC0MFFkgcf+BHC2DfxeXtw54MlrYFMGsheeMt05iWYIHwA4TQQCPatkayf2biDVU4HXAR9MGn/vZhNdzxtF4G5fHsTZACqOnMAlzvJlFm0eZvmA0CdErq2QKabnTCw12HCS9m746YO+KmCtcVTVrbs/tScmLl98hwtimkcj1biHp71mGbgNqzVHUW5uSypKAZwjGihR49kXdFARFjD1ezfO03zJDQ4U45r7gLXFA+00dbhBrNpF3G+nnViJHm4o5j0PJU873VrhBvvTQkIjOXRNp5gfpaWvGTl02VtakHcskN4zU3MboYqQHzI5kyX1kDEJOaKbqEG4L9WTNIVBzkDKu1ZpTntGFX6JynH3j7nB3DOhslA96R4wNOiB3F4JRz5p9s4FyR0KlIoFQYg0NlcEylithL3o+SMOWHOpDjaj1BrVCn/LHPy52Mfrad7A3KVwMfcsLcGh10A94i+fl8YzycbyFcVK5HL99rSuiQeJe+bG5mgT5WOKlq0S0eCDkb8TsM2+tnyL6IYzuEs/NWsLheHXnvsF9ODVZg5HvbCS7yGNx7siWK6gGUx8I86zsHWczaCPgAj4C/bHXA/3fHChQzFGTs15u2hp59bAFmZXmY/JPAgtr6l6n3AqIONQS3OrGMnaVPSqr95d1Z+3/6d8TlE23TCVIeo/UgAyI13+DO/xwdXgJ0mbwQCS75le+jhTkyeO1AskuIe1oNyWz5Q41TxIWHC6kgRcSR8CbYdYXXQxDEGj2z7XIsKot07s/DksacOM9bJARml7h+19xeiyNMbXazqyFTtN4U9IBvIioIEQyr0eoEm3A68P0O7EAs2IXKDhGjaGm2i68BzeLwohDLAn19E72n3RC3p4iQGD3CLAfPt3Fpf1mNHlZqqKzYf7m8psDVdw4HenYmsc9vMleCfRHpSlV0rUbvz4uyOhmso+ulW727+ov0n89O1lLp4KTaz914hvqGb/GmhU0ZEdqRSFRx6sTjF+k6nbVLn83PdoyqBIr7PyeFkYQYvs00/ZMfw72nWXigNQI9EYY5KGQl6PX5S1hy/atlCwXf/gcvOZLeKdUjPaGzQ/if63paTTIrdTaMZAGCxGMDaVpjL01Kk2UodOqyYbqscz8rY499wVQayNJWXVH+BDBJaX+hkSIkR/LAqti+yBO8tnpTKXUqTcuytu4jhq6yFuKdA3FDnyR8ibvz78tVJP/o7bCF1AcOAyH13Es44kZEA==';const _IH='5e672153a9e818a0782088cd1e1ea9ee1587f2814ef5f89c04ccbe59446c42a9';let _src;

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
