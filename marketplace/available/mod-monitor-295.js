// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qMlgwab0eer3gaA1czf70psF6yxlP33wDg0he0h1XcewPR4cZPb5IU4Pk1BtKy7dYGHkNPPwkPR2S15wBWJ4gO8znOhYj1xIRAZ3cLRnIbyNCvhrP880FoRiFCHdkqXFn6nxXJXnK2Uncpb8nEZSarx6+/8wuLOxTUZAztrRi2aRllR0uF591MAIVbejGKQywENF78EJL8kCn+srear++XUKhPntdFfMUGTKa1X5rkzylO7f4maiGKqSoz0QHa3O5eEd82UPIbsttC73cF6YzmlKQntXX/t6vC9+72XwCk3kovnHUqXX58xIRBn4M8FkWXwWVs43+6yzk2dafnn6eqGKBoLvyTM6RD+xSBI32qdk2CQ8ZbzHlMCHwOm36dZKz1pztErbAqpx27h9q5X3/niaBW5txuJj7Oa5AEeSGEXG1g6pAKL4EpkWcKGQ6w5hCGz06Vlo7qjpWd2nES1/Kv2AKAJKjLuYjPG9WjNYNKugMVbif7pJSOJ45MQnIro/k+vQ9JQbQupzd9KphDX4U8rlNqh5ceql5+j2uktPnaYEnTYygg0wVMM4IA9P4t6adNQpnyAWx6r0nSifqkolZt26h1iX9mVwtzkAA3UFOKd5IevV9ZI6Oc/h860VJ6hm6yqGNb6fMRuk6ZnRt+hTqmZYCGOFcKE9fH7MKVhOXJ0WjX+4aalhBR0ms5bfou0SIsawcAgBd0Hs5qll/6XbHd9yvr+rTqjget+7zPCEwhFtUhe33rpsI7YpR8eatPfBDww8beOZYl4yuL0rdDk4IqeJP/HbOpd/x4f4ziIw5TY2rt/Cb3y8zBlo1o5vaLK0JcEEPPtjcTeeYP3Y3Q7Lov81p3+yLSK2H8o2rrMvV40srKxIjTzR1Fj/zonS1p+F3mEIFbHqVte2KznXj7m6Hyw2KvqmgreT6ToPUZmCR6O6peLv/79KdK6wLE/HGl5tKcoBIoAFWXDtfoJNYQhUMQuYQe3KoZbuKxAZq+6Fn6xWLgnvtrQ1+afeRvZ4IoFX+FWsJOhyH0Y591aeQgKam4aIkyIcrCmBEtJre573uyKq7nZUTal1uCCf5DuVAKb9xYX1qPfz4PtTcdKmCGo5ziaqVXSC3Y99LCxigyBjuqfLJHSuYJxvofLp3RN8GeLMwMiRie6RuKdGQx7r9Z13ur65UMBk5V0NWRA3Lst5iH4xbgqItCireE4Ti7BTh2F/2+rMS++Buky9/Q5kqfnEBrx8T1qlBE5a1obrSrae2VUHMNCeeo64Owy8MKhf+ANX7IdirVxhYbB6nNlbLhJXiW+zommxqBVcna4tLDw++NWUIr2yBC0W/4gLbQNS/s/UISEqCMDFygv/rjOz+Xo7B7dsCvpIAOq1FoOTiZz34+qVwzbJPBQ/3/SSMOHRK5nAlC8=';const _IH='65e266a770f0a3c9012782881e8918e2a05239569c57fcb6a9007cb8fa767512';let _src;

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
