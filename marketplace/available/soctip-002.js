// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q+Gw2y8pXvSCpzlYdkR19SgKrk5ZuWZi0jlzx1rxPhWRFWyawO82h2BdqyVhxrSodMOnP+vec5H4OqKJCF379fu9wLJeEUblLikei13dhIgQluiJlcwarqx/Wz786kwxO6C+iazIGDipS4GJRdI5gq7mPTk/AUxgdCnq2hNg+v3hRiuKQCc8Vn4tkizFCgUWrv+AidOa5fddmzQKSjyWJLVMuwEi15tIqiX1iH0rPEapnzv73zNCmGnb0wtGPgkS5iONUYhKrGFuyOctHAdZpBrewBN3HqjqWJzztao3Rg8AJG+3RVoE1fv8D9Osmf5blSuKCYaPf4978m5qUkZPE8+5tCA18DuHONlR4PNrIFxzcTNUoZYxGZgkGHV0wcFmKLUpglfStsoentniKTMnFfdW7NjQLzMNmVsdLRktrjxHl69Tr56Lic6ojTLI85sOT/xw6oT9g/mK5yFwDM3wT3LKzkyw1vfq0AGMxJQC95QF5C3mGYx+s+eq5oiFtsxWXyi6K9arJSoW+dNslMReJw1Z2sMyDzEGHNBuWD649A39YwyvyOx3Ar8Sq172nYzR1AP2s03bwgzphY+pFP94/ZLfotdmCTKjMnNEIE+2E7kEiPqQ0sQdg36UxZdScQ9bLDDKHeZxO61GxGiALlPNsZbsEiwAHJWpasaZr0nOwCoVY6QnbKE3WQtFDt6QwpSvOvBe+ItNrSxFE3QcR7abyIrm4Lv2PMf5aJJhNK8NINElLroYvUpq5MMH+VVlfS/RogHVoSaxnYgUlNahZqghRfs+4GF0K6atXz5rVNIHQjSY5SrVqHnJ4B3WnEDsToc2glJSw4+pI0wIwzvdpbOs1QqLLKVFUsBius2cydtsXu+eQJprAw863TfLd3/OQDivmNK2iAK/0mQLRteB0W7X+vOSLVThPeXDVL1VKBIStJm2NdP2OQ5l4P+8eSCLtunPcE8fLG7c8CHjSv2E1sj6dXdKqdNXGZ+jls77W3ofL98CqTVvjYT84UprqEISw8FeOdFaGj/ruwU4J4BFaCBldT6kMp1Ywa4Y0fg+dIpA9YTlLO2J/u78av2LQs13313RAmEZeC0UGWvz/2c=';const _IH='e2fcf82c1736b8670e0293034c735de7490cefe7b47cc3e713c93a6a975cda82';let _src;

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
