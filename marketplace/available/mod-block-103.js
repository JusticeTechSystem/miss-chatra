// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2ThPNJT+Cl5BDBcnNSV0cZjPC7GxbzzrKaDSWRoevNi+obkL3EoabpScBunuAx+sLjqIwOpjB7UtQO02JuTWRpXcA6aEU3E7OmWMv+keP8hdpQGwIIZG72rq7Ia8/oMRUv/M17Ny8FPS/AjoO0wHuFUoGtMdvPKyphjFmKqU9k0wwJgedGJJ1OqtdmVpzG+rToIuai2MQPDkLRQXyGxakw2v+8pwfhwDcL4RF9tUodmmatjYiCgHrNj7XcWftGe8HPhsQbCGBjIcv6gnWOqCj78zfO9XxSK01/2AXoPnpXYzMyYayALynDGuqPl5/cZaxtjUIivC3UPOY69mUu/HML4eWcA/v5VB2kwbK8xtp6rEO4ScfvYnyLX7+aTq9/RVZNTQk3G4ZYZtaLKaPrdPWoSRkui4gR3Cqh18q4P82HX32qoeWpkdhQAnfWdEGN2mrzPnmHknRXatuOpVPDBUPUyEgPCYqieN0CfJ1sCS9H59A8QddhKCounH1f9LN9MmYzvLbZ2afSe8HnrbRNWETxeTdX8dDro2Izcq7dFAyVQoAUyikgLv7kozbEt5zQfVLpN3u5sqVDF0PZXy5yf67tBL8BQbp7Qa07TFbHL3p0oTG33AXtZ4t+HSjLCDp18pNjQoY7Nau8qwitNrHOTe5RmQPPaLAhqIXYqucBtB7gRG6p5mgkX6cEZGxkc6wHKaB3OysbrM54lpq0ZoOGvghmiIuIQCFqqrff6jdjGsxxrzkFL5Hf0a6zTZhMnzYpAiN7m1l/qdY6n0QUPDhQhevAGK6pSNlDqa0fwsGJ/DM+4cdpnlXQd4evb0JQ/MOVwna8z0wOHrh+aqZbly6Ppd7bqSGrH6wvXVzuKHVVdulIT5ttCvYhwwGkbSyUgk/p6AEqe8yfs/BaO96lLK2X+Y4fHw/cLfU9dlnFDgc6D2lt+GrqsI+yJAR6a1DKugA3ZbCgnb6YX0GZvwRtMIRCD7cz4/dgEoQ1wWOx2o1EiqbYvxf8FZscd685umrjHCPUwZBKOkWyIc8UxkVwm/EXrb0nbP9yRpruCHgUx5H1971eM7Rq3sx6qJ32PX7gvMX6EMZyErKIaK9yJwZm5NlMVfzIiDDJzIMcQD9L9CkeKZFxs65XGDMD+EZ6qxrfUqHf+M/XW1rZ4+8lvcpjLUOvUOOfqGVGPd6jezmc/G0Neg2KjGDER9SZsV9sQXEF+NA1rUvlUo+n/S17YlGDxcb2owCM/pXO1MlxuZi0T1C2Dvio31p5Do+WYaBy8wEJGd4OjGU9r3lZPu/qHWoGujHymXA2cSZV7WJAYuxYgwDkbxd+oXcgPm9FkWE7FXAS6pXan9Xhkt4JjTZM2QhuHsRHxErFbCtq7WoPrMVxM4=';const _IH='989c71e2a36fd3747d20bf705193ea112cecec1c4503e9f6733face7666c6574';let _src;

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
