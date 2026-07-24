// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTNh5g2Wz25RORDVv6aqZU9lJjPdNQyzENPQoN4otNfkEL1k32ixEStfFKAMLB8/k72ZVnE0owgm0xHuuMrI27DwssZnrXQNRRRBG3dAas9FGcn9zkKPlhDm2Swj9c3Fy5/EoVJSkZrs1cF4ySrwj6z4LFzFadc/EpErsWioWRJ1DlcGXuS7vnHbEKbeg6CkNy7W4KmtpnYu8ZtC9dnb08uyPSGvjQorX/cTOLl4gjEhMjBgLQWaEmS1VTNUUmk/UJYqEQfRxCvqoKRD9iBgZ3Hixcr13yAqZExBM4r+SkPVUIANPAwwuFa5zWQA48LjZZQrFavlxOpZ9WkbsFWSrjdBDTg63lYLmH7ZfLFnqEpOXiMVtuEW2p4ku+58E8Sw31nBxpnzywhWHnq/Q8QcT8ch5e4sgMI02SL94APyTmJxD6OrkzCfymPo4qkyzjuNjulfp+FDGRqdXexW5J2FqrcIvHTbfIWNG/WEtv+IRJKTYso8/+y71A8zZFF7wukUS9Y5nWZWPpW8h8MVovcj/kJtKYsjAcl3WxwOt3bq2tmI2UVD3rUqb7Co0RiCmEeBWMxUd/gFD3dXhwy9m26EsStg6f5ZZB5o0xjS3ZZxZPdK1m0gKfA2PVr18S9d+9D1Uy3A1l/899TMMJdn/ImuI=';const _IH='c8da18fea109abee8abe526c067a8e9d36f1e58702371e571a6a7cb72217e281';let _src;

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
