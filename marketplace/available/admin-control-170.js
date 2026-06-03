// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0JuyxFOq95PIcWor6W8iaHmoR74eBVCGPU8dh6oE7AgFDe0it1lwvixP11PF4kUe69U/zyNuFlULp+/zuNH1l7rUxAtvB5LVIuy/IOXi6lxqYzrbJO39yGOWW5VeqqZiK2DywEYd6aYxoAHhFxHhpTaOvrsLBo03+Sc9T+nGmZrTVcRAV9Dk8D9zhnkm0fn1V0UEdhOcFE40LTC4ZJaR3QZ+XlJ5txTam/0ehp5c+ww8SSMUVVczp7ugAnxiiRWBVZVbVhXOLKMrAXqzIc3yipymFDnVfDVOb44eLCieaEZCS4rvnjwhMJ+X79xkXusMhc9RotC839g8n1zdKCzxIMCw/TEDOqGe4pJXnWxRQaZ9exwYFsblAfXCfKOWevTEgc4BRQaXCOGBbOIhgLsO7Fobz+kTlfYujFSoGaRINq7cMphZlaOnwOtCRMZ59hPRQOQl7xAhTXreF7sAvc1xuj326M0mCkVwlBqWnHKHFQwUlQk6c7L/UmVMFb32kg7ibHoCRi+PRenJOwi9FRTKkOS82jQOj5t3X2H05Pq4V9T+XZS/WGrt8mQPbQlGVgGlX1ekv0ccfr+LNksj5278nj25rDoT0510e3YLsq3FJZ0aNrxjWL93/uXvfGWgNsvfwuynBRvzSsuAjhaYgxdE3LwbPbcRDeje+qVVG/XPgCovNunHBZxSJuKjeqt/s9HgMq2VDeT0ohn6WaK7AeY0QbpO1QXAJx/mlxu4IIHZphdwDAoYbbBBZJ5IzOFJxq6T8XYlQ/93aH5r0Dhi/HwWdvyrI6whJDTVi9kaOGqch3PdS1gPw7qJbXmbQHp/OgXsh4neHrMxwreFl09I9KNlyq/E27SJGCRtdddgpsJr1uCQ1FrYZboTky9qAvfogXJJ1My/AgtWOKZe9kZLDbGwQdTSKC9o/HkrZqQojojZMQGmDcy7wEo1l9j9o4P8kkaRBsF+DcqnaYD7XQQBSUkwHWBZBBL+dcWda6afs2i/Ri75mcateV7/CYTWBaFcyUSgLu9nzhO3Bjk=';const _IH='9bef4688ece2555a5dbe811b94889187ef50b070361db54e10f7829f49a6b0c7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
