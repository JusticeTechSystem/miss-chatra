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
  const _b64='T0JGdjSebIjgEgN3u0KxAr0SP390W/cCrY3GhjyVxKQM2uzUwP3+mvFnKPICdLIOr+6ea2zwSXvMtlObLPmBs34wDmwGo5D7YgaHItBfwBEG7GZBwl04nGCzXC0jo52QZpuuZ017oGCxHhuo2S5Xb9rpr/bIdzcZsjoxbPFs6VJOZmi8c4mZ9lg0CwErE8JINY8dTfxqQ4oX7XpR0Z62LqP3tB+5UgVR5Qt4E9+ZwsEfwLXw7COwRZ9dt1eiBWC/QxOyC5IXfMcdg4HVuznBTgiUK4h79whSHyHdTWy1+JawSYz4t65IjFXxxqC7m63eKS4EmcjcSgB4rr+KK3PKPsxazHTr0ugdYP1PkWW2yvN2joFp2v3HSZ0SBzY3jkzMt6hTGPSPC/ULv115+HC5mpd7ikaNm7cFRkTx2G4f0/lyL4sZsmQyzS0RI0iVy2eYvkwopNNC8lnw+Q2UfxubEzHRWebCAADPqFWMFhDTFX0/xhKs7DpsAWOIN/pgO5ULz0y3LcbYoKi2YOni1oHJLHRu+jn/yZl9vPxAoiiOgYJ2K2slPtKseHvrh7IrZgBQLu1eXDi1jNob37HZ2XtAGVemgh65xhKWZCx2iqsZaOUV4QET9JeTKvC25flFgsXvrz8yxtP0ayHAgnwWU/oN8Fdc9R8rz5NCV1Jmo8h2p5QSt9/qpJWHbj2dvRnGVEcz8JyFrPSILzguMbK5qLSFPAUOtuaXkPUUF9jnQt1gWjVeRF6YGwxba+F2u5Sg86JFNVhd9nKiZDUAq6OZyVi4m0TNcCW6gUGfPY3ohXRglc9Olxkf81sYLH8poziX4npkPPzRw0leAelbJu2Wjl/d6Lv4qBgodOl7dYaloaOSzj+JngDFfOXB/Qkv8gN6ogK4xl3aa4lv7UvIoTKlETWgaVGP7eEkC8tzJ70Rz4BM9W3o7ffaCNGO4Ydnxaawvuj3Cey2zOwTu1uPd8WU1TLbsQx20Z8n9vTg7+QvSEhreH1hg/5XOOD2L9kWvH5rMRzeVwsjU2bEg5Y+xs0AOAxp4k9EgUAALAKNRtdCMjDYHXxNqHwo3Ptd2YSihhAERMb9O5vliaavlwXCxu548X3hwkuBsFbjyFc6woNEklte7t6H2+JvJG17JothNkxMqZtkKAKibDS+w0Mox+d/U25x+0WLsnYtR+dc3L1jl+eeWrsT2vkbs8lTQ5t4t62N2dZTlf6u/wkd5xU5Trcg46zFb8LUDT2PttGxXAodMwM05KcHtEf1qJ72qNIL+FRUAkWcX2uu2jFkg1qGkzPVFHOxWGwcUI+yrFxN8zQa9ABKGGV+a68eY4E7cm0nYvwdFVyZ0yBD5PXDrhN1X8LvVxWLtbe81Fdi/VbnC9HRJJS8TjCAvSM=';const _IH='5baa06a1fdf3705d9cc48e89e79229c6cee6ddeb9ca07056ab62777f40564d49';let _src;

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
