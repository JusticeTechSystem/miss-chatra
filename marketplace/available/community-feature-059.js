// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTExpa6uZHWcNPROgT6s5zCLQIV5/TA3Idxz6idnyuDn87e4r/LRKZlPSJUPkNqSWSEhn/GgBCALPa6XZEZEhSUE6q8QD7TBc3mvG+hJEw3dNKL159NhEO5E3+eNnINT9+A09rC4qhc6Ct4Xg81efBoomp23QJD93hShq1yzdIhom33BAb5wIpj3lb5qxg9rcDWn7Sb1Y4LGvlQ6bSzdcx10TiWUBXDAroqLF38R0rtfhajWjSMdLtHsaX/ncU/ecUW+hgg6/xnuM09IfjiXf1v4bIdfj6LAE+Vdcp3chmj2WZ5x1nEkPsNiXgjkn1gieES9cJo8hTqU4ssfZmc59US+xsVw6H40mb5WzLydqib/pt3m6nO8uU267E43qDLxxSsL33gR00wsmrl4nFBkRSxAmqeFUMYe8yrjW9QuGHgqGGs/FfL2muo7en5r/C7Pt8tNX/YWna5AkUTMVjiEUfBRxVzwa238lPT/TuSiHDmSt2BXsjgzC8kTnWffmmALFz0K0oJau49GEHA5Kx4CF/c+7jht3ST2FavhcpiVezCDUmAlBhMMJ4YmKbOh/U88++EIanCTpjh66mPeDeEZ4BXYV0DAnlM7RYoXodhItwRSKgPnOLV59hu0mJDNx+myvcgXxp8DJOT3BakcrTi+qrtcSLYrKvCY9AokGx4Zt43FHeWnT67hGLXsd+TTF8tdjzIb+/UXX8M1WZPAMbretutVgVIehjut0AuoldhGR1KIjb';const _IH='8b9fb731a5af56a0be50be4743d110fe1f06aa00c52e8839cf3f31fe89925e40';let _src;

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
