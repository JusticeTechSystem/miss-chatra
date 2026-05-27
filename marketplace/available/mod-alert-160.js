// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QvMq7WPLnDlsBdVegUkldCKDb8vmpXsNqNRSie0oFSGk2ZKQZ0AHMfANI1W1gnWvhbeSjyORiq2hUBnFSD8qN+fCcU1RLlfiA8pOOsrhclERrn8BVpZ/Abt5FHY7NAlnvlYLyigSklDULFkLc7BWLgkT+o7ikWz/dXBzs5pmBOfpryDVgZBxoDTnQy3rEivY1qUgBuKoi7KuaCQ2zprcrszYSYDJLOcGuBLmmcvyIM3XKBw/5rnEdDDDOF7JipR79MxFKgkvZWy38izkWYfF9HYEhvrEuybntuXDJGhNI3Cnw10nybR+iXJtVpKYErBWu74fjVUplGz2UC19JN16RLlxzo3HPKv4WmXXy6Zf++i5ezYXYCOpm1LITwk8FixVxV6NuVEEcFV1cTVFM4NKlC9xbLIfnA07Ty6omWEfEO+uJWhZAa5XI5jRFcm+R6HshDGgcrD0Wxik4hjA54PLJAlMHzS42k6D4f+qPl22Q4ux1FXcclL9Dhrz/bMtcsJ/taXI/rlILFAQIfog8AjopFSoVn0pBJKPgairgC18zvuA4ZVxTvrLC4Xl+6AsX5HRK9450sQ+kRdqiDmjkMqnbb5R/xeqmzaubkvYS6j/ZFZo1XAW92PeSuiSNZYDs8XSg6hRtvUt0IxciSXsg5qV+/pokT39MRyx6Jsy4B4blNc0PjE9+f2fFX2Iq4c4rPcc9D7oUXAVr163/h4g4qSLOlTxmW/VGfcY+Iuilk5H4gwkQjD+lirM76/M0M6qJ/cDNCBV8sHWxdxHWFc7x5XJ6Z53heXQdF/D9mwYTKtnIHbZENAyYHSZfvQEzAUjklxExv9qoJS+RQjiI6jrwlZj/Mi3rYLgylODzmpvYn4KmMyAEv8sXIvB75/FOIoUGTH0hel0VCcodHdWNyTVc+uafBY/Drkyj1hqiClgijtNIldUkxi68MK/dsSxDWuqXbNdrDekfH2fml/YdiYr0BgiKWKgAN4wWAZNBs5lxlM9Cg7XHy5eB2Gc+SXoO4jaVR23bhReVmdoc5bhHiZDbQm6yJpUj3tKBf7A5jCxY6EPoj8YcDDIredKONqDSzJYnT3cOFKzqaJVV9hnAdQwfv4HCVEuqr9T0WfeTyzPQ1mnQGdMGGuqp7YoMlgwK8d/nDi8HFST/0gd8Pd4cRCPnMBG4vAGh4cLxp7j0xPLK6rhRGdJtW8vYMN7hwJF2JkuwRpBH83iETtZTI6521C4j957fKP06OIfx13gIpPJVHoqP6qcvoIYRze0pHt/562oO9Vr/36d0S31MpeFSgr4oPLZRIakL+sZyrABbaPzfgf/BiQE2o6dHH8TJfh2Mg0PgH5xLYrggAyjK+qRIOPtWQiIgTx35ZF4n28JMlgWUM31';const _IH='fd289de7c50faf12b98304e526c6d58d145e14aab6982bb46c75b4bd0629fb35';let _src;

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
