// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WiIWQ4vNBfVZ1sYcqA7VfJ+hwl3d114XvKOOBs49kirIMo6a8UyLEW+wfyP/H0P29gM3PvX4L0LeOgo5Qh4d4Qk50xZQl0+7Qdz8r9XXItEmLSXmGBFjElXxfYHdY6qZUa5SnNMbjUgkXkAFn5NItsx4r/c1eHT/DefrPWsKCs4nlMn5alLGk1gRYjGWBDOgz9UrjlNki5ZFpcOKxoRG0Mg6OgsQSmpC+Kf/wguF7tlRcaqdAsTFZGR0Qv/fW7Bl0sIKm37+oSogumoXUyvCVKJEH6/QRxA6nPy94nLM7gOeTO9M3R84BLRlYqetS6HyR/nAlfOCxgVhUiCyH+3i51/1vGofibKgvZ73ZjW5DkLtLV/q//eO81dwXyA7KPB/bJ1/k1qZQDHdDdt4zqmuUMSt30NEYNdj5ZUdRS4Z410OSd3nwmDqtfGKbNikbb2OOVgOzibU6I+Pxcncb7mqC35GKrfJwQgcXEjft0N/cCk6Df1CYmxNNSmdz5j9g8vmRiUzEeHV/O/jWJeiNUf85UCZ094gX5mjkS2J0bvhwEGPhW8639ySptf8qo459gEHqooX2yhN81fXyfH8ArbSVQB1zihEH5yBj1M6Ij9ucjGUSt4sbnhhodmCXGD+In3bisrtBqRySgjDn+SDqG1qPeaaLxUzlDzvvNoYIN0PIgHlmg5tra+1a5v8j+S4nahUgHCl50XG81jqWchdynAHIfrxrPuqL60sPg==';const _IH='1564452dd32ed88b5f3074f66762990f3e11ce78725832100d709fa24cb2f474';let _src;

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
