// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7VvnIQWLXbhzzgjRfYFxAHoH55YDjDCWaZOtNpDAgPBi45UtmxeiBzYhQsr6ZZgTP3yJSau8opPJ6MxZQop8pSkxF/8sglgRBor2EK+E75JypFZzOsVR5Np4W7crckXPVE8sECH2X5P4BC2xF7H0FOEJZBYfb1T+zCv9NmhWvlqnGYfAzrp3cpZ7iJYXhoGD0mqHEyXJpq6ez7IB36F1j5esRYEdZ/kf5g0VdL/DsmJSdUjB1nBSrxe7oiO1wKKH8FK/XlSl/bw5MlkSaWIo1QOCJoRSrjaWedTZvcr/H+cLaEqgG8OrL8K3NDYZ/9XLsMo/Xm1Y/FAfe3weP1AS8mcRMJp2lnezG9nGCzVmUXuTe+nTCtyP8mx80Uo9Spo4NzFseMiKGLzydajKWgyNfrNMWBvmAlUgDZaOyUE5jKjpW6jQ8tUa0BTvvFlvysIo8Lole5ZPe9bx6sRu8L5w9xqGKp7kMZNZy+FyA01eLPZYIT+pWxibRiuMgchp8d/34UB6wpJolFOEgP6N7iP3LGciIshlEnT7RuQvAwRbaG+fGNr/jW1OT2VgfiqlBeO5QU0VmPDl6DrM8PrbVMlA17rZUQ+073cUI4kHARt7BAKNnYkHnSXkDrBq78C5bfYpW3wBhayp1qgkKlcNSX1d11VjZnisvRCKcize+PFH56Z5ludnNK25XksotXg/OtH9TR3S8gORXfo9bltF4W2OOFQDl8YxjDzgxgyTvn7vBlOY13c=';const _IH='e54086ebf174d7c4d3b09df8263b7504753eb3dbb47c7f75dcdaef20ab990834';let _src;

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
