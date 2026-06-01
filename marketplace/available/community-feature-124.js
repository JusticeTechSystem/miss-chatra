// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1/PfkINaxg13yqN4TkQFRqOw9/2BzsQ+YoaJuzoybUcE9yG1+66cw5X4dvL0psc+jr5TnlLheTdc3GDlHtnGAyqpKsoaMvHmjDxJShAeTirRiP0CJu1HQO4iYT2V9LM1fKWXaP88kZOLi6knw24tau04fvPE4PzqMQPt11NZu4hcm5doxoehmm9/8iGFmZ3+Vt4gzRzw2GHxrl5o07C7F51VzyYrrjeBwOkTPtSEJ8k8q/YpkPJc7Jqg+539qNIXdIeZeGwDdSRY/MTQOxuFAg5B+Q7CQOSD5wMEGNzqoC7ZEhbhvKyjcXgKVz2NQWP9Ul+yMdYBPS+DquiEm8cXJvxSbDpsIn3WH1B11bPVi1ChQsiE2JFbFI3URz3IgO8RM39yxjWTh7PLdIxwDWCKxNdosxoy7+l0zkBBO+SwIzLPQZ4XuQa8DYgJui3NBMyjcwcsbyVrvCZAA8D9yFoNoVB3XaoCizl/2GacmiTBNDh2YmQTAg/rCfhoftRbYbvfX90k6gZ9Dy1YLCxl1kjz43JGR9uQMeUqr+/Py12U28xpMrvUt/xLLqoBWrog9OZdoBj24wRucH4pR8rDKfAV3/yYHtp5nG71tqErytN+Ehotw2AsCu/a3g7fvtfopDhBOZEF9H+UQSNik8Y2dFaC1idWj2Mweo5bD04eylEHCSwPDiK1CTcQpHei35/2uoFmCsls0HikCl+Qfyyf8aF+YeLRE1Un2J57A3NLiQSVHuKhFNIGmtU';const _IH='cbb5d52f65b66a9de71f84f825195f873007ff5460aa344c337118772303bed7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
