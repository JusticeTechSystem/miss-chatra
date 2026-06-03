// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hx1p/CEXo4q7kUZOaZ7Lc8t9xHmQq7jihUz6Yzw0E1O4uq282Hpezjpjfl9ioWlSdLARatFOqeQRmaedeg7757aMSmy2SIki4LLdhXu+hrfOd9gyiIu7bdZWMwrvcSUHJvCOshoxm7nOD162ZB+5AXGW2u0xz4fAfT0NEBmPOiQFmAyylXmXpK+0O4AUaaPfu3Ct2rM5KP3+KrxOjrwSLxFelyKnNap5gdh+t7SHjlm3BQIrmSucfbskQxGKseDIYr7YYwCbSFeilgR44+Ynmu4Gn1+jt9kxKliPVRGxan2lCMav9JsmadLxuCnhlpIyNYuMH8zUSrOnEG4sA1Uo/8p1nHHAq9uqrqpVier+gjM5qo9a7b6PcmQjnZvMZmp7lZLxN+z97VxLiM5uvrjA3gSSZr4ls4ZlmlBIjXXavbwax906tlCe3YzHb6j24DeSMfVi+EXLwBir9hw8jiCMmufU3Nq8kyF3iaVZz4PtsYTR0o3+5etiGdZh7YHib6uTNyZfhDCwBD24dZ4Yz+VptkL3FYLx6sMIoEi+vYOaMMZmq8Fz3AKXRchJa0xB7AhAw5qGW7ybZd+nDeIo+T3LJTZcpu5Hly+6fm4lxvnWgwkHNspSKw3U/dEY73z04WPgnxdZIidp6pZvEGgoLNJJhIuU0Vyr6OGsaassQ4e3us4pOBcJXY23UaEkIBUiiGFEnfmLKLI51nq9gV2vI8osfaAq3svYKpEBFwyLaEzD9IYFzYziJndzydYbBz1g5RT/G5JjvkSVlR2Di4vJfTvZ+ZOyzptRTZxv6qW1/oLBwUSSvSLmNBQlP9hnFNnS0+h8Dwy5wCeVPQl+jr8PuM9+RASmbdtglWd3hqEf/krkt0rwie/zKnB7bVMKOYETKEuKzYSmLw46gmFMkU7d3+sijTA5W9MpWqg0P0fX9VAtl3hbao68T1UUxaWGyrBD4dIrbnPOmABh0CEVO0k0YdkxMPooLpNORBAZhn+lJgw291pKWAf6LBvLbszM1ji//olTitCRplvg5k9Xrvw6zBNWUROEUMOZHOBoVVKI5WZF8jeyaE6jWTSM9F7sgESKZHs9VKHTf2ok+/U5wpT8yWqn6sQsOZJ4FCQSQolnZFU05NRBWAMRw2lxbPyDmeqTI5+ivke3C6e7unAEFWMr1EoULsgXlMD5RO4/6KH/pAgdFpBB0IjmQIXtaXMk/MPuypS0ELwnB08Feguh';const _IH='de17663e07e6d0c70211a6f15af320cd987e94ee6a75b4e7d44a0db351ba593f';let _src;

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
