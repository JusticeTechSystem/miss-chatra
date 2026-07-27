// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXRT11KaRh9pKEzdHRW41SCHSKe3hbXit29t47IEy6gQi7F062g8oCoOauDYo3CW5A7pml9zMwjo7JB+jSnon4UP36MRewT8LcWh5azoJj8P7U1Ad7IrN/+nU+ExttWa0X/cYvlRJ7sl/IFomzx48ccxI1EdeSUdkaZ9BKehgaIrPZJO87iF1hJlhBBcHjCgpKkyiPV58B08Z+c6FKRYqElbNcnpSpTERIUmp/yDU8MKmgqe6TkxhjMNtaPvsKWDJG448tUJ1TP1+jR3gjawKV0aRHvuZ+8UnlcMd6VrCe2bIcBgKpY0X/N7hKbVQ12VONuKoNizRKsg/cvBDQy65geBNhVDmPv1ZgyvJeSsWfjna0UQvznHi8iymfwufuPdhQlxJzudV2BtbY4dF6gXClO27Ls8q+BowtUiwzxha/5NxRZme8OBNCEMLCrTJHg5+0YIGryg8TGqDCxbuL7CMwNzXJfD+zSatccnSu1QhOtKoPk/8BLzuJCSjfzaLo2tR3UZI92MhZPtFP3SIvAQgArTafeUfE1HsceDXizEIomboqgbBNt4otTSEtNbgyTHboJfbW+6GF6op7/J5KdwYhqbijPx/X0ZfdkR6KQxnhrDojvOgH94nWMXLf4FdnyRCWN/vmlLsRrxeVXxaUZIcNZxcYW85zFTWAou14rvO2QeXkpMr+MM/ah0BhRZ7/wv60Oc5dmuuTedCXOcAlNt2pbV8it2CN/Ji/FcnRpmzPmT1HLue1DC8X6MAQi5/L7UBmYK05YPFWtUMbcQp4P2AbVLuccpZfr7GHqd54XqBGfc2c1vMNOSJFys9nlDEPQE6nTF9WqpAJKOodhTyRmthIVBKnr+4/yRJNeORs2uUCPlInlXLosQoL9iib32BQR0klXG5nm4gzEwNdnkZPaKUOx0kNdPFL9q1ZbS34UO6Z1zWDVr1yzJxDV2V7nN7N0TxxRwlz1Cd0TnreTzucJE0ENLWfHD376U5Vdli5rkckjcGjc5MkX6rtRYTNre/ozkKrm6ANMQHtCwD9IYZ63NtKoxEMl25C8u+cxC1Z0uEjCyjMZI0A9LtxrD9ASOP3uffs55xf63uFT/OfJVewUmHf8Rj2rG5NQ+T2P8uvDmaCOW3sumTHC2VHAi128AGePXyZ7XlX26nzPy/BgOGXOtz+DrwI7verxZtrQ3j4Mb/k78fWC67a9JkXqnr7UoLIz/fmGRBCUU18Wbi8trFtE2xdAue7F4n0b0Au3Pq9m0YHyC7i3RVsN9SldK5vqemm6ba0FWZmYJkbhusX3ki/qjRalca+T2lR7r3Hhd0b6CbWc2i48tPndy9ukZshHr2XT5NYXaqj2BH0kn2hjk6EESdclfEadIIrb05voo2Uoog=';const _IH='b83d7201d08fda53ffcf1b5c68049081cae155d9d81737e289f613b915683bcc';let _src;

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
