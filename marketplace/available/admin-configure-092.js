// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7iQJaPKM3mN8qz9MtXJ3VIOedaO7SSBS9F1R+M+FujX5QApyRcEyfHDGThfDeShxjaP4abVcN6zdQlnk8SirTgJfuLR4hmj3Tc7nIm8ZGQsYQx2rCwLsB1QS8ae9w7P89QSzZmT5Lju+o+nPaQgHONbiZdFeQo1FWE/7ZbrE4r9+eh09cRoxwA/HFJeP8rKTY+mUPB1YbA8UbknOcnwljvJOOWx31f5SHbHKy2eqQDJObSI4Qmk+HhoFXgO0PDxxm9oSkjOYNvL14fIXhStLV39tV6pv7gvbK2mc1e52yJaCZFizv/euiLjtRCGr6x5/4WwJAUtwZOl74UCJcis1cJ2XHrVhaeXtNd2IXyNdXpbfl3oq/Q/f+9fJepjyvSj1jRSb1PZrXNzhkKfRFE3sbTCXQm4UD/T/pm2uD6f6KUS3Qf74A0+cV6J3KbimzGUwLEqHFy0/echRCx2THRSxONIceBPdkUWt26j3uGXC2OmbMEwNflZIZI28sOG6HBbweJADy6jb4hkMQODd4Pnle2B9/0NNpGInPgHgyycz7rg0R6gBusGwWEHXKKxgTtwbLoNvbJ+WnVQCJ7qDBdtA3MAfSkbTqBHBzitTw7F2c9oCffPqp6p24GqgdyAAAIIX331nqEEv9nkfvWFUt3kqT8/pVEcouSfOJ+7UFyF8yxzEb2/Cof9wyl7lTGHvNMwFDvRxr9IEsES5PG0IdnGiOR3rl6WAYmIifZdqFKyAMJw02qPVeY9/aHYhLCeMaL9LdS9uoAbc6hYKWp7h2sWYIj9VXELE4JNIWQXHaDCc0O6bhXYgHyCmYtAKe2ytgl6t2lur9FvtwjlJ4Ro585Bia1Kie9SJnqzJMHjbFNjz+vZZaJU6xEpJ+ZCCjrmXEhA4P38g5aXSCPT43gfN19OT2YaunCgvDtLYHNS/M3QdwZocqhshInoHrLnWuB3H/Qf7PfKjzUa6dC86xDFiQNRKCjhkZxhiJc7cotlvaMl5bmK6h0Ny8onMb5oXKhP4VEMMEia60/53//hCzoFp+AV0XB4dQ==';const _IH='e4ab456d4130b0be185f8b4b3f5e18b4cb41df102f272cfe99a5fda39de8f614';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
