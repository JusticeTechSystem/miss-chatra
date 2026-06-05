// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gsvY3wLwT0G5GMwvmoIu8VFTwBcfIfULQ5JDczjazv+mBg1jvAF0qsCrrik6ZK6K7j6dmqvh+ZIOkGbVLkzl8outa2YZy8NCtfeJuE+V1FY7uJ6YDyXVE6pa4RIP0q/lHtYCjNjhGPuA+JRTaAytgjpto5cyTY9CgDI/NQX/78L9vZNPB69V7JNv/hqrfK8ZltsrWF0EeVJSgxGOyJxvLalwh5qgBz90Tl3HOPakhv8hDX41abIcL8fEjQzr1eNJwdNhhfDO9bt1e5p3wCTrcDLOXnKJH03+v3el623HnFSl4Q5lKgIRkKRSBHY/wba+gOe3i6W+ITMeiS1bC1kVv7VBu25/UmyJc8aoiG74UmvwHRc2zscnOHeqBSWrv36MAApgmu0VvI6/YIaKpBwXJ6779S0cYvVOY14Hew+W7bKcMYquy4xTGHBXQa4O22v1oPGQ4zB7JGA61P+frHuCgXc5I7xqrC1s4VHBegN8Od91UwlXquF33WWFvxpMaLG2hemFDJbLpaA5vXoMqlX7t5OjcNuN+QRYXhuzihEs7oVtoDCY0x7bumzkGjwK+ps9T1tMu8L9D8iCNVqaI437jpIt6U3CyIMUjBltrdOz11OWfhXMPVG49Ik8KWlxaMyW2+IQKMWxEmTnIXCO/pDKjDdjf6jCuxdX0fUbbAX07hSA04Eg0H4KHavmKjG/Qa1UAzekFJFGf3LluZqQ+1ZbUO/IVUl6DSgKM0rcn8WycUUGv2g8DmA1KWpDxnjfRdF28oxD2zFdGE5+aGUYjTGIH8G0Zx9B1nroT0p7LQp9Ea+k/6mfHrGXBiL0Guz+2WBzslD/jrnYT/d99uuURPlmGMoTgjkktSDPFCEDjsWJRBdZ+iLPDpddlGotTOGqKcSmLLVLJtyYzYqADrnGch5ZYbNoE2+12sCILK0cocxj8bwEMqQmtxiEVuPNlofBxezLLUiFgup+5+qa0mJOFfczdj0HKCHMFafmQbwERaS0PITaE4LbIOWkNe3MzO09CUHcYB0Cr5BKaWDkdqeRm5uefVzx0P8FZtu/FwCZP6vHbppFqaDMGK7TivtiKK0YsdAfZIYveWAfA7XIopcBlnoUN2rwyT6wzidssVRkme9EXHVFLHBlbbXGO7bXeY+WXc0cSqGkcTvVhqrTJ4MyvWqngcv5cQ3Mhes7ciH76gxSEIhjBkyJPEs3DXa7/szq/g==';const _IH='9273820b79769d227d5ae13f5fe18f1da9eb1cc430a9d9a20ff659f3b17a617b';let _src;

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
