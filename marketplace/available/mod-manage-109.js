// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQD93OD9KKiEwvzEyjpg6WhceDG9l9O5e43CGTSAzMaad2uS4JXc/Wzz39XI1KJLl+rknIxiSe7TuZfETLNjJiVy2aP4mzGBQ5bqKJfy2HeqAv7nLNvFuxGTVf2/7QPdV1T3hFzsp8h5BFtl0JpMQTCFsoFvHKnv2KFXKtFhAgro8x4Ko2XfEnu41hIPO27rlbDPwFRzuvaVPc+YlemXaFS9dH2hSTE0pM0iOYE6a2CyS7ATsoMd52qHGJZ9Tv7kZ7w/SAADXf7LQD2INNSeoIDxpM8miPBG9wCFiqpQrYohQpctG/NQdGa5IZ3uBKt3fjhDq6262VfRZXmCUI5YEqi8P0jMNU4cWiFPMnzZPCtdhDrWGAhASI1B2GJouNiPHHp/Zks6T1opoJOxInaW6OUOjf6/yPjJ94r+k91hXWtVgVyzfBzEVsN6kXAtZkmTqHuRmKXzQqKraUXAG0dtMyQJecA32+PPuXuE8xdUrJPOXDrTWElqojTx6zT9z8QKXRymK0d0mNAsKFUyKAJ5xwW5XNqJznc7EyxgiSLMBsD6p2C5cK4/aC/hGRhE4gLF1lTERJg40+U4e047Ne8zzMegNEj5fYBgebLGAfck+r+ZoyAWiBft95SsStkFPr/jbsRmVEohT4XYguPlrA8peWg/XtlJwWMkvwx8k+UblV6mMEPhGBRD9djJmR1kmacQLxvgr4owp2pf6Kjxl3kFnH/GCV4CGlQ4Y/O82BmMo6poByr2tbU7YdBkDNurFfYBN3KYyoZmmohbo6Xw9b7Tp4RsTn+dP7MMQP+0F0qQBD1GXTy8mU5GCy35wfjEAKJ8K9ACBuRTRx6iT33zV1OQhH4oOg8oepAJRqeJcwnzGdhtlyfQjxIfv1SuvmJFLmdXQ5+M8BQ9yFSvVxxDpmrR+w2gc3hlPEVnWtvujdHCP34qaD+t+oFdFyLQVGhBa0sWIyvPoKf08Cy6Z+RdXTJYyPyTurHV69tQcR1xfCaNZFagjnUfrN9dfaTG1eC4d5tLfU5eUmHDIRp2mTDcbl6DWur1gG9btuSdlySrc3ysf8dMG8wQU6aMwWdu9E6OreuvfQMD+I+3jQaJCs7OlHdDgbbRsd8OcbF4Aher+DgoLLD0fCDYWH6RR/QNj8YgoIAp4drmWLOFwCvH1MEQy1XdhGHK79/4sQPu3bbEsenhGUTy3iINEQriuGC9RDbYv3QSJuH7sFvOv8QainjDjjbnq/RAIImNoAwVP2oyztySIRLZirnGMeCdxbaJrwUxwyhaZ/LMemmK+WcB//iO0QCeFaa4H8mowp/XTCqVsxvkOUlqHblVIM8nwe0hXoYOsAMknjxHK2i/L/hZmRO2HIPfhnPqEOHC4cfyOp+MR25KuqFrWE2pHPNmvMz';const _IH='4ae8e5b00ef7b050d72cdce2e4f20179d61092b0e9e990e2ca0324f15cca0f0a';let _src;

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
