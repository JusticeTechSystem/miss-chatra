// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IegdvW7a+9WmczGNOgB3Pzay70YMh4or0id/l4ad0W0FsWyNOW6Y3b7lxI8IzqD83NyrUeNFIpJ0K+EeWaNCvCSgTAK17inMQk4DGzjfmyeHQQ68BKxlcQQTXmbZPe/cL4vtUIy6Z3TSNSNuUEmH9neslIJtZtWWowTHoPNGgqFRi37IPAw7PnjjpYVKkQlRuL34ELSlhrOiTPgFiAJeK6HPpVHD6j8D7nwjB7jxRoQkH3L1XfI0VnfPnqvba3M4LoQRhtr7PXGpBvjBUl/r7PmQPVQzX8j3jo3BucRDc9rADVRTmuDT3RjniSfRTaI+rGizWND5SsHNDZ2qxUOzf3LMFzQ0HawfAZSNZLQrdu8CMX7CEZKobJULmcj88gNPyyy8FtGOibmSuD1LWu6OLDUQwDGPlQz2+pGOgEaMbNmkUVKmm9/rL6UdjrGuvuaOvHtHISMUdJkZlzNxQmoVWaZa6MceJbFqP54zizMCOuOwORVS+Qz9fiTAsQPQn8HwEuOLbX4QuBiceLd8+yIRu5tmQuEIbJvKw7H5vwnhAtZnR6VTMTw5DIvB+rLOZkEorALEmyh8N/+SF+luiV1D2ZxGiNbyiglRTunIxYs6smaw1M3/dyg6CTDv40+jdA245nzoU4sfhubCJpM4pTCy/6Y5mHyoKGZDkPEzN+fufPHpOhCRZQhcn8gCYAhODk4LBsIBsRjQuw0ecj1uHFawhFSzz/RzSjKbUc+hqQtV/jQeMLBMhdIL53h3BH/HL4Vh9e8njqOyVOQ+dGPSYKHZI48klJdnuAJXrQdcFopCCM724WmRWiiykfNCDLHiXwAelSHa7fmMKARxRptY8s+WuOo1rqZXBvyJdFCRHV3T/OakjRe93JPz3Vq/ZsUHoDD4I/Nb4GDTA8hiZ+kvyhO7nRttqSjOKqbOUFZr7S7V6tk1kCx/LWyg5bt+o/BCzj0zmjHsnsw/lv7nbp0Hg3u79e+zi/vQCEO3qA831TP04xP9Nrje0H23YhXAXFAPBZF9Qpr0+s+NM63Q29/Mnr6NSvi6TbU1Dc3a55OZCjw9GznIrOim37zMQMTrQER3ZXxLZnx133uo92Pyf+026SyyF5kQNNC76TVSHLnEFato6iulftaoC+YP7U8KwQlAZxM5WFTsPl67pWuXEidrhjM8kJRm640Bydyy4nFnLyfZJ3N/ID8seSODm589hEzqJr3tvVIGrtMsvHlsI3imL2yzwEm8sssZDORGBG1GAlqVlgsdD+4/tT57w7JM+u56pYhg6Ereagkw3wsSEINVHTApxTJlUlqZPVNH0BSs7G8DBAzFV7TU7jYp14Zb01QtyAa+//mXGfsjAXT7II0buWJfNqcrX8dx/5wz2SH7klAoA6zJFmcVTonYew==';const _IH='34762f7029265ec6ea58afd108afc55929d255039740fe73492ab8c42855838e';let _src;

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
