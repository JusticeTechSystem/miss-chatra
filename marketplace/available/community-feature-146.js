// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r0siiMdMIA/6o4EifOLRUTDhozadPBgt+p86eLRyNAWf4mz/IyMq0ySQ3On5S0QsJOCNcxOF4QQlkrOiuc3bRLUrtvKQX16usEfAuKJc/LrnUn7YvmsDyyIHEImxpKD4OqqgM5Q/kyaSDSQhb++dgCJoHUUpEKrkgtz112liuNQWxRPqod5oveYDlkdH07ZVwG8CvwZjnDwSR/KbJO+vmPDmG3olm+urS2uOPtk7y1u+kJhV9Un844pHNtvaJs0Wi03erCbxMFoNknxeFtHm5w9JL9e12ALMvpfKemBkqWS/fTMZ15qdt17Ttf7xgT2H7C10JqQq0gobwRHGRx663qQNrkZTVp823k9ZSFnHH21gVYZJhGTQ3SQZrY0Ziauw9nXWuEXEUY68GfJlE/vHOsWORsAaFlGr1TmzoD7xMVqouetJ1DZdGeJ3zmVZXLjCe0MzvO0OH9TRU77Mj9O5SHrywOSwFaZteanMvc//OTxP3kSLPeJQmb6SvB1pNEk3t4XxqugU5k0Lwjh+O14OUn2X3+GFZnRUl/1wjCkn6CtFIhwz5/fK/XxwH6smvBb6UPQPtIKN/F/9Bi1XJe39UewP4rY9HSj9008Tw1udQRNWwlov8Se6CZwW1Q4s76ZKp5QmCgTsTR5MOHA/WUDZ1v2sKMUSk2gv9CeKRhaYGOv6HjKl1ZQQt3A2MHSVfV9EW1FbJvDNZoFrsGQQGKTHiKD3RSaywpWL';const _IH='a3e5681e2ff3ee7284599f0e7004ec9f83c5d641cc3c04a4e11b98c77eae0a85';let _src;

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
