// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ3A0mT9pzSZtB7OnQrdj6UHNlmUVU+D9d7IhDsNjpIrAXpOAC06VhysszU3IC8Lug4vWqlA8FpsQ85uphf0qNfiB5Qeo1Y+wE7JesrzZJIqBGncZXjsMO7DDsNjaW+jTNwnHGPLr/vl+bFQf+RAZaFr3a2w6q9VrayvVdMQZlp/2lAd1/6nFxx/eBOuY2G9mirGf9O/nSfi55Ae8CheDVhcyeB6w7bQZ4LIdspm6+Vw4vWfQITrLn/c2m2rLZ+1yXdRjWK3ZrNws3dy6243x1dtCmb53+3miCeqMEy7Gm/BOuuhZLZhBgQDrd5fM4SC6NPd//w5KpTYJk/WHelz/BfFMGFMUQ1XXpTUEARBUKLHy8GPLWwnYKNySPfVMMIS8XpdTPgKw7MM9Y7oV6fVlJwcBUKejrhBP8lwNJKDKidbvtGHNHIPJ8DOfrSRr67B7TuusgECCRDC7kJyN6kAZ+mILJJCAIHgGzPMxVs8HLK0DRqBIiOsGsyG2Mn87eZyjH7435V7KjOU1jJAwhAXEOwDphwWZhC6AbsOzRbYkcP5Hmh7m0P+wfU5naKSSlkgVrF13wxEHNQNjrFIFT11wVcjEEJBnLDsHNWA19N3W4swHhQ2ktHyN1KUX7UYhK9fPBYfGWTNT+mBjI2HJPhxz+0CBfnKOCYlKtkccBoWtE0DjVZjvXorfQRmp/S7UYAa/ciaTopUckPawnOJRD0O3ml6UilonS/sS25wJfLR6CRMDaAlv8fe03xNWs0+x40COPDs+UpxIebFcMDPyHrW6b3mzas09E72YVGtMXqGgDdLl7R6fzPRVFHlyaoOj0d+p5ve8c3dnvfibd1X8xivpi2rJSR+RMHTNMlGzBNbBuygU4JXC49+5rGhdvI8WX6kc97quSXJ7v84yiqV6/Q8xZybqUzsdSNx1mMQe7SnWUqd9xBNTg/iAt3o3jGIVnfOhBn9iPM6yyPgQlNW9g1Rq5WuBao5Jm5tNdwrvTLLDouKOUDxcu';const _IH='4c3df506e4533e8e760d56cc9325deb78b02a633b0e6196ad5df3ba5edebe1d4';let _src;

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
