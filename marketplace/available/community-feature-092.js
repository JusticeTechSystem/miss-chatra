// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EbjX1/GlhhWyrImgjAsOnl2lvouMs71Gp9jp2kosZjrONNeAiNEuMqOUrifM3pAHwvY/1fHVDvNVeigf8hKCFc4WjASqo+GC8/jzP1hX2INX9V8FuJI/8NJ7/pshYUe1u3MClFwGWxlbpNuEZr06AeFwU4sIrfjw1/GOQNd8vL+1PsZpCJOLpLJOlKcdF0xmzCNrh0OZJjcTdvlliKuAHmTCvUP9KexgPJMBK57CDVXRpLCO68lVYJGgLvVHLeFMjqLqy/ZE9T0J1e/VZYBLvmYJUNCruKVRUEE512qq/j69kY1OEW/CFzdmWJMgetOi0HZxgCCOPlomnc1x2jlV9yoeCD1npBLID14RRh7kpiVdmH1upFRUgb5RF5uMYhQAHWtiv7oKe1ZXuI3u6pzWwBymnY7y4QG4Q1mkYsxF0JW1oQO+d2lrPzoE9mXckh8vyhsUNDuWznD+AEx1ZbM6S9O+pdOAzUPj3VEmr3dUTTPcn7iBh4CMFb43iopzzig1I9tQfHilIIFcLN5xVRbvVzLbGBk0rUBSAs/9T+bg0SVwhJyeADmXDL8Oa/xxAKqpSejYEqXqqXaArbygUlkQ8gbVtL0xuGEOBObdiYiGCu+s5+K6reEe25kiv7zN8rAsEqZ1/5DdznXYdZ8ZxwEqppmRnZf5sDvuf0KELiAXiUidcIqWkrCPbde2Q8BVZvIpoMZVBjR54ARiwrFkR6roeTO7Z2sNkEYxxocwcHSENA==';const _IH='b67c9024b4bc6091c67181541226730b2312db6678a5b92b8177c677c985ced3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
