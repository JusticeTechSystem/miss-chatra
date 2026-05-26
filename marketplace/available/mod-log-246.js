// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OntJTorQ6XYU2+4MtD0FRTFZZi+0jZP3KfWbXACT6TH/LMJAX4dDiAIiV+O/umjaREZAJzbq1rd+gP6hyFgU8AYQzEQd5hCbDfAVgf4eaonHWbovQzig5RHn6oEINJmUwFv8K1lSzeYHi8zOd+STDKCUyuZ6JsW3qKd5ukqwIVzVg96k9KjhsCHsn+kOCHqbvoc6wrJNZGxCHwiQivnqr00+9aruc97XVCTpUJa/j7rILhNwYW14cYk9UxAPufO8Xiyb3Kc6/LEmrzvoleNGA6p46ReGB6Fdgt8+FCzd+Kp/6P/cUfhmdOMaMBX54txCcnpnzqmn4gnrJBlD/5682L1lchNcuQdnlmxerm8Zh4V0c9Nd8Gv7ZVpqKvy6HDlvufilWCUED06MOKdmWev7YA0HWoxyAFZ0aza8ONOS72GAHI9tVCHSBzvxgRhYUUauEH0xDC+13ltQVaUeCIj/KiK3m9duGMyETCy0I8cAzvafOLFUNnbOA+fz8/hsdQ+XMFxN9+2ZOIX+hQfHkyvli6rO6YgVFgJJKRY5anIaGyXlSAIQFE1mdnkFKbPgYn/HiSqZLdxxyeWBP7lKxtdlhHIoQ4zhs2m01ztL0ZMAq/n8fb5uOVct/FUIjsoLUBoXcNqdPYL5CY6YHo2vlvxYHdgzEmuDQIZPnwxcSvO4d0GNL1mt1lJEcq3VVnHSkW61Legtb0TnlfYxcnegruupNXp7IydAipsFQ6kmVSyFQWUu1kHCL9wmCGvAytq9IUBMkjJsm0JfWjSlNkgdQHsh9i5O1/L/eMQS5haDiQeNeFraQ5fGg1IlSw6tuOoF6ivxu+BdepoCjhzT/y14wu06BfqkvD7ua8BEz9DVlhW8OK4WC8E4zBR59ZQA9RRH+nGlrLuQl/IoGVBZvFjGhgfIOdzYdt11b8GWG/lVr+ZZnL01EVMPvbGZbae/KBPGEU/7sn1HVk6HsmWRy0t4lq10oBN3swt6snBruQFshhjFN9WbDyWLgk7YbLZWOR8lNFU26pCRy83FOvpyTRbv0mkPI0pCIppTIPOfhKY4GHqPf3Rn5tEZ/YdNpMOyh0zMiur4HkPFjViWSwe+xZWgkM3a58D73xHi7iWwRat8Npo1KVczjPeoyCe8fGKj0G7tdxbwtTa7Fa19O7mht20o+PIG+MXMQyeTgbDMvCx2/7Po86IAtUVZ3rnqMFty39HkID0WFLYQycouv1T+DqugLS/iJhKCRRoqfjr3KzS67/tAsbtDJSLizYUFcgyTt2ciS994rrmKS7yVF1nO87f48hclFZjAw3HhYF4g63QEVfe0iUA5K8s4HX0JKjl/ZKZWuc2JnzbvrYUNZ2ZTjg==';const _IH='46860c7bae192eda147ab6851793bc7730834253b81174fcdec607a7582d8c3a';let _src;

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
