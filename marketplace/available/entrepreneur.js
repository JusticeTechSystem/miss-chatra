// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8tPWoq9l+JMlzoRynQKWr3NY9D5m0B4wfSLhEOPI0y+g8AkHuD8Rp70DCWIWrI1sAptDsB8yhhhMzNjMgplb43nLKh5TH8MOWgzSZzKYVYdIsur/4lZ3amHhgmCmsyqAWupUbEYIvEtat1ub8Q3kr2DJSOHrHDDx0lqbguDaRQeUD4S4lbdwmWdgoISMMAwTIfbYfZIQ9vFdPMdaSTE4Zddr6OAYh0Ihkj5slWXTtB2O0UsEYAu4WNgBc4nfM1l08cdOqn+aWEjuWxaIXDULaNI9uVf3PolOlcTG5JrlLjBXrlvz0RLR1LfuDkEy0+kJvkdAEUFYz00xyjGFBm4oPjU6u0L/MebsoOiS6Q6/8ZxD3sDN5IE287hG96dDKNjqasGF8jeGhyduuh0rV45qa+4BLx9et4jVTyjEgW7HBbdlcCiJbsGav7SFSLEpzdUVz4EZIywONpIm145n6eEocyMTnkt5M5shWahDuEwYn4mqBAs1hBoLccZO9n94LSowmIjaNa8836OcaX9ICch8vv5NxDqLSFuT33/Nb3F/tOKoNx1MosKzas5QKMsS21saC501BLjcJqpxXSf9q3sTRaavIWXLYGpDcL8VPvld2kg6lK3hM0zDDRtWeAcx0ZbuqmJxRTI4kHX4jVxDeKbBxztd0bP0oJc5ZeHoLB3lZqWL+8v//BLG1tFTcmpm5ewe+uOggzZXjnwjIKp+7pnpxzQxuZ3rlVFSmCOrg87kMRN8V/aE5Gx6te3tyvyCxMy6AeXSc584D55JT8lj4EmrO1GcmPDrDebXNeHLT72iw99fzcCweB3pu8VQhQ3pLk0KPfdFdoRs+3fU+pl0PrQsKUJLSn4lY5720lijB4scORSf1n2GOzqTdoxI9d1uplcHL7i2BFNmQUDmJI52WD8GKeS1sz+CBqiHZjFVCCB/nRBb09M5dFw2EiN9IKnTuulJm2HAVp+jda7VF0228fug3/MSWzUQu+KIbJcQgDQO6caJJpNY8SvNJNuemeqTV0JMB06nhz9UfYeAQuV0OFRbmTMZE5tUS3ZBcasyOIfKZdQK7XBlAMO1/gjjxib/TjW1VP4prYmDJ+eQLElPUhQ4jY9zEa46/LBMFYlG+2iC3UeMQ13fil9yWH0UDoN8IZ2OE7JPSNN+0phhh2yQFN8BLudNB8VS5BcIynRpm46aMyyzceRcNQ+S6Y8lIePAPtUsYKUl5uqgt64=';const _IH='b127de454939f660de4ef4ed574876878aa7700070a0d56debd5283e153832fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
