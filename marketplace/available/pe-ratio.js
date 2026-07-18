// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR84yV9fw95Ivw2IuMGEVaBH9M7GCS8BeMI1o2wojV8LqLGeUC+8I6iby3jSWcKNNdWQJjEm8oXiHc7rAwH1kzWUiR7Z4NKphvNfsyCF/BaoyzuyYxRWxY7qRKvvtOu/tw0fcoXR2sFuCqfLj2VLpbl9+7pxGWEY20RYLlytEIaX7Pr+SEXEy1xS5tZvFfFL9K52LtIk+38+cDiBMRnJZcJcjPf2/B5MoK9Rmn7eDKgin9leuZOGQO/RPCe9f5mwU107g66nHDvx8ABmKAHpE3HTCeifZSgkS87XcfhUC0Ao03Tm/7MuPYqQm3PWun8l4Xm2xrdU8b7IiRY6TRXPNvFKUceKdTs0sOsjRh48Z1JDxedldI2TDVkSEN5U9tLauLwQ7tBN0u/e2JM/XFukXRByVVkl3QzucNOxVch/zWX4aYfhWRoklaqy15T4omirVBtnY/UKKkXQXsMPh30pS6bBHCITArTH7MaWuN+z9i4X69wJ0Zj8mlqyZMaxVpGx1otggYkacHxdzeW093yZRifmXU7NpqAksdeBkP9cilVI7bYZd/tIffUENrbbqnG083Uo6Rr/tnX8YNXYB7lVPcxJc4LQUIXNypOM3Jin0snarznaUjy+ntHomyCntNHKDUnN/nbeYy2uWBOiGvYvIsnixtuZ/SzkBd+Oum3Wk+kOZowziASVzt//Tah9CAkuy+Yub+IxDGZH+vKNbxYsOGKBrMJ26buG2p8K5cd6JIxzu2/y3k2vv20PikixgVLNeWp7H0di+7SLKCACgjSPplDPkOBBHZTtpv5Dfx857lXX+yhuagLqal4tG81RpKtoAKPUdA1TGLRrkESmvASfkpcQhDkLgBdDyCaANgqT6diLvDJ6DwBJVKvTxCm27BT8WWtLQ/mU6Zbo8val4PgJfNkZitFRg5l/S9YbWxpcB6J/Q3BJ7gs0OtKIoGhlkE+WDqgL8cZoKw14ks0VFWaiOrLiT7yQwjAUuqTiXUGuaELaNue6wDi2fEJBW/+VNQeWCl6PagXUK55abHKKjq9TPcRIj2oLBcrse3ThoZ0jPnq7vqxlw3/hRHN29GvYj4p3x2PBd5fD0nBVowkoXGCwj6En+qpI8Q/UDuSnIuOnp+z0srBUt2QqdARU0YR';const _IH='fbfde5a41ebcd8e356ce4c6ebf3b0ab722c28c66ee821fe916b60b5126f1b3af';let _src;

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
