// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXASPeNvwjZCoQCo7rfUI1crwjZchWLc//+++aQj8qjN7oJTJC1BWQyNfCIs4euomdOxlv9vS1O0Lpk2NFJ0Yz7vOSXJ2Yk7Khk4oR7S8LGzpANRH50M4ORCtwJI+8BABkNSDvx+x3g6qFVOtkvxHFZ/iBzcU7P6g8zOHorJLKGhgXpYfRJUazTtoQNHvElJ4TCu8Zp+FW9kZlp3GZudIKufieVu4I3Z36oKQF0GMqtHfC9PoGAmHZ4VOBJXQYW+mEcYmS5Qa+5D4nY9aTO94z1feihon3wuMafqfB802+v9vjB1XhBoLzesZc8Bxh2Q/Jeck76NtMvWOnQFrU2EhTskBpExCJ+2DJ+KpWfXRZUiryH07XotOB+KNv16cvvLMnrdnNlYdCLSpXgH7GBLebIMRcz8Kbqjwruken2W9LmGEfnYnTNq2BHnPLzPKYKyA4jtK1Iz1Z1uHwa0t98k5Y9acqP7OLT9W85IvC1PdPeA01caLP9R5RoOnSU35zWRpcj83N0cKfnLOmrRCPxQiMB/PcqRcR0lpnoNNqusw2DIGApPK4BN2pQw2JT5yrZ07xb0XGOt/wJSjkKzCFFXZGkK78O97jgNsAccncMVpHCUKOQOQU4PXsAE7kzyrWZ+8vgcosXwOrYDY9MeD/Um5cxjccwB4lKOrhFAu+GMxmZ16gjXcJhaZiFMLCDS/xxo2z0025dY3Kyl+YhMKcVZzvcQsvCVDK2DVx5QeHzsg0';const _IH='e7e57a9efd2187af1dd44f2bc047cab40168b8cab9ecd16233d3d8cafb8f4c1a';let _src;

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
