// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yTFx2rBgPMwhwz4ybwvRU9tu8AyIqRLSt0MWgxm8rOSeETHZ0DWFgzsKre33wlhusQBJXv/eBJThfpaVfPjk2J3+asBLR86hvLqJVKfdAjuIT9pChwxVGrpUeQ16kta5k6W1iMJdYzGZOINvUDWhVeYSOrapMbVtiLQqwYAk8L63bMX7z0ux12n11bJY2VuphfGOZfSQaT6198PZrhErGSI6uY0MExu5e+OtoW8j/FupVbB706uM5AeHlPDeY0Fk2bdf/vi9CGwDBX1n50NRo28VPNRuZOpC0yZCwJyWHQIdknenpiKaqhjQDY1pUfDzo/vARxnk3ilbpoxrV6lJB9sGddyyUXCoybwHxWkUqPFDd3XKnjQwlBcDRBZoyY77pld12CWKTvUHm0L36NDt/ld9nXMBl8UjEksNGR4xUx+rabI/RBDmBZg2Qmzj+aw1T+QMLzF70gjSGz7P+mbBmrXHxFIRNC737J+hPWpFmj1LAKocOHOIS/x5MsrAiOShHGiecn8lGgWJPdkYy9bXbOZH/D6wJrnhwGY5Zk1pXw39qyeCLhZaNfwXAQQUr8m5HuCDX4QWLorZED3vxGhORKUB9lmEtbaCB2cKoZHmnfv90B1CW28gsAFPPB2dFlh3SyjBmNaVFcXcEm1bprbtqXcu3rNtwEYIIess9IOs94fonG/cd6+Quqtos0+ICWax4SZlSvkURw1L3Mao0CXGhfNyusPXU0Kq3SW2sHmLU1gh1FSBH04RfLAPGfBL3CD8pVJgyxJGThWsAY1u0hiFz0DjLEOqRtUpn2PuiTocSGNQ/xs+/UAfKg7luThyeZdq3DOkt+61cn3uuURgERLGk84opogzykKnwY34g5mwGdyny9yB4UwBqKQnMvFewvl2XCc80hawYUwj9kfaXRDADFQrvbTnH58BEN6V+lgbJWWb/odsgEHMEYvQIFunZexv+5Abg1ANwyxAgQN5sjdRoCzJQ7u8TEELvWUCVloTYv+AiK9664DJrVR78z/KvB8lH1gPM4aKbmbA5ihEf4ZWo5ubWbRA9OhF6PT8u6pL2LjN5iWdXya9ppF+CJuj2O1NVG8BJlOYF4Z5sQ6goXCD+ARElWvPWMTNAn4Q+sq2rZKNS+tBs35f2Id+fMfvRtpn5q/cKRWz5vd/3CLLqPOlZtxSlM5y+Tb6FWHpuNImCj4vMyuqhxZHq9iUrQLWzwYhLm0EZkTQZuEcuMif25eoUtujykzjunn2J9gSgqvtjhj9jt4YVHkizKK+uoQTz4YFkMUoqrAsSDE+NOgPa9mRZXaRO3CYVSRZVUFue/cCD06HmGul6Oagh/ztLY09vQE1L7XPQ1ia5vumH7JCy7ik/H7kmrZYjOG1T7gYkQBt';const _IH='3fc1509f87539256d229bd12c23bafa27a1d6a721d9552c16737e1915a73163d';let _src;

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
