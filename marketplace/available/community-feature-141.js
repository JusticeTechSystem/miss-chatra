// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRA6aEzyKtnRFP//ZW2dxgYzvrWwElTc5vSeHKgGyJCZankAY+a0SDBJw3Hd5L8hCmtcY66jCoqWKG/FN0WTbDbMcMhc8uX0RSyefYWfUv5a3PIYcI85+XMb+uW4wN99iYfF0v440E9vpRZZzx/yC2opignQKVdwmJRoGJclRUEIlOnRgFTmaJhhudk+FlCKUFWJkKGTtzzkNwvA5DAUWEeg/UcxwKt3sVHFveS/mQgGLGpy4Qjg+Ct0zo0FHwkEddUaLASZghSWVg8Wsd74GT8MxBzKiE3ysrzNyVwt0kp38yFnMq1ozrzMyNjI4BAsf9sos40LpczuTzMIR8JUrLaM3w4Ei11WlmNRGHh4xEuhy+GjwFW9cAn3mGXF7H3DgFzR4ycXYv4MpcZzeY3hPN59peW5ObC3SdhzeO1ShOuB0UnfFJdoXMaIUxen/jPhR9X//YBfQyLGQ5FBptUQbnD+g59Vcd+FE1xy8G9IX5an42k/sLttYAcBMgnmiA9RSuSmfYBz5mb9HRiHX+Eb7x+UD/39uT4WTVH4E8J/HD0VIgVwGvZQevtb+dy76kA829ekqUWZnbh+juFSllcGxe+E6w+FLeRsmRRFyt2duXtNC2UTMtH7GhqrqQjEZc8mCsvETCh11j9dHtOYwg77iV9xkwtKqEU4AoYAlVDGrv01hjrRj91bxxn9Fe3yaElctCcrSRfp4BaR7KWOijcEN16Q9xucaB/B+4=';const _IH='b58b81e02139c81bc17d386b60ab9797626622549c59e0fe80331e8fd64b23e7';let _src;

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
