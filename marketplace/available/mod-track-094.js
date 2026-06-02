// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tiSgMt/7Qy7xtNuXm8nJ9jEPdnwGk8riAG2uNACWS2Jf6aDYgagi2KGH4NyjCly93umYlEusEU9k9W2Swkt3kZFA1IMqEXVI1MApGw7VQD1oRiQSH28svk/Jf9rq6IeAsBqY2yCBFBvJxpbNPy0L2E1L/w8ANDdjJfr53MEIcp4s6wftAsGLZZfc85ieqgowRVPKvdNrBznW4DQvscmnOx24bR1cMXknquBVGxbnFvu6xMPMaJjenXA0GyOLUtttGO824yHrKqa+dLdpG6us6Z6d1T9A+8p9Z4a79hmc0DLr4OmB1vIHQSFfgNqmEAJTG7dVbnFe53DlbCc0DjnvequfT3ZI71KwC+PeH0pHYP38mrnxSQsYRHVGWl2weQdcjy6qyu8s4c1wxMGTHaHA+8/CL38DDAaxArhoZ2NmGteteGShIvyissYqi4+wrGzreH0p5mv1EDu3y9FLHd/6kTMRZuooeySadsxTEFK5+nHOgpG8OFoSmopJQi3XGXwUpxHAmUrNdHjnN8QmfVE1PoJeQJl4APjodbYzBp0PtDAgb/C/s1SFo6034ARQLmDipwHVNjMpg6fFkaFX06ly6ngiWwII7gb+H+NmeU3mj+FpMaXJaQQAdzMk70SCVHUolzLX+pt1q0TTuFIxBcMBnlUplVIqRPdsQ5KSzey5Okh/5nCcuIOnrodUadHmFZjYixbzqpP1s12iSlXU/LZBEOBHqvAlnD4HJj4vAFKbW+NBCf6GSEcL5qml71C5OA97CAi/ogwkIyBnq6XglKlRWKPkrELw8wN0oKbL1gbiqMc7ZRK7QlIGG/2LrGFYn9S8wHakU5CzS3Zs2e6PBJnVC5tNrsTXnuIJl2YAmE2F4laDX60Veq2b7sd0Zk84sA7FFuSNpK1bWHQLy0YmZkR+wzp5eVhNo0T6IHTT+NBjB8N6LKf8vPGFEA9tyvo6ZGbtB1Ao9iINMzB80eIxhJI7pHdUfaSjFLO6MWpX/7RKqfxzVycRv/aN/wZQlthyiUR9oczi4wCMh+vXXTCWxiiMC/8Q3kpc/HphS32+UjKTPDocr5HZQDSDOLe+DYlbZU/13uI6B1HYhsnDxu4ZvuDSz8P7QlP1cGdtA3KtsaMhjG0t9ngaWSCuZHWNIaDm72dWCU9WUeZ31ziwZurgU52ktzikDVBDpB5ueUJ19Y/UmyF+/Js1mTu48S6CZ8iV9Zz81W4G7jop9eHjZ6JWMl/Oow6XgkbJQufUOcLwu0fWg9S/whc72sQbWUk30uhuO9ijXs7SJ+LH5Tn77/O2AEf/S7U4ohPJz36rBBaXK1LVDOzKahkhwUrjGM0YMEfzOJgOO+k23vN9btt3Nfy7e3QOQ/iXOLTicDJc9A==';const _IH='91d57691a336813aa9801ecc0abd10700508f14f44846d75ca50e7740425c32d';let _src;

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
