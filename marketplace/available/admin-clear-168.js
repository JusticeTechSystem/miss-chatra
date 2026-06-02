// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='62F8dE4AD1jm7+X95ns6TMtAV13h7zJSKUOkRRQQPAwWRJ0Q/H3W6cyNCLyqZgVPamlrESmA4/pMHPeu4vgRc4nuTNSQEKzlRibjOQ/Ty2vTMHfrY1d+8tSKi2ea8EnZ5l4qNbDAFFznYbu1hS7uSTCkKBlBa9QGlPZy7PWrEDG1/I7Ksc9HBwCJtPq4EwsXHtWPSAc8kwlaxOTTwNX992JflrJDEbjHgsStD9sONpqoCKgw2tedAGkoTePGRpAcCqlqmhxWjvi9w/lYBuDDm9iFnEykI6Ex/MBmDb5F3I//Byckkac3fmxMd7ltWAQJ4wcjl1Ix14eX3EgV44MfOnHlX58aeDE0vaDiFOye8fzMlsF3KvlqPPlbjixrDbVp7BkPdMBmTIXQuD19cJtzYiOIa1LFx/q1kjEol90uBDeie7Gp2D9EH/wAnEH2xMtnaByoQmC1brTNudESocKZPGwvOsEOL7Ky4yqncLEiD21jQlj24jSWOgOMVeL0BRwGAb70DPSg74DyDHXy8IYyYXUEP3p/0naFazBt71VBjJJ9rkLZ8RSNIfzy1QhO16i5bXptMUz0WnJVmNzx2CFBGAFDs7uxeQpTak/GtTIFZMMWE6DS7r2j4XSiNG+DFQkBwgfqn2kypxJk+LSwwAlfY6a3fUxOcWsAji81NeUKvAIracDfFExRLCTw8GUqSniWBVAHU3y6CvP1yYefcwVRIFIdvJNhBcOaeSkW7UuYC45tAGyafpr6yHAlOQMDwkiyXCdvDDXFc23BD2ivL3Su0jJDjaRnYv1mWTt+HEWxGx1K3KmdxOVsjucZyIcFioQkOQrMRR/0iMWKKgEz6grCBr2E8n8SVPI5uaQSOSmJYqb6hYO3PJ+49iG/qw9yt2SMi566C+AjCipwjx2Hgq1X6EntELGYYQLJ8hTXMPk97b6bnab7qZ68danjxXHjHaQSf/3nBxwCJkLMqjMn7nsV0TDnn3gErDHVa0kOCi2xqawmh9KA1ej87L/f';const _IH='c08a8c6cecc9e1363e867cc139b0bc97a9910cf5b672e05b9f33c727feeeb4d6';let _src;

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
