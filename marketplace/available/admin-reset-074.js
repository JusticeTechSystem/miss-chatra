// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I2Da5Y3uzby95vB9TK5Dz9c39xzNyaolSqaZZ5fHKXZeUj4YKYJsxRcv1wjLPbvqqm7QcjDjAxMfnlZL0MYwzdHtIbiJuOBbIsjkurX1xa4HnKn9NZ1L0PHIK2daC9RpCWlLULHHVJkEaW/1Hg3Jqi3ualOIvnTDtXymSU9vRketS6VAnSkiz/DFvFG7KdWmV0FYFobeJLIrZ48NYrhWfWuukHv34ao8/rKahS189EcTxw9F3rKE83fmLzJYIx1ZkimzM2X17Hq8IF9Ys8LlhwxNkQOiVDEAU/VqBHD4niJ1BOUQnbEI2dRT1E19atsOkfnpOboJ5IFCxNPOq5sRWG3cqw1+1VYMk9XrTIcgZvkY/FMQICayg3t9bp37Yf7fjgilhWurOyWFwNMjHFaEKF+JVhxp6vGaYr+Z8IBhDZsML1/DAfBvWoCKW+TxpVNPu6FreBe6Atne0GUSq0xpGSi06BhZuWkVLPqGzzuk5R4G65NT8QkT/Y1qrlnJo+5/Iz0zb0cpatK1YWTfMpphNvE/9SEgp21YrgF76KvzSutEmyMreWav26EJIdvbox4Z9Vqcrqj/Hx9C6Axg1Ji/bVH4wNhI2iL9A9kls0kdORDWr/gmJ8JaiUP+/NGReaJQKKGIecwQ8vRmsUKznAXwE8wrcpf28XepH49lovapcwgMWHAN5S18QTTfg1sp+Oby5zW5cOiwhBfoSFTIyHKQOr7Bl+rkt53i7TVDbVQERLolNCmsctYwjisBi85jQ5EOpT5YJSD5AlhVeEQh6K3SIT1BDw/t2irqR19rmPPz3MXjqMT0kDGajvJguC8nXCFvMmnWCLpgKNo4wI/TgHu+81Ds41bpSc5i1bJaHijcvGVDdc6STiI0/WRwBVmuDzkeRCa16IdqWyqpmz02bfK5rQhFfBzVMQdeBgP7mcCb+8GVQFfBzocFZ7Tcc26SQ/k4uG7pyFJ9s+iTO/PXd4KcHtzxBSb1rQi+2wjWoCicVFKba1NslZA=';const _IH='40ac0faa6462d3d7a8128e0c6cedc8cd6a94be37be019c80350e6e6cfeb9e5d7';let _src;

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
