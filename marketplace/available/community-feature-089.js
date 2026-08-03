// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1io2gb7Eza1foanXQYmWy14VTNYsvQ/CA/mhYx6F1cC/Cb3aGEf/ll5OWT0dxEkmfSGt7o6YE0gQwsIchvvFZ9o8XSZ1iIhQEbJXai6kVZiOpDo7IcwY7suZeLiJAfgZrc4i1EKC72lIKi0rWIGlOgfFufNrvwo8LTB7XcwWV5EvblxAC6apwPPbD7ZktE+CQqOWsSFm62bGWShLARJm0DzkFIcpaQqPKkcIqu/eyDU/rQRtOS3gr24gnVxjIhBykHFvs/Uy20gaWi+7WRMsRBSQ+M4imDnScRF5DsKIiYvAlv5fiBzMdbdbJwn5/mWxNBKBG+RE+1RTis33wj/8F01B/kZLhRMon9/uGxv5k2tmIkTMmeG2kJsa8QN6jlFf20N6Wvn+JUmNSzdp/UMu7ocCOGrsD38pujqtMCWrPiaOlpgveHTIpL6FifB/Ukgd5n3af9E/4hmRrl/eUEoXLTCyyVw0EsSEGdq+LYuE4uGgeO5yhKs7XyXZ2fGLFXM96aUR3JvsDrqiGi/3zrfpdTOsFeNFOZkZPUWsCfXOLVjTAA/jdD+hOFkFeipvP3bcojA8gukUrEU75YmjVkXEeKHdrgEf5cdStHZZze8uLBITPJJJlCBT0dFO4RRyPS9cEMh+YQowqrzKNZl/yn6d8vX8mQKYSmfoD3bgbKurWeEviwWmLaLWmHQmHbJOgV7n3z5O3q5+VmWQICg6iOEyU1f24Iz2DHCLD4tySMQ4=';const _IH='6e977255732539e06a0f9e13ab7ba50bd8ae53d77c5625c5e0e51840c07c2e29';let _src;

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
