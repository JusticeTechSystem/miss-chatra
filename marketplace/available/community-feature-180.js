// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YvuMaKYao/aCnDuwyF8FP+P7eYi5uSPyBjiXMZlzN4WSV6gmdUKkVI22UyHsmmkgsXPWluEYG/fba5iCydTu4csMHPeCmFZAff0IuVJKO7jN3ohCOB4ZvmFJ0vE2mOAnYWdeVg2CRAZx8OJF6oCSLmxzDq0g3s7XrSJYVgp2T5schgn0LZQpheT+1aFh9qZblD3chMwj49PrYo4ulOagZdOLIj4aCMVr6+BMzM4MiEZVO8w1RuS7hM1ARerJ9azKzb6Lx0gCR+qVnJ6CLA6V9xFueq0hAhuvfHVx0wF/tNU4OzX1A++EJoVw9A2MrB6qYMTMB6VbmdOEYf6k6u9cGxDox4ClD0m/YHoyMOEooxopiq+68+bxogcMBg3tJc/aXIoSgOSrt1MjUYyqWolSwblnBebKSbI0hfTTgCygl9t27dMRPN1qOqS5HncxW2IGF78PSykMwwjhutVxHbobfrINtTrFTL3FfwduOTtAI0CPhm7HBPu+cU5E77Dhr6Mz9rZ+96ZWCY/PBE3/Mdj5ffKTuTLCLgcBY/bw7/LcuxMH16ojMgP94BlyoR7Zj0qP7H3r6bI+OS9Ol8PBsxfqSB3OaimqvtREU4ivZd6DHYPqecqwsq92pSuXNzZHG648SEma7k6ad7jRWXwunoT1mVgH6Qb9h/4s4lUzIGRkrs5ycKZ6382OtM2r9chadxmy7NPvWdgzCif92xO4kMBqkJPG2VgzlYuE4QN+rcdEHQVLZsxKnw16PAkd';const _IH='fa131915ab6143cfff20f35f3fe914aabe042bc64941e8b9339c8a8e5108532b';let _src;

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
