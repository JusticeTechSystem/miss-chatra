// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pzfOZvWX02Lgj5tyTdfcQnX4Zy0lot3zwYwRPALcF0eZVQ/rcfIYu5KZu97VR9ZZ5uPjGvdVwV8yjdocIzgVXtqaK0QFBe0XxsIT6ez7wogeu2wPTzVIgsezELlQT0IywaTmUHdAPw9ScZ51wkS7VxehJ0bRyH+T98FC0doUBIhKGLJpI2q3ofpv8IEftALCba630roP8F6oYNLtQ8vlmbw6CQ5Ehmu1KEswUSBuEFAQKywIdPicXmTym5Hid8lBIoi4G7HVYfZoeKZHpHjr3BN7McuhxwMFhGECooQDZGWQDjjehJM2YNVsVULrtkC8ApP7QiuQWkTzQ3WycJMjhhHaiUysG0Wm64J2Kh4krCUtzlsIiToFh2LDjLZJOCh2NJKwq/w01A0WW7SKnV8fraxMhQRK4lwM/Qj7KAtXB25+qAz144I76J68CYUc3gaX/1kWy2boqWUZsaPO+7zgJ/kByOJmWlm4qcaY1WQhNDvdJ6PuQm/uLEMu8jwGx+WPkIl9Eo+7TFmXnzeqBKnCrcPSugTgTDERmN23JA29xA3GhtTKldsFR467hSLyIYM6qpR15l1u1y69Z89t4G+8+fa2kZgSvC67lPSk8syjQSEyDZXBiBKXdw+jnvNRn9d7/q4kvxCV9e4ZCDqyRWAuNrQN/dNVoeN3/B0uZvQ4wakhstTb5txvnOjnpwGqMg7Qqc1b/UT+cZeoY6e6//IB4UI43Pezfl5ERfrbmsl8jOUg9FWYI4sQfQ8ehmtvNJIz6BbfW4Wq9URJvYq9slOXsIplrJHaKoJhHGNnaMMmnCYvtPKutXxh7Bo0Wk0c22MvHgrxE66XUJh0uzyfESqHkNsFaw+8bLGdJmfDLc62U7hCFUyE29gR0v4lWu/M0CcJSeJFP6G/EYke2xJYrlggqv4Alq0sjtMUdC2uOczP7u2Gi8l17E/oKtYsGAamFejJzPF3HKcmkzu45KvKUS4KUpKC51ALIXwjr8UHS7RKSiP06lz5bcReB1aEDb5eNEBOwpNlw4QgeiJRFv6B1TH63A7d8yLwm3SUK/hB7idYMHPR+CI22BX7Nqh43aat39CLDrOFr2eG4784kCarQ/7IfkUROGGa2Av2BUrqW1bOQWHufDSbfmkgUFg/5xAjYWtY7fDKbaFQGNtzY8m1FQGZAwtd3LTCytSiNP73pm96ETRRetOVna4lMECanB+6gzxSbGyXmGKeyplEwxCB9G9B5i5k0TQjkzDkd6rKsQhz4JC/IsdFGZB7DjbXG7hIwrMd+7sREw0wLE5Q5bM38fU/jGuF/ILTAR7vQoATkzHOE/vaUMt+LKR886QoarTeEAaEVxgPuqdLx7uOlQZXKiLsy48zWWI=';const _IH='c4227f305e3c4aaff156a748a4fab0e91a8c9ce48fc09b133cb0040b3461ef8b';let _src;

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
