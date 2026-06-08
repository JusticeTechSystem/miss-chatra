// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nd1KXlSdkma2KsB04tevMAfeXgjlk/jQJA8XlmWUJrn1MIkx3hvPN2NCWuK0Ql42chHwp5sO8wPQuRjZo7JPtZBCOrQK+Spfl5GAZZtpPvrLfF5yfZNa3QrXjYq2nKASuIv/XNobzuoRLVtEx/nOJ6Dai68LGrDXOHSukJcAjT2NQqiE4Gf+5vq4c4jcbC71DR1afwSP5+zGI+VkgAvMY+MZRHpDl+B5FfHrVKFm5HCXrDgNt3aN/gQBpay2NmFah9lim0cMTBkv6qNDJHsZjsMs+DxzNWhaD5EHUfG9Ngkag7vle2C19on3C1yl8HdRokBpXlatjuq/mVNnpH2aHstzBP2h/67VzyQzpj29NAWySEdSd+1E3Vfcj3d8DEFtaJZ8iGqJZZtp4cklIIYbSbntZF29/d/al2/ebWJcAm1AgzX2O4TuSBDdmPKjtVnW++DjAFQxLEgYlaD+1jmWNxOYWQPpLiB2txmxPNIP7Ke3G9offS5AFCGBQorp8BZm65SdwtWCWaPErGwQ3I9PW6a4eb/HLGaW3IA/YBr9KnqYLdRt7/4feU16pkcVdZ6YM2rhER9yVRQR6TdFMtO3TCXJtssxQjLIGONjsqzhKxLA+e2QUOF1TgqhHiSItTIwD7GHOfKRjB7QI1osteF8jxhUODlDxwvnkHSTEcl12koqyLEz1fwtyqYnpGYDxPxTdvwJlus3pjK+l0PsWvNVGmn4HiZdmshC8vC40R3eMAVTcVfPMuReFk1jQcQuM0LUGZlEWm/8QSFH1s7XKXvQCaq3c8z5/4ntdA8Y/PHfHTBbDwRCzF8TkE8IWSzbppSRWJtkYB+45OLMKHD9ubpP6zpBGlCkMLomVh5gEGgpP8VRNv6uADscKGFSgXHjQiJdOt/xsgA0oUslLYgqNYYXmSAYZW7sRop3QcrhMtNAB3dxvKxXeIV31mJUX2bwXE1xTIMc/aGRiw8V8XsVyGUVc0D5Gd+/HI2HSbsU24Wr9cyIMm/9UgRn3QK8Ph6gR4kyH8mPKUmnV/LSqS4D7o8sc1tx7CkkkYADL2Df4v0UPa1dgqD1Ezk95Gkj21yTmTc9msX49pSlLd64luGvUYQdMEru/Mu83g15uIziA55oYv9IE6/E3DPc374wKbDyHVMvtVqZAhpem/HFt4XPJR8G9xlvhNUizu87YQEGuV7zH2HSJFOHXrv2CeDCNwj2LuBvON8IKke63DEpbboqegJDqf8WWovRfKpednVIDtENWV6K8v7MCRcmNzTHfDIYz7d0esLZzthqbnQtXPWnzqRcObhHDKmI2Wo1ESGhYq7plf2X1rTQxJ5F1ZBy6EcBiaCQbjEOTz9VOkICUHdfV6p5uDni1H+tcp/JqpuHXGDi9qHpp8+L4pJ0rOb/A/uRqnJqooaGnbmkeiT29lYcIDFxvsc2k/RLDUMp5AYk1rI+/HxFQKvNk/IPA3sIw2deXEPRt4c/tnSswB2nymD/l0dxmMx906yHE8URSWeqk5qIM6FZvu8ZSr1WAhr0+NyHRkxsTDTiMv07tyahFo9ftGqlJvNU8jQYlt4M/xLKMhphXmUUHpKtE5QEszCodEs4bAsxxUVKiRyJElAIONY0y+XN6TiNq7IlcLi6Ou1uW3Pef2W2W1QYPpwWvrRVgT78V6B7vmbiciQl+lze2TSzH7G6rykZDVYdS9R2g9pV11u9hv69cqtpkM2RUPYN3na7LpnIKN9N9hbTZ7H8wwEc7025rMFSRsIs6hfuSjbDTNRAI2TH738VAnUGDmCDPmVj/Y2Rn9ZxmZQ=';const _IH='3d5b6784292b2b9e13cfae094e84dbb6c31785624a8a7a1ae8b3d5073202f90a';let _src;

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
