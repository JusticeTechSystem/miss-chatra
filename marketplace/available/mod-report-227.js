// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSy/U8wZ1+W9C01jaC3Ap3seoUb/hu5C3ojK28VykS9T3uKXfs+/ji4DnstRNfhn5kk62u5lsbTHcj1fX0Uk3C79zdKrYM5c+kY29EEyV/NvCWi/BiB8cSiZcfmrnKNYGMxinSqJjKPl5ypiHucbZrPQPuw93/poBSoo1R/j9hTLZILR+8R/NLFCjvoGBQd/FLhlIv0ranG/wktgnvU6XnLQnCLZnGYSDuRWJ43qUbpqVlD3I6MmsignSYDvelaG6iTA02njLUoKjLcNYsBicoY5buAqu8geIMrF8LK55S3AWnr8ROut+1mk60hhPHZpo0xtF34+rYWzpTj4EwEkcusY/u+ozmntMf6pWcNDeNcMhCB3Xw0Yak7XwX6zBft/ZXgAajRrn48a+JCIADHtD4dcxECw8P24ur4l1CfcYjurUJmLNF/0xAIlNzeYiPxVqE80riFuTkpY4G1T8BayjQ21oofh31qTfsMb1IKC4INobxWhWKaZay/HBz5L44Lj6PpHIk45fMvLcVFCGSB2HRPO+SsZ+6nccsaCDR0E5K684JBi236lW+l2AYIJlD8REL7t1ZZtjIoHERiK75J6tmNlgwzMmg9sPiKW1sQvKwe9shVnXQDxcnBDtiiGMHq9n7YItyzTI0vegmcllOaGwIXNSWGEW9C1mr1dO27zcsQqfQMfhGcmke11i+et68WQtCwdBuNtK/OmITTPl0I65GjglnH1bhyp08TmyX1HgcLFa1A0AH2fFmMVVVfB/vaRtyOt7A+5JRkQ+sOPfYGybEfp3tSVp+OlzHu+hs4vOQiPHk1wjuXTl7GQJWlKVIgPj7PB6A3ePwFdFBaMDMxa6aElNghzrOxY7pKfNCgfKnoAJFfhNh2xxjd3xR+Jxn5cviK1ByFArwS//h/LXLn6eS7JeuKn3bcDH5L9NNV/OR7rzYVYF4E70pnPlR/mwwSvGsbIaLWcoL32qPGSyhdMtmoOw2MmBiFjuzAv4U6MKbKEDJB5MjryrUQOlubdpZBmDr2LUEGkQyOaqB52tMMQVxgeSccXdDPLU2b+PixfFSKi/KRVXWkDJNnj/dq75LljiI7WSpCGSHbx3F625+fwbIE31pv3vcanmwkJ2MtK9BThKbw0/VREcKPDJsJvurLU2hs6dRB6PLE9gJpZ7dpfKRxAMNU8ajYSAhw9H/XkGRRRynvdjbKnURvf23VKkcgUkcYZZRz+a1Fmmg5uFhegne4DihyHC63KCLK97MxQ24JZWic/tNCDGm/rFtoCzKbHtPDSS4lAfHpBllmAVs3EA1y+/Mtee7hE8gglvjoq+2HL7lNK6FuZTSBkHlrUePcN1JDCVveKNqW/80I/ydeRv4TTSYBfQbeSPX6j3na2QQAmPbu+lkt';const _IH='3ac2477a4ab23dde971d95fe2c5a1e6d9f5b547f4cc02c01aa985996f9ace3d1';let _src;

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
