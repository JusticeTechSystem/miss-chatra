// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ZKoI81B6G3QR/N3VxchIzF+2WRANc7HVsfd9O/kIW09iPbzgZcCjfHXy/ZZNY23k0SebYiErXOntfX3ORrTrrNkPiVKCQ5Qb6jjBGi5VcTVAQkkPRd4cyaxGWZyz2dOYnd+ISzYaHf4Y8jLkYc8xyk4I+TYmEc7osQYmDh8FlmkyCd64xgQKa0ZJ2kN5SiEhJ5O0Gqm39U8gmagkT45hrCT/9+8nnQ5V8JYO7CYzDf/d3Q4QOAaZAZEx9DOBfsFvHc7yL9wHCSUxyPSdfDS/lCIB2DeIfdziYbgi/+g/OJTahb5UCvD/wap8BIEnq3VtZVNNkSRh2YO6Rwur60YzeWld1oAP7xJRFDpRykVphMTyzAbczKQto/cB6XCr6ZyNxxc/8o1vp0opF2Clcj3e4cjfjG6Akfyq8OCx3yuhHl+r/VmjWqmhR7n6y65Uzk2ZvfYJl3i0M/jJ8f6u9ODhSqfT3DElNOrcLsN4FCrLHDNT+n2PAosTaohZJmjyQ5KxKZUU1PK3LCSgyFhq+WCwbIYw2UHG0e0FDHFQyGX7oejkzut2V3HpzWVPTPXBlptOvhEuk+iyRgGNG572ctNSTUoSZLBNhLAQEDFEGOwspL4WZj8BXtM968t8sCpSVHaus+vCLW8+bxhDhy1b4YgNKBVAO9bWZUnSkGlXDqgjrnxEMOCm+2U0tOL0wGlHgwfHe6d+RWaI7MnAVQnrRPm0hTsKzrjMCyWgIDoLuhZrFbnS2zmtouCfp1CuFxNFQL9Fu0FZJemMIeKHIvzdWDcj2a/BjPRddgEf8etDT61vWAKicnmrld0LJvQPPMMsWu90JTsdO/pKPckvZAymOIN89+TVv32GHx1ualgcoayNaUoXcEsyAjTI+Npsb7Fw8LMBdxmzUjkYOXylOi/dFbNpC4hEuvSnJlTvNnhPpzFEa0jApa6GyddXlgGoxzanpthfwMKmqA6Uv1/oGTyioWns58CeleHhmhDbS7B6Gv8CiA8v9smgApO7t8m2nPrIoJs79qyRpAGQ2FjTmDWwuPDxxmays76hKLnyjKM8ZtG5q7qjl4s51OP/6XXg2H6TfFyzH3eQyxmCL6QTenvhT0dy8V0X5xhlnhD6AtfeFrHqZeIRdjpVxfo8OfIFHsJfQSQzZDZ5Dz49/CfTSb3jWS2w4Z6eOyxBrFDOSEEbq449654VmXfEkjsZGk9TnHfbiNTao+jdWQxYgcTtrLBylH4QzbxY9vIYyVnXWx4/dCtMJKlyLFhEV4y8m27YLLspCNEggFHG0m2YDYoZBNJpXIxt+RNX3BGofd4wxw7vJPRiIo1wnXHp2g+apPIarVqHqdjtjHG3cdkX+sIpqHVgDtwsdWoLhYEUsBnIk/rHkyh0HtpUgm/T4t8/8=';const _IH='dd646ffee49f92587edeb75ad74de442ee1d42434a542a1269a9d3ae7af4433d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
