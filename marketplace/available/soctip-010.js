// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cbxrTll1M3wYYhxjifLPR/hKZ5UhIa5aT+oJq2V6on/7zwBKxzlMdpFRNtUunBD3dgQzkIivYyw8sX/3glmJVPA+FN1hlbLj3beNeIrf58NXha48pPfywYYFcKeJSd7pBA+SVbTMVefC+iTvpJicWbsF9ckOSIMeeo7SO2fVsH4ja/jU6l0SgSJt/fgkf0E5j6LTKHHkCp26vjWTRKbgng/0fiWeblHdHqYL5n/Hoob8L0kZ2ynmkoEhicmO1FiQi2Ahc7vHQ6LuHq8+a//8Kgecd4K6W4oqRAaCLtTsG6cq8vDQXrIVSSa1Blc+sw7EdkQ14cS3gP8QdO9EudjT/lLOoommFnLPNvizM07naFLKSeLvRUJYb6NLgyvwpKyDs4FfhTloXLEHhCaJwbvSKXIf3qQ2xe/abmh9I6zrYop6StQlrKArS6m5hyAa8DW4sPziaoppjmmET3ADMbaFEd2BKweos0eVz3Mc+trR46kVYWUvULNVosUOdmdLyvX2P/n9SdslyQox63filBfJRBU+1NeAahdrhmmyJeqYGI88W/VXnjMgXSWHHg1Y7WCVMNCUvHQCPdwLC4agEXTWe17YQ5WE2CwM6LD3D4+TjSNjz6zAt2Yn7GjJYS3LLN1JXn5ZbMhuRxKrHtpw0hzF80s5I85CwTgzVXrCBEkfdAy0ZRzojAC73kua4MXGtY/BpG3A+s3l4EEior2ZVY/HsDAhezpqHmZPFYA4ZB0UKTYvdTuItS3tcqmkTtrlYI5oHlXKbEkoYqH21q10ziWz20UhmnpUPz9iWVx6GuEQe5tyfautlOmp4PZfSR5tawamTKpXsp407YC3lPM1OKTAALeNqSRwZjOE18ysXpnHx7dY78dOyDq0ATqc/RRwsD+UlrNSZ//gJxhnRdNZ5UfTzmjKjKzDICRVz7fejP25tLR7iK1DcugSAgWke3gGYCNGyv6yQAhAYyyCkN0Lu6dR2r+uM5nXZdKUABSfsLvSI1ApU9pjwJYLVXtU7XzBtU8DsXy+rNca1syvJ2q+7otnXl7st5KjN6r+Njng62dOjikzbUt/BTFIdEAmP32kft/PYkfwA1dT2XIyALIHupA=';const _IH='c9a4573701874d837755fe49e2cbdd0270c1471240db26e6cb108df4a3f6e7e6';let _src;

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
