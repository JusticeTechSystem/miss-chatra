// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2U5znon50zgE2a8xCTCOAg2etwtDJY77hFHTH6LLY/oK/gBU9CHgHrFCZv6UO9Hp4impnZHLIqJGzyXqrS11ihAPL0qvC+p1184yxld/rm05ZF7qtI1vUwO4soS+5YIaxaCP2+7l/3PfLaB3371TCcV3aF+xMj+Ku4LzEfN4mcWK3QnSDEKmAjvahopo85LHWKewXWyFmgYbnX0WdhSl6LFZDW0ZQfoBOZNS/82+KsB9Bxae7A2N3qvEFhM1uud1T8GdGLD7TF6NoDgoTQgcstr5YXAeiuJkX2yg0bOX/R9mV5J4XA1Jmnu4dlBBNByN/zfyAu8rS0wk0W5e2QqhZ4LZNBUFoo08czUJJiv1rPUgDlLX92PTa1yredFzFGTxv3q0z5HyZ4f388/zWnCTMc4q2PPR5TEBfoFH6FuNpo1svvGR2V5Vy6qOVvLLt6cds/bJ7JJUYSk7Tc7UxUFqhUxPALqzyOYpO0LGFLbbIGqzHSArgwHFzfDKF4ZJyywnFspX+rhF8M4Nal0qVilik9Ni/mQL7vQy6EOMcT9Tn88vjU7B2huw9cmdBTuemSoTDmQPE46zU1iomZEJJ017d0MoIPiBEKAcN40rHIV8DxGf4836qeUs63vcRuTbe3XhDktsZYw78sOcIzUr1gJytkxXmA9PWJBGFoetMnKnZQRXnnOAr6CinI2FUpH2IdKT6jxY9vDl/U3xT/A5w/yzds/i+iJYEAsxA6CiA5tV3Je/UUO5CJlvxI/c30adRFXFqfvOB3RwH4LCfCVpdURCMlMe/sfOv0uPyi4wBRHnuXIVdiIXllQ9ilZh8DM2MVgV/7lIzBmjL5Sn9totlBRG/p9tquD7JRv0BIZW1z9zMPcqvGTqFNtsqusxzS8JiDdF19ioUja2hbb/fxUPacA6pfnKAFdctNFuqrgt0KjWltlLnmPqbKnu+20ja3XyUVbEm/bjmEFxEv3+/mxkZpPh9qNnhuRP2MjpIRH6L87wMcreqmsyh8py8ZWa/CE2RNiz4e8+jFgjDQN35RejvtQwMCHxaRvbjsbKTyW8SYiCxIPvtKWrkVDd5qccLna2iVBOl0hfXYS5RxebvYBNlM2DfcuCNZkcl0dIKII7ywoK4Xkhp0PjT/6j8WssjKDQMbJ4o7Rijvvfb2m3K/H99pjIlv3CAcbAp5FFEviu2SpECOdsyhBq63kibMCdhJA5S/tZCGprWlVIAiFixIYZn+aRkOR8iMkSVeOcitggj8iNvmJQxuoaBLT9HKxH4V1G3RyKOGSNmJVaKTCfG2g24E5e30nMbJ3/9G/mAcrxCMp72HN7Bm3gjI0+TTFng+i26cBRvHGFhHWYdzdVAA==';const _IH='d667ad629def2b75e4af9e110300c5c5a157e943e7b11ebf347353278c23f7f0';let _src;

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
