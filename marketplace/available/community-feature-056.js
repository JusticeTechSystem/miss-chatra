// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ps38rHU0oa56jIiO68kHuhOnv3LsJ/Nbw/me6eE24ZpM/2+cH6WoFHv3kTd5FCa0npwng/JpUGAjS2M8FTe1AVZKcHVeL5u7xOaB+tRSTkRDE6rDlPvw03hZ/YcXHzU6rg5GBQbE3LhfihpcyMV5OtftnxgvcwVlqBGlK4ETTIe9htGfcHQmUoZ029evZlfGjxLbmDUJapDLmN7MFwszoKYESjdttcLTBGAMkDqLWZFc0aMbbpJaEy0SUUayNyshConOWLk8hSzEuQTwEAPQbK0+mGRnx6NrltIBsdFYS1TRZ/rC9sNjcjTOz8iCU8IMBQ78XBmvn4ZNgDBwP+xaEsT+c6Mj8we1L6coDYRN3H7FIeFMbzkNKGH1v4jvbQCB+V9vXe5RbI1f9L4rPSyn2glc4GUgPYp2NzNsZd6/9iel7NAhPDekj7aXTMwAIc99e7Dy/qN4Odi5lPG07UgV9N1LorxDnGfwd+cm45YjKTYIrLlKzsIBsmdk4YC0+X8OveS3WdNu8kOiN1YwoyrL0w3DNBTwcyYE+H48gp6+pf4V+IVGMOhSVeDSp7YKhNTdBDE/JwRVDskww9//CfYc8CmZQZDAs6hWF+pAVmcO5fm7d8IOCLpfldfUEcSi6x0dVxXX4DlfRZE5UVVjK9cEUb/qFu5vZSISSaNKin9dqEupueHpqZFf3sOpJUdHbM5fe5YZMN7SxU42kyYo9bohB7dqJdc=';const _IH='45fd72dc1c11897f29a8c2d5eb1099601a248f15a07d4c603dfbb33b971cf685';let _src;

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
