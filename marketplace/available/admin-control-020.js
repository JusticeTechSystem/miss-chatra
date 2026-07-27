// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSldVFrUeLIOkfcEMpqIakKNGbMEA8S/pp9I3jXwv3anecu+OdApYhjyFhW1lTQ4zxzgTEfnTAZmeDPeUen/vFLZF4pitMHqCBW54bcfvEf5AN6k19TD8B4R7HjCtPXu0A0rmT78OcPTOvWuLZFCocKZXtk1SvdAW4600FNcrFZ1AX9qfiO0W1mzij9sQmWJQ1MfLdmdHxCSLYNAavEfYplyZVkSTxs1+17WW9jzXBXdgTKIFKPuSFcePzl9zBSfX8nMPz1q1sW2a9bPaPgHTS5SXNuHOCcj+2v4ZBIdbzV9ht1KLnDVrHUsC5WAhOeaBNpITTDtgBHa58ZOH9syZCcWLhEqV3cdG1pMyU0ACGQrRUvaOoWUtstZmV+pKjZhbnW3M2D4xdqk0yT1dn5ol0rVV+PH1RElAC3u8bV/6166ulRhZ3lDUjbpX3Q+tGcOgNgMbQuVX6iWIXjCWfqL2FpovxpvxsqQ4QeyO8hGqRY3gDkKdrw4ui9iwECyesIfa9OHmoVTs/45gwaEUEeA2Ke68TXXNYViCmmCejLeJ/I/xkElGf/npWRuSS0q8/iaR9+AN17hjSlKFOXhR9wRhkLhNpB8QbkYHwYjoStAurCkX9k7Uqyd1oU4cTFqoCtv3stTBNyLnjcTh7n62X9JTun75WzlHELy5niZJ9xTztAzIZP2zv1Kl1qqIt5rKoR0wFzvqm2viUvQgJV0ef4dhCEqEbGccCSI3no5ON48eWfd5v7kw7ApMbKPIE33XB3kt8Er9USOCrLKOZRVeFpSZmiIvfYxgHAbAb5pnm/ge27Jjh6gz6LHkyw32on++dSIdvxl0ucMIt2pod2Pr1CMVdsHFovZ5UVeY4DO2i6aNQ3LLfFYV+gSLj7eJ7hB1B6LqFKMIT5KfiuU8oGBIJSDY1yDkG12vpy1KRUcjOaWHCbVl1/1+PyFSgwrwpHXCiRPFgOu2HY6kPWULBdCFVlKggQJY/tdUAHk60rFOcOT8JSu5QpiK6hxWyL3xjRDWrqXbQYbuXj';const _IH='45652cc4085823f477ba8920b84928ead40024adea63038c3ea9b605d6f37757';let _src;

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
