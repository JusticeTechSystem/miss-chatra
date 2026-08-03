// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTtAvxpxOUjNGBJ+DfaqEJtnk5mh8bA/wyBCRu7K7uqWpFWIpP7gOJqQGr9Suv2hLeFo05UD1tqSjG1HoLQ+9VT7R6K4wrqhNoK6L62xq0sdaJkC2HT0Vdqcm5AJvu1nEb4uCyyRWmEZ4n1qHdN0oFGD5eyZrSnEnoK6JBvC24TlZ72kWPVh3Ble5ayTSVcADDn5y5CqOqjzMBRrV0wTOllJnWg0FGYg9FF/DP/4tbprm+KMyXfjsQSidM1ykTPGsTqoIsPwTugMrsVgFhMCymf0XGz2kEiRp4U0IAog0GBzHpZcPDYka8YB+6TYQDum37wFXK54uc7PppVCtu5tLG14UA1mD9tHQOHrZhH4i7R7BqVed8ZwILW7L0BgxV/qeJebNe7EBrQ4ISOPPtK9uPmnx3R2VKVEM7YqzxjdV0ai6dA7aXuPvFNjyPqQ6KRrpLFcrtiY7sIwY4kiio/xxO0cQo9WRpWvv185MftSDwswi/k1bWb5Sv4zG0NRV4OkbRIWxDZS/n9o+abkpblDBEezMf0plvsXJgxp5iaOMCxN8OIsaKKsCdxWJ3JgRd+X2v8ZLEZQ7WalrdxWIkr7RSx3gdaXQ6v4jTrk+/b2f3q1t0DblWkcgVXV+7794kVfREqKY0EqyfTl9G3FcE92kpZdW7CdclaLcIAkPicMjfJQKp3RaFQlF5DhNdvkNQfuNdbykghm5oF9eFdveDkH5OK85ZnUev33ZO8geVh9hVjcyLSCG0Q7DKmB7kK9bdK2Ih9BT5WsHfFDs9FbP37vc7unqK7zGSBeRDAq/QidPp68SGqGVqM2wqhKEEXPCjFPQQwbnTUgDo4tygTseCouwjTpINGQV9hiLCzBXUoWFCvaeQF30Yqn/SSxi0AoyG/uKarc6MWEBa3EcaSwfh6ByVlfMYpQTA9FD0XBFtyQbsIoQ44m3SA/CD9Stk9U2ewSGpTUPocr1Foh4T5kc6vtKwh6DY2UTwRdrjPoDfTnrq/+TFAnRLNn0uHjGQuvhCM6HKUREyICu+Cxn05IQq9VTQgrKBjLXJDdbDzTE0Ie//3po7/XFtcHCNgTerWUTaj9qyzW2uudrwgJnj6jHcUSgY9cTZ65n7dpC+hKrKPFQkBPuoR9QlPFwr5wFuz/nGrkn7mDsSlY+e7CkRPfUgk19i4FKDsDRSM+HGyParTyB/f9Gwxgr1FUz3pI5mu7BihgIl';const _IH='5c0db6d4b7034c896ffa124e4daae0bb6e2eb0c249674dec68f2a12a206b66c4';let _src;

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
