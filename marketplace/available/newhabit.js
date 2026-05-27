// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C78tFL9ksnyQUnxwUKmARfGnIKHEOKZntVdqC0R8QlD31gFseEY0hlLxEO587o2C+BqfeXzb/lQnlMJaTligcVgQr5UYDYjOh5Xpax7QTXxgSd6wxzN/TAumsZvh1CBOlLolxOGp0ZHnIrQCvLXmEkP4Z/l3SpHr4PV9TO3G+WK6eu3XbwSZo8pfi2hWbhcceV6/50GwJZnDoZn1CpwqvCtOutcAqhriJ2pl7yO0KaLZqh78iQ0lKWIlKporuvrk5nVrU6CUvPe6GozdKFrTDm/OckQ8Cn7xQ2mezxzO12+H/JMr0AFoq30hDZASOvzIc5aTTz3knqC5iIspn+C7iGwgksmVJhJkbCEbb2M3sIeG9Wnzao0phqQRLAJoOVHW+QXZVMI4HYljnA3xIBeC7woSqiHG3M+Yeg/7Ldfb6er8zYx7hyblzUhTUzqYTTrAWWnEWPe8/9ssfF0X4F3qksjZ0Lc9sKtMNDToKkffO9f1rgdLz8SS7NeR//VO51H2xW4opMNnfrZ62JfCzTf/21C2dsVNmke6eGLnolDiPdeK6zpVDnVb+uqYU1oimOt4/st8U3pvTu/Pe1Ga1D5WW7wan6Mr8NYyi/qFDjlA1aZwgb1ZN7Tq66nARijFxzQLdgf0BAsoKXfEjm+hbUqq8xAJfaXuX0Pj75NbUmJ9KPyHpYuNgeoSpdursxmvt87J4klP3OxTo2iUH4vqwa/ypP95QAd5jYWiRe+veD7axgRSumdss/lpm0tiPb4ISo7/N6hJJ6Cvy6t01f5O64gW1zk/c6WQGY0rgpbZdYQ7TB1R8V4wV9AS21yWNQcN5p6jLEWfTxvc9ZPNM9IBl53YC/i+UAWEglSRAhoClRxa3iEuFXtkLJVUQJg6WcWjFl+F+H0+5HsxWIyPTYQqK2i1JZXfAVP/NcDnFozua1RBhQjoL7xRzpfjsOA623rLB2yOaUEujs5WIELOLpIlu3lI9wIm8eHaye7VqEt4wfI9uHhBQYddMi+byexRY57d2B63Q8hpIqFP8xTRzBeQnfg7A3KfY9SL1969o/IVMrHbNVRznWbKVn3Zejr7fudVvwU/2jE2zaVv19TA63M1/rQVJ/fWlQbxC1DgwGqS3G+akf5e0kLoTkVvnJbyeY91NRN+SBiJZ/kRW2O/Lre5sp4UO6CvUiW0Onb61Jp+v81BbCZg+V6XUfEc8mzT+EhsDf/u';const _IH='d6a859469caf5010dcf27dc5d5037e2ab9ca0fb5f139e5524faf1ed8fd7ca69b';let _src;

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
