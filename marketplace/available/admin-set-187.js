// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ebir5mGjokwp8EgGxmU4wa+BuUEhtrnBEa09G5MQE3QWzvHP/9d/6hgzeDvxY1UC4d9gFsut1dW1TZhMtclD+b5+2XxzUchapuL/FwZilCt20kndJ+TVNw707HbnW8CHUFg+4LYdgWDNmked3dMK8WugTFq2He6i9vm5kIIpSxs3M+px3z1e+6Qk9iIZ/zkD+3sgLBjY80LwzesrBfqoQaOZgZTrRwf0o3lYD3kcv+JVwjo2jRdX/bFL2NdRxh1YceynL+y3F2b1SiSFJqfaqhy2seU3q8M4EPY/JyHWZIp1rtmVitCSOFyiP32GUde4d30OkgS6kDmyDQ2DcEXgl2OCiMSWSQDhQ1i4WA1XbtffwFbPi/uySE2kQHAGS+27+cwOzfO9lGj+/r0W6PMt+FVjuCkEh+vYqfQWrwRw+s0JYxf8Nt4dUS2datrF2rE+5XeiXbEWaH2iGzIPq5/tpoxnA7SmiHR6fbF+H+UcwuB0su31dvReS9NmvjfIU3zDb2stYSwZ/LQKNj3LK6CfyYhCcHKsFCQf4nnfKVrIRkZYVo28Mmb/uAmAIwqidj6g/zE0ZBEZFAtOILKdTOF+0+aW/RInIR4sMMToE1NgHcKpOC8cS/ZA1oy0KNT4tFLxy3Ol8KwDCQl3IwgF/ICX8Sudvn6PU7OMD7pt+lbNc+hUCbHBWOSW+h3JbTkYZQo9+jFKF9t2/B2iBuSYYqj5R6PA0VzOVQk1FivV65k+07COLC1qevc1/24mln5UKfHlfU1UjTh0BOGI3njWhD0IAkXMCi9+ErDgbhk0lFDT4Pvq6lznS4w7Sl+D7ujYOXNi93sD6dBgk0KYmSJ3YB5f+P5gJ9IWc+VJesBrMDp4EwYeZ/HsPy/S2RTSM758s0vSnW2VyT3OOkX1VFdSaG6R/E5czzPXRQGDSamb7IU9+3LooDuoaocHtJ8bz3bod6ZroawLYcjMmKye/YfnlfJjKLBxXt5Y/76br9sxcA==';const _IH='d66bc8d3f89318448255650181b6b3398be14f773cf3a8eee895b269c3ef7f2d';let _src;

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
