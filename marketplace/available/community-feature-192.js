// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR89tr8UHu1zpU4NqPAQiZzDJbIgLuLQE1B5Bwk80mLzynGARPw0TsrBNIdI1hplowu46GeIH1bKhXYIdiYBPiObEq2SRSN9/GMC90V1v/BAknnzw5DTvc5XoMZA2ndV+mDVqWQb171m02srvALj7hxHD3QoNY/Y/5Kqqn5hvKFujRBktpyWpclWIKLXdpfeImIRgwMmMj/FURwSnHaSMpxfR5gTVD2oWYmdStzeu+Z5Y1X9zKVQ7SFNNICrxl5AvMkNibuC4r2SYnaKMIORw+xyPTWAPxB1aKmXMJ+9xZkmAj/By0WxaAqFEBNIGZGuDhzAmu+M8NoMW8v81aKC1PYeTn00D+y3eE6pvo2jqGTzJY+m+rz/BuwXP8a95p0KUs+6rpatTUZ55YTu+I/D0Mlpo7ip9VdANQTQ7ySugebHu7EYyIuIWJAW3ptY5sLormY3Fq/awMOR5rsBNHw/w+rsAfvX54d6wSijQyPauzr3+BSaAcLKZel+gGM1yXXuR0gBIpn11KDylWG6e5ASNU7q1VOL7i/iQju5PKMPN1Jq0EfZm9uCnD3Ve6xLSBKdlRYUkzy3m5rNQqHw22uKqxRgr2URAaiVIRacqn7glWgU7zajEq/bp8vKqE12GaWcG6s86e5SONBGGbpdUXV40vsTeBAXEJFXZrajYMakf+vkt072Y1h/HnrSVXxDzDaklQ1mxfCN2GOPOhK7UT0UWktsXnwmGknkwLzOpDxsRKnbI/TuA==';const _IH='6dfc39be70368bd64e963160b9cd9b2c844b4f3a8de3ebdb1103b52cfbde3f51';let _src;

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
