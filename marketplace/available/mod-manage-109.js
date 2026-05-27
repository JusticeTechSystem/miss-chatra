// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='in1Lvk+lngpW4n0nmv+iysT63cULtjdeFpx+GKQgmWSSo+ESRd5rPDGCZeVujRdfkoJ2lokh1uOXs4HyhQv1sJFLQJa8VsnHnb+HnQKGwE0QtwpS1wHzFsTUIjqhTmhbrg4CRLxMRPyWupOzh7SYotoVFXRIrGFUXoqb6PtIWvXhW6bMB8NbX/QfT7VyKW5f/QNZPXZZNwyB5tzw6Ke1bL0gwHcHf1ji38BUUW3i2YVMtXPy2Cmyf1Nc/9Ayk+BKof5PnEKnkrOhD704u6kiSPTJimxghYFGkcWU/jaq7+ZwfinkeVpcfJwXr1/moJEk1Bn0Mx0RcHaoFvwjqH4N+bMZ/+VG+dOrThfWYMqSVG7QtInpyuBiJAym1h+wZO0n5zocVnbQjuXbQnd1QTN1j0hSa4Ln5ceCjfvCOFqzEKtgZsTaOPgQS9bafN6jnCIsrXc8yXgXlvCA9uGSPeCegNcVa2Kg6Q6aW4lZVY/5ixHBvym7yD9SqtsXgYIwP6/Q4nlM07UUwR8WoaxrAVtstOqrRWhEf0dUvET7RAiSRzhRrRdrKyXWVQq1GB3AYvgGPqZ2pRiv3axsYz+d7XYsmQximmz/FlfAMJLim0emRauGKCQsY7MBYTy65k3xrrr+Md2xR9jAJldHK+hHAqeVHh01AFWQDhW1iT9K06QNQvxSjtj3hvqRlV70eS8RuR3KYbqZ60ey3HLsiCSWiIXfiidDJ5K67UeIPk61XzduMbbsX+B5npnYx2x6lVKNWXtX4uvolUzIiNw3s5Hvq1THmxrzsWAPA3FgqIs1YcZCmuUcm1qkShyWYMYEoeNVgEeqhbGa4nR4saM+RUPzxc1GHuDBfvLjyIOwkuoGL7kd69a5WhfZp8mU5poD+NvxG6szgEJ2OTpyG3tPd79V/TNUbW7Kf/OajSubcjwNmOxernP9vB1WTbTMwxaW77zeB6iTJ3mHAwHCWNUCq7qmidxWHUsmdLlSNCDAWeh7PKz/o+eSwj03PPaXwl+uTXUNKQwBUgprJzVGSt1Sz2hacIwARB6D/20SuXFre8fEJEAgSCgWij3E+niM9I0G3Nmux+m6jvvNYaXTU15w+9Q0LZhgmIeLxFbofg47Z0ULL+UfuueRIuOatp9X+gl5szxQnJFVo5Qedcx+vmOuEyn6F29xSf552Qi6MiYu0MidKV36yLiuW6i11k8pjo9howxHmKydldse5/E18B3VG+LmJcNMTnK20UHSAKBzp6A4tWZ2KI0kmwTdtCUzAsWn8MWHeV74WzW+7ko+6liM8K4NjxvC+S7A2pMxKt+JbkCxmtDOTlp4/pxioGC6nYnnEwQ05G+fOAlv03IW/PwyzB2Io2HNZPNBXP4qalFibRnV+8U00u4te6CPFWzuKg==';const _IH='d823e63de482a6579979d64a7e96da687b04bf0da3b3dd76ba5e9283be95ce68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
