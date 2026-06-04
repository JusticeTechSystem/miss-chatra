// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9SRxm2mCjJosWxfQNM5O7zqhEDjOyB8GFoop0h/zv+0BSxHvjtAegoMkFvoRvLYFsyjBeYXakxFnaWR9Gvnqjwj5WZZzkMkar7ckA+A1qfKR1xvlMqi6TojnpHpwnTjSQpHjElMg5y9HsKJyLlaseYgLm34W3UJOfYZxx0pwImLc7oFTxWAKLgKgg2LFuQ9QQ8BlMYe+xI2WTEdeFQE6Lmzu+ML/2+D6AtwEHzqra3PP5yOTVL5lWsSFmE6iE7KG1jzgfWlSg2SIKKJZHM1Z+6ydjWIU5BlE8Nxi8f5k/5fX7Jz+yLbhwQVtgN1dUpzok2uJKQSbBcWFFvdir22pLhefPgaVz2sb4aZfIpI7mnqPR8D6s29xkEQ7avT9C17vR2w3Uuu3kVGBlqRVIw5m6pIhHZdrBusZM0a3sDTdxKTCgT12rfWVksGdABWCaeqTFmTsE0KeiCe78F9stLBrO0IKrgum7cfLNlnsASAZWiX6Cv0rFhPQucdT/mUln9956QsluztFNu7HADmWCdjcTgTO+clJGKBVhVZp8/Vv50wvn9goMVzEhOT3co4pSfs90xaHoW+Z8jkizFQZWCB/bu2jlFAjg8TeHlleImrqWvDkv1eNmlAxRQZe596wvn7lhm3WpqFRsbTYt9g9eSOZg/ntwa8bQQtIVsW6wm6FC4KyoHvqMcw53+fG3ASBG4EVO9ekLEVAG+FhlVTUfj54LEEW+Lebntup+adAOp5djtCwH7hOQQ8k7/DsbTaqiMSZpE5teAtXHrLVJycw9CSYLKIFVotC7vLqLr5uaUREK3Qe8Sgxfc7EYP0oNp86/+0rx1PWc7Sq7Kaw0DqR+JQxpDRl3bAaDGo4kfbe7jENK03sVjfvcQEa4OCgEfBL35GopZzs/dAJhU5bUEwJQ9mrheFlK+RYWqO42bNw+mWbSV1QlbgzYlW9X9OeYLxEr9NzWeyizeMH9kYs8dmpTsCA9yC5Dr/xYOuNWdGNKYKEKe44wOjdIYuEuduPEmlGbI07egJx0MB5MOCFbE8SqP+Z0JPW+okFdA8dyqiguR4Y5hX0O8riMGazmUUSu4ZD2qM/hhF8JjGdrk5fuCLDDaj/Hg86e/pT5pkVhlnDVWzjFhHSxK1xB/NBJ5e71jD8AgaCaO14aGJAN6LBxvo6Plh01/wsaoBMRRmZMVGmolWbuD5iNFMo1coGwyrwHC0VhzhxYOpsR/BoJi+z/XzCWMv0zYR5R3CzPECAqeS3Fi/N6sfCalpE8K0sPDQS7yXU2M/r1+QhViMYgrD5DJIpS6jaBriCOvH0LjZlKLqGgyy9Drp7rAS33FaTlrp/UGtG2BgNjQW1Aa+hVd3P6Q==';const _IH='2900d598078cb5417f231341beb0de8b7268d7b0f2e21405ae259645ffe5ace1';let _src;

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
