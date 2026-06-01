// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Tkw78LVbsSwsNGEJlRk6KrJWCLUqTDmj0ZSZ5/xyQb0Zj0XEP7Q3Qo4+GjoEXjI36Y5W7P0CELH6p7GcF48LHbe2grOB2Xv5zi6LLxQmojrcNgfPZ06ZD1lr8wp/Zje1W7w9jdEb4UcRVazcK87kaVJBH4hZYY7NuvDBbYlqZmgBwEY8aXQhx+wkviUjkHOdjeJPutE6ro/fFxKVW/Eu83onCQxcVbmidpmbysFH9EKhW4XA1BdsnCFEE3Mh+BdfdJGQ5oTANzqHxIuEKxxkXAyZY8LsyTzmnDbze6WQbN2ME5wkwVldS9FWxCMph4x1QqSidLXZiyflqtvjiwGyKfJAF8lRyKT9sjSdRr4rIQ5dro531GmLr8fz5fxjanOMTMvbwYyljSHWbgU7WrWmCDRmyK6anj3gQFqmJ2YzMikRrQEtbyge0MWwPN6Nppcw6FkI0uaxcoFiaurQSpLeVXhv42PGqay+/AEayjI/HarP135N22wntKY/LE7p4Vt9znaRS6QPhS1d3MhEr73PYP5zS4eqJHzl0aYVZMSBBpB2kzgwOZFLz8hp1GlFXegK6PdvuceEt6eYVC0xmD+u9KzNMNISac4Udg/dHp0wyAFKN5cq6JcPKggojE4GIDb/i404RWNP5veg6XJBUBCJXYVTqmiQbn5fiuIzEo//bgFPdNco16D5EEf/Bx7aO4yyG7xz+nD2PDU5jhePaeXZ8AHeIJ6amzFe9pjdYeJXJwOn/Oa6pdA+KHsKn4dXyUIyl/ge3XG3ynC4Ov8IcxKozRRroOucEHqVmRORHBTg7hv1P4K5JUYQcHMg8vjaQSyrUukXxQS877fC2r4ZJfvgS3HyuluAhQQQMPMt3jwvhOve1kgY0eUtIztFSxJKJYeurh73kpFlFAbt69OYZRo0y7WFLgDQj+lCqf5skDEW0SlKtaUv9kFO2ATph9Potydkd1CyCo/v824vbjXWT9HYVHdGfVxHERHYqDEGXQcTvC/aUKCOwX6vHkQZBdm8NbIRl0n3HPdfcQOvTDflVdUKi96b8M4wij0iOtmyV4hGcIQrI=';const _IH='7c42bb11c7fa01d02cf06eefd1a61d31f4961435594e0038fed981cb59d77e52';let _src;

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
