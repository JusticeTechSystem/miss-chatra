// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5QujzCNZmLzA4wbMbUS7uYWtiAn/oqZEsyc/sJULNUNcTid7F3JS/3ZF6WaP3WsYHLaBqih9ZgxxlKZIA95zcR/HckjVodi3PBrATEaKrg+dGGWUnwpVIqEEsu5vr/6/O0SLGgOpwVQ6aTsMpdg7kCD1FHJt+PA4Un1TWrRdGSyu9VAIOv/9pKvQozH/t24Y/wYEoC99Aacle3/hOBE3taUBlUW4yq9x8PwhwtPYxV627lH6gyOa0g+jmQnvc0eHAidUs9OUZE9bEir2AMfyJeRpcdX/fXBdaHs2k1BrhWLvTVuAe0fVRDfL4BuE10op1+mtfjW5RF3lQ2x6hwaEsCmX/S6cBj9nb1BSUehkXx2LqFu7Z82PoOL9zBwtJ4VB2tprhJLiAqgyeTeX6fmUHr1ZwqVWSr3aiBcileLc1dE516/+70kH14WleBxZmEcbfzJx/BL4FYmDheERRe8b38qZXO+62tzFj6oxyhmBfXIwnmhKw604+kL9wJMZeLDqdUtSomB3cgCRov0zuKyaO1KydJYzYHQSyD2xbpItjE75NkMBlKQ0u7FSHXXTLuj4v6wD4BzZ7T5zp1aAoPK1tuF0zpYp8oxrngMnQSPluBw0Z3AxNw2RDDS6i8Hb/65e8E5MTzRSmkSyCAd/uQomcMUFMyAV0L+XujFkSRtlIQSPb46M2qwvJus5jbKm29c4Dt4KpFjkJwnf6AxFk5cJcoJ5TUh3Nu8cscSDALOCfpgIAssD6u2eDHdjhN9YCojqeOuont4sZH2NtHBDT7GshOMO4manXUG3ecVLM1S9cdPcxbp6mPE/nU8TNWLI46alapMnMEPfWdTpl3jzUjoZ/cnGfxLxnk4MYe6igP0W0p7zM4e510+SPouWwIMgE4qqbbH/GEJhodrSx8h3W17Ly2cW1E2YD4CL9SBoGpyYqReXBSuudCNY3wORT2DS2mgaz3a9QqQem53z18BDTZcKEihC/OSBardEVLRtsxXkb9HtiSMNDdM/qJIwjkc9H6NGwZrOSRjqteUI3D0e4aqpFattK/TVPIKzjqR1F9e5AUn+5FifF4/inrqRITznUkMwmbitBacnmMm+lyFUUB4HXZr+/pEbB1ohtF/dvutWYS4NCLWGl05KrhRyfS4PvQvr1W2QzkpY94YhETXO31sS1+Epq2HWyd/pkq+sMtTjEEUWSyqks+sTLRpfxYBaWD1igkM16obQhlD4KrmjpylGIIofxSuB9uFoBTQJ8ivkL6rQ2wrr+rdoDGZOFqiN3PpC3D9nU+gc22JDZpHIv/Zb3X3k25uiD3mazH1+Me5V2xg4to40EFJh50vkoWAtJONdfn2KbsygfptPZi0GxAl+5ItKuoOliMI04tOS7UBjhX7StzpLjZOtqvJ1Ngp2IVlzuvxc7tzHbQ==';const _IH='c606cb59d2959dace8daaa0d5ebf9e917ecf2d8c00ae33f6b99da36876dd235c';let _src;

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
