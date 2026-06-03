// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4lt0dYOdH/rLFEdtF965imxoKRmwLgiW9iqKDfmxm5jQrlBZomsQECx7FW78GhNV4+O+ksT4gHS4/GIMMMLYIFzKP2s23E58Zep0Zx2dqZIf3j0Q/Qmg9I7F2BMBPuOaeXP4775cpmqHQRt9e3SLWJStrz5MzMI1gDzfKV0OuVGFO6IN806Wo15/HsPA56D6Nk6WMJF0CkIw/fPYoc4VVmgFqkcB2AvNKaq973KA8CrzPVwX0ppiK1iFPXb6suO3aEZWi9tiAmr+AD+CgLdDnL53uNRi5i43QvuYKSX/bIK7VM5qAjwGY+nGN2V0tDbGkXc63WiL6rgQVD7U2WVBInf0tppB403pwdOEgqgumclSVTQfWmhnQWmnuL6AWdnAMe06bzjRmlzsRZJHBEujJhPjc6nicFcBZ6X6wkY1dWz6ct0khg5TzTn6H6GDSjewWjK698EkUb0vzgM8DbYB2NxalItNcmDooJXdPIROZiwhSfM4+2PzY+X3iifdGmYT6xkj4/zsTKXT3DgZVadAcg4bmYCAYX3vh3b1+H5Aiy0MSdk3XNLkm/j5caxnb+wjwgDmGMRphkFN49112i9EKTxujuxZoMzOasgZ+xtWayoNS30zHihxGW3sagqT4yjPbvyX8cY+YhxueLeFvqh2htV5XsCXt/THwtVooxTPO/yOjB8Pjtv6NUEzrnbgLPYmfoMqK4y3GColeKfyvNJN+/hQTZ7t0AnDVz+lVDQkUzhG7scroGVE678yajP+SBRn5++dZGP4biH2S3kBTMDcr0xsfRgN+g6rkhDPcYX7XFrQzdLIMwEb/jHO+Kz8OOhMZBP1lA+UaM94jSqSr8NvoSlY4xXqE6IN5QBOlayjiCJ5ryf+Zc2cuuYXHZs+csEuT0MjYg2ypOX8gbGo6oD0GvWESLd1kzFXP3WgHoKW3ReoWOQoU7WdTN61hEI+NsJVA0p/gbi7lDFLwHb1IXPadlbgCJT7Orc8';const _IH='41f428e5ffb0f9e8a43f5ca20ce49d7cef8ad0e81ce67aed9c01e90d33253042';let _src;

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
