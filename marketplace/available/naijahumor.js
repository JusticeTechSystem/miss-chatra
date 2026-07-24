// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTWtkZjTxtnqfRF32FfjbFx9VIoxO8QDnrRKyToLR1+WgQlknbTXCwDvH7tnf+NcDfyZSQIWgD7ifu80ROo6nb6/H2MaQjbOXILYY8Wp7RZvRJxLYQTr2Mg8N1UX+oRGOdc58Bg3YC61VKqNkla8Wu97gWagxRsWTKujF7VPRhhfFIqOBXS3huku4QhQWqI+BFH4CIjd6o5dx5vEaTWaC1QzA86IyyFIJM5LTRq+HGSf3xAGKngo2puVzgj5HuvPtzs1fzfSm56bN/8IMrmQ8Bi/yKeDErJJ/GNv25g8UnDzVVSj5BzRO8MePFC04RPkfojPZ3cJYtYfR2OLN5SlWw5grCiC2TP5hYqJJgKsNcw30xw3utlH5yUkfLcfq57VPgorSOLGvspPqZec1e304GU9h1mVTaJxdcJE85Pi4BlbgF9rAiDRnQ5mHLVB/JIFDvQsJrVpAojdnkVuXI/mK/6XKLEkjR2DQ5wuGGCIR4S7x0jovevPm9j8OdpWeoOrGXdYETWvt6mN4r5Ayp7qXJ6k1zZbAd7ORcaGaqIwW1DcvKwk2DW5BLnAU/S/rBEsLmKwbxUibThywLM2BIoSvns/+L6lTXPUKv0ViIr/vQyh3ZxLx9eChZ8d8ybGysIApIuHTID9yrHVz3Ut9VHX2AWPuq7XzkGE3hEw1JT2CSSDWGt3h7FscCdWfVz1OyyeU0fvxDq+wvagFyaXye/K225AD8DKoEJNlFJBFDSw00X/cpHrDbnOAHaiPlI5haN5UHojxBOdxznviOv6rMLgddPab9TjCtUzUuoQfMCLc4x/TpZKhVt0ZcKFqvBaj+GSw1rxwVPdGhhNh02fndAaU3TiMnZRnmjMFIH/FTrK8Cie+CGfQhO1ph0k/HaDnPdX6xCcLPLz1W69Z5oqDBVwagnhSRnuIxoUXx3VQZXQLqnFs849yKVJYWvZ5XDaV40k3Vx1wXlt8el1MkWZytRe3HMM3SqkCUvqdf9jeKxARjjdmWAc1Mweh9+tgGEEHXT9D2MIwzZ+nnG0XJ9eKw14AaTW2HmCKVQZU22pAV//GViFBQRvLhCwkWObbSssoYmAZDTFX7LaYzV5YFSveysAeAj5AbAf6h2VhRhJLxxqKit5ikG8PQVQ1BdCoK93z8AV+AxWGUutWW+CCa212VFrvOlpXMsKWqKcfw7+4/eDqHMw19XfQ3NpZTZDhX8PJ/CfXPOCKzq0c=';const _IH='42c459835ee28b7128bf6d43b575fab601bd36bc3a7b66fdc4a6a51c895b9234';let _src;

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
