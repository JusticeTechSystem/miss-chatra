// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bzbJpTpgPGxLsW3KKps87iNRne9IrVdQFrBxATAoK4EKF80f6TAnx9nJukAgeTYeAStOf2rj41x+UVwVh/Y6Wz/o6ACt7svkYTrYg03j1ipKTYBMOyTSZ5Jr5bAAfi4vOPMO6B0bvwgtDezuMQIq4f7GAkZGRwApVlFl0NqUl9xXbQ9+/CNIamuyMhg1haEmHwbC/BVLIVWf+mSl3IjP783ZlwHisOuk8vzyzkvYhEeWt6hXSdDb6WmRvxTHljtIfim7PayrLzzmM8AS3m1k2BrhF1vSClfyVmqW7jxz6MnVlrzacMftC5kQzI7pbgjX1cRFOKx0ms921fLL7blfeWXyYslreSiJ/NX7go0RdLD1yafIyQkkNYbdvTECH9RmhIrOXpm6cfYfKWky7KGl9U/8/l+ZvmSjjgKZIrlA4GCTM9kbaYdW4vsJg6PWbLy4YL6W/B6MWFZ9f+413tXbEq2xKYitOq7CuKe1MZV1mVut/OqGrkWK/u3RD5/lKmUVbaL8tvV3SMLnpjfG+XA6a8tvtSkrXVq22n/jVfxeUMoEJk0pUZQdgobAFj8ZG/w0ZWcVrCLrYu9c6iiL4BDsVrUQwCkHzQQRX1DvxUE8WqRzSxaVBlr+igWMZeL7B1GWBIZA3lqyTdN91QNmkkwO7NObxFttUcVsTyWavQu8+9779Hr3A7J3hJW0larqoePX6W69Z/0myG80fINI6/OvRW8F7h+VFG2N05/OK5nntC6uGOs=';const _IH='58628b5b4a86252ebdf27f3f6e12a8551330536da8db7201d8282e1101628b2b';let _src;

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
