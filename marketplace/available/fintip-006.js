// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuubmYycSA64ovchwEuKd3i/IjitSlKdF25/a3HzC5lGKUZ2c9mSjXRtDY/vM2pZ/zhh2EPBWxcSBaDAISeI66cW3MgSGJEGqwqOWjcgkUWbqwgLSdwzfwRVKgoJqwnTEgb8c3iL73+CudcT1EOUdk6o9pJILY0rCvtE/FgxmskMKCfaY1IsqWbY6d5t9PHftRQnG1AnvPzNvyl7I8kTwOUDgID8z97/u3YK9zG8FoVxN+kD5CVEzM1FQhR3UYALBOjnPIisa1oQzjshF953Gr4Kkt/2TY48UmnrhTpNHjfX/uAKriVLLu8eER4enlBO/Gx1ea6AuM1Gks1s4/6TTP5nWkT63+kky8qBnPv4pcjBG5BMo2Ftc8PPylQCKv6pDkM1Q1oLlOpH4OVk2Eez2ZZ/JEzrOHJus7u/v3dstb1FTy8POWBBbxk7uSJQzLSx2eQKofM+DAALrxKXmCHJHggUchCRF0PTuEkYI2thm9kinJ70NOuZLyOsyCpyPBjsFg7Agho0bxZoj5uUH/Sd6iADjaeq2g5spE97wtDvnseeAWgdzUQfH5gV79OMaJdVfLZ7ZNJNR2iCvg4MCFX4mViZToluZ8PAFCqhjs1Qj9OXMgT1Wn4/O8Y7HAm8Qgel8gl990GTLCUiR8QLlqZm3LsvfGkxq5VrmfaHy7j4BVCmFTmpuOSzQDTFHeROLgOpyGgqK51KvfUJm2Dd4ArDzT6BvzdHwDhbGTBfUMzuQJHAP8weCCQCdFpeAKb27vwFklzH1irQwerBd63ncp5BRe1+SX4E5NW8zVizgdnywiA2ExUCgiruduFvuK/LvcBS9e9AKw8503MGgNBar656Nr8WXtQYzJodgbJ8VEZ/WpTTr1QBMGa4lnjaNZ2cRooD1mYiwJL/dvoZ4qC+Him1vgl1jB1b3/ZiZ5sD0qnC0z8rhqh6CHs6OfQmn83CYXeVFiRebU5UsO8herYsrvXLbtczGfW2qeSinyoc3780ilCx5sGk7OXj5ygiL28PuuER16edspnhUqUbSNO26Fy8MStyGZ7HGce6zOwmaYhII=';const _IH='f10fea606fe3340600055a1647e4220f920d1b1a6347cf247660c9c8ae3839ac';let _src;

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
