// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ5fASNHLTQqoHSYK2EqT+uKhIiq4Upje8VcEYjPdu6EoR07jSa0JCJbAFoxKTp5HJ56ReBC80tnHIOIMGsnMwx+hx9mp9yoTJ0WWngaJjMOyOxL+eX/ih7UfqUXGeghzs7kBe37qpln32UkTZdpXjV+8hIPTWhwY+35TUB5UYzd2VFsiYRdHD6IHCQxsc+FzF4WVfxcAVMi4riyTsvstbPsFM5EWXOuS5BAfBj9GDFTpO4OBIY7JHcBIrSkqwcBIabrN0fsqh8J5/PmU5pIiQcVDKUiixTLw4693yPFC3xIJ8FCItSxSmlnEj1V5x4MrDBpl1z0xvIfStA4hSKZTDZjIU/Eas1gFRy7wf7i6ZpraMMtnJ4Z54AI5XckxTIWO8BsGhhG55Hcr6ETATsU6QBs56/2XCtoxM4lmAdRup8ccWp8Xwx+Sn8HUzcS943IDt9SJaP2m7wcsO+0l5HBgnDRsg9CpfeybDd9yrx/4iRYnexS+toFpqyaFHk3kXxUc2UNuSiLEbXbup1KKTQ3kBtWmmD6lE6kSM6l9lQl2mMth6i3FnvRmfAZOwP/oTiEukdzfE/SAiyF6rNqOKAaq+zEwXrhvgXxPQ8Q4XvMxXduVGAL8omWa2fVKcPkFjGE89tFb8MJ35lORMUuoqmTdAOf096pqXeF6Hns9fwUohvV1By6s8DlZwQuHTk/KT0j3xHeFUg0z8O+JReayb/jZ2TCXWcus6vYU899z7HpZ6RaEkpwTlURmgge0FFlPQdkJAX430GhFGvODsmj2PTOIy9NJKbOclEzWk7GuqQsU4ohzJ7Mec3JUqBg4WIY7zqA8FvRID/dkCJN/kX1KiMnLxYhiszqyqqPaLyLt6W2VmsqWChnPQPWeVKS+1tb7c0buC8132wMjtHx8jPQMJhkYFsVy91pF/equQmQINtJmWu0337cQo7bF3bW7MkrD8fdIzbiHq69nvhoqBqBSwDg0ceOHKaBZosaXsi76R2j5gaU5pv8m4463F8W/l/0MJu8itfWaYHCSpiwQtShA5yVXE2E7Yq8w7/tXfDEWRiTtCO3hAC7yOr3F/bzsYIzS20KqqVo1l00G7qgEWlPCH3Fmf/d2+x1OZVIZxoEKxNnbCcJXQj/hzs9ouSxmi0OdTdaiAJdYccVACj2CeFfgY+YLBXWDMQG/Be5O2WQ40E5ebpys9ALqQbTEjen28livycbgRVTSS0Otiyr0=';const _IH='5580bdc78b8539d8c0a8261c3feb98f175eee75bb29438446570dd2df94041da';let _src;

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
