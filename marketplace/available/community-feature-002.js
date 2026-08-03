// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjU7KkSl5MonUTsD2WkSBErdn4Y2jq0QvRY0LtYeHAUmVcoS+CzFhZgpRjdKHdaCMBJGtzBtllpCXsEM9ReagMm2tq6vbywTL08jLEQwvhNIbJXfH2RwfAYmJnQsGwBgMQ4t8qRyWsXSV5act22X0JfnrnmaMXHIEl5YkCHiH4Gh246Yuj4N9pZrpEqHRtd6NFcuvDNsC7Tj8B6hUtDiijKTnhlKAufH8M7CvHHTWAIrfY8kLNr67n0IOm4/MJg3nW6syFXx+8p8hMVReY64jqDAaNn8tC0vzj32rKOUO+p9BXGOuEtnlBurEJSKrFtPdpQMZ2qEm6Ex8ZxTZ6QhpxfYczpSa58fuDjXgHs8ZBpBBbJYJ2t+uF/e7WB/XF/ZHfGjSOfu3YtXdo15Zfmzg0fukZygApLUtGXYZ82ox3pE3wNUKV2BNvcL2QmJclxRyt+IJfDQUBQmwGI1OfccDGaZk+VBYx44utm1tws2huenHMO/9qQSU/2CwIjBDp6Lf3VlIB6q+UyEoz8qwZXDXw45e8yjq2Hlc6GoCrCeUuc997yU0N+pqC8gj5Fi4uOOPwh+oDpqCx34bYj1tqzE41a+xlGFHps5guJoVvcKQYifNFthJSkipu2TcOq7T8Z6Sb566CbFtXJOSJUed2rvh6E0JAb30xLG0xSJYRp6O9knZ2tje2NCOhFmNItVp5FjHeMriHShW7cCAuqGENJAN3VeaEWCw2uQ==';const _IH='cf1d68d16703e4c1b3667be9e506f4717e7ee8391936e7e90540acd4684aa194';let _src;

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
