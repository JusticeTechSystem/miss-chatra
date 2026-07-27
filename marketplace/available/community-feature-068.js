// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUWmLQbMSf87W7jOAaQTfo9+atNSEtnLUIBHnz9fNbyzClyfSTYff/KVt3QPJjI4rvTSJgLrDsXuxHLwxZKbC6lKHd3W34kqQch5lLVgeKW4TxIUVeNhPuj1LN7UK+A1QQ7dulSrZyHhinJ0rNaeJ7mH0x8CikBjQ7MemZeDfK6fH1RbrP/hgp2PgnxiNchX30we42kL9ndzZIlA1++prY4dbrI6IgaHDhauvZYvc7XbyOPTUE4ZpV3mLl6/Nee2pPByxrbVtegR4VYpBRTghxPogDmMKSjYgcLXR3FqnTaaqimXQ2If/K2drVLO29iyHhlyMFaV4ciQOOhuL6SFh4yPjmc6DQBQOP0iiNji3DrbQ4DjOlohTsB5vfmCCzweBOU1gzdZTaU/jvb3BvOPgPAVk9MG491JYjSkjxXDNjRP0ks/XE/t9/y5fpwikuhCdAGWvMDSfIkgooRKlSjzS2L8nCYoOJLWj4KGidrPDKTxnsOXuoJGy1tLGLHAOYLpNLuIM/2fMKhNI4GD3Doxrg+83iy7EiokGkgeQBCbPDCrLxCHUrb3DNGeOnxBrxXih9rJaqx47mYBNDdnaBPXZua5u16bShMOUf5A9bVChxdWMA+b8H0BB1AAMpyqEXsV6Nlds2jdOpDTDzrtWi2k96B2y+fdMnmYwpATIih5Bdxtlu9zYUdpMgZPtldBRG/rKdtQx8p2zl4/QUgjEW1JXSd970gnDwMl0c';const _IH='3170e8e0a1adaff29b6cbcb96ea063dd75e7aca09d5dd27df6cf40fbc13361c3';let _src;

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
