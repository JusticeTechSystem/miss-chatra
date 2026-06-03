// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xm4FRroI/X5nauuJdNP5jzSIny5DNhp4VWFhp0k0Hi9zE2V1kEZRwkp6Qa/4vD+TMECKU7AuP6P9HwSJDRWEJQLeI3ucU7paVLVytsh6AEWya68RM7552MsTwatvfvJhd/KIpg1F6hoC9LtS+kwksFgEi6E+buX3YTbfORIxapCid69VQan541hni3KiRdFH5qVhcOWi/JhPnboMySoJTpvsYR7CfF4U5vJj6E1ojShnqAGlyitoTm612+NZ2RACYWa4KVg8ECnps1Z9+/1xWXS4M75oJG7QIirDVqOn4p25m6CDf6cfqOWw5MucLFKHnHQYSloJ0SpjzRXKbmjYDvhUtPNO0grXFWCTqOzjttWzrv/XgmJijBVe07sY8Yca7wO3P0ev+WonjsUgpVU3dmxt/umawXvQhNn9hfJ5qPDW6QHFAA2zvhU/sqtbK0JTFn9BLwe0Z9x+c0tYofR+PorSOj3jtylIKeRRHpV3JITq3oSaLgZntugmqyigci14fJBSZEUGgq4PM/j8h3KBV4qKj4Ln42NtY8B+1A+NWQmcafcSf/sifIpPZFVtA2A6Sh5NJxzqPh5/QLnTKQz8rDm9p64eb1jCTg/8IkK0VLjKNiYK2E5I86TS/09q28KaZP43';const _IH='e092ad52268ba3af3d549daf91998ca2026322dd2075013b72ab20d035ce71c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
