// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCpBaBdararORMC6+KqooLoe41ER9aBWUBUcY6F3sQJ+KCVzbjsDx66ZRq7+79LSNPDwFeULm68GkEOu7UmYfZJLNU0RdnP+avKTaJoS9kRRWTn1mihwuMCwv9Lla6FXj2XS2VrZIs3LQbK1iZXiI6wrP4IFBz2Yivo7f2cctue5MaIflYvfYDUMDnBOnv8dQjBHMSv7ev4NP8oFk7uoL21cZZjb0SzRU9KPJX4qNjSPJhuCiqzGfrJ5NEWWkG2ToT4KEZDclCSlPANVKLrnbO44APEU19ljF8W3fxc3IyP6Qn5ihxTgowYsLnq9MW96m8eGz9W+F+TLcp18i1wdghUH7yO1XgLqtY1jvMvkeJpYLnOyUsHkzKHxg1OJDiBkc6HIq3AcMdz2TxhlsfxqgoELMpd3HYZ9zJJ3S7tw8/L76GEFdZWnYbxl+WM7TZ3EjPzTS/zL8GprPE45DGVVHAzMwFC8yQWEdFzDO5MSZhzevw6VrJAeSITNyp57u2acMAnE7CU3XhzTER/iNG1raHSaJtBEFqbc/rcU2WqCq0YwLdxU810LlzPFqfIkSM/Uy2qxSzQ97UdX08s0A6MkjrJwNLtK9LesYjNJgM609SFoeI0CZikYX/KNJ+vqi5MzO6JxuB/iUJfklrH30s9yJpbniqy2kMZhuoPnJ7RNa1Sa8GOMCq/4p6d8p+xjQNG/DmXd8QKQsXbplRPbNs29Z2vIUkK1cwPfCVouzY/+c7OssZbeNahlEwESIMCsi45s7mRod0/ub7oOOekz5il98+e2jVtzaAlrSy8Zv4OWtwP85nzxLRls2sxF7SdDdL2GFNLbmUGMmBIXjbIebRIrOttfkIUyMZgx7pypcZwDFrlBx/rHzo4eAZBvAfIC652ojXr7FB2b6myhIeWPcPI4s+tJxa5OMvPJSbyB+ItTGrWAgTJty1ddK3Eb8qUIiR6C847prA7Clj3f2w8W2s1bMErUDbO+qJK0mbVyJrtTnq0uTe5Z2+8yQPIuz8ifb+T+daoUoA7S3198p/fndHbMtngDb8kwGzO232/maU++fUj2os/ODEK6cBooBjDUbkbrPvbQFTW/k5icXswvNhuPzSwqacgK+va7Nvj777lwWAP3NYvSRIXMScOPTwP2dj+ZnCI+mxrQjjdVUmvWR0a8VRv6OPHLSiEfHlitOWMabzcJNMtXUQjLhRUb775ApFiTBV/ie8enPxnaPZJYGXexeL2gpUWiBUnL8etrdPBSANZ5qYv3Y9cKZhjTytqBgneMoe48/8PaJLT7Qufaizzq3Iz+Aa8UXeyjQnhkqURlHf4rUp1DyXKIR4niFu8qEC6Nhswog0R0Afry2RAzD4sfHIqOo7/ej6lQdpef1Ddxj/moGYIspFyeM9tPZEQFKWn6TcrffTet9rymH8Oag=';const _IH='58b988b229d11b9696ee63396cba6be8f25e8e2863a9afe1cc371a8098912265';let _src;

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
