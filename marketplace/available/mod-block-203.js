// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ij43TmfVj64gQWKEsyGwoMMAyztXZBqApk9KUIeJS7o3oBWwkPHjSME9ofAh4CSRwvoXcgHyWx8DMGGd6Mw6f+zezYSRDsv/fX+t54MJE+RyChDRLJpXJEpHGkbfBcl+nanGUYIIzffyft10LW4DHsb2aCbXOiQU+Rw+4TGTt+hJNwL9UrQd/EKAFQJ4iXNXybBGWwcSc3WYvDogmL6LuEe7BUT2xgXneVZZ48cP6Wa274iv7hwDHJGF2Qic7r2AENnkcFZaAEmLfI+L3wYvF0HxHDFTlRFiXUClNQxeB5LStpXdBcOUbOKowWCjVOTv1Ux8ZE2SqK8yPT16prevQ0onpu753ujtFsb/oXgjczq3qrrwToRZg+QS/caWtS5uqjSYJfQnotW4dyf0Fbq7+23Ry08i1YdpYrirnk/4RoOnvpIdfByzNS2UVQyo+qNjTKLcid60cyJoJ2frx1cRA7agWQBECi2kkRJusp26nL22iNWSPXFcY4CuNVzqBZZWbsWW0SZPaxEb2rTqQghGHgcVxkBWw9TWXLSVxZZZi9poeZslZ0XOp7RGJbzElbkfJf2E87C0fUM065UIpK0eXele22O2cH4qe7qvLWOS4DNobdI6iQFxQdrDlKeu6XInPNhGq6LaVQ0HUJFZvf5m8ShOzzXG6rKUl7HYoK2CiqN3+NYOtEPp9V3fJ+yyb+H4Mn4Zk67MQ+jOdcieZJcYywKqk09qW9EZmi3S2SzDDS+J/hyqGBXS2+Qsb8HujcYPjPjsvhjjcT5cIK4Os3GaM+AdpmDwJecX1EF45MLhJ71IdXeMzxlVRsKUzEq1RcbAjkHU7+Ux255HoFciBMQQ/5Vp8uSdPZ6ie3DHfmg/Bp0G+uBlKvHy0nxyltrsqFsaLcz/XdJYUX1gaLBTojA5hndCFckPArzsG55sIfNdD3VS9z6DHfYZfwhUBlf6zVHgrYfATnUbj1i8l3rIHH+vtVg3hd8XHOtAcrDuC1drvFttk4JsBVfoOsZmTz2RSBg1MnUncdV5cM7uqm/CkRQLgEWAbXd209K1LPE558UiCFxviM8Gt/eEDbMLQhQbDYAC1XYqi114vMy9bLO/+cveh5M0uRVImfhKRSM2AGV0yq8dyUaWdPQZfvyCMHcvdP+mPas3MFSPgJL3it+y1s45EI7ZLoye3N3hWyrNVZfPoLJMLu0c61O2sVAY995VP5CF4cRg92GoB8yc9MDTPcpQTIFcq6R/dxMcfN4QCOvymQozTpgryogvE8uncloENnUSTj8VKWQoHU4RcXQd/UOxIQXMn9Nh092jQiRCaROVgf5peY+6CvWeuqGqtSUIYZGMEBbhXFXwxMrVsSZ8PsB/joxrF0wKKMnMPZvpXUC7';const _IH='8769e2f58e6babe8b9cdac945035675f554c8e912f4a7a5907910067f5d85b75';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
