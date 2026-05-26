// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yWI6vWsXkyZti2qDVmFDPun4aDZzDptgQ/cWLsq6jtN1bSj/lBie9dEqakrEhILvljWG82or5cTscAs8m8iruAxd6JFvhA+UHTb9gDDDbOTCZY9/lfX/UwOHYjWn5TKuvC8CG7xiM7KoEptUcXBT4BQrbVmCYjWxeAvzwQeeNdFFSA+bgLP0W9xNjygUg6GluUhDypbxWMcjZWkHf+aMIiOavZUnf206EKUPGmZZcJXIuX5apZo5ztB/8JO2Uabe58ngeKiCoe3WGJQUXK38bpBfeDbTe/W4MZbEKGNOoVCjmo4gysJwHLP41pEPD++MUZuS99287c0pVe46nWjuM5YJlN7d7Al5ZAt7j203QKF+ohh4sTSL/OnvKWsiLneuobgFSxsGlS8cwODHvxcGGHDch/cZGSRltpbgzvjXs5zK6SHvFMTpvbKd96R9QZ4Bg1AS0/Lk/E6iiFMUp+z9gfnn3BP3BCNY8RvDLk5i8HwpE/Ts+hLGjwT1SthuG4+GNY3UaNNdDeM1tTEj8nJ56HRh226JlGinsPTiBwdfpWe7Baj5FW6uvM0GQj5ra6MmEvCFDeHPQ7LRFcwKbfWxC1gwN5RGocjN6ECRx+vJndHwnLaf1TIbgpAJR8l1kDptWi5bjt9Rqw6/U/0BEr4F8xkHQvnGEpfk18AScGUVohaU/zBkGYib/zIXjfOQ4gwGHLorhWeGMDyvQnlGIG4t/sDKA/Fft77Mv4xWi80hd4Q/GoUWFb8=';const _IH='e5e2c28424030509610c32a3444a8a157a6fcc913a7b0bf7f828ab63ec81d030';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
