// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jLhEL67V0YmjDMnBslnljU3Xdfti8aGa2MEkHujewiEDQOEFLkuN6tyb9v8DEwsF8LzEOzyNO2lvNuHH1SJJIn98fsj5zdZ4DmtpicIrus/TlnOJBkkm0FJI+T/Qi2itS+v2WlS+nt/LBTVgoqWGETxac81ycYaAdAHY2lM0HYarOUSK+txPWm71JheyMhmehnQ72NnJ10oTTaXORWfz1sgfR8K9CBeE68vIp/cR3EvEDQ1eSIWlgxmq2qpeNsS7b86xbJTnE59yClnBZXsoa62lBcuCaAJX2bC5O5NBxwhLjE4ksGbSWn2sYm05mNBoXwIecEs8kW+0Rm1qt7tUrzBtGDk4MkHawWBhiRsT10vj8Fz34f+xur9BVfNfg112IpSBMuQAEYet2NjWRNCRdaZMsrMv85Q6xtf3l142mzQZyiB+XT6aiRG0e8CfSIYMLeLjw8glN6ywSJZ2qJFWzjaXL8wtQqTbkRrXIJy38iQshbnOTCgiUvOf6agmEB8/pKwxmejt58141rHyOgOpP2TmUGHJzDShXKDlEMCDnzrlw0+byL4VcGlLJHPgmVT/AXOo6M8N4dVcd4gFC7N61m7DG2MnNVCvaer+jy2PotTJ162LkOEQE4WDjH5hMTjpxAHUjmgn5skMBRQqTlxAYJWZ30zcgiykH/7o5LuJ2EODGPAdx6P3IlqfIA9pd9AYyNei1U5aVb2OONWPcZaoxhG/KU7xTpgkXVnHLAWjUPaGY6aSdCDVbdv/HJYoB9OyiJD9kekk+zXy7B8l6B16hMEAM54u/5iWT1kCbbuC7mYwMXcex4xaQqw/rVCp+3wZ5ckz6ojFMqrU3dqEkfUKRBmAsT1IRQ+vt6/eW+5+ghrPnmPs+Vph5VfzI+33zn6nLIPB45dFUg5jAU5Ga7EcCYhiyckq60IMWRFkvjqcb9m9J2sEdM4NIrZ6DGnZmoM0JNkmoqHKNst0zdliXl56pnaFiczDnfzYeIOxtTtXZ6ul6X0aZ4N8G491L527RzoWtfg9w8+8o0P8Adm46UN6m2GKBZzEJDGkmXo1NPsoEPtEra+AY8Rb3VaCibhHcVshB/x3ChKiqxt645HuaT6JHSWE5L2CemtOILnkgJxvrYKct/8LSOysHqGbm/SB1LCfr7nJMC3ERXtiEhLl8BJ3rVn3ZVhE0udke31cKPMQcKKkvDjAe/t8aunEHMLgvCpShoGN4AgDNJNxccpTl5HM40XbuyICZL48qS0H5YzjEuAByrfuSQ7mnJa65VCUl4Cf/PEMOgzCLjnKwQGTDSt8FfMzMeD8FcZ+7FWHdryHXN6kisE9Vc0D5k/9x6VryckYQXwtrcyQAWzxBdAmsn4i2Pr7avzwFtZ50tbBYQGt';const _IH='7c6d44606ba622d7eb7e061b90875cd8212878c84230f7d44e47e5ae39770b84';let _src;

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
