// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/kxvSd4aCKFdJkJe8htGMKxxFooBOpdDp8kSn8wLTNrS9ccct7T7NBfk2akpF/V6i4+rzXAqXCrAFQ88gju0H1z3sWKu5tcREsfpQgDBy51GTrULUadGId8roZFAOrkraTma9iSlRspHy28rkQ6W1InVvHXbN5rDv6GZg2F2DqnJD/J5/2bJS+s4DrOxfEUK0k2kklFNXohz2oynxnyKOVPZ/KVK9n2RTMcinYZp3LuZvN3aWATXsgGc0QyyEgKrlrAiXFQGyUWHZNfYnNdzgtVaZsqurkoMyYqPY6IMqd74+R1P/W8F/959zq4XEmGOtPlKdfZl6t2HGEtyTfueJ1/qFsd+VT3skwVlKb8rU+JZjTEzj/Hf3bLv2vHvmGSV+j2yb3Fg9Wx8UOxs285ZIOrXzxF2TmL5+y/syvsBZYx/5Pawci+PUlea9p45Tj9fpW4jeUBlKkTRO+vXHp8abKwBQWONHc929Bw/n4uqYGG9l2u3HCetgndbkpN61t6dR8aA3FKJU03r3pxpKl5LC2OCjlaWULXKb4Z27C3XQ6O8yYoGPpHKIUUkRV2mnAWdvApzScPrXPHiHVz1YglvPwPMYIQpMPTb1X9gv+73FkkmzApuhGCaekvY95bjmVrbolhmAm+xRCbMMTQWJIMPEA6wQ5MTMQXl30nBruZBZHrsOlRVi9ONN2IDfcnJUjU9/r7hUO00GUR7VR3/Y8fGAIyp5Gtk//0ufJYyGBE8d+rTajLA1zLZZ/20';const _IH='0fe7fb9ec7ae91230127fba9549c4bc2117ecc61babffacfbc41fe9dcc67107d';let _src;

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
