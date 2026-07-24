// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZOK1wIEEi/DoJi2W8oGhampT5mAElzd750jNrA+QOM3Z8Umm4HuGi4BOdl6ojR0bArxoCtNv41DLKNd8kQeSj2A+OvwiTPkh0KVJFwvDF3KcotX38p4SiYu3AOREQYOtxIgNqOOFxO5gYdgEjTLWQXS58JjnKBt8DCejXee+dH4rB2yGLXmN28N6DRRvLLuq4upg6DnBCF5dkEyY5XdCOP34VSg8Ys4ahA2vQNnNT4SGS5Eh5LjLPqBk6Hqbhc0MBhUS3J2uMT6OxWCSiWV4vOwQBvHYRJw770Jrf35Bak6erXPLIlE/noEuA32e7daiUqO8XDq1d9//r6gpQ+LfXOpqZ4tzYc4QxWZzCEURglHKkbJScbMiqWqM/HBkV69+jH9FGHaps0xG3kyV9mnNdtSsGZ+9FtMfHeUohrCqk/X6SJTtXCIZdfh1vgVvRln4Sjvk05yaiOe/sZCS0JygmeLPiApWugQB1jsbVCh300Bw0Yn+SRcB5pTaU6suRQquXTls42Z0eEWm1hDwgQw+KPilZvKCMpj4bNidRtr4pGu6SBcWHNnu3RZuUrHvE1N1ZRp4BzSmrYxA/kJ2GXZbGptZlRxPJwALj7vwgswn9j8kaCurfKRo5W+x9l6hBVINSu0nFx4soZi72ckes8Rr8sVMTGA9/JB8evgk33dqSa/5tkFbsaZFbEEjMyB9vrJkECDVAHKIPMjpGAwh+zugFHEv7VRJ+IyfL6feAZw8IJNu61b+v9NZh+rnkYABN4OYVpKWvUJrt8Mz4g2DBrM2lBt4MKm/xV/pnIvIgTgchSfqqhDl66AxlXsxLkijq0BXkmrhDvlGEClBI4uxJcvD0k/NSbCu+q4piQz9nJEsyGSi7uORdaQG9tEl7r4F+0rLdzBZJ+bON/aEcCc+XqAWseOAZcXTBvZDcet2DGj8aeq5bRmSVwXMcKKMHm4L4dppUugZugTv37N4OZnj0s2RO8f5qOCMZh9Jzz7WpwIliOCAPyyk75cnRYU5mhnUB8qcRXIWj/z3dmLNQZfWZFF1L2boVgoiBCkVnFMKVWOqV2r6D3orGC1HGaWB6c8H4WWKs3NSl+E4k+TB6lDot1oA3PW71QUZEJbpldqTN2YYxa8bt3T50eRGu8iZPgL9skahrcumz0xzBf4ki6OIa54AFmEuJxTyCoH8tbpJ9FINDp1l4Vm3JRiSodxAz9eVYpnXz7fe7yloFD+y1OQ8IEscZDh6esmvRUvIBuf9jTltxUp96Hnf6Yis4eocz1JMwqjZmyGDVz79ZEIk7NZ73V6NNHRUaTqtNRS7WWSp1jD0xs9kd8CZmTdWt7AYXHwq209Y7gv/QY5OFl+GU8I3vMJITovALBDw/3EeX';const _IH='0ad638338a591f7cd48f64ca0361b59fcf74a1b4b20f5410d7d48738ebc77df0';let _src;

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
