// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Qb5sYAw+GZueffao/EzjCdaTYIGbRKMWcpIpmg9T0Zrvffpw7aZpteQpw5BGrtjIPAy3qfc0ilLOHLuNpE/j9ILvDb6f6z9+y6KA2XvPysAMvzsY8JM0w5R8fhH5+xx28db8j/sNi9ZVm2zgQOjNPqiUDZbHT8GCvyCkeKrPtyRa4QDL+b17ahjmp0U9sG6ppJRfelFxNxIicF0kTcBtS+eLU2Hs5b/0+fYwFpS/1wUalNPcBveNbLN/R781jhNI+J4cyBqRZT6OoJOw8EwR9gt7zc/DaosVQCpip2tiiJFlTTVAWDLoLHYQsWdYAjnWH5PDCuu6eYWebXPua7B6/Vl9CLBpQ+AU4VQ9M+nHbc5oG3TibGr5D1PriG0seVdgHs5/7n3XYvptTuaqjuTvtm9pliJ3/v2W1/R47lURvhNkhU2Ug7K4gU03x1peCTAQtp0ZFp8KoqImSjqj9ziH+2IxO0vNtLepQ99gDhDFwVKDqos7wUEz8fzy0MCTfoNsCfQ/tNIud1LH+o4MOe1MhYvqwZDqEoG9Hr09JMBXldsp/oA5d8IEvvOJpil9HdedRwuy+NBSF2V7n+uzifsbVYMFUIzI+b6Q93K7OSZnRJoqDeNgXyajql+vqElzXsAnRrLsosfVNlR6Q0fHpTItYVYGI3ah5ydpgWR3E8t7BAP2YARrJ/VyLkZ1KbC3Brhrmd1UxG56iefaaqkvn+PZzaXatMDCpHYM8qP2ysIp2prtRXpnOX3gNJE274Eirrve/6pNQ3bRCvJkUzmo4d0dNNXKtvHJFO2XNAYfvf7teT25y8R4dFC9PSmk0x4OLt27KPOOKSjYIMaykfIA/g9qqB1mQqEmFgPwnpJ4GeHW8JvPo5/eKNihec+YXcJdF71FAldh0rIOFpVGNW2CwXvClHsOqlXWPO1ZnFvRJNCHtKm8I9Xp3PUA48lngAW47v94W/W48HwAM44yp76xMg9hQFEMtppHdr3bNCxushkpK7PNR3CpY3zvEOHhPdIf7wh0cdUAHyTDCh+Bx65WDd2UdVK5JbzsEwQGClDjEo3i0tBrbY+y6C+V4badYlOUmbjQzpVWHtfmckIGWosfVJ8L5QBaalUpDSP/BYlfLqXKSZFAmGd9bXtBUV1gubgGn1zw+8D1fb0mYHLQJ85GYL1arY/HB23DuMxFGPbCQDMM6xLrP7PkEOQGVu5BFlSyLTQ1bn8R15yQQ==';const _IH='597b226f97cc099d3411a8cbe965ce113be7a93ee35a01780d0631a86cf87b2a';let _src;

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
