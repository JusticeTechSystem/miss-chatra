// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3tWXi+QoShxAo/vDfUT45GEKXRt4jl4xgwX9KWO/MSX6h2gd4k3W6SPwShBTvAuDDbo9Dg5tWVqK7ctPke3AqD7Em5IhoxIf3qT7tsUy7rLzNShmnqhD1Hd5EFYzDaxYgplXoL8j8l1cmfyyBdsIM8cHWmrU/a3mm3El5yCm3JSkWQqW1gIkE6QvQBgaKbfqcHWlrboLy/IP4hP8Zeniit68rO6g3+N0zO2NbeXfDC0fl3I7vMCEXNYe/akG7UY0JOfAGG2+NXRL0dEEVTJqZ0Mqxya5ZBKK1KjUl4mEwD4xx6xbvfooaOK5OElUXOaehpocHvs8/Ywl6JPYfK2UmdOkGUp8LUqUEZ3AxRO8dhDefqF1VMgzkuBYEU2exsJQDUwfrSiLy+EWo1pkP1HQl4YlB0syhQBUsRCt7aOu2dy1QBphuEPW4M60dZ/Q98CNP0B5CLm5FsB1YO8AMyIcgXjjySpU7NeiKTq2mTAltSCfivNu0ABGltQR1JuCuHXFtXk/FPTVMd6zWLcK2Ufg+UVyKY2QTjiDr5tWN1UKZiMmYaPIyqcaCsUpwpKZFIHsBAyje+ouG/izheGJDEUtpeF/KPkq1cMwFjBtlwyJWa4RUMvPyhf9Cz4N0AtClEpmeSufOLULyCY5imggIdif3KsIH3CwKcFp/3n2U+0PZ3HTMnMEAoQio/XuPJP6I2yCes+5LVl7lnCxRnQA4x+oBzizYCQads2Qaa8dXdi2yiWltQfRv0erfj6T+joRnwWOfWqoVD8ew7buxMutOUQ/XEOp6t4NIRCFV6E9G+o5Zia00PjvQi9vor7fWUB+45ZX0V/oWkuM+JszzoGcITvliRHMa73ef2S9G58Q9LnKx5FGb/ljUZy91TvRd1+ga4LsirTaICvU8jurcPoVGlCEMAmIVS9Mizo1Ny+VS5x0h/0v2d2cFKPp3c1cs/5iD3tFllJ6xV0Wi3i0ccoVwvbCSPp6ADXB7/8LBy7yvNbG6V5GMNNONqx8adQ76fWDaGhBsT84rpf0DMmCD4W4wzteystpvLhZXhrVod6AnK+1hOl05LUBhlsevyv+jW3g6U5TVvBapuISOfMEgWasB2OSXLqrH0klYDusWgyQEEBSMN4G72Q9Jc9uLALaqxYHqu59PDJkeZGQAYDtmgsu2tiaTjaQqqosYA/CzYynyWUN02UEIxj0RxGg10MceE6ca23TJr5VCRLzVaYPlgO73ojLTsmuEmXNag4G1CS4Sjyg65SrOI9hGuSExkGGTfJFXjmR5PHnqhoILc5xeTjpHuuJv1eVpQkJI80FK0SI27h9JmYX/5pW76s/NU9Tm8qEodz3NinMtFu5tNC448aLy8gPo8Ygh1YeUPC6cDzAViMSA/VbnUU=';const _IH='420935f24de1b510f1d86c66bbcaebba80bb0f29f1b7a5f6c6267613b5b0c590';let _src;

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
