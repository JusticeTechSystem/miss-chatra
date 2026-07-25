// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIllKXKo3ZFQNZ1xmsY67offev6LJiTnjYf7KFHwitjNR94O3vzkQqC2JNrylhqUncgAskVdks1WY3b1ixuRtAqyhfOgxcmhtSj0avlXCeSdbLvJ2T9eb3PaZ4CaqN41MWE2gFwAlxpC7HKbODurIQHpBPmkBlj8c3hadiJnqqp8wdJKSLy8LUEXk6BlPD8A3kMJ+jliM7UUCTiVFeubWdVcNPb2yA4ckxrRua/84oH0pprl9/pY/T8OLFJ5Pa2THwx4hRTyXqS4QUKOLVury8MoOUhFPUBOc9mjdF/xE/4lwSvnUsB2k+Kwo+ps602QR812jS32bw+aK93dHTkTMKmZ+4vwoJotF/g/m3/K/qzcxeneEI8g0eBpyPZ+IH/ASUm89SIA6Khj2iRJzyxGpMvtEeSLIpCpEgvT3O6S8EjZSXiA6Qbk+tl6EKdJNywZ1PmJYt6Zpu+5sGD0o7h+gZ1SmJyAIuzvMaPZ1AtPRPgIPXmclgHOOd0qJ7+5exa/7vMehyCR0PwyXgqGFLqr35p9cYRuXOk3Sw8xVsqGx+2wH0WEgekhV6/Z3utuUODSprNQkET+Wuti1m7Fredctg9q5mWRcM2N4koGZYWRLDsLxBb9Xm8XhVf37R6uFmmGv2ZNATs/bN5Fsh3owQ7ui9lv81KCN0ULFuTu5or715PHA6kS8+CpZkBHkhwJIpsmlcAobFhC7uqBry0lIMuAiT24u7r7K6JENcLqGOou9mjaGhX1EUVDDvYUQRtdDmMa5y+6CienRJCHpnwTDQIX7d/VQfnwxCuj7ooRwcs6ZR4XokqMtcyx8oVVo/8OyBW+n1XIxWMWr1cSg0Xwm4x8ozHbdiw46VsmIzA0RsUGKcLpEQAAweZ9mZ0AHSwhf69wfAOuHdZTgprr0ro0jX4awuy5HypgYMHU4jwDB7LM8ss3vEYcbIBgzg0UW3FSJLWVzxb4xnbLYXNrL6YhGX8KLA3TwDJPndu0bEGQsA6W1+GYeKny7GD5FmZeqPGyE3QTM1n5fj2Q0SMU1l+y5APGPsHrhVfgWqq8YrdhqXxtKLeZIzuLZhLwxEDR26wqftFAVnTWuG5Q7fYpRiZ4DvvKl2amOzcJALBPmx/ml8fn1wQ7PPQSg4DM3FeucnbsDN2DdLZLtZhdQp9oK8+oVqZU1gVIThVanj87JyRN0cJKDARe3IDeL6/Vsc3H07x1jyO8lIird4BmmBNaAyE3O3kEjVD9pifpLFIAuS7VkLSX8IdHslW5MGUK1Sf9TS7sXS33EXwQaeyoaY4DLNlPEYJGMB3qO+9UwGoanA7sHS6H7eKbKZ9EEvhtvmtA4Ok/i+c59/wEC1xBFNFP9DRjdRnz83UbKoZJYIY6vpQWC55bvhVC8B2g==';const _IH='13a631a765da442fbd30d49a2794910eff20e4cb7b37bd0d7259bea73fcb7948';let _src;

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
