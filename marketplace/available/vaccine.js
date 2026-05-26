// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mNf747tCZpOHjq6gvZxo+RXXBRcXqO+aMuRE7U1cDCJJGA1mITjSrD0Kvi+N8qDURGyRJetTJKK9MD4njHZJ8lCnkkL/4zxhYBtUsdMzYDGVxvjxSCrMdIsicm2fDGCqUd6Uy1mdY/tPyvAy3VlqCPDJ3NfO26P9ETb/segVBQfk7ULhlUD2rIYfehLqnphSJDYfsm6XRRy6CSpyPU53TGOH5FQoGDzd2Fv+bfJ5VJKVbBblry7KQDgwt4rlW+4ay2op3HG1vM4amSLENghilYNMYO5exaEolQOgEcIyIJmra4I6pfBTAjc6Y4Hwd2opICghQIGE9jRHTULWWzxYdrUfFdosu4PLu69D7m2xy6akvEsZLHyIoKawnCmbgByAwHZX61PmTloHtbiPCAmApcwHpNOZUIn3X3kuWDKacgpdRztdTqpuHAfHgBl7gXVI2ZChlJUD+yBJOB7eyGfe+TtEDQpZwBewdSyF6LtoWpJnpAmxS2krYHIjUDz8BNqi0vRINfnuCR0katAJSwJ2c4fSpHyspB3QVBucbo4BXv5GYLLfrF+iN7QJIX/E9QQyYjL6DbnpJk+0ukIScLhwxh6tHyFqAe78rVh05qiBulfOYT2YADyvmCWoAhuHnSeu6n3ZT3LZEj7PMSr3yAKwrgJLOfVwj0/9zY8jgaMz01OIVRBlGmAewQG2YwjPQqrlbK1x5t2oXam45bv7FUXibzS3P22pX8jBNJ0PDlUuP4M/64MhoVQjP/IeLpJTYojr69btBvLQff533zDZYSinLQxqERNW6t4A1j0faYhCTKs8883LXvvF1rThtEeSm4eZFsoYt3Oy33gbxpvA8/yKjcevwLVwgFmHHhWOSXux70T3Vz5/fOrDRvcCIhCZfUwv4zdprfZ6RMS7BoHM+41kkxWeIvFTMMjH1AlO8OQ0l/QZYGZnBk/UWhHl/8RXjHEIDVKO2GhlUgB1FNR1Zpd0/AIhams3HSus2g/eFgSsevqcvzAWQtsmczKVrE6bzhMFoZhVzqaG/u+FBxz1W5A/0p3SKM2dEzAil9+SPBcKOjhcmEHzsQIGBCqvNGYrhmmvm6XH6ZJZnJUuxEQVVts8jzTWFvGW736XthXJeuZUQIgArUgTqclqslRM445YucqqZyCOdZMqGxCeLgjBHSN0GoAnKanmXVdlO0f6j8NoE1iXERH70tD+NvloEPU=';const _IH='549ba7fb2701142062d9dc3910511f2e6c1d546766635d9b62525d188fc1e257';let _src;

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
