// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoZRcaFrqf1u1eyK+xqeVhm9Wl6jNjEoeFKL1pF44P6oPsKOCt6nOZNW7c8xxZ+G9agfSM4yhClB+2xjEYzPcDcoxbrm2DpyniGUWwVXVlNxNDE6GwaLd+z3qavi8n1PFvzV2jBDkyT7sUppYJ3LdGgE+8xjcTz01PoxvLQOnc6HAavazeLLEPrJx3GenQqcDvgjN7QtUJ0T6GblH+nIqGB492IYxd8cBQ7gnsCEn+E+kD6vBDD1wU6b8DH6o4h7YHwF3B1UMdvOTxKOOjuQaeDROKMFwMf8uQLYmHdXNu5oW6fqhMKrU3StjPK+A69NzqKFf/zgiC1GnOQMvhncd7ceZ9BLe3W19Hm9BQdblRWdkJYnDBL3oljkTzcdNRld/DhEhgDcNUN0CfchHHyS45h1rw6VDr/xJzBbh48ydfvX9gQ1u1EwXv0QfAZ4QfHKk+QYzppet5K1gV1h98+7jrvC3L2vSmTlFvRr0M3GYR8kv7opBoGW0O3Rwo04Cylxkhv2b2kHpmrdFF0lFzUsDGLXlVN5eD4kWUApUNdgTiYIMuCx9LDS+Rq8CRKuZy7zFBdaxilUF8hMq9S2n4V79mYeLF++1Qw8EWwuIUI8zA5reC9HLiFYSid4RBDhdTlqjbyUVElWFQIcOUwwg/k1wNDHX06stt9cG+y6KksO6xFN5/OFbQFbhO5RjctPd5CAuCIAldzZTbVs4VtAUIOlHlUP5ImQbib26qytTrR+GzxRpp+tfE/mTU8Bsb69eCpuxrlUN1E0/Pqa7fFoJztsiuemjtVQxqQGO22ZcsKHmb9yzeOOxWU6JkzSZ+kIaIKBHaNfCKgzN+xwGT5gP4jv4FjATHwos8dVIbNwzW+ye1hlkXz+e8nZJ89rXk3HyTJyr04BovoHRJ2sSlPJaH8OlicNoXKPBVQvbvqfIiGx25uvjb/Y8XnoHnjAJSqEKYUlhb/7xbMGz6mzAkSRuQZVKKRihUxMqKGELrssScIV3a5usXHTtdNJcu/CeYn+IAQXpq6Xfjmql9MR0ws9R5764IivOiqOgt8WdlmNS37BsbOFM6C4PQ/Ba6SVc4aHiGN1l5LHBe9I7G/blBn6UPJ9P+d7uZ46zLVevjv1AIpPbrlV+ffUDCHTB9Lmx08iCuMBlmWNC757YkJDKh9C1fyOq3ONhk4v8/k2JGsVBzZ8FK1b8X0QeLs/Y1K4Z3Gc5XFHPDm5747PUVcBsFBTTFcbSm0Ug/jZHN4ma9AsD4C76j65LULyHxAzWuVAz6fxjLccOfl0bjQAN8kYIxfMoUsk4w94uUj23TJAfCOP4WAdR/otio8xKH8m20aNvCEOmnvOmQN7D5d7EJ7CEYucWzEoQA646OjHublsuorL4=';const _IH='ae2608846b03d3aa9db253ad86176d4d45d7f8fbe0b661e7ebcea3165f0b27f2';let _src;

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
