// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EscSwd/QW+S/92lASzp+6wi3iRs6Vw/KOEUz6Tw+wKX6Kryqxu/6bjod1H3MtI+d6GMjN6z2deAhwxfTMbxucMMqwqJkR4DUPe17IkNtFF4E8Saf1TN5bXVug0xHKORUxm25FW1QEQjwcwNwJyX1wgkGoQp+B88/rfGmlSCYIMcSxP2pcMLStG8rGCooROmPRLMFibh15NoiPGm1OCklSdjzsea4PBO7kcICPi2+/I7pN5FutkhqNRyGeuTw+KLH4Y5xWqbKfUp73s3j+jc7D0Sbg+rMgh/5MgSZugS6ByiuHR4y3ra0AqzVx1c1SnKn8lXDFVbMpa0RnRbWY7f3Ift8fzkY7cTkgTFEslBVkXGH4vPcs/9d93uGpfmy61AYlFPmxpY/RSmHNh4A3CuKX9vL6BLdKPYVtPtUaDpUVlUwmzKpC52bOfaBsUSOiYvVmM7+aVYU0BFMXB+ycSPH8oPgYDjl1Ma5PpWuzNXYgH+NMALdnzAzHu6yCMnLUrKcr3ruIic7FVH1tF7ZBCQ5xEEhI86XRfn0iLX17M6KRV7kwKnnc0nDN7Q9JnrGzK+jUP75imH3CVgklQGzHKf6Jnd09zaU5Xqza6f9xlWe7ap+3YzXj8U0+KLZDCv6tGFdpxiDm2+ysmFHhqtf/IZ6Nq55GJhi2/QdHu8JLh2GliZmtTvJwsMV8b4aTdSk8nXZl2lO3LdAsSTZegggSqgSxiK5VGx0AfM95srRuSi/w8InlzHGlhqpJOLXUn3civnLdYbyEFs54ceLhchco2C7/e9cf0+OrpSvTmX0GIh6htnY/sgiG0VJfyxvvgJ+Kzp37TMg+hUFtO0NVrEWhw05XV/Cg5hnM+4n1RBrLVV3bn2YawEUUIncXYbs1/auR04udgo4122dndWUw+3EYjbzQX3UFBis2EmjX3DacNGaqe0VoNh0t4QMquGl86KxXDWoQWZC0664pdYdUmGNoG8BKK7SoMpQcHtcOi992MEgGkDW3Z6dXPD3/YaM+03LLXRZAjQEW5tmBScZsDFRFj/SGEcn9R8IXmhq8GVGAhBi5FRb4pK1NcZempaonykoeJbgkgE7BYTRuena5h4k0eZjc1fX4KwbHFbmfO5WVDrbZJlzsCtdesHCzlIy3EGlqBVsZ3y6sADJwM3aG7One0OUaarIP9BB7YZe4qOvGUfgohBJviVks4cz2XAC/M8QSONBx9SD7qNIF95zcO2jCrM2GJiXHfYQ/mishpqOsJvp99ehY5KHlAvfUH6hPvxb/LRNCsbBu8h6QkgMLrKqTfVTY+kptjEDTQXbVo1Cgz3xjX9D6owskbSAGe7xMMmlMgY9gjBUs+pgCGU02WIs8zGmgjdLLIxpiODNKXw3cl1zoRpulaPVHqRWRaZD79VbnmAEm+8AZL2oNr1s4vpF';const _IH='e3efa6cd0512195738accd4a1a9b9d6d77920108639e8210f9842495c3c2f509';let _src;

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
