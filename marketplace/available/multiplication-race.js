// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSr2XjCoLEiiyiwPr5mv6XTYaJgLVIg1/p1MjH2d7DVlmE2GFtprj4MSK5g4d0Gf3B5BdivxY57G0iPAiJRMM8ptQ/dmgL3gExs0ZXnFTFcjHOyUxMvnNc3v9aJSUKJ85N20EQXDfubBPUeCDlqBcrIYFlQgD4lhLVRk2iYkTmF8xei5prPmsM1a7xWCyIzimbNeZjRPv3cVCIlZbnrG+NVxWjMDJtbVy5EvsPknE+QektSMxnjwviGCHVgq7CAZ/ct4jR+KJC1Oe6ARlpYRHtPp53zQSCE7Rb+/VzdlG963FJEclQ8WaRWvONe0r8HU4PQATANLGyUKUE3toP3m5oPBDWWLF+NaLbPWPFYMnVe5nj8rZXlh0YuFsxYI2gNN0qzTzejyCogBnAuZ/vi7+xTmDbpULTmityrI21qM3mJiM0zSDOAwfeVWntx83nYuh7eE9zxHNZTouJi3dY3UUZmRIJb/YA0064dXoU3q2viSqV2jM6rACCy/jpj3MkSbjM/Wu1TKoZijZ+UBfqHCoSE6VLzS8aDjPh7nmC+ePWjKGiK1sDHHBcQgf+O1cw0rIoI3oU79ztZtHE9TR7vscK13l9sLgyLM3tLuDLySl4u35LfiBgFYSJGXAiP7pkjDNyn7TphhmQWhh0HWHXfXDm1YqrhAEqHtxn9kPBVIII40hOoIxfp61XQnDLwWLEkDEpPA4wFasCwzVY9jYLepNzuks01qdmTun9RvMsZGmTXumKEQOfdIapWInASqMVvWGcUnTprCpXW6oHSyKD5d/4XMnUHUoCbZyhIdZO1zs50EqfetZc6ZcjDHs8s9kfc5MPVAxxlpB51r85gWaF25ogSyRKrH4ogh2/iJ8QD9XaR+vXQRG0ytN1t0ijIqrgkNXOgH0g+r3gLOFO43ozxZa/YPPPqSSma6pLvMwD6SPlbjKJjGdGx5dfdyYidbQAG85bD2Jy3P6K44JzbVJgtnGd3udaJ+IRE4c5V+DLQwnd3NtP6GjH6UtGkIZEWUZSc4pYLM+uK5mgDc8I9bZDNSJFUOAbf0HFFZ14ThMpXSMi7SNpADLvvbxryECnKEHli8xF9tDen5gPc2VTOXajP4gPSC/4UV+H8/Wh6XPGfRCkc+HheywIYcJhfAYuXyCLKLESZhrbIAz4jgG0SNH5D9ImIgM1YDA0gLsE2a19/pMP2g2CTv368SJ8qcaRlR3UdiOyGZG+U6f7Ye8a9Qh2l1+1musJbnB6GDlUx0GYBk5oNpirZRkC4/ZWC3D694bV6XY52KY7mtKE8tcApUwq+r4R4k2i8GFmhDbL5nqJRY/gSsMXAQUzqcyncZFhm5jmxQj6Oxvu8WQ+X4FqtTGawQywj/0lX8bYdfCW199sjDOKxioCIxz7DBjL8AstrCTcj5TCJaieiezCwCXO0018Pf/b//On63O7uT+FbavdzQT99Ij8Is+WNNQfXCn28/rLceanzwpMbcUSRBEQIkoIJwncM5NYfaxQjh+sCOJz9OOmvN+RLECZJeADN4iQg8AKJBVOp1krqAnyQIE1HZVL6PJijm6MTY496ak67z20QYgu55jMRlTjYRXHU';const _IH='664a9b94772672d01ba1a70688255f435377e6848578739b3c2123d2953a0621';let _src;

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
