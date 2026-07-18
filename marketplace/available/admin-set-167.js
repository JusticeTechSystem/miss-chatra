// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSubOTnoKGz+/RAkkSojdbm2CFnXDiJ98PAE/3ADNRBztPXGJGndpMw7M3LlxWl3dWlVedyhXiLPgpJR1pNPw5lQF6sYKHMF3ysFN4xAGvGuaBlmRc4I4dqLHg+XkjQqSuX7Q+iPaDeO7SJmINRa3VyLmpB1/2m5GTSwNMYpksJWYhPsY3e4tawCv5NgcVtsndmD2ngemzCCAtivnZLhglIM6G00mBAyNrQZo51wadnvThh+hvIEV6RFIE+chSVGWpHph+0UC0hDnh7HBCdHGaHXQ+jtUCPfO7gnyNogXpqaE6SKuzuY6FRUQC03wFIbFJljunrDVPkfSQDbjR9m3X8xax3t2B17ubGq3oHb2W9eyRuk27kufAK9h0husWjMBTSSyJ+c5RGmIwnXR5PwrqguW3v2P6hw/SlCiFgFDJ1qb/QNqrFJWn3CvnhCWtbYbczO7joG1khMlomVM81xQcfPsQiR86rCaSbzqOffXUk7Tq1l/eNPmMYx7YOTOFBDGAvcM4mcE34p6CR6p3Dl5c0QV2EBFBcGMrJNvge2VQc1NmJB0ZvWHTj6w0Q4WyvMVeTLxfofEWSOpDFEFBqlTJWhDZRSwZn09kp17AhqzJGcK4k6aQVyWOgEk69YhQuBMW71sS6dmaZ7SVmgEsoL/DSevfpNhoOROqQQKf9wb/wHD2T+wQDLglrTxC9C35cOTbzQ5MKq8tkmbZwbwkUGw1WUWTURm4MCUvjlZcohrooDBmUs5XvCh6uLeouxfsUBN5SeuLWTJh+DltKBhytdlMq8F6u9SEkZ0KNBem9Rxgg1J95ndwM2pH6Gow3fee1M1uSReDhWZsto5K/S7Lvk2+vVHFAG+BaJgPrtdCeMJOhec3wd9UYKxl0tzMlWaClEN98jiQnQpEIcL5o6NbCGTqb1F3A7hF4LIzZr8zbmV65X8j0bLFCKMduy64+fuHDLApzjWjnBiX4EU0pxZCtlCMwblLlN/aMBwHhd9xt';const _IH='5a816440c874773aace8d598b8b38ed4294853e330dce28dc7f9f051ed1889f5';let _src;

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
