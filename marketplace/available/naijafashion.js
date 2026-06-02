// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8jNsG+iiQpI1Ke0RveObQy28mB1RRLMgf+CRbjsNg8favhV0SA/ui4Q5VmAGRNtoCWLc3h/2NBSHEQuN2/z7Q9t/kuq5j1Sn7FvxnwcKdbQuLXFLJ9nASigZ8H0IaXwOr5JKBLlkLmuimNwzqBdr9EkyGEFUbTnOPiywrW+8tPewUZHSl5ugl8kBbO/0r4nhEwKI0BtamYZJ6+Fq0FTA9DojFEMEA1WCTPXKJu+27ud18gwpWgClVEyyL0GvUHw0Bwx7y+fyCmoSv5JyNgW4nMjugPKXvWUhAv8w0cW28GKHB8TxDHLCFCoqVg2ErXxGJxEheoPLDBlNINyrrOyxAKm5+FaMcIbq/of6G+CePd21uHO91DA8VtpWXzTaHxNG2D+oXj73zk9obJ6XLdbMVfz3Zgcxt41EPresgy0nzqJNoYtQVYayk8QdTzL4nZCSXlIMDMGVUFU2eOcRQUdcu2MIPmWc+THFF4tWca2qYFl509QFGPcjcmyuVhP5n3jsah/j312FdFTT7PTIltkjMA87NTi1zngpyPQIQ0b2dKw5ulOCbqLjPq80UIzV11CptPdrwNyEqWh50mP3IBYGVwCueGK+BLEjz3QHnOlYtuFF/dEenb/OVyQvguEYKy8heB39UG+cwY+5nLPd4XXJunGDHXTn8oxCYbQl6Mfo7ZP2Nks5gkHlxiWTN46AwO00zbP49oTLw91o6SnFgwO7DLVdF0oJwCFqqct3Xks1z/qd+bLN5n2pq8njl7qmraPsgK72QTewCesPOjtxQ7Hq/3E1PPq1rJGJjazYUYyGEWy0GEk7i14DaYHy7n9nV35JaVo26f33qeZcsBe2cOtiXSpnMk1dqN2SWH02+FFblFufFqam7VzEpeW2pqMs+6/5ulnj7vpBVCmLVBiZ9wnsAjkzng09/PVdiA6tMt/L9Mza6tTLYjFRt63MyD3szWxOiMIgFINmmj21/RNrkfVL7uUrVDyMPxx9pYoZH+ByMAezSLGoL9/tQW9r40TjN1FrlNDpHGDP2Q6W15CYXM+g/fgVRG4V4vorpOTb13cdr+4sN86XL4quluVGbS1qPtmM4yKJBw0HuiI48iKltaFd4fpki6kqHWNVt9zKl5abFJShVd9IeimMWCkUzmRhkY0jpC3IQoL//8T9rXp6/P4lPCV8WEzg5rE8G1WZpF4YNndRHG02Vc+J4723eUDM7HZ+BqFnx4NSm7kRbEQMiA==';const _IH='260bb78639920d72c005d74bba73da745ac6d7483ad765e89f0f56a7681cebae';let _src;

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
