// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lB8rO80Jaf1gfc06TrUsf+56v95yyi3XbdvBOgvBec3O5zss84qwXy4asQPI1YPy4CodoXcymxIOvVvsvHIZQHXvcxm+70cEnO//JKU7BvSc3DlCuU7YGXzOjE4WxZjumTKAb7k6FlQXFHNc7scYFMeObLMZe1xHxYw5yjjO1OastQqGemNmUZ+EhGEfCwDqwgl2S3Qsw9x3kpG124ZKJRtFcPhFRJU+oHEIZZsnFA7tauvzqXuTtHNAUeb7prGBkZ+7O2OcDV0prubuGngLj8HT4EIj/Eidl2Qnqm0NoKcyf7rMNs6FZQq/Zj7uztxgmC36xfoiVfLdl25k/I2+UgopHNe6OTpL+szlf4WQnNRhCxuCdv8CRXB1brLMy0ymT8yNZyfJ8EUkrY4BO3uJZnfjUyiELYvbkPn2yP9GiHJOAISPEctdyxJ7/RZvjYJhdwcZJv1Cfh+jkXsIUzsisYaQBUH+4O0jLOySmVWSVhZ7E9QiOTOV+3kH7OzAZqxjDEtpaVfQtVY/qij53c05mBdXT3CjGG6hONZFPIwQBKZkc2+39mkIa63h890WcYA5bW8115bbcx9FUeQJgONWRgeBxBb+EfG29ra3V2VI0vCAiT3/G1n6Ckh6vFJh/o0NDvnSNMAY0CRNtAFHWLFWvn/tWen4d2SMQ8+udLyvFuXS6ypuYQ95dsMqlPU86MbO9acDHgQaVteimERi4zRZZ5PH6mLZJ+8TBLEDUbj9ugep+CQD+FgaqTBNLIiv4ptzYzFQYoCbiPUBL21CfQBsB8LZejiNFcUJ8aZCjq16+K7woHPEJZXMs0KCd+h/NbF0/cyRjMU38nlJ1NYQWgKXjc0aevYs6+6OO/dIOcmO3holhyA5mLlCWfm9OPHkO10V1S2RQGOz4s4tmeZ8goAQltra9B1l05bNKMaoyA/ZDCv+ASW2ArirZlPHB/C7KJuNu2SKtD3gqgtUgdOFiIfb90yzXrnktwaLaGo40xoEIm7TmIQ4EFfCy4IvEQF24HWu2dhfxWQ3OjifW08yfxM2sHDN';const _IH='ae6f058b4366215bb36deb6c2b31653952011142514a8843190f68eaf8a393e4';let _src;

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
