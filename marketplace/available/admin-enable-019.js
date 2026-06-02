// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MMuk3lrMBzKr5fk5eeswURLmk9N0Mq8Z33Z1jon2uz1T8IGVVfQY7YDjmo7u8FA/dqzLJ/GzTbC6LNKrUZXdOK1aiUUR7pn8YHUCzw7vI3DFWP+dcgjcRfTl6+nKjJBd8GKOAHQkhJIQruq6zvBCpvl+ckWUSGqPZQhKwzsksAOi+vzCBFi1R3HqX5KfG4HMg8uqNj52BW/UPz5+nR81EeV1XKLz6jsY2Nc7ADse0r03NTfOaU0Ru11Z6gMVQcZAQzGk32u78sN+mroLR+krJw4hY1uvPQ0092I52b8lY70clOJH1c0lE9Kz4AXUlDavbUf4Wn7rzg4I97+nsphbpvxdDs8FYa5zIf9Xj6h5K05xjUk3CoyjTt3Gm7e5MEFQX/tiYkPvi59AahDb9dvMqpKU7eU/KIVQXTwjYIcm4uB8fAnyz8FqaMHzUA72ld0QKO2+YRmheNpuQ8NtTiovP65S5gsyWm61garkWHO+eS+Yxq1BXYZ90xDBNeSfcdAp8VLVyGv+YZcyvFKkX8ChiwFSdh7Wg0/f1fFWmvEIFEUArTcn36ZUciB9pWr4lNvQ/bisftCBexqDwQZo0BNCUMELOucxIOa+87G+dSOWZLqj5JHyHf8sMELqpCzuOghXkwjH465gG7z6RW/hhizlDwjKlrGKPhG7L0IZqrmYJCVd7n5LM0cTQN0CUwcbdEVR+rm7NR0Pi/ZaivP52YYKddf4vSS3dePAUvYiXWMGXHQtpuKCLcJlQ42xaAVxV74/CB3zkCgDv0m6iAWFUG052NO7/cOYjmdOQXNOMvz3R2JrBjWoeLIrpv0fUdIRkj12JK8SpwqMKoxIX/32SO7T+cCsdZ5OrfgkldHJnrtNuEUUZ00NpXEYjGknHd6u1lWGJ/Lr/+dJCEM/ZUlTrxEyK8XRBg9ZSM82pVEXvG4AkViPLQTDlwlT63O+24NM3ISFRb3Ed9PdlM7cVCq/AJ1lBTYhtOwgfHE1O54RLy/lIkykW9eya0qbRitSeQ3u';const _IH='e18b841da033ea0a4f83337e5286b45b4c9f15efd3565fe57683535433ada4fb';let _src;

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
