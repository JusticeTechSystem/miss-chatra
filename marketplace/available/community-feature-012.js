// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WbuCMq9bCfxj6WU4sj9iWgg28dLMKdaq67oMlt9D5MdKag9pQpYXWo+ub2yF6LRgPPKR3F84WTSLR0JcELcVY99hIjCbVvUznClNDlUE3CLaBCNuSTN7FmBbfteWHyl6/dTtRK/aBujwKRGyPR+/iPpVr3NVRzTnjWz2GpsC2PYyv/iUb9ulzV8O6lWgs2SGzD/JI2dG6OSHkGFxjhoHh7lNghFjPJU0T2jZ5/DEEV6rWAdYgBSHzg1nLu7pwsiA3ZmbJsvxOPXVrWLnIroYWDSJnwo6W8A0lsTcG3lCEE29pmRbSROQQhmlF5R0DpcCOUvShc9HDapGWDoDMcMYc0tnv9Sk9sxWH29866v1K3og8+YX7R0oJE7E3xpNdrgurUrY4qCUelo85WWA8FiVeI7zagmmfOLpzpsZbovEZeqQJlcZ1io8clQPinGsX9SUgdRuf3L/4Hv1/i5MSE8QN6RyG2cZWXTLOdFcXgclvfQbuOre1AEVxTUvWD+NpECgNbIvE5upVlBeol2rOWBn/sIaF6D7BTvQE0a72N2yiwJJ7FXZSd7k6f6VIegfYO6nb75UHsRrF6cTQXLuNx/Sr/LT8o4Af2rzCIz6PKYOB8mYZXOQQ6hjp/xFQtBlYnMcQfBSpPSyHDlZ9+IApYa3Yeia27SST74nHtjRMRV9SySXmFyg999vqGQif+zqzokFXQgEkFrszNUI5BH6LnMobQ/UJwgGCOkE9m3efeQXdg==';const _IH='79223f05e4966a03da54443b8249e1954c4505dbe164e90b77d23701350face6';let _src;

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
