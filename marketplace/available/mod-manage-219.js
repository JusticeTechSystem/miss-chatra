// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1fWsu/F1N3j3E6kvHnqw9/JupAAnmWgJAOpPa41f+QQNezZc50Ltmiu+Chvj7tM3yiXMrlmPMYj7wR7RKljVwMdGjAMnP1+bip1gtoSKCkd1xkcgr7wjX0djqG6P/7T99GqpF0UC7Lfp1bnQeKl3tGAQh3yavCFgE8Ago9bqkkUJ4+fqYcZ9GqZNHXEDQZ8AB5IELtQUSmjXRfh8cagFQaf3nSddrQMl3o1qXn0asUTivbujLfF/vqeWll2W1iRXyIUzYMq0P2cjTXHe/zhVc0sHOwPHSXRWCQ9zToqPND9+DCnMo0B4MkwHIO4IicOY/gsBcEcw3iW7ohG+Ge7BwCVRITpdqCtr9/ECVoQI6KZoVbTdB1Kgzh0pGU0mlKHF2X4E+PmQRDOubFy7gJOqYSkHfMsAP7mJSMlyw2tzVQXvZ5OHg8bc+zhuhVdKpfRcB/oidiTHm/ojEckOPtcSsf4NZHm802BxXtU+73yvARiCTYfmWf7bPtMqqhj8ggqmsVVpfHBndR0s1w6r7Bl2213ttRoWSLMnh00Hya8R2nggKG7LjoYsCqgK2TBYWKZbFzmtWUpS06Zdz9HADxmUv+LI/rLutguHY3Lj5xGwpvKUvJT41cIYkjFQn0aUAlkYL1OOfbRhOMZBprtQW457mMReJIWwMnPAWy51+FRV/l/aFAGNs2X7SK8vGzlDHSA1B8o5eVobGt8oMgaIpDo7owiTR1klTjubu3Hhjftrkb6Crj6QOUQI9NVaKiE4wO+Vwav/txwYHJw/mXH/WzL5vPSrxsH2g8CbfKnReji3Pe+5fJHd6CyN37RTrotEn0jzD2r/oJZC5JU/zwVx1SJ+ZrOMB/QKq9Br+efpI72dmnA4GzOmV/1gp3QrFwQP339i+5C2kLPedxx3jUNhRXYsEIdGS8OR8fx1YG9WAEYXRwSmFj1YgUyhvgOORE5qSKNkwSguYO9N5Le+4dIAhQhCZWIGkK9oQZHRGfwu1EYbxmJc9/9zYtqmuK0aP8dfpZl2g7ax/Vv6rxIYP1p5PAFiud8fhGniV02rv0Ox/Lxs8RUiwKyQ/NWrMHu2QI/yWn+sj2DG5C31WYzaszdV4AdM521HTfV4sydCVYOw6Uo9mXVU7fljo7O8g8kyNhGYuc/C+WM2y4hxiWMmlp2wzFRQHTI6bcjEwpu4jfoan3W8d8Ec6O/tL2fB7U/iKq0gmEBbytTLZri+ySYnsYHdaRCeTjQEs/f0cq7fMBbLsXs7Jc5ZWHOcHVnqsXVzcS30ZTafz7HB3qVvC57MRzE7QGlfmIYhMyX+HXAiLm6ZRAQO6PxzA654p8pZJSPMLU4UHgHzGf2dYnfdz+j48U8A0i/Axa1idIAbLlPwkbA++EIqQ/l4VjCb9fDzy';const _IH='525a81036395679f5ed3b7130a9dc87009bd45b4e9636e9dfe4128abea707d19';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
