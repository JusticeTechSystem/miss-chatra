// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SmoFeClQXRtpFi5hmXf0onKsu2CbB9c9rkzLzelusR76mH5JQE+CkPesfhIHpC67GdgMI7awB5U7QzJ4lN7vTh0xqDjNVAqMJg532Z3gAUNsKq8uNfO0i8YzYJJrYTU6s5WXAZhP03YWY6bjMcBMmctn6p+hHYr5UeHvY18zdbRAINVfdxJQQeu0w1T0TqBg3kpZ0WpdjfhecUAgP72FrwRH4wAdGQyxmbWg6BONeTYLlrAxWFhEdbm3nAiWEmC4KmMza9ZO9Pd57rj7dPIIVkvxUz6v+zwTdiN5wynpe+2r1PdQ6xAjqdTVSpJzjxGp50nNlzzX58QCX1joQnRURqLrVSXMSiplu9ed8T8/1fHPka0c9/o1f9PqH0IYPqSoBF2iBpUkigg7AKuWV4Q/GI4F+omWJ0Oz1YP2foxuJJdgVM5ItHN/f61Z+Iafd1bvtBeGyGSckOMnW5X1wO4HJXii+907NnEUFz/Iru104V2neHrYuVAiVql0I2fspcMNA8Le58/bR2brZdPAn9L4aaZUtDMnGyGM/5trnRcMXcfmIyH9zk1uPSHUHpeH7fsi+8qfozpc6+ZjKAua0CJr1PQEwFz3EJdBAjjc5ocIIPUYxI4SETQnUxaPJbNJJ9emcFkRu3DSNxTnp4ri9KE3I3nH1bdGPJJdpDHUdxbZ5hvxz/ezERKXW0um2Yad7tYaoPMQB8pZQ+yzq1Y8c+N5SxsXbBXHU/HKdKQMM3vThfBBPUDR66BNctG7wJrqil39hP0jSah0whV2DrgNqFq2YaWXFKPaZZkgEQeHuDlzrpMZQUnxJP+WFjDHfvINjflO6xmQ3NYAaaEs8xYYxVG7ufupuxXnk2e9xEXX2e3tk3+NvqeHksf5xNKP/fsaVqPp6hBZmz/DslcTJTvC1UVW8gz7ASYKADe2xirM/qK/blDPU1DarcMJ7OMSSsp3YfivqcQLZubw11uj7YIXWeykea3Ka993TpHnIIThegHZQuMcq4nmtuK5Vkz2AZROa32AzVCnzA==';const _IH='316eb028f2d87d163f069741ac5ad1536e41215fc408d6cf35aec705761f0c36';let _src;

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
