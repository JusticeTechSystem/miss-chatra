// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBN90IDtzBEJLAyqlqZSmWuB6EDvbz/YonNXwZW9tchVJy4bz5/lqOFvqtsMg5bVdRjnUOf7ROauaU7l4RqjlDmX3Dw9tJ4IxcavmCy2q4g8d4LPDlSCC/rgpKlKeufH8xK4Bq/nV4VUpw65pI0y4J6aImgTEju6BjaCZUiAxpFOXgSgivxF2p2zrUgMyuG23Ie2xTzsFYe3PROmAokp08x4b44yYLTR3rrkruFlkI/BaUJcpA8DGdq0AIqDpQkmAm0u4fHq1S5TI/ILdCtr8mvOw73pLloKpy+4vE28znvZ2GBHKjKFjze/IlHwyjP9j1Ul7JIu8GIBzmBFWI4XCovxpf9P6jaEsCYEHgO5rGkjgW4OGHV2xhS//bLi6JM8rc7Zbgy/YLgLJvPfxw4G7P/xkS7fGF54nseo0wKOkxhgHHb1IN/usfsKRWcbWiJUu6oZh5Un9ifFQcoS8mm9+y2eSElrm7F8wOvxkzIIaBcKyv1ane9wCyD0lEtgt/+BMwq4F5AiiNlujID02DSr6jJXDa8L2gxJYy/JGTDWCT0NrnYl9TaedoOJDhXePT3XHNvg9asBhQPCF/X87p4I5TM9Jkghe9lsoo3WYYO7NRfd4JHlZRllTNbL5TNO78qmvYi9FTRiHzXypN5v9VEk+4Tp5j2D12MtvTyQ1KVdU1Y4b+JqtS32pJODmTuJk4uG+4ib7M7EYiCyYQM+1IPatttw8U0SRCDbH1X3d4mTpQ';const _IH='46cb3577fa4c94eb5cb383d212ecef7d64425c9de5ce1e60d25d601d5963f221';let _src;

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
