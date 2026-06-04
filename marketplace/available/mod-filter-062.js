// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ur2MO2DGgjsnWdszRrEd6FUWaZwOWrbLeHBpmWQXO+qImbHN7t7t+NNm4Y+/APywjVptBNJeRCevOPkwpWHHmBH6rboD+LkM9r1CKjN8rN+rpGg8jDP3Gs+Vfux1bB54STazoirW6E0bzeJCpOWSLMBhjem6VlyKjOD6hHXcOQ62fxxGRyZOMzLxs2qEJ03FqhvoJBdVvkKS4TRBK9aoEjjDlg3IgKZxMI/s9wfOloMtF6lWQsr6DTuFrg7mlWLsl2x2PSs7S4MnnFvVr/WY6PFIa10vmKsiLsCjkXwswrByMAmPku83Kp0CJVUOcKYwpQO4HoqQkIM3maFca6Y10azg1orIeZWqRonedZMFtvZF4mQnxTJdmJajaKMl4zfFJCVd1xyc2ZRcPTz+v+c5CEGf5B1mQPmoJbMk+fJYGhcGIIZptVvlvJUHSPZa0fv9Wiz0KJ6xcCjiITQz+cVtOp4AOzYW3CFLWLsEJ0XSHMlBvprabQt8DRIGNenw3Ty7/ilWOTcY5TaPGDz2qiFWgcwJqLB45AnGEZe/6y9JxvlShOW79MkOVGXYNIx/mcwIjyiRO8EPkIxAoIjbI4vONRucmp8AMxpiWK6v8wfqrX+0zLaj1mFhrGUTirFF3v+9BS26Bh/V8m7RW+Zelb/uorsOtpnf26ASsdCS1D4tLYNMm5D1l1mD/zquXV5+NLmjUWRr57+oinn/Nq2EqQVmr1GvjI9eRQ90D4JtnKJ7MAMEzxr4v+MToj1h5kwsAt80bCbFfKKZGYZJzoUeHl9ToJXWAonni3stIKijTfNcDQps/BTtB6fQLfq/gZO6J8ro9+gvF1Kl4SaYHgu+JjlY3EpztUC3/WlnQsDLMuSSGfFYUP1ymjj6ZlLLqC7SFGbmhwEnCqSdy0tHUIETV6avHipPuGG6Et62ESzswqUc/AKRBJQ1ERAFaDYk++sxe5h8oRNruvZ7ZUYl3JnCW48dZYlE6e6XdMTQceS33dQae34tS0k4TziOJ/i95LbLFTrUpnrw1axX0Wzai6K0ZMR+O1WKetD263BITmX7LlHtobbhhCQGAmSVd+a/vSMSR9Hw7STBb58lEHoUrLteN2YgidacIqW81/7yoFN6Tp802zDqtK2uGHcV+O8aRg0ScjF+s1vtAWxr3Bzbl9uWeRBA2909Ogfu/RLrxkTpgGElOC3munzrzmTwlR5YZkbNUSMLGBwVnjajCzJQTkGNoHq8f1HDysD5Zywbu7ikuhBi94GOId6fKI8ebRqMZfEv00wzMXrJFrROlqQEHw0uvTCFmpjScHRwDWa+orKw6IHYSm1DahAozm0CCsYGnRMabX+jPecJ5Nj2OZ1+DJRcnoW7QVepO+5P7rsE17QcVWZHPs7MUfU=';const _IH='837879e0f9409cd01d93b99b3ac7eb84a9695716d3d3536b1fea59378216b678';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
