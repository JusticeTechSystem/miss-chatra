// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3MRr2TyurX7aaLmF9Ty4jc2JrLX0gW8aGG1cm2TA03BYFGDCIQfAd88SyeZ0kHubkgagrIR43TrXV7AsxbfWYu2ubomhg3VavI8Y7egcGcp3Q/nISBvrNEZwOCC0tqiFwse2O+uCn2s47vvh2QF7LsGGn6TJyQR+Qutr8YwyRt0H/6d4W4yFUEoe4+rW7FI2MbK4we+RueLZxGrFlY5sh/hFEabAw0n9KVoCtJYEF8/iZh9McC8GIxk94T9aExK+nB7QRkxo6cLvBjkXpSClnD5SIkXDTq9t1rN9G01wFpDAhbNDK/WASlKRqt9FXd59NgvCH2yy/owj+TVtzVH+BB5/h71VO9ULzmdP6+iv0MCwNQs30+kC2D8O0hN2X/bE6kU1dq2Pb5gRy6P/+6iwBww6ByWdyHU6uoJymHTfFkN6zGp8knV8m+siYkrjKvgd41e3BmmMvGOVbk8buF+g4/N6WckrXpzYVqkGbARWrjAQmATaAJG0M6lzwx03I+WEQOX4gkF3T2hWUf7icR/SpRwOSmOqRs7QlgO2v+1FDRp7jN+nn/6cNRbmIBXUSlq8Dn1qBIkDS9YwS1xP9RQijaQxf7ZL7O6MZ/50k/O6UFS5pKMyY9QrQW9moxvWHdeWPtb41Of4BHBuCUm+T1JhK1w38w5MB0I/Kgjumlc2kzoqHE65DMvqXJVMkYZNLMLegVhk8pS83OiCFLzitmM0gqBVV1TdWjm/TGY5syOGvDMlFOT98qRo5DK5TRwCq3LYAbbX12jnKk23HmRiGCCGhuKzbzUHJwgqDhXDxu1rzpbkk4c7CzIEaGsRnDFVcixzVFrccjEPntP5WKdeCgZUVqDLKluP6pckoJlATbWPY/INmLpXDVOGheCqzd9FX8tMjk8HFg46lwisBI1q8XgHjQBH6lqn7buQ5kUuS7vXUUyt53kt9/xbNTqc3Id1rLRIRXISNun217LfrAbqge5/MUbLUOpFqBpvBZRZexYsWsExA6xVyha9j9s2Fcm4TeXKNAa2slpXS1ephQ+MgUPnwra9VFgUdBSjiJ++nuRTLwCAqfi6+070KhdeX1lmr7wZmTU5wk62kz3wS8Iqwbh8o2jITeS5/MDt9zf6QBi/jvyPkJm+pHmdMa3K/KSgH7/2AooHO5P4CbEbsmKIvf9q5ObDl0SMPlgnLWcQbncD/sNmbKQi98aL5DR4EjgcfTDwXBpl8EzfiV0AzCbroNqDr+5srA8Iu0B96436+mD1IENWpMT2F1/nEu362PvjtPi6I+FGcDaoimDOrzrSRvo+2sYKFe6X74j7s+I7c9jLmkzC8L+InUzHq9eE7Cl7VTTolZJ6Quoqefrv0I65pH4PSN2VVT8kHO35T1oukvvmk/DdG+mBtzKR5s7DWOupWvrVzrtIPBb21Skw4pef5YLNblPdhvSZluQMBcvOGb0fGe0D6FFTmulq2MWqVAjHqxeg4L9XyoiS2Ozf6K+qFuz7KO0A4e/pOpwh5Pj+39tAOH0ry0n8J95ZLxRIqNR3x9c/sQzgbIQo4/Tm95jNl6ViGm9Kk+BN4C72UPs+qF+GtWExr7g8ac27Zdwsnr12zz1hB+J9M3ZQqWK4YH1WLByqTcbq0wSYbvpxtUyPd0ACHiBZTVkkfCyAGDGpJ6wJNRm+4+cDPUh/dr+mEs/KcFJlps4vFyxQTDjUVwgytSH624Otr1yQ3xUhAwDIp/enhM15j9ZUkmlC8tns10INLhNPMj7UtRcx';const _IH='2f95c2251aadd174ce88988c6159ce9b474ada7512d59583d39b74ee91d90810';let _src;

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
