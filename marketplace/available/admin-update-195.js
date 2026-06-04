// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zvN1TyzlMacNJ+R/n/MxOqhfSw/eu7cys0tHpzcdT997m7UebIq9lXbCYA1FFzjng08GMm33QIkhl2rWUAAr0c0a/BamdMmQAAwPy2ZYxOSCUfSd9Qkfuk+jpHD5vcokhCYMDtR+hGNjMauyuQcexjLWbMplC/V1O0uye+cnLlOguCccp9nJtDpfyQvG7s9WLPr5QEYV7dnCA32ZaFthICqNaCh7ipc7ORpu70KEUa3HdVCDl8Xef7HtVJswsBAQQpGe2FG490z9qvRWNujp6F4xjn6jrwGRjRHnRzTI3Z2/UbUHWXkMpP/S6kgJLF82bNn/FWelBg+LzQv40+o5A076jXmgfZqNujNxOS/0fRv/al+1YAPSx8BTaN/aQoEWakIhbzfe3prpF7Hd26A+H2HLx2rLpLYUzM2AeK0BhwMilN2KceslBnH46fGmWy6fSa/rQPYdSfPrACbE7+JLnNd4ONl/RUomNSuqrtYn/P9D+ZN5uEvnv+PVKo5THhXWXwnv6j59yzI8T1q3UnyLJi0gHbCd9niqbxRTE6XNoYCwv+n/hd61tDfwOOWPG+EXtLfDfidlTf2zlAquWKi8Z3+OzQbpL+QUvbXC3qY64EDdDORwg46pIKxKUZ5+J+NmdhWuwaD1IbDl2v32Cgz8zY3ue0OVa3fZFu9Ub9n8dtXZkyxtDowmuUxPICBK1qrYZ8MUfK+qSESwXVXFCigcRv5n/UjTNzUuSyl4qTLOzKq0bnYj/IFOkwpVUNsiIrj/TagkdKr/wHAMTH6n26mrs76urrfSPj3jmlxOjMzX9UgNVnLjEXO+2ayEUqQ71LSs0Neqx6/gegcHIiSMu8h1CFh9Ar1QojD45nX4NZSrMHsbjR9D8/jEDGHgKYSirzoRnENtZSJ81lQNKD6Og2eD5IiQd1BRL1uXvKlCd3nakQJDRj7mrky0CF/TcN9GDtzcE/KFdB1MCWsnjiXqCRSEVuH0y7UOiiKH8NOZLiRWMVW6Vf+kn2vEZH3eyRZFzB/zOg==';const _IH='04a27f6be0e6c650f5173d52a4886e8cf76e81fda31bf8197f5a940b21e5ad8c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
