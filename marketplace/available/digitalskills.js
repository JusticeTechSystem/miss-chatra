// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+46n5PmXJzT8oPN9Lm0nWDEp1oSBnbve7ELgxRACa9ZV5vAgqfKvoyT8coZpMRXa0gSlv9K2c8sn3MBovMSH355q7l5LhjxrRjmiZUfpTEl9LPnaQ0Vm+afAzbkWKrhrIDbJTqrAWADoDYFyQeyAajBIGrqyzNe4I/yLuHqtdN7ePYkCHlqNlZiIPadlkdjD3l440w6aWE/nTTw4oEwwFOKDqhTMmzoBeco+D1mGmhO/eqJqvnrYYvOHSKEgv95Q82++YtWdRdgx2MFy+LJDHi7SSxAkIkL+jaVPm7Mo8wIGxTpzexFqrMLZnjR6HNlKk/ADvkvntqj8TxVQFziLrISl2sv+a36mNgW3wHHP/FbKWHFDbkwt4jTtB9ootC3K/RbQJGphr3kCJ19wVvrqZSj03BOAiSkYVFjyiYMObn/K4eSeI+ABfzkAy8y2uOTM5Kdov7eMIgetA/KII9ZK7NvnpBiUHS9jYi78QXdcsWLpNflvIUqYkmcdqCpLOhHi/W4BFU+3zR/W29oeiF+GZeBDF91UVM1Cw/YJCodcrm9v0CtJM44a7ZyZiYUSN72fLqtfvRyuogLPxxpbY92ldgeBVf8SRBDX9R4MCoGHHR/YH3L3Xkv0yoqkHu5nKrrzteC6PX1I8lpEzy/8LAvz/zjrdPEOdE7RkVtl1tlh+ypWFF0SjubJ8jiMcw32ZrIuyqCdrcdy1y/tWE2yRK2NiAeH/qTdb4QUfRa291w17pVG+6FyaxTRezzFE9gwg8g2tBx9xyqZDMet3W1/SKxoDE/f0Shf0WaDX+C8ha9HObc/+OOsqtRzy6f9bSHpnvYq7cIMuA+9V1vGpDSsVSrIx3AxAPgsf3lfhEREd0HAyCZ9P55IYAZQ0sP0LOT06KPdehE4LzC50zMcNVl0GSpGGQcmgngPsBKDPolMn+J/rybdN6u2hFHLjzoGWUTeJ/sqBd69jM7+hx6UXX5KmDFF0nOAc2ei6KJDOALT6Lhe9WYrPcPUE3MYlx8XIhgykW+JSJAZoydF9Yh3sLzokqEBtcDjBE0zLWARIFGBC1MT5uU5U61fvE8yCdFc1Vl6ZCnZWLQnT3DPs2f4PVVqpH8mgIa2wnwQJWLE3xFxlV2hJWUzkEtulxzR99+npFTkFrjerxdozw/9XbPchYanjG36mIJchmDej+5OMJedDsNocs1X0zxw4M1LA4aysx8oJr3N/7XEuHR9iRuJm1FZQHg';const _IH='d64b299483f9352232badecb119506e3d938dc46818a92cff158588ef6decf19';let _src;

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
