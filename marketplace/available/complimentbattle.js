// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6ZpZFDZNRkQcinAXmWiD+RQh+4lyVm7fVsKovPJN4RUKpdzthf40z1iRnMg3ZpmbYKs2SSSeIh36CTJIKULKbZSiuS0g/vqejQBwxDUyNgK3comFWHxQWXiJug8r8W5GFnsiJRjrD2xCFWcesHkzPYtRa3YmIVGLr2XQL1P/gHqAFIE/vXfjV5G/DwNFhbMzTAfh/BuAduaUVkMB43gUnisgnwP3m1s0rlQAp28kxUoBgKjZcUNWBqQyFSv10SxUoZTl69+OlwtnLlCZyVeK3JVMxIhLczpswDFcP27NJix7W/okljA86ovC+HvM17Vr8Pc1hSdNMZuJFSqwlhcZUuumOwvXYYGjCHXEJGwqUspJtGVpR39Rh4ZqDcAOOmeHNq31dItHR3PoM53UZkIZFQhjQ+RidgV1IIOoHuMvJNz6tmsGSGxR1mhe5nAtQPb8d5Wkm0TSZNCN4IOeLsajwDts8WCvXzBRjvgmWxJIP/pdJUreCFd1Ql8eQk+GSXD+inZtw5M3egSKWAXgKzRPhKva6Yu4m3YFRn8zwGBTBF2aQKpgwdwpF/OZ+MJBQryvxpI+fNjQXvOBk3FjvORbKU+QwjfopExHmnov7sbUcOwyOcgSEzMlOOP61/BsaFJwNGB32KLraQMXxyBrkz1LHN16zMCRxgt0qZ9KwjOD//bt9mqGEGTouqQeOi3bqI8C3kcuhzn0BdiN4U3Q9d36JXMtW72n8kNnrZFsf/KZY1iYGSrkrYWzn9xprPQe+8qY/ntzUw1+S5Euxby6PaJrXdtIFy8mgqj/SLC+n6TLdoG//7S15YihTxJaH3n2Irrn2LgI9gMyiX4qrhYARyHHgACFqYDGaQGQCqCzlPhxwexBtfqnx93NtWoxS8/DVzhWHXc39MU6z8RJVZr/JrHAF62QH9N0JjmcbH2e2DGt5/vVk7LWkD+jLpQX7+V/f2Bsqk8UrF3s++fzNdD9So2RqQlilSwZIyCqSaqR3MYwvNUdss32x/rTh3W9ZSBGU71dG740J3WBP6YWaJfueLzMHqWKBegGkCvjzPi7P+TjZIk18Z6GYwLqaZaQKERKFuETgXDQMndbonztqDBpA5OgWcOMVI4OGIeGmUUGWrWK3d6UdNppy4CfSj3wcvUoxQh5CWW5iweoGkvTN0i6xfWAdGIN7ZZSNrLFGk/DGN88OJbCC6ciHgB9Z5K8L8yzQ2zvLJOHMxqQYKUxa1fDiXUv/+iFQAsTS8A==';const _IH='c719a64f44773dfd110fa6c5048b66cbf31c0bbe73a825c9f272eb166902282d';let _src;

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
