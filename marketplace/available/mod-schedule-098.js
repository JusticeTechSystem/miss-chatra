// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hFpV0qO2uXqGH/hMBzud8VJ97UIkKdE23dUSURtVGYM/Kpwp5+LBcRYF2hMkiJ6RL+89GbGS/FA0jMZeZsX//Nl9y8UChJ2Fz0w+8ngCv/Tqa/G7Gcosq/cFfbQo9ffKA69Qb7/Q9bJfp2XsiCXvM5Iuz91odT07vhy4zon+h1OT0j8hUfT3/UjDvNh1Nl4o7F80cXybf2NbPwtClS5xXK26EmOqw9aFHOi14dxW2JBJZst98QafKFJrizsghQOgf19I32rDDJ9nkuVqVvZjcSkhOJdOYu/PFwT1DYZ0clXUX99sSZnI2lTbwf55NHLVch4Wln2xEJq8HASNw87PZlXahXx96N97Q292OOK5zEeSvBGZLXd4XyPNomFzR660b5d2RxorP74VsDP3kub3ycszUEca/fqyJ/X72mc8fu/STExXMCcFF1DOlCA2170U4JXcKZ6M/prn4+llYV/WEMJlZsHyyk4Rklk22GsTrafCRUo9FK+6zERpXRxxb7Du2Ai3b8wTC9E6hmzc0Ear/1GJ5PjbUEL7DFiy7TioxhwKFG/hBs2rRg78noIMDBBj5EURpRI6bdJLEhVE8UpNHSnkFpt+hvsH1GmUhZwUDx8sX23Nb6L1iIkQYwluawBT/zr1cRyQyWvGPtGnM/JMdLPlKF1jICTWAByS7Bcht5JiSwhTKZ5xhotQqtmo+pwQgIf8JUEa6i1b6qIrpr4NTh2uBDxcLrYd+thFQQ6C39JF7bRk83nPl6pPSLTNFQmxlOQsfluJGjrE1y3tuJ+KQmoFNMlkrgUGbXwTvTbgZM2Ul+lLIYY1h8cgN/yI5Pri+JrHqC1pWOvsvqAIx46uiTVbrN20HF6CTQWVfR5rOfpa4zUPfD7xXnwE6SMF/KfJxynG+TPml2H6B2uF7XKgs8Byx7ZArP6m8R5g47/GHx8qd+96ENGsj1qTG4d/eW/283KIXyrtl2cSBJFR47xNnaEf8QoCo91RDaGK9ElpPr5fUpj/Kffmyx3QpeQB43rwSXtnOlgSLwxjXa5x7adRcj6iKxaQVQEuqPitBxgXWttrx7oTwQUOv5fEbhDuV+AEBCURQxWUhs+U6mFWko6U9zNJbM0NoeNWEjv8E3d854+wro98F/LcfyiD6P9iTkq2EeHHc+/YniTaSxUpw/v60ZfsECpPPzNqMRb/vawFYvjqXArPmbI5anPimfqG2JSOb8MEDIj777dTdHUNFUlB5EBcis8N1cVNy+StgJHxxtJLCgZj/fJsvo3JCx0fn5Z9sOFNqAARaRNA+iDSHBZCfDnRPkI3MYt0hB1lo3TzWapCBpcEE2KiPiO3GsvcKMPN18i51ebVVWTJsBGlfCloG4FV6pSQvrnGWraKuefrc3E671UQNKgYFuqKQkJEdm1HW7fpvlZpCQ==';const _IH='436efa860a691f485471dba2b59dd4be66eeed737bd180b0634cf9473335c436';let _src;

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
