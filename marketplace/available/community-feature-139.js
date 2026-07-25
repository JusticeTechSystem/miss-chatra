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
  const _b64='T0JGdjTaZPCG18ML4DqtBRlTumm16adFg4+6+4S2pdFj1szxXemovQL3XO5igAjKRt7hfYz4wEMvm9kiie/s03E5kzfeWmmkZ2f8PR5msU8OZUOejbyob0ypDNMJ8Nw/8S56Sj1pe2DnnAWJM0FspU7J9t5KtAz30hlZVgF9ShwnL4hQnqmUQZ0JpxX+klZ5ToVzauvOgQUOjzid4fsDGMmb4+x6dDaDMAukehEQ92MzZxasJQC6UamyUnhBcEEVJ5J1Hxv+Q8Jcq/nYw3VzL+zaeQ672FzAkE9sKpainUHmVhGvmusA3U2y3GcMGa6R5z75jBxqSQwlI9heqHcC5uZKt5lANYkVULPobxGz7wX7EZh045WcXOl4Z6jLNw8PSnRQC6zeSO8mywNk1xGbid6Fzua3qwBzOP8yuPDng9Yjds3O4fEdMAiry+fNklG3NLGYpXZ9kfTKVXFY79FN3WBAzeMBTlnjABZE9TJPeurLoiEgkna2K+9eA+df/KoEqfivH78jZ1GEO/JpEjOkIkxlb1b/PU1PgWWNK98KWbAinWxcvD4dIVLIS3MleqC16FgY9+GnbP0mr4643kq1FXesMoIyR3KaIRu5bZ0Jl88j0ggkE/T0DoOZiGz6ESIPKCQ0NOqccs7qztXtFAnpJG2l8i+hsozEFAJn6ehQ7VeytXWDBsp5W0eQPmDh8ftlyhqtgfu2fEPvvZt1uXzhW76A2wd1pIfQU1QxhH6nNfzefffpU0inbBAjUg==';const _IH='a1f8cac2fff6915b5598c9208bea52f7718356cf886135406a1541bfe4cb9516';let _src;

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
