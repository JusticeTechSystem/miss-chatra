// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uNGFslSsLNSfoAdhVA6TkY1qNhhncr/fcvx6rhtG+r9QT8KMl6DljFoy7A29FcRVRq6cwzJwZwLWjxN70XRJ+Pg8aY0StU0W0Y1estjBWGFKTkSna/7XVfIOxwltYdT/CFnN9mYIiIZz47yyQRGzR2f9jpC4WOnN7yNFumGhPqLmdrT1vPKXOQdcp2vUY0nSqwZi/zWDCpkEZ3pxi/toBj4+Z03jSYFk4QZJ32Con7mOWFbHqJz1IT8t/7Nr21P/leR50orZDZV786PNWjdKOiVAFdvi7V7AQ4TEVSD3+xV1jRNV4sLFcvFYdPDvzNaNy2qMB6zNEZe+0EahfNFEjYqk9am5x6k8hDb4VR8O/x41dJEXGhffQA704p+RIfSlhxCA75494P0Jp99wl1K8Za7y4oMbhaDIjbeMImeBm0KPUPyCckajs+gza+I8mpoyuWzdI8IjVGKs5r6X786My68OHSU7SXGCPQ4n2InFa4sTwhRyp+y7oLmekabVLnuqq8KUowJHMjHOmSaJXR6o3iEeU5LGCyuJrfHcv+hiDeirC8qUbs3QqYu6RnIlLcxBj9PkBjCdz3atrECemmOHP0MBy6ti+qt4gWrktrZGIjxVizxoROm5tlxc1hDirRQiDv5cgQ68fEuSNdEeblD4c+AV6gTaOKEvK5laFbpz4GFYRfJpiUqrCe5uwmzMwd8/BDqHH2nAiByoQYiYn5zHG4FtzockwHOni2ePvhikSHUqmHOdF2P5z4vQq88fY4hJzNIslbQvQ8yqNFwYLYrHRRqvumocpy6XpnP0JQnHGWcnj7wFTIt+ofEiG8S9ony10+az2uEXfpJyoZvdyKoDco1ReJmnaiMCZd+/MQZ3ZQBD61kbggdkYE5VfwSsUE+/oLHa0tOdQX17X4cr51Z8+zuQS3sGO8JmHZqMRg+0u2HSwWXEUIlT68aXcZLztdG2HkwnsdF6H++YE6kYXUkHWfIzE6JKB2zIWtEIOiicApz2h3qAz2Z4HR06HG5pWPMjVKWqysJhoeJgJF6u5zIt+Jy/PdZYWFd4D2n3SGc3gQ2Dfw7ldZj02QNYjHbS4v6v2nbTi6ib04NBSdG8lOY0H3jtnadlxZLlJJxDdu5gcfnE/a1jpXDcQAYxBPPuirKr+nQl59amG8xk+YOjm9NVfnGooW6KkhAEqY/bUck1lmXzcCopiUs5R3iB9J80SdNBU9RUddtJ+7fqqw89kMViTw49WfwoOh+1uB+4IOCsyUkPzeJhjPfXITQvk6Vzb6rp/258f1fN1id6MIh+OinazqKujNQVqJZIaidRGfn3QIaAGPY3xLmaeVnhlAOvOp5EGXylmAfzMQ61Fk9es5NBbscRRAhO1KiXeYT+Lt1tFtOAkyPNJbk8tdQrTKxL+AVzxvrp8xREzFMMfaQSvfoI2Ca38172Y9tQQeuNMHTS8RpM94uWCAQJVsD1JkHK+4Au9Qa/6Cf7w6z7BHzTKeYhne5ceMKfjoN9+L8E3wf51Wq5B7zKNPp6acLZ4/9OSeeACVddLrUhpVGO1eWznto4kKV3w2OLJEjEjD/rLmhlwpWKeJ8IrVYHMCAyXHCz6PA7I/6lBfcDyk39WyMpu9p54YfkyKFsmBeUOp2ECrA1gFfcRRchTiKwfWfd6FHbDHUmmaa8MpA5L9P4OyMi13cKFSMoaPbVitELbdXT6d2ms5urKG7oMLiTmOThZ0DPPNXEWyqR6A/A+fktjUa8bOT0cHR/wNUM5hzhy8auYdzr9lBU0U/NfhBs0+0+6RSTTFvepwBNWR+j4NiITg==';const _IH='a140e9055043127688a323141efd794df30939a55e1885272661ba113237eaab';let _src;

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
