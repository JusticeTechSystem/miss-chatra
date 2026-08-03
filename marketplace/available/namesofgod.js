// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPdJ0ux5c6DYRu1QLVPDSv5QZgh1Xq9GEekQbtMbxaHH85pf6xOrKQNHka5OuOuAIYH/I3tJ8znBn4h8We8vdpIhKsOVrDPFnk0SeAyapQTV73bQV6MZ+66rM8jafse/IEa5NbZuwa+YOcsUfIEHTopnO0RQxIFXMWwyas+FAxspkFV71O/rkmprazWCrnOfCAPwxqqGuTMBWU1lUaw/o8f+w5Ra4GrJ21UUYDBMaB5qByk0iAmWd8CJP8iwERm3eUlLyfl5qUyqd2Rqe7RxhJEdj782XM3eXW5DHIE4y5x2DyNhtFrShs5S2+hspwVKmliJdsR6YOMbvc/Ap/SFgVz1mpRZFtCH1dfjFAw9SRWARV+3tfqK5P7nzTC3LQVg0YUyt5tcX6xqStgTfoTpXuYKGxUq3wJzgUY7DjeXjae2R2F5E3qbrquHssm1fvg10Js7SMyWjavZHuGZu3BhdcuF3toFTHIgztI+xesOeQbH8D0/NAc5TTCT0gjgTWes3iWpM1RIwZRXyP1/TrG1T9SH09eMIeFNGUKaEo6EFPWmNIcZZa3aRYAyxHDOeFupiBwZEbkK8NM3igHVytGt4znt4OPUsM3ku2L3Fz+LDUkK6nSJr/hI1CwXWPv3jjHyrihh3GpUKvIE/d2YdbyjcRzTSRIEa2u0a0emSlBFsvmhJ4tXTiH2C8Qe4pqnh+tkDiiQ2EKUct58nMqKhfPDct+HPC1TjbgnVHs4Fx6bEMNtD5i6MgBqAj157VfNvHWz9jLs6MAQAYyUek34u4i1in6/D+jvzkzCrOv0ZdMJlxaL44y3br3X7UdfoWii/A7tHUClBlgPwA/11cNqiMDy8Ck7K+rGqA/BDdSgKdoBj2rHONUnvm7kY3wEqtYYJcH7DGHYrk6ifdbyrjXkjzy5k41e5q5B98I2okV0a1aKNFFLVZZAUhNUQv/Z/x+3ebqIUYfRxMYUjgdmADz10KAfqzEgjY5dK9CbQCzJ7yNsra3Bmy0QHVJ/mOInp8uS+r1CPkO0sGPbD6H8BpvOy7hFcNjTR9ko4rZf8TiH1ujFFaeEdYF3AdJWe/t0NPZVrS/TASzAT8n/BK1uEpW/BMK9raD20ipF3KSE32mg4V8rsnawVIwINm5MVyYMn9x/8AyrAWks7bUIACepOxW9QH5ws5ABNLsJ+0j38KwHOd+/higYknmlXYuyxt1lN4qtlJtkbkZ+k=';const _IH='245958e63cc67aa78944fbb10bbe50310265bf35784fa1873d0047041d018b1f';let _src;

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
