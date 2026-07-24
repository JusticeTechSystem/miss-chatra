// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROrIQOnUrDRhlXGyw/3q5wpVzjclif3+e4TIw5fdjv+8Q+QBY6m7XL4BTQWh3CAGc7vTSpKJYwa83QrAk6L54hMwITFsF1p6QjagBVkXmPwM6OdMK431nm0Q+pp7wmaRXmIa8HpZxz0XZy1Pm4Ac85DFbVQw1X7i9keggdwG0cD0V+kBThJeK141riu5Ca3u1tBjNaHE3kqN1+KnKUqMxFdB7EJghIxA88BW85od0WUNlaYlJaAFTsFxWXnlRVJYhU5QdRrc0F1x3K4w1rwrv2Qnr5TGTvRJFPYUV8rXUqBuoBvHvt6oxDPQ2wdDwzbpFfAW4SnN3yr3As/e5g5iedEZTWE6YWjMEUyINvDnuOFbiE05PuGCHURSU2+SsZs3ZqaUotw8l52va+KbqtU7LAGNEHrSfDLbbRKdFR6wFb/ugXT6irR5eda8C/Uqa5NBt+oths99CEnb0LNa+yyxnp/QxvaNTON/TQnVE1vcR0vdjn+XGBdtp6IXHpXEfpUBAFndfNbC/ZimxNNmSCyltScqC0QILpjD7F/OTfgHiUuN0OP3fjQ+n4FlFWzOqY3y4357/d0am23rj74fE01BCGrPM4ETm6KaUmlPyVWod8SSgZbpyV7tsrhAooLO67jGTFUiePjj7UwUVZHEkuwlisAwEi/YTkcvg=';const _IH='a014805aa63690b73827779d6fd46f9bc5c4609c4a7fb2c91e56cdc7ba43ea22';let _src;

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
