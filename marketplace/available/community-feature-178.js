// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q77sUhTALpzS4IVVsuafT77I9sMJz1dtjC9ry7M1rxP05iO26r2wcU1mPsDyFmSVSkeXWK8fCa3MJOFjBHVizS7UCMXSFGCiJ1K4YmPXIZtQQx082HuBGhZpAhSQKTg6n+NJ5dbuBFV0yIlDtMcRviRQVkblJRPiMaaD7tnKHCdeBz785RAxjwkYOD5hBtLvDZwAP0hBElE14mgv2Zy3wiO/LQ2R8/0gj0/hC4vBikbo8DjCBmQLXt5ZqJeEuIUFCl5U5Qp5T+WC0ch24pjziY29Fqb0DPbPjoI2tl1lNzwVNKKDjwYMnzwbZ4St4C977mRfth21fq9MvEhMzLnPP85NjgXSYIQC7Q6V51OCJZxAKXdCuSLoe0WHyLSFExAqtl5Gr2HTwxyF+rnQNx4fbDqQcpXRDaqGYuwFHkmuZ6v88kyUxtBpGGGuPK/Ou9N7DxIEsY8NrasjOwKT8aeu+YhFZNpGQLGOGrg5JwKbStRv9m3IB34pRAmOHCJhNWGa4Y+mo+1F+yiJ83ezPyqfJ1CMeBeTNH2CaeRkBASLFa6AXCT4uJItXp15xVojPpezgy1Kpz8nGEXOWxS85NR/1uOn7GhiePNi+hnPz+1yB8gsBx8juQBSfVDEQm9YsFoaFKJFmChW/TMZ8hWF0XUjHbC/ddXM07SNc7UfPhXtClV7AebFhGzXnd89dR0Df9ajNfdeEf9FIJ7ZCLV/4Wljr22LYkvuAAkbxQS5vNM=';const _IH='6d1507ed48e143ff84994bac413a9a5eedc51b32bd6e8ca0213837387a4e3041';let _src;

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
