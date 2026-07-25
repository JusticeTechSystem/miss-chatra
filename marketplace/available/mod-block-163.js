// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXDRgjPcACTrdwgvkcKHp0QaaI3HsBitLfPG5YNOtnairiyyZo8D+NuxJx/7xHRxXVXlqwkqaa0N7V26Ifo7KVXcn2k9fUnZ7IYKzeKNI8i7N8F4CLYhHMMczacWVK+xTin6J/tmp/LfLnCsjS5aWYkv9/JcP2EVMa+5lFUUEQQ25liJemhWEN0GCkuK6L1Ty6GsB6oPjSL/1zC4JjCF3hHEocK4K4IedxGpGkOYDLywSx96neDAoKobBKU026PoqY09Z2w60f3tn+1RMWpjjzA3bUa7UQZZQbUUlCEkB3LZl19GMbGKZzWbiRRyMSM82KStnRJeH2Vea2yFWhyK5fFwunLnowKW+m8RUAjyDmFA1+i0dfAYX6EnSV6cftrQ058yrnpMyaeI6M/wn2QcPFzLE0N8tzFCT0yf2qCIEfgW2a7FzBg8ZDDx+JwQfDdSfG67QXfNPn6snEpHvEoFsymsXAxdhHhAY1H/8eBxL+mWux40oucvafNRCiEHGNLKGR3bNEsjki6Kjxos2p6OscN8HW5ORfWLeBeOWcAVbU9pPtjC+LRx8kkmqqYCJjVby974haDMZXsKohLgLoOsJuNgmGD74thFPsT6XQDfEWnf//zz4Z8pRvloED9C0TzxL5uGcIHnCXp5y6l3CW3E4pwPdTqOQRV4cwhiNVwDEjyTKcr/At1C4dZYCP1sGcw42sDDk4p9HgDUMS1j09MTnMOoNsjE1pIfAmLc3KFjDhyc399HYNkYOVbn8kVmVYxSVpRqkCxEOPLRRsE6za8J3v1FelAWR3nCpzzYVEJnSnW6QOMY43vfth7rImUptD/BcSsamElpxa6/Zd9BUeL439b5zAs3OaBKrEq63X5cUOkcX614OCRtfWX2pOWe9j3wMcNcrXjxuq+DSExX8jOh6VNZMXjjR3Qo4h0BXUfYLIvjkNwvv/7jtJSV50gs1HDNP0RPg49b5kiKIvHUsOKoJhmS3lWKRveNW5VWelWk/aSEtQ5OoMBrKF73WkVq1oNGaMrm1gLect222SsK3i88uP098gQU+NZ0zIegA80OtbUU6hoC8dGpvJvsaDDj/86K9QUFwKDoL8xkfdYVPNfrHIKPYnYMeDCuMqP0Z8dTstqvLgUDAnSAvF+1N2X2pkDXm+duBmryzxX/I4xqcfiNnfGvrUdQQwOlD9v/SxiGLH5OfeKCgUljk6HTmQCvCQ3t31omIFdvMTN0T77VMWA2w7eJxKVg6VxJkrXt1YfX9+vBb7+F3d8AGOA9BSGtdA74nVOkzoOPR1483J0mpG2B0Fe+3aYys8GhLODCfsrAT0LZdsRUi/5c2yESfXEri7Zs+Sv6qr9Fm8x4ey8GPpzGpm5hHJ5giFv0DjrHv8iEM=';const _IH='b498c520e3ffbab32634a351a8c3994da3aca569bca6c442909b5d30480693d2';let _src;

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
