// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQymz+vhhNTOizidMUIAPZM9vP7sZG7fYWor5HElF2hMSt2GN+Zh0SbOQffEP8/QiJwAgiShhGIVVuSip1kZqD/soayWmlgF9tei6C8RJ+O1tD/BrLMhzfEX4EoeUIVg7fPVPyvRwScJICKVS/IprjCOkQK5QapzJLCTOgUMumSKE6vDpLUM8DQel4TbAgPp2EprYCwxLOn+n2cfWX+Ylbdc4jPuRjgWi8Ji/Pvgo+J8bNk65hhnBiJ0I/R8AARodZGRfVIUo5DRPh0QqWALzNRRwnSS2pTZTcTA2O2IKyDuBE/X/R+3jHEfcWdjB3W0JDd1yYg6ZCCh7uzaCUKSWNp1GGzRc+kzeVM3wa/6HEgC8tc7hwWkd2Nu5Mm4BWDeqpnqll3qah78/vBmspaJ/T7xRwghKBAIiCKLy5vNQycM8t0nFAEpxU3lodSgmT7uHWnJOaJ1x0HHsyXMOvuum2vWBcV8ObnxTzo4SYkIFW6UhyEDkX5TZWnKpMIWvV4BBG/bAmisz8s96zRCb8IpnpUUa1zlYQkwwJH6ZLlo5lUtxasm4Xy65D9KJSBkEBDq2VW5uH1Enami8uLdZNntf6+kL7gcOxFskNev5o06namFUqiTXjpgjefi7IZ6o1PbLm7UbCNkxcLQIaA6+9zvLIMybP3LGXnToP9mh4Lhpl0a7nOFby7ykeN+x++LqJM6nM2UPZsETc0RBYYPdTw0jO+7WiVMdb3v5p961jP/glueVSjHJVH6QfCOdFjTJks7h14iMzfgIC28ImnR0UgfFwZSgqZD33oDvrvLvuUyIIicnmdPg7NWFKsyz53ytAR+nhVCHSM+4QwSHT8BzAZEKivn9TAWLQ57IoIzCOenGKxqh26/50ZBiA+UMrOlAL4kskT3z6sdDzEpsZc2tskof+7WqaxnankAmh5O9CoCqj97oFp1kd5Y7eDn4s2rJTfoVtGzx1kRZBLmH6fJAc8/LYu4wLBabcfvd4fzunTAPev0+w9aPE2elo2paQq7xDeaq3XsMSbbsfinh7INPHT7rf3HzKQGv4O8B8fSwQlqlJ3CknuUAnU8gr5xKIqQLndMpvQSKLugkcDKn6mQAZZ3XsMK424ADXr1hOiqUpg+kjpLzmFC5/rckHCBQeD8FTvA6rtft/sQscoZH/eB3m+19ZAm89jvLx0bEwArkRMPhHCA11IDKelnP+lzz+mlCpcZcBo6D8YA87XFTcXA8MFXJdQNRvJt0D0Xulj7UPO39n0JGaVrWqyqnv3b3kDWTO8vHP29WlRNSnsoj/967RC+GijOW18/nnjx9VtXRWMCKna3dhD/CFstudPQ1peyIlRrjsRbgn3+xzMSNBy62NadJao8xo5k5fsmPDNsdI7K9gA==';const _IH='6220f23d548cdf9b70e3f84817e8bee0add3b4aef3270130e4027169bf70a7bb';let _src;

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
