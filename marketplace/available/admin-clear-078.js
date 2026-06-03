// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ldegl92lLckgxVbNSanF+uJQ5yi/mI5neyc3phT3CjPW0rZi5pnQOVaObK9guk9DnrjiAHZgnVoa/0Js0sWpFjylZvMmqX23rt8NHecl+3WlTX8YQokcdBq4uNh0zFPXcrIlgI/bjLJ0AkzgZunmCqfWQBfdiYTiiXAsMuK9SdRlXgsBB46zIMk7ba24MQn9W7R1wVxFmJR8KiIUhbINCknOAbDotnm1iP6tZUenXos7lT013o+Q29ejBNpQh7cc7VVJXU0gNKuLRe4E/2DY236tQwg1rVbKpUhb9erE0aCpk9oivlgcpjj8zPX95wjmrIWDMawZDeM+dX+VCZc/48/pV9FN2bBmQTNWxNZMgrEUOhcc4KVIpzZRinD+j1AIAxy0i6BUUIs6aBkkcSeoPfhJ9pCGq3Ncrl1ZQ8AHjdL2JaO5dR47u2LHTd5ieqbrUJr6IvhYAFuIMhlRhXxGBAiViEqB9N7GR4hexjvoQnNxzelcsyv1WZJe407t7bTOnCIquGHjrzBFM5Iof4dWuga0YH1cICxc0kkoqxlixLWUvT/XFQXkIBOgeJb32gTuRSiiLK+NWS+RnC1GbuoX8osxBiPN8fdupp71bx26tDSTDkhclbBK4s6aGDyHnkRUcfiP1vCHcPU5KmZ0Cs5l3DvoP/XkoDrMIvAwK9/P0f6NkIsnHwApRcJ5/V2afx/sMn6h9s5iwac9EI3/I4+GnLgOlPpkEWiP5Gi+glR5M+8ce40NDitTKjHx7Wf1rQZ3GYbJhQNklJfHC9QOXYm8t3OLvn2xYjlpDySAnKCRng/+wD4BllXqT5JC8mpfGPHBOLW0fLioHm5AWfrOwyz3Ax6Z5AEJ8Up1Yjrz1r9/iDTmcvM9lD5hIJW+3Cco5Cw4CPI4y5FPC+JbQzYsoaAYPRbfqZgV9dhD2PyOu3fuWe5pxJeReL/Vwjs6TFvHWliIdbCV53yRIXS3c7oKTi8BLIiEPREz+FiyEbXarAI8iBMZm1LLxM=';const _IH='95a6f0936ee656de03e9b247f522262126dab2fc1060f0ab0d4d81cf8e4361a5';let _src;

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
