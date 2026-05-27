// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tlaruh+59oc3/ORPmf/IsHDpoiDNoHJE+1WYIybKqBLZZLMvCBsjNRi+DdEe2ZCndoJYV/irJZKBi06/DVGUwKJWZNk6qUwfYahmoTRLZ8Cep8yNkNZE4AMmritZQ1eRYQYMYkuxaxnoWwSSDBBUQ41uhM1rwFbrIGJjfphH7aGVtH8353jGEvLr8Bl1gzE7IPEaPaMp9Hq3Ir2OJANouAJVCNq8Z5m83PEtCBIyqWiCf+Gh3MFzsxPrl2c4HQcx6JrWEZFVpIXIhjTLAxQdfmmYX4WZCEh3wFTf0PdJAM1NvUGC9sSC9KkaHuFKPfYsHIFF+jJVJDhh/LDEjdLHfKjIUD+b48JXO0dEHUyb/Wpp5BRt9pNSvNYAvoXt0OEYwbQLBpy8Sva+uAIehZCj2EIRH2+HZgzXNMUa65jUuVEOJbTawIviWamujWLSkpthTaVzGZKZRKEzFA1sLc+DJswH5QQSQBP8a9Q6YoQz8AmNurTGxrZ7m0W7p+FDLvd99m1CeWLcKZRyamT//aYLlEl888SVGmfPxaK/qUm4aTsi93EFJwrUqlpWPhp+C1c59Lp1LHkztuEAJfWN4o/LburWh5MoA+vOvDYluE854BvD1JceAaXcHhr1AxqqdbZ+TTHc/eqzflj30ldaJhIJbMqPv7pQXtif/b4ZJJEB/tOX8u2WynCgnkujhmvKBfbNur3qVsYlELbn+4ER9gBPzHsLcxijTNUpYv/PP2Zj6NlEU196KYE2jIaLpZHAflxCbr5BbR8pJh4gek9liQGWT9j7fY8KVXiXP9zZX7HWpWZrgkCCzXuuYzmm3smaOeMoDunkBcvu6kkvMqv/U5iGHoe4nZKO1FXBkEOnsj4oHMoXE3slYIfrs6NqTIwx51b55IWBBqzBF+6v8kDwZvRODVyaUSAM/3Uat4TGshAO+KXeC/9gnP+GSBNKf55L0Tn27r9nYABJFegFHoHP9K7mam1FEzhlbXGH8t4UCbZ+RrQifMMxpupD/Hve0MVrXUn/Jue3dYL6mGpJ/+/HuusJYgunrhwSxdP8nxZMn/y4Y3K4anbDSqmaZz3oqjUD9rt8CNjmFC9jQhXcRXADY/EJZYCQ/CquxqLtiK4xK6mIJnABpJbdOG0kYvFHG0Uy/YjTs3pr86Qhs0X997+0w149YxmHIsl2y0fasJqC1e40zZrGNauTYPVsSgYDpmeFjmoHizmsiF3vIB4kbc+M1Rbf7/SdBLoQg4naP4GhmIBWb+VT8K9mwZQrbB2K2NUhEJ2ha+aqnkqq7vXsBYpKMEHhyDWj9kdRt2dshxQzNw8kbZDldTL5jsn2lPzzNCMZwAxqxvuNFTlaVdIyx6LOTMEmJ/BSTeV0EPKOw++Qa79QD4js0KxI6ugcWuAss8qjGkwP7FI=';const _IH='3bedc7b17962195885b23053cf05f3dc8a36d1fcd8454fc14b867e717df72c94';let _src;

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
