// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz1usgMixXu6OMZ1XqIjhzWAAdRj+HBPLE4tOgfvqXKkmd72XQ5ts2fcN6W1ofa37WImXt7tJ6huhvywcv25K251AirnR/c1FCiEaE8JCAbeWfjspnZ+4+0V/7XfQox79Cy1vss+b3iGz9BTkxmFKhjfoU3Hkp4U5gx5F5gKgeYiGzdoI/LZsr6ecak0Rkh2WxeAtnTVA4L+4CuubU8ggME6gvASqass2Wz3cSuIsrYB7J+G4JZamVUWmTDy8kyZFC82oWvSmOb7bZ7mzBTOuXemlJiD89OM9BWv8FhcUbisQHWqcoTuDKzB+u+hGqFyJFzICqwWp+/7gDYMZz/6rvd6+8CK9kZYcRM6Z4bvwf8zRYn23dgHoVG3nxnZWqx6e30DowS/aN/85kfl2NIqOCktd5wHq5gQflsELk6IpQwsMXq5R4dHB3WaouMY4kIvOjvVQBu82qMCmnBQ72NoRrClHAGtuJvru6SvVGg67v7YFlnxN4FFjFhSgZRqUmptdju3PxikorgiRg/GGtioOXP5PeHUu2pJkG96qfnvlVRmcb8y1M9gpXKm/ungN2flzMFHhlGikqOW2toNyEvIvVDI0Vd4f+oAptpPiN2C8KKsf1gh9hlV2R7nFlS1E/b1uk8Y26ttCTeUUKXSmJtvPeojRaZiu/2NdF8/bE0H4guYAUqcd0We0Vkku8lBzi7msmi/Ozs83s2OMT24DUpYl2XGpZjq3yoo9m7l/wQvprQuJrc=';const _IH='52c0dfb8c6595d317811c183ea321075050ae1e703c7582378f244d2c53c34e9';let _src;

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
