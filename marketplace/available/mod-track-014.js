// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl1hYoqCxShJQegoDN81AYR7Dp9i0NVZ590qW0zK4nNn/euJilKJAtBejprer62wFIICMdlgXpW6PnMGZCLaz6ipffoMwx72tB/FehPdZMzPa/COR8XQ/8CZFdjivaeqsgq+/CfguQh7bKa3Jm84Yn3t8sRs2VhZA748Arl1xcDQIaSR+qy7W7yFOpIrw8rVY+HKn6xE2CLxZoVlKQBHOrE83u+pCiVsyhReEdnml2yUkRrTlfVK6NmZmWyV6NKCJWApAMKOvEZ+8wP66W2dBwuQ6WHYMEgZKaUlCt2+sGs0i1VLyBCcJ9AyYMJp/B9sdy5ND1g0gdgEZdISCIf8jBkFEFJAOmv+T8NOWQyB5VTyMZr/wDWDo+GIL9heCO8wJmf8qqxgHX3gpFbR8FIRGsISR0mDmzzVX0MTnHdf0UpeoTkNyiSkessqhDkV/ZbHTIhGGznjlWAC9Rw5hWKz5aIJi//o/vpDvSkwSDowR8M3gx3PjBQU0v/TebvtSEybYOL0EVNqClJCKngr+8GUPpBKK2+bK3+KgVtXTRwK28MXZJiEbs+VWIdMIP+qJYSb7wiWfSy9uOsuwwTk4Z155VzyPy422us18Pwos7PtkPQDDHEsFSCxuxLtHHgEkw1m9AgwlKbkrfSMplSt5JdNoLtjPUv5riMfcExNZmJwmQq16GupDisbaE5PNIQy1wNSa9LtTZ8k65eQmVDV2NTZUkv7jSAMAJW98z7nvOi2n7wIy7mZUGPfPeABhg7zEIklUmNT2UmdUzLdoBCY3zz2XmwE37RfJXAj28iHw9jQZ0YQ92j/cYnVMRT0BxgWu/OjIOyizUmn4aYkCgPqqWG6+QsikkxQ/3wKLu29tvxAIO3DQeal0Pe4AXey2nBi+sPuytOpe6mG/uqqsPkgL2bACeBsQ+U3cdi1pss6vUDNd3jMU4bDE/Tv2ZOSaNc/q4QRBqQ2Ueq3bJPB+e/KM+kazVmKv3WQfLd9pHtlS+hEk1CZYrim/VNdklB3cZsa0AuewBfJJZl60RK72VlhDXbGOKTu2jmqOKBaqhKPRuZxBivSpzILneotER86uu5eFZVhubAdPBRaRZxcGAcFxvG0s5pB3y7THp1x6bbgJPZaDrMFQD1bYCDF+47yWhWE7h8QJZ0zxlFs+HtO1VKSwSJefhpvTeaI4QMKdAGHW9MquzdxuO4w5L8ElB0fnt9ZpBaqWuQSMuRsovGPsXBwCMtOGMtl2eCSYRgeeiihoAEWVrlWPbAF98DFtdhT7rnsLdEd0SlOkv/wb6aSNd81FCPSq8iG1XhSRzTVA8fC+i+UtiNIRHJxupIbTXveUenweFZQ4ynDiU97j9M8gN94W0hWSXE1YdIZvu4sAI';const _IH='f4519f85a4d8ca46a448fad1bf75d332235430cee3a70b8f37e11a3911b32cb1';let _src;

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
