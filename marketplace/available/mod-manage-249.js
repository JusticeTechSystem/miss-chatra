// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsJItdYlqgxhM2+3CBYu6GoLsIMtqV+Ic9AOcJeB+WfCxkhCplJ+LTNnEmNV6UT75hxbICvDy8/uYgx6dJ30Oqb2z3cpFtB3ZkisGBFUzpwBaxK8XszUrYptRz8BFnrPgnlslgvWnzfSLiHHqx5jn6iUwP/AL0MAz/Fs0tSTuhqqOwdwg012tvd6+TJzI37vxe31xzwMz9TpOLTIjYVNrLEOxVbKhr9DTVU3YBxJK8bCoAiF/F/O7qOpqAgXnq1K9ZUarIZVMpYVHmhT+WSRoYHQ+qDMEJah2wzscfQxt1Gwfosl/qFeq8HqCawRXLEMJyIu0J4AUPFF3BnlPZkFsRYJZxOExJgczdq0aJkxax4QR9hA+uNhMyeaYUmrpKjBxglKchFK5s043BrccNrKmgISyO7r8slgs4ARajF2hEpBzkDxrj6zDh65h+pMVp4BiY/0sKgDl8P83fDLAdlqJ85cUOj0BWykVznFsnrV72HGmVB2dikMj/Xl3a5Kb4U0y7/S0WLt8vQ85PEZ3aPSUKv1WmftcSOvUXcoTjVj4Qh5sPQbfZlrultx4EjFE9RNF4DkXsbN25UyDvCSXkPYUtTGlS3uult6g/sIlR+5oBZjP4/FiIZ1ZuNnTD+vq1eHu7xMXpfjM/W9w2LNKt478OK3XYTjpx6s+JNjGkkrEgnFlbNw7S8tgf1Y6yQVRLg9du+tifkgF8d1lS4tS9RV4XTP9/0yle6brZ3u3eaPtuOJzhqtD6XZFU/b59pSxwKXVTvQ0bnbcNWtRtkiHmd03LdPmBC/ZEiGZNB4EcRY60N/mj9A9cegrsvrdaW4BlyhxdXD+F/eUzZdLfF67siN+tAxdCZHMfy58ghWNzrunJqBnWyPreVe9qqBwNAIFdlMYr63Ufo5eOe8j9HYQULmnOHAeRxYWuJ7B+9Raw3VttYZGYm6IFNCZwjzMHny/dQmasPEwxuaG7udBtYRqWm38LMgcLNCWeN1nju2V7xCShPzVk43pilHV12l93Tl+hfEwjs2DpDSdHruXxV3y0PBYXPax8Yy3G0nD0M1iygUHtWpObpUx4Q7ya/4zsyqEVqK8W58X8QoiPiTObCXdImikuYaQlfAyznrehcI46R9JacRvjPsjXGYnsfKDLpTIn7Bo6NQ8ddJZIKZTVs1v1cmQP9O8qey+W/PjXp4FeIMJcOjZaMbm4sTBveXYsGIe8bMb5kn3ybde8aP6wDtKdO3+XRxzIMQ8Wzv5TfyCT8Ksk/uYKARyQCtkiCC+7bruIFu2eH3D3w7r/rqLopmvwswX7WVIQWh3DWs4w1bD/b56ACjm10Tl9s504UHcACnV+yNu/wtsTazyoMhLx3KiB8OIv3SB/IDQYnaPnnRVhWg8tIYOWUnTFsLPt';const _IH='9f76257a01046709f4307e50a0885cc29ee092a4945c1cf1220550a165512bcc';let _src;

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
