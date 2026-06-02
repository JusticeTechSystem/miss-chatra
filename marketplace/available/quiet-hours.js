// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yb8j2NPdkXjW2jENHQ3HgWM9NxgXv6GznaEuwbBtTal9B1nVdKodUB75j9rnFv4tGtBB1Qc4cl4dcKsFa+OtHObFuvwhA2CqBiQ1rLNEp/DqqPFgHZBGnvIJipDuFgCbSZIhOd405P1F1BIpeN1QTlxD2rgB9ErSAI47SJvaNQ8FBt1J9E0hqL0ApjKf5n1JRv4EkL7pamv59JxqAP1n7oxbwdhz6wvyvqB1pgUhvA5D/mExIIywF6uXhsijdseJTSyk2uQ2EGb/Vh2Rzd3gVFVjntHLpaUHjxGPHYdbOS3dTbUGsUv5Q+euS5UP7XMN5B9YvupTtv/VYk6tDzUlcBk8emaFT5z4QTa4WFtDU/rFdG9s3H6aetAfjCEn3fJ8epnyTjFXiUMSHJ5AHltLy2JyQR4JAace9gi9tAe3T3wHmJ9TtZmXUn/s6w+VfY5P5qfE8KOBFPo3lD0pqT0ZzAwTmc/1bflUCCFZXBGplCDL/6ZqBoxcCkPg9ZIu+XrweUcwlzBZsA4rAZHwUNwRjZsTTZJhPCwn8fwAhKddwSos+1me+171M0QTjkUkmiGn3ON58oNgpy6DEiozXCc92dtA0SIPkKzqBiPQuGkoBiOGNtLf0oHTPlEdBFd9YrZJLDT2oqSgnYhUwb+hJDiePz7NLtux992U6IHRXRmWfJZtRRAV3PuCbzj84x8ccevQKyG60sq1Sjos3LLLp22exb3kX76hDrzTqA0LoFNP0wSzO0+skq2VjPZ/G/aFRzVseZMIXWelTF6OZFFDzLeGA+gzCrxMNnlDf8R8GEqWrqv2G/5UhkCND/v//Zt4P11Ohf20vvukJYRlgiyQ+PH6BtLDtJ2NBfWtNbHbVWevTKlOxtoHPzOJMluBgdV6zYzBfstoaab4QhVU197oCwpfG1WiY8rmOMqC0r77lD7T9qKBBqqa8i2xcR8X4ZIFCcqRw3koB2LMdWbsMzbbM0Ej5vWqfD15YSD1bL5mAQjlWSFxM87/koUVf00eZwT+cvwQJHVZ/p+wTGYmRnvL4QZQU+a+hBfAmwhc1DlfQY2beg+ZW4fCoEGXaQLOKq19rdsgAKrJ3h28emmmrtxWPd+JK/yZwgoPV5PuNi8ecgfF1F+ptERV/XMTHblXkfVSGGoA1es/KIBztSdLsdxroeo8yuZqoujdY7KLh/TgGs+yTEeViciRNMu9Vr4nQoN4IkYRPGQCTLCiUHC8YbOWMrPH5tKXlcoKZHlLx4VY6NZXUrBSKVeN2Ccib8JrSZAdFC2d2+6RP7ZnQ+xkViYzG7kQ3Y9vN+WnM5ZfUA4oJJAKzYlGNWAFmpU7R+H/luRAWrVc/GVP0q0mik6QI4s+WqwtkeV51T5dkgkosI/RcjPPdBMXseao9S1blii10Mw1Zx4MTJ1H7Kyd1+y6Q4CR+fylSsnMAwTipesNzFpHwZytPpZpOhaBwii5soYpXNl8KaeLAz1ptWVJ/NhpdTHwbd3S4MM+E40vP/1dtXiiBGS2mpKvrVH3CIa7JEw0xsQd6lZtQ8sXBshInn1OFfuf7660JPuKptC6KD1tYA1qnmV0PwFCu6UQXjVnErh6PYtsNwRLKfHh2uU+ytjTQFGrOs4FItlcnXsX63EtVGej7OCe1lja9drImJPNvWvUL6vx0kZV/Z/iXf01BHdDEkwme2vVpMQnYU85ifZzZsKH2S8phBSQ';const _IH='488dc4ce48bb26a84d2ae19cdc03fe0ed7cf557bba979e7e8bea34bead787ee0';let _src;

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
