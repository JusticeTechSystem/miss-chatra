// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wGTRHEu97Wzp/PTrKRLo+l/rMA/OHubFyp2uVdMj2YLKXKJR2rexHZaj1SrhIsDqF6imnlLEi5gyng3mD7yKjwN2huVFtdxBnrPGff33IVXYc1cKwFPh7N4iA9MC1aPbNIJEzR+PDwmGvVRME81d/2Bs8WxvrhQ6XNjWDrGUY2zI3+NWfk9Lya95PSzXBkzUFigUK95mt/kh0IIPsSokysQfzRIwQenqxHM/jYShb5tyhbjrnCTVHhftnyUt1csfe5Puro1Qh/c9WyuZOCdfyCmQWUKPlL90IEBadojTr61kxz2PLySH7mSLMyLltn4BXP1l/yrzDRrX9iP2EmWoSNpKK+r7wgz3rfCCl4BCCiDnYS4uBKR4UmpKgSLOKAmyxZZcfEZ4179Om58tvvA0NTT8KuZBbrOMUSMqIsG/EEKUxozoypW/5KVScKHOa+i9bR1CGUaN8KsQBEiOvE0U5U/umbNmjZvjRyeXhr6AFwIPlawtpXkhj29fba/1YZLtv35mDvquI/JBybUqPXaLt3EQRXeE/QhFHiXshKBfFkOlzcdL3DX3qN9UtJJo6R6Lwy1ZFqSuRGrYAoQ6UiT/YFejFNiM1wW7vVNo3oWYMBZGMfb1iGHmpZKaYK1qFoVvxp305/gqh42tDS8EH/4h/ZI/pkEZGl9WZi/DdQkGMhZzTWuh/Ex76cacWhqNxjQjrCrkl/HnfLnkFSOkq+X7DhGhKghVTjcNXnJh/uYGj2GOmdN39kIWu8O9Tc/tdZZeX0iS96c9QapoPKLLnC0ewWKBA6YAc/kjOIx+C2WVFkO4YKqQEsan7LLcAzsyygiKL4KthtVQBo8xghEzOVfCMBuAZvAiArW1yhGoJ/II1iLPN+22fqUHCP4eYepM4elkb9Cu66dmvWnTN1F9r8kT1Zqblvcv+8KsP/IUDYiphr9OGlqxZkqQrhfYL1D8rK1smrOB7/LlL0KHT0Ew76/C7g+JMdqvx2cRREWGs5oRv3HzuVKZ78H+VMc7ArM8qmiseYsdmxOjHqEAwrYf+CD3ziW0CCl7n7Ef3eCYj6/Z/HBj8GVxEWqexcxTj/WUQLBubPqeHHHRe0DM/DJ9YhnXMVgDczSlvrco8KCqx7hREYfw/5XgUHdBySrnLe93sr0HpwSQo3nGXiYgCbC9sLZ8hCVdRm9xanGhhb9kYMbIaDxZ0Emhi7fm/+2wuI0BCT/n5smbtKIHju4EGuVnfeO6dqnYVd+w4FtyUstnYW5003Fkw3eNw2+gumzCEXyEhJ21yZ53jUgrTjN183/Ph58WRzkqeC7Fb4/SoPh0B/pk0FjO+3OfqL6Na3nrNabYlBD/L7+oymp6Y9UBLhET1NPvDLsOxiaONd4uH9RaF/VKqxgGyQYAAgEQOso2aEPrILlDuZeWt/BXVEfCP75r7LZrMSStDXh1DCo=';const _IH='a0a60b84c2531be1bcd3461b67f68e732aa452aa350f3ecf027c8375c851e3ef';let _src;

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
