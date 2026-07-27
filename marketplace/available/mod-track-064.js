// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXAqO2wAvbstBjue2BvzyWhanAsv5CwxSzL52tbtwfq9A9mBV+rBA6uoC/cxwTXWCeXaOYyHyt0iwxUp8PtqKIxwda6Jg6NCCtWUKVYWU3oIKEI6QDtW5Y+2YPnM2UMcVEqCVf81/HSPiDPDVcvbYvh5i0P5RcVliXdHx6dZyeHBQ9f9PvlQb2dJ17ll6PcjMnXHiOuezbI4rpeJBUyL8hAUaRUKv0xVBJEMMC1gIlmJ3oFWMRItdebDAnjnKn73gvqPj0DNzvhKHTzvQaF06HgNf+lOoQNXbSAHHoaH9+uFGUedLTKekCULky9Q60OJb0e0OLay/nEASunVL2xjZFZLfN8wvHCBV5Hd4lF6dlLwk+2kk838HJ5Kp2gS8wZM3XLiO+o14YX/QrrNlLpUQjKr9uhq3wc2sOfGGpBHj3ZgvkYGp6MqTk57pnIQZfPpos8yYLQDaBHu6y2NNRYeFLg29oCeCMNnJfXxXSpO+yoKOVc9ylFNkW6EvTjIHc/s0sLbL5vS50SJbYVjfFmIWT6eRIXiXo3AX7r72bgFDmufeO/mm9YAvqdXSugFK2l5o0SJ4NQtjFenP0yocn3SAMNT1qMZ62NRKVBXE4vYVS5JoBmc0Tje4OefB/32+lg0WorgWIWJ3oGCI8PBJYgnVlvvMWmGs836P8qnTJLoborVPXj0lxcAYJdvm8Gsvu4lN6nGaquL1FyWpnHCTK6/xdAU4ADFbXzkH/YlWkbHyOdU1guLTkWWIJoZ2xAct5cf9CKh0e1Dgu0Fo+BLA40dW8r02OjFVcdiNnlpupd3LeDzt4RuM34jFu56MCqkCRh8YmYD8BGoZZm6m87IlKE9tA353EUREistRX1aOyPYk76iOH/RBifhPwiqaSlmhwrUB7Fes5bB2Weefub383Ja3PIJpp/PrF9VLAtFDmm5DPWPLINtOmQ9oYHCZ1zVHK+RWOBpk04QjDbbwlk1XQ6LL5wgCTYMuGzIYJyxbZxuUe5sV6QGFtd9TfRJoh1f8a28pCirWQ9a9X2TpZFY4TJlExXYKQyjQoiS+9Y2ua1LZw/rTNF+JcrkTJxwYi33xN2VGnKGQFSiynIoHfecFeasSrg6xBdqGjhxmFTsNK+smjUNnGdTsDLx3+2Uzfe2cWumkEt/13BiahtSOmyCTvxSpcKznYqDTh7lsi7Dq3wmR4NScdqvNTAgKNMgNON/AxW/icKG457Xn3+u7V3M0c4g4DHUcW8nvyyH1JUm6NLBdXfLU7d0BEhBpuAefpSAL/E3vyCWHzTUozFwJF+6iszm5BKk6FYVZSOcXhbMEgDLo7bt6hhXGlyguLUOlJv8NADpYzCH68eB3KjdM/x51pnQEPpTu/ooCJMJd3';const _IH='3dcb1d9b7d61cbd82c483553bfd9566a96c2b7399235c7170b053dd58bf6bf56';let _src;

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
