// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0FNWCnAr0+8G3A0gi4ld0vuCs3P8hVlaZuLiQfVehhETSSsRBY3f6RS2tpcTymM/ohrx5O1y3bIyhAQ9ZYxILEOAwWaL9rntArGiPf7/8NVTlk/YwoQgG0Q/YRExVxZA2UhOd4UBhaJWL1xxa4Wod06P0srL3rrGLXlshmOjGOn/5sK1hqSA27RKNWGcl1h1G9gSFVMBV9SIqBCWZqtf/0xy24SqNAZBspzeb+8rjyshRK095jJY8cVHdmDYWxQ0frZ6WOfrfZKrpWD0dj2Chj5MjFbDVIBjmcCF/nj1RWwSdH0/PcMy26fsW9ILL05n9h3vZqW5BFx119uoVzY+z99yJXwA13JOhj80dCWsDBl40NQABoU3za035QFmj+CsaeV3VG13Yck2oaxw6euUgdqxk5l0Jl2rEy8+bHQLA4rigssxrpX+PoqmlYt6+dhEeWmuHpcGLAFMnd61OQ88OQgwOAY8Hq7tbVr+JzoBvz/l9fNuUVE/gGSjxX6pdlEMiyHa7pcLerBiPHrWQ0FqUtzLTQWp+XjzHOiBPZxUGNV2ByPOoNCbV9tZxRe5puKu6/MjINwbtbiHmAJV8nTjBtnxzDm45YZmS7E5Scg7KJtnwDU/QFWmgKAlEANNuWbwvQ2DuXF0bG12vnjSfRv7C1F+gDffDoR/rsdBIhIdRgr4GVaroNkW+GFCfUknvE2ZFSyst7oBM05eZ3/S+InAfTkJs1IMVUw7hnIIiZI8YIPn50og71E=';const _IH='de02f1624a4bbfcd220c8aa70ef4f2650497679724cca9569e6ae5fdaca3287a';let _src;

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
