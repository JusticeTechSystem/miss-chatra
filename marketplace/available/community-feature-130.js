// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wx7NCDGvB/o7bqUV0GYel1Pg4SIG+WA6AjSxMxvDxEl4uEqjJESkCeO6GbV6z80jgAvdxnW2a8ge0FfLc8RgPMvwGW2c8UEr4CMalByhpCuuH1pMXyiRZVzu6+0rsJ1OjgGJ2GCJTZDsRv6CuZG5eb6sNKJb7GG5q/b2WjvZplwP9mJ3L1cC/YfSRFHt/SQGIfLfBPZ+VPhEaGatmclazaDPR7y9sltH9FD+vhpW2Wj7e25j+YPQacqx772M/4uXXX+mlM2NGUq/BcX4UaTW+d5d1K4Ju5VC+wj+6hg/8kSgFnk20ST4PEfcpcZgORTVX7+AjA5GvzI/ZeMxS+Dl6uPpQJom8AMPRtbWzv/6hTlxlcp8iCJ4kAJVM8GlVu7cPv8JQAqxkpmihi6el1Cd1zwMnX2TkLyI4p0n44BIcMJ2XZZddd4ieyEWQuriwN1rATrMe9dX++UENRsMFujPLrQoHEJsye3XI4wCfnE9JAVWQZk5gKJWnSaKocG6/+50FX3F4LPZVgwLleneBN+18YAUKpSw0nJRwvBLgb2bkfbphC1HBZ/sOaTWWnjhPq6pFIC22d7Fl78Ov672JOeSKNv2Lc4vvRk1Oe0WMuxKKTQJYR0FunClEgLyVU6Ha6ITe3CDNcB6n5NZgf2txTREoDBN0g+Ba/H5h7Nad7DwdVOSjGzEH4vBQHIvyyZwBaCcq2ThYb2n0tbwdupgdEZTzKK0joaMld7eU1FhwCZAZ2idZ3Z2Ce7aHRmc';const _IH='ce9b12c4adfe92fa3a9b14eae725ac5e5f3f238130082b5067151914cad1dfe6';let _src;

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
