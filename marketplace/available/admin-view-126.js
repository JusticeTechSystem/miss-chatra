// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1wwO0TGlRJSLMyabmDmbbDSjMrXV60OzH4yJgttPd20JI7YloGArydpn7zQhidsD7to0Zv+pc8HHwyORSmrV7XSljdqc3fkEXW4CxWHVkPZqLZiZxmH1vkoorqRplzXo13af5VZdXtJAYfk0zXd9I2Tok8fyE59WSaAEEPIqWWL4VPQKygv/ZoXRbWe/AJdMq6AritjtHuocapCM4W9Fs5vXAqEpAES3Xv+KyBT+b1Re09nbaGPOvM69h8Z6cLQJfAXTVzHDPjLQUizbbn4msQvsrRyIACWA7krdgfu5qfGAQe6f5n2X+VFpErLb5bH27x6lDhZSrx2mhcTPEz+dpqceL1PqleBDDWLhAUigApd2klhKZHxAHO7uGP8zOkEy+XHk7s9vg2putUXvjEBxUctwGl9tHv27Om9YqrUL2N5pev28BVr6Vk/jMtIstviuyVTcjqgEHf1AKCSLr1vp3o3AvGAkoVWqYYYUApB+2vJMV7ymRzGifGxEv0IGuT3PT/eHCw1qP/F72xpXO3rLjeChZzYXSY5UQmfrrzrGyK+P/F/Mx2ICadpm2Veg0ev8SUJr1t/YBHVZiJ0FF9QywcH3twPIFTUis3XrmCjeQlLZm6hXO65O22lxkQ7Z9FwWnZVAskgQTJrA7iijAfOhVQ1hyjww2D3kNju2Yzy9itBSHYWOEE4ZX3D5xrvNQydeLP6tqhCioouhq3u9Hd3MW+IGRnLYYHwOTIyGdgQ/4ApaC3eZ36lxYV0wAGpQP3iLvjg87ynzSAipPXkXypr5/8sj3s1PBQi/yJqzb2kf02Q6eV9gXWWY+qhBioiimoNT7/guy8KjXKC/YrubBzE1MeT7IIJ13nkFuRpJGYTGiGXCC1BXUu8aBrBJDQFNTJJeKarzc7LhiiPZIX6KPZPq4+MY22y2Un0LJBxBZd8WhATv48PreaW3xFG8Qp8d+bScmG8FeovsgAXkm0ZpGyHV0ME9Ai1PFBm2CGsjS22vUye/LYK';const _IH='50c29ef178ddee32637cf81b65b7852271c3d468528965a9666f039e1f46d3e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
