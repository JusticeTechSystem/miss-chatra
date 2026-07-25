// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYYYJdQ28hA8vxbg0OhbsTLQhHGHQt459YECDtK00puImaozlicakpa7YJPt4lmnEcI4KCfuSTlRE/D+rAb39KLJquzBldGqOssX08leP3YMJ6szAj6Nl4XHzu4wk/hbbqIZUuk6XNzIHw1y6z4Dfrma+Xf6M6n2iXbLAN6YjkB7PUxEd8w4o5+05hPxfDXzJfdHYpYNauVAxmYyFW7LS30tNpvqiguhYsOiSGfja9ufzwVaaloRiwp6GAcktTHBNuqNip7e9hGjLFeNt6FWOBSD/4HZFpFDLUpwHfJaz4nFS9KdSqJy+WlOgDRMSMAzjy1dzcL2WtaCbKTYFt5tM83LOI1V55gtPNlq0pjBAGOdW8uqO7GDf1wsTgEIgvIb1SOySUej7RQ3XLuI1kPaIdhVtQ5e2Ni+mf8+g1bRoG/gNcHMptSwYcu5S3gMhhkCHdA0Nnmz/SUrBovRvQYBYicZ7p3csJwmZeSlQZ3KVW7YE02yRctciEEacqF/Q3ji7qPULr6CmihBOrOyGzterKsBJpor+ZcGNJTUGf/UMJFGOMkI3p3Ob7FQ2B6NWuxxvmyHSLYAyxfQG87SGWWe7NY3oleD6zNBCfROWa53x98xq3vsNhtwdHcPm+WkZfUdRUmRU4tan5Hc+ulCTbxpoRdSoJ8od6Hwc5wPyhQijtlcv6fRB62zvyHZgU/kqWpnXPQ0F99C9sJ0G20vzOsKr3eOVnLxR8TPpI6MX07W+mXNoAUaG7iA==';const _IH='3cbe1fee15d46716075922ce837900e210771e5d6e26a633a2c62172a233c303';let _src;

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
