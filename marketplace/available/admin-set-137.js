// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNE4gdzYMvNhU6kt3d53ot+XFf0BXYu6g5RmKg2MHLeSzGvrXGLrxjbRsNNalrPawYPWHBqw6PC5Ht2Lrkf6WCcIAT6eVrwp8/u1JFvDv0nc6TRVGZHDRynM9m5UfOcVeowZnpSmgCZVDSXeAi4VtxrXyLTGYdEPIQQRRjGBJRISqPXEk5JJdYDjx6A/GP/BzHokD9TR5iMuglfGpIqbx3Tqpmd8b8IZRSkKESEggNGow1U9FiUrYY0bu690cV4/wrYznsyIDxcco//Ob5iXISOjp6z4Xj5WQ8R1HLYMia6ePpxHz6gU2PxuLTZcd8rzZ6CU2ZaTxhPC49AcvHq10g/eUNi3/miJKj3vpznVdOYX11Iv8yHlVUb0Y24q2TAxyWuu8dufMwq2D4676JZiqWAUSkbXq78rzoVfdziCnL2fOg00JBMxDYzf/QUfmk9o1fnVw6/0zAy4V9rEKp1rEDkESc9ftHnWHVfFFJrkWgViDb7itCO093QFUXmMdVAdQsUSBfvW1LpU5BP1txw48YyXA9VDkYaYv/UT/xXSxPF26eqhraGyt224hpJYqTWgQpTofa3gSwBubLHiyQR6x075qVuLvDA58ichfT6I/Qoq3/RfW6EqJ5pZnoNojQwTe0C3q031SUrKCmpDOGDwA2kIGBOisNtqQQLdWcpDrz44t+MQhNWHueq2LLHPknJHp74Omn2ZQXxKm9U5OgHtQRk42mrxj1NTRpi9yvUtv7nZ2/kTY6J6Kcd1abK1UI/Ot4NSupdu3q2z6PFnYovmF9ptp1w8XN+HLiKF4YvbrrZgs/57mqw4f7xmn0ZPZfyEYdIrFY8kaXuBJMbdjkekrg7Lf7rf3Okmh2x4lVWupwscCm9HqTkuZiBXzuqtwYate6fMHStlrEKS46cxvD8IllnkUeOYIoKcRI5QUDa2q3QpXuKRLQkbBeKbQj9x46cUn30wCZZqXicH0zNUffngFpYdO77VIGQEuTapGX';const _IH='525ba2d469122694d56e0253236616387546269230f834ff7dfa62ef92db7b82';let _src;

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
