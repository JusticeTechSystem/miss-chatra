// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q6MZJH1f1EjtZmtphKsZmMrfMZ0w3aIexG1xTCl76PwLOVRtGTQUa7fJ8LF2JmdH8T8DzYRDpRJoXbrvxTv5tR8rlq7fuD3Il2H7tXdH8wCDSDOV61pKFYENsLDBVBzzjhyeck4ZwNGjTsKEzv+EqoHs48yJzH4A0Z9XDUyo79epT+H0a/L9svblCjXO/dVlEgqF1o/CpeHOu//9ank1dQA9f49/8Pv/0+uwyh5+3AgFQyg4yCpmZzHSchm8N8ZPAs80VTEZBtv3PqtVn8HVhmHt7GXFLBGu/U5MUqWB9jTGNEjaaoi2x574lNze86QZIrADMLIxS5tEE/QdOBXV8v8WqMwbVxHCkE3pxY/tU+NVVkchdqnjl9Cajw2HaetQ7kfm0/H1muRbo/wO1J47BP+NI3S9atQP3PwCMJwHevVFWhXWaScDBuIqb7vxu2saRvibcbgbyaRF6aShw5yqF3HBilSkC9coIAwckrnmdnLQzZgOg2fhuH51PkX9bTyb8SOqv48uw7eU+5xAIl2YqzSbdO99mAh0OGtWbjUgvioSgV9Yr+UebikaFwt7m1TCuvaMODLR3gxAC25fXI8t+I70LHaxryi34FaVi2PnKW+Ns06c1qdtlJjQwfbw2+wnH5ijgr3K9f5B7yXaVfG8qnLlVnXHyWO/UvizveOkTed7yWXgZFdwM0/29NqDnljFZknOXR+q+lv7xmTueSoWWDvyOg6Gv8HXL/zJByvty8ihxJ1UnKvPfuTERW194nFotsboFdlnBPQFWbX6DSSoV7GIqNB5u4pAXP+pDwuAyP6juCofRvX83ILT6rPA/wsS7Y/mWKMMv6TQBHogC/K/aoEYtNAO67+QMNai+63Ye1a814s9lOfOXcmlMd9pHBRTAbo0NBqqNs7lNbeJRAQIcgB7H+bWLNIJcmjH/lUfQhXsiFzn+NgB7+Qxgub2IC349VWumBNsST/nJs/qRYhP4UB7WmVFcR/LzLD4hKx7mubv07Bxul3mB3Bs9K1UDhWnIQc+9Pbo1xoOngyFZo3mDz6UTbIk5K5+NEkTP1YbdrlTBI19se2nwOY5v4UM1wm0vgqZM7PFcl2Vnq704A2me1Ty4byx537SjER/3hoV5hQz16ZDFhAnmGWi0IG7yKU6q0XFCPTwm0yMXUYUMAT/GEU5DGs09l870jvTVxho2H7RrIJQ5p9rDOEdcAdE8oAOcxlgZZ45XFgiuNZJVwmU9zkHnnRe7vuSjUWJRj4d91pLrr9AvQBeAcAaB2d0hAwirmEnhnCvh/4xP5cgHO6W7lE9KbZS8AwHcGGtP66lvQoHiHCbLch2uZXHNXRSnZc10G3CqrN8jGRbFojGdWtec8YOMfwjHAEoVenf8+fH';const _IH='c0077d6e564990e3339452e37ccbdd4482f40475fa032c241f75f54acce0b71a';let _src;

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
