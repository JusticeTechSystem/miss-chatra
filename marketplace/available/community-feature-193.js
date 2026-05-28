// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BXIiAhCiHxKMQWiRfw0yooHlmOvN8SwL6EaXZ+eYnanFG+sXOBc+86AkNFxKkIAgnUPzXh+n1o8VaSufwsCVTsgy2UO64mWZo+/BE2r4uGdYHmqNOervs6mq9Hzh0Q9T4AZxzf4wLZ5IBpKu4TB5UC3XebRImWHNflN78aZ78B8R7wKjtx/6AjEeJA9VL6HZrcMgNvgVBkbUrkGJTHFnM0BVpTRVbxAuP740n4sQLfmptDlrqaQ9at2+S+DYYxWbyYtqNhOdPLpsQfZ0rzv+9CnjqCyB65y6pyhCAwLkMql5J0xyzQHNKrSRDhGMRXyUSChshLzexUMnNtJ24yUH8N3hvQpneWkFD3d/v7KfGYdSZlT50dR+meeJ/XGf05aFMz5nVsWftiHNedma7Y9YZheXlRPgEM3wX+WLpkYh7i9PKp6Xcwhf5PdBTapSAShv7PVFiIzJQSpeOsNqrBG7SkdNYFQGSVieiJPy/GivelNDcNvj54oJhyIvjn6gPfe6NF638LzTjfV6FQfwmL2S6vO2O/D0WhajndSw5uXXHoMU6tJ49WdoYq5Om+02j4GEi3FtEgNKqpJ+QpsLzmDnCvxsVKcsPk5BkxZEj9CmXWAxgF867y3cdFCsQp3ZAH9b/Fflh4dCbib9sBupH6rj9ITOn7M/kd+HZnOJ5zGHwN+7Z+EpODVwF0k6wRgEDFhSmQNtdRSd1nKEbbu9nWSyh238153WJ+6FegRdHnM=';const _IH='99d687ce5fd323583bbd010a350462eaa5924a87426b627290f09394c1be1e2e';let _src;

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
