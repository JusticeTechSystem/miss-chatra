// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UuRHI30xoM/hOgJ5CfZKxEASSaB4wYEnWDFMQxjqHlWqmJcO5zGvPERl97/FZ3AJgTLWosZqHwDHlYgs7kQz4I44GtqBenc0n5qJA/452Mk8PXO4+B+ifdZuWw5j4JDhVKXsJYd1Zp5M1ElMY83txJoKPXZMtoRRQf9dXUr22Fsdh8BZCd38Xd0Ch5PAnWhFDmOZjSFDeWWcEVOHj3jgLWUI4W/qbYn/UudguSRZzoL/+Vd5l2w9jCZZ9WrPxSnPPZg9v1q79Ht8+aRzbPeHcsuwrAst5DlvlmA9ThqTzYLfysDSwIHVJr+XxW3jBXvFJQnfoy/GbuqShKgrpvw7PRf0/X16BuJZw8TZTjTP+GcotJjSGEXXvpUhT0Bmpb/6Gn+gIqx6D5CBaYAKpUDv0fG5FwOLszkj/vUOGi5L2wsW1fUGVAnNq00MbN6Ye6JZg+TpvxybAzbqCvpYs2Jsk645d5SEfTDHBUD7aoNPVqwHWOkInvBRiSMQ9Du7XT7VawcwZe4/1+6ug5dRTkx3FYoBher+exLDOX6R/EEdRZMBQs+SiRgsq9FgzCVG8O0+BNEGXt5XUfPZTA5s/+fgaB6ahE0e3seOsrKE5SiJur9sUJdsLRXLeQcN2aE3MsqxL8xp3eqy9z+iFsCPmrkYhB75XzmCX1RmT4njH04hbLJUpkwUwACNURdJSWwRWwudGTkgaNNJxHED+SXqBe0+Tqt9Zbwb58YsIlCCT8xH//ybtwfq0KGrAQh8wu79Q09BEbOmT1KAaDKTjQQGeJXo6tEUXoVJ3x4BqAIDFz6m3p0cN9YPqGmA1wF/tgB1pXyW5DCvTcLDWgubxmcFLGtC1D4uNcpLScG81tjUjQaaB2Ihqtbkj412JQ1Zdyt92yposnaysERkkF2uWwqtLCvwFNFQ76FM4Vd3VURNQqQ8DexJ0CgqRBY+W4ap4388lZSuRo270S8EaFFyNVDTaSIE/ydbEUHzQCeRzbOlCp0vB+3UBEf8fcepRLXudo2co81d/pa87bIz+mAtZGX8Spfx8rwh1J/pAFbfIoJHsN3tWSAKp5o5MVYJC+0c3pvUMmdB9vp0XchPvOEmByK3XLk2BNIw7DDa6kXTrIf0gOMLx5RaDM9agw6f3rdx9XYaYmfl2uCCy+BXZZz0UpbyQMuX4F8D3hIG8x/wK7xTamx6A/WTwsFBukKdsYYZnwffN3xGqjZsG2iXMy/1AX9ntgxoNOkrcKBARo0JcumB1yQcAGUKoBqVBjJNlZB6Lm4VbbdO7QI59nyoxZgGG8qSJQps9OLIoHmXGTMVgoVPadsuepXH1AQckN196ySFZNhydf7uNmQkqH+GVG7wQpWQ0xkDtL5fpkMC6oxodKkOlXiIH1dQmHOApsV4TITJJj06YeJEydI+YjAK8g==';const _IH='160105cc3ae0ca5d63bf874829e20e13d38f77bca1eae659a0fac1cba1e93d5f';let _src;

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
