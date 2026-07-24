// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIosOQuArbnSUJgaCc95Pg8Y3Wx4Kjz3s2UXBcCq5KEbokN7hKEekVBAiZvweFoatu9NNqoTnvIkE4GhG/6lANZCCtMOndLaUfi8xwVd+BPHzFm0eQ6jcgc5ewcnbu+flanTqYrep6uKuHZm0fr1sHGkIPphAc1AVbMbFTaECqUlkPmcHBWu1aYWJjg7zLddSwR/12ViKwmlgwrmWxFG5dEltK8RDsojhLClqBbtGGSemvNVq272sY+hHwhROyoy7pvSAgIYc607nRS/7KOITSJu/6mFJhfmf154c8u+PYXj8s6EHCW3Ham9WiCzpMCWNxtblSCdTg2X4pM29ZP8dHU0y9k9PrGIUJWO0AKWe19S1wLjdO701yUzY99Ktxo3P02nCD641trTHq1AxqovSnDWFvHxe4KHN+sgFWeFSQayT8XCeMcEZ7Z2qiAhVum9B3++h/38LlOV+pqac4MmqoEC+6uIXMhj2MlzmJL6RV84sgChXsv6NlWyvfiP1k1OZj2OmIGrmwEXBjCK86hrhu+jtR/DZkuEmU03/3aE4NoPmO1NbGRntGhNR8Wc5YAJZzWikxn52xfRO1W+QcunfnnSC6v+xKGsHmh3USpxsrDD+TW0iVHP6nzTxNKP5OyWLF6foZkyio+z6FyqIM5p8X9IaGVQtQgWTCZQS+QNCZC+OaLr/By1bWIp3z61XQBlPm/eZd1q5/dh5g7YTbWAvA+vSKPzm9ClZtlNRHx0Eyky9oJOD75h9Ox7kL1vSbx2YmauR+Qz/gkj8jtPMzZZ3CWyZ2o7s13M21rFloS7R/4EfhGE85zl+IMFlaiauTLDrYdZyuh2g6yUnbY2UAPAqb9ynJlxKmwmiWsn2LKc0eUwH/tuPyRRQpRYvD/Dt3b8njCbJ+AUeUHwWXceFfkjYLl+p5kGR/6nw9q7jIOndS2wa8qr3WMve/gh4RqbxbTKwFIWagy2wNH6LD67diETFCb/sY8wpCSbaZx0N7BgVkdWy8eA==';const _IH='dbe0c82deef03640b19d899aa91bd700feabcf451481cfaf71554d528ed6391d';let _src;

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
