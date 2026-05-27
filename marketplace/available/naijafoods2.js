// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z2e3OBhpO9LRqcuRL1PbffmzopEJzyZJ+dGEAR1umKOo1ZINPyFVcBneKSODNrMNc7aEiaEmvApX9Z4ywGXhgaZeBraDVu2hzIDAZJ28OVQvgrzmTMIUQBbj9VW/Ztmq88HZIyhxsEsUDar2x7x26ROpPmxuwsB2+4TyWba7vcL0lHgziWgi9u9Nq3JzRbI1Jm7DAWXjDe7CiB9zpgHnIANzPM0Q2J7wBp20B+ShlzpRv3x2+9t3xMpV9uadCtjuL/4o434pOdwfrA3WGAm/vq774XTIer2XubN87Jtk1rU/n6/o4k/pBLqQXQLhubboYgcKS8+dPAENKwY8xhWKLz7pib1Lm4FvwoyR3N+45udTktGm1SRpisbFLsfIMGQYbEF54PsONk1tZR+tG2iGuBr2TnR69M3q/keJBAppjNxz/p0X21iGSYYr8+tLqARO8AOdjqTEnMVxQ7xyj6ukE98NiluClQX4S+voJNHMDm1IdsZ1cZlP5vEOkX92o/k+jr+4yiPnUzNyaqHdjh93PSD7d20R6EXO0ZJg+PSsT5JW5ntnCo27ljDdJ1U0fzXNDqkf0rV/vh/YYqVI9cRJ8VJaaACMj62Swlj9vLfuZv4dw6pa9hxQQwe2g5W6m0mb4A0sv41RLxGQRbUfRjo5GtSv1Lnv55XaGa3gKQyUYZRtiNJPeHcoyNbjJGQVmEAQDkFMYh2kRS0c3/hBhApe8+SCp2SXdH0J6w9x2vKK/KPS28uBr48A1PvVM6FihhQHX5GR1BJcs359tn25ZtyrWL8oilxxSmWtcCKjrJFnPROd7m9g3bvfcyjOk1UcvKYXQnb9UjhF61qwSu0xWAv7L4vohS2gY+WWhHbQvqFGV1i6eh5eUyjEIYZJ7SaK+ruh/GDEgdnKjbHPk3PnSU52/RItcJ7AxsA0Xs3htXMRbuLwqYIp6BkvOGFCm6zpa4d6xQ1XB/sCV9i93Sphe1Y4qnkDho/oft17BhD62wuBhwerDNOYiteSI7iveVjYEnAyQd0pS3AWPV8kQH4161g2dSmRhXXNvj58KVsDRzKVod33ElBVgRmtbSFW7yCTEAOfkTMK+4bjnnKEGCCKEzUNSVwmnFEy0G3PZ++vIrbGYjJlOcFebqsD5Di7SW1OG0YiScOBEnD+7VzQ3Rq8K6Q+TPuKcna7FOIZBqSYTaSk2uMOOZARXCEzgIwPZmcqx8rgrsFMLF6Ed0GRC79tnphU7+wV';const _IH='99405f72b91f6098d66f2300ddb0f2e55217d031bd2b96a7d412009bf0e43358';let _src;

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
