// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kxv2Hp5X+E/Vcd71M5qGwcsrApt2L2snJtIkS6mdKgdMzdysGz7yJDAekieVaGbShPcLZDqQKj/wrrp1R58aBeOAM3isp//d3dT0VQGx0gMkUQNbxVWFYbVy09YWCB1AG+ASgM4guiTxGSvPydin+7aetHDan8KfjBQm564qttR32SUHXaLp/QLFZVEoGxj+dz9K1rXCrJoldrLIImn8TgZoYNYycLJ8qXXq3FJvBO3gFSDNGBtMX+UyPZN13qtexWtiqPyHq3wTIVP5ufO+RjBzJzjcr79bppQV+ItVnFj4NbDznm8HDIaF2xAnAmJ8hVJVJBSLo6D4NPlJRp9aDfB3qqUJHApXVvglTIggOQ8Ro7C2Dgye12b/KfM/am+MemAd+MnjXnbiHnqFsCjH1WWwzCVDM+M/NogykuIq1T2fCGUX1jfd4hFgHCig8mE96tlmGnxGLPXr/BM1Ub6Zr3S+HmP5kozZemcg2dZ/Xsn9NhDXCGo8oe3HZE5bsD3XZeer2li34N2dPloZSedqimNzxiLDK5P6yYCUD2G9aJuj6UJrEAgpHnUEKx4TvY+3tFum0RNb6cMEXZWZ9Q==';const _IH='67b01e3c230e63b2edbbae4eb2655d107451daaf7c4d6981a999cfdbb9fe06a7';let _src;

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
