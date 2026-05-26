// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rLVeB8ss9NnzdUxVmMqPIAlQuRm3hdpgT504f8N+PNCfMUQfVPaC0mjxz4ni9T6H7n7x4KE4G4p5TBvorPvZ3g9LZyaNAk9yFh9lHYRNjH+6a2+7+UTI8mRJa9c+nV4K8GrCt0ZaGL+LSiBpIC+P/BvXcsXRNgDS48SwXpV0MbAcbjnBX79NGA9StD4tAhnohIwww2wYBVx1nvK+N3htshIrONuPuCAfLQjIOhvAzE2MA5/SVXJ+YQwYri9fOmRz+Nf0pl655wNhbCgu/528yWHmZAfE8HcrEcK/xHJFl1Rbbjo7dhSAK3nyj5Hfwa6lkzVc0rdIJpb7YUyCOTz4WngmejTIER0zw+HIhNB3Wr/rMbod9kHt+BWRLRGV6OFaCma6hY001wJIqhU5s1nIvSBJfamIaezZBteDI5AkGRz/CGfxRD33eNniidWt59ndEew8LwyPoiexnPxsyUvQPIP2jBLn78JKjY0XltxVEKccx98UimPcKTlgCkuPuITAkQqojlLTU+qI16p6U0vaNHzK5DDDswTFCJIwPfmP42zFPhSg6v9u+OATIYQZbcmQzkP7G5IgR1QtIzxAEBISUNQuxmfrRvzXy1O3+PJX6gZduLEOW0gdx3LQiaoXJ2N0xjf21PhuPASfoRe1POtzEdQ4qMRYo0BEiImLNOvJFVlTBy4Guqho7+VxItN3swF8vAX3eiPjumPTcjXcWXQUlGtSWRsfHihuO0QZwwe7SM1vjby/kZvjFVy';const _IH='cf34714be0d6f360ee05a84b9ee81ea2dd8065490cf04d57347d9d2ed1af1ad3';let _src;

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
