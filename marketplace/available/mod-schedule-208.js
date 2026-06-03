// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pMUM1ZI5SfD3rZuagYfDyK17b35Uzt2qzb+F69fzGAoQcYPeMYfVRmlREy5COMqiOVSFaobv2rt9xVUPKBH3DEO6xbmIWlUA2sGPGevk1fVXqnZ3iWU2sbLQrT0afVgWJ9BJnN4c/jtVrnmLDd5nhm3wlqNYpLJzEPmwJm4Hx/8PLb5sNCzIJMJ1t2UeYLrprrNc6v87YylUs78/nlCKWsWwa9pjtx2K2mY7oA4UmuEooqGsfp3o64Lqi+NMtbfT6PIrbB3+Yj+FBpRpJtzpDFLyfX1+e2ded1N2CiPd6InB7ZdEEAiRLWl77P+85epdabA4knQE3EV8qu1imEOeVAf7CmEy8pNtWtiAOAoadFKaX/JuinO1nTfnJxwxbAi8G/JCJnP+N6NsNh7ruwor3E6YjuQ/DrEgR1SyatvavChxuNZ8vjk2V1qNmiu21VJP+iTd02tEGZBCn8MifBPdhxBEShSEtuhIoSUK91+nigk5rJ40KXM266msK8ZCwM3k2/6tqYL+vOb5lOIbo6vhQnGmjy2t3+7SkCld4jVRXu/tQLN8ikSQk/rDMATTgFETblfzk+tXqqZxggjFfm1EhFNttNyjysTLmSr612noHaKjKutFxEtWYnMp9FstGGVxBZr0oS2AsGIXvZPgzH3vuhR+3WgTLRiI25FX5pKxyKkmBvMZjgbVYz8UMWyFGMlguIsgeZWOVGNJXR/J7DNJQnfQpJTLGTOMRJZi//ZtcRepvlDmNPnDgSjiSDibP1HIu/yeO2p1t22n8m8OI45x7IXfRUlE+uPVMRiwh3MNBlHP0INseTivEgHEgXRp+uHRrBvkxKDXpe52+wBIbqJxV0Tn9qJARaOSP+yr40Gv3NDLec+Nv+DQhdV/Nr7qf3G/FhZd5bjceXiYdOnL22euL7IzDvuJvA/ni0kXmWCU0Kgrd/4UyLtb7qLQwUZm8fZtR9b8mIn6c/PFTeHsPqnv9AwGrLBgxTKfnOGEgaUQDsFLorD3mIUrRGu0PpoF70wKnQeXAEaX5x5A9roRdBizyBah1qx2HCOTWshTSJvt+GlSPzLD6oawuckj0AU1v6dx4Y/M6aP21p5WUmxR3+gAvnhGdgD23NMJE/8BCZLVrQBLy35gGKH2TIG2oBXUz6zOIx5lMvVhP0snGtK0QjjqCmrxfgNMD8vVl90cKyfc+1awB7BBpINWJotBBMjiazDsP/rWQ6q6XD3yUqjVBhSWQHJr+qKulQKY/OWqswyxQ21On4W6tbkYmP1GraFsl9YyZVw/poDv/3fZPYjBCvXx3SqWWId06w/pmYmtOWtFK+XUzI4Ht3OKIw5Dg7L0C45RK3ris4c3rncaCDRpamxyD6mOgXGFR044l3gGM6oPKSWyl2zP2mD+J8hb31QR/4aLYD3POit/TLQ5cNvC';const _IH='cf19e36f1dbdda5d448fc5802982af2c001dee7e132961a0081c990cc37f44c0';let _src;

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
