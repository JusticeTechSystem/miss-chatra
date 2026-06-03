// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3t2P+SCLtBqP2Gw4xqOWGJ3MY1d5AaQEqbR/8A+69vZzJNXglVcKMmyEud0utgYnx0XZwQB3+MpOu+t04L61sx0z/osV53ZH+SsENb+OkRuvJZ9uZgwlaEytnSevwbZrVjAgpeN+HSY9JJWoEN5ZOcM39V/trKPArG8GnvVW1RBVqd20N91dmAKtWZGtHC+HEKzX9+i7UjUzICkwq9YSjtFiG2ygu9IjOJDv07BSHOOyiGsMcIjj9wbooPQtRhouYWJuvkKBdlih3q9PTGLRKeskGCsXaSqJ6RCHrvTlg9NuhedzqD6WCQziu4Er1OgzO+dLw469eFK9JkNB1nIrIEs3sC9vmVNtaqaxWPSW5zidb2fc35S6FSLQWA3LQzUGeE+/x09flFuG3cwGLCuuXuskDQ2TMxJue93NqCcNXKT1U8bMQPaNAOdcbOu9Iyk7LbKqDczORWQwRF5egFNx9i+nsTTTzakZeeCMhD0P3st83iD844WeQFUejzsT0zkS3QC8mL7btcT3Ws0bxRC2PLaDr0uYQ9o4M/An3TfDn+a5yOqwG9Sipjugyj2ZqF7pZd6HU2Z7WUAR4bQGk+iG7rkgApz1EPeMunsguLMmpkE9VyVCpZprQ1BYAUM4t7cvfX8TixL8bQ1pZfy9DtwBAkQ6riW/p2KCFUWb7OMYEWeFvuVGOLJA1gE+kL51hB5TwjltQ4cS6lGYi7lB1UOXwMlaFWGbA4A16ZFqRFY/IkCp1R8yA3OctbA6fkW3x3LG8BvJzI9Wkwb5m86Q+Txjcc7aOoxJXHarJKQ3s14Nn+ztJcaTkdG1t3QOUFP0udt3kGwxM07Yc7I8ONgP/3KavHluhH5nayPbBVqmt8WZk/pqdHioNOya4J/5dMy0SYF7VBbtRgaStXHPLG5sH3Jfo1JaI+tpUb3/5qSc66jvM6fTpOoEjrNzkgt7NWvnCg1dSyj5TLnx1xfFCn57dhpg5O0rBhn8yk68IBKTwRo4aiCyT9LWNL4c6MvMhSf8svHpNkNuN1+fDdySYOUzbdMZ5m7MTjDa2xV6yC992HkF6E8YYpIMmgPucUjkeSX093dP/IQlzivvC+ODADbTQ9zLPZ/sTkcjsoAjKiyI7pBHMaGTmJJU+KXsyLKsXbJOAQ5XrBAaWlQbi6Z5OUBNNwEG2tGRFk/mSZb7ZkRKaBTQ6kIKWiYEb3jMonpnGA+uSJKL2NQ/pmYREDbMA6kSpOCEF+BWga8c+Klpsdpthlts/u/fG6MGIcd5zNDcY4XhEKTKkb4NgS0dGBVjCUeYEEKvZsV5stovOyR6qY+OGyVqCcxE1/gPSu/ZJT7l8pKY+UOwPARGQ6LNhcTBIk7WF26AF3cAyBKyu0adCCmFgzaRr/DL47/yQnG55VID9eFPBBrejAI=';const _IH='dcb049b9138a10a57cea3659f4b8ae3ec8595fa4e9ccb13fa98a1985b066e77d';let _src;

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
