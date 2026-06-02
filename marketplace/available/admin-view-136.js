// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MxOfoXDS5Zs39iJ1j4o6LsfHm8IJW99zAd94PFPRdr2FymHWoh4Bxwqru9Q39j/nuHzfUUf5/aGNtNn7k7Jb45YwdaCvcOCIvaV+HJjXvJvPjcImsRWQ2Df8Kkavgxqkb1L4rsaRa9E21z57cajs8ZlDWNtO8nNSn8A8PKVSQ8BjN+lrcD3g4z3bdVZZzSIDK8Xy+1UReO7r2w5YmQV2U+Zk6w3btsHN2Rx8Bdz7PAhkjLEnm+F6Z6Sgh8HAbJlZ5Wj+cq49oHNiXHnGDuROfPy7wwoMkGGSidqKXF7PRw5HjZuF0RAO7MrMOaGuXITSXghVgCUpXON1my5VOKpJVf8qrE9jl7WCfQfuevPIUAan3UFVoCj8uFGoGr52sFlvcAfpG2vW64GRzq6+SxwIAx/dBnxZVRW7YTXeWKwxlz/WjkiYn+HDOLsXg4ciLxjXHeNjGap07J9bIc38T1k+wYgS4EP8cqmBkmofWp75GwGcvwg4cAJ7FnmtDjjaGrPEn+yvp8ggC6BMubGAc3wgGF6EcZZukKg4r4JYRb5gIuNpl106qCt3oetwWYbKr61Rrh7SrdBE5XEup9rEs6TCjJnQedwBCL61oK2A74vaCnD9adkGiTu5u8T1Vnyv0T1vPjhk/E7Qu6N13Ll2EvavJc9OExt62BeydIfpib2iLM43Y6VmZRm3iI4uJQi9JOj2PPDGuQjfd/Yw5kO1RkevnFy6EzfM5iAVZHpt38Olynl2VGkXV8nUNbpThtHUvlSCvN5x9ft1W65r0dJy8orVBRSJBGNYdAclrB3Rx0fDrCbUEKntutwdQNnz196DHTKiLbe5lXDw9EMUTthenjGbtqVUWSsCbWzmmNxtGVi2U2p4MaeJ9RDkwoWpM2lBKYE0mQqfmE9yqgZjhceSmvYDG0XqTtb6DjF32qAOQQXrHVMD4WfTnSi+Pak9ck1Ujhk5XXM9ulF0GpkQsAixy1J6+2nkEa5VWPu3Ysml8EpnsjD/u3U=';const _IH='647b141d9089e4a65cd78452e1b49e56c931d395388bedbd1265fa521175f2f4';let _src;

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
