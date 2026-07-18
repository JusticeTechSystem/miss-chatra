// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBlbSNpBjYZNg91EgMTy9Jr5gTnUKA3KgrpL0tWlAHOhSTu1godeNgrjBuhhnFnndDgUCdUqY+LVDuJ9TkW8jyVhzeDVd3JGAiRnpCLB8/U6kT5EgGgUIvQFig4hOwtqVjWaRHJrmG7aBXseWfbA0MYOS9Jqd/63lcF7ty1WIz5goUV1/k0tewYdMLgh6x7hmYFpS6Xb1ppgDi8TXbMO3CwSwGARROdQ/vzhMPtft5tO/4adQAPRFa0kvb/FPA/ZYjTU1b6ytsiaGgp73josS7qK/GKN1jOSDAiNVVGcKTx+/ab/ncaIVkDOjCa4fcOakNXPlHxpZ91ZPAjsk3YkyiqWLvs9CaPxS3P05lxqfC4BAiKna62EU6iGvivE58TGjshl10WATZ6HY+Hi8W199IsY1zVmtH1omPUCiDneoSKdcfE90SSEKk3nMNVTDEaaQVzZ4w4Gbakf3pdivIy5MgeK4MJLhzhtXtPoHP7QiqSPl3ku6cRwf7kYqYX4Pa321Qr4EccTHuoeW2YGKRlkUL9N9iI8Ov5bGv/XdSOzU1Y8rlTrDc0P8ktZdFVkJFxt1Qh9aOPlD1yjYIP0hfcnbxkyDOfpxPTSh7SgcKG8f6Jwp7TAt/ttEubCzy1Qmh2P6mZ8NnByaSowli7nztpz2TCp+hHoCAm8kPDdMN0elq2SKL0AJb822x24auNs9nhYFqkpmIeqEh7a7QfyRLe74RapifR5oD1Wr2wsWoHamKnBusK9PW+rY+iL8Fxbi1jLw6vqPfO76A84S654CXdZgpQpecnc9NXTvSnQZxQIJ/bxOQjAdh5wwoWtk81XQiOwZIfq/3Zy+zDMzjVXnfLwT7s/SRDp9+CxPDRpUPTuHjcAvJy7HPmoGduHZOlHLEHL1JLjQcGDC/7wNDsGw4o+bbS0wVteQPlZjX3U7e+NuoH6hw74kJicgnG+6kYM+Xo/xJoBea3etktVzZNwCJ7OildppJi/1n1mdDfhGyQn/AHKJxvjLIJhBT+ppqOz8eJF+t';const _IH='e86730fe458908ec60ff55d33c9d7c52721e0577a4d154e5e2e7b3fd621ac253';let _src;

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
