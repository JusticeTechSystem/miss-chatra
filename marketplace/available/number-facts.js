// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='99PG4nE+bFmlQPezuEg37l9cAWtrUkahdM+YuuVDkMR7UDNYcKNk49xKi/9R6jr2ggAFMSVL9L/lWlsMNRbGNFyvtTLRp8YauXs0cII/xeGzLyIFyLvue77DErKPro7bbpMOcSycrZpU82AVJM6npLQyL85nFZVD0wDXQLwzNlH105mE5KNjJy1nlEEU2d6XCbI0EkQQGDjuVUTBYEQcN6rAhF/RnlQPEeXrK4ezykRbLBPfeQvvtmLwrcLhzvGmIYbXSqlgenC9K3neoKmHAio+vV1E82K15c6hcszqz53WNewjjnUu8TSnt7BITtK7dT2OkckrPl5pPmbU+p9/DYiNWyg+489Bw6lIoUKrbN1wcwZg2+PpJFK6Im/+Q1fv62OAEEDVKg/iT48fwefXakr/h506Lid0mq9QsqDRS2AB1++Lm26XfWjV5kp6tYoWaodQHtdg0vvrlIcGfW2qbLyn0N31GOJP4P+QpaI0hQ6zbDnAsXh+Xk9wFa/m9iTD+mYkpq/Z5gcyv5ssSeZ1wLveLPUshTQUJ9zRE9c0vO90EYWLJDF/4kwWKNMOXFWw5zNuLQs=';const _IH='eb772383b41603b2132ac7aa9f6034e5c22ac64dff255d9769d7e9253c37aeae';let _src;

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
