// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1Yvb65zGgVXUb+5HzUjehtvmtdQtHFiPKWUTAFPY5NzQdDzp8zWu/Lf5hdtmhCYMXM3YZaFh7a96PFacSG5eSd7McFZU51xj3mBc9pIjEll2P+2+xFZhDGyDlw4iUCsYoGKhkFoFpHKdd0WB9eIphWmPBF+vk1blv2iYSbCfrfBYRqd+7nwVWy07sQOceHqvjetJrBB13NzDHy83JdIlJijIf/w6ielo0ZuXb2DzzFumykTy8hA44Yeti+/NJvG0502RJO4RDZsaVQIBrZ0Rm9L5Rd4rwwrB6+evBPBWTA7sOW5743hhDUwueFD+lWhifdvMzObUQ6crriQUhRSRHmx0JHFlx49vvDSKDcAjkMN63Y3IEyHqaDPLhatsrg0ngt66qtqElwV8iZK3TXJZK5uTKxiBrQUqE65M0Z+BV4oW0MIeucdNxCbXAxhCO1pV5673Wo7QE5IKsm/WqkhhBSsN9McZocbzgpY81GmZzZAh0CbfyN3Yarg4QuUmalzo84GNTL4uGu3UU77O9r71y2P0Dbrg0vPdEXHT6IU7oKHxXLOJOi5Y/DDBHgArc066bGYtVGQ6ARZuAHlEWnhC5/1pmn8SpE1uB0SDOFRxraCG/k/YtIi4M2MbP0TQ9YtQtmb/g/r1vMQOcWVMeieVn2PT2TzScQt1mg86ZWMQqY/O46XNuTHklgNAW3s87az1KuU5o2czxyla7dbxg53fjtBUZ3RqvGlJ092maYUwfwKfQdEC4GW//p7EAaoGJ/IdsZXZ3msau8wbO4+cAhuUpWC2/JblpYoG3fiuevo1ydMhpSs23/H+sLndPhzZRZrJb2+0oqdhGmEThXcnmZGEcYxxM25kNFIBpWN11J0S1AOsKf5i0xR1eNk0lRiXV+le6T+GxfrSwiv1cghXqOLM7uCV7NJHMAn9uF/ZuP6XVBGPVmYtqIoC09Ah9s0DRM2fAJZcCHgXJ98S8WCr3wk0hGcM7/cjgzxSqS5wr3GtdRDvwWQ==';const _IH='6c51fa14ea964738ada5674632e790687979e886efc1adbb992485eb03ddf0cf';let _src;

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
