// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CrzcUoR5JjsrNP6o4NC3IbhvamFk+INjUZ5hkGsQYzdaeuP9JZcj6rYqg2uT0pDAF0/7UkHn0t9RLTr95IzI5DL6i2SDGEP+7HJlJnGHZbnZ6sNA1mn6na+4DH/j/YW07eheWjAhhz7FlW9Ay0lLTpethb455G1oSule373q+uK2+Qkld8J3cQ29fk1HM6LWxaNr91EtEVgQk8hug59bkLKXu5O+Zro1qCJzYhlP57LmTDEGDWYSTyPYu8RMc4obSTh81X3VvFtYURLHaUGyDde4qYE8bTZmsEQbPtJdCEWw8KoziGKaXFQUMQjoYq3wSXkFP0TyyDR8y4okd+/yjoTf0ccFcJEPFV9Uz4qUDHWAUhxr5aqFZwNPEhyvMVG0cR+R4gatjqoD5XlSLWltjO5X8MgWNpu37ZjvIfrShVFf2OkH8Zc9q2arr7Vj6h9+C5XmmRB/YofSVuS8qWfHFFrrTqVxaoZ/m0Rk8K554CnDVsNLpflTt9PXD0fHEYUDDMLDECMY17MjgmEScID7NVpEuJQlRViMM+gIq/2OOe+ZQyxK8zeIthTKTGPFr/Dp109VkiQZ9yOP6jWgnbpy28i10jP1MsX85uejwCxicfdzok7XiLv0Y1dWqu0RnIPNNwUgoZDz6ysdaGhK1h6+VRHVPoXeKIOtVtpSsqrq2YkLYg1DUcHjFTihlXG961Oc3tXuKB/evDGkcLm6wP1ahIWkgSbZZbWQTM21O83Uzg==';const _IH='46c472f5c56b64c6ae0b62aec07a2539e5209f3238754e51e9e54cb1a30753ed';let _src;

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
