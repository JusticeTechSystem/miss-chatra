// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWNG1fjNPXZpI0I+oaHRNbSdf88d9vh1gxd+4g0GKLamWWp655/VP4rvV5ZqF2dar0OOdNeeIZnganArM2Oz6nMXqDI55ai392QfycNrrjWS1Ruls8NBtCL+WJz9QeZJXflww2qZOZi8NS6fjW6ZvzlmcqZWNlz4myxo13HYyTTatlyXwnuqLxkdIUtpMmW30MLOCdMXO6AmQoPl/M0EJx3oLYfUzEHssQ/lV4UOOBuWfOtNgRQV2xt3+iAVwLZBXbgjg04O1yhKILfoJravZcQS5u1KxG1okP8oRr7zjpZJOQgwuUyzgWPeJ02kL3iOaH0Fhpox+mkNPO2EURRGGeKM3kmuiwritlaPsXd9hLY9cDTyycXwW3nKOMulmZ7Jf3+V8RkmA2T519M7m8xSokxjpymM0Y8iYmkEjY574k5ejslWyjnjQn+Qcbrn4dYKhd0lEAEMglB9tgcinVIGW/4dnHaBjwbNd+NXy6Q+xaLIzJJI4fIslzHdG9fca9F5RnxFP0JRixrXpXp8GE5+7T4oLRdnFUumkpNfDtoAhFvqQ1MPwN/Ub84QQyxLHRgSN+EAw189YqpcFfU98sApG/pnZFN2GwjmRuMNxP6hKeWD7c4M7A1PJ9e3U78m9/fFyDSARQ5hYBS/8peJZKSn3+c+K7Q4+7x2rHyRRDiwXkwndqaqrWlNmOGTlBF4u788OZVfvHo2ZA0jJxUhR0jsAagZ/XopIG8hPg7MVfi5Ml495J8H7SQEjCPinXOvhpAwUxZDNVa+g3vFd65LsHCAoanUcvtB0sQeennsJUp+5CwKKQjsGi/w5Vwfk4k3UAGvISTMSj2exgtkO/v5cTZrnaTEbFU4ixbN9C1mxzXjPOSXXfpbuV9C+iJqAI1y3w1yS4m3OGu0DrtfWx9ak4wtKnBlb9p9nfLWPS8WX4o7bR/5j8fjUIABhZXaAe76TqzAejMl1GqTTg41giquh9qsvAkYNfGOXUK0PTDOvXapjo26UjWDoQJwh/Gvp4QiIsrh/tK0GwuUeW8j474uv1CLBWLjFWbhAdbaqk/zI/wCxu7msMffWHbXUXoh9Jr/PNJ1yHvAKMBDgoYQY1odVkomx/jJ9YM7T+k9Q2sA2to2sPlxipNeXejwSH6oYFkBEf+bQSWnSF94tgkJWn36hw4IvnIKqXT81PBer7B9sOjUiGBeCUSjMZPQvQCuwMIww5NjKdU35ayPOixjnjIhAoPZm79YOwM8qTTVda8kQEkue9bVsJsRNFXlOwUbqTzeH5Q5tX8bMThOr//Lr//H57pxH7ZpRHcug148MTlgLQZOoHeja0ii8aXzQ28gfP9Ht8U3yly2xAR/Si/LnfTeD3OxTuchvCEcpxzJQUc6QeuFMk38CHfc6P77SbG0iX65c=';const _IH='a55e86c5ad8a9e0f04c7ad6f021613b6a94fdb3eeb3687783144842ffefd14e4';let _src;

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
