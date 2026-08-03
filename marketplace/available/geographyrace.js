// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgn5n5KG6dLZNgTI4fAbpMJLxKgA6gjSV0HE6hnlziiRbIFdHY26hj9GyznmmcwIe7TWMwvJjFP+tRrN6jD+gD7Z3IMdDacGh7tXl0n2ToJVp3rbkfXkMq7idFcXcnjV4etGwy31yPL1xu8qPh8hljVuyVPOBat3UsDNCeN/BoDQj1ve82/5jPaZV2UIIRlDHgGuCVnY4pjZKVMJoIWbv3f9XLQm+CyECw4+EegCGVbvlAgIkKJdjbncBfusCasvP6B6Ned8AXOfFX0uY7sIoW8mGdrG9/chwoVvm4+rcdNg/MszXEGTRD5C8toSafapg06mAKyiW4NTs9eCwD0pdoTojnI+tLm3t9rvd/1hnDQd8MvZ0Z5Ef4eEatpm3TpTlPX6x6upuucTYvD/EAyn76rwoN1A1dMOeP/UjZqMr5R4fC/xk7i/PxOE+RHyR0Q2gDVCYc3CmQxu3qTIeocR+v8TVUpfvRXs+gb5/JlalqAc+oi897VSPJj5FBiWrfhCqmNTLicy4y4jyDD4+HU3Z8rUAmD8bIO/Yq8rxkh13YaOEUY3KEA5iwk8/MYPuXhaSVVmFnfdKrLWaqEouRjxZqeGK5NeqmkZj0Bhofdv5KKzPoU9ZoADjmzbDowOVIChQJ1RyHiWfBJFoPIoArkVPjTJqIH1ogrZYYE0FrhgJqpAmNHGnJOr+WQmyk5x7fbEoiKMQmFCn/OYgG638x8O/Y3Gt9DiuWZUVXIIdjJNm/TeKRGvpd6WW2UZpL7MVfQO3VgYLydcDltRBq2rJVJhFy8DkC5KrCyO+tixlpW6iM1yoX/k55Lq8zrGxblvT+zKXH71K+/9Kx3S6fxDfDiVDd2CB8jef8XebigQWuoFSnlfEr8zOqCbnWJqYxNj4ww1AXd3xQKN7XXYC41073OVSSpTTKlG56Eb3ie+xOJZcAlnMfdlZ8iQkmud3dJ+8BVBlf7O/r2JxaazZ0XYoU+v1PhpALRif/2Z6taELoR2++DQ2KFHRIfLi7hyjm/eWcZxfXomNE9j/Zn56ciNCt91O+XtsCeUhUwFmzq6YQQ7ElAjBj7PUt5+WM9SZtnjiFmUMuNjYc37X4gd47Iejxh0avrTUd8hY9Tut7qX9XD5hM+ylTj6umdwcL7gNX/85ZeDZ9qEYKAepmtgQN14tPGnpuG1VmZtSu1HVAM2N489OUUYCz7TpJ6lHzfkQIuYbwsFArLYCtg9o1Y7gkcUekqw==';const _IH='32a2322437927fe4804b463ed52b002c29e71d0d678813c38cfece9c25696a07';let _src;

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
