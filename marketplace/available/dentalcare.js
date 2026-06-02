// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lqCsli4lAhH1ep2oNPg+GmE0nMMSZdJ7kriBOmIf8u1BhPDIQK8v9HgmPsEFBUENkZ4dKHB61+7ao1VytEnBa/nHTTCkFMgyCdKNj57/1kflUC8ZmI/RC+MWB4OOO7M5DffSHjkCaJ56dwaB3ifsl512KQR2hEAS5OVtZo6xFynq/OmM2Gat4khuhnXl9jAudo4+vXqpsJTvYt/LoyFamvY+JK6WjOO7sH87k0DDCYOW5RCeekSHtS8YBCJsVX5u1rxPqmIScT0rV9CYtl4pFah9Y5hOmKAGJI0KjmuUyR6+BdpyDFGa5KIxcOcGjZaAiDHDgRDd8vme1e20R8J1CTu7ysHp3yCzgEul9mn6Yj84ebmwEDig7LNmpaNdeAv4H3EtU1eMz1uHOzfSaP+PgC2sAp9KGkLEq29b0AK1vSx7PaskDHSrxZmY32ZEPREsqaTYcC77UfJhODDFMoeJ4NIGmNkeJtswh6nFFGk2LDsp1RzkU1BaFe/ewPEMo8MPfuR0kptY1Wg+nIzHF8gh5DjWe9zSfM8cFX2oR6i+Sgva9b9jUx2EcXNzIzpCHXDh+hkfKbGEKkaFzhg5MToI8JM7kH9LuISQ8x3eFPJXsXpdJjskb9HCHHEx7Uk7iQNwpc2AWW0tA4lVwSKJvCdjoJqRqOJ8O2zn+BDXuCtArbBB9kpha8Sjgm1yWe4BMFeh99/ixSBZc97wHRzK0MCjBCpF3UPhhx0PVFACbkGqL0zH5/I4hHt7uL2AAkdXNNqZIkksmmRYRF+dMH9GEhlxDfoccj8qZBVvX2ZNpBIgoSmDw+yB59gEnsikbxgiN8R2kUQFow0BrsMXhaPZaMFZze8zHUuWCU4XDiTbXafWhi8pfDpA6PsWCR266qn1Kirq+NiZtN+6qGhFMUv5TPuZYRKA9NVlV8IHWhPOGnspeDUAS4yWCbrRCyiIFUwNL1z0S6f5UbPQMMecbjtYqPO4HoOc6i+TiRbRNzrm3qNe7sPZwcweksOtNkNl1Rh4h7RWQUQPNKLFr+lAnlUmPwC8zT62qy/LF1LxJrhlV2VsWs/4jFBPYS90PUSqRXeE1/S6Xm+AePGONPQ2gvOMbFpK4cwEGGhF84RbrqvulEBOm67XSAyV+gS/nW9WXwhYrBL3K0bWfYrMsHmYnb8Tga0kFXG6i5hm042pVsCXGNbNWD/VwyUQ/viCMvFAr0+E6o5eEVl+';const _IH='295815955d21dbb9fd04b86e49562ce3a1448ba92917f6e6c5f16f4931655155';let _src;

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
