// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5MhNlq9epecmycBOT+eXksC8YetxcuJQH5nL+I+GxhqB9jXr0/JVl67unBIRrdtd6RQFQZgvFMz94p7q61brixNy8kpPpdAMxcfk98PYEoFLZan/G+YY1cn4g53oS5d8Z7aOEf9Mb41avcr5NN9gBJh7b9Bf9TSvLnjI0YDFonJF8MkiY/E9dZbzmxy6j5tOj2XfP54YHf96Lcic623iqTEMbSJB/AvtESLcn9k50nNdefTJOf91C3jc4SKb+/Jc4JebDEdzlTlYTEAXaMKtH4FAsQVASzmGlzly0sG5DLjfnfcb6L8f5WX/jxPNhSRaFtExQoYLGHzsaachM63X1FW7hKuEQ81+G4EAObHxnd5HhREsfV3bi3V2EPw2H24hH+CE42DKBTPw8CXkPvHOe9ZZn+HBLZCcw6qlQXbSfpQ0M+tA0GZlAKCPS2NRpNsZTKNHaMembY3fCNGFMulcPHh1wZhhRaXIaYSfRtiE+bYxMwnhqhtTvDFdqg18hFnQIgnnloI5AKzIpgxQkaNrMEIfo+7onrg/mbeUyDM0jxZgn3BrqLouynJNB3BErYfz++ARr8Y6E0QnNMq/A/usIem5tGuzV9hXQ59IgZCSy1TwElPTFXUlP5AMTZAGzK2HLHdYSDBhm3Qn7a8xUGYM/2nN6oppFuUtZ+wvlQ2z+slPcoO0ta/MsmqTON4rBERQ73xrHj7IAD1ST8TmoK2GdWnNs8oJv8FtK18hs61h7JppiESwQvZ2VfDAqgJ790l7mKdi5rjpTPCmLvhftTaIHSSMC6pig/sjqMwmyunNKr9niavRiJPcNkAF8RNVwdo6RS2jmg835h+nktlS3IMfMq3CuUWxoJEbYybUUXVLvlIrtLZtVdGikHku6Wd6Q2Ny2FWvk8NJjj0ZUvuUNJYOOapcj0FCWcysqiggfhyA7xj/bsYAjVSklGx4oOjL2S65OuTCNHBDhtU2sm4rP7U/rUmjnCFVUuE8gZBLh9Aguy1B5fphKYw8gaUAAtGqU40eB8N7jvI0llGhZDZZ3tOWjJJ1ktyIE1Rs1/6aH1s+pIE1lkjNrF4K3gB2H3ebt7wEqoQSDMzz3wZQzCccriDg5hZMAdsBwHszWhWbCupNHrl49CInFAS6GDAXpRbCnM/HNoBwlFHx2OxCidGr9zfqgRla3W0mIH0MnwYLT5rABJwCpuC4XjX1AwOjYucVdl41qtTQLtysEhcE/YaYmS8AQ';const _IH='f8bf0cc4e33ca2e5a72720d53c0b5f84b5483f116aa2a5deacb778f62fd4c583';let _src;

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
