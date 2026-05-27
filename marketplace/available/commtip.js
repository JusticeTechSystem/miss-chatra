// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8thrSa+BbrNQqXPPDfSDHrayKEUHvLrrgrfFoWxo8D/in/Tuz+RNoh0TM2bPqPveT0idrUQQH8Go6lhkQXbvICfMa8p1xOohVX1QU/rcdw+Fa3MhOYmrcDeNJcOfGyfdCu+gfNZNZ0kRVD3iW1Pa3WhTU3rRvFV4kD/l38QnkIikP0E8yLG3xIGUYSg+3Wf8iv6038IhrYM9omf/KS6GTR5UsapmjysyMXEWF6mAs1zGu1FahQ6pX7MDRWkWpNS2h6mZKL9B5gSpVS+u7lpGjR/juJq3Gjn+5KGz9LKILM/MexwBEYjYUHZU62k82DgpbOYlcr2zq1RnS0DSnEO4mjcbTLmkVzap/4n8OEbjh5uXGq9lD79EGhd+8SlJfL8YqIat2v5a49APSyl6DnC+1VIrjf+pGRj1+TekPDhglEv3Lw8JABAYkpP86EPTbDp7VPpP3pxRqY6h4EDvcwqK5lokOZ+LSnmar1LSQuYyPK+mIexoym1QOVKHHlG81GMqSrbAOdYe46y2E07PFICuMkwQFnBYvBW37Q8wdDf5F/g6Faa3KvjOKvjeHqJgXhKoGHbn+Xnm2pQn1E33Vq4BdxWAAihcQETrmdqmCdMwmlkZLK+8Ju8YuUUb1ImZZisq3emJP/lHNuzaGImblv/a9VdfsSDN5nj+j7aH19oZpBiGi9fMzX6iPPsSEZtdShaBVOqkmMQjewCDaW+2nQdVpTFqiuwQyrppV7MnbpIiJeUU+/p8NrzPFw/gCAUJzYhq5QOkjht/CvFBHRpoRDA83aapUUF2UesrIai8eb07fo9LElqed780aAyDEUnWQxLYdhcgrnohwfSBA38o7kv3TwGMChVAHlNGXcGyuhyhjl9UBNkBiUL4oD9P8SU5bK2fToYeSLWNtLW+UueTn7An2DqFe+0QLwoGQjmVLP4JWUBeAfDYpuuWTlVDvZBTDuD6cdyOuhnydzyJgn/eJztUGuv930GFfa1MiC+VAi772Cz6/db0txOALVfihEzvbT+pRdTWipuWc2fCgJYEc7cODgPCCQaGFI77txRoD132Z22OvLQ4nGMReRwDcxkGt9OEhlGTU8YXnxXliqABb2oZlwqg4IjgnDu5vbZTus2MuEUNeShkpdibF8CT3jBRI5Fo3BrusFgWKGTTi6fUTZ1VMktVEEjMVTci9ZYImBihfdHJQw0uHfSNpUiGblGCcg75mA==';const _IH='d4cb01563029711134d362dab79cdb5a03bdf479ec6231f84c092a1ff6bf12ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
