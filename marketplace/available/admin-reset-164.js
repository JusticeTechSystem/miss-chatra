// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfZTm3J5dcbeIf07R1KjOcVUwpDbgim3Vl287HbAiwUYhNcpCV1eiVEed25Gdj1LJ1KSu+U4bBqXfW+fBhFzlw4ojNQYHMonxQH8QkioFDa4lkXzMjpXIinOAJg5a7e0p9zPBk9cALxAwErsG28Q1oBVjRHKGn7g1ED1OadgMUOmIE9/J2/cu4kXZp6Trg40X6AzW0A2hkcA9jmUmuMAqCdsn7Y4p3MfFs0BMYTmFaZAj88rXjxBr0vfs6MsIQrGKoqolY+EbcIhzqhVM6Xhe6ano2VW+S2Ak/EYY+gCm/xN7AFYFu3xiCi2eo/EIgD5aNkPOYyhrNZJout+6z8XxuJM7/FhIahjWlxZE94QaI3/XdtTO9nqY4VoiuZSm4VCsMi+JUn5sdGGE0zD2YcZ/nZWFbBS5SMaVUwNa7heaNOLDaeCYU++6GkrQ4b66TkYMb8Bfs1kHmNMHOcN/mW6ROhA8sssWArroLbjwk0Q07YJja3aqVgcAxmLilQzUsIr8mq2xBdyMNWBUyMNPQAy/i7bKUjD91v+QUE+uDyKnmK7PB2Dyw7SIxvQx+IV7QzdAWANh6jYQdmMwuxi0ZBKE500c3k5Eqj7r1T6qfTojTfk1OCjFh1VWeMSLE9xfJrFTNIlMqVPgRKjogOCpYalEw4aETPLaU/3iIFBD820EB6ltcHrOsl6vT/hj1bHHhQbv1L3Fng8gFFyCxOwhH1hhAuKMf/BSERWEyJPqlqpXa+LF6HWC0cOE0BfewtKgWGj/31jtfAMG7DdB9hPAFYNtb8wAMFCMz5+psDM9XunkEf9NdMfEkzUlC+BqDsufabenQ/iRKMhk/AKZhHSmaUUkww7kvlFvI8KiWJbW6keDJXKyCtQQp7R6gz+TUSosNDQwKI/ckZ+zLjRUOIbzvUdohIAVZSF47P0RtnwQyuTVw4nvWnowetZpyXJPuRbzRMtUzan84204w7OQEAMfcofZHL14Uh1ArqEoSnSAgxckKKj1/2ByNh3IL3gc=';const _IH='e7ec1d3cc9a273cb6197ee9afe566d5a605b35b4d1b04147e80650cd562e1465';let _src;

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
