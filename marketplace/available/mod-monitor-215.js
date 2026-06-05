// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LqID86KrLnQ6cZEVHrPrV8gLQdglVQDQHdvjwKPLYFIQCEljhdk1m6AfL8LBKCP6WGL7/cz+M/SMlfxQ+WNXGPnvoSJKdBj4Pw+Zt/c08kIzIuejndP7uPo8pyl7j2SsPeI0alWuDT2JxBJos4wRJm8n75dlDYiyys84pBvbaZcA8kmQ1Q4OT4kExNidyiGNZbsfbYyWJ1pkyLV3kgQwEOBro+w1ql3As/k/lwW+VX0vQ1JsgzbgGhDxWqUnE/lfrYzLFI3FKIL5hK07MFRpJPfJKHX/KpA9dBCmL7L53QpGo6h6VBGwQKgmHUUhl49T0GFNbnvZtRAfgUGCpP97h32BuMWNQRsYn4dyQgINaDQ6/JadZqA6aultV1658W8YW/VtgGsyCTMjnEtK4l48OMpgKTNZJiNRDvQcjP0mJvOFBZDHURl1KDYxlyR04LcGct3GRMcsCQNZbwyemvfoRBYLG++TMGSoV9JWEQ9yFdmjFNmf+sKX+QgIzvUOIkSaGaumGKoYl5QKbcE+P5PX23u4EmAwYT1ufipc0owm2fvADdfuk+TOOnmbW3Wym3FUJIqNsP74RgI9mBCtVK5W8T6ZQZ8n+Xin3x1BrvVgURZVvNDlcFeyruwD5NKgaJys7OYjpTuDA4aFx+26o6dHzn6BlWC9mx7MC64Owf/NPuViN/X5PzSykeBR8wnUBcpy6VEGUeMzqngkBlVzhK+mRwo/O5yNhhyOEdG2LQklTJ14FcNReYmayrD6g4EiNdjjT0LQgBzf5O1pPIy/YOI0aC7/cG6P6PhmYLPDIVYH8PpfQKyAvisYuuFhjNgC1JRiFFt8rsbcFAh+QQyTpPupdGbREAnbcvOZ5N9BVHAOyTUiaBs80EL37w5VF4PCqUuqY4Ds6qbgmRNSkVz8bWvrqeAE4IZVyHhrCuzPPmPITP7KcEs1eQKngDzm/9ZR359FodTFoL8ag3+8cFMXZKcMcAEGHB2E19wt9RCGq35tQ7nAVHSW/wFGm2E831AVeE3EDn3eSudzvmxQJHYVxeJ/SQNidyc9IaF4CQKIe4MB72neEwbifuQqzO8KQB4jJyjLztOV9zxO7o6dwPqK8GPxfLHwHLlllanIqprg8neOHWmp+OPik+Tz1w52lPyefAalzftrD2b7QGpivcJvkBKsQylRdYnogojbPx8ocI9oVUBo1zvrjNAjyc4lWgyBVGtk+4yWYOwvjhvA6A3H4rBUme804f04Rj4ev5L/DcOn1w2lt8CSeQYWedwAjYb7THOfCL4Kh98m+a6GNTICzcPJC5uwsWMBmtGhtDk6TFjrqQ5HowZb5VUIafEYsX1H00LbebRKgP1A/+gDtMGOZSgqzHp6L4M5Un8Xx5zJz6hbp8vZ8Lk3UYdPS83FPib6hDIsEiY=';const _IH='141b319b421b666037488a3745f2290d74d69789ec53aefcee3bd4d98667e98f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
