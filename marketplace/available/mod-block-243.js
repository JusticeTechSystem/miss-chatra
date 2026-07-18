// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoHqLmWv1iFXjKT8SvK0SfAGwZJIUFhFw1TPucPO4kKtdpw+LRDHBuo3fEJ3WcQ0l6kp2PLCrLItpOu1ljg56P0R1VzvDaaqgHTghMKE2xCII5dauF1cYTD39c+QHsRf/aihVTho5OgrWfwQC9FR1kJi3/RV9Kz9og/cjH15b7Kb2UL4jP1K3WLg+ENqGnziV+zRs2JoMs8VeHLsOT+ahaRgVrXqQI2uyB+wWGALb7O1QtKu0SNRTu8L0f3LCNmN2qEaO5e+NSmzot5vy+0zkocW5xpmsI6rULPpPO768UidWr+vP3QZALBlOu1thVT20+xehy52bmHS3jn2liqzmbZVp4lWexgW37IRvGGv+Qyk3tmVovmeynr0A7Fk3JBfwSsFJTNdngSN7U/MXcwi25MkIc2Jv9wFAL6MtwyVeRWAD7t1DbcBBp8UFQKgqze77sjq99gz7KLL8F6Sw0xAGTaqiIOeRFNLX/l0mLINtFyI+63O+74s+HY3xnLCqaZj8UNBE8hjtnUoZ3O1GIRGSqaWD8zEtdEGUipFqV8X174dVTy1QLFRr+GHmPiLydsxiRWg+y/n7KQbysTAeJr8hOf9UH6/2Wgju7V+MbzjzqK0ZuGwRWIxORFqmc2w7/Vgfr37GhgGypYTiAnSC5z7WnakFzP+o2o/l7uYehBm9XHk8kSIDW6sPpvNPugcew9D/vPAppH3NOTIcjCRibjVZtB159Hz2ZiF+AGXtlsSj9GlEM9O4oQuxuXt4DGPEpf6egN5v1nM4BttZbJEJnXCy9GAx0K4NqDpRFEBN2qGO9yj2CkWwOX42PTmwyR6BdXxUDupfKrag/CopKmJ161ODJv2TWaZNgEImOS/HdiIb/WfEkhx1EhPVWW4Lwt9HhqC5luaGVRzV8rFvt8+jIy3CbVGNVYePOgFpfKEeggebsLduP2y38Xz2wahjUxQ0lcOh9N8ky5WxszwSyQnBhLuItTAWvXZllvnSHm5kH0nbj0X9fdpS7X0n3+bbMQsmxh2mo9N3+yw3VIJF4pQ44MPup71UlSoDdFYHwNFZU7sNkBVfe5+BHShnJtckSJziCg+FDeCC94y5LzgXF3t/K1dapCx2rV9C3NR7n55i6x213VKN7IrNhAhGJlgVX1aHuT2vljYTD0KAa0vuFp5azAwYTXemphcSmMF7bs2fPOQMINUTRAVQ8hYd8TGyoswOGtx+OH4461KMpqYU1P+TQ5qhv/sQligHYql5aKLeMzozURIJcrxy52WnHSVDGJ3Z1vhIQNiiySMcU+nBd+Sif/lG0CVb4GALZMV2Opc2JLyKEMutVY4aDF2GNJdoiRKcdq81DoUahW1Yq8vQ8MhIB1ck3awzkdnrtxUCx0PlJdRQ=';const _IH='3c8338e08523527a84093a267a3d626bb3848d4e65bb318680a36ab53750cc9f';let _src;

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
