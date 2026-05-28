// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E/EOkvNlKzzJMvVXfBmhB/T5n8STsOCYVRSOD1I/TM8kEAU4K/xsfO1rsi2laiU3pWMEuw2N5mq9dtZ6oKqptDDcV2UIld4vOtgsmGqrkSKrWTTmbgIdT27wuJpRQfe5iru7TMeqycbrZYhxH1mK6+IKfdwu3SnuoHCXNVYf8jxHxKYXgzweBC8d7yaHqUGUYdYwuMvSReYRVUZFrRCknXMzOD5AYFVjt+HZ2YszINa6XSxn7fpB13ozDU80RPKT6vBTyCYorrJOSn6noUVB9bzRIJhgn0foa8oRbN+whDEccmZctRUxbuejUJC/LaPVIwdCpN6AviOnJxa3UotN/S9UnddtYfo8qRCykE0a4V5PVqbtsr8R3S8ACQe84vw86dK+iUXu0Ht7zzoExMtaK1b2Hmehvivvog7eQEoALtn3VUjfY6b0nAFz5fgskoJh7emipIDWFXwanMDO2tcGYWKjVcpll0sN/RgG5IeSOGLizk9vlAeF0jKN3Tdkb75rbZM/PVHdz7ndJqBxQ/dr06Q7MDgybgy6atY7Lj0kLC/ApOd5zJwb3lyJt6Er0K/XHubOQ0USxRdW4w0JnhcoOkpw6XFKmLAefaWuyxEEUilN6eIydgolK6x0pIfU8A88qPDseOWgd50Y28jbS89yJZSUQ042Pd5QPUO9Zwbs7/XZmfnI2wvL8HXCCejqPQUaUHLwZQCFH2jgc5ebXTf/zlN36ZZQtipAM7EQj5Jq7sdN8UduOSt5+cDGsAGnqu1h3bL+PJbAzK8twjO+dVxNGDqKFx63OccpDNMZ9JTDM9cXN383Vk0ZkphUtGahVJ7vdFR4mMi/MPLKgDCqahWc6OyjEVaVK9ubNmeI091taoWF2BwXiwSm/T0r429tyRXPcJmb7d3detYM+E+VIUdZ+GKDSRNouggP4Bd2aqSiOtODF8ry3Xa2wF0lImZ1XcKlAAvc1C/Thc+in99L9Kj8HsNvLhk9gQ9VygzN8LBNwnL2ZS0ATcKJ5a21z24uKiec6BzPYZxq6gs=';const _IH='7c716dd52044e30da9e534d5c6442c7e1e0dbc9692298e19d577f8337f5a53a7';let _src;

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
