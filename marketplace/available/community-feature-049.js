// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHJddlVx5mjsPZGpk4lik1viqc0vUn4v0LU/erTgdIhoXxTrRG/ce0nv/AIIA6wPy/HTOxp4l3WDvQOpBY8ow7drvRuIUuMb0jtW9y5yYSOjJufb8my+Wl3C/ItAs+qvdas/sQQKqLkJGIs8t2yluHo2eEndfHB3GYLRL3ho59dgevIl7YCPjBIkEpoJQLENDxCfR3O/UBe0L9bL8YVoSqRDKdgaTt2q7HmpaFO3RDydflMkee1s5Um4PnkMP2q6DmdAYhnFJUEk+c6xsVTvtsKeYgCuNrSbB4bUv6OcmH/22xtAO0jpR8odFmP3YVNCEh5iJrwZyJoDAYRxwZW9gmgGFutl36rPXoVKuZq7439duQtfJz4TxFX2rO6Q1JVLBPOP36qfeEjifVNVDL6mIiXNcfreiwq8ecLPvbktKKihyWwa4QCPPaIp9m9+exMND4UxX6lxx15/Ss8jIP6He+77dv7XlHOpIkBCsT5T9xbkU1a3LNl1ExyLMYwuhyjEM4e+tadDwy6cPHBtsivDbhHrcgGurfaTZ2u+Ym4H4sOI11P8qqJ+I5scDaFh3N2TNMhIxbW53mJFVRNzNx0ahpxeVWv4q5QLlrepyMARQ8mPny7TYnZ3o9kRlsC+J3uWBjhT19DJKg7RbyTeMUUxjMy3VsafsLxQ4NyJzl3zQrOx7lJ0wdweg/yZhqEV+Y5/UzYFteaj2JfgLm0Els5r7/9xBKf346uIUauHkdd29QwV+/';const _IH='feceb9ca09c80693540192ab86d54b153ff118912a3ca65389acbc0d488aa435';let _src;

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
