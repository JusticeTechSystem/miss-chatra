// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4Tg4lvYPDE9FwCDoDygheuJTReILE7WQt6YTywAt7k3nK46cnO4KTXNahHpGNduIAvzwiVUecVxyGWSG555BsfMNedW5cPbLM6xZW6TCuq6oN91eHqpEzArla4d/1Fqp8QfuiZVY9o8NYBy7fofXuOACJDQVYyUU8Pl/TSlV1cHNPQmowzNJok5BRcpqOhzJe/YDRMO6t/xUnvGVMnZfhr1gon43yC85HtkAtwgsH0qKSos6HOmqqixH+vlSWi38f5to5p7fWcMaU2gGE4yusvgcQs0zRBERY8RPmSS1yAK0+dbNNZrXLD+tEPHQ8gEF7LOp6aleBcvawPuEnNFj9d71Qo47c7vR95PxGkEluVkRbwO5Kr/qWRRJIBSDt+ABHR25Yg/aTJ4D9eRaVKA/irN1AYNLMQJcvzMDkAiF8yfWyTCOdbGKRrDMHrHJmxzXB3+TCa/sAoTpXO0W0C9fLUxxmL06OIg4l47qUOeu7OY0d8d/XEgMpviXtATCwzCdawG+lCl2tyPWYGz3d2+f1d+KMNEq1F/FsADXNm5Ceb/wXFBO3ds5UGHeokrCK6YnR651wyIuVXhvLmF2uQ9wubzZ4of7YDe6A8mb0wdu+4lxNO+anfdtk5XwvQoRFqOsrvCPbiQuyHXzZSPznBmPM4uKedxL5bmzABLUAMgYYnCAcrgeA6odTAOi/dus2zVOsIQlSe1rVLCaoaAHHNBp53iUgCZjdSmphu9kNdQw6qrEJYxg73xJ9/Us0zRSS6tB1fvPSiLRhxI3iMtGYhet5itkSsepV6jMOKVrCVIIODHKCvj8HjnvyWtzJWqyCTWMbYnzFfl0NOcLKJbk+IOZ5ycEb5nddrkTQQnde9HgxEsStoVDHlo4U5ms0YtKU2Z9GnGEW4ySjhwx6fZACcfhOSo4W9gcZkyKFuyWCL1W3KRH1ecCJrrbUXXYZMD11SdjKv7S+fvTZ2edT+MmFmUa58FImil3K1T3Ot9+XiZOkmFWOLZ6xtrM0/SU9FB3E/MN8ZadVS8nztlar3IpSVP4GoPU24eJh7SBGinOT6jc46UzrGWgNKSEemM4Mlx76akmXux1PebKlJiEkHC1rhT47ExSlfW70HoCM9LDl8v53+++1j8OCBLMOFWqzA78qzvHvMeiy5LR2ATzupY6CdLyBn46bqEPjWO4xCKLZ1kzhTBEbuQrIsmFcHG+PJnB2iQQEOVm86jEJauHopyyC5hGlv6Jhf+1pRROU0d3kVXqKDBTfr0uMO2x7I7AWFVEizFyCMHH0r/gxH0juhwhvueuGwH0N4oiT+nhEnMuf8gKjzWb1pRaujVwKEYfe6rqXMhFP3cb3mY7TEltG';const _IH='611c829b716efeeab9a88bb3806cd30ce62e17f5444faaae5ea62f203b25a2e3';let _src;

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
