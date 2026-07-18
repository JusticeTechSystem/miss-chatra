// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1TYukVzObxRMeaG5wsHNV8DLd1aCUoU/PDWV43PmPh67Rk8K6W6q0Q7euUt0heMXxVKFFRChtWhYu6erD0TI0GkV0GTwKBcnZiV/TUQsI7KkvbMgLoAiufXV91Oc1/0xkGrzPP4QBk1djG9RM0XO37vw1w0dLVYzAyUqisPuff3EqjmTyuvLe7N9MMy1K4R8BTVzJ5q8fNcTucYa757kV+sdnxUoqTpYBbD3JNoHo7nR58X9re5abVDC1Alh/FdO9JeLDGX+g/am7amL1G2Xm+OXIwd2bXDJwZ3EHhTPbOyQ/NeGOzt1EB8oUiBGXto4JJG7TL6Sx+aAdAGxJJYmnrUJGVc0+QDSqXcEv8VUbtZ5layChFa+uy0n2crU4b0aK7KV4qsHyl62ipn4pnSDgtaH01l78qPzAlc07iHGslg0+fKm3YzOl5W6CI4yyTO+7pMxhfYg0FChfgKz7ccUuD59XScKTr1qBUM1m+IIs97zZZ7G6WMQkeIsoGob2He8MeGEkmsvhq/GY26vtue3DFfEYr7B9aK2h7qAY6QpqVAYfkvP+lcCvoPB3jvP73bwol1vfa1+nPWJ4H48+ouRaltzLlm6AI4Io96kMUUnaSN/vxXcJGZcT5+MHWErUaS6CZ8u25llGQQ61Gf8drtz3O2pRV9BfeaS+6LcKWRMTucHh7/z0gBeVy9+/wpmSdw==';const _IH='2e014e866e1f00c5c36772f15e86f827048e1af868448df9e748249b04d37b48';let _src;

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
