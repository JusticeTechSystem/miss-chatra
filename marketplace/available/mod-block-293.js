// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jrlnqzTU9hdZNMhAv3KIGy0J2ONpFt+5GET26tGy2uvBk7AauJoHVftiB88WS+q3E2+JcbwggeSniLUM6dDuHDxFHhkN7AUyzBynKI7lffmfkRwkFBRSyuEBu2pX9tckE1CNbQDfj7eJDB2XqB0QEV4bIJhJMNsV6iUl9CmlGupxEufG4D3tHdCr7g1mOyD+DWAJLd59o7B8M+NukS8Lxd5HxKELV/A07fFs92V1+O7JHwBHXRAbALAcDf/NbAF2o8hzU827Q9ioFaEYrVb3deCYXPb3pB0QTzrUf3/cPuilvEEIfYFBPbJU/rsp/ELbN+6oxKzAzEgx0q9COg39ZDVOSlRuvM44aY3XAXdyzCxATFmbOmx+HzvhrLYBOkTqz+OgnxVtRYMRpK2Ke/IMWZi8zuiyS2DnbfwhHPGlJtKgPTZcPhsR4YU4ascdJmIBvJp1sMVUv58XUmGQzG/4yjNYxPmPliOIcCQzpBcRntaln6ouANBNLMHh9QQ9gLifZPzL9f0ezGwIvDm4iG/uV/Gs8zMPQQIDC4sJrX/Q83Il0V5bO5/POFXUZ/mIHKxkeFNXuc97qW/zbmPh8WbtRvUQG+Mu2MQMA5PALoIOJYwDzBMuIeahJk7PsLeEyaMgQYRZ92rUpdxXWvgg31axuLSW+utEaxRKGWSYcB2ZA2Oc6/5ZWrrYB5jj0Z8LRUobFGGeN93qMHlcMCRb1QQq/Xl9j8kCXSzCxsdSvkMrDej8YFN0P4J9rWktKILWE0qScy2FOkm/8OB/4pFBgMNSWFZwc1yKBUfH4MjwdFyMse+kCcQOg41WJB5OhFL8Hk7/sTmCeSwCHi1VKGLNkea0Uy70iEMLuJNOUVTzMnpD6syMS+g3QMUIp/8TnCR0YOHMGfpXhMJlE/wc+vwzc8zWsEXRNEHg5ah+BEWRVMx4Go6/DKEpvDQLsALXD1q9uS1z2pUae90Sb8K2jhfo2+UH1JK2+xftAUs2ruL6BQvLsy89LIBJyGgFwX5kCS5uRMjtZlqAhlP4erOXDQdagM+wkYs/49msPZ4TpPBle/XF/JXolk0KIohkxi7dkCIoLccjB8ZQiDUBxPJ3gq3GeUBtNAP9hxid9lEn7Q5GDX3dbEcUkRw8Qtnqi/Aa7UsM6UCMZi/sxMkSPoqP/RR7dhwINEaFutoMNIsyeZcd5nx1d0+bOQ5jh+0VVmeJxXvCsuauNak0IhNC3GpNbdGcEt5MmeX5m0prunoheEsd37TCUb3mTqZSeXGB1qOmusJCco8DowUqUMcE/LJDuUs0ACZwUn6etkeFPyeIcUNxrouDBuAf8NzEryFwNhtxBx0FdTBGEhSP5WfsQu1wBq0AaOL7f7/lS2YolstL2BPheRrH';const _IH='c46595847909354a00d58853382329085b873bec68fecd1a4efa28240c2c43f4';let _src;

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
