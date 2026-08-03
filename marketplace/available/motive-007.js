// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaxgqo1WCnQH1+97nGzHLWakQNSlZGuuTk0ervCGOzcj4/B+YknpSiGSb/bn4soXewdO6zOerGlgy9llmFeSDg4mKz82D6ktba95kzstCRovTLAhWvmQ2myauofJmcO/vDG52L+nA4wWcxfhCFLcHdoxJAceLss7hOf1+4hmDHkXuUCh+rM9K3tuN2U9j2Yzj3inWQ9MHRDtDzYEnf7EF8L78fbdehso+EXhMFplLr0swPMEvbT65fwg2Qwe/GLFVTRVzqB4pRouUIaxFdR9U00RIjLCl1QNVJwBPTyjCEZIy66QxhfRp23bDxJKjyXFIrV/8/yp3kWJgKqe5k2mNp/d9DCrDnwPN8aQWdaFYVZCoBl//MK/Id4v8qXwcjFIlu+vujWjwNRtEic8WUlYVeIsnd9EWcKxNqr9b77I88rCjwRcqELC3YJcBcwSWk1jGnmNZokvRslv41b/O/6A2NYM4pdFf2FRuumIhvV45bBwspu6R2ILjof4CATJwXaYIITXBLP229MQTDkOJWYUaghiCyxlsO4H9/x4KiIkFLz7SKpO1cMgAWl2wVdl7zCQyd9YurJ75hj/8PW5VBWEFuNpJ4IGNR9rQ9yn3ItibtD+RdGlNvWzpSvQ+nO9G3pAb5azF1yOlfDia7tPsTiGWuYn3QVISWy7zxp24Ux6nIvw5/tR62F2aqUaNqhtfy1BApkQUp1pLsuF6mUIEXWZmJwaLBv/XMMEGPQb8SrPTZXy7RDQ7/VUtoH7sGvv5nYTYDpvSL5rxMlu8tWapBvgAiOD3CQvT2rXwa8CQ6+TiN/ji1Wu6NW1zzSXNJM//6qL+StgbvSs0hqfVc7EH0hruv4Qihk0FnQ2sojRT1X2hz8Enl7kTM1b0p+VDBdqUvNlSZFEtPbHVRh1AJCeXBMmVcU1arh6T5cRzJVhoH/T8s5d9i4KEdelt/wRGrsgq19oYPTRLOiz2EuE/Ez+Pk4llZ5FZM5zmQMwv6kIDa4c2Nvo766KQn3bTlw1lLdPLfv6OB9rPD3NFs3mzd/hs=';const _IH='92ccdee72d3f8d270e90c65f56bb35cffdd3ff63db4823d377eacfdae1ee54f1';let _src;

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
