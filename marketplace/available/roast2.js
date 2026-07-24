// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsWJmDZpS0ltPcIgbs2ID70GLlM/fS5kWn1RJo0Lr4d7h9yufZJdU+fyrbVfXjgVRPQ7FeIhDqQ4ti7Mnv8wmKfpEhYg1pSkdFAMfv1zVOjT5hQqw9ig7yMN6CaKwT2AbsA4Fvh+PLzpJ7foOw2EceofCM99y4lqtPN7b9V3Vf/4akSz1HqN8OCFA+4OIchIF82FJMH4h9KwdwKP4CNv9gNPRBxHXoQGBWkNfPoGHUFXsk/YDgZEmmBE490Iy/+5yIh9sLcstwune2GRSfU60k2O30/3R0DJDl1l2iVZjlTW25IBYNpEEL3t+8pRLrLgFi89We3R0t/Zh1msbpWiwfAhf5i7VppN3HiljkShU6TNn5QGE81Pn/cmrD5mwXYltJMc4JfnOqegSLah4mkyh05Oe16TbLfENnBT19a0DFsB9lbpPM3Lakny+U/yZL0CdBU40LZX1PZ26GYLrv9dzAmPOt99QpK+5ouLWgGlkCw8hA4DWSXpQQ2JGGDItijzsw9ySXMIgErUpc+L+amejb3+n/6W06X7tG7AXiS0knXxgNx7mhkzd5Nvae8cNCplLjfezBXSUxvA5BTMld1rtD6P0KyaA/FFEssSn/KSd4jzedAKRrQjcmzlbnjzRRF1UBULTexRSJOgbQfVRAuaA1j6SZxPU+cxAcQx6Es9wq1hEOX/1diGOgvyIxBFvyu5hUU5xuzJkp2us203S8YCZrLGdSdg3YW6jEcSaPe5705b3p5betT9/UJJ7Ibgy63SqN1yN8pOm4diOXSC99gP0RiQFve4pOAwRJA6tumvahpKiD8eOhzqPc7vKmDYyvkUf84N+0jQmPkr47Q+T6dBAYfKGnfrXZwB4aIsx1ZSgzKb0QwzWNlgDbSUf1om0lXbKjiQ9QNIXFSAMBC5JeLAo2udQhM6YYQxxxVchhSz3k0rPJSqMF3nfXQEDDOYmJOjiHx9MJZY+IJEhGppLj2JuuXyZx+UzUGa1ce8Y/2im3NFBuP5H5W31udetOITxU+lm7dqm7DHiPQ3qQ/rghSs4p0vI+P9QSZxCs8GCOv2iNLip5x5p+gOSKxA89Hc5sSQ31avWoUzYk9oHoaTmsynTDoMUaENCcoXkDG4iIp37UGiL9fACRofrBmjwzxFg73EiKBdmodDhN59pEoXK5NZ0K1R/8aj9epYrmR6z0w2otxQUPST/hXBiYcQHCJQ==';const _IH='09c4d1dab60d88b8713165b0abda4b1ef5ebc7133267ced8eac42ad54df89739';let _src;

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
