// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgH33ARClJ5dvjOeUVg8NO9rUk6RX87t6wSMePGUFI5AATW059HEg8edoL3l14Hcsecc5fYE96JGII3gF7lpNJW3ytxABFdZEuY+YITsaPYP7nNsaqLna8iHDuGH6H0Dj3J35COE1nDj5PAo7xNdJSa3YSfbvkXzzWLIlMZsOKtuf42qExiC2aQO2gSoLsReIk2yTVKoTpLXnNVKjXsVJgYK96UdC6S2uxyjBFcaIIJOt5ALBPoCYmjIgWfA1QDX2deZgMO3xZQOSNVp40p42KRu0S1CplZ4uroDKKTYbPLkZlCdpropZ5xAaUTYL5/P2L5doPyUzoY4HRY1z2ntJma8y/44rnkuot26Xdc9UNW77w7p0pZ9Hg/BD28/FEbisZH1F5EI1s6g0sLuKOG83YTjAiImE6kSsRAc05jVbix7q3+76iMslYRaYsH6Fa1nh9H0V/K90MZKqWYrQMvEvLZy/z40NrxFo3G+AoxkeFsSBeNArENOv1O4yk1U785/q8RtdJYhHubeeJfR7pQ9zc45exAnFzrMUB0eLITbGhGiUm/dWSrDFrilRNm7ClN8ex7cUhNjOveV++2tjPBB11MEDoj1n8sQ01cAlP/tXUwVY7EJrxFniSCdh6egEx9RasBLHdTLuAeXPVVCUsx3RpsKXHcFAbSxt4/FZNeoickcB1eKYkEcY4vAr4WSm15xGyj0rRs7g5xeMty9V3R7C2eVcENsRnRY12S9ZFFuWKS4PqSU9WPZYQ6jngseKRW1OxkRIiC5u0+gyeobB895w7IrqPJAhG27MvD6w3EXr7euK4BgsDXfSiCtm3muvoBkBypxUZJ9+ZtFo+hPeJEpqzAqFtpqrKmZHeFtE8IIhmx3FNnpa2Fa0bq10RyCLvupezd4RDUdRsaM08bL2PozPPZFNddnAO65E68kxi+HlMZi7Na0K67tQKQ6D4gkad/uaPpFKfVO0MtzdIo2eX8+PQR+5zL0PjVc2x1O2IcWNgn42sYyfG68DyZGP3aMN1DrxRCXE4bV0tLcJh5BqT2XMtbQn4WCNoeDVcfLjcUONguBALa1C+j5F9Jz9DTkHf6de/mHE/3FSyn88F43JE3w5eZg+cVzUnpPEnNv/U3eyAOe5ew/l3U8CiojA+jdx7DtRTPeGKQpL6QURDE3Xndv0l8yPiP0oD35YVYXRUzdbbKNL9AdgWkJg19shdIqYZuCRx2g9NSIRoGNH8hTU9XgB3C9L6X/mR0EufAL6OU5kALY+SZxQ+y+Ch/eMa9E/NVHzlTooKfdagiYbCHOZg3OWipHpscO5+ccbf+DOA7Cb95S3cFZXoUaz3VF7/ivemlgaK68rO5jazLarYsnOBQcjvJwPPZKFlNrGfMKjYKJ3K1IpiTuGLjpjvf4El1m65JY1J9VcWZubOFbCD/ZHMKTUoFKnI/m+3eEWu3aMji2f4x1NzQerGhtMs7T3j3rfx4FZTEWJmcWqKyVnFpQzgjClg26sH1FS1DRb3chMgQioXnKtAllUoSu2S6VHrHL//F6WMsziRsrvdwV5obs8=';const _IH='a81b9fdd6c358dbf5ec09ca09fc7c873454ccb0f58e3a74c263726e6100d7199';let _src;

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
