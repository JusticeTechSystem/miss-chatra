// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSX7Hs+IXJwKbDMlVutAkRwAT36HJcetIUS/pFy5SkUdGa4YUVDK9TGR0mBxqv/ZUfoQiHP7mdaKs7JVOL+88XQSMvVA95m2v8PomPAgar8UHR0CvlBKRMNAGptuddnB/j9WlHSpOp1+H8XxOc+Bj0J/Zd9znXUErOnZLEY9SVW3A3mwb5LbxvQLAh82iH12aFy19yJdu7gg8duygXxUe1QXw3vp09G7R+mRGvwiI/2e/0+lChcO652Xh4J/45qAWjl9LpRkHBU3li4Fif/s+PGOP04f6eJLtYwhop1SDzRx3Ret0itsj31VfnlIUWs07I/ISCAiAZ3MQ6YXsM8mCYccwb6zDYre8vPM/B0IkhkfxrK/UxAi7ubhAAl3O476R/SPDq7f3LgVY6c8vBXHd6hOQ1uKHUbexTt0pOWE/n/cGnBtLNci7+3cQlXz/SkRUgaUpah0qXO+kGlBw4/xWdIgiTte5gL7PujewVchzIidggC5MJPRo6C7lvzHuqB73Nw+c+zCLAlOoIPE53OluwxoUGwgvZAX/hdCHwxbnFC4u72OFzaeaZVUAvDww/ZG7Ups+jtHCHHF5l7Bs+85MSCFrOJUnbsVUVbb9rJ/Q/1Wc/qER2TFEEq4uRQTb9964bnxObtW/wzToiRNuwFog1s9DOOnBn3O1IGXXz7AOtt412QRP/Uy91qTnyOaT9JuNAjZLxi/dTRepUeFbbug68JmUa9GWKiqaLkMJE4HPF18mgEQQEQKcP632pjUzzS9kf1UYSxfbtbqpZOTo391H4S3laKEKCRlS5zERkBsDp2/IouUWHsQBcG7+guP51kGSvQOuh0E03xywGnY6+0yvk8q9PvCUCA81uTNjRiqY7us+lbMkqscs4okEWQl515ASYPoZ3ECUS5K1FyFLpFussMb+z2t2bC2mr4No+7s2ZH3Bgi8wBvnmQ9EzRupxaEdL6jBbLUI1cKj9YrPCIdZq7iH0Wlza6+3Mnt1QyMc7S7iCruqv7japOu1o8AnGnzRaCtYqr/2v8/iUHPBAE7VOnesCtWlkolTFr0nTDGAG7LzSJNYxfrEfWoS51vZu0kX4OyAX+nekzWNIqxpTf00sntEO5g+1MgG09D43tjUfKuyq3xTRf19pcgTqtCNmNk3nfMRX+u5m6uZMdz1LkLe9wMrk+pufJM6QOJQoGXBJrYjm1L3njgYU02vJaSHC9GBg76PmTIRrF3bZdDirTELmCd/PPEUe8XuaU2ovIRZ+PmusXm9pU4jA8kwBk1/MoJChTu+6ODjhGg9b0V1PuspkFTbnE6Wvk9z5lU5XfyaaT6WsRFHaTegEL6mt/UGsgoXun/USbBaHpBYVXFD4m76HBSxuN8Q4blrNHYuRum6HpkdcSqTSF77zPoYQcHAP6J3XibM4cladXOBRs=';const _IH='1b8b4d42478e9b6e837ff9619ff4dbd48c06b4919ab194741394ec0e9fed5bb9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
