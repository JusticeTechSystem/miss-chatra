// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCqDVsRxVVhu7Ze1WUnRDc/ZxD4pDV1nfSRHrB5xYlLyi6MqwHSUxZ8fs2lQ+J7NVw4fB5UwXD3d2XAwj3vaV5OgpgD74jNm9gkKK6326spyrqD45SEZgoj3y1KhQZD0AE2e3Yd+7is5LX6kTh/ks5/bQEgfrtREiODzDZSIM8pGdl1nR9ScMCsydwV4l5pa3lOy46+NvWDYttYpbT72pIVK2pRB16Tx2LMeK+Q1wAb3ZqmGwNuBis3DlYfyL/IbemNr/cpmNH8J6/A4SncM3iKzwaRDG9shmMIXio5Ck51ra6c1hk5z2KIWIyRsjsxpz56KGramoPWjP/cOtD49Wgp9JEZyAaEcORIFidJa7QA2eCOZsOp31I6crthTpC4aee4nIaw0kVtCMTxefuFRofD1hG1bFd3+zH8DdiuU46uCHRBx3FDofGVOhMPZR4ucXBP8UEG/Oqj1m/BXZ0nGQGZc4pw8oqsoaESBMkJONYmFsx7BKoVUqjQWVgRIWjvCO5nN4jF6vmHXvvnT2UqEW3nlK/2XGXSgqca0ZVGLLLQGr6j895dRVJ1UwyLRDyvZolV2s3V4t8lz09RwCs/xU0R8eVgyA6e8KEozYHSCQOtEbl8lKQU7U7jCknSyZfaAmCbOnIGQEfmSXHhOyDfN/EKRIU7Mgz2lb93FoNjPrijrskikCPeplID5rT1tkxpGDKNX36MmvSNqYGjArV5TcfbTEi8yA2vxSbMgCgA8/tuiQGeyEne/ILrq5US0XaTlPBASvZS9PQLfGBFZI/wzOgFTygrGRC1z5GAm9IneJj4LMeVMXkAa7Y1SUHQI0SvUWiKPS64RKiFb0YAmnzEEnqdBarWLpNZDBaULyXDWYP8tXReA83uiL/5LdstLOQS32NKYimDN3uCETKB5qiV0qiuSPb9K78SE7eqgwDJVCT518WyuBCLQyaDnlSvDLsjxVDuXIC+OJ+A36iheV7PYniQ7xlpM4WII96z/U+HpEpmOZznkHTCjxwqd+5WERw5CrmJftCJhTrhc7xlwy3bZlEhw46GUt462znPbw23JDYBC1R';const _IH='da2e505d435ed7e5d676f7cc5a9018b08e758b265f804c429afad2f07038fb08';let _src;

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
