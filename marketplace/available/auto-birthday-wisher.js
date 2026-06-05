// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzfqAoxoy83AvbqGoigzL1/Z0hqXjvoAIwpFWCsElIM7sG1wsCu9pqZ+adWNlw3n11XGbwMb4xXCT/BFBmNOEWrJbnu7iPmqz5gF/wbTEUlzs5niB9PbrInc/dum2V44U0HVl/otis0TRbrQZKvsjEqnPkDbxDbX1iZckXI42XnqD3W2e0g1f2H8srAldzKKoz+vaIWiziIxD6FOpjvjwbKXhkSEJPm+YA/cKEyUk8G/tlXnS3wltDnBk+xBCEUpsNavvqR95gj31jJrw424c4DutwI6Fv/Vbkd8nRPsWiGeznEL4tVLcYy6EVHmgaZ0BfBnxPoNGLAGMAgfcvFDIJajXwlLP/f3QuP3EOloZ8nShzv7N7FmU3ykWmgZagCjAAjx0MrggBPvBjg7j0flrYhkwuhEckmzmMN+G7bQrRsK4vDUXkDQTp50t//D8PUDAA22D97xLuO16aeldHSIxfSZ4NARVBeexpHOAaPf6Dd+Gi0oYAzkNjBiG+D/vb0znCDa4GINgHVTtnLYKZN8Af2KX7komt4HOdBZNzVnk/r8mL5r42mWHWnWXGTHEbnp31/jHNrHmicXVeUmd4UOYKRlXPxfgm8qK1S/4Uk01CHOJ2UKmZt8Gcow4/Ec92oGtjHdezBYobn7hCG1ZsiHhrPd/WfjDTz2WGSkWDVfBCEFJ75HNO0Xe93+hCnna3T3ZH7E56CnDyA/rJTZXOIzqk8lujXn0IOYeK7DX9YAkZz/ShbW9wzdu7xoV80QXWiueBBnBTkUaB09LM4cmqW8vouOn3EunkjwkONVmPxdZAj3R36YKvumDMhaoobHkWIclMa3L2Lm9TldwMyZG1Wxqz9bgQ6n941n6z4PoDQG/+HeQPedGlhapiX+WrEB37D7BK7O9PCHKKG+vtcfEJrRVYOStnkV+IqI3QwLlBq3+2Z5e620hOzZNuthVRHfdVNkKgdZaQuDHwUYEzlfckujIRKeKiY3P2PYiubXYmySKsoKK/BehBnJntFbY5uz/j5K18unsYFCkbARfXe/z4p/qkTJsI/DRurDiXUfDYOU2G1Q99d0QWi6DtcX9uhWJggqeMHyudnzQYPHjkmgyxA0CEOgEwjN+eRmMRUF9jgGZ8PrE5EeaC//pyJXSz1Z1BahAsRdqy76AsWzVLdz2/OLwEpLbyKcHDh6apRtBb9xe0m2BIAbbVcraxbC5utr2DS5EqpJ0wcx0zbSXY3TKFcyIvfmnNgzvrz5fRRQWNbPKTdKfL0MDMSwi2sfy6VC74p7yQJejOT5tFAah6i5ADc2uDmNwJjtNp6r06S5Lkab8pnjWV0nkSca5er853TjFhLSnihMf2UTwSTb9D9UoRYUI5AW2O/xrw9BuBkoKorEmvXA/Z4G6x7VKVkVxLhTaVc2bxcfDK262w8hXzytuHl+84sRcsjVMVovGoeWmwvRRJl6YesikWcUN1jarwxnHI8U/u3gzZ6OHC+K8zhnU/jmbXzwmSJXPS4NxPyx3oc2pQjzbaQ2Gjq4/vIeNfYxhcM/EBJ0M7MY+nTNdvxFt46bzLi8Wh4dTgKvSLAIkN0FEpgjXpmhKfUIQwkhp2HweYgi0/BpHwfB3seWonNKW/2YltHezyyw+SHB5xO+Z83Sdh8pD7N/AbAAGYnBZEoZbv5kiTOL0RWfugkxTQjlgi76MK/WT3y34z2l8NC31z4Wc6n6e1VpAWhsGRcURx3D6Z4ogD8h6phvgS/3TuljXvutK3U3hi1x';const _IH='a4b793cb7d1f0fc3e50fd4922f1ca52e5a43a7c3ead0480b38ea50b372847b2a';let _src;

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
