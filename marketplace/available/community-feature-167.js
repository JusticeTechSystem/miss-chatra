// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UcxDNjuQFNBme/Q9Jxyj6WpaFZXJxLV6FMV2WuzwbNMwfCV/lAGLnPlCD+dL5gtOVhPSdw7IdFYKOe7VwYAaTfjgsiWAT9AB8sxoiem3++4bz7kTBHCalb132DWMPpFXpn9f/yTOmtK/wbYFH7AHogYUDhw4/z6p04N4omd7B05pP7GKCJzGtRCyPWvxYvhI7Yjv8BKPydQ91kSDZelMKGAau/JsnT5cu+/YQNqD06ldzTn/lZ3fQrUq4sJa9e5kWjOLpcJUX0A1uqhSBBJopBwV1z4EFmt4m+ilQXgv7oOu0KWNzSIvxaay910hsYM8gBaDg8jCwtFj5niTArzYbWZzh75T/UB26a6Ub3zwCNvImtTmNVLMRZ0O2qWgop18Ad/XgHSbTQo6K4nqNQOIF7zkI6OVLuc7mCRI7W4uv9TwkEl/J6SNZd8ZLsi0YHXJ6sFBCwGHL8+1XwWvc2jQeZNDZdDdSFucJClqDT21S/clDt0ayD+qhDTZysVrt8OsrGY++VDIPS5mGy9aylh8lWaV+T4n3NuI9iT4WGYUb4ea2mmGH0sEe+g3Yd+nlw5kOjYCrLZKah/psRBbc9tVbdZ+SZSsGJTGOsl/RlI2UBB6BvUTZBogk8oe1WGBQcVU4guHIMaoAgi5PofyEY5Sf6ZbC3cRLNCstYyMXUS/YU0RHi76Y04RzBXeZyxeQhi12q3lAPptGRkfyhdHGXLKWDCAISZcnleqqaZ/l/iHuXPO+E0=';const _IH='7a6489cba5245fd54d44458ac6483258a519dbdc1c4b52037f9afff298f89a85';let _src;

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
