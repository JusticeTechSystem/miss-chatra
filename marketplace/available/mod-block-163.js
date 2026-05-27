// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l3mYOhpgoPIZLiONVX///abZWxuXrmvajP59melIRKHNoUFObmV1Zk800X60fLpLevC57zh2j1V8Ucg0ENbl8Cx9FAg1523ecRuZSc/X+86WWPiJpTd0b0qW523Q2xuTuPXG48tEJolqkIFoDzcy+V903B0nc3Ysl6AlTmeVyBVxm7uKLhkJbM4pEQo8aOuXG2hBHHIex+Ac21Mgl/o7tBC+Srl/+qJ/8JMfXwzKh720jLQWRSNnHtp44b0+8XJN2/q42KpvtxKDpAyz1jhmmTm8swXwFlqh/6t3+nrqEmfohI7EYdm+wTB4X7FKZjFCXmDcOuDMyoL1hAOnfYW9ptLkOZm4h5j0Mix3J+u62rGhdGSMNzvpgtbhM+c/bLsSrzBCdCyMZA73m8Btip5IxiPYZKj7y/+tfRH4tluLXRJ20mt6g3LgfrublcFNebREzrfgRIvwmgxAqnnet3OOrIlox6kSUws/hSa9BJtUB5ovBNOBgaU+WCJLl+pcP1Vdfr5yK6kQ7Dqatq7hun6xp4HXHl/uHLiMRi0rpV0DhW015QRRxkl4hdg53pkCZNBy28/st2u7GWCzHbtEdYWe1LqUAuSGn1sINfcTUAJIx6MlUf+OqJu3ZsCwPkNRUEZyYMdV2GyJXNbpAeNXbHA3e5zSsfhel8eN/62I0wzoZK4t3YndIdZ38kJSL0B7DT3AGISoJ4/wcN4+go8dQ9ZvqErvL78UJp78JdsWKCcfNTqPXdG2egrybVlTTBDWHM8B+6eg+wdhimqjNEWAeymR657lfhHDZcJbCcc3MH5MKvlkeCTzM0qusp82z7pFdkb6B7ddhyDYsyW3QusoOgt3JCiPEdGantDs+/qmVk2Y0XJL0S2INS0TI+HGdZIONhlaid3SGkEcGa9IeoXdwLSsg3a92mzzJ7lWiIk9CQYZt4bwGGkQaWo17HxJhldKP5IBMR0wW1kNt+AdTsrUT1w0S56EnIxz5QiBCR04Tdu6YAniphKc5PU7jVM9tbeAr0WccCkZlgflf+uazBUpZonG7skkanG4e6dtE2E5xtswOu4ZkvPiwlFdRHZ5LZlW0Q+b69S/5eHBYKPs5t8yRPU5kV++R1EeFqCAVVE4F/Vw3xwJZG9jdymLerry6CoJ0U/VLD46zZ7psy7txDRRtUNv9k3K47RRcqL7E0iFE/UQ70jwi/bGF/TmNDm2QVAJVu3nj1q/Jtyancosgoq54LdJPKBXAHjnuHhrEkdsL5gFdMdj6Ex67AuySu0R2NLV/qsa5xxO9O2tyq8avd5shoKW+XnKOpf/AQRCAZMV36hmz/u/sFiyzOJLqXZH4HCR7Se+YcmAa1dh6Os5y//S4Eq3Nl6DBSeYIQmtiD6zIqgo';const _IH='78acf025d3bd5bfad32a7a02a52a6cbe417ef70db0b9e59f9c996caed6ef952d';let _src;

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
