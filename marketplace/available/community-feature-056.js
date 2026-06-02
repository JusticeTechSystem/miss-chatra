// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='icHjmbU4HUbgU3D9fXeScAtyEbsHDs40CHn+uaYIOl0zfqLM7D+RzEjRCh/ZvkE67Zk+a8W++Br0vyswrLT/KkRkumZJAIqMvCCK7Bm4hQwsEVXeE1jV1jYG+eYUwskRPfoIPGFwgCc7qK/ZZpSaqlWK10mjfPkcSCai7EmjzTi13rqjP2pch9ZIuwpQYiIJKtsQI+qCLvhg9A1GiVFCNnt047W9tl/SZ2rNjhi3AEx9po4KieL/wjHqpT++OViU9mxWGgJVI2yhnZgvUnlJphGwg5dYpjrFyl94QB10Ve8F8KQr89eUlRrFYJPc/sDZkw4ojSGvhA2/2UzwkPbDvFzi3Gpdbw7GArmRrs1FWDeWPR3og+GYvs++VXmJ00LwShWRTN7lTUjErJFXEN4g7zLs8cHt3FxYp0cmg3Qx0TXInVmBPMdwb9VEB4UZkxIH/HV4Jg/k2bQ8alLuVjmwynm7uIEQdU8QQjQ+zzmXji7n0z2idIHZPleeuelsgp6V8m8AjGu5Yk+5d7jxCqrLYMzcvr0u8XmFnr3F76EoeEbsBm3qaUW5u1jQ1YOZgmChjzP85tOzkkJzaZR0wQ6XXy84q8ThT9xDT+UqiYuww2zRgcgxcPZSHduv/kub5AZ3vu+uGkcY9zY/D3abnFRj1YZwIBp5S7BmEfmg8UPIBR7zyjIT1qPgMme7JoN3oFXD7lPbIMXXPbOFhW0D1yEKrwStBe4=';const _IH='81be1a4da368c31a332661155ed445d29c55eee35e8055628cab2bac2b2630aa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
