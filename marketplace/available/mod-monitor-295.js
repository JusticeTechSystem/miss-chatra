// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8sPlFGySdmaFVbJSNkGMmqSWIXfv/Iqp/+jblrUiVZJhW8Xk1OpGSGuW4vLQCZ4Fi0GU0Oh7j18R3dUcwiMxnOfhh9BW7DONup5IOT17u2pFiX8oC9wfJGXq00nsfV2eawbwLFIXb0L1l4hwBBC4ozhIxG+xshKDonMD/43iymZn9Ev2EQRaG/7Km/g6+QFnsmJJodD33DbaW/Ku1IUVkpixT6057bgt3FGOZsluWqn+z5lJWD9CKlZeDJwI16R5cdG6H7hFi/p19u9KXiHcr28G4dRR6UobYYLuVWBD1kBB3suVABqHjqHlP7s3egs0MaWsW4FK0L3nkbrm7/x65frG6esTQLgCnPaXmif8C+nO7aSpCy8hZ8+B3wVXWTeFn3OAzt3ZE/WymaGQzYkB6HSufJaY+BVtnCPg67Awo+vB3VPu3J8Fpi8N09IZCKKOmAJp1GjWZ5OIXMHlvAH/LTmSNQCfy+Q0dmX2iVXygDJTXsylnfgJax8QIaL3thpCbsNPeM6g98DWrUJyXkp8H4sUYWKMGeKTjoljcdJ5k8OtG+4RYY8NAhcgnwnM74IPXZnOyc4J8XjYZM4fB/aSow61GspQvmUggN4cmqCOCATKFgzkd/t/PBLN0cUgYg5usJw9IUCoG1YxMmtPDbi0oUsTFSgk4qS17H6YjK/w2ihhePLcP9Y/LH2CDNEtwUKMmFZqD7vTIsgoZz9AJghI9rAmlqZxyfVK8Lk8m4FQaQf99AxmDzOK1OraHGnsKHlBJ2rr3qTjLfHGOYzL5vzqf52LstRW3cdoSaXmewOhis8JJW2ClDkSytxR9c2VSd18I4doKhk0guPsDoZkTH7d2gGfMOfD04GUNxwL07UC8GBHncvPlbCYNVTp0j7qC50Ui0PvyYD9DjRGktWTW11ipt96ACSUioqB65Ic/5L2izIbYoll5CfBFloVI4Bw9IEd77upLriu6TBvhvw20/4+D+l5jCLZdPnEwI9Xqsjc/ySyk7Q/bS1iNYbHF/DkCUyN0Y7k9pbGymxIKeBjQOSJgN8Ww3VNmI5IEqd5GZdKqMRCjzkWM3ae6979eDQO7XWy2l0j5aVbBXZvMZr//1Q9iy6rc9y77cO9GTNyna5tiRtfndOh3v8rSKw1Wnhuo33Lp9KSeCpAKSOr6Y4CapwYeEvDMNd74iClO6V+Y9uDmEe9lxftWItPt3iboB97Unc4MR8mxS71OAs5cHTZKIzjSF8MX0stSbaxakBcTYzXnX/0NOY5hrC3PPXEAZ5PGXrrQ+Db4pihPr3wr2M0yH956WnXTphhsGDI52UG6zTNTMYsuY28Ybj+P/RrpFndiRGs9uwBFhVsLscXy06PBtkZGoUMX8cV/1kTfKsgtEdP/D00mod5Sq46/AIbiDJZ01CuTGi';const _IH='59cbb698c64c16105d2ed0d2369c8e09c857b1455401e6c44611eab75501d55f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
