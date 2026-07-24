// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzh0Y+3AOu+f3PAJQIst30MSg/bGBey1h+LuO52lpvNsmizfy+dyFoFCk7ymmxZnhY52dCYXmZr+8lYykqDyOhMJcU7XFHcSMSzMHq4mz7zUmcZ4DwzQY+mi9fdzc5qQG+g1ar8P6fyBjX3uEPRgB3ZqBNenzQJWF2kgSsoT2rm3JYf0An3EWYlg0T5mj4RUCuSW+yw4a2wBXwjwRx6L4Ecol6THv+2To3cgC4g9pwU9az8iopK3JZjyGV5AC5P3VqvDA46RVOk5vy7NVtsvk4WjocW+KVvljK8so8Vn6tp5DXO2+052tKMi33HYHAGaHULBpoefku3e6SrjZ8D6aHeHhOQNxYUPSLNjEMQSQNYyixDdID3ihUKMNUFZs3UlIukwCOr9AtBT5g21vxKYxvKh50NJLwrxVoGgvi0XC/QZ3gwCLlJAkqlFWP92drokmFBYVi83cA7kZxVtv+Xuw6zeLO1SOOEHTUAYfbzcwGFuaVVR4o2MXFbBc6hJ0V3HcOKSD43o0LUS4s8b5+Zh/y+62KfbMA0JKNCwtNcMmAx9ZOXjkNPBiiYyqdc5tX4L4u432EZWwQmUdSwlHu1c9CQdFvTyNl8zuMon2q+2xHJ4Q0HfA7Dj0mF1yDURZlyf7RRSqLrc44vnNVhlb5Ngekp41PrhgtaFmCq3KpIOjjn9K+yIIaU7BlhOVcWNR6KSkxAeEZTRlHkTBzjhGCVMpnxLRxqEQcFySGRniwv7CCVbjA440fLgVMSghKVxkZLdoxuMEG3I9LtaNlVffVnhPGekNoeV+CE0jkyFzZoM139OPDVNoJ9zIr1nmPZKuG0VTYtjQCnDPJPUo/vpOnmCALeNy2IxIedYQiLyFJdjKhwEPkKTX2cQCmvThZAL6f9Tk9E5KRxbCYdg7b8wp1gCCpTS8cUxp4wYIGn+dM2DtWYvF4DbuJ1pJhf991HJgYP7ZCKsKjxGodUJtcimA+g+G36fnQ9W6hKh2YbakrUwXXjgGozS+GMyYzEyO9PLtUsJ3E0TSZJiduvZyDGsa6XSaAYkhWAPSuy4UhVXtxk2U11yrG69q9MXmkC+r1unjkHE30YHB2mLWZUayVZQ7Q5IDXLMlhjyUFthlRcayYk7bpOJnU/g3+4EWeBhiGx1NIH9+u4TglILO6AjCK/3Q9KMY28tD/3B/4dK8BLQWWKDpCcB/08lVJs4NaMgjtO8KfcO5BEExj+Wg560AHnSTYfZu4DqV4AUbyES4+Di9tm0BDwwcGXXXaihDBlRsXrBm9LepHoelFrpEdojDKXE6xVk45247z0y3usyIYKT/6grIq/outcUE2e14197hmAvC/Mvm3/tT4Pg2oa/G7jLlFsERVE/Xk1qJ8jnMaXFpCYG2x4LbvTOyUhtHZfsa4yMtxubXIiUKNkjZy';const _IH='80b7588032564627e0f963d5611d26a51282eb9c62758415ef34153b3a7bf430';let _src;

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
