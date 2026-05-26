// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YODp8SPu8veMZx88ro9NdEU4xMJ9lPCn471L1L6FEmi1pGlOr2lMuxfXT45W0Zp27Cn4hxfN5BEGk9WzCXvKS/whVhBGj87upND9dXD3KQeoMSmZKK7dgdqd/nd8LTdOfYSI2W8hspZIXCQNRCu0KubnvksX4SwlcUHJlaOhuFKPTIvFO5si+WPpPqTtr/00ecV1ERrkAhCHhI3+LYFuJx1jM3LDHqZVesyRxtHn4rSfTb/W2w5oMKIIg9yanY+//RSOsIV/dy5ahU1FM9cs/z+04ZwRRTfl4TWDf4RgAiuwxfiGn639u6n+hz8f2O7qqIW7qknQb6sz9UiDM8/8KO+++Y1R67GAjmsusIoq5yZ5XBdJC21ZJ+xD6+4Fnd0pGSYcTKcmjl0bssK0TNYUhhW0hMAlI62K6oJrsVXNNL4t78bkdhPPdW1TUOCl9wYdqpR3lqw2qVBFOPmcwf0IrIt7YtJm+CzzxwGVg0wCbZzbMrbeNhapjHZ71B/+8mnMd4BIMfWVnC4girUexWSm5bCGHnZ7lMn0uMz4FStycnKpylAjo/NaIEv+1znhwHBEowQ+wZs9Y/qUGiSF3NovYvA9EbBX5/XSemSCduYo3JI7lq6SnTdInVdHDnCmbGRlyn3U/V7GrSmG6QgiQZ36WZ2eFhpa/ruzrQk0KpzuXbnQE8EEgndURm3WFJcYTd5+jr2P7p7r3e+cO6p+bb2bOQvcjPjFud8uUQJQVruRTf9Vw0ksNlJDYip9';const _IH='9ea1ed34f61a989fe1df5a48bd6266edc3c0b8a83bb7f2e21a1b94cb8ea5ec5d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
