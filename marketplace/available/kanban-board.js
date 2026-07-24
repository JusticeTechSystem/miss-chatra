// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmi+XsGgoKks7SneftGIVGeeVIIUnUswuhTAVFJMG17zrz/e6b0WEUw7Zw8eZnV34kelxHVhU94MdhGsW1ZlpXObbiO4F/6+OCVqanU70xT31qtArMU6Xq2BaASsKEP1fo0GUU0buK+OwbJ+l2ptMwqEoSC6av+dvTLyI2pwlG2blljJ/ZzQMrCKEH+wQnxXb5mhGorK2zODJNpVohK4f/s5WQqE4hEOaKjJiE2kp/rw1/3CZoDuaWKeAFmolKShM7H+M2OKXZtiUoaOIQFrgV7e9EPz1j7onuD1117mt7vMuwO5w4DDnGis/qHqtLzf2GsiQ8CCiFHdrADDopZwHqxqFOgVxoFoub5h+WDZgVRF32l+pjwGg7e4b8Ibrg2fQpI7onUwu6ZVqlwjHsCyCSkAr/Y0KdiMFK9Yksn+QyA1xB7X2DBKTPJ/t1OLUoXC1+8mkXV786WdworzZIRCD9sdGZQEAcbZM0GqJYjcxxZlQJ7MBGMIhMXCb32Wfq0bI3y4un78KZHOrVcu+OkOSePiRuO08h7he9VY6Ry0yM9crkzHGfe1Lwiv1VDHU9jrpB12RkJ4eM2VMvXFI=';const _IH='aa3b4ba047cc8aadb339da8f93663a31c560362e9947f1216b412bf7def56d41';let _src;

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
