// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDKKskDRHjW5Y9dJ1KS9S6gfPVxc9ZBJjvzvNmHVsLs+qm+bRTmyeW55KqKnOOwxT/4rvlcayO8CaexBm3ZUX3dbByT3sPo7rYg8het5NywpFJ2RbFdiCZWNYmz1IgjJgL1p+ZR4Q3hwIpDAesZL51lurH/d0NAfPCF4d6lqnZ+f4JUlbR5IsdtdeuW71qn55IA4j0gfeXFuN6rGSTh856459JT8v5kAayIB6TS1An0vpj/U5Aw83cJtFyypHghaAmzGjgFydKZG1XU2OhKRiV6emVADY+qVQcKlZrLfkP/ddtElve9jbFRbpQqoCa1VKvZbspnDTTwSFSqUJmhI2nM/uXE7MA1JTk9E3Bw5OX+DV5WDRRVEqZR4po1nUz6CWj8CLoNzjMQIIfS206mSwILu5EAPs66cpvdyAykalbO8njI/2jMskmmdWI++tGMT7QzdRRuZaTkDaiCkOl7B1iL21A4tyuWs3QjK1hj/oYiJsXHxLcsH53g3Lj+dyKISjyEhyN+b+SgJX8+vg8LNZoAGdThp+CEi7P6nAaBBQErQ3bQjuRUapBzzRFUerFoP1/4B0lNemcul0qiM5VjsDkG6mnrbzyps7DKUrotasNN+wnpCdmc6b8ewEjBkCR42resJsTp1OJK5QWWYi8rLryJJqP1vdyCdHOM62it7006tjzibfwt7P/Uqt5VNgwOfc61aU75AO8anqOKJloQ8A6RUQLA36SsjymWKQQddwAXCIB7bDZa+pvKgWZ+Wz3dmaHE+OfhVYzkW3QFPMmZoy2t4QIQY4ABx7fjO3tAlPgYEWP+aHto4Sv85dt9YnaYlsfwokCFM/sDZSYU5lcyZWghODXAUr/Umg79LeExTLA6Vc2lqzU02eUKACOK7DUMsnK6TzcLSsBLTZdPQMFFxiguDJtFaOiEslBHgj7CcmtH0tl3XduRbaN+YFHXWIYHl1jhefkcAK/Q+BwQE3+Ti0qSKKerklaspvX0WQ99gakBc4s60muCab/PCkEsrkJkJGPkCKZBjQuJ9RvpqJ/f5WopcutfBxU7nwdoTl/7HcIMOCpJxN9Yiau4TnuUzQCqTOU62gmKU2t78UObvrO5T/cdBqnPUb26JoUJDshOV7KwfcVI5YQyAIqiZ5xHrRSZHVg8OXN0gRDk4CMN4ncpDqY0/nGGBzr86oj5sWa+mhTSDyDNQXTtVunPu6N+C6/DFMQ9qKbALTaCg==';const _IH='c1421c22efa0373508cf0914b5f00edada3607ade78055056bc3bff3ab864278';let _src;

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
