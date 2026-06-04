// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XM2EvaYZo5PFKecStPLqn6NCBAmP3h8pw5ercByCAMfbm4vL3zXver7mhz7ooT6PCQOM1LHf9wCiwhpkvny2TqNEhfgRqE1jxb3igaK3ljHyxQtqnPRhPlxelHHtF07oAzZXAwvBlaKAlETmFlBlNU2PliFOfVPaaUVahXVOsDRAYXkIhPALb0CIg2kJaIjQYvEJ8GTcf3MKMxTtS2dn+qM1DeruPdeShJEz3bQn5i9dZC10nS8GW8IZ5mw7cRkAXqPk8HegnQTD7vBIr67/ShJJCPhkmGAVTIkxSOucpdeR91m6mC3ozmf/iA52Rqdx2z5C+qHk+QHijvm+QiSCRMgLQRturNLzUomaUN9BGEVMdGVlFRvDRH7LB7sDG+avj8JKA9RSgbh3vLn2DtvoJTk78BNzYPuwpzOx0SxtG+RNphJhbdH1+LB5tvLUyalzEj+UWAr85E7eRbumypWnKfG5zAUU9d30l8CWrIwMb3Gc/2og4VW/FDgvKxyFhBN40sBLpXQ5XqRtPsusqVaATdkhqe6AzUndiiuXXCrvFhEDQBDvaNqK3ndpdDAZ/vZE+leeYjLGhBCMshpyEj+iPaZ7bdlAZciff9EkHzz3PLLPSdqlB9fpafjvEZpoyfWq5apcH4IxD2UHXbC8n/dgwPzhOtwEYUZZ09RnmOGNo2Gk8FJ4LCsKhk8/1MFCFBaSeQ1N2vFAmogyaau0sjDmYFqEKYTsPva9mkw59oVTdx0eH+dmrbGT2fQPPXHEJzHfX6rWtc8UwYh5g7xRvizVY3GIjLPI3kUPSYICm6rjuVi8Wp+PneU61V8NbOt3+L7mzc6VsZwv9JhAc+ZLHE/vPjV2aQZIN7ODReCjM4v/r1srLC910OsP7tkKfU7LpUlQKBPMWUiBmmTFVxp33xJ9eZcwhpuztUZQ145xHu5MDHtIL0C/yoYmhczMg1bCTdq5Ukl1WHTeAOzDe9XlhTUNYT4sGfEw8or5xDTGHem5ur/8Wvb3cDHEtiT/qLBjYcDf0SxOJTUjscpf56OciPi0EhptsgsJHJUdoIXYcT/ToWJLlQGFT+0sUW9mPA208lQP3cG1CAzOs6iwnJ9/noraOO7qTu3cLEmsXzNsazEwT44mpu975fnIY/M8x7VriXz4RsDdrpRK4bXS0677L4RZBlev3PywykEcXgdGcQLeR+6gT/6X+iBg+ZGgIgKLZQ==';const _IH='5638f82eb559c89e610ec66ffddbd937551d17a498e80886c9328c88dc48957d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
