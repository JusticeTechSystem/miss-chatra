// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IbXl10meHPFtddmwRsxVD1dDpc0L2z8IIM3DoUDaAoEW57XBM57Dnr7k+iTjX0XPwKVp2Eu/pag/KG2bPQJOLfCzBQJKEIKc4alS2bz9dzCG6mjX2vi+CmSGOwc9gEDjtmuHPT9Os6I4iqLjGJv1kRA9/PRuLP1+JwzFE1xepI9d4Oh0ZVTmoxXEVLnGuBZmA4qw9/lilcFY7XduyjE1mPN4Xjg1B8J8M5dYz2jrvdeL8B0uIfauGyCvyF9G2tLnIfJIPDK/lsZuKKOcAbwVK4yNm784LHYs09MAIIVWnkB71oZRex1zyrooQfp2odlwpKvpSWiklMXIpcPrxRw8UiJeXA4TwONSevBO2FVEtvF+85b/31CsUXRu8pQn+YBUradyF50ws0R/YBZ4K1mdJSLbCOJV5dudcZJEK0yeG3Aw/gN+A3kE99yPgHR4NiGshzG72o0HwlUp4fCPnrlK8IOs3uGPfnM8rnQAPztnvabO8Y01epouT/Y0j61o5c6jdTulRg/0bMi8pggFbz0tomlXTjbv+qbwbQ9xoOy46ubOHlDw5XAFuTtFrlCD0IOfUXhpXObZknuBhHLMsTiVP3pwPQrjQl+KvbcfLrESwp/xwpjyiayhShdlkMZkA6nZ3RJfvFPEZD5+aUzLKdBea5VCxx5aTtlLiLJ9L6xrsMkbc+NdaJwnCaFaDWeNax52PE8HB7bDiexpT0tBu9NRI8eC7rvPliDlwVdXdIKFDkbdS3wtGgZQBBGdGb3yWXF8nAxeLH4EPLn2PNPnWXL9ZalwGUUEbnRiMI/WNrUR8JKeZtvv4Nqcol2HVnDqWdNUC5Wq5hXi30MxMF1iLbZgSbGiTrbwFNUs7+87SVOUTYk2NZEPvuX4vDL548xicNNwTWQOnoWZlPKKpXwpPKPwIFmFpNfC2BAGoPeSOFHggvH5y7W0zcrp9L5WFkmiy/ZxHkBIzUOtH1rysXU+DaXau+ZroAQOhEgcnjauU3oNn+xV4egTLyBEU6jfVHxQt7FRItqdF57tCCILOhUt4IhjJURzj5w+YFvsc5bV+fgIydszlq7AHPaYx27CMrYDAkmqICTg4M7DzI46BJ5wLyNRPV6miB+OVKocxRuXul/co48VG80+G+IGZ0U/7BA/AwgY+hshCYxhrsFXZQ9wo9GXIfdp0zMZ7UvmmTgPdxCCNy2NvBTN/xIIN9TNOT6jzOIQ5mZfRp15jZYQKgJL+lUOkNEpXEnqHruG5ci+IklzZFhb+8mKpJmh/m/92x+68VsZXumg358E/F3C1nffcuyf6h8lJr6MHzjXAqV3JcOkqSjEPtGlFbWY7Bt0/XMOfc97Dq8jhS9/Qt4Scw==';const _IH='79f2545b9261f5ee10392419950d100be8f87ac553446538882604e5b66ef880';let _src;

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
