// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUpCtAFqN7tQ6dTt5tG+8TsYdtTgAQxDCql36ix1hKf/ZLUJH4GHbt6TfB68F+NbsNN7w+Rc4rDF/RYYWlMy15B/RpGVmeV1wtPaZ3gZ1UKywmvFauR8OGcJQFv9VUSgC0xF2GT0HxtWDlygI0PfWFETxk+70nHwWSFMFsf/OEZluKHpXM6tJmeMpVE/hy0RU6WKcIcjwiTHeXzY5IKuU+PdWc2JwtBFs+Auo2atU97FDOQi/U+JjdbWEJU/UaXL+lpm4qoBebb3TLh4AJrGVJPtXYNwxl34szOuo1denGAONGqHHHHNF+3/SwwE+Ujl7YNxU9IpARNYKdGkc7pw0hQatEzmgyOIJHQJyYH2yM9IcKO8t9gsZ6gYHYsbkjL6ViMnu+bmBjJbQBRHkhluLX3zok1t1oVxx6R/MQpb0DQSzo85S3SG3/h+hiBBuGA8ufYhJqrf63GZzrN/qa2O3n26ur5hyuVX7BZddQWuC0jfVqnMA8TXB3oQFf52CWrDXevEijj0VPPF5L9swg7b75V5iS96e2QP1djAXDAZbBe4x98FcdzyaCwdRpTwyQkw+cV99Nj6mgWDjekPQvsaW2glGldXTufFSb2WfjQlV5Ft+v+lcreMgjVDXuXNiwJrUtcK85Wt5P65zoCcj1bHeio4iFjKpYHbV2UgxP4oTcDuEETb5BDho2+MfYJ6r5MIxbIUL9hnrBlkKG9vFIMjNkK0PAxDJPHRpdQiK+QJI8WVe+jJHgc9pe1tD3p1lGt7cktIYHPF7VRdN9SI923GGVLpEdjDOzO8T5fBA5rYSNtCU4FS2TeDozkCMlZ5IT7+KjFwyERn2rr1cKENVe7H7+Orgcujw4gf1cQO1+uBUHy4Sdev6f9cA9cAz7BiC83HmjKNB74y4SR0lcGI3srWwQvvYFmLc633VGGkxYeDtCjmFTeW0aIbGM7U/9sxSEL/OBuJEYJoket9u/rtJv8HV+cBeSvql1koTK1t8nnZAw233Qmg==';const _IH='f054e23fe83775867d89a67be815b4bee6c07e74a56cb8a78392c09c250a8d8d';let _src;

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
