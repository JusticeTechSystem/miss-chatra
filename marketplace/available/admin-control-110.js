// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gRovXfsXTaxZ3PVkQJc84sjPnz91hwEKacGpt0yPonEneivwqdLdhwMVxgL60ppwAC+inzcoq8/3BTVkOegARXq3dD0dJrIKYa5fQt9sx/bR0BAJMkXTDRP+OM+ksxg3I9bqkGioIKV/83lfzDFQR8eagLlExVEqW3LSWnG7v4jwEmYKc11kiE6/VkDUlwDBipr6p0Fzxemu/RZwSh2N8UTdPiAp4TpIwNxfrEVnEZkjBPrH0WhBb5geYM8XmOtT5ms6ONn58lpX2fabhmrHjc20fiWCfkzAqCM/Yuj9han1+4yRc7XOtUewYsLPwpQNbLpjNxtdF6/aHXscDIupzGX3F8j58d7+lKJq3QNbbQyGkzakQFONI3f1yXsGAYVCA5MBcSv5reK7gr1+zTSTslB3PdAcsNeUTENCVHgVIgKjM4CAqw4UfMnGM1W8v3PQ8SewIM7Mnsm03b1Ltoi9Z+e49nvL2//8T1El8klQfYiXtZ2dma7Xp3MOE7B+uhVhOgXhxKBZr8LuO40XaxssJL0LLytvb8trGW8HhT9skLxGlIl2ea/X5AXefIa1QM9uaCQpssYafJV5zsGFAhIe3GEyOLaFLltKh53skltRpVo+eYA6sE6q6GdrhJi9V2Hm7zyIFatbA25IQda2kOGjgmeiAb1LegmSZHPN5baeTtDUkxKZ9sRapWjSVeduegvAW1Z/brZMRex4YMCYImsspgHL2fZySGoqDb/madL8SdsaTpxI4kI66ZSAXLI06tS3QHlixOs1YP97apToN3A1yyz9HbDy/wHeeaD2Kc379q28q3qr/fL4sigDUjZkZmsJQev3CjqqN0j6TJ2djbn4ofQvemuhtG5HPiV4Non9l4Vvld1t9CXtzoad0PRg7e7lEEIHRRntjSS5aagE/6KcMSSeT/maqibM7B4j9muOvvRnOYCZxpTly/VfakGIfcWsiroG/j+G8R5uw7JBbzCnOjiCsOqMRzrTyEqQjb29kOiBtM8/xZix10XW5TzG7ia8oJ6kUPZUx+c=';const _IH='7dfbc0115eb8f3ee96ba9537476eee7764859a31aaffb4a33edbdc03d8619fb1';let _src;

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
