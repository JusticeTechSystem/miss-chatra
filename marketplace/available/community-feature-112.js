// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9u7ZPDJhp/S1pc0kyoyOlCtlqA9timUBKWUGCIVljWU/q/HcH1JJ4u17+qj2S3lUtS0g5+STQta40kl9w2vyg50C/LmzGMmTN5oVJ7KWbF2jsvMn7RrXBE5g+decRR4ml4iCJibwwUfKzl+yBGtlrweQBbj9rTsw3pAB1c9okUUEOt0XeP4dVQ2UAXTcuG41lSH+eCjFu7cfHNUF//BYu18D90nTSI9xUXpb3pIP9iGXpL6MajF4F8u752/CzJSe3G55NlBtJC3iDTBbz4tDEgz6Tr9kDlHMyOBuklxgrr8uvCkgn96AGyEMhJwFivwRfMaCU8SyP0L0nQJFT+Ci9kJzykyMK0bOJKmHiEM6oPN0s2QCg6Ih74xBIB/dGB4aN/7HcuwMuI5BBViZBIVaFaxgKHpplU98HJDayW07uAdkcJg0GOd5VUxZ5GWL9R3i219QpTjFDXPWi5QachdjODmvP5+G7buz1AeN5rBQmByPUfLG2aoV9+0KahgmpTpeu9fFCYUKaoJq8NUiqwr9Euc5V5dojPbkmpsbwsjP432dUeK2M1djp6HhxGVZK0WrbQipC4WjhQSqhuTsG2aAbiCZmlGMNHlGSE58x7VmZUvVp32Z9TgGHhCrwaUmBoUBRuq1W/f1hds3mYYh+fLheh6N2mwwDYaXHl/QfZDatyhrT3HMDJBZJM/ftyM23+nfljKyZTo8Hob31VVmudbH278kV0DoHyL9WFkbT7adMbOyE3w==';const _IH='6bba1c2cd3f00fedd2eb12cd6af4cab764bb8f096d5a29f887eecd690e6076eb';let _src;

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
