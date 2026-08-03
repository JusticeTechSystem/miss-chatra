// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgJKc4taZlhKG7pOiw1fbqCQOW7E4z+f2Y1zDLlg3lRI7TkbbMcanmEmXX7iN2Szk1coiSEMhRMuUUXi3ln1ptmTeugB3On3L997c3xZiCXT+psUY/kwel/lnKoxu/H/rfObrEME6n7nKw5wxW4XTxc3ZP9kkOoRxZUnnMWH6bjI5aPSDWd1lGoivp5CGtcWh4r/X358tb0pG4XzXuFCCCBG/1J3gjWq4TYR9jydjZiR6gkNPOvIUewxYcp84jNdLwlwnIsL/G1P7Gk8LqBgF5wGE+OvOeiT/dbkUyTqajyEl477C+t8J2GI2K0/s+dexyzUEUfPXjTQDd/HGjjdbOGuKn6LjEN8h2jajeWYxeX127uOMzpBdpS1b2Pz01Uj/l7Qvne14fYuoxTXxDTwl30FrDg2xlsOx8DTo+OFhSNAEzTvue9qW8LRaIcCcf2iq26iKPD12whhFCJuR2Rfv3ee02Vkymve2bRBcFEEUBfF5lrbDp00Oh3BzJ4AXC2fR33+zg/ZhM1/DYyriqYp1qic3ZsHB8N//3kPcoGGdgIFCI8NAJEMx9Uaosuai5uNltMBavweiNm3iwjUmnCvQBs1XXwy/BWYw56vj4HVaI0c6V7K7DUsglHic1uGW6ORYndLzzLerVUIt5D9QX/o8M5IA3CtIYl7L2uFKkR0EaEPnWw3HDMXGPk+bvdpOJmHIRhMpgThIEQIhlC6MRfNbzyMyILa8Ey3M1fOU3V71ynSeK0pdPXw==';const _IH='9da6cfdfce3f0d1369e2a4f296228889f0d400263b312ce5e7bac0f93aaa961c';let _src;

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
