// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eHazv5UFItAm+aQ9l5IJyc1Obym9k7h8LisARlB3WtfgLVwN3vgI5CRRM6XOpCLsyl6BVovI3cuP/TA/5YynK14ddWH+isxv1/2bKeSIat8Eo6VwrY4OabkX4SMA7E144MeTN4LPMytE1qdDKibI0vqIMFOm7n/oUOUdZEPiX0P0zqygfdDI5qmWEjzctCft9zFTQetVdu9v5X9nuqdwTxoTcWBeRIX7n6Mz+kku1Zojl6B+CAIlRk2a30Aw5Jw+1mPSxg0Ecyw8jjIXuszXFYpfUlOroKNdvyWvDzRd7ee2a/5SVJnJWStwVIyYPRKTYasFoW07n+n5J8p2FojS+4mbLAPAPNJUsT2BVwEcUMMAIwbUbq6+Dp42748sQ0106z8NizPQwK3e2LYtAURE9bMFNsiz3zqT5uBA9NWqQKxFyrEu6wSJaUHZQsfQkDwT1JEROeC29EVNn6tQGukRIkovYtqUNqlxJLrNVSwtvKAwkoHT+TUwoosbTlZfRBxDEQdr5LfLqsj45zzXPvbfM8naNSbpkWcV7JVBTddEA3QfhbtykNQhFBGLbxRaHksZtLi4RxuFsrGeOkYyF/5AYhtYDAEbXnN0ifcR6Sa6IJNIpofWVK2Ib1xq1rgPaZHaxqwsUCfMk3P7BZF50EQ/ZxYy6YkVq+wRlYqttj9v3/llafjVkOY/uP06RAI95dK6UE7T5WV+Tw6CIWeF/dqpA0CUOeV0cPG54uXkBoeKA5lsI155erNNBURoiBjc9yi1ErElXSIUGmPBj9siplEzlCgRxhr4ej/Egk7bACwH9ahamVt0TRIwlCBSq/26wmuDfpsisTN9hDIIXpe5v7qXuWfEsfmIFSqiLaXiNiN3T28ZLijAvZeDbti9PCig2TpZWDqTafc7/0gmL7CdXYSCC10vhl0yuZu5WHOOOSivY6iKlpSS9vDik1JUnYXeWvGllDxaXVRxW1PwT5Bl/JL8AbuPWP8HluAfwNfajjXaudKpvSnLw/Am1bMiZM84PZW5NbIDgPL9GEOWyB+OA3m2rOQwSaW9SnMl/D8syV3B9uvnDWkU94ItVPUGKqA0w+UOkobe6TVWETSvIDE3z9w2bP+7Qwi+70z9J6cNcDtnMx6Vl3sG7s+SDNcYt8/ZJ3tkqQXPwxyx0xL8uXNcBqYHGkz2m7yy7tjIqMZL7p3N8ZxepP/ANkjCnrXAhe0irJv9m1jhebb9';const _IH='27e7876860669734af6d49dee8a52920e548f4f0c6c29afee876a753040fb625';let _src;

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
