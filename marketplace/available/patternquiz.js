// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTej+5syoyv6xcRAepqWoIJB1KbvX72tFnHr7svuNBpuLooZ6GHcdbeZa+ezshs7Fj/hb+RJwXGtVHGu++QOGwZXWUc9sAvhVV/2HyHZh6UgSSD73AJzUNphGXax5JaMg+kHfOh0ZQ69RWyX7dq2INzUc7MTa0aqX/Jd0WV0nHlBepzE+SwLW0YF/Hd0W1yEymIcmhk6TTCcakSaEnEaYPw/jo712yzRL+hzkpjsrsu1WGrDnin7DMQnD7CJq3ArGB6uFKuW1xptDyVgFQ1wiFvI7108jFtkp+Mb6zs5la+1R93JVhDsMCFqGIxzE90V17lPqN6oe1LsSQ1UHmpxPdBD0AmeA8mF07q59adBWEPgw3NoZhCbKV+yjWBu6Pizv7ctKUU9jzgwv6SGljSYYPQR2MY8xyT+xp7d16lOSc3mhlg2qbh1UYYG0NyZwgFI16Rog3rsGyY4gS45tOKcwBTDc8gvwM0XxPE6PbbHDAdQWC2PoNoQXvKO8vR8mJmCE57mRSsmb2G39Jp6Q8858ctjM9AU4CZUjzsYqdUZ1u+4OsBHS1AaGd7iB8ZFqZyuNDHrw1VXYrzQADg01LaIuZHPJqUJqGLrGyJLsK3HEPDob4SQY0Q2io/f9D9MaAaUCYXwYC9gBD8DZBoBL1fSa6eEF8DfoUq48MBBNbN5la8Wt1qgpo+XkFPmVJmH989uIH8eMz7A6PCvVLs/VkMMg2LyvCEK5iQABLuF5LlZeMbkncSQ3FejyFVifJWjyyB8Sxb23nlNCZgIcEM+gk/Wa2IrqU2RIu85otT62q0XMMk6FehCrZDrhkWdpVVWB4cJ/ebucBdQDTUKaOPTAbAz2RhnyERPXhyAnFCzOgViK0/QBYHe7JRoSlehNf/NnfsIiFe00UKhE6R5ZVSKN0qg1CTrve0RIZrJr72lMGwRhqYHlBrs1rSXpk6IbqCfbOZ3wpXjxHnrmPkjCZX1ok0f3Q4NVv4DO14esQISY/Crr2j+mlDjrFmTZ0S5zkQeNrvAjk92X9dI/FnLv4Jpyn6yx2ZeLAzQHLpOmxH3/tYESwXSzFHVfTvU+W587T7Qqfdsuv/q2qvQCckj6x2w/Zr+RQ47rZ/daocYw0bbQu9NMUO66jkqdeqw3Mb1QgMcAH9vIJMy+Vx9xyPUHX5dpozV93WuQtrwGdU3tvE1w525GJio+fs3MucNeD4fq5szZ/FVuSJOKwocjjDsMo=';const _IH='7350d718f12fbe73ce13d836aef5955eb7abfc9c9d8ed6b2b2660aec0a29ce2d';let _src;

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
