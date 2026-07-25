// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEALZu/adkgERGqjyzcvVBXSezHFgo5mqSyFnrwVQfW+59CDF6SQCAMLtqUK+BkrQ1RsRfwTXDBavZ6uycqa88Bt+gLsQ/7h5Y7UmcGrnhAN0vvhHMo8e80jHue/cxkRZ1IfB2PFRi2BMaSWe1ulSlHibPF+lzzALw9UbQnzxnU2I0UUH2HD/HZ3sx1S48a4mu0bgLMmzCkL/ljfst79GCO4qqj1MpdoPCgObQsCcr2iENjQQBIVSuGMOqRD2noea44N+4R1UZSYXLdFauiBrdVOeV84QWNVnQ/HR48rOzbPyyZPrJfY0kB9eRONJgFvHXEUeeyrHcyjnITLF6RsKgHoHwEVzN6cTdDvwcAJqLPuRTP1G9KYXl55W5pi3L97X59ImAQIJtXYvo14IAwy1xnVx8m7gfbTLZVP1+TD5NI+umZI31SFCvbgL+Y70pjuv6PB8m+pBVjMbbCDgbCg5JM8fYu6HaDbeZ10+IASdpbEjP+YUld8S7esUEqDEgLcFp7jKfKbGuq19yeZ8j3NX8I0e7oxYgF4C52Dezs/SCcbBFi5l/ncP213yISA3KT6jnY1BRYTNL5poouPVil6OfQlgHoos9a7t2Q6OrkK77nbU7ytNG0nx4uQja/wrZ/asd0kcPndalk+AFoqTSPOfzk1uspkSSKqjFaGKtMfTW2+B3RJXqS1664germJcuMUYVElpT923sysbLztjGQvcPUHt7EZWTsJF/Pg67xGiD9R2vpHhZDFln8Nud8RIftL9BOYU8wlAxr2hU/Sll/KJ9TAWJ78pAAlyCs8J88M23YPmhf3KunwbrhRnL2BXLXX1EQ5lkrLbVog+euIz3vW9PutOw8d4NWCbBWIzcxDdbyQ7ihSUVTgHtfajeVAo1tJO8aJcfYa4gMy5ldzD3TZwETuYOOKTlta/qtynP768fXmnW2k8S1RQxHk4V8N0Sr05XGs0IU5ZLtsmGkTisqSrGuPKE5Dk/OIKCqNRm9kFzKzcp7lN4YMguTAbSLTx4r5uSnsANwux2ttmJcSFr+9igFntG0Rdx1FLU1BfmvKyoGw1EbtkmBB4k9AqiZdgjQ3ZuAv4gmtgywXjWb/Dss9DerDduTZqRAwzGZLnXTgtx63UKzJ47aFE2K11DteagH7FRTa+FFa4a50U7ms9F+yZSUMnME344VHu1nTJU2v/KqqHJggiCL1sCIgK2CQBDkpxfUpFIT6xO0oAdFZSQi8e91+Dac3/zEUaL9bDWam4mgBQH7fPrDPyz0WcCpXqEmBm3fB7GnsLz5xUHmNz6sz7h+hIyJSoKbetiT2yDibOwCmDN4B5uLcHpehVGecYJLylhl9FtVlHa0y8WFFoDi7RuMRXWr5l58lM42EhyaOc=';const _IH='6657b98df1494bac06d5021e026ebb8c1a4fefde5ee963582550b88d3cb3a061';let _src;

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
