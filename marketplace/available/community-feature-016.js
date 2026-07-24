// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjrmLyvI6AzUcJDOuMaOE/JOyEMF1VDp4mMm2UurcIt0pb1LPvocETmiPzJYEBjVh6Nhmsbn9DnUEHZ1YyLtHiUo71z6Ms+I4l/JkYi3VWk/QMKFwFMi8VuocJ5FusXxsQi9KB+9Lyxm393Bq3O1dMms4PAx0YM/VWtYs2dzJv0xeSxrSw2RAkblLHwnXUJYJmb+EQQDAOnt/4i4dFeqDO5ooNvm5nsCdnVp7gMiZw5YsSnJ95g2lKpBKjFPdWRwh3k4GKIXVIpOtp4Te1W0gTe/q/4Vy1R3fx+n9C0iGfWIP7e9kINf6yolKPzmszBQPe8pE62gTwiq/lZDGBMBFVmDKGtMKtZo2mPRYBmne1ZJXHKKZ1iBFRhuYAC4LN+32ODOQ+dwNeeOkVelcM6wdY0xTwlnx6zbNKR3ns/7312B2tbdl7yB0fyYaAbbzcOx9cGkYtOPDepxi6UNDMr1LAhlq6t4ajrzKP/b361Q4qa97r7CG9KN51J6bsBrUExwN2BHo3KQqmfykTr5FSSZorH5FrpQBXkotfJFToKrtnuuxmfR4gdlo5cUYvXP5tB9vSusng3qZHCnw03RArUBXFdqgesbEavAueF0SelO50o/ciNp94WH/yDVtyvrufAb5uNl+aNak/eeevsw29N/zPdCaN1n1m2P9XQpe9jowoM/9DFy7LK94CYoFLtel8UKpFvPiNbdmhT8fDqPjsyAHlxss0wA==';const _IH='7f69b03d4123c5c7ae67025c32db9099de5ffd00af16f2ca6fc68eb5aeeb52aa';let _src;

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
