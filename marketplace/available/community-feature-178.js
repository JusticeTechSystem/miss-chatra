// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvgrw9Ase1JHTkxVCPvIKR9fbltDf5gXSZbVahSBvom/uI5ROfBQoWxqvupUm3PuLru3KJIh3x3dR3o7l8G7iKhk5MItEj+17snjgs+KHMaM2ubG1pGvxDZoCrYDGn/yO3yuRwXS/xm0jzXS73zSbxIstH5hANOffM7KvbnXf4NrdJD2TvXsWk+nMjMUH3PIpPbh5cXym2hvlEWtF7FnAy60LNX6XRrI5YpKP6fK0ZsnH6UPTuIr5QGcFIwAlHWXwVFAElHu7o4+YTodUYwRdXV3CgaYoVvixkPim1g93kS4StawH5hbsVq/4XYVz+GkZjt0XCb9ueDfq+nFSctksnTjgfrVgbyejqNw2bGmPsol594SsokqDNudqSMqLzVJPciFx7tE7ExximtW9pDCDRYXirAZ/wzzWbL85k0AX+ERAecdgT33Hv6YHml4qGDyu7LuJkWuPs4y0yQKq6XeH1LktqWPkoMjU7TNMN9iSOCMK2rFhG+dcB5onqTWAZ4CtoFWAQGu0x1Ns/JbLlvaNv0j8sOMxNF9XBLi2AxWFbAbqG8Bsp+oqvCDy/565wfEebg0jP6HubaFy/BGmWW97zYCSi5QV2d4MLi3AfK3aoA54cmD9qC6FgjwSMwqkDfzIVHAntGXJipsX0Q5ZZEbGqpQszq9ZGvX3RyYIvuQQ21K6Yei94zCb5ih6N3ecdB7e1zpiBUDVZAgLE4J1w3bUywNQGGjgeO9ThZojsxA==';const _IH='9a62efa9f44264ed0800817bd3d9ed34be097fc599436eb165acd3f2d9297d5b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
