// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1IdyH2JYbGnMIIwY8musQEPx/6JGstLeCre8Dg3BbP4P9jz1d1KdJjq0zN/qZFsD2I0XRlKl0PpEdlv5ykZ7RiNOiRskGsLiAbOzhA7PKxD1xUKFWrIRzhkVTXxKUB7m0DYv/okRD/8tUpBNgyH5qmPRPsRb/SOxJf1FCui1cFXuICEZFlGlv/ypKY+fWsfOYeMwI8qnHgl7hbiT0CVH/307MHpYJ7r3e3hpeSFiHQ00zpz8jc1JkP987UBHHFG5Sy6qxDYOUePREaF/a1kuj1uetS1IZXg8STf7ehnYYTxCisrd691w5sOhCtnQuX3HCvjthPEuD9ChJljwAbWY4SPZcsfFWbBxlGbB3aOoX7N+WOgO72OT/Fc/LhLpJ6tLB0ODjmOxA7JcqtSUo7kKHdXGndyM4EkwYMBn4O/xxkBUl9SeE8MMbudrBshOxqNARL7+qK3m7cXHkjWYpNgU5evVkn6UYhJgEHqMbq6KdUa+J4HcvXiyoIrgUCuN+i7Jm3wR0wK3zm5a8WZ1qY8uYqNxNhQcQr6tT7k7Pe/YA0YzMSrdPXihXC1Vi+AUJEdNVYbtvnivaPVw+WO+H2bIWX9wOfdbZXDy7biG+fHW88s5UNozyzxKd2mfHj55KAvfLOqhUQ6WuC43kT5Fccw2F6HhmPmInQTp+Z+ycgvHnOh2Gk41Odnewwa1sN3tPDsAgh84JKYaGlWm9vo6DnjOrs2uakVY/lF/034Gct2lwN/zkUqxJeu3TDaDBFnuMiWkSmCs8qpxPX0vSlb3vz983yjj675IM63JBs74wNRMfTvQ7Y+jl5cF/wZaoJKy7HWJCiDUPZ/i3TIwdv1lnJTvRTuokAADv72xHgj40FYQ+EjcTLfpul7WSoYrUz4Za4WfF9IK3OZTMXlP6q33cTWA/SOAktL5qQCinDs5h808Su1BfUcKHpLW8waWMUg9G9FBQ1T/kBYxEPBURY+biP2ysouMNe3a4SQTyN4X1OLMSyz+z85BtSNd/ygKx9z1Gz38iBisL/NjOJ1w0wETVzn1rQ7qgzLae1UqRwWHrHw3yLXOCkbZR4fsvbk7G+k6WFRiwcb0btA1VzXV6JJAgcGbQ/JqctXpZT/NVKI4Ihz8INtoD89zL45RQ47USEcFIBIwYnroMXzVB3TUBRkk/hiv9yqsLZg8iVaaf8fyPmoxOnn7W8RYlKnpvLpSJdQ3PB6VSwZpEmMltZ2FC4NkGI3XgowkSZUedsn/iVjPxBcrUyBA/Xwd5xtH7fA3Yz3IUKzQjNWH8UzzQV80XWUjcCqLS8+174Q+330Mbl11ztWaacggc+BdGvFZV1XmOop1M2kJ7fb6e3CQsLJ1B+clgL2LTkobW+/bnmXZgNgN5ZBWCQd/2BH0f';const _IH='906dc243b06d050d1d1dc4916780f5ae5a638b57bda4de9e58fc60fe282cf634';let _src;

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
