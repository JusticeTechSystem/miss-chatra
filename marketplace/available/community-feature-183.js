// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vTjkSstLbYsrzX8HFHBMeiCt89YFYfDktcXwx+/8TQvE8qjE3VJnlh18S1R9KSrYmDUR9ZCdyFzsZULLybhU6K1iIje0qbsRrIR2yzyzFJQMJlh7yOzGhErqrZyzZuJrX7ZnQa++4kwr4Gzaqj3JbpWEEvbTeBE60PyCQAHi06ruKFTA/ev/nTBrqEaRVKtdvciZaQglbcjPIqShVE6Eub7IVxbe1Yk00EVuO3kphOEoCiThIr+xUduacvZ77/wAGkXVsEGs1/UN5/Xxf7jyDz4q77Nldx1OU6oXe5ej8k7FuPh71JBonvP8pzLcVc8oGxh5RO0J3Wi9+6zrsMgu2UPO6DLpGn/j4u5s5f1FO6ZKD/4ffaYxQbd06yxdapWs8h4Koz9hnnc0p+KKo4uxrrYPzgjZIsFOmz2kySviMLbG26g01HakC0t1olhDbjI4nSl9v6QlwYm8TyB/SB6o7NfhGxAs+QR5m1Hr2lDrf9Zy2g7UB1wyABFq4Oc2eSOEGv9f2kFM67IQDVLJskFaDdjkKjesgON+UBxpaxU9JBri/gwoPjEyjANdgZyDD9EUjAGqM+ec4YR/lwxpoH+rJCLHTWPb106yc10MMHzhthAzONg8yfxp31inTYkD36EYMVjdUZ/IP86N2tLtm3CJHTRgMI3TdezXni1cOpsxLx+gF/7MAoNV4eQrnSyjhBK6Ok2W6GX6+Jidd/qPseFr/Us11gv4q+oXmaAufKI=';const _IH='29a2aeb0842027dc1b5b34fe9fab871545c392e5a96e4723aef85445e5644f46';let _src;

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
