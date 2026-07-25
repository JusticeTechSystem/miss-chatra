// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFgKCgQyDDY8NSy3Yd4uC2lQ3fLSN4WixXf/c+3xl0HyVDsNIsKqC1LxE+9ddtETI0lBHHXE9uvYEvgSMn4tfDg8U41JvOUxzV+/6z0CRpYMzN2KBQeSYXD1cpD8Oshlc/z9Fk8TT4JsSeim178HPl5sF0zLPVlya9dAqeHFbcCQU3XpvQBlAKzKysdKPYZ+OXHlN6BPpAqLnZMyfZJvuFDQQWFqtKVh/qYLI9pbCd5SGmLrRTF7hapsFR3ZKTkl+JP43NYTP+TzCAKDu91reLNAhBzdU+j48DbeWfjOFL8n9/n4vfVd92ogP7M4tUj3x6SMCGEnyGCK5yN0s2OIRt0JzubPLQtjvuntYH6hw2HYa2CiP/NcMhN9aGeGlpEwzY4FrBBf2CIastmyRMd+w6N3jj2+X2kpm0KSzvhO4HsFmLFvji/+/bdIyG9e4o0t8HUvYY8gwlFA3dcVaBc56hOgyurOOA+8f6ABaxK0pb0eovzuJ7J92EvNklVTR1rcFr24sI4DCJA0iqWoEFni6bj/25zoTgu3wdPAzrNBjwi/e8LaYLzC25G9ZfCbYwzT15+xDSKtqPK8zVamjPwYX4qVnyYzuTadZR3zvnQ9v5xIKqlq8OHNhaMEXZfzqd90+6xwwdvGZX63bSkjuEmBcQesBBeEHkxkmccqdBXjNHU0/8EM2K8bfgbEcaw9cLBcEUmmzETZjjFCgUViV9c11paCAi1PGoHbaPisFb5Il5obW6pljYUJ4z5pTq/NP6cmomxa+oQ05bIAbUUr1d4FMy2inmp30vZFsJvUt4/reT9tfLqxSvdDSKLycluAlyE82UIRChiJdXEPp2OSPba9bfKKMKAr/zMlkPsCbY64oMYF5GDXm6S40wfFGBvmroV4O1sT6wKeA3j9aCuxqN2g5shQLQsn95wZPMaOKU004TBmAyK6VX7ME90UXOyAh7tU3GxLvMmZUDMwA9S3j5VNL7zLMKaS4GZNYAOQmv9s7TKOPOus9XJF//hs4gWDn7sIrUrXjhe4g9XPWZ/qfvXzIQqJyeB4v898Mo8xRqRJA8QwrBmC9FJQJ90RrJgw71KjKPXegcpgoPoATkxCYIUXK+3jYAvi7ABfPs7dIynogu5nwVi4uX7ZhOTGxr6SvDB8UkuEWdZ/IhMFSDmyhqYJHivjD+KmqGrE88i0oQW3i1FQHxJKXaYaUaC1djVZJi3+ueb2DjTUbfVHs+';const _IH='7d6b1bd3e85da06b969f63f9ac29ad17d64f220aec8be0799bc311479cf121cc';let _src;

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
