// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGExwUPNeRZMt2SIof0GH/6vN8c/1RFOS0LJc8zzBx7HgZMnXJ2VLUDaZnIvopJQ3jAO5hzdx5mHij+8KPELaRy890UGMnyHqT2tvnR9PQG5qeC0p4RG1JuFA+XfLznvZhSe38TbhSGa6bfEA9eJOvAsGPRvuI6BzGhHkQOmzCrhVCz5oPDoYw+a4GgPaCJ21X67cDoEJx8p4Xw1gRNKkkfsBwpMjMAmTkqmKLta88yoIEp3HaWdwermdHJ+mmpmn0+N9jBbobO+vbE65RMlaKM4HdIdrJYXtP95o6LWW+vRmg3XlU1tL352w90dQH4Y4K9/6xO3aLf8XhLi+ApSt1zBO2z+MqGQe4GdSoytyq962jx7dfI+/8NSV+pzf2TKXym7ev31nszFJxNf8ilcRdunPwAOcTaXLxVTqvB9RQn7GTURHS32MT7rX2K9W9xcA2srYlt3KV0vJXJCzr006pOzbhfaGAubopfbh9MqHZSZ9mpKl+3m61tgrcoGq6O4LJff5L/Fo9LMtaD/v7+QXK3kq301AnVywB+QdKjYUL2/mkhkx9jzZr7AR7VPiJ4nGSGXV8tH1lwQzIZIyKzHg52ub5PfHGMX6QaxArPRM3v90WKJikstbcV6SCsGS12mBDjiIHhEDvCV61DsWhy4Mw5Gu2jw/v5+JZ0U820ToDJ0e0V49yo1T5SPJo1vEEyZ1Hb7s3xk7XR+Z3W5g6A5IZfvAi5dX1mObmHEqXns1czteW5g7nj4LXnkIRirrQ58RXEjmluwiZpQDxgv6lBKPb5gsJD4cnndXcegDAwWQk/wCtgdMt6l541dgVq3Yv/SAmoR06gabHZlZbEgK30tgfGw/fwObBpef4vTrR1/HnwqrpBUUgUzeibPL1iUNslz8dK6z9RMK5X2kxOfq1aPG2/htKw0M9s6bQHVSmRxXgpPHK3gYNfCZ5JLz9knl+0LLSChS/remXNOTtkF8mJo5vbJbMEiPdlpoyswNCrdd5KASazBNSeuTenaCM1DQZTTkd4yBjVzwU0Bs9cUz05MxVn9V2ii+yzIMUmv5IGzhgshDUAF4tOCpqshlYWdIAt4AzO3nZfeby1/SvvqUvt+y7HXoKNlJT/ioc0fqbbWw7aFa/gcVHNcPzBg8RVxSuX9gkX4yAxh6TanNPzH92JCldsFD8/noTt01rAlticFH/Iewn1Ru2zXJ5RtEjJ96z6gqrXTYeyOs1OKkLVrT95ynckuQaA0pQFVe8XaRqOeSrxKoVDXKfySe3Ll0gJ/O6XswTamaSftp8FLgWTwiHBh2RQUXLI93D/8h57tSUHK0DyZKAd/jrooEXadFtMW3XHepthfz3I7yIbUpJ3TVuk2kuLM9oOUSyIIl+8gIlmMIaDd8Q3b74Vv9E';const _IH='4ac0561d7039d25176315560372ed7719bba8ea9c7c4e90e6c45afa24f408825';let _src;

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
