// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpVM1GqFzNzggN6o6Z8sSW6vRbRcYA5mPyZmUrZXBTh6tmN3UQ8eik6JN79qx/cYbYQEckt0JVD/uTlICxw5z3dKDL1gjl4mIruYKnTIB+D7r86vUyY/28IBO2kn73D4ZOryVn6r4EL1m2UOEa3J2HQ10iNYolGvRkIHQNtdqu5jAjCkPzJH+C0hNU4YO5lBm2ABXR2Tf0Br+81W/WaaBHxBtdxrGHFzqP67M++/4Af+5vUqZpbNRepB/6UZv1OyEMUr/vD9LiWJbKJY8pTXfOkO74X6VElVf9PiBTNmQ233Rf6x7vrxI+XY68YBYZ43BUKkKBx4p4Cq5m9AGIPt/c307rngA/EdzlN1O4K/G1hyDnaLhmCcng+bppS92yL3SIejB0xh3/vl1ex4SZTAi106PQNvstuU8uqISFqQixdnmFGOSN109I/GjfA20GjMnoS7Dsw9ZuSER+5oAfd5AZsqevCcK3gkaU89MhGMCFQiJ7++P9k7sp9LzZUQUZHwgcqJSg1Bd2sQpH3CYI3fnUWZTwyyLgGNJKO4SDIO7aySIOBkx2a5qCpWvxFpcBsWtbHyF3aSMISSxJvpQKdYd2cnMYlqhPYlMxAe6Jzt21U2A4y4urPHpmgay5jfLKVpPSDy9D69Nr5nO9L59q74q/8gV+7iEaYzwbWME1FhweLx32nAmhccKHZLJL+HGLsSxQwbi+KSyEc8103QfMD3OscO5neQ1XcL4/nXu9B1ROdtJfRLhhnwSVkNnYrkJvg4v6HV2oHpRcDrHQwO7wKzdP3vGTzsQ1OREoR0rRZvjnopVGglhNewi1WbZncEKWopImgnmw54ZK18o1xEcf7uRHhuafSV5ZkW8wsJHygItEsqVzlLMnyPXGg361xSISDl1QJ3uwK9/7B31OPKi/knS52g+jJL2gEhRKgb3fJWzeszYD6puUpVo0tT2bono8xkR6n9Rldc0sEAhksm2/m7rLC9s17gR3FThkDzVjH4pPryzCHg2yE6ZgGE0cJ3wn0QpecSRDBIMs6I4IWXOZ9cT0vSFzvQTBRlj8keXwd+9+XAp5wmVj3mLcLOPzTw9hcUmfTD3WVlGcGV42ghmZ0nHnf5tsGiCKU+Oa2cvNwj8iyxU/ICKvRwFTvjmy6ILQ55VsjIHPxQ2VZr7UHQd4cZjtjwz9nD/OQyNLsg4HTPmpVOXlGRIGAq9eW6Ck4mnEiQGMcBxXXPUIdc33xeD1+JPQgmf5OCpGuVwRkSzqD6a2gYg1znJQmD7A8lz15E+XgXHB29hI0BO7pKilapdboBT4sfQIEI0pRyF0sqtakS31DZm8UkS6JfVBVImGc80kAvOVkSLo4A==';const _IH='2915864549039c29e782a66fc48e4c6e15e6fb7839065cf1729b231c3ccf5a34';let _src;

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
