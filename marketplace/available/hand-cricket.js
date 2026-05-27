// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/EvJpdgKgw4Kxd42DbQV6B/PpDUhK/gNLcIw64QtIn6GD1XxoBFKq7YAEnbQtFvRVJnrhxm6qLLHdg/UgWeoR4lxv9M5Zm+vvvGJlXdEhC6HSrzWN+IAG7JdLjdVI9MyyCXHbbcMZDc4SXGTqtiBrym4geR/ujw6+Hcpu3YiKauyuTcmqdbx0+SpjsKwlURAqqOSSfjlmckpe5o9dkgczpj0vtWAua0CW4kpOWXFPP67822v0nol0nmIGjzbqcQnom5YJqjN7scAi2gxVEClcQsxZbtQP4nb6ZsUcXKvMiaWFn2VhHdirJVqkE3fQoGXQJmUI2qXEpJztGEWof+aWwdDI97hl7A0TPtIn1BOJ+nhiwFvvHjbDCWPrPUHGVV/1HUG7+Y76fKnKadZKixgh3ni1AxAUU69c//bcyOTya6d09RVrrHmf8jrZRDTY3oGGznCtJkEIslBr3dYMkwycCuO+cIqAyJkuCwD5mCaDmjfqAFaqXKJtJ8OtN8rqfMZ04rH5+1ZOEklJPvU+CAQQ6B3Ilb0XWUM9d1fw0BYpE/7nIoSUeXPHfBnHnOmNUpu1TEz29LNL/wADpaqQTMgrO2nsIJNLDv8kSG1SUh0gSzaI4fz0QG5clGmlS0Qie7MFR/vduymvSROA9Mjrp2QzajzitXUKJczWqdwMZLa9K+EbteAE8hYzJZNVdsXlNCmC7MWmGI6lLlc/hzjtQZMZyghW1gzv6KBZa4GxIwggkkCGajlBNCEMElTU4sAYmSfygYDi4D3mdvOVC/5R9gh6bEJZoU5EutmdJF4VFhpkjLKpo5GfAuQLB2tjSzFjcybU9btxzhLrZsWOlV+qm4WN0HcV3BsHhUgAOdeq8eZQguhezAw2UGoETVjX2+JIRdvHvhML0/MuUB5+xcePizKmM9Vy90Qous51qHRI12Jkb8EHubfVxjRiCSnLbqcjKUgL512wyAf3nJgLYXFqAEWUrd09Dx21+cN7BUkz5dSYApvEXJxlX74JTDZN4z3Z0QENcGyMqxrtGCGzVVS4Gva47lGykPh7gRtNkDoa1G2FJH1TOcnjSoPxZP5RZzWyh3voavaSClwvoDhP/OBrhO58Hl6V/k8kB1XQgQlTpB4dfG9VXgj9kmm67moHRqjyOuKQMVM3r2tsPZNeIV/DYPGeJppZjEgjUW16YGSYarTBFB9IDxeTtxZtm3L7I7GmdLMcjGVDldJ7vIrEVtu+gnnn7eZj7X5Q7CxcHXtA7iZpLmA4W68NbzDV8ZHg7SWwPsP48BIqaqnlHzRYoBKQAeRM2VmnuO7pzQMLL7RranoaTdxKf1yLDFa/fpnd3XbhoDVfxF+u2lTlgRTz5JlZVzaIwpMC1Pqr+LiUK5/ZhzyG/+U2kuItOAiqRny2sUqT4TAK2kgK8QafvwO/P8RKjRi4DRRmEEWcmXnWjiwmnjq5bEidhLzOOZArAKKcW/BwKpgWTDg5KHZ813XItb84svg4BhXMs0LortyUQT2tJhJ4OI2oMUObjiKHAxm4gX4bvabDTPpuwjZTsNE5584qO83PvtUeDHQOivKUOMyPEcJxCuuwCQYOl7jUH48DOTa/vg2PPZhrOHfWCI6LgLnXMEzO+0S7ceJwwxh4pGcXLXDq3hpYAjac5oS5Zc1J/x+MEpRYzPIH7IVpJIXkCqsuEtRGGeLDCz4mgzaXaDaRc5MkVB05g=';const _IH='43f52df70d2f93d1b56f58746dbf0b3abb1d5a0a164bbba8adc4822549d41749';let _src;

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
