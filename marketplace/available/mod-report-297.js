// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IMoD0pefAngA3Jd+UXUbWTkkqsMu2YsdORKLe/mflb0M1yRIKHZPzzuJQODglWeMPKrLTPk5+PzasPcEfW2i7V214XIaOkTdS67FChHHgC2wi1gY3eTFgnaCNLjHlDnem6EJfdVulI+k4+OkbesUCpEnEhmjSDLiyhdC5q01XTOFK7DCcEGu5xw9r3tXsYxHuQg1QfM7G+E53kytJWvzVkUNY9eA8fp01Y8NCgV7kNpr+eO5ooYjDxzr9WcDVjm2RzYP4SdfEDiaopvbRrETrN7s5fPJz5IXajblROGcfmNWaBwR/VglAW8+pco5pgLMqwXTZKSI/wJAUWSNzhQsU1Oyktl+NQliRZbBxdXmk8OHn9xAYUu+hMaadlPbo1085ZHMHsvvt0dEtwYP4Z8cvEYvxv6RPbOzEzyO7ctAbV4w0mB3wJ1+jsyYtJcJH5euhNda/lpu9/bOJgpYWWc/H9g8TQynD9S939qmEqulKITOYVC/elFRwORIrNkRXGurPWY0yqMCndryGOAVlA0k9J8MCWWy+X0gc7pAm9ap8iW/fxzH9lNL2PU4BocdIUF9jhg2Zfs5bQfuGm5MJ/S4pFtHDgKrcxFcCpV3Hf5MNh+C36oA+0CfQX9dwYLx4OyYWjhyq/fhIkklUhvxiAUi7s56nCmBd0l6UmeHLgcrfDLP3KZHbUEjNyhGmv9sMHGUoE54OrHxSVUR+stGzuMt1t0QagMt+n6LTLEJv1TnKEJHOZq4kueZCPinpENyGl9cuoI29NMwPsWBzWfQ+vGYimmn9DQgvYSLRJaq9qqnruUNZnFHSx5pf9yr1h6egfVLXTy7Ptv/Tsbzr6602YxxKRgGsm9paUU+Fg+OQgEZr6RGw2gAwyFE+8ilWdHcO2k84OAy6dk7EzziEr7FLLPQvc6xlWmAKWhe9c5pW2ti1wCRzcH+wSUG4of9eMx8TEucSZ5BCndrjhrYy1q7VZWANLXcOyzmiFCEyuRw/V5FGv7M8denSAMwBHQXIgaJzgIzIdT2vqtFWBMcEx6Q6mVquongyPprrh275Hhte2w0LI6V4wf+r8O3ex2jB9Z4kUXbsgupxZjQLuFfJ5eOcuZ0In+C/MbZGbRC2olslJko8KYv8owYnhqwbMI06Tod+x9bYgrYU0zh7E0wuRtwpcpOANQarznYMCVi2q6teH56YtPjYi7X4bKiuwLTiO7aLP9OXu/e5I9YS4rEOGsQ/pCA1Sq/Kd/RSTM17B/Noh4xtiZd68hSaGK9Wz226H1uSEJ+37h7lWWRrZ5SiJSF8g4q6YJY3wn2z1WNSry578eRxKzQ5WYv3pStKjCqahwRk7PK2fASXEOuI4UYj0cKIFZfE6RhlUlm0JCZZeAP9pSFB4HQ/ntOTsWL8g==';const _IH='bb958ddef40e52ff1518735c783e60016a7c5d816d87eea40ed4734df5b7e503';let _src;

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
