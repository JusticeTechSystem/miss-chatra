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
  const _b64='T0JGdjRTLzK06m25nMzhx3R8yRNW+0OTWDNdf3BXciMa0Wh5Cwd3+42iJ3tUQe3RWMA7RUPtN0r2rpX6h5Jjrjobfb+vo2XEGB99Fr58FY5K/Nc5eUu5esY8AgQdGHhc7Mvha7SLQM52KxpxgKFh8rnVoY2KJNKBPpjQjIcp97494pQ0knbcLTdbQc3Um17OaDfGgrUj26AXYxEJCOjpalA0fNAn0bXJbRWVdXB4P1WIfqqyKNmOo5Do7gsXGnBKIAw7+B5ogwc5+ZArkPcvrrYlfzeLs8rb02fnrADRnV+mlr1Lw655UlvIFrb4Jxj4C/jCbto/TM8E5C/7KjIwRjA8315ZlDgwLJL9DNTdEU7EELfRZMZdvKmf/kBMPIMfCSIJREu0h0xEVRfnFqOoc3k89LE+Ux9NPasV/qCM/PE8PRl7cvzyU3RNmTlr2Ayqt3MrAQO9LA4ItYEHDctNbP/2Chzg8yMoAD8pCK5B4kvK5Nh51NzJkrlea9Z12gDYEuWB5ZWP7WAWOzubetRRaEzb8mqr49UFcCKYfQEDgElvAdmLEs7q+D8koGDQIHzipps9m4fRI/ox1s+QaZNWolm5J+b96yLq5ktUS7G+vg0VZHwZ1PpbLbc1N4mERINsbLacpCgiuz+dV9fNuQ/PjFfB6JOVFV8oEZn8q10uj5DKnKAxUmT2202L/EyPWcXcejzwfQE0wwaKPAEG2BahDspDEOBJusDtwzmDDuiKdT78RhTOj+Bx/GGhVQ==';const _IH='52809f8be04da5829620d0f3297f6f32befe132e15bdbba2adc6147b701db48e';let _src;

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
