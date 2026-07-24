// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTK6bMR11Z8Zg6J6vcaQKvazOgfrnWfbT++NVfC5WrLcY2Alxw8N44SmUnRVNn2UKD65bOP8PXpFXDUH64+CwcOjGaHK5WOKW1Oa8x32a7EzMypKlc0egL6W68YiCy4Ll3c9wDUAC6W81UGj4jEkh7ZiGzOjatATpiaUjyzj7aAVWn2MeLnG+r14WI4rbBJ80s6j8XFHviUwoubrYUcKT47WzitgVBg5FWec5ZA16pUwgWZh4CGr/AEOnaiXRlcN2xZtWmDFSXfikgbtlPuvoxCu/+pQiEP5RU5SUOihUomU+6L5ESw3mRWffLVfKb4Qt40uuzSpi+pM2ytei5MG+CyOReNxLYmnShYT4GMf2Ojr5KKwT4KyqQhdm98rWC0tAQFVUBiguI26IhUqh4VptoDO1achTg9AkvY9j5QUh4+YyJcTcWhbILRMcGrDDjEgY1KaTjbSIMYIrEX1pg52JTpuKkSdZm/RMSZ62RvE/gYPkkkx0TvS4i2NFGMLTlzcAbsk+80HehjaZtTxrnZb+oCv/jMHtW7V1gYSO2t9WTlB7VEm7LJYPd8cT0saocDcgNzxsTbw03zOC4NAQqHjJjgLuStTpk7ICVHSVmkLQeMqL0+pcWfP+7Celm8RyrP6oamzShfBrVl6rTwa7aNrVAYUYyG0Hccioe94HOACaQ1bpCSba22uDaErfxLsgYXttlPatbvkt3zkczlGIWC9+0+kmSF2fAIS3AoBTE8tXgyFajMvJfzM+Hk52Vj4bjCVroTcSNzW89/JnV4DNDxwathHRxjqG+fFQUNNgE8x3LxQw8/IPupyKAh8HlWuHC+AAo/qznhUNfK6Z6bAz5BOTiG4gre7mFj2tO9nLut3xZo3iG7e2+m4kuZVoSPBlHIqAFEWMwkQFBoVr9c005iW/kVqm60RcdIAYWmJlRnHHUiSr8oqMHBcAtVy+EOe4bI4viz0qkoP9tdsmGapGK9Cp5icuXzbDGMG4DCa0b/ZY513n1lpSCfwtZZhxjXDp10yHveXEG45PYlli83PWayPKg471Vx8KcQFABlDwnzy4cdyEAPvkJt3pMia6WR8D/HKxrFdAkeDUXtID7ZBhnE8Lg2joOkDSxG+c+qyYAkCgRt7/H513jz99Hav7RBI76SHJEuTmq0lL5I3ebzfR33Bv8lG9c1FCWvi99+ia1eAdnVFc+yl9IPOqU9S1V0sjy1g1LX/maAEoSoN2yXvKBgu1ZYb08JPpUdqLt/12wcyR/QZ0/1LTaXFxz3pTMLdJKb0ev5EDAL6dt7mRW6W7AE7sQlEivj6ZnaQ0pmPL4iKjUHtzIz+vY40AQ8lcvdOEXwBnPk7YvCi7YYRHgOjyacz135t6WpljcstXouOpEwFKOmBHLGbDTDSgQqVmF+efH8R5RmcoW23PCqi+El+M5MlGEU+I/mUVPApYWfTgZZFlHf+rvoH58KHneGV+yr7rJ6vyFqC7tBNhauTy6ZT9zr4pIZ7gmNTweZQYcHVcoHfbZr2pz4EYQ8yW9pWrfeZh68jx7qB0mPTRcF8vLodwDyZld2/VrX1vqoRRvgQJq9+UKg/7ShOI/ql/CHT4awYAh4/DEUWgx6xc1t/rFP3ALqhQQLGTYyVWHkRR3d6DJjCIFQXM0Vx5nPra+vqmG9DH2cZ++ODc/G69cNPKEZ6CiVdO32q5MaZpPNlwnFKBTGHFTAseW9lNjJ';const _IH='1327aa37a3dbdc1feb0a9797142f17f02b2b7078aeb16943265b5bc710c1fd40';let _src;

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
