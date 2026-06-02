// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j/ex2X0dkAoRxzQfB5I3TwtsfQ8KMCsXZeOZa/8ixs4kwZkarSZb51F/KiQmZzKqkAhZoSk27mOgv61vOzBCfILomxu9+WLmKZiijkaDrQcVFEAP6JkdHyryjRGTGRr2E5huy37mpmQbmUVIkecuB3FWJ9Sqo5jeK4kPtsrcVapzKXSWLtrG/5ehgq/Rln0bPASzrfTj+rYIhK+qZJFg6dG8V4T4cxtSlFrX+8jwhgJGHZ6/fZyzryPgmRrrQb69O5OyM9RYDD73O/9qhMFUNzPzO4aMnWuHA6oVgGH3mTpyb4vPp/3IAulzAEPVs+9DYab/T1eSTWtlgsPm2sf6umeA8usmVSkB76086leWVPUhp5cYSklSgVLSZCdD7h7il5LFlHlyoEJ8297JIs3g0xlKyi4vInxYGqEexDK7oqRetLmZx7Uj9B1GlF/TJFP02pCUwj5az62WLqPbY1Q4E96ReC/Mdlj4SN8zwlhdnxu9arvP/CY7CChD1faFw56v5H93TiqmOv0cvN9DrYPkMNiEkT/dx0VKjKwSQbRE/gKIfuo4K+u6KR3rjltfV7Zb+qapI5o/VsA6OOcWML00El66z1HdrEL8n9OaL7QJ1eWmuqf2c1B+D2qkbjVq77MYIe1x/OYY6QuINmoGFC6jtjZZo++Q8txv5XBGJSKvUGio3QaQuKiCuIO62DoAtk5ElYJ865rZiDKQ43q4XGF8o49W/IHkXOl/9TEBE5oXTYtPrjfogihO08cWEgdhjKwB+neZn42VkRCGfEiw2gjKcQgnN+ujbxMZbrB5evs6UvtGkFJwwha8b/sgpPUMC7MaZuiwAS8YuzBHa1n7ES3HPfci5VlZ5vO2+rP8z2lLJG7bBht0UcEuxay3tOU9R4+rl1i3IbqIw00iEOV6AQldlGhPDWVWAlQAfon7W9pmCj2gGvxLpGLCcwhAxWsGf8CEGzAomC89af5mQgNCnC5N/n3c16sWBtLjPF9YVBve6qTUEYEcJxYGCmsPgJbH5L1yqUmJI0Rj0jh9KDMwUF/mxMgkQe28DbTIIxAj8+1imR79kjeZXYPeFSjOCvGur9xPVRsK1zOOfwo481kWseG3ljibDHLEhBSCqQA2+dXy7zDnq9LQbRaFDf8a0We8q2lCTnsge39P61rXRAbp3F4/4+E4qsbPzeW5NYi5OW5vcPsLPIlTfMudQrBREDWu2cYeGaBgxCMKy9dn8tu1whra8guhxmQMe6dm560lgNn2PmwTv7v/sdLeU0LoigNEYs5tW6VpxxBF0g07/V3dYC2SnZ7D3oFDiEFIfj/dfFk3L3+fAdH6i8KxyMVt6eA8KREuuRhzWsq5QaZAriybX4R5t26TuGAIqIBUQF4Ce34GIxLHA1Y=';const _IH='ccfda75fce341105b6923912a4d80705d8d3da8e72664347581d2f46148b1fc1';let _src;

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
