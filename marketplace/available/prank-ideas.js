// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR7LmRS4zMmKyP1tbAopiMsFAOzkkXBWyE0TnOgSEtXgUDPz8n6Sx6ebDAF46QSbpSCsUnLYBZsvgZlJnkQOjGdYC30UOvJmSFStcelUr3YRfLVF/1BnKakFnOFr8TdhutC6ovHzuxCxLWwcJjdfLTTvARHw1dl2VHNDNTAWHs5gU4SDCkbueARQ1/9WVIE5VwDRXQX/mhw0h+cq8CAZfum8iA9TZm5ARYH1GWmhzbuJ+7GcjS+2lwX+RQzrfUlW7vrwKfJYrGjOlXIH2OEsfqe+plfvP+CRbJkgIOSdmLv7on1+aFeYX8XFdese3gY9bj7GMmjiqkw32pYysL6W7wJgtwsO3DBGqRi/jYOHwWeIjj+AegV6X3OqR3BehrBT+w7TQRgGX08QASHFSuYsu/cT0V1NDdgGWzUcMBLa57dkJ8KYLTS7Wzt8btkv97b5MOJjYfrEpBdRGf46QDoxCTyF8rXjfdqHMsWEWytNGbEaGdpaYzmSYAJjJa0FpfCIRPWZXeDKsg9ejPoF5jwj1y2Yo8OmU1iUA2l7fxj0fc3KJBOPQ43C+RdzSTE5ZqzRFhoIpK6QvX9KsHcMxu6RdDD+D270kRB307MYJ2mauSUtn7tZwa7liXt+WPDxsaTa8BYnZroh28ooT0mB/mtvkrGUvq5t7ZOcoHnO5KpwEPEJMb1mOt8BwcROWaC7ys5KUxTSmYktPe/86+dFpQQyw/+JxMWRYhxu5bv2JWUVTKmW82O5FaCWRld/0L2SvPVzgzZtLGA7tefYrfDVTWkCMmDOWnVAdpbAbdVwfn3NJGp17e8vouKz4X/sQXTAhV/XNoCqh1epH9vjb10e00d+z9VEINcLqPBKUOY4O+h+0vymKrmD12kYmynCoullSmj+hmmTk4Hto+5x9jgUUP+EYNJq8AqXBgWNcEG4QrL2pz5CkqT4tjhH8QBp1rgNPV5/0+5GzpRNe81UkVjzf//aTLt/14rYPSAi3rLL/jYBeeGiZ60mk6qljPfCj/ipOQncBF+YM/Nh/9HTkNh42hMc40Ri7sSqpGrsejhCBVijVhMudmYL4s+Wd8yxK7PXSDQnZqiyiOr65wyKos3Yy+Cx5rPoq4F+3hGGZ1JHyamK3IN7aJAcb03sfml9mDwBSOIKd63uYtUaBFzjIHu2UxaB96H/umJpKFrSyWaKID6Qp7K65Iygyy6uPYJGGnpJgMqxn/gUM4CiifSgq4eFR/I/JLDK8i6JiHfJ9O52AnH8afB6Nbp57ZchHtpR3rnKdnS933Y6zUheHVdxvQN1EqJYsPhGDGtT8VVTgv5iO83c2UkzHkmaSyOTwSjhLz8oQIxyBHfr2N8Lvc55aJwtbqdT2Rq3v8P+dMsZzztsa4/2cTFbO+9yyivLk57BnHeSuy2yYeQvZxwkVZpzV8NzSyi5rzInjnzG9CgwBsuv3xJrckBeY5vXewga9sj5RtnKbOGG6tx/X27ET5F0KYzWn4VmFOcDksWAQxMkcwdwK9+OADUePS10VYak+ELiWwSCBhp/4981lgiwrdXw==';const _IH='45e07befcdfa123fdced2aa0973c2bb6c77311a92cc48b2cb84f10d510e3300e';let _src;

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
