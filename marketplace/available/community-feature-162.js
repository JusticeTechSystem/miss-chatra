// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTJHm17Ue1/hdvAx39yQpxF8bADJIpl1ey3lZuC5e8QZuGqjfDaGn4OvDOfFIeNHT4oc/EdXqXeMctTjCuhf6Yn5VxVZqsSvAAMrU5iYrgZd8tQdpcd9/9QmTOwUrndUbpnP5ZPUdTIckdzR5A8uIudpaep3Qw6J+Kh51ILI+WtVJSx9DsmGlJ8vfi+QzhRBHQfsORE7NePjAo9k+oSSrldQnJqKk1WJTKEbGmbEybm5EuZKGoYOi3nfRc1kG/aS7MKEr3AnS485wysHx0oG/YZbZ0wno8KmLpcRzSRKiPt9o+pULID3WLsn90H4ZMHFZ1hzo96nU1N7A59jXy5Bmfr3kQxoKw4oKFQmQpSqyy9mN5j1E9wHhx0bRzSK8JqGV/K5XEg2dUli6XhbYQMCHRKpzYRXp8jpsGPpshWYMfXYaiH/3GOCnikhJJCQ1Ot9TAZNiwssmmQlyNSVoro6h3Xbd7tFCNqNISbszgiuxGhpH/PBAh8RpZjSnJ9sM9MuFEXhuT9FOprlMNVNoeubTGqCr+0TWWO3S/ZeQuc4+eUc2VaMsEUKIw7lwXsN2FaqoxyHXpJqc3OF5uw3CqoyivR6EMgeTpkR+t7CMjbk+6wGv7PAzJoGvIZEM10VexNkiT7vxJ5d/4KQoWfhhTNX5hYTC1SfnynJu84/jB46p6COHlS2CWggm6436zhZl9FVgM7CsN7RytWhbb6fBigpIM3ARLow1BV762Hs56HSLH';const _IH='8916be25c28339602173b7d2b8c3f246a6d0fdc293f5b268300aa4401d1435e7';let _src;

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
