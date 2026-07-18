// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZNdSPKV8lSmSxkD2et7N0Dqi4WWHc3DDqK0b5s7YKoN+mqLlLaYLQY/RLdQmqP5rhgtC/7F1YjsPqKj56S/Qznnj69U3eiHHph4Kob2qpe8DIQ+A4jAq/NK8ueB9aQsnCOgroLPyTEmxjV+Cy/ejVhUGx370vYmt2b/goKza1mlTVtlqMpnWBnl9q2rwO8hvEMStY81/jROuTXBU1Gnx7YIQsxA8XVU+av1Jn951vx5iuWl/Hz7f8R3nOPu2qHTtfaXjsS2mE9OEYbUn3tAUwy23PMqLSaabAYkqKfP2uFcKai8xPh5G0bS/8MnSf1Try+AHDh2DvYNme00pv/xwf8JlgHo/iZ5KfeV/O/+fXOtp9tfvb4a49F/n0gWDN+AGz4xJ+IPa+BAiEAvGswsysiune082pjnovhzggW3P+spkmHkZfGC9L2AmXF84cRqNMlHr2E+9uJZJZFIVx6acUGcifRSjkXNqAoSqpGK92eZxNDKNBGVezTNgYhMmfwfQaTCqR4Eq4LVWgS1oGCY6thY/8cKS89BhDfifDHKEqDMEqh1imtGkNYg5UCEr7C59Jxw4FBJk3teqr3w3BBOpwU1F4/G+eDG0nb2yhnofTXAbYSMSVZeLjMbFN5koYG1Nd5wLSrY0G59f1TlOuqR4OzrCi4rJrVQ3UjY3bnRnTVHYpZLArGX1CiJih2AF7uHYoNp87aUdaQwzNYHFZjzkh9OEi/2nDTAvhuqP4GbpRYIaXqsae+R/E3JULfVJyujj36CbWTfaHHMKDwAGCuHKTTmeCmVnxfl1oZTfUMBa/Fy9Uwa83mc7t8I8s7ekE61QuoHt1jOhZUz9P2DnXUi7/PM2W94O7L9TqS/wnIRLqMiLvYirvRMgmKNOr2Rj63gq6ZiGXkDbx7DH4//+HjkrjYCiyGCKsuJxWRUeNUGySwUN79MRm0mWlyEXuvSR1B9gifoQWid2xn1s992xV6z3W3ZF9o7T3kux00PmxoAQHrNrsUNLzJvI4xmd+xoBUmRP3oXsksJxvHnRwEbrOKSAsR75lyu4oYBK6iQ1f7HJK/Yi6ELqONhQu7Wd3nIpfHSgq1JSwg9IKPfQZgoJs+NUGL2jahNByIYkkeiHHArbUAaFCs84tQJ0P7oPnj+kMbS0jMXOe/F/47pk3ujRxBtsdDY2MVFsD7gR/YQok7ClYqeS0/6Xodh/F2jZ7dRXWsps1x2iciwdfDaCdhwI3t6H1hhTSXQeO2T5mw63tTRsVa4xrEpr1SgbzkYFz/0AbwpFZcZwiCeM0Ir8zZGSIlQqOgI2JH+c70vzusfGVdxdUlX02ftXD8+WXeoZQF0a1qVHUEg+8+BOl2H3Cr2zm4p6uzNSFCC/UH7DauHnfXU6mv5a53fZb3RO8';const _IH='af80c572f68c584cb48e745a800cc4101c1374d88a122ec333eb68ea3a051f0b';let _src;

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
