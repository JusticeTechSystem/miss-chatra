// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAkchDy+pJujXMuMxgoX/gWlUp8KnhSf/kH8rF5h3gQrFLLUlpHJHZQCP5rtIvIljMk7pOzFyJCgdrequG5ytdAz8oRpU5WRfaZ9APBMWlwUkR46Drk5ICuatt8shaYh5qqTNWihusPG1u5TyzGixrt74xAMSrsW7S41J9n5F69U+vEIsVgoQaNA+0mNmUsUio421Uepn8zmLNLloY+2RmAgqOekcm18rhKSLuFOH71T8uWa0IkZMn1K5HWotZvUjqwHNnJZcX+O4aZwfWlRTY+FCoiIxejpWNUWwKQEOTk7qn/8XtZ8mfeVyd15/xymYDeSqAfZ3ULqZfTUrw8RtiXOqBZrc46P3ximiXE/iJxE+bl0SWTv89cAmuQiT61nx4A0N6gPVz85Do+p/23fngzaSyIsCTJ5RMr1a8VMrMGyX1GmmzslRgQYq2onQ/V0uj1Uz4hjinfs8DcUrtfZ56V7DlSme8XAzkCRLLOSOcUj1H3xmFujgzIuDwMm8PtMy1cfQX+Vi9am9FzYqTgPW1zTxPRLcXU1i4yKIdNAWa8uJjY2KnKgIdSUzm3f+/KJNrUqJdXhQGt8kLiP9q1nEP0hysa2XEj4+UWvSnsz9jZTZAEllCPmXZYA1C+YKOhhKiZFOpixvg5DKI32wVkXbvsCI+h/Ebc8xCB20OJtVPUtcX5fKIXmsR3tc1RDI369kLfaL9vMg29I+NpLt2wVMcJ8tUtrVVl/Ubwj3Yi7FaGajtrflAlxoXEdIQOl9jajyP+x/0/6jo6ArU+XwaXlhfOvzWqLvzi3QkSR9dgZroo8nMIQ+k2FymZPiJ2DbM05TIw1owwulvQJaowpLumVKs2TxH0EZPc3pEX6jQUoBtIv1gcRj6k2CHLMfBLLonrgRid9LOEE6ijXXj3uVmC11W0dTKQwJd3ZY5hCx5GSGArekXR/uBaEYihhsSWVrqcXX0Am4lWoAcav1IoZT1+CtHHwimpo11tx0Xdi3gLiBH+Gau2xivsUfe7yC2j6r10ewaZ5U26LKD6Q==';const _IH='39ff7889a3722ed651651eb8884a08b416d206b9e115fdb0d5dca8b0dc7378f0';let _src;

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
