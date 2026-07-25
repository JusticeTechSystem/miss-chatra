// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRnx5amLkmLQBBnhyMkuD/yrMO4I5xS3Q/EgqJDt2+fLt9y6fIvYBFNbKPbCuxqyBpQRr+xDr4MP9L7Y69WzkG+0OVZaAMO/Q3qYaTyLvnox+gvRG139/4v61gmvVjPcAVuhaPlBFG0a+wKMwOFe8rldWH9McslO+b+fwRAWJ+He3Ftyk+LZpssPpNe5tgdkKHJwHfJ7GYrIOy9qjKBtembmwZPiknQBmk5ZZpmqKvh5L6B3uwa37WBvfsImDjUJJzDUjgD4h+Q+/aMRGZO20V4QoyRIWneQgiiRETVqRWXkOqidpXih44pFNVNuNTFv0pkC5rEZwq8LAkXuJOSml2+d7r6YirsJ+55EgYYc3VjhzJuMNSESlCmGlHYWH/xvmWQXremnmTcwgeiNSwUVdaQJu2VF9rI0Hqr1g4nqHSKu4aAk93YZEEBvzd0EX5JtlaZk9dlr9Tue+JtdjcvxN5RL3ag/fj7KXtSqm5NcDP5VMAlPodPDNhFBGdWfxuUtTMGMoAiPUZn+R+hBY3nSNAdA9qFh4cwBgv2Cuc7uGRd4EZm9M4mZE8SpRo6h75WPowt2jHuk1XwdMd+35BMWoKp/q1mXcGlWY4I1zN2nalVzPzzZuaMtSCebbiITpV4j5eVWDavndw1q7orrMVcHDpyru+c/Xu6IAtE5LlxFJQ6b+iW/NjHbRZ16pwYeLGZQQEJtEcqV0L/dhRNrmzgsl870NTi6w==';const _IH='56eec374d18eca68d75447b92b4c371cf7a9863a6072c572ea5e7ace9d3efe6d';let _src;

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
