// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L+fKfLaOJ/4vF9eSKGj0RFm6SONUPPVSdMXsOXuwotvVWYA/UKhEd5NRK+6sbU6GK9aDSzK8iwKqxj85tgcE1VI0hPj1xXom2Ch4yf+xFnavf67pH14O6nipMdg3HgY7FaZwJH51f1W/2j47L/gyTJLSDlNiQSGFBeX514NURBaQb2GzzluYsWLHm7njrtyRnm2XBviv1aa/jNGHO960C/clTSsupSSYd6/mT4PJuRcjPkdLVsAsDqQPrqXtes1+uAhXUto80W+1bOm3LAjkY+PgmiwPL8dLHSYtoMD1wDRkBwirnITf4ZLtAg0upW6TZpQNOGs5KoM8A+Z/73tyN6p26OfInf4Bqz8j0FTT/kyyZ1aiOYv0xWo/4zXVGqJxdFoWHFAIViBwQ23hLh52ArK8TOcMaKr5Fx3nSdLbWl8+B7HYhgqXdY+QEGis3S+/orCs2UTeyvTz59PPDDgA30DMf4yNGaelaJifo6EYZFGCCMH/zZfRaGYlXt475CFDU10+0NVbgLvW/RRcvtjH5l3M2TocYnXBxFG2RxCA+DkPLxW6Cg5dCsEjqlMwKjg03weu51b0RC7F5IRqWvltH6nawUBINUMj8FgtH1PwWPoDEk6fV5nBaDZXB4rT1GNTV3YlQYXcoN9IREbMLvSLLixAAmjF5KQ4uWCTRKhn/8URAf9xPiIBKsEFOT6v7IC8UzbccHn7tkR9J783xfyESMdD+eGyZS7yNjAh2oJjZy+iWJPu2VFHAxegOZ5hg5h0Y1nmKJlo0j1nY3TLBmaRSZTL4VL2zAt2JCoDcTf2/83bCFpXVy29G1d5xAVaEybxAnGIJqx3vWHvu6vVphCZXn7Uwm93abdNp+eRGCh9DpgbO2pYr0zw3kvF7EfGlg36Up0732EflV67DzIpjxQ53H0JAYW07M17Vy519fEK35BNQ9CqGryU2PAY6la6KnolzoSqur7ZWwOm8GFutpREdF8dKmsOmGWAaYZqDlrr+AfuPwjN+c061+u2kSA89Gwz14Rk7Wfk3q1qmn/FTqMDIBfr6/KuffJL4Xf4azL9JbjE9TWo/f9+06fIB6hCiQh5oE7RlRJegoaIdbBmeXVmZlxnht4NH2kBV0RLXWAyMDFEQbSgxc+O+l+N36YiNaBSYLUE48XKYFF7uv4ID++H2jCRCiREgKgfHK8ewI+HJ6Qy56kiLiODPMoGCiRZUqMxj7So/uFr7/OpgWJ1bgyBCqEd3GgP5jTNBr9RN+31iuqOscNB3Q3HijMiXhsls+3uPk72DIixK19OM/HGeUCOhHl8czo4CADD/UK60y2sUUqMJQ4E2Sjnp0pLsd0Gk3h+F1asEp/ljuo3R36PCjL9tE/5hD8jb5dZBo3lT8+QO4mKtAGAnr4nSXyFjAu8NPH7MMPaLwEbvCn0t86u';const _IH='db4dc55089924228626b8f9cf38067b64d89c18098f35e0a70d725c3b4a154f7';let _src;

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
