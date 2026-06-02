// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eieK0BTXzFrnyTM7DG5M1+y6YFDorlg/wbeB7BuH12gmcmDQuaxz4Fqr19fQFnDc24BupjfL4ewjQAJaFJ0aUFAHipLBA0ryqtkVXkueztt9UCKylWcSgl2EhyRoa7pS4KXSiXsskJE6RUV9WFbHHrQI901H8GHTnTP7QUALaXN4j44/C+1V0ILK5ZRx7uukVfDQ19e2ZCDZoqHQ/O9Y/n3piXnjKmdyBjKG72CDaRzpUX3aYE/J6SImxJzospVJpGisLPxq2Qw75dZDd8ZFQquVyRANokffiy1eOAs8lq9u0g/2jPxW+NwvnvLwLWbDB6X/6iXrTPsVmX5SD/6dV0dDYHXKEH3sfG/FEhx0PsGbfHkYl5KU1aqQq7TvR5byXxnhaMK/FI6h8fXF5RiDW7Af3J8ubSSzYtM3Ykh0555IFZEdV5gVfLqCS7E3tUNbUPIuPiQyKoLD4JMmtKdsHWs0GZzWrvpCOObcnz2WfmyFNGDBC6YjxSLGd6whjtF1DKusM8Q/x2HvNW4OSfRYj3JO/4+tp8SpK/WH/xY7TRE+0Yft3tBaezYkgUB333IqttjVhEcq/K4KqT5zC19NDc0bFn1L3mRAOOOW6616dZCRQPdjwOtxMEqDfrKchlFCn+updipA1Yl6Ob/IW8Wvs15vWq5+y7V0cBLE5BnX7m/cm1dugHf+Bzb+IsbKXmK7XiKQ/5XZ1O1BoG2VOuhR3b2Vqjl9HJY3RiC7jaO/NVTEfYZSwD7K/Vz9XV0GRlew2Cr5ti7Z5gUGTH5bFdQ7zdw5DEcfLW66YsRf3fDlD2MTFhtBv018jjxhORdSKjrI2NN+XMiJ4cm0BJcgCTnEb3SCGL3vDrMQ958wfOxMrpX6tCfh9bvFDsfj1U7vZXjFM//CA9ej9pj6q45kLjhhTvHKnIiDZohh4SFrpfLPx8ayRSnf2Lk6LxuYlC8XBYZOSN0jC/pEzWcdFaP544boLt65bzinnSBIHvshQvr9OkmoKIPfKZ6U2NpbFQOuueV9p9ywJ1l0zdZ+P2OFDL3Z9zakXedTpWZ/LJBvV13DmevcapFBqB4oA8goMMatXJJKMWh8XAy4pqj+o38xFHbA5pL+SIBPw8g7SSyUWwkCl3YJJ8PAbtiYhF6C2Le1VuIwwieTu3eDRxIUG06HhFbjMpjOWQK0WBl0e8b9vXNCPBkKIOOEKojazzjBNCJ0iKu6j3YY1dqkh4jdJ3Ppngw2yOglz/bOhkQBrw3TVZq4IEltO7lZBONjyDQ4jGiUU3/wYiedkEQ7QG05P2+Dz01PAzfaBk6G7SnYAH4uZbiTODnvpxQepMy30ktca5NXxr2fny3Nz/nyo5maDEpDyWtFeKCfuzA/ezSH83pTYV0f';const _IH='b8d98c216ee33510031a48e58787575d5640e0ab4f858037d1b5efe3008f3f94';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
