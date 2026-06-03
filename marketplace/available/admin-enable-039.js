// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q1kCSKaLIxIOyJpaq6SdVaBhXE3FyFPmA87e2BdqWPvutk8RuIu/89aLFrteZDLYaLE32aKWQRmSup4u6v5PLPAFDFeJUCrvCGxusuz/LXPa/DcgfFklpSSs3RutY5RnJ5ZX8LbZWNGcKY60SdcomggXDnOAJ43pPsdC25YfwJiu4F2vT99y6l33RgyWqtngK3D5UK4/O5QbY8dDV0KpJBcWgJk1XSAP5NVNb3PTgim1hOJlYX6HVEy7fkmA6sSsnPNAZ9Zu4Kb2THlwBuaAtrX9Zgpv3Kl9LoLx/+w3fw+iwwvRMPwunbYDX24RilJd7UFrOuR+YGQic4jMb7jhemqhV/Sab6xYk9tJX4c2Kfm2TUYH+XQitxZfabNRbW3jixqEGBj+lKBzxWPDXGQfaTPjMBbbrNt4fG+c0TdvEr46kMHMsM6ZGJSMxk5zoyXNudhF90qJM9IDyZLt2l1B5cWoKkm1EeAuen8TJk6Jk6F2CiboMlEeBlVjnSxt6/tgdowE9wS4EXeA060M9U5Qak6cpfUGHn7HqkEkSMLEDhWrzhWDty+5XyaV7jMBC4x2jed8KV4ZHA2plwF9reo22/39JjnFg540tS8rL6QeXP3CNPEDZKc50c5mIyl5MzUEAe+92nU694Qk1r3MA/cSHi3CWLkQ2ifGYrgB5VKkHG1MNGV/P+1HDbD0BuJW3jYcJFIEYs30C3U3g05893yf25sk75eH57oVanv5GUUAuvyLubP3hHo4GoS3phfFs9sHV+4Qoijw41W5ukEq28+6PlFuVVES4NAOKcOWKXJFJHP/x9kTJjdmi4GjjlQghVtPLdavavpOhRH/1QMhIknqQqq9ZpPnQ4p4iwmXJsvoUw9t2Ip05dWwfGZWwQyjHC8yBliC9QK03lQTAMeQnEPytBW5jOTOtVEz9UVcgZ4Jk6MOHBaTPpJWzwaxI9CVCXpeCsb36F/xpDSDl1rk9P6ozV76FS6eKyyPK9iNXvdlbB4I5I/CZP8W4gVMO4Mq';const _IH='c95e6909acc08e2d9ec2d597f184d69f980e9a4812dbe876820e2319e4277df7';let _src;

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
