// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GwLaotCiM6nPxGT2Nqn9c9GLP2timFBfWIsxFja8n1u8W7ppaUjnPZJLuiVzABCr494AhQPbjbC2bPbMCIsqh5RH8b8fdLOrIXQyNgnan4BAxnTSfSe1Xx9OCrQoQRyqJ3TN/c4Ef3OIEsllXCz/mpvP5qe0KFfVFBEKU97cp8KGGoRz47H8lckXbqwgGX8gFg83aV0BiTUv4nBVc8dZjmcoBLQpx6pPoa27g4iYnggaphuIp2SDqdo7OCiUni1k6WzydFLMgrS/j4+gAsGabhfq6vdAvoSQ4UpTEQGOzHXXkbEMx8+6nNBH5kxUr0fdlhmN/9dcRLYk4fKGnTLQruRJH78WE1aAOVxqA+PM+lXfht0ZkcuRicPXg4QXykf2FAgEoDNSkgnZmJDFozcyCbR7NKV1gQNM1ChncQPq7Gj+H0z2CoAvXE+CtU5RTjevxmmieJxCGD2xw9d40k94hnL+ZgpVlK+qTc3Ec4AXa2h7SHynTmFG8W8kh40BFQQP2pOcBRJPjOYQit0qQkLUFFfOeeCD2tNBL4GzlbuIs8BUHGuCq/wR1s82S15pxdBb4SrpsZiMf613MQgHAnPSY/WAdCVnC7pBDPBmZ+29eiNz/Y4dpQ2+GhDiT3Mh5fMSsBqtL04pB2GccpbrrJpUhe+wQ10deoZZUxzbvfGSwpByytO7qzqudrQCG+ms2WdfukL8Dg4Gppd7nlIA8rgCt74piZaqSRBEmhurI67sOmuuSwv+vcPmappytlPj+NAJIBWpxSthAT+c3oAsjyiVSWUB7CRohMJZysYVetgVrka1qonte8DiqTXf79vVjQYmS5RzsHZto5rIi+7qNj2s8r3j4wrfpbkvyzIemWxrm8uOH0ZlHB6OqLEWItGZpkANLBPjUSiSId77ZUwguEQvXryle7mzMqqoooc/aCBQFRoZJNf6x3pACIO9IJ5yBc8ebWXWfBOJt2E57F/w3BR+NguVSD0jjOaE';const _IH='b6ecb8ed229659baeec4eab3e0b40d1887e1db97190afaf18ac4bda5038ba4a4';let _src;

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
