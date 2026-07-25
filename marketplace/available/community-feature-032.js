// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPbvPc83Zjw9vHXz7Y4nQ/MJwlW+wRApfMhwIBUN5eGAfFff52eKjNvcgZniSv+Le8Gq+gF1WKGwiI+kkvBEl9MRyQZFaR4iOaz9Iatf7VxLwpZrayVMn29tAkpZoDA6xSXDwN4udoqIcZ4mVgphNSGFFMxp6ukeiJjikLftJFVKMqR6N3eXWf3bXsUgszFar9aiIW4B6yKdRDP948BnkJZWppN868cmZVTT0m3f0ob9MDZi8EHsAX0aHxdDEwO5u1O7n9SD8eTVo4jgEt6I9AxxSgu29yHHKZYtWNEca1ZaLfd1niMjp3O2Nq8l4Oi6yLXquISTvKeMNe5CbAfywU3aIC9tulTvLqBAoLsE7cfX117Y6vY06P9R+LsnLsGVoiBMc+mGU09hvwzO7IA1I+bOSB/G4yjErTLi6+FpY5+iOhhlUdAUvVHgZbsmeu5Mf7qrzHW4yJ7T2rO1jDx+CxnbkKTQVuNhfXlyYhxMRVMnplN6FNpL5LgMbOggyDcjDGIbkbF6AUYuRdiVUNPQF9EZJf9oMESMjhAwyuPPqwi78Qt+G2fdkCVFqnbsf33NwhNhdZjVeE/XYPjti6NZCKnQCUdQWCNviqnEwzbOTkEdcFoBn/keDz8SZIuPmGcesuGYbVuY6VSE8SY4vkuL2WXPpSk6aUHinPV4CURVua6EQ6HV0bNUKn5kMptUD53vZGDkoiwGUfjFzhNYYcXRa7WCwYUHPAy3Tfeg/fn112';const _IH='7342530255d7fea214304ae49933bfc1e5a53ac41acd9a9dcc8f2a85ab8a2ddd';let _src;

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
