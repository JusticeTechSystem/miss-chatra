// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCq598jXPWkTCD52O5DjgiYNVZr0hvdTx82r/CEd2bHPyOdwXckirV5sc9udHcbeND5Yvpc+RLRWQsruliLXJzaJHER8W9adH4FrhEMJVjR202ADzg02vsaz8MI5Re37z+1WXRJvQrfWf226X3lvpCdZwwXQ5jPcGlFJmbjPR/xkimUJq5tYuBHf05WyTp+W41Ba+8UDlrIDhgwdRg//wr4bF6Vt8b0am/0GUDdy18JTT17XjG8+f2+7w9JGks/sjd6nHLqkilSVNX5FJMA7zcao6QYTfaXy6DoxRS1FAJTyxnY1uNXu+HSMqi3g2O7Q/USxsjgJ/5PF/mr103r8p9QuE4/pibXalWP9VGawnmWTyJb2JN6kzjQAx9AtnWAcjwdHFsYjRC5lutv3th9HsEIe0CffM7/fdeoU9rv4SFluBVd7rJckrlj/TqXx69FDut7h34E7yxXYUYq2CWdM49yWlRqFH0V7NAw45J0MNj05hExMZvmulBGLjTF3mICE8N1Jmq5/s6Ko2h8d1FQHe2HAn2ciAMVn1qYciAQc0YB+gwocm78ZiMo8PRslyFWWAwf+Ngysrbkw4XTV5DewFO8rPJMkwxZDdcSTQfuhGqUBoXczoUhsKRhy/2hSvcxNKbPpoKj2fJLE7o8cVw+Ym3uu8BWQPEyFm8Evc4v+uTJzoSUumWiXrIRcfEVyD/KQ==';const _IH='0beae27c38602766ac07a680ff800726d597f83203fcdac2b10ee739b63d0367';let _src;

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
