// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d+8xyhDxXMcscVDOmjMV6eMnZB3K3Bte5H3hOuh1unn0i/vDPDv0I7d7+T/aG6t14J94mX0Rb4/fvbKQNI3CaogqSgzUGLB3t+Mvv6yLAhoforQnEx2mlmXuykiOI0VAyn0AT3H3t+kkMnm4e/BggsVqkNK+EgSYYMEw4Xj0fs5XFtt7XW3a7XoBsYpKvYsq74wm8ypXtzX/J8arxEbMAWhtpfOkzGxa6D+5Y+1I2trE1n8tRxGUucIyAUNEqWBR16imFP9hkDjAghk3HeSrMi0GaK8d8rBCwburnHLWzI66dR/8S7HsWB7vkADifu/ch10xHZjy/BEUTvlpNDvylEp68tvBOI1DXduINqfAC6Pd0xI9bKeqdskCEM5oQO1SGrXDQYvHqjPkNhqiZ88JIB3cL1M+ECuDHaPWRRu0xu96rLOced1Msh9RXvPvXaGpF2gXKCT3aGQFex80YSBei2b8SDq2f5xO4Swy4zUKcrOat861zWSuaTg+UDHkWcJv24iU3iXwJeIX+gWoQFPAIO6V1Sx8o58A1MIpatHJy6yh1hh6dAHttfB6d3naKgU35MpfBkHceYO++BEFiD1EOPhDL6L+UUGif3APxyA/zhXVJQx5uziQU8Pyv30lURZchT4xTxZyBJUw3ryZf588qZge8t3oeroZXIJocI+tfxGHxyuIT6CMbEktdxMXF4I+78hfUyAVTi17Klo/GLPUoIw=';const _IH='4deaf1877269ad1f5ec9c4b58710a19bbf86f19800db256fff69d575c8a0fc9a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
