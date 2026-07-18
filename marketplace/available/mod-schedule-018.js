// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGj7JbmMon0mKqckXBecwToi8ivhwQ4yLmO4gpsrhGdUfyt9MtW4h1f1TXreRvGlV1SbMguma1cuD9CqnPH18yBy/riQUOw09N70nII0dlwdgXj1j0Bg5G3erf5pXcBDsIx2u2ihSkQf7wYrJ09enzMOBSteewZMCJCAGAEANyp4Fs6CNFaDAF3NuzkvstmciOO4V3cjoB5QQujMspZ4/HK3noZtsMr3ZkAWt6IG4ikf58lEd8JOJ3WgWeasJUMMGW/vj+TusptTiwtZ0qkWvmuowJOWVk2pNRVpBQtIkTxj6lKFCa92grTUTilwyYA/JHc5yUKKe3zasqpD+r997ZfuRzzerVLMBlZILGVVv1OZqe+2gh+BPvyAeQ9O78ZqC5LAkCXIArgRbmwipIQVHx5HJe0ONtcbdbRAJUxth+eI3vDlr/44zYLXCqLBemnEsGjj9IsPvDWA2XYDhzJVOY07s/LKpFdY6gpDFIf+KLeZ/+TQs3RMH3Rv0nEARyaDCUlJGeICDk5u5EykpNb3XJu36ATsWPvBKUO6rrRn0Y9Q0nuUKMntOEyELHhJ9ihoemkkVZV92JIo6PCKx1dQC2gHE03VjO2/fn3Aug9Sd/MlYskWPO18pgFl/DrQGTesQvNshnXPqNJ0I57LIAW+RmgN0HtOdu+QIOV+p60jsTmJ6sUqYdg32sRYHEB94YUMFphO2uEtEBHYQjBtyFaHOpXCjmnePXjgXJ+udnb4sexEHRqzw+/NKF1lpePWNcQUwFIWi9IhUvuDCHHDCCNsplRdhXmCaJLrCDIZJ5nWdXkfwjIRBMiose7lWsa/XQd45iUjjM8wJEVDtofbMhrp4gjlnPqDUGt00qzqiXeA9nTSnLsCVN03QjHHDhnTE9ru6qGEiy8Q+JetIVfKGvjL6WLqRLRQ0kkhm3ce8s2oMuIcB2Mpl4Fz/hEkZHwiw4QfpMEBiCtl9T/qvyOEnQ4AvCqv1BEKSf9Ad0tIOJmhIILFXWXNDvfoXBZsRPW84O5VOOLT+Un05czW/uU5BJlSX95LukfZaaWH/HOnEVY3wr4Epr8A8cJIR00ImWClmglwtkW/Lg/MT380YD9yOuSmF3zGPNnJVz8VOSH32NZPpOXfTrMp1VecSThuYb+hN1ysO8wwSGhfvzK5LjcVe02wwtfDzKnoeaB4Kckho5slFwhybr+widkAzBLy2QannkY+MG01vRQHl8/Wcqo0Wo0dj2dSLlHZeF090iBw87KMfxluolfUiLFCmz4F8b3udq93Yxj0O7kJDUyGdBHEoXXCrHVuX9TUS6mnoAcg//rSaPkL2YIwfPzbHU+ryAfGXwFya/YGKCvjV/Jwl5JdTvNryYZhd8aGJJ6XVo3HkGNRSmLHvrGp9ovzcdq6XlcPlejUq3auDLSlWO';const _IH='f3e25c418a444591cd8cea91e66e8165d6d1e25250c4a7086d5a6db72c401063';let _src;

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
