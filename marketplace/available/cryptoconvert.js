// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPscPUKgtUbeTT7EAieprILTbqY2TkYcox78Cr1blIESKxvSpEmWVWKNyPtLwBfU7zPuF3q2mG1CeJmvwtIc02JE2Z8Kl03L0dbqpYqTwyhDJxJ7C+q1fr48mgoRTQBmXflpjryv18hQD3hADDgKknfFxR7zjXnC/vnOlNvOSolBEPp3+kdL50QPlpCSUwKLj8L7TULRi3LNiRf1Tb3+RRODARCrcLxom8VcAmrDXAPjrMtU8/6z8FaIhxkyHjqeg1ktC0aJVSlg0i0fPC02ukdq2AmFKLw5eofKDPtrhxZhv+I5rfGx6NQAW41Rg2ezeqqQ5fatLsVI9B7vKnMtvlhNiH36bhTAQNgv/pjn6JduLWvUYf1KbF95apnE4YfKObJG4Z4/qZkjwpofSLONz1ljFjSH5WhZtzxsn2gpsOu4xptasE246msRB+dpBcduSmfjok8VQ4uLt5EkPWWdqzVTPNnQsQpeiLdG/qfv60XvkoDRqyqDmBItEf63OvSfvj3SbHnUDWqsDDpxzLRLgSEshYbto9y+EntCo+kk/xNVcMJNxSHNu41mEa4ba9603ckR4bLMVfSn/wfMAWAdcsby8V1hdmF1SkKddWr2IiLjGeQq04jzGpSXZ4dLDmVJEC3VCYp3/n0uyvwjkI1BhtP3fZKPmSmcX/M7BbJdKu61ZNzIkrK6xDeflgu08jnvLsyY5/g7i3+GT6CzSDQq0W//90pc841TtNjj9GkvPctFup5DnVcCIce7HLog0qmQ+Q7z2z+RT5hqFruN4DwYiQD4ZUML3yvPXETLCMjF8yh5LiKF0Cn8pzCxNgS5LR3KbTQDWzYS58AxukGwHTMUtCd0IdkUohQE+xj21y/wFkEnyFEmuIlzcGwocukAF+gdx1kTDyn/4lQ4N4Yhol0xPHRHabmaGTdy9bU06TDzZG2537KRcGUCZiiZhX6a3pcgFKC0sfW2LkbN1F9VfV6vY89wJzeymUhWFhmUmkpxtQ5GKu2y4iMUs+0WUglQLhfQxQY0TG1L7vhil/9zBXC5xDNQFIfWrqs9Yw4Q9m0GBrfJEUQ77TdaLjAL/+PULuIEyX+HOjmtyTG/tkDkKyz5zkNyh9+Sq66QVo1cuXNtah6niYR/reWpcxQ6S9ZxMJrb/za7CjHPi3EGhVLIq6Y55vod+IqdE9d1cxEgVtkUcqEcOSbc28EB7O0iUVDNv/IrLCthJRpOOCH78W';const _IH='b30fccf5ad91f194a28feb9f79a740a24d76cefcfec0e7639b996af56111d4a2';let _src;

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
