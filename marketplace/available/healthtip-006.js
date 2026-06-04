// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Czs1GeB5cFS5JjJ9l2ZgXgDl8ZD0r/jXW8jdmBSa5UaEshPON1lDVUI8GxafbSRTTeDxHODFQBB1FbjB9KXQCjkcFotl8bBXHvZbOiEF3Y+GIMHv7cGxSYGySQVqrNyaCepRvkUsGONWAR/lxl7gi7rHd8Gya1LqMiaHClB0972h3UjFvN1THQ/1Z7PZHv0j4o+pjeXh+IZrHBo74dAie/a4lRKAg1lMWtXKJONzO+toHv9VdFP/8v7ROq7MP9FNsyMf9B3SgiUYXoy4EadEaHg7n62ENzXT4A+79vaMUieKQhUepV7LGh2YOzB3ENKNmfQFu1r+4H0Jm+7i/14V3P9e9FTlefq2sf5jU8Vefj6XUF9hN2rovuukhGK7QV+jK15/s+n1Nxfhk1yP2W4KC3j/0FJMWGmP/tZAOUt/AKcGgvSuGY7/SOJ6qFJcsqlWppB3OR7DAJWitRr0951Ed/m1uqhxeW7yQV0qYiqE0YBDAwvuUeD7fuJ612k5ADmzw9+mWxZRxhKBeQA4NZUJ/ovPNqXTK1wlj/y21HaZcu6UzwyHzO/TSSbiW5il+sjwMnwvbmT1cBfkY7kuBo1p0Ydr50WORhunlx1ljxhIV8HxYs179FnawX4s694lTBzZz+rXHING0jQCUx8rVHHEs3kvcLwkChSUKd8zWprdAYdZ1N7+twtYE14Gd3S/yvJuzZ0i5peyxcUmflo3o39nOmofYVboRpsjm3CMQZ8mNvd/8GV2CCBLB3FmBGyewOQGRUjh8cMokTXnY1eVU9lUnkI+4BWH5qqfG0hloxmwP0TVAp8y9NnXflgdOTFMkP6PRJ32InIsGpgKRKshF2otRRip4ZJ92Ansb1nWjnO/uoxreiiBxsmgu54FbrBB5UOLHd2xDe0n4jdF3sHBlp39IC4VFKqA2GjMTxypsP36Rcpb39P7rM1gg==';const _IH='5693132b1e6b93996d57e3ae4ae6ee938e877a7b0b05e5559ef3640797026fee';let _src;

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
