// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFOD7+c49m5zR7tLj0Qeh3I/JU55foHnqPnziwk8gt8PACPTj9TKU8s7I3wht02IFVyBwTpusSsAvomkNaPeTjrh4VHRyWu/Z2tNRkD8aPGHVLiB4C/MGV4XsLIybN4TSQpIDOsATU/OBaygar0YCFoYtUvSXAO9nG5kBX5qYkZI8/tB1puHmoPAtokqG+j1yBO+JunfqFml/XRVLT35mLGz7MtcubcLZDVh8SZNyRFc3U7YtMh225DtZ4uJEnBBB7f0+nCAkqdB4o9k9qgKzo/K3zp7IqAr/9Qvm4biLO3Aw4oLH005tODo4TOwmN/07fK3sGZ2QWYYUWVRzC2btXnJNa1VNkQ/+vlnXndj5AgiFP/h0FCk1oefxwjJ6t/oWbBvhuzeyLXNiXOnLV24VHyh8E0Tv0h8ymDuNwH4DOf3AbNS2RbA/+/oj+W9bR430iUuG5S2a/fTVvgW+txxFPCnfyB9q6z3E0fFoEsLOeb+q/m5yVwLB1dgWXHY5Y2x0t8b43iFJKi3e5UolJ69uePeZIIkBtpLVokOA+gBli+B5WpnE58FppyDVuGmUdVFlHpepS9StA2uxFU+n531ycbUnM74sxUp0TuQUlxezTNqghVo03t7wV/kgeP1WoYa6qpbUPkNxY2K/jykOQcMYg0MSB2tABB4UjgFiVs5c9hq4mGQsCi6rZoVUKPG0WjBnEumiAGfev/tUehnEBu59sd29olXcXoxMGwfQeIMRKu9hZWZPWnLV3bU8b7qoivj1VmBLurIb0j3YxYOyVGxIJaauWhsb+arBS5DHD4hjuny27GyR8zDHxRpr69ANcp0G3PDcFS/xuHYJgIo2u2pcuWEco4KE2ERSEFqQxoTa3UJHQYqhxilVNOZpe+cJXGwWM58wAMGV1veJbEbnLTIwBiNjNCLzmWBS5YGA3yw2kG4XTOGDzzIAF1QAXEZaRS82317wEwLyeArLv5k7fw5E/uNA7PRjQJjw+IulZ33VOFFyFhjB1TSczDvI3Y7KiS4tDpSnDfMU1r+fZRWkgPqXkpBOo2PRcth5Z1Fo+/GdGUKbH46KJHtzGKhqtqIdg2SFz7mv7msZKIKsj891NLmdQeNNg+8+ojNA7H9cWC9JipFDYi36DbX923yzwgvy3k9Pxcj5b+jEeNz5RpWZrFVjpaP12a75WG37u+ym5X2d5VdjNx2sVyGJE1+uAl1T8q1I=';const _IH='d44db1935e4af6a58e0806756d6804565abb8ab8f1fd531630c5e3818f024f47';let _src;

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
