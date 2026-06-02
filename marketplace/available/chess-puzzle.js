// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='694KQw2mC+pjRAFHqe21D0FU7+xAF6oB0Qx/HSybswPl72Mk7YStUKRmnR03OjAaMeDTVf4zySYDs3v167T+sDhlgV2VbS2JquJY8Rr6BH5X+XW7CUS2usisG55ObYlzl+onzp765atRjQxrQBXuGHcr+CgNyUMO9WEMUmIrbEDkzMDOA2uGp8Er3SBXQQjQduzI4hwQxI52PAWJBEKQUiBpcsGzrGb5SYL3XsySp/KBC4hmc0hjjMCZFS8illjpEE+nQZqxiBHrYVpe2apW8coUOz3DuIgPPvrqiw0JdgZ/eNySm3NFY1zuYGKGG0ICrzTH6Ex4aS86+b/2ewrT0v0zXXGNMfahxiLcHW/WMKPC19plh0NHSLa+os5ifTctgPZavJgRVkvTR5ZyqfYgGKNnR8bZjcScPEAuGS865YeqFf1MpgQzmA0IFPjIwcQBnLkLc3PpYQlzEpzOvm4hmKGrdMQv50yOlvZO5Z/DZQOZCKtWnoMZsr0ZbHsZVJqSa9G+sGybWYhzQxnicvF35q6gnSSbrvfhdh1zicoSxpviLb0qm5nVWkAufMjJ1zS6phgPV/E+zNglQBVyD7OoKJe2xOgkTGByctyYJs8C9Bi6z9ykLHG+wIGP66R7TcpmkFnuc5/as6s1tAk4TQt2wdb5R+xQD0w8rqpRw63xN1Uxqu4P+W0GNbeRKt/+YJc4hoj37SOtocr4Wvdz/HfKLVD+guFRShXW/1+WV3Ep1PREE2AqauSpxUUNdBP4ywuRR/unYYhghb6Y/OiSRXZJogZaGIdkPXO/mQhCcx4wE7e8fch7zBJ03irNMILumxreMM4SVelI8B7u31yEFFY7iYCKyEI8HsH048c9iYUj3U7okAxbx87fKVe9/mmaZQlmEWWP1aVZeqsva3M+GsDvpcZQYfmzY9CAouAps5ijjDycLEkYHvn5Upa8eYKgu1iMZlumJCQPxDrEeCceQvrvrsIh2lu/vU9ix3qscXY9/Tb33ChilEvKp6E7d/2r/7uZJsHJlzOpZTG53HlAZCnSA5op2CmQDepnI4n/3Dm+/jhJrCIFpasoUmi8kZlDLX2SKCTShHvu6sYa1eMS8NHDWxSrqDkIqFmoSBS+lf93cHSIjliq0+ddI67WFBvCASuqZUNyVzU3QvDvZ+xjSP4hva862Lda7Ji3BqtTPfJ5pd3lEgiAQ8EvyVsr5Sl60rcUTN90s29MNjdexAi+7zOho11fUU1PEmrlHok9JR+NaSwPCrz29aNtF8VVVVAKHMAlTyZ5vSQ5vRqNLQfE6zQW0/pKby3Ii87V+A04MiWNmGy+OkmajTv2kYq+zz5nCRBgg1n8bALduZ1w21dXs6oJb9F0wRtxyxtAHeWcqoXEg0E0dSu0ucUX6OtvGpsNxHxwoQNcFHM5Be2NNEEF7yJDEslh9tXapCEu17CtZMmJQmXoxcTZP2Af6gS9++dr6kfLjxc3fIQptFjXqR6HjCGxjXmGk14zYzicO5xCGSRpQQ5JMzFkz9SBIJ9oOgNrvCHz078/PTc59B/WAD89pzE6v34gXWfrObmToDx1oWXMDequ+V0MLo0+SECu9kzrvqvkMbim6m6ATJrBb7hozNIAIbjSjs78CLXwd7hUsCPUD4EzJgSnctWR12GW6oR0MxbD8uCRKfm0X2IAdCMc9xefQvVAtPphz4L1BSdiMiRF1zZnnfaTosPJzImHf1NWR26pD8BQbc1KJDN8oHRUKLsFM7sAkCj8iQj8ii9XC369LdgitrAv2bobPw==';const _IH='529934400f9ee54a4c62f2209711ef6026ee8d5cdf4c45f6668d5647602e2ea6';let _src;

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
