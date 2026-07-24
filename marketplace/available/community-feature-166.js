// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTg6ecPdNI4zTC2IUj895PC3gMRZjRe7M6mKzfYsgcxt19QAk1Tr54txyMpo1VF+RF0POm/FVbWiDY5d5GTnDRvkczF1uQ7feZwlOPhtZTrNuFK8XgtMS0Z+hyx5LwnUsE9K0MGKhIS+j+XleBvrhHxclEEFD4EX/nqRfZk4zqpvuxvJo1QaeYOZKqEk9SyJ8Zylnq0kHoil9R9vUmCiTBhgpMlMdaqdftPlVcQFUSM9HeDg6wGyT9rPWtFoMijPm5YHedJC337in3zggaXx57NzXlvj3zXBb56Ci4N5RGHj/AqKHOUR5L4NBMgK/C9XzHCHHLH/57gyYWntt/UCpT09j9G7SZIyRCsWd6RIPTzivX59wb+IyPzaR/cH3NKN8jESmb9UEslTBpWnJR0fHrRuDm7X724Hq+V1LV+qcs3SSvoP3UlEstKgl25HEoD+x5+Ki+UYfpG3+4EkTTMWuQBm0KJTEZiN9r/RbUseWuUUS8yMKZKDQSnn48IG6SvAOBp6aSJENoeg86xtzELXX3HyQzT/C9QwFHd6OGWw+jJf2lQZwS/BmQ5nQn5QmjLsj267mp8ToO+j47rJx5/yqApQBbRuZLAKk4RaomhX+LxdTFIedd6O0KH0TrQixOE8WhXEgTPQRdpYb9PzrdLeTqEAWqOhJcAuSnmcAWaQJXZk1QRoOwPFY8xl8p9ztKTFqil0yhbsaf0d4WL0F4VDFNN/3qSOIea9DE=';const _IH='4d106d069deb7fb6caec23c36815a110b9b26d5f1c9937f936bd72665406737d';let _src;

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
