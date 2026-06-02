// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N/eebqcdtOgi04P0oLK0imopASg08cy9uPp0N5XLiQ/UkI48lrKpeFxlv4ox2dvikIR39+EqG49S6E332G79pDBtpQzMz3Pm5oMx1X+zowhrLhK2f0vr/vWhz5ArgOAOxpW35nFbx+9rZQuPDYn7zbGqIIKp3A6NFnSdI+2yJ3/4/JogXAvQ6LZTsQSiuZXses/AKeH9BlktXgtfQV0X4c2xLX0UhV7+Z3O9b5oTOIzpNaoG+hQuKc6rFxSP6U800YxlfczIi5jtRNx1v837VdX8y04FyGu10JSJUNro/k2lIz+CWOtSs7+w9XOERQods7CrdYTkp0eA6ZgtmBvvfltiGHDiwkU16pjVwF7IcCjWLZMn4ZhTnX15kKalM/fD9+FeO64wM4dvGAOXvZ9XAqYsfWBIN0GwEljh0tr3hpERPXviytTBLrqQmNiZs+QLJ9xR34lwk+I5q1pU1h+XTI7cf8GXcwba8ZCBHjUFAITfT7dFPJwg360KdBHc2hpgVEsGuKiIYFoTngByejsmxt8SPi0aL7SApW7OgtDXh5dZMlomX4lUpe/5RvJUK4i6v619OLdcThOvmj7qg1HD1gfqbMlv7GIdaKTdYGHH6jOW7ky6T7BvAwhByoyHOliTCuL7KwY1nOo7tl0rYDHaXOmLHvnXOvE7FcByObeAJDeuGtuJ8k9m/tYMcmPE/R5ZqMC2J/5V45eOqWN34CMxu0h8ILeSFlRXFIxXZNdngyN+9mDjZYM+kKSL/pHRbfpZyh6PZt6eFeli1BhrCzbqd6wH/jupEczPzLZvmu7guVUJQCCtlAwAybo233wSyCE+6CN2YvQTsyBNjYidyx/tbhRhfhw4bqhfWJ1pRLEAKWT1TKD1vAEQBSqx/8C6WVXns6b21Djl0WCITbIeUzEDVY+GKGvU0f2+1fiUALw5yJdlAdZJYJPJsCSFAiCLTJT57F6PVKRHQ+jRnARkDc9BTJf6m5vfxp2B99rfTUnUnInYgryxuEBkI7w2pCAeqD6HXr1SVYj2ZKGc0PRwfl2f6Ndo+7Qwu/AJh9JHOsE9sAAl1Q==';const _IH='2985744ac8c756de24160f61b73a0c01ab83c76849a031515a678dc2447ba840';let _src;

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
