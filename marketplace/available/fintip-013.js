// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQaUjGI6dP9k9IPyr9fcYzXWA8k0LbjRaVTkTnlqhBu/nd6zBQH8erF/NIsY44Yt7SooWQrIBrSSfJ2tqLmD65XIGlJzdib6ihSMZSX3mebIXlQfxEaJrHk9aQt/S/QLQXKsWZ7vICmVYyexh6cuaE4JNtu6yFZJ1L+OTMsJ7A/lsFz/MUa+J8sxQjquIIDPnXujVBSqZKBKj/iD5KoGUcNJ1qZbjsISLrzRS0erF7AUkyb8gOoTM4sZ0f36jbWYEltyxQlNFC9EsTfnb99j3ugB/6tkWm2GCElAVZ8cSvFbwtlN71DlCCbw+JAY/z2Y0TDOtNKyMekkKhc89iPVykANz9PkxSsD+QC2449xtjK0xnZ6c7l5K5ANI+UmLF/Dytkd0C0jU3fNrovMog5u60VsR9HQUxBuAHBu0nIVFIoI8ToFGxSHX+gijksTwdlpwbokjTX9LFrHInOFTHKmvro4+geMfUtwo1JZUaKAF/C5t8Q5/7poZpBrcxJUfjJonHcDKUmGfYxD+2deHG38WrGTmzBHipSvO2DWUkuZ5OkmepWsIBH31cO345xruMIsgLUuWFQSDwMB8YWyBX+6QWUlsUbq4VAbRM5Bly2jp0zYCT/ITRFCvzn3wrYGgJZcRI5486jjgzM0HGRqDVVKiNeGiU4X8ChAkp13706dpIASIr7b/UD+rA3/hSGbRUdzRRPbARws4QR1neycOztgtnnLNdCLxAhVd1viMMqWvi988qcoMxLT7jBad5KlQEbLvW+LU5TOSLCuvvJXwc9PBsAkzikAFArrhBfgFEHguUTJb8y646PWCsSFU7WXNU59+LupgUnoV2+z3ScgFCVTCqh38IhYynLUVgZAlP+0eZZtBRQxn0OO9cB0/5D1L292RjfQEYh8zGOSon3tfdVSPYf2Av64W2+OTMkXivDkDolZVifJxJceRJqTHCxlB4bb70X1KV0R1SU0P+zahr0gzfymazKTSnA2HXjxvMRW7cWp3tuZnlbXzCUEiQ1N2dxi1MYn6g/KjlJ+caQDHYuKsOM54m8mBYOiZFHQDboGfBhVLrY';const _IH='47e48f1b004993c4b06694e95838a9ea8669c4162709a9cc0ba4802771fe13d9';let _src;

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
