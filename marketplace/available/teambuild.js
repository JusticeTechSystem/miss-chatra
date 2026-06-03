// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0hPbHA/FvFivjlnPqmDK6c0xvIy4SjDFn/AnBfhNkRxQXuYPYaQsDfnxYz0wtFqc01Aen00hdlYyS9MVk6qZb34MJ51sJc/HFgRQbnl5RdnYpg+7HLtUfCogLcRkh75Usqmx8rQASRvEsMaMB8XHeQmonyF1XgRRjXuUP7EfrD4plwSWRAmnFOib3JNZ55QfpacOGiyOdtvhzjmV3VDZY4o6wdIX2fWm8PPgg2S1LffKWosbOf0auc0tyDtrSu4sCDivp3b1yxL3Ise9zNQWF0Lxf/h02CqelOhxs+CaklI/PLxmk/7JBHDQIQx8RIc6g27UQo/pqjpSXd9bvl+n4nyQ6ZiJTJekN/l+coZPOWDcEDSXY/WTtV+6/mLEnhVkMAwawkBS9CKbEGdv+3HcclOBz5C+a6Oc0grhFKEK8s7W5mf0EpBh4NOMUUkRX+Z78lXZkBw215XDdpgVL1QEqtB1J3jd2cildv5NzAMck10aYiphLqSeKbFKPrFXFsOnR3+IqtACfpPEWs18EVDVgWTn70ztHnr3Ks5OXCg5WF0AIgoQah2FvQcEDrLIlFAGzAQbQOdRfYNE95GoqC7D3rLi6reMGNiigZT6TmyCsGWvRQ95fljXTGl84qCU3EfEhhA+c/1Dk3gtZyPteZUxU7+GYcby2gye4xtsKP46FaVObqs01yCwhsvCyu8RZj2MLmv/vLAfBOhoNKGV2lhZQwVVcCCDTkR5xdQiOgXkTa2DJJivb+nZSJ5cIJd/+a2aziD94aOko095f9QlOW88Hs+qLISGQ9/ZiOlXbnuh9hRSNyqfXEyvF65F21YGc6aKU05ZBnZKrWlPtjqjjIvdrHSPGKuFoOEBYxFO9xbuob6KVMcmsVKuO/OmXfemiP39m1OmGDPLLeAIHg1D38cOaXfnscpaHNtURWAtl+Af6N0nsbGWgqi5LVJ7LkrYEC/uy5Oh6AJzwmgjX8sC0Z+sCfDSiWNtvHko/iAUCzxOI06qy72G9lH//EG1/wlMly8+LVX/5tRUq4N1pDZbUJRLXMQxR945v1KShxVJlJdf5NXGGwweBS/0XpX8IpQJX4UWWlmwFcdgXsH+YOaqEEBAcRXjdE/VpqCOvUS0A3XHDH604Smv68DCjp/ktlmv3pl8gfVzlOibShet9rBH1dxRSIJmkXV7bDvLaTK4lFcbTA4owNyaiF5Dxbo2Or/g4H6oe2vcxDHlpQ==';const _IH='ffe39b658eb763e4b41e744741226f53f165370eee6b91fdfb4ce47affbc78c2';let _src;

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
