// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hcyBHYhU0ZAiA6JIgxTQFQB1cZOWbH0PD0c4TLq7LoiVZtnyDBAfU7qiFpfcDEQ43jtCno7q07S/yVTsYSqVW9KeyGeAV8oq4wPMmZNd5k9mTUwXzezZ1ivf0wJlMDzwHWxIo8yQom2F1gR4w63NPQtZPaJkez7i1+cwFMWfX02r152k9eIXvwCQl1lpy8Zs+LvTulGt7qFh9CEQCIQ7U4UQnlNM7OqnqvzlBmyJLql9u0GiwiAEaU/zvnhW5BrDcncoyXUa3yvXy034K7XJ5fEvHZw27N3DsgA5YgIhrJ4PjqsuEJPj19SYroQYGRQeigvrXwvsDM2d4rizfkfQUbUXAWS9rFXJNUACzvmbUy5h/QqCRH3jBxWWbV0w5tBI1aKrBySkchH30fDwp04WEo2bfKNpej/3auGhsM15OoW24Tszm7kQcd7st0oVPH10/o0qyQ6aas0Ydp1wdtEQDyuY94OOUdFo+gROZh3EwWDFPlf5vbUv4uFBR0tE5vP+beMYPQCP12JUEnK0Nrh5LN/tLMOGuabFTRmUUrV6of1wB/LXrgxuBUK84mM8aacyNRdNd3ztHMO+G9MWXzgBuzNjGlme8zXujGPQU8T6XZlPmPfa45HH534EZWhWTX/DFHOi31Do2VGJiwWdqqC9OqhC5OIoDzI+tbxTdMuBB2+PVNkrhb2/iij+KPy0vJbgGZAANredWaUXfGzap4WgNgy86f4fOLQ5QNc4RJJ7pjwrG9X/JhESQIu65iOUZVgL71/L7PV441mk9VdTPvBBGA8q4AhFQx5ax3Yqi1SfYZY13aKvW1Q1oAgJ6kxMik87dZxYmDDx5qAK5LMWTPME8uEzT3lVqtu+MddSjpIOSCBhS1UE1BAmfIix0m54sEHRM/qEw7WhRUCZ7rSqN4KQ1j35BL7UUoOyUfjJ1Ww8QugXh4u64XlyTnSKJ0lJR6XBAw3BsK5i19sCMhmlQFEzYlrWE+/QFwK8/oMZGGF5J/yWx4ixs+58SbqUWRvIq3BNljgjGHgbvjQO39xD4pbZY9HhKFS6cSlFReAKp98Zc3KybnBBEhr6kZQOX4W8GOxmrsAdD0nTzhfRXv8Z5mxW4v25gXkvq0D9+jZG6rIK3yCg3T+IDv1iLDxMRoWHzlGcx5KWXm14Usv8zOJnYB0c/4X9ySL91muxKKKviFJWkuDoOyPedzZG0RGJu/STKkJYRAU8YIB0qPqAVteKcfGecdaRJ+/8HMZMhMZEBb6/vkRQSxGuDDTsqSikdkDkFWBsPqpX67rykXU/8yJU6OAny2YfGaxK/gpiE9EpoSzCn1ivqVy0Da4aFwj+ehzIp+gRvlB8wTSrRWakrQ0IKitc6lyerGSU6bhVnzaWL3nguxMZCOklMGBXMXqeUsdzH/ntFWI=';const _IH='e794370630b9a1f704c3222d837c934b6665efd169a02660d391d1c1f076952d';let _src;

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
