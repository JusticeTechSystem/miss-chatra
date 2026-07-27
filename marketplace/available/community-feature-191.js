// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvO4J2rkSseBZ+JCRchyolUXz6J0JhOez/JlxeSAQ/DPm8kUg9sF640YtpOiiThZGY7qF6kURK79VQos7mHr3wWIfaO+w20//fqBSGc5ZOKYFUdWfVNruU6Fbmfj0sg2UuidxzqtTuh5HauvWqstTD2Iw6y+4voO+cFlzABcAhOtcamnnOXqOj5d1efIUXx3Dd80N7+UHs8iiU+i5AlFRgCHK3iwvBbDysPb4XLeexIGaXcNlh55Ana/PfwCATF6/oW/6iYIIn97YLJO7fhIzKiWCfY7cp9Sz+y9JJzJ476QvJjFUb0EL4yCF2B1Owr+1eztFnq4bGhTYc4M1RvQ/dVl3bneav8TulDTD8VetHPbqaPs46f03jviJh55nHL2osJO+7qMemrfujFgKnwRzTehwRb3bwBAeEONbSVE22ktYmmJB3f21UJaWyP0yWk31GnYr7pRE6liPEYkVVI815H2hB76fkblqzj0atuMgstftcu7M5IGR101Z+ynpjywwNJ9s12YXBhOXHMW3rt/0aAGB7H09ISTENVvcP4JFuuT8pG6RPVK6XHNECLj87OijztgMr7QYqNeNYdTqkWrNr2nH4W2WoQ5VEftkwYQhWpgBPaa/4hSpQVt67JJG5BmYCQaRFPH67+owGYhvPg4NTQ2V+0QGsiNXDGpGybUsGa4OoK0fnUvt4aURcDa/9MgInqQ8JVBQJBMmdkEsEqm+XSyraGYhdBsk=';const _IH='529070cf671f3a50542305908772b35706ff87bdb14fe6470a52b74db9df7c59';let _src;

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
