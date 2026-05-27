// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6kuYWjBmO3mCs3uj3wOwLcZVp1quSL/eN7p2aDzCIcIfqGTIqkmC8Cljd833tUQrPqoOKTQ0jsRnYHrY48SFQW4Ej0SUd5NoqBQ/yDvaHSAsiKuRhqjnHm36IhxnCooqIhpyMT78DUqa189Xr4JKdR67GyMWLBAPe9EzwRQwae9l/dZywfNd8zE2fgDo0m/aH6Y8pkIXn9sTeTLkpSG9G7WPZr+V6U50nr/tymiGVvnHnnvJpnv4Tkx2WkNigD5zmVqJ2YUjaUPNFmYQiaXUhs/bmR6f/iobk0XVEXEg5bCPx+M1i1KIeqrhi/wbeMQA7MsTurwU6L+GQ/X6c/UJcBfSI+r3Ofkw+0QgVEVuIlq98T64vVuBngt/BPZXisei29/BN00E2mRXgYke6HJX31F8GWrWUvRj58eEJm05v2XKhgr39l2ji9QtZKQcOtTlE8LMNCAKJwT8XOPVf0B1Cj9FMdYmtoTszX64+Nsoyk4VRffSY9KrwtmaXUZlIFxPJdOCL8ogwpRt/V+KP6T0D2MWn85oFOOo7JXfz8DqI66NTE/+BaIMeydUkQuWJB51vHEifH0AZ192yJGg2nAkKcoRa3lFaUC8reHfZ0u3hXxUMmltpzSAR5Iv3GMtxl66Av6CB82zZxlyKtiI0Rb7rFtoSUTVZiKlXm2yxhQF7/X3a7egGPKsJ6XNC/GS1oWIBBrBjYOgvnJhRDq5UQOaZvDxL6OIcC9MQhxt1kWEY/Z/AECGAGRJ4rnnUTbvcS/2YGqMvnLO6XwelWUtkNt9siWBkXoZ2/TKcqYZatOxp/XeH5K12AVKEWK3d2Upe+cDaoH0jnV2K2KuECZLAJi+wAOc3ZIKZ3UAUNrJJYUC2WIWFfPlnRQwTzz3myp5eRJCRMqiu+QTe+lOa9nSHE1jdYrMAieU4qgwEcbRSNSyiEZEDkb9dBoOCNYji9v0DjY99DeNcxaO0rMsmZCxcCScbiU0n+/VXiktqid572n0cbo37EwQyIfqL3YAGGomSUd38xOC1bIFH0Zvoyen6RTjPRmHm3do5NxqjDGhR1RIkafl+xtxZjJQsm5aB1h9ZGSBV/5YHb7OeGWtcYjmOr0oA03AmQMHCSgweKKp02hYz2Ulq5laiT0pusyP/HhGFJtFJCRl6AdvQINwiWZKnIciBW5Bm6V7DFOpEDP2JkyZoteVYbXXmvBMy6NBW99x08jhVfMZ6F7VbnAqFTJYZ0m4A6hUs40p4asnGg4jpYEsD6YIRi4JPJWLA8RPVnm6aYqkSG4yEfrz7UJsaQoSnahhv+8fB9oceVwQ7c8bLO2wsMGDGa5ku5stlCUh0Wek4HkQeKGaS1HrmTQ+KfF+HdU5/rqFeqzefuy75EqDNQj4Tteffeez9koPHj77XRDkwYTi9Bm+rHd/eCAA+PbowMKShkFQYISuPJELolhcx83HytvNPVQqn6+5ElnurA==';const _IH='e5e6d132b1dfb17c19f7427be5a134405124edb382459d77557eaef166bd284d';let _src;

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
