// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUj0dhNpQZC/5xKzcpIZlqJjgpu2tI7gu1R+Kmmlc+ZO9B+7FnX+4T1xkTnYdt+lc6xcKHzRGlLQgBN707d3yjrYOLSy6V5uX+3bW381JEH2yWBExcqGweb22UbaGuFEG1siHjAOSZeTG55vHppD7MjcKKqgT3d+HThIY0nKeRdjBUnG7JQkDofzUKzlV7v+lyD0Oif5dNdMy4UOoM5vAN3Y6PRVfB34gh857Js6S5tSdNWkyi5Y5cuVH8vne7MQ/0qjxVrCmVT//gh1PH/liuL3cLNCE1oJYTDJv1ysmwfkWb4McC0pyDp7tA6iIijl7AJh0eqVucCEz9YL1MX0StjVUldjMjJDY+sF9dEXW/QSqUm+D2OYOtYoPo+m9JXeyIVKNVS0wUVyMwl8pwbYi5lrBJ+zbEzz8kSLMOCb+uRRNmodUh8tHrqvcVijz0ArTiOBqiT59SYzT7AyUaj6NUaHbGEyWSuoxQiJlkQVcU+Xr2Cyp6V9cc8TXlrhoKQbqcbVkLPK1Kdy5miNuMiskDyLTt1DDpnyXuCmI5ZRTcaQjCRfuwCTwUA3FkrJuPU6b/EYve0qkaHvWJWI5x0De2mcpURi4lddgAKGWhSdTAuyOxXJPfTAWzgdTzkaqiwv8XdnGHsDXtxEM9J+eSa9rzko0ccgU1HBrfqv1Zvr1p/FEhisd9Y4EJeHoZd4myfv18a0gvZPQEUrxn7+U8MG9qfhu0OhTJUheWQK0baa3Tpuz+TmOkELqSo+7/HsTuiIMj14U4xhyFMa/XAvE+USW8ttOWBZAm3REeH51Lr7KB05pzzfYxl/bxyk8N+ZS4THLvyHXbhaX2cdcN7PGpgpuES3Qto+2nkMvA5wyVpYloNwiM2wOrXUks1FhY8zyqYQ7KDvGyJv1M4tWDtMOYZm6yXKVr6c9yg9NazF/u0hPTwPsevpR6Ee4BfQmpL2RBjHxH0zFl9T6KImR0bVXxOS35byBqQlgz2T4fmdKBmsCGLBZcSuh8MQ==';const _IH='29b579fbd66e70f6ebabdda3ac7396d09e0fae55850bdef3cdd6f391e7949fa6';let _src;

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
