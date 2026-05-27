// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p9MP4m844Vqyut0jf7zulBtxJ5VUCAA9Hw0+2jjp/lAB/KBDD2s2z2vJOrik4nj71EKZmM2zEsSrtCjqtD5F1YhByvNG2JUoMMWaS+JDhfdglM0gNbxA7/0JdJkSm1ahIi2tqnAZBdgOjdNfYiPiPkUFrGSlmnSTAdqMhPX1EMPEj33s5mq5kjFIZAFvrum0KBCjRqY8wpHSKto7OlG1d2+vKblk9J+Q/We3KgKhNp3vliu9UFcf4kXJVfirLOozrWMCYcMsW4Q/vs6fdX3jg/KAP6YHhOgsnisLyVGrTuW5Xhk3B5dEJmHJBMyohe4SZ7wP7/2+yARYc9PHLxjCtM0jcHJfAfezfRuSqxpMBfsg88BwgV+0w8mtvF2PEcvjwp7xQbitQm0rLALFJkg/FkjD99H8FpirAW7L+aRgRcrppU3SlFvPKdK+Lpmig2ybOvx7mcbsqW3BrBya2+Ht6jcxcoLE8Z1uuRBOOc6Z4w7XWAH60aSoD2IOM71U+EFykim4HLny0CVOldMkr/MiymIHbpJ3DbWcnYaH4BhhjklZKlGyMJf9oC+zmGt4aj/0kFs6Chb2cSuBLUUWv3dl2V8D3SvmNqB7c4/rBbDhh+QvuChIct+1FQ7B4GPJDxGf7Fr7+rnYQPn5jo6DqYUUwG7YzGM2q8qdtiPoFX4jIto6WhzwbEbX+fFPdtMJKDAHySUHjHFCh/ZpXqL6RaH1';const _IH='2eca16a6cf428a8d2589646e48f3c43793c053cdf7501951f59b61e19d517242';let _src;

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
