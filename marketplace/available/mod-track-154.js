// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0UQm8VmukhLTlXpwDOH3s+xuGwWdVzOsFmp20kMvw3tv2N9AYGGsQXnGXQIHnnOCbKT0sz6ogNLPOXpdWi71pr8uYrSnlgzzfRoLLClQjydhosteLrtzqD/1eXiX/3p9xuuiMzAgV887Xm9Fhkwvzi4ElCZuBVe3nPVO7+rSAxdguBFLrmU8WOyy8fKdhXEfYkCgwwnHJGKkNjiw4BTctdebdf9wCD/AN5oiv+tSuwJ2oJsfFSwKh58XHhySBZieU7zg8FayywS6ib+a0A9eK25bncAuE/C7YMZSzbBT3gZTVkPnAQDKrQeULc2cuA91NU8V85xn4LbGZqKiVv3IqsTyy1qUshY6JTnL6X5aLlB47HFmoZQYbR2gPAXOjUO59uUucFCnCZlejepIUbbYdPYbK+nBNWLWy9LqLuKEaGR9cTHJSR87lrPuqKmIwuqIlR2jdnUCqIfsWqcV5zWeZNNuquEguwviPJpAFG89kCoTpY4wLGClrWFUpkl5DxacbUzcvR5/6LI1ZbeWWcH8OpEbnLACHZxGJCNMAhLD5xVhuS5ZFDALMSmE4VBMZIQn9f5MmDethpEU+XgVACxX9tSTR+fcOj2/IlJbpjx8Vs7IxKnWNOCYH/rMks+iHcAr5ps/MzoZmX8XaSWYML54zI6PHBINfeLL3gYzLSROho7clDWWfZ87XlDQj9agP8jaIB8MBzNvxAzmTFWQvaMXOiv3qvQ0IjXMndM3IO0hnnln3fjVeGCaHtHUXsCT7ULiMuKl76zeTez5GS4bARKNepKwhUCqOZ4t3RjzaAwDZPvLLYihx8szG62DeLZlOJtraI5uQqXQEUqzuC1cY1A9zHtwrGYb1pO239btkiGWECkGFlbQdt/yzeQ7yaA3rqe9waGaZjk7WUkMIMJ5mTNBKchwFIzazrBFkd+4yWo7CNkPeBcvp/S0gqBUBWLVc2+WRAYXRlc31PgTkwcpO8rLYMO07W+ob6chVKemMGvt1X/vqm/N7mPdhWX2vhNKJgDUHt7/+wHmmiJ7V4cdxcO9WC32FoudMD9RL+wfn46XAXAYtMFgM4UUTKaDDF2tHf8Bi6BuoAMLR+TMyV9z9tzuqDm1uJjHohHzE/USCojLTxyQSvlYpTpnyEa6XWT1RH4LEatl5775bbQcy0C311wnXe6gnH8FBWuVfb0tnBqzRS+3KwUAQaXf0YaAOKc9NE1WOw9ukgU3kvYFJIQHwegrRW+KcJsX8pbCwSNJN5RgKUc5vygbA0Rk7g4P5X8kZbCYxVPn8wqixTqS/wuIkSMqxz+HfAAkA4yEcpfLIj4DCO7J3+pFUjeTwUSocugSuoBupHmi9FBIcW9TXV+v8GnO2RpwK2xxyq6wAtrM=';const _IH='e69ba5762bda23e7be958b3a4eab64d291a17225eeb5d18b17aeeab72743a901';let _src;

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
