// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G1fWBMXRQxW67aeMQ62isLt2ukFi00xNe1fdtbSIRSt7CUcEf8PJkaJjskYY4syinIPLB83tun6wamP4LvhLMjFGqfY5yjubC8aLP5QufZVxAGvzKckIHHX8PlkEDpLzugr+94yGNlRtmJgovVgsYJsQQ6JtopXg2yvSBbmp5HVG57Xae0OjkK8n3xAuAMyBnM/oyLLXgyGzSVBkm8J0p1BRP5WgDsuwPpfDlNqiS9aA87F4O7Tz1PPKMWQSFiotRtp7vh82uYBzO3fN0brMi7VCgcwo8ZQxTuMbbcLN/4qxJvhithyQHG3oAUPtzP16+5yYSifOjTu9SNFgXXB1HM+nNPrRBNVUQb26mGIB1UYKN/130QMywRlzx4PNtcMVWRT6eMVEUH3FfwV0bLENLMVjHmLSb9AfgBH2CGEIdhzL9FAOCWnwBEmcwCK0Wcj+MS24dEZjP55CC/ZtpsHXdwK8Efm21glK0kJt+78maev9XbD8Xbek8CjyztzZI+KEY9yzH49pfkLtvnnsClYTzc7mOb3rLPUcKoziGVxGtyLJGC7QQmDHcqIiJ046AS7iw/G+hm2LG1dCDEVW68HebfDjZTwxev8ytxAuOp1+Ovkyt48JXGy8grPNManCLHizOyZaeTdGM4egmcBVfEmA985pKz/Bc2B/XLnyLAxg8kGHGQZ49g==';const _IH='75cf79835122a3bba3269a8f9a3d8ee229b6f8920d65a4eb62ca1e23fb9275f1';let _src;

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
