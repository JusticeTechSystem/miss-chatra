// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oR65RyXJ2Fu7rVvNVKEWVUB/aYgy7zvBcp6TrpyugSPsTL5u/EKbMMF9KLYsj9As8sde0FRkuxwM4Z2rY4imCDG9Ddi1jqU7zR3bLs2tADg/Px/4yDjGsFEIjQ8GvXm8hOPUDZIzn/QcEfPkSUSnnGLcqMbsdCnZpx1BjSSuQvrStv/WLdEDjMG+m70CNiOQj18CqisF86usYvzFPwK3EqYvGML1vcFNPXUdcvxMiNcvpuEPJT7lh/Qai8/CAu14MkQSQGLV6NinaubV9v/mCS/MeCoB+4j7jtFcmoeH+4azaXC2fQXq8ue1BYvEmpbrCY12s/igA1WOAztbHajRpwLfS5GfK1oeFLoVRtAKaMfuyw4gsY+31u3LQrxZh9ji1UYOhT2Z+TGvIO0r+3UiPQj41+wl59jidFg52Z/9jNzBVIfNXuYPKacSIQAXKA3Ye/IRJf2M3stiUz69AWEp3mjl5WsnqsgeOBmaVd34lVthwgInRxZP7VXeRptJFBnVjPjHR87p5+0SKgArQMWSkhk17+kwYvER31/wEn7vbzF9dli7wvuH+4VF9PWcqOtw3dFga0TAFqfHbJVG8JFwLev9kvJogjRFbbV59/QFUxOsqdedVA/6PC8NeoZ3SFeBoLr5FMUQ5weO0mTXWQP5CUE+EtZXGoHwG4FjcqGWa1SFOUzvexelSFOvPfvD9c8SBS03cFQc0N/O67TCzTFCnJQfiuQQnnTwWlL2/BKftXRofLm4w5voJac0xEZdcg/2mrM4ndhLk3onlW6elTpjoeITOHEmkEiU6163EJO/LS2T90cvTT6PXE0XTuStr2GnmEkdxSuRZLMABU3lM/8dub3UaBTEZ2bj5+EIWFgSpIUSaDhYinAFUZ9+xFUfOuucJG/z71+eojH53rWsbWxO2eYide9N3MyO4fXiB7C28mgD+YP+c4CKnLe7rHWRQelCWfiVexIch8jOLIt5RvjrJbi2uvkEYvFyplQtYt+cUok0UpVdRgrnPnz7bdIPihgQYv7O/tay+78Y45nmML72eQqhdgFgURMiQuobCENjo8J1+9azJqOb+toOg1CAcu1G3/FCgV03DI57BWQcTJtQCH+LrVB6ujaruN6naaYF2o4nZtYtTd2tngV4iEvL99dr89diYbyOKtEA2ZCuSemW3v7aA3gP4lgspF9u6CY1p3LcGLy2OVxZwMkG/au54zCcOjpJ8K+d0lA0AhbtJ3AGz7cp1wJUFDxgo8AdnO69+9Kvn0Yc8eCZuwc08re6k/z8ZoKC7kBy7r6Anl7VWNrPzjnvATYzgOm7n8GDffvSwY4q9dIchVIUjljXI3MXZYcyh+SZqkoKwOoEFJ18MkwTw1n0lbC8hTgZVWpBxGP6pztarQvHwEMsA8wkvjYWm0zZ05x4nz3UCICac4bILUS5vR0CTHxop53iuPEatgP+43PDxpfljZQpJO+qtukgu6Mf2Q9xGZMgiU4A0aynk3/2MHd/0RD5PiH06L95L+Y7SH60zRsdq4YQnegFL2dbJ40PeQZPR9ypwJFhBCghEiBPcOPG2Pt23Nd+td0oWISMQBpdvOeZI5ApCKTdLr4qTbj/RrOTNYxyFhe0mWpxFR0Cw3ERtlfxcV5aGKov2POnMVEtgNJWciufMmLWZUQdi7gKrt7e69ReWDfjJSade4hHWFbAlUBexvMWnbqn2QxZ/f0p0eN9CmlI4SI4FmjGl9TgJ5ZJ30tCXmyFkVfPFoZuzRk9FEI+kZX150mRma1IxJHIU6Lq6eUnzdUi+t7WW7ZRHHffq2c=';const _IH='67d561f65a7e60a4822658510142033111238c24c55b472bba28466c90159f29';let _src;

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
