// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n6n+OavoJFj2ZoRtM27fAG8Ca5lMc1B4iKqQrIAfHzstVK2989szPavsZuOl1Bvs+jgX624xvq/o0jNaDDe2elDvP9YtAehTjSzeMjGO+dYw1QPjB3z9oEJEHmzgDASTe/jwHsEYlrBlazHokwz+yXAYs3QDmX4Go4badLat/6JNH0D2jy7mruBVaXsM6fajX7xo494PYOh3ZVkO5yAuWEJx6xe6t3jAU6IKuaOnzJVHUQQar+nDJVtfn+kwrTq4l0SLDzONqCMnlzUQHVJwzRTMV7C2vDFqRqksvDRHhbZ70JrmFeSruZaGBJ9kSAvrAW/giuNweDnLbjJ08VPX2ISFtoubtorvRt77u68cAjCWbZTu3w1maL3o6+2x8IDumTztIKD+C5vAlaywPBg3i7pXxJmxVDDPgqh34dvVG6m7lXdFiH+dWh2DIat9HFZqo9U5/wZmdQI30PA+FMmzUGym0+DxKDwmsUiiKquGllz0EQ4mhYw3GlPV4VYrHmuePWAYa6WwICtyZvrQCjBjri4/UJcOpA3RvPEdrlJc9VFAo24RY2zhpzKB5HbNqKSgo8ndE9hqPQ92suja8hOsmh1NpNhrn244lQwZLo5/IU0qpGO8vWGA8VAdtSoYBz1sLENlZv89ecrt//h8F1shlibg+4Vq8IwTxMv1uUn6FSPs+4dd3WdF4K3TJgAzNk3x05VIDI59o7YWoNlnCnu4WPf1KRpF9JG/TadYbxqz913vtxz3aZieS0jFsolPvcG6r9ksKJ7+28EzZm9wpzxU8NdRtbnmqsAxNwZycmNdPwyUnoy5oUHeRoLwNuLLJMlyZ/oih0l5PdtZqQxeswmdTr0QimgRWBW329GeMICe1uJKlZEP5TE6YU9bGbueqbCzanY22FFJaAAMIxF2kRDtBoOTihbl7LZCPddpTdpcUQmMVTIj2dAmaWT2DPiTpPN1P++Qu9tkT3OD4PKAB39QL6EchzfAOc/sDNfvEiTcf5oTsYqzwR5PBrVAiliAlqnNM3urKsj8a31aPGcjsU8vnaXJbStE000clmKyOEKT/HtLDiTz3/o4po7/QlIY6dC+KNaUR1iS7YpkV8yFX/tq1TGD6E6eQZKpvXdm+YudhG/oCYiaYkdQnf0a2mIRySmPHY1EvGGuf51IIMX3j+qIE4Qn8ll4yEJGSjXYPEZlDc1+l8Je0OTlxIgScjSIwjSY+jsxKe1qahwh0K3vLVN/bQj+7EPAOUIQiIEjyAqImJAYfcFgbYSbLcrUPVvs7pO98x0eePR+ryRFq4BoEnR/2Yz+cS9KWbSZzQ2iXNDtvhp5g5ugR2D8pbvEazFCl1Ivcc2RW++dlYslJvG/T/o8d48jo4KIyFek/mmTNPco';const _IH='730ee04efd7bcd793adf448fa8b031e91568f37c906fce950d2934f251582c71';let _src;

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
