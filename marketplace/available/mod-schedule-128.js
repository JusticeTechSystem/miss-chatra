// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RkyFp+/Zbtcc/wRQ588EMlpk2xXQfLK131plwxKm3BAh5rV9J7EGcEHFzu7OhSjAImk2kJcPgA26MElz8StM05w5eKTLkx84yGiL5koBt0i3v0cMdo3uv46V/H+gJqyuWovobVuxVly2jNkZYNysiUOQovwLIMdWQ46S/QwaS/iroav2vq/2IXvv+ciGuWz0ERCD1GB6QDSzN8YDSKAMU5tIJtWR/oQFFgnS0tz/bgSE6UR/mxlWi1FJrKsUdUqXH/8Ti5T9GJU+mwjf/kAp12ZphTeAc0bfp9Yy0kCW7+YghHW6fGubNoX1WLRLbv/xZ/8Oo9JqcN+CYigH6GrO0rj+bgXFcsFeXrY4tU0bTvSV9LAb39t8cv+NatfbkbeWz1OLoB0i3utGgyGiiRkO/3R9R4YkPpM/8D1ZeFieN1LRsd9JKsZCPurS+wxPEE08A251DA3ezVNfiboYmdD3kKRWSHXnifu7pRMbuIn+H0BQe8tbjAd0Tik5/RpE4ncAHwzvwrZIQpaX1lPfmyg7A1NPsndy1P3w/pni3KA4Z+eKRYc141ldpCl7fDIXv3Bpoeis+jWdb4OBJks23QnDQOIsImqZmuZQDaz6Xr8YryZpggYPQg47XO/5TWfQZrh2QMTvlHjjb4VIPrK+iUZDEavgi1yGfuqI7H5sSgtnKLOXjEl097thV/+3X7sNfUAe28anHemz/409ld5TuP2SlpV0OwznEHzs8YxrfQO0Y4VKSAwVyNefoW9IG65M8FQmMXspNUZJN1qVS02N62hqqpXcjSgb5RmdpMksK8yQ0aji4CvSSZq0MEekK7VSria/F2rudL5m2StizgWHQefy1JOoMHL3VIWJN80LWz6OklUimjCP0rxqpKBdzdbAFIW2z4NuCxbPk95UaK2s5IOdBeQQuw7GqFmyrwOS4YuwZbF9XbAGKl9694pJNduStjRnwelty0r8ITX0F4hWeDyhluky2Ufrlg3Dy7GZfoe6Zp1wJjGAUWqBnZHM9atrBgcWRdD/pRCkOQNmlA7B+g3szt1yzhHGUacFUhj/fdqiP6/oaGpWD0IeNqv09lrURSSseSjda5KOlup0TbDEzziS9IFpv6dRwWNMfRFjofxQvAmksT1FyqgKFoThgZykOCpjm2KTgoU2sG6I9OAh91Rdw/dCfEg/BxORP7cWUWQq+sL3AW0DZ/zXiONb5PNAZBYYVhSJFITzW4MBsFuS3AcLJTcuyB+MfXI0NsYhjyEAhd6KH6uNLkeb4DPnecJCX99oTU/74xsUElBTfg8grcJ6p2Cn7gwdc+OREt4/MMd2bVOIMFGy2Sd7wF8kUbZerIY6vrGZqMcfPQc1R46kpWACxR9mvcsL1wMaJNOmrhFvZWnWKRGjYVS1/wLePvFRvXsXizpdigEBXCTgB4+W';const _IH='edb5f059a7df82c9b52da6d3a72ae4b892eee399cefd335acface6abb3291417';let _src;

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
