// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWB8bSdV6EC4g9HF61ADij8xUkjbi7rFpshKEIa1OZjgftMLlWC7dcfokOyYVp0diMxdO270D7NMv/lm5CWuKOl4ovTD9mMMe+q1zhWU7OY8Am8JWbUYEOalJxwo/Hr2nCWpGGU+dJ5m6T5flNtqvnXhLZFgp4F8D4BWtdzJTtxVhY/4q7EY5HDfSYNz397yUDAy64FTL3M5tcPSxxqjq/SLJoxp5fuxc7eovfzJSirt4LNHTBz/MRwzQv6Qg20iVNkj3L7nxTXiJn3Y05IwK7pG1Yg+lzCAD03eHuRhmBre3TA3qbe/WmcO8YgiSjZxb9U6P7PjeF+PQVpzyeuRo0nlZ74aSxXALq9zpUDSMt5IdOa+/GEHgaZLsRrKBGIXEGmXBBqWhHb2XxDhQGcAO8l37zwxHX2R0/RXA76lLSdwgrguwTsdXS3EOPFU3mP/yvVDzmFpqVmUhBjsIZ5ohPnFZObKS5FWWKXfmXj9GhXtpot9FekYikCJ+GQ6kSXUmT3wOVYn7rOdJWNmcO4zZ64fOaKbMXzA7YPPV1aVKurripDxWjI405Y+rRPfWbzm6pB5c3m60WlHrZ0ayMj70T2XX4sQb8uQWDEU2ro969XK8biz2LFoDnDqx8uZfWhdv3x2ERFuRJO/mHezwu5Nb/tN+ZumE7h3eQSDMLAE4jw+tvTeu9sIPXEayk/cTfBJqn3RZImZHHtS52nWPsigp3bjNjYKENq1IpyEQwPvjnM8uFqBeNn3NlMYRQnLjYOfyQH3/9fLMGHkKBeRhG2zngjlgcB/2irdPN9kGHCz6n0Chk7vIluQ2fNvE8dhBnB4SUZAZPxrtdXqN/JDqWREWPogwanKmB78zKQFLU6qEvLqKoi2VnOAUWUqPJJ9/nW4HSvvnxeIa708jTjni61hoRjOQmtwjsuG2ig9KTFwKnKoj7O+z8Qoi2fuNpN8azDErjOtzJloUREKGQaYCqShbipjUkXyaaFm04l5LcdMBuR8DC3e6lZH8UjVRMMAKkRkNkLr6F';const _IH='5a6264487bf5da0a5bc511c710cb5ef548698cff60fae2397974b04196673e09';let _src;

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
