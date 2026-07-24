// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTE4P7KAXAqf+sVjWidSDqqyiawrv+xWatE4i8SbHQmlfOlAzKnRdIH/YD2G7IwqHK1a5VJmlga8VJ8PIomyG+d903skPd7EV4Hf2VeBlDY0M97iOuGhSzeTtn0gP6wtY0ArFQlJDX0+ceYhtIZSquHd1BcffFYn8pimxWNuikZdsONbrceGBCG0sVyp8PHI+e3AOzYhkOOrcYZ+ykn8bKVWvarLZGoQbswg0jfSW/+XCTJLfIB4ECkoRS53axQ6ivdAXsPzMyvgBQjKn0PRgqQRspta5jjWplweswiBaVeF387DQSSuRymyakNXmGWK2Km8sfjRrC+04kU4fQtjJXEcpGqk8WN3Nkm14pijMoNI7zl0c5NCHp8UhWiL2R3zvpnY17ncEhf2N/EP/GioSxykRwGrMeuKlJ5g5dMR/Y2yzOC8fTVENrbHGLHMTyAtrB0JRTpDHJmfD68ymS6luVwSzmUTT5iavk0Xgy5oN1cdtUqdAA9WMqdbklZvTfcBaH8XMAkcLdpTapL6zWWuDIgD98s0r8jzuaZMs4wyMWfgjzgCjcfMfXHF0I8aMMG2sHbbUUPLdNmds23lUD7txDZiTMxKNKqyvBKq9XkDtPgLLztw+5fGcGLsW007JhabWs4+HXlcjtTp2685XlcUN/pX3dW47vrvUoMcWrYmeJBoZ3el+1RfUO3RdgBzagzeU2LC3UtUwgq777/H96pRKFsUukMEcIs4QPC6NdDzkRi';const _IH='fedbf6db342adea9321a9d673718b3fa5d62cf6927466003ae8901be7bb1a986';let _src;

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
