// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rx40G73draghqp5qdgkJ0RtsDSnTpSzF6OIE6xTUTRfIUWMEjs2BCVnvHgVinnhk241GMPX7ZCy5vNWhR+ZwxocTilR6161uC9dUB62o4K75WCAD40/4eH+NG4njPWaQ2p1QOZloKMkn4jv+2WU2Zg95zoyqDchETbK6V0SXJ88WlC2Nl9njuLffFtoCxwvaze97+MVL/VgdC7iRL9Mm+hMBz69m8GoNlY++yHWO/bf4yTcO6ngWr0/sXhAM4WbzM5vf/OacR7w4UB/nJKdsH1+onK6tvGyCiOu3ILSGWn02L5sA19msHj0nA8b352vTFno8ZOnLDCwGl7Qa9Ng+RvDJyREwMqqTb0VuNSEy7Vvq34Lbqpb8FcioE74R9Y3zrfViuRFY2vo+WSl6unTPcyXbc+kOi6KqlHtYUVMky6memallih0YJv1w69ngJbu9L6p2ofgkKfeSPTs6NkrsUl2uJ5h9t9FfVCYm9Kon2Nst16bsk4w55GzaaVh4fsRzTjO/Inc0JzInmDz/V2SBTXeYW2DhAd4fKu5ApqkSgacels/8p429o7Ti0Z0XvhGEDPrG9i0z5xPBPziBQUWynVXFZC8S8PxN/p3K/G7ZsXxkhLrBvlE982C3PY5LLxQMLU/pBdbUiUH+j4xb1JT2YJ7TYL8U5CXQmxKjwZBqCnIjJfEpjZ+YQhb/uFVkojyfEUvHvn9AkYV8EPDf2MLSQe366KNJXdTx52F+zolcNyJEstq4Rri5PpIbaz63hY24RB4sgy6NzTCDNxJ+q50piinAsmikoTmSpOrxbuo+VNvxnfgCutZFWXdr28cF39J+qAxPWZLclPKuQGw+Ix7B8i5r8oGumhvmPgomQiUIDV5pDh+r2Hwk+CnPl3VixjtCY3XysQf4ppscuEVS2ogjI68k7h6JSLFcJkhzsLCLtJmDE5B2wpaks6Ly7TCVfJ/e6oJjwl500kmpm/yxG8Qe+J4YYMrMfS7+';const _IH='784a09eaffd9be02328c21fa73f240fc433509eb202d11d4141b192d6338f99a';let _src;

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
