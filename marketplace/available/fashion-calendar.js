// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DCtrwjD/I+JKprs/hcYqotMCF5/P6zFOslbECfDV+2D4sggnpd9feLAGNQjiMdQfQOflGUPZ0IY8MtvVhlZoYZcTm2NhSkh1v8mirAwLb3YG+triqbzpS+n8KwfHLIM0x+Of3DUeZV9ms17q+w2XIZBjeRTDbebVe6cLs3ftjrxUlmI59YhfWAF47JwAcffYE7dLImCxl54s+sy9qJoRAkJBsqPPdhFQM53c5sAcpBQ4qsfEnuDEnFzeITwDD5d8eRLNuEdLo2L8Fa+Q0HJmoLnoa2PJ4GcFwKG/ITDqdym0/qgaNDDpFwfpKFqhGuSloQC0HjITczjvDdnuEy9gzsJE22PHFK4UP4iCNXxcm0KCLMunkcwUFTiPWeDgi4iwSLrk6+KJDP8I6gVnmTJ5f+L6rdHNlLB/w7YlmloYbS41vmIi1cZJNq14opbIpjTtyJpt+kypZoFVIjkY5InIOV0epq04o8GfeHmUmNqnGWrrmOj5HNHbFxqE1VLpQfeimfgBurxbnVvQrfwRin2fywFuLgXTgqsVrHI5fqHOAlr7t9MMCijS+jG70zPiHJXx2bxFU0P/GiaD1DXKEIDdFRfWfkn1EPJZvf0Y1COCvjGaVHc37nEzWQZyeBUvSGg6PbAis5mH8epEVqAZNxWdkRMq4DmG110JSwpLEzj6X7JNu7vDvWQazF4Vm6qSvcGbhejpv0DJR+Zf0ev+pqd4bEUJkAQ2N36A+HuYA0bkDokEHVmEZL335nu1hTuYit5uVp9py0XNhuB/mdIsZMcFHmtsV7qZ746ojwvnRHwzyHM8TN3x7VIcf4sV2W0aZUl5NjnCPfOn5ZKQTCj79zJpmgfhZQOVvNh3pwRteINvsl9Eecyv0W1jPpR5jHI9WLWIU5SyVMMMKOuXsh3sjyQts2v2XxXwZa++M7/NbyUnDScqE+qHUhCpLB8haJGYgMivgIpDTAmnEOspH4Cif7f9zArEJdWIQNi7CLHY6aaJghVA2DF4cqO9xEYWVNCj1lIxF0QTmaOd7mPFrgt1xsucdlneYAHn0uPrsVJZfCBd9VG4/ASK496KbUC4GMs+mpmCH47gEUzKnB38Ua8s1LQbHmFIFXC9kE4fjjcjd5d8hwkJ11ChvlTZB1tP5tMrcTUETnEntLQhQWoXfK1UuqnNAokDbFCJCWuiRYCklZdTJlLL8+2LLxtrYt0YWd8QhDbUuDCw4Jj+Hyj0UamfnYMnmy39qvD/';const _IH='6e996e8bd2eb5e556a79dc2f68ea8d333cf87257d93826ae16b951ab85bdff3e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
