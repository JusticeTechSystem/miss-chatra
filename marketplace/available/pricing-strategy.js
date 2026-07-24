// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJs/qedeqwPNzZab2BlVQXIkmfbomAEazop77XR271wqskI1rHxs7vJS7aeicFaTmKu0AoDHeIZzgOIWpoT9Mv8hnfPX8e6vSv39VRBtmvHwncFCJ2XCZMb14vUbA1kG0Q8Y/BRytr4v5u4jN0RyHkFdh5nvzZmIU9mcwo1nZGrgL10v6lFSpPLhGHD8u3dJ5BU1UQg49S7NEQt6iCWVWI84KqCdg4zb4GO6VI7GbahdxZ/8mX3Hk0PQ5yOT3SQoAdQINoN/bALGCKfDN/efMjFgaAKw9XCGXsTNMIicbZy5/s9CyAnRnzEm4qkUtfQDWkMU1BnWaRG2fmPHAGmP7oOWHKyovpp6glM5fVMLFRn1jG/l2UJy36/nDItJK6Kd4QP4bJEwGbA7TE+Dx9ZF9Pz+j1r+JlBoFSdQBkbx79j3NqaHYLNTCFUOKaWconH3nbx6jgghvJrX+VlFiAyMJwXyNi8rk8J8iDAj5V6eRF6SdVBLUMtbPR+eFc+3VAAndHm/MGbfd0e6P0FFSgF8iCoigY6zFEN1xSgDpwFjQSonk/59monzgPGNdknOoEQTz2iE/fDQtHbd3DyHVMRzKcuDyY1b8dJTzEXQX9bqclsteecCMpYzSv8h9PvrrvEO+Eww/jBEB6d2EgtpAUt24obAEe4HfUrjgvPVDl0uTS7krZWMckmXNaCj0E6AzDv94di/vVJEXCEEoIcV0H3IXC1NsN+f6z6G/cj2MpzeTs+iaFGoSEWAAH184RLoDc3+EelVbX9BDzUfcni+Yp2obB43b3JOPUBEHTE/ZEugsnzcYew4tSRe9b4KNBs1cvikdTjDibLwnpkyDGGRp6YH7nYxV2P6trqDrTjxhUqKdg0yuirkQvJrY27ponB4Nzz5DBUFlKxrSPXL8LE6ZS1pzdDVUuVQ5HLXDxROk+zs0Swhg1zcsezMld4o8l4Yfcp025tKqqZdlkGD2CT2Q2Ej9Nkph9mf0wgSmVZvee2PLubjfOP8ybY0C6yNwp4/+icEHWnyyENYYz6HYBIud3c4eSMa6hVgZAaYIGMJyxC/jX7hb+Ca6+JNp2eoiZSv9mzfPCBjHYbjMZ2euuB9zTu1CoOu4wNq4H7iJCKgw0qR0L95szVzlc0tihbSDukrgh1+uiKkTEuI5vfhLdsMNFyr8nqpHDH0iZ29fBir1HP1WXJuyd5ODmhtshlM/6cDMS1evwuQTf8DS147qfF3WUr3ZmdRGFDR5gtyWS/nUWAmGo9fYGfHUr5pioOcb/2OmmjBqz1v+95rSSLlw2T6lwkIfzZqmVhoGJIRljvuFXqD6qwU9btWvAlBOnr/YLE0HYod6Y7v4WgYMxLcd4vWQBXrMVRqR6rAyWcUcr8VRS/MA9HNrLnv2Qu+7Q5P1Q8779JYRytrqnPyFUu8yy8rmj3/UTndKO09AGosE7ZMExRso9gQ0wLravQx7J2qn/1Ygk0y/zlL7igXj1cMcsRXKMZuq0SArsY9VeeR9HnLlOVJ2qOJj2DsQNii78m4tK8Txe5KoPxk/1D7kY4RSGftABWi8xSVIljQq1GWOKPHFfS4oOJ9ebMnDlMU7vm2PouusskI9xY7IUhMWoTSSB/0fVn/sqktgShexG5JPJALk7Klv62XpAL0nP7cMi/VaJT11JZbznfAWTb6LF';const _IH='8b046abde9e0c55a70a3d63ce3a09a0dcf9612b5edc042daedf01cd360964430';let _src;

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
