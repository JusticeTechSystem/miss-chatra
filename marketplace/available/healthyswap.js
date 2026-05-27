// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6UDFdOFp39IN5N/DVpjDFMgOjo6K6+pfOX9EVtsDGiZfM8mpetOkx4ICtT6QYfwvzwhHO7iyNlhJYxbLHNfqu5DiZX8pJK+oyfLXukL8MpgJeXZj6m9z+vKL/6KhCXFFfg7Z+CGKsIpBbqsvz0fcpmBvs50sTCb8xjczd7jn+9PvNmURhc5OLhozyjp+iIBxjoKQV+fDlJ7cWgU64sx9i4bId5nnbnG0ycbU+zMJjU9f2q2HU8fIYyjjY/PhUUtBUCtzhSvdtQbg/95he/j22H77KFd+c1AURUzjITsCFRHRcIBD8JHxIWk0tXWK/UIdaxoet/A25dZw0F7qkbwoSYNsBx9MSwWichII8QTJ+3BdYpUwJ/FIfW6DLiRmAqfaKf4tMPmNtaBgxjdO12ZYni+gWGk6E8QFYA+WVk+fQKhROZ0JnmT1g+k42Sq0KLJB+CfzjCF+6z2sG1hg1opFkdKv36qAU7nH8KQzGIRwoIPp+5AgB3vFXjU4qjsra6Jd6JZdnCmQXyuQ3N+SQdViBXTWgU3zvAbbZ/TvGaPuhors+DJyXTBpB0K7CjrpCnrwc+j01cUNI8gmJX0ZQQKf3onQqij+wIZwl6lGstzx291QF5PUSxLAmK1IwBmqjmhDXCt+dsF7VwCEvpmNO9tI4DG4Ko8ssCJmC7+C4geOFntY20m0JBcDdwP9KzHrS47iPC1ciVal/S+FdjPxWMEZIzq7a6wZV7dlrwLBDEKftnzVSZBiW84GPinQ4SL8ZBBHksV8Xlzxlnl9zYt6V81o0G4lG4ff7gWtL8m8n3NAcBHvtDRo2Alzs/QlTranOsqXkhS9vJTSAkWme8X1hebCYXOTSsJApLCksojRAapMglA8E6aFiagd3ip83IHdPpEtb0e2vM+xhX24A7YYyMddp07B01fyxZWdytIpkKcmOMyd8FUL8/bNbWNvpa3lfscd2COg7xrJq/z4BFverwGYxlV176czGZjZpPdXv3svR4CK1DQh2fiHhDgJDQTlRPgzb8BG4jD2Q/5drGLUT5NwmlOFlGVu7Cx/lYU45S3iJfZsMCDpv7VSLFaa1ip1c+sNE85hYnh5mecHtaZggC9cFqzI/5cK0MkvJk2v+GA1h81EVRkH0Y/ce/MSx82BLY+lPltyHqbdhMiOAYHFKUwYQB4sA4b1A+SN0D62l1T6F2tjTbIzkiVNTUzKo3R1h7bw9z6x';const _IH='decb5a613edc3eadd49963c89ad8565edcedbe1a7a1dc6dde77fb5cf1de1e581';let _src;

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
