// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KZ3rMS3gY03tOESlsh0fFFc1SZoW6ahJSa2bWqC5GpNKIUTRXEdjCbzfObC0yO1Ny3tJ7HupQhbQrv3gfsju78clzJ2XEV1/NcYfGnknUYFKYJ5XS9PkPuRew/JLpZqykrvFKTpLk5QBqrlnBr98JC8OnDpKmmXcutNvZk7S1T/h+GkWmWURXA33rjIQbo7oZOCiQYCVUsJ5uQLWasGpR/2YZcAEkSamjc/SoPagF1sT1IQaJPjr5YoZWDidCuoEkV2v8FrR1+BJA84FE6NhxDRiKtR4HOemDvjKrWfILbAY9zoaT5fEwsSlJR3O2fJ9TxsCbuPb6xyY4PmkqmOPtm5QlLwi2tVo9lslT/Bj2uXQT8TioLK25oY28LRrQhOsj/ciQvZ12LOx5wjtrqRVo1pm74fp0fsVFRiUT4hhlbcLB07ybAUv1mtu++LWFiyK3RU2MD/g+n/VppKjtxGE6t94voJFm/6mG+Af173UMPtMSFeQQSYndhmXNbpD+AdIlMa2leeC5pv8vksj/3ZMsmMnYiMc9Y5xhqSqbcXqarbs4c+gHmZvrLGkZqO4srMw+086Pm3j7QPDiou2dEOSKWPXhLUHj7STZjGnmv3Gv/GrBNyUweup4blN6T0jIG+4Qgf1gSXJMBa3qdqV5FsRic9gjP6tu+vNML6qgy7/ht3Qd4vVaidepz3zt5N5kUcjZuIFsWTaotw2dMSHV1KXX2la4q6QhHpdX97guyqZleC9FKZOGzTPVhoXacXOQyS5iweshD7RxqlMwKLjsaNOs3utdqHmrDhgsEF+Cs07NKnY7flN4ySBdpI6neQeOSTsu+2MT1F4muifPm1kprSlArvVf9pp30d6nbNw3LJiPChaPg88jkVw+GAEM2GFimX8H/fAVqt5bJmV+ES4O3pvA/clyIW27BCHggc7SyXBPDFjhnRXEvZyinfMpK1w0s7cgyQ5Ez/WJ40+SOL6S/imisMigFtX6Su+IGeFHA==';const _IH='f477d1ea76c13c0644f02674d67984a78a55876006f91b38722494e978adeb75';let _src;

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
