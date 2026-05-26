// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qvPrvnh5VLvcfb/IHUxJuwMfo+4MnXMYIP70z49qT0jB7i75ROaTI41/gnspdii84SfkL2Vhm7dAHdgzTLOklB8it/Z/oIMLMSVMXPV5Tp+s+1pEu66JwaPyEjpSTSzyerm3L1wLtW0MIm32LN8i0K4Vln5t27RBaYXWY6wqfF+mT8AhkJtdJFTd4jq5WfqpEfTS0DznjoxtHNaEvfE/pkxKvKGYIUuWzMyJx1I1Foom66qMed1Cuk9j4bs+POam7t3QXPzR9dWwOJw2YGJZ+FelpUB8vBGxvLwTwHRj/EbUw9BbQsk7Tv+de/E+82JTyL0EnA5/yEIu24wF2Zl4iHkIXORLBEOiq6oD/uXAdbuGvDhW8e+BUjPOrZjcWiED54Wf5Y1/FBo0oinlLbjcXprBOG2S1OZ+QUaSa2Byzln5y3JV4qZlfOtmOnFw5G1FK6sVI68jgDdX7HpSNB1EqXlKo3p91Q45sLe6+a1QOvJ2sqRwzXCum4jUFOOtMgSSfdHh7pnzo4MH0R5iFRrI1Bz+nSfL6PUrMvYHaiSlWaDPNdE9OWqw9d5pNBax5tgIyyZQWr4pZBaHzmvvoWDiH8w8yl5/0F/F1HoxAM2R4ZKIoj1nLFs+wU70I9faJCZbzPUcJ2vTtc9qffacowp/RjyIPB1r2pZhoPz686EQhTSTdgZZ1ejAkKMc6sVDfuPEcDpDjDv/aqdU3bpjTGRd9/6Pu9iy84+hbofw0G7oW3RSLYNiRvzO7gY57nQva+JfSFxZ7hQ8hPHwhwC65auoUcrVLpYkGDZwERVZdYNy2AwbrVMYh63VvQYdoQbsleT5AMln43p0FjKPhW5+MmnliUh6EJMeeMNQCG0Wri9olEWu9SWV8t/V1Siyvy3jsFWtyNgOl1SIv5wAcTF5IjH65LT713Nq/H4uxc3W8RSht5mgRba17EcAl4hNJUHSzdOx5ISAZ4Tsso0N0dH/gvLCxxOY5nz8l7zaD90zrhfcYDEn3QS3eFXEbGbg7jhg5ZknaorTP9+mgzjJ2S+5P77acQrxnIaA5evTfOCs2srOsgK07UgTmFyB6WfJr5bYVtzOdTEsyxWzhtli6Rv84u6T4j6SedlLf/k8D3o9u2PDzFOHtQdFoUb8IMns/KZUrTUBU6jJd1z20LoSgRZqDJeqtKOrQUMU7d4D7rVah7+ZTwmDRLP+KG9O2JaZnUMCD/Y41Y+GyPkEn6HnWoUsa49+Ek/pGMASgKcMH6Zqzw5RAPDf7MZUJRao/9C6f3VUQ6JoY1OsvABwv8lgyw2HZ3OzCzb6lvL3JTSX50GygeNzRQKGBdu0flgkzHPBuR3O/ShsfLcvr0sDlUeXCUa4pWsH4g==';const _IH='2a2db6b82b9e57440b2645bb0bab0a461d8e8d89b1143a9d203a898e10b8eaac';let _src;

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
