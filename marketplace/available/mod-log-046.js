// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9JdPR+jcLqvpP18Vp7LY5N/ToghRZs+56Gus/kZdOZ06390hYqPdyGymy8ZWvlf/bQiR1uBha9liPmlPTkrtE4G2FMCL/9k5y4ZfzvkskUh5zpvberCUYRMbZFm1ducKJkIpgLMuYPbqW1CSZqCnbS8j5ijrltd3VJERADXn5w1+ebr0+J8/JFp88XnDP3nZ05xU6bEsri/QVfpdbyt0DKI084EE8C1YjtsUtG1RIrMtNq/augwW4/v8zGkwcqIs/TQysQNW8UaFCmzhp1fGclBjcqxpoSZ1s9/y0JJOw8AYOFdBt9kaL3rFuQDJmkfbcTVYZw1u3XVhx+s6u1d45VNeKhWVcZtX4QbIAym1iq6fgJcN7csg6UVphFzxdSFUKv9egqgQ5SXUYCqnVcZdSAzhL32qbyFbgBKU2nhzfUAMiHU6jjMK8C8U1NFo5Oh6gDnxpQDmI7BlDS3EvZLNw/ThBbcG5y3wHWR4k8BdNR4jVVATl39ho9mBLIg63RQFifGG1Swmh2rFRzJv/A15JMqlOOsoPe/BlMwxie8/cK0v3D+6VCnKvef1Q3XEEoRPZxH7OqbG9ZzGYBPlrC1ZqbfhgX+5XTSvxDs6OIz22pGeJ1qg86sUFYnisgcfvMmfaJT1tzMFuYJvISFmP2NdK6L7WvNI/jwIvfMKXtoz1RhwztWFxt7JG1Si9XS5tyLU/qpMPYred1rAA2Sd2GVp47RE9a2lQ1zDAf5RAzkSYCmv+uEtjK4ihIcRckXZjQXGdOU9aYR+pPQ8voKil2Uz/T946TjU1pSK0pnd/mCtvIToetLii8+2Pl2xeru1S0eNNg04Ng1m9GLfzhc63yXYOlHkRo5QEcW7YsgHF0QzXlcvTG85iQpCZR/3IAaqQWM55eqjthbfp0Bh6jD2H+6ciJkFkR9bP3REnnH8M/6bqaz/yRF9rpFtgQs1EcEc9EX1E9yrmtSDniYoXolZIWIU8gPzeLxuHKxajl1m+K7DvojE9cV23t4ZDDljPbA5bMyf+kEVnViwTga53273NpZxbHWUmofjLYH8XyrlHXtkpyatQwDsb1Dw9JUsq5YlhxHBnWaF7syqRNSlw87SkbUeFHEYRezPkBvOAHsxpwH2F2I1GPIQZTkyVyMP5Skoln0BQqBtBiQfXIo3FgjsTGVR8BNHgqW6pzWE3stUP9OZJp+b3cQgpq0dhujPPb4EN5knyda+uwsGOTL1N0FAC3Qxc50XjlsLbXNohfm93cnpHGIdlriSEqmOzNNoF6BOW9mNk/x2e41299LCj3DLb2vPZX1iKEjuyuIXFCt4/fLjPbIG1yN8DonJv3Vm7JwRBpG2CFQ+6mE=';const _IH='60d5e6a0442c14a63b3ede39d3605fab87cab808f5c984afd252fc7223444771';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
