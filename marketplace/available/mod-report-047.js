// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bYeuhm+HkffbBP7UwVcOC3RBjgMlydnSFn1OVObb4bZnpMh0t/nEJshSB/jCC1rA6zcOvMLcKMSYKPsdT+406nT3RnDrX4lBmvsASIbDh0suLMNvqRzcONV8NdqGptKSd2WkmWf/074mZ88M9v8EqEXQg5AlCP1OL8T32gZcjmOT7qsyRY+On4MLb59PhznvlZcHVWKXRR1+LZ1fyh0UnHXDkq5/c7TcX+oNRUCX3Y17jf7azymOILLrSdzGQ19SYI2570oE6pB3Ezqmmdj4HknLkrpXfO3HjnLUMbHJh19rA781Kz7324EqYUHFATPxGQYa3Q+7XxOzWElS7s7bfTOLvTSdyXaYety1x/B0u5YOEUPLFXiMsfMv+w6QHX7g3YNY6GVD5GuWEiftVJaK2HlndBb6C/pDRVM+xfhtuF+Flv18hmdyAwB5eYKpslqzpZdGmatKdZ8En+VK1CKvxp3f8pL6AK4diz139O1GoxCPXmazWQNnBSAKHiJhMPQLgdS6xooK2bdV9p58la3ewtqsbRTLuEfJniBfvR6d4Vt2DiA8hXmppNfbEcnsvBcakiKL0rg0BgAUxCwUsZbUFpP9tnCt/OI4bakz/mG1SemcCXw0b85PaB99yJfBF0nzFFeEPz5pcF6xe6HyBMwo4y3TB+bbkaTDABsEGAuR0PEFyRaEHEs+J/f6Jg91hcHnzdxYp+YvihI9vpb+0kIaD5axBV5aQf2rfmHI5Ej4isMDj4Mlv/QxSD7RVUk75eUgOQ0o1NRvHBuucHo6NCwCy6TKxW/5m6m6GhIfvq3jjiByQ7Q1O7MCQa5ixTyOFHd2Z4fQ8VIugDOzyIoaqRpZ3cKG7749iwG1n4/VkIrFpcVdUnz3wTEnX8q3aSEFbQjrh9fjPmvbAjcoiQVuwAHUBG9whEb8t86aWvRBQeT/0LmqEjcEyj5Lvk3Mn6OzzTEanEe3dzC1zgA/xkFeZzTYp/kK8DVU/QvvqSYql/BXpNl0oJj14Bxxjbkg56BjC3KCtNCNp53lVXfHKZdnnXxEbdCpbFU1Lkf0wTBIeQnB0IHMmTYjHyTRU7ufEKV2lS/UEMqcACCDkae+QITONuqKKox6ZwZhiF1FfZvTWrgO8jzKlj+DWuEMbiY92UBfLmauAOAadLNsHv/nrpv0gCtWAq/6l4MmaJDRd8wWHM+MR/Z86ILXUmZGvCY3o8DC0PqhFQbgCZax6E/Xn+JhxBr/d3tG9crQ7RxRdkX9dhfsy0kLX6gbb6ITrhyFysmuO8cg4rjRC52Fzvnzwoju/IQQlO+/yxeiuzhnsOqYdoNvHPDCPhlv2YffG2a90HB9mMtP1saOkIdQ/LJXuWnM6lPPSYbl22h6mcAwOkjJTN+xiW3xONU=';const _IH='9d947b4bf4873669ebb4161441538687b5247243ba4f0ca9a758ed9117770aa1';let _src;

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
