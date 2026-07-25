// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAQclryJh3x1w1yBmhohAx7LduRx0M2G2Yy81IilrIZYEzD+eahrrnl9QJwD0JIC7guSwIEGveh1kI35+K9Nzr9Ar310DMM2RiXz+ujMSUZLhkOw05bcSv8Zt4DTD8mfCqKoVW19SPQUwRyC3XeiS3hgYorrzb6IXJtHZHQU8OVBL9JzMMeAZ0YWQhV1h83k3YL3aZvZTz9xOctfk9UYjM0PtU2oNFG5cYe+7/0wzkTkLw91EP0jYx5urVVSOSwbyM8ZlzAU7T3NNVC6sjMXn04VYeSAYNocyzqI5mL8idiy3+M81E3zCAyWyQiDnhLrX+HJEKRrxVrNko+6EDRuJBVbAaW72b5VAknr+Y8ZV7KGBRYrYxnTGVmj9JnG2mUgXakuSxFIskqJHntH6yrr2sjCkGzJzhlXBJDR7EI/vpdqereT+GnlTDIy6m9pBIeGidwNjN20zHFGn/37UftUlAkN1zHDnzBR3zGBMHchcR2Hhb5DPb3J2gsTwmgw3wll8FcOLDut42rQ69mmEU0X318Xn7WbvNCvn0y1vBBcCi6JW6z6BGIo4gvfRUbLindN75xwDF2zqJ0RBfCNRNZ/F7nGyMOqtxrgt25x9A6l7c/KXtDrnfWJaox1x+2YLB625ceBgVwCEM0ggr77PTb+AZ/FMstpXIOv8aODB3ltrjiQo7C1Y4hUDi5h/EHnWVBTyOI6pqVD/lgT8f9EnevpTCtaa5kSbg8w==';const _IH='c8ec75d4f158c2fe8b03ea93c1f0256f210a0274114af67e14aba75ade11652c';let _src;

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
