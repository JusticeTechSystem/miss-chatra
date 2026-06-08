// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zTVgCI7vg35rLpTFvUYrtyqtM2Jl/7bXWHKVaejMBolcspRiSbj8mQKHoOFyW0MJdrpFoehHNf+FPilOrFuaTWAxx92KbHXeQ1ZiIFB/ibQQDLtNrrY92Ea6zJh7Vvec6Pc7fttgfDQPTrrc22nu8B93ZPCfLbI/POlYsgoNURdYg1qclIgYVb6Wm5DZ6iMjAn7Ol1oa2WR93rOsBdojjCheIDQ+EYn7TkTfMCnx7rv8eBgNfmQTJqiU+Ps5B1jvvN3lDuLedx0hO64ekI2YHpPF3+bencq7zslTwNVoi92HX50214K9+4ABGxvDgSd2hNwnJCLQ7ha3o247EgmC4fgmZGp6+QUQajU0wq0ocqDvgGAObpGbV32GIdDiypaW/RJtLEP3JEr8AjntbMzPRbe6lkGRFRRh/o28nl9N3Na7kIAk74Uv2K5a0w1T8DcTOQBCI3DT14OXT6G9OpsZilSdk+DsaioxFJda5/oglXfcu6I8swpdTP/Ku5dZ529zut8srYCj6fH/Fa0h+At4ue9Ozm56+5GtWSBhqKKu/Zq4ZHpufNGubOf0PbdyvcT8rbj16NfKgOZUnG4pVREctVfHtv4ynZ19p3rAY8/kAcqxSmTOfb0IjcOAkKjTDriIQhkaqSlFDxzO8gx5c0NhNqnKvP6bejmGoL989hPLsP20geG3Pztfvo4PUNKgGTiG6Pe4hvFQqGTmQCZ9eOSNGlvqIixPr/5RFnNGdeBfG8RSzM6Xdzm9/dqILC2mG4vFqpav/8fGiEsBe05MK/wocZyEJE1cizUUdLo4Wi9gw8di2Agaw3zFKfllzXfNsi62jBs+ZZArz4wP8yUTD6g1igLL2HB4D0mTKPss+V9t83QY051NIMrjpdQZWcktKyAotWFnOv4Q3WyjrDMqd3mwATO+sg3T0gnh2sKNyCmX4RvJFNvH98W5AMaTobwWecuSVXDcuo2raeQzZwL9odU1Q67ZgJ9Ko5odMVidxgagMDHRwNKdgh67uoqjQRkjJ4LNdqSgrLdtauLK7rSW1hZ3Sx3w';const _IH='696c03364db3f894682ba74e980fec799f65f5d28a72fa635ae6ece6f562c8d7';let _src;

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
