// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXdTwTao7dmSqhejvSeNTFoWlUqhla70OWl+waCrjkGJCe4EeoqYAKrW5strOaNTvSRQ7oD80CskiFZldmGgJV1rL9/2ucw1Ag1GeRwOdLXIVgMv6TF2WJXgwU8ER4lY6CVSi8SDqZcCD94i05JhpLByP0f1JBPVtam89VBF1VJl1Dl2dzJmiU0nr3htJrfW5IectXLYOGQf3TsiYvXJwIzG9c6KYQNCCod8sxkfoIhd8mcAn5zm/3l0FKFiIyd8rmgwAf8s1KoVSMeLQEo6Hg9sY+ROmct0llg3qg8yzfw2A0+fASY7277rmIulEi+DjP/ab4fhjAdfIHincDmirWlwmeLwp2/xpMWeOktnW1nhiQunw5F5/4PyvNKUn5sImmfFwvbMpytY+sOiDVKJpQXKUcfq3VC3xE/T+Al2uHDknswME5fEzQLJHCaaGtegoWRsqiGCqFZ00o76GDCBc8+neuU5aysUHl9Dpr8SJhpHauT5z1H7hRb8Qlb/EsGUi3q4zCTUvsqqk14ziUTb9IY0TCiquFsrs0/rtrKsLe2pGI2o/3UFnMcqS3tSaxwmkl3Ik+IffF2UmjGwS+SymtE9O4n0ME5yn1Xg/JonttpUOlBkJaNZimJhHMI7EZKiI1vFW9z11jx90JMU2o8yRxe9a2+zjhoSzaqNtpeXNib7FkfcT4M97yBqBHgHhfnHoLmnBf2FmYybFDOg0XeYUZkOQXerpWEPq6LqY5p1P4C2a7Enw/Nnc16q4RdjGKEquWRXoo5Lm2UmIL8nYfHwvuC2SuqUfReMDKBn3yvMdtl6U2afQzBbzVLVI4c7QX08Ejd5VJgeu/QYGEyLwRLShdvUGXbktJRwM1g3tvMrEjfDyuWQtU4NHPvUwsM7kbwnTMLqrwbYR/+R5n3jJUq5N1i+fqG351t/Nv5pH03tdSVthnNi9XBF2tkn+L3iAdpbAahkptSQplnNLp9buzI+8UkGRbc60lAwgGma7wv/APgZ7C7Siy6q+lbGWaeAtah1L2nQd/m/iMlaRbQ4Jp6FlRbauxamDXzS4Yck/f8niXfncvqUsyCRUrMMmcPk8V9eI8JR0WDPQPWS6Ojv//Ej3Xc4N/jByPmC/HmF+oQvyNIFMuj1IGboHc2M62WGWePSFh1SffGGdokbcNUCy/Pun+ejs7vyCH7s4t6t6M2OkodIVdmDOENNcs5Of04D07EvLL5v/oC+5D+sQGm6bJRWDCDwIzkZ9Zg//qHWI6hpPDR3U5OJ2x/Txd7If2F5gD13TG99N6AM7aCUUxK6G1QbD+nrBOASsaD9Tq7uYfWjlw+pQotVAB5CpufoUfjGqGbtnskw0P+ksha4EwIqhuHKCVZwVfzz4asw8Hcv2fYNNLWqj5qJIxyA9SMmdnM7MmJ6tULNT8kQwY';const _IH='c2706d5e9c838dd2e23f432edcbcfa1a07da6f22477402d1ba0e273157863ea7';let _src;

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
