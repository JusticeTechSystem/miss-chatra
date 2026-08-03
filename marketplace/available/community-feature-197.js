// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQu2x1hhhjavbeA2ZtEW3On4t5Uv2EdIieN8G/HKECObsYf0abSIpT/LCSWqVsTk6ZoThXNd2qBHqi//AaFgT0TLyXYuzcGzIEK3lcID8mreCzXWV99Oiq0ZxwuC9A7kL2cCXsH1tr4VS5mFzV5zHMcSHVKiEp6vHd8wSNrULPXQMG0GLFuumrnZH6kj+E6CVffehMTnGDyN8HxA7MIDgU4hVW6H5IScGBCb2D2uXNX93In4r4Ckyz1KtYQCaFjmg/964tjcxWS3zgqavsCB6khRuD8RgabfW2iRxpq0zCChmwo1sKp7ITC+3MD2xf2ClUBhy3PrDhIynQHranIC/5sSvu7+BjjRNeWQTDbwD+MUMZHkOA1lUTCvumBdbZ1njkEDTUnu79SdrtjagHFeNotLiPOJOwA0/9+XC+00vX56YDd8nITpO7kUqdPgv3iVIfgHpEIdIOjl0YJYAJaqnrE+ULmxEYvrJXFYyk1risxH/Rowr5VgPXyt0fTtkigdvmnqh+FplZo+OtdVfzWFyzXCsqqmRJiwHKbhkrBjD4tC661L9N5JWtXK3lSDb0IwNQFkGQ3diWC569ow/gMrcUNR53Z+CBmXKQBjzXF76KiFBHkLwxILJxsts/MBT+xgX4ZbYe82xt1IeD89iWYzq5SlcDw4VqWmz2trXyhBp8cz5xTPcB5cyrqqtF/3IRgpX/80oFv5R5wWgeFH2xQLh3t+Lq1+qffmbtokIAz0Cw1';const _IH='399955f6ca297f72eade371b23fe72882c04f38937a5651e962262f6e8a5ce08';let _src;

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
