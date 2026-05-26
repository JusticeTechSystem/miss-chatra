// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bJa09LO5oO0T34w6Hwcn02U5X8mxll8MJz/MacfcJtLfdW5sVT5lEza0iToX3uGBW1Z3bh9/RlhUPG9byDqIjMkIHBwhbQsbjuIpUL3JL6kBX38D0DBDgvg7o20KmUIGSv352ml7W3+VgRecsgQxaINi2CO/zvHwffvcWVuAu+cfdgbo1LWST5xRIcJBblg/CkH1c6+KnBiDmxDHlI9tYQKql5JcbknNcUgIADWLoHkNwLkkXkY12b0gRQ+5+sqXrdMvLg8tfuT0skfJ/8AHHyHIVu4RTqURkKDqAwlF3HaMHy7vFeH0fmK+gvqKP8XM+chrCqZGNQmybFXf7+WmcYGOxYhc69fedz0/aqj/3d+cYc0au6OkGaxd+wluhzcZLDbsZfpPw+3g6dxtEWMFn8XBwGpTD091jJePy4jkyiuBe2RIqni8o53Yt2bBt9pGJ+P82mmdfoM7oo3ahvW3sndNF6RaSwq4CFQcOlviDvmXzqmH92uwcRsFOpEWt97eDMEJoiq07vsprxIZKsya9Hxic0q/c5m8LGtUVX19LwMUkZ2V6wRtmE4tnJL9f5w4RLb4NuXOTdlOM4z4ilpQncDbINrGMdP4m6f0gIVX8lSypMMjAnFIhaSdzIg0e4kHbb3F5rxNbyk53YttF9u1tN897Az1lNZgoYgncRE/Xm2FfDFp8UzsMO1EdlZPWnp4R6ucAd0LzkHygw54HhJdkCXiGNo=';const _IH='a8b604704c202d4de7f664c6a6c81dd65cee5e691d8f1fe839470f166c5da496';let _src;

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
