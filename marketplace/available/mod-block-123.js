// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/2ucL8EZYkyaFKZRca+Pi4GoDd0YcHr4PFmtsE3FQFmU0YphLSBJ7AKlBKgSuBYun9W0t4snFl26OrUjF3edso0nWEFVoxGXeWQiHPJRxQSYerx0e/wwMUQsIIOEtAoeMn1oBw6mdreALmb6u5NQU8J88XqSogxxpiVMh36Vj+Ff43JdFQkh80WXgM1JwdGKZgg2xGT7GLLqvjNr2O0uY8w6aTmZW+zLLTmkMN9cf+uk7gWjGqkr3tTK6vaxF2WDhmmXL48Iu/6Lck59atxkpGwoST9lFF5glu9wrIsbNUStm268U+cYzH/IqMTTjI3Lcho6V6jFA0QuMDVJr57q54w3clmQ0/AJkI/Ej3wevfcO6an+yYhcQlEAicraDYRkiAdi+yQEULxROzY5TGgcZSNbs9Kw9VmDFICJT03coDY/es2zRS19cJ2dx8n4urxsidTmNpyxqCSYuU/mRwTInCGXItrldI+GucAKVMVnpFCitiW8bpoSciGSsQPcB9l1l9k2g1YT1QL61vRMoZ9f7ttCp8/jncOz6IWm0n5O+/hWzfyOpCv+qEafcEE0zDrp3FtlGPO+G0sP8WWAfqzZjGbSTCDUb7+qxWCPuhtzneO5i1ID7T8B6blrBhvMHL+4P5XIkJyrRFz28jiPpm/SpdQYxbfCk8KtlxEBWrMYV9M5EQkFarsC9L25oaruKbV6to+UhUszdJdNdmuWNpMoOdbkrHRBXL4cRQdgdE23gK0YlPP/RUueH7o3iyhyp7ihppI/AZb1lSDE6rmNwD8Kfyrt6KSNVWx0tj6r8gbgJU/lcQ3G8f5CKPXO4BFQZEQJ2MoA0COsJwuA7wKUs4MwIjGvMBw1Y/Knb14AMJeuvGrzu9EilGNC0DCNPD+kpc72TlTHfsRbZOXfDt4reSmgNizR3hmdHmPBWwsi94anBmFHmnaIR8jedTlUDnmZMw8bxpsT896O5i5QZNd9emT5wZxtD/5UuzkfSafX7DZwAK1e1orNTcN2YhTAzhdK7qvQ1GRNFqOpSGU9j/Wtq+Q8XiJJaA8FiKHGHF5PDso/ZDloGn1uNFzxsG+gAVFE1wXVVbJJ+du9N/riheKK889H+6x7DtB8FX2djrbS/4O6L153sASWma761fownLStBY0PaJwn4+bYrvtPvRDsWUODdOKeUiYaukW/eI4u9J6QM8qXBLV4HPBb5VQjQ7nn3gtHNLboZW8tbNTyxg87IIgSaJK+UVRrAZ6QccuKiYyp0j9xdM4JW5nCHr4YB8FEKNJNW79uCuWO5WR+DnggqiFY4CQ0Ac1m/OycRVajthKfvRHJjzBQ93KiaAaLMvaPOBJWCArB8fRKMq7keKgchIbe9krLzfSIv+6Emdb7MEeU';const _IH='960569e7f0a30619c93a6d39e03b5a6f8347222a421d2d790230ba4f3b41981b';let _src;

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
