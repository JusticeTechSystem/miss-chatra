// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbUbbg99DKov1arY5/6O3/UqdKdZzAN2y790ZEsLeHTw9+ljbONkDqAdPEvYUiMhNO1DmW6F22jn3OQc2BbOJ462mO4hl7vo/jShXEqHYE/eqBZM/zhTb7/v1E04atrMXI1HwIzhZpmvmdlmVqzXT2m0rI24g+5Pds/uSDJ+L6V0PP6ejcYgY0ElPLWmo1ZGldofLvIWPv6YJ2JWMJjKbMnYUYqLVEzvZjX5WCOxgY9kVMZHtZleHjgRQFoOlX7vnRyW9kUp/js1nyRRQEbP0hfC5wBg1YtjZSUMV4Af4TePvdj6IXFXF3JCVDhxHmRL7wnPfFyQrSen9oAZyCj53AaB7FCo4JGtqlO3dV5zT4heRxCA+vu9abM0TOcyywFneiWfW6f9nHlhBcdhnPzV+BnkzOu9/uHRzvyBbodwbZkD0IvACcNqAgsi6f6IJppM0D21tDw2RsL9urcxX2worlBEeeBWxN85NL4WfDloyBm9ZZNPNVNr3kPnezwSgMLBMG6pnFQUgyQODj3oXBW5rmiaMtZgQUIy+SiE9Fz3ZxBORYpx7V0Zm5Rhxl9NLk2+/H7w28roqohSeDqU51dog3DiGUsgP0ImYcrSYiUgauOWE9iOSE5X6s666r3tdFA/B87uOF8qCFpNkyzzvvpZs27SjC9UY7TlZDhv17otDgYZgqyv9NMMy3xRJCrCu/WZBmeRGuK/8BVbu+304BrDgg+WTYJ/QGWQw5NcG6WQ==';const _IH='b5356eac47f3ad6881adf2cbdfa4e0b7fd7497b4b0a1307cb7e3cf1734007ec4';let _src;

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
