// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lIG/Y8ynbc96iptEoYh0BqaLWax6uylSgaJfkMAx+PbY0JoPEFCQtNmr5OlNoGRYFOrcN2qA8ud1n1LC4orThljnck5RmX3S/9G7a+Aamblq0eN5ly4ve9aJw3wF3FKV9ahvb1VtpnCJ4ZFsGritaOeU/N0sG9cgBrX+yqCFbM5W3AM/7afQ9kGypQ3JixNDMGpgCeWt8reOjfa5L1HSsfakkkiZ2tU3p87rnLTdw/Z7hYOalL+lBON9SeERcrhrDmgGYyNVw1DNuSxgW935H9dBgZdfmWwCTaF/99rYKCDFdjYQOEU8LWsK6TDHs8kWIhA0I4NSD4qr5FxCURG8VI8JgUfHHlAUHWrweEgct+e/o1zTStbwtPByp+BWvz9rZXXnMzQXZoKXKX0cBSLN8fSgr3zXA3qxbUpD2vIcE8O9yZxN4UsUgmI4BVYbOxUEWClvxaPEH73Bxevd+S+/5jhSHIHqrHvNw2AzN5EWfet7XjWAeBPfj9nWcb7TzCywdEgLZ46peucfaZNB6Iu80nH9z3zn5TWISKbBUt/ntydu62Idup2R3D18KHvHQzP7atTrEv3vRMrOb5LSPk7YKdBkp1N5xD3xKFWsMhXIrXsTVEHASHNuszUEsbFJqv9Pv7bna+UR15Q8vppLx/7n1CfxUK+U+hrRnfLDObg9diMobVos7qtzgt6Bo2ZEqnsITIkag6svDoAuDxYcC7IZzTyUnry98stwwgW1kEZzJW7YThHdqEgMfwG/sdcg/LYM8n8q2tyrGPGrHShDtDPtYD0H304T6A7JK98zKl3jzK59/3IL75dWdbf3UYp0KldBS9JDgdK/29YAT8xgBWDRhgfxpsmTwrwM6P74Z19gxgbh4HQhyctv93MOUkW1fkkO0LaFYIUV0tOR/3++wEDt/Auke2YTh/vJvl0iXuN/m+cgnWLOfUKaYuqyvGCCzVNl7Q7xShub2ch9lZcj56GpCORs5TJZSeOy7EdL+scBJKu0SA3DxpQ=';const _IH='27cecd69faf4216cfd190943fb28aec552c4749a95444d7aed25574e9791b879';let _src;

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
