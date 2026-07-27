// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUPQTGYUMcByBefvUFhpOoPHLz90EBJiMBpS6xIoPRpe7ulwzKHJWYZuPD8oiCm/qgV1vd68WjOmLJXYd2LfrSlWxVj+KOy+uiLaUZtDL36JxnqyD1Z/g4Yy6WI12P+Zsbn+T7IQa4PvSPtTKatkljHxvj6l/A9Ceo2wLlOVuokRoo/I/0v7CkDdXs8561H5uItwo7pAy8MnUFLLpWnldVnYM/nfvwoYsVOwvMu2Sg0ZxBNRuQlXu9Ni6fAWQynnw8pccYc61VnwBvvhvEjzOTWXd8e9sniTdc3SsyCUzht0adtuHNIgx5bXnmRSAF3D4r5SEZFCH7ZksmH84HLxDiQuRmuTfdl8HXqDV/EblPJT7uKY7+n9ZToiQfhZHFhm1PXh6dP431fGc9NqEe2i9VgRPWujBs1mSrxmapGjk9JNqmlv+SegP03aBt/0xEFqEI8BzMDv08Vt5CGgzPRxzdInog2vA8by5b4Db85PgmIU4rY93FLZriUicAR546F65j+yJB8sXdrP3H/IZdWl8ATCvo1bImhdB2fp25AkP3bhM3HbCoL7fdHkSj4qlDXcxGeisPKBwGuBfqDFqhpCsh8VwHjXGuBvreyy69WUqPSQWPzjQP0FLZ7kFXbbz+295B06TH9cc4vAWWpcKxqECFIslvZ1Gcqk3o9BQFxvgRi8RBE/vRHOeuKTVGy8Jz6r7N+2kYUWR2lYPX1LvW0cRULRM1PKtJipUoSAopMaqnXSjaz2nyqDwT92Iyx0ecFFMuue94BqY1LvGwiZ4L0goClKLZHJJj9IZuMxN38zsz9JH50HsYHcODm86h81WFU3gpWfcH7OxULj3UgtCAhaCAM7JC5JRUf0ItmhXNbtE6yOAEqUDaAR1QQwg5jpev2yqEgNwiyV1OEPRVHDiNIhIYkH2vhHEfsGFB9Wx0WLNmSH5HagU8DfXH+jVt0/1qop7gJPqPBrc6DMYGbixO6rFrvRoLTlm41d58DKaYe56t8nS0KBRj40nPKhPIzpEDS3kMdYNgKsIacNuQwrUTrm/MOJYb0yaAJSwNLmKg6VBpPuPE0EaTQQsKDTGzy1LpcInZtsvgH3/UuzxavLhkFpemghQtgKl/dEcfkDwEl38mumtw+G7aJNuPkhF1V7FY5gSv9LCJlZB7S+7kPXq6DaDdZuoEdvT6OZqTxUVL36Nnd2QSbCYgwWelB2LuIuzQgPy0aIqyBnGMuQUnkAt+rq+gRs5oBnVs3MmC+pkvVt4BBuoXkckcVzsvzJEE2dsvASvBF2VEXu3lSlpWSNrpCfaBy38wgmnKEQMWUDT2P+VxWKHGQPbFjPbIdjymfFylonclm3VSZFWNf8Mn';const _IH='019eae27766426eaaca2f89cb166306a0d1de10cff90bf7ad6d7dcba2d11ac8b';let _src;

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
