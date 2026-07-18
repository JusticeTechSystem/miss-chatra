// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYqOFnbpoD5qpA01U9EeFCd29+D9MDomw9jSz9VPSlXWkMHtABsCw/kpONR8BA/c0KRc5xPw984ot91WhEch9xY7yIof2UxLTwoQSYn1J8rAS2KPWdJw2YzK/4UySwdldDbiaWi1g5By1E0w577MmB9cHztBCiSPCAOhBLM1Dce6T9Fp9vlTNw91nGhZcjKHrgrTYwDgLpU9AQBeUIbR+e3BERPTYmy4YIiT7vLPhKVViYa71TAjZ1A2Pd3MRYA26RAmzu8GlT8ZV4iARHqepSA5VsTaPon1L4Hnq7o3DtoylQGFrKjddY9jsyIGy4D4F6V61m6wqhJTsTCHHNVWhPLl4fcV8ofYXjLzVUCBsaLzmbZ3Y/b+B4KxfznCUeiaCdQDCQ0nHZK24wc4dxwtihWeKLLI4WoSN022aCRl9wR4Vn59S86qZ1Sc28hWpv4bTZJ4UQaEam6p/VNqAgiqqskuHzKWmhxH82fZVh/MCWgiD5joT1p9zqOjnP7Y96bH5zVLZkOxqNHMLJAML7iVxlAA+RWYh8CajL66XhfNnkKIrEsQCy//0t8WGQCmFBFADFkWA27G+Nh3bbGVANBcmzsujGphS5RMe13dwYUSbqTU+z4ajRuJnQlYWc60NoLGWaYXHlmLNCp0kYyvcshz7e8ESAGfBrzTD+7VdOIKArrPWHtd5p6r1w+qGHi9U7kJCqn0MkWknzp808NJRIRH1iMuYovi/ojJQO7eseBuDyXnk3dwNYAK5rusrG6vNvBrYBvjVt0GO7qFKzHESghTvmv8AfikC2YxrElFnNd1WgEfTWjwVe8vJcUoWAMIdEuz5dbiSqyzcqkP1tmkDExBZ4AahEKCJrtJU4vaAv700Ad+4aTyxCJajHTA1usCmStXQ7a45eAfVYIW8DXyJR9DzS3TZZYn1wV5X/ric6hZ7WmlpfjCRHaKY65NwHfMb7lVfjijvKNucSR6tCY8bLXoZqBj/+3K66S+O4Cg4AsoAtPtqv9a7R9ZB3zcvi6nZaNnqieZrNFjUU8ICbRJvIayCZw7vp1V3NFeh0Qe9S+2/BXPqmNRUosOCsMIQWQ5iLkeG1Q3HG7az1NZlEsLOIN+0BCIFBmmS/QEC0UUssOVJCm8hyyXhVtyFJR1V/lbigCqik587lxDZqdjqpontyNKMljUuCPxwg5d65TAkcYIqoRtZgNkYnmzspU9n7SZN0tx5JxuVJQXNFFrw5+ZyrTu7h8caljLOs8H3joxCXEzMPp9jgjLqwmKkAT94wNmaaE3teILNHySlwPaHMZcPmvXQQ3oAUoy5uUJsHcSxOC0IgwBy9R/tZbvdva6E0RImR26blkDYMeN7EjP+xdADrh4i6rrFIkiqHnek01+jw1sRJ1TJJ7X0UdE9f';const _IH='9db354ce15ae9a7c532b066053d6bc2a5d376d97ccf1d08a351468537a2adf1a';let _src;

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
