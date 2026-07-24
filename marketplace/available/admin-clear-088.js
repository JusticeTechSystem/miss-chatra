// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS74x32YJlO8noAC5VAdfAAS6PEC3buxuQd51SEFdt1EraeOG9Yxvt4TjR8Mf8jqWXjildSyUGMEAQ6TVA+UZVtkm/yOFBwCprfajzPvNo0XlknlhpApjdSWZRTdBp9vIZ0GDHsRYLU4Y8OOh85nsw61aDiw5/vSyszwaAq+TT2sjFmMDWsPTWiU1lQnvFCePhkyll73tG9c3f+It84IltbCefMY0fZpoCj+LaZrKyDWrnMb8PsJxsZ/xm1x8//fpMFWxdwNSeR2qCKWhzSfG4w33ORqFzOL7cNscBlculysvo+STcj389VSUqPaBtqnH/2Pc9p6UrH28ZGhZvAM8d+GqDhfd5yTw4jrWrAzRHun9qgbt9ifx8Nd2IcUhNv93P4cLhfd4jOz+534T7TzVh0ZphU4/l4PBk9s+v2PvLKYCmgsvtcX0DaFkxdyJo0X2/N9YRe5bF+KVPVAVEaCgFWT9qDwH5TGYMz7fhzuh9SohS3/G9bQAHHvCq82IHViLLsngPtbqVVLRn9zASFFjVuSZkWNLoQEgdG6nYfXxesCEHb4a8wlDvV8MMvScG0q0M3z12R9ZeI8GwlOM0wqVAeObiiBYSF38263wOgVW/JNoOWWlUrkHui/0qCbM//aHpwAHhvH+uAMXCkBKBJoyxdD9/fBEwL0kXv95UHUyYlr/2/UeCZCtnjXfc53T0OLG/xPvdlqxdJ/87GfsDk/mIYmknFzqP4Z+NWvw74KyfyQaIfTDYADiLsm4c06/TtrOV05szzYzRm0K2kupgfQIJngmPwhiQkF/bq1jcwP+q4y7HsjLlGmXab5bg5sWKL7lI3m/bJaXYCck4TTbZ3ypcZX0oZz5+iLkFFmMy4gl4fQ7m/Pm97Yg6u6L5ILetqRLSEaAb99Xer8oYr1sMvqxXrRa0XWlQ8C+blR/YS2W8xSMZpM7cVSGlJNaXAmonWPDE1P8pPZ6gD0TRsLJP98rATERKpnBVorfSKUsOSp1D7sA5O2Fmveg==';const _IH='bbb6f65a785f6e526b1285683ce4ea5947344b034dd94c541c530316c60e14fe';let _src;

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
