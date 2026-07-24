// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxIFr/vkovOa45XW0g0UFaKiWoE3accvfk4SuN0j+fsodgAD/FC/7uwBePNn2Ge2x5vn1hLNYijx5mjjdRlADp4Kj63JBvCGN1SPTeb6Zr8D8Q9+z1TDKa/6y8aln4HeJiVI/K5EFuloZ86lOZm+PsIh7no9BR6zdQlGqWdt/na3xtloEzzIyTcRU8fqm2ggmOI0/RvV3uCFQ7cp1qwGs4LX1idFwcZO99nE1pP28+O1HcXAD7utSE1ddlu40Wsgv6OMEC4DD1b3y10QJfAMIh99U8oLM1BCnDJvbBFiUTDcy/w3yLVvU1aMEpWxGSmcMR+bYk/Vwu6uZV1c51y2ihwsIpVC1HV9fyybAVY5Wto767uuYVwtqVQqtofaneso99vfyxT0AifesAf0sxxbYIsT6MgTeXkEWc14HO6xjfXj8JEr9d9MhaDSuX+GuZKk2jNdmJxiqHMMukKSbyWqZW2QOakBgR9dcxDKaVbhgDLCvM2nLXC9sptCZrH44W9PazdHmj3uOqbAOMf+D7P5lrLvWt+cFQWQnBbfgAi7qlb9EgKsyi2QnJz9cOlHWLhJwcMJhpBQ==';const _IH='49b7fb40fbef103c220b85e3ffab53909aeaf72d503f769e059bf7eb146dbdee';let _src;

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
