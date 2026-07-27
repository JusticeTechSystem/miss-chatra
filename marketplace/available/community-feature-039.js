// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD+E7MTMwKesaepmXRa7NF2WvxCzyFRhx9vJTa/5RFkdSoZIXY1gnkFDe2Ok+U5jLXwdwMmOqXT+IG86goYbcm9c7HO9h0RW7T4sKIfgHbs6Cv9lOTmG3/ATeDV7j7eKt9WsxBFJKFD52Y+xV5NU6/qld3V6pEXAjXQBxvT57bQ6gMrAxpBgIOMSXydqUcl4YF9yzHT0vmYKBB3yhv6f3woRZex5LoO54vXe4Uht0wj3QVsSkxeEIw10pz8E+rraPrMpUD+6EoBL2ddRk0RcNEqLpDFoGsSwV0JzYdIakhxRNgO/X0IqWPsqmSeo2ytiqrt5TupdKXKbNoAUwo1XBn8rHIUaxmX4SyO9888sKngBBSuKDL3u5emK/ft3AdxkjL8nrcb1TeD0dBLeCyMOAk5h1QX+6Ax9chxzULg5ZVGxmbsKsdoezCye1YggeJ2D2wV8UU+NOD9CVe0qunYhVNayHIb6zS5E8V+/G85usRhDv+9PC2WZ7Mk8E03vwUxTN5pB6GWgn9XyfegbVTtUzc0CLlR3EVilRYrWReFk+ILqUmsouuB5ewgRlNFyEayxVoUJMbkVJGPQYn2P1psdso3xosKti3VKL2PuZophgyC+Ip9MXs/6PhNn8BVBs3Te9UZ9hiD+9k9FPwXMhLZ7PEL+yqGNHqJVKMenOlKJutpVblRv4LDMmZIk4zGbw82/meykmGdaIUBKdigOpm2qZMWXeSK96AquRsIOD0kjBElQ4k';const _IH='2a1f967241d940e869fed725597b63319b9576df1c1a51ff6ef2a0d24628cf2e';let _src;

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
