// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhJBUavSoyjmARcgPycOBzyrpsOTVer7nDLqvpNT2/WT8BiGiYPA6xyxC5OhK9DGGhB5OsT/cOb2Ck6ciiBA7A9kV8EMuZl1kn346kWKQMTjZvxX/Dc7U5V75atG8NcFxHc70iXiH6LlONAGrMkhZJIbZSNfJcyvpTuy4pmiMyu8TQ/DBXv1606W7pV2TFxJsjrmZ2DkgdQWt38PULkE18k7JH28UtxD3u4GL2aSRNMYrOEhoC5LIzPq0GBCyZfTkV6cmXGXAMmscE3RsJl1baZPcr3DnspSPyBpRi7kzPoNiQkSMxVGMt4KUaYDtFj0om3Piw2h7W6TRPZTQMQQJ2r2tQYvGlTB/N5VbnTwHfLPqboi+2lnZE9CSuAqx1PPP5eaArMx2+d0tOVIr04PhefkQfLRDu7u9nVcpYnRpA1HeHHW3k9rcKWpc/MudpwK8aPDE6RONI8rPdueD13ZgjFE387X5xzzn++FN5etT7wbfgMjttQScB+zK8GYrprGD4Kzyhj41fIRGyiz1kwmT6OxfPoxGb+NIie/WidqNMhlk3TiSqr6l6PXCEwPmFLhUhpuSCHD8z9LzCYEAgXYI6P1Ny6wK9EOAoGXGS4g3lUNmo+gVelhH1V5m1NXzUxGeo86T6pKrrDmztchcfgiJkvLcD53KtnfywEBQYyy/HzNAmDdcjddcUltqk27rTqM4lnzQ6uZpSLpLcCUqii+YdzgmJxYiDJLq41Q7yM4B6el3p/mh1Sw==';const _IH='1202785fff727d63179e1f28c106a72de6c888dedf817ff1dcc1b4e8df312a8e';let _src;

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
