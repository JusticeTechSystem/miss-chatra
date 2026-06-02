// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='do2nAe8xWSpmB+3vUdIiVBl30n0R8t71dHmeY4oFKHP9fXu6pi4kEBCB1a/jMjWa8IkBSAeo57DV89+z75QQb1O5sBvYZ10tHcDLk99z0LkRIAcZVLP9R4GTFe+Bc3bSOv2h3dIR1XFMcJIvfWg6G1uzUWJfBs0ZRrI7SW6uycSp4EG9mJgTSpKKw5YUUSQ9qzafMZn1gtdvhaFrqlYA28VC3tGyV7IwlkfVB4/FjWiN4Vw6ZhOhNYC0dvffMBMXPHftlf4zUn3jPL6JJ/XC9ldpySlH2A291zTpUpNSknQRogcwWhuhl+r9Vq1TfJmn1YwfGDUixMmm7z+37rxEA/A7zECgGDekH3zaKguOSBZx3R67SotTvzqnsOUExLHZHXJ6BM9rwCZ+90U7l/s4a7N0pzdCWSmXgYqTpkDQ5pzzPfcm4kybM5CZqJ0GMvdu3Z0X5YVTUvAULwKRRHk42JCNDBXsvrJ8I9oDyWYlasQoHwm8lrT3PHeQLlfSopIvODLClUh4jMjqx83PrYQUKgqPTnbYt2yS91LYJm1rn2UEedLihtShSqLA8IsU6x5OwoE/lzHjfE28aIR+fOz5VcQ+pHTEGra/J849OSwaXUY3MtH+jlAYMWMj8G271St6/i9xfcCmzfcYqFB8aKooVwzZlYwpg4U8rTbUl2+cqY8P8xHgLyfUvCdo/80vETWpSjpbbW9lPnrV/HZTxjv3+lpTMPE0rCVJUV+apEXe+B1N8wMeD9W4Nu2iz7mWRYoSD9hFdD9E5BS5jxkeRGbUcvOGBxbrPlakBetv3je17q4E+qC7O9wxhzKsg1O7m/OH+ZDeniF6gW3FB4J3bLiUu8cW2SuyhCVsKg5OFx9LNysjQkaWUlsHXebPSQ2oG699kcR1fZgz/w1IqFGSZIfrtCkOi7hoWXsnZTL0tDfHnJmiWTNlSXWTgPnzKiHjxnogImYlQhNf9PupZQjVW/Zh4HHpUR7pSyQJ/Hcyv0E87PjIZ0yn4L1WXlLnG/wSgRk6iOovSYg9Zwz8RJ8sC3zoiArg5E9LWDzPU1odByV28+q+ez/aHLTQ2mHsDGxYxsdFgseSuNrys9IY2r6r/kHJ74BptBGxx9XaqVceia08GMTzfKSqySZVuoFhKK3MwftWyN+ptlXcqm4ClU1CzmOKho6Y0mvnEnOj99EgH53W9l9OZA2CQO/AlXN2d/lQF0kuRYKtA4p60WcJZOgHRieg/C1jHmHpFkmEPRAGqqQmEVLIx6y26TZtj+zcj/eauXoFiIuK/9pmg6mBx1j64CaiyXVJCfIYgOhLLekVfKjFtqUzyNjZKWUIMEG2REovlay6w7GOye2VGt2bCbFpT2b1nWuXPSbocfGc0/G/SvT0L9efSJ/b1urVog==';const _IH='b1790e9c4f66b27c960fc1cf18be47e554d90f3645f9b5c2da8b1e0cfb904fe5';let _src;

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
