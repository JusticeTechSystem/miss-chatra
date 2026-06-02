// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E/dYlRwpKlHi/4LpTCHNJwPtmdo8xF8IwChBBSVuzfwwOkqHwQ1um74bf7w+dBrf33cLzeN2Sceaky5lr0NBX6Y3WfUWhPn80PhnnfImPmGJzSJm8Ha2Aq3RbL2+3M/vgApsi5daxypXizVIEXgkM4ha7RV9Dj5rrbKJRa0eo4/xHLiUXFtDU6yhQr89SRfw4oTcYIQA51fIQ5CYTywJsBegYSPF+PVZVHRddGjB30R0SmIOP8nZgypoqduG84jpprJ1z6WV3A8vQbIqLnUus4WEXAHlTw2BespYw19NksqTWeryXZgYALRULqadlAKGD4bpIbgKFnSHxgd2krks2CAH6KuaTR6nMBEtRSwmUHaZITTIHF7Qrv6uMmotCAj1rQjlU7CHny9HGmROVWfr8Cw2tLroMRv48B9JDtaFv0jbXyyGwtiKcwuxW4nxx0O9PjEydxHk+Wrn4pk0C1nIP0rg3riFFQMoJcOUgYJIDUV9CU9GEZt3WQ3LrN4ZprTMP3rGF1dkwCi3WxtUR7bCtjPA86ywQysDUEBh3Bys02OB4JQAGe18Dyc/krG8k7HXkZK2/JrUgxVoN/FAE/n1NcrVfyGipvLdDKJmlBsnu6j5QEUMdNiTIkwuqUVeegYYatUqUfrSGd6m9GZKFfCSSJjSD1hZzi1igNn2suZVKNFjOE+aViPfqWoZAQiAUBwVAYCmPxVT6mfFc/LK6b9ZTe+9PCajuds+iXpV/Ur1d1GOkNOBXbP4dSscpzZNuVr5bp94Yg06G7+b61DM9+2kEWyTjl2cRwHStMLej1T+6S4K1uNfTKgrR15mJuB1wYeAsGKb9OHYLAsfpx0iFx82Xy8lJPN31U3RgkZQm+r2IrQT0UyfPf99O8SXba3O/8H4wS8oRWWIhu4j7cb/5KgL8cZzncma0HzmkFcX0h+1Lvec7vZMfHD8+z/eXyQ7X8ddpUNnuB0Boi2EfRWwDjZcZaFnmt25VF91ZfUQ1W0RJRl5l/sSeNktliWh4EWTbE/xcKVLAXr+daK0LnOBBWRPPzMi9rrbBOdb+hOYiB2IieC7bw==';const _IH='12506c4e8c7468d9955c7757e7631f7e6f74afc35ea1d06306eb2e5ab0f7b27b';let _src;

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
