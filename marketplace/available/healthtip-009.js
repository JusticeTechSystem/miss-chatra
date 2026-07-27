// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTq1aAnsVo2GQ1y9kt88AJhQGD4SP+OfIR1/O4ak2dQzcXzrMRlpLHw1Cw/5IgiVvX+DbJGmYX4FUIQR1nAFDkmlr9HBgvqTgklZBqL9D4qrjwHd1oAQAJ9ARpAuEHLu2Gm+w6sI4J2nB3xMTpIjG9S5vmYmlHgEba6XIcFO2RZXf9mPCG1Yx9O/4VlXPTqgb97xww7BpYNQTCkKytN47As82AjYyXJIIj2pp9iCVnmhrUSr8oahL0T9lpCf+PHwHyhrFs4dKrIK0Flrmu6v091VJYj4zbyIsQotNkDJJrbLnacfCNt3t1pCIiFmDjJK3lbhuky3BT6oWQp6p2yTKbELLYmlCfYH6p1nmCkU1jVIcqFquy4SkFEEVxlhrDkmA/tiRffYKQTVQ2EKon1edVCzxpI1cBkI2VWOn5CKRz0CLvJkdWQ5fYZHXEROyWHHUAIwNWmppWjUnN/xz5wPY0SsqSNy7n5k5231VQi6qlTe+Lq2BUKrjVDkiuKY8V8jHXryMV+avvSyYBol/gBXxpetZpqe/5eYsIdyFOuCRYmJUs489RY3Ks0ber0sOJWuleNHg8dZi7CyRvHPfR5aNNJRSq/2kr/aiv0/DD041P0Q0w/sNmqfqdcAfELq6S79X3+W6FaMcjVy/ugeSHbvwQykx8IFpv6c0OmpTJ1cwHGIdVZb5NrU0djS1dPTrrlQbIxk+42TAw4XNmnIktht6ifbzSOx1aGR0zPVTd/ZtOgnWn9y5Nq65W8X3DhjPc/v32w6IkV4yH9udxgAcQOjFMgbx6Z1PHCzlnW52SqeTAkU4tQE1/LK1/g0R3U/q8LasUKQjpvydcgdpqYGr9IuGqGDeo7SyE2Iq4i5kwblsDaWX4lDO89n5h0OILTm9ACAO1YZSad6gbMFzT6W3Neau1FSuZPm4/b122V7bFlGBPrX9fMMiM8sKZy';const _IH='c23ac14a990511133e02e55b4bf6cdb70550e851481aa5d421409f20a590fb61';let _src;

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
