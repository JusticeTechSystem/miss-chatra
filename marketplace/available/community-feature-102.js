// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4H1DXLFqQmuZVUVHk4O9l470PHMMQ+VK2yTxWP243vXzMDFgrCdFEDAMx+2VK1CwJ7rus54j0eEJlP4IwxsyNXR2qyaVUUg+/0VZokPKiAOupa2pscKy1jTAxq1j4Hq+RvBIcxMccAw9Zuf8faIfROk8s2iOeX/Lujxd6TAOkl7hxHYUjoeqpfS1cdtW2QgLLOm3FpZDyW5c/KdT0QH6MZv7wOYLwOqIZLDoS9LLTeGA0BWctsAUwnpHF+2G7zGXgyAP9bWJx/izcZXYWabHn1WIDj9wo0Zg+s/JGVuzC4n3gaYw1Q5CP81mz4PiV8Dvs6NWRsosnovpgghmzPy/SK0Ha/Ex6UZLqvAnRxSmmzNjMlxTclYKTPGmsMA/EpW/nNPc3bgwQ6NxtEZ0dSX6uVM6F1JJn2Ddz2dxlZ3i9m5K8p2IxtwZhLg9O4gGIaHW/n3qe2eH5uvTj5rDjJDOoi3qfxFyoMF7VQfZhKS3zNsjtXTtzXzIPBRaI5HfPr7Tpjv6ohkHX9o1IfQZZOcLNOeZ1UzR4pBnKY3QkkoAnny7H5y8rIxNd+2rtsO4y5eiK3dFRYUp+6+lyq3AQoOSteBzU3NTHUhxF0C+hrRYzpQgL9pc570WfouoY+rIoIp9+qmwRcuC7dESlMuyHAl/R1orSppBzBdrea9dOQxSd1pxpP9Q4ghViEf82HDX8H9DTkjgUNQ884c9oKb7yuoh6moyk38G3O3AivlOUQBjQOTgnvw==';const _IH='1c689fef196b6caa136f224ad30dddf1d0aa6bbf0465e3bcc64b82117f49371e';let _src;

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
