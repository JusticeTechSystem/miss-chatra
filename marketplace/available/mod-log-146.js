// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zeiqA8CnB8QGvz5wamr2KG5Y6n4y2QaZ12ARVoIDZ4Z9xvPrkkSgmdT8NYflDIdWAw15rWqeNH5PNXjp+uFXRjOURPsvCoEIokbrVwxyKuyMqn3XxcuYUqraSd2AxzP7XeIeSGqCq6kpABLh701q4sGzjYHIiwmgwtrazyZlrxJXydDYaXAJgAZvNPmhsSRapQ4UhZFqtejrCA7gH154vNE08paujmsM9L46P8mnjapf1YZZCTC1mo5G17gSSO1xw8XINYcQxa9eQ9XHVSrSxs91RqbLi7zKHCBJQwuPreTUijPk/uddzWfK+MarSnKKf89SdcEztQp7LwGIKaHa8QyHd9eg78OZbqAacWenliqGV5vDX+zBglWDVp4EdGcGoxKNHEh76YgPVUEPWHD9Rw+85da5Jf3SnDJPcn+Sr8tYkZyNQnluLEwjto+8UcDjtY0QExjHh13uli4OS1bejPM4AppV3X8kfWCSdcv9y/YDW4ZLW9ds1E3VJ8hk8zNqesM+jAl9ak9DDVorWPudVRYT0ZycgV1J0kznr7W4pF897q0XZZwloQPNEr2SstzoFr2Ylu4XZuXgOCEz86Ijrnlaczn/eM2cM8VjwaIv9SWIAdf0eNUaVTOs9kg+j81R7gS5HmWB0YsgN+aAg8gVG1o03rOsauc9h/uiTpfrKEMSXJq18GAnBZ7Ev7U6CwPkYZt9NXfRiNT//ud8sxBKsj4z4zqqtOBbqQkeIA7VBVTU9DFtG1sfmkoUw4lEJENcniX3HLL9FIBi0OxL3fhv6dc2lPpa97VWsygAzns3/4311irctpcU1nELVAKCU0rCW06lEaludMxsl4YF7btJ3STOukCApMHwr+uJUDlY0j9aDZ5IPHcV+Lt47TeOLpysTM/jPptZ2w2leloX2wLIrzfQvr1x0wuvq0wjtQy9WvE7KmeeCVxB9+xQ6lUbzZ0VcdjRITQg10iTTBCS9mf586xHGpZHXv4RoLTyZM3H9OMbGTiyBkjMkw9tmgmGsUsb+Hv0dxRqS6Nds5rChol08braBrNb2Qd7g2F0t2LhIDI4MeyeELo+WnE13gYtgEWfiaw4pWWfpzGxGQ4o3qV4kJ9HI2XzT9ogAsa49nbg1zFnxVnuYpgwDDymEO6EOywHkJrLYu6vgdmvF4dhN5llhkHKF9jkVAOOBctO3brADJ2iG1TdY08yAYEq8dHc0rt8+VIMcZoI9I1TGpthfFm+73g/saSAjIuNu9xjfgmR7ED4knrqMl6HwkMmNhCkoAH+Ys4HjzpidM6y0yZ2gIcDHl/y9DhrJJNCpmEeF5OhFLffn4wKESS2Xr33NLDuNV8SZRcZ1V8XQDbAKA==';const _IH='592a26be1cece23a62fb31538b56d10866d0a71bffb02c377f69eadcb0b6f3e5';let _src;

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
