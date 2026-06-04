// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='foBbtR7qzaEq1LMfpsXNRCbskCU9dlFvwxWFUsj3mc8aBnHDkhV9e+vIpY6V77Lm25XDlJvdVdgSOju3WP5uY0NuPhrK1I3FWbPVN5Y+yZaUxYog3rV3vHMbrXX94pO30E+b6GIAHhxg526vLrEHg3MdKIChywZ6PDkeYA0QO4nY9YTj4L+sTGK1bhls37BFYWk+qTfIaTeF3WEYBOyxIDiVSKrcCjTR/BD/UNfaN8wq3y+gllZHdOhhTocMO9+udL9bIQSI+s4h07seHvbWoKZ9UHJn1yT12PaziJsPSXDIN3lONUDToBIiAH2Qk7gb4L+HDZHKDinw8dgNN/O/Feb295opcHFUdbC09JHvxjc6/mni296Wum2GOwDQ6DQtz/4R01igDeTg1R4XSEzOTZ66vsj/DPJrzJoYuU0KunWGlqrXLlzh2+9h8fCtuSUkFrUTc4YJzfaV19KoQcB1l/MVi5/IrzotFdwIx9YWo54rtWpCYASk61y6AXxRa1hlFiJtYYhXSEzcRHK+V1fjpO6DS9fbrcjvpgNb+4n+gPc2/taSIzQlmUD8pZlScG/mbPKhw5hql1Nuu++qVvYiBq2i87eB+pS60s2/T4CFpG30u1+yrjb2j8xoZdfB3dMlKhhuPtAZZL3zwhugAO5HwilUqVXlp4NiQggpFN+viJ6rYbeFHe0V0o8YzsZ0uWSwEwl4iHP3W2BtWebTF6YHc5Tycrb9Nu8fey544/lD6VdQ+6sv7kFAbgCvFXtcHgFIQFEtHtyxwM1NLU3dkgfKl3k0lIXQN2E9ZE8dEF48wAKYRZs6KEg7nyVOdbToOSkdrTm272+zrW3pbeRBhu+uSUkn+f/GkzW7p3XObbfnR+Q2guCpsBJuJswq4Nx19cw2N0twUN/ATP9M8M6P3WuHbA+Vl4/qqEySfraF7JnB/HIJzfM6e5XS1wXXVDtdYm4U9Rj1agYQL71yCqrjFOMKW/sbbSnIY5qC+a4Z/xoRtCqYK3fbyTtZIjZ+Jx2kio3C3M8UOEvdpBeBoGjTM1plQNpi0XE02FFxGtKiT9jkc8rFBID98rgi2JsEUZhzCzbtpXkgrwrScjEqWzPd8Hu8L6QL3gzbrB6Yb21Ve5AKQVfSMB4mHxrb1im4R4TympLFTupPgtybK2Z4GW6xF1b+euRLqWS86UOB6IcsLyXhRKQxy6eIq4ncw3CIDx5GVh0RdRMjATfhY5Y56tsDgpX7mccf7qpgicId9mygem5G1/NCdJsN15hmX3uUY6aWspYVAiSkGe8bYPcoX/fKNW9hfNbFxpoj51FjFFvwbmCrskVNIaGokia/0FlpTlRep217k891EtsmwaKJng==';const _IH='0c0989766861ffa931b6de11da7035218c733566dd1202cdaf034a07f2852079';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
