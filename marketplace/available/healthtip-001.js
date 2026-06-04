// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EIZ2ovjm+Rr82Z2DQoqhu6NGKPmYyP1nk/jMdDV4Iq9HL9+ZsnEevsW2dQ54JSx6Iqb25qSuCp0zxIGib7k5R/RBWLChJ3hlensMcxjaU25TdtBTNJAy3UVxKptSvJwaJAJZ1mXDpeePQ15H0/WFJnE+851DpnsjZQBMv7aLv60sAtk+iDIaZwexohakH8fCOLXxVB8x3Chtubas/ierFdUUNVOf3YaVccOV9aWCshvHiMvSu3JLivsehiF6WfhqxF+0JTjZFomvXJinr/4OLxjGi5bMKNwWw8koHN0KNqBvZSX60JikoK0T+tUXER3REwih4eeMXZk2rWPeBBG/HOc06kz6xcdZQurDcAR8dJpDDdl8ATQSGwhLDbTx+pT0bJCyS47oz+GbDfZSGhfyyblarU4WrjKdebP9B7aRGq1FNv58KuxY8vhJ7qch44QT8ics6NRMkn4IdwOBzz/YmCqQ7xYMyyzmmYzCt+uEgSoMWSOsi2u75xIbIYd+jkPyKyuNozr39z0wSkddk3dtWIprhtefOBX4uWBOU2HfGk62EmOI/nBwzAp4hbczqJhlGOj7/UhbXMzLK+bebOB5T3cXEQs6yzNf81xxL7YOi+ISlLb9NN5dBOFD1iNjQzgN0GcQVbQpJndcKjKgr2hDecNA9VBfdNQ6N+rdffdcqwSzxiju0jmPQpO5IdqXDeYy1LoQIAuaja4017SxNkcthXAH6OUjvmI7XEOUcGD5cjLQScJkRG1nU7dD9KQ3kY8ooPFjLG5hDUw3aiy3i2ehTkXey8uk1qeCsR7KJ484YD8K8SyZotra76yYkN1T2Ai3W4G9POMk7ZjYkb+uDek7nF+0P2waIKE/bbJpWnz2ObhPW853ZYv53IbppBVxyV9AtV39c8Il2SlS80O9AYfUupNKe4wT6OoTi14U3yavw2ljMhPpITqwgw==';const _IH='fa8c4e1573d2bd9b03f470773fccf4b1837c8e10a8c7b82786d771fd5b56da85';let _src;

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
