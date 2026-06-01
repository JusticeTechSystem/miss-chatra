// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7qvh/Iiy8WH+iQblurH2fCuwUmsLT2yCB8CRFYwvfje4+DUQhF89NU8p1HV/J2pPW+68pGRLXq0wE95xLBPsiksftqUzbwloYkB1EhKvzKWcRzTX4Eh4bfGt7bWOpA/ICRY+0gqE/4PaTcAQBjBONlmVtUrqomZ9tZukNfxFL+F8H6TQ6pefy3QmCGCAi55gvT/Padlh+pcT20QgDIz3gZ8GumX5jfY16SthVWXQTjbO7M80vYH32jVL8j38O/6t968DJ9gnIs9d7HkakF3DjAoTB2wnXeS1MXV3RcoAeu1G/RY7hqDMiLEXBvk+K681dqcS8hAyTQSc7prOLRGyyVma7kr86ZPpIaaIZybVxuC2e2Xqo8tBVyj4lUdw8hsIzY4GVZYm00b84KmNXX9pRRDW6qTa0Le14K1B1/wnBUGziOfh9u+hZST8aJaNc2dyZ/inOmXUoVmM3TTk2AW/DVYM/kfxloeWY9I1QQR7e1DpDfM+z3JGfmVup/nXQ+oHQLWbmE0JoA2Vwlmwg4JWlJlXASM6ulfvynmZR3BwgehA59CmMiOZWgHkcSfUdwFflmhgV9vXLSErwWi9KXZJDX/+9/x/KEpdyW++X2HUeIX0rBOBPXQAHZuSxJFfXHcwB3tH8/vj/7iWC3GDriJcYC1EWnexZ9VtSQ2MhbLEeycD2cDxJ7e5QD/rTNgk446AXz//9qM4cZL0HfMuQxpOz1hFwTmh1JEETnWc4VHycaGolpPsLqhgdmKfBQuWZ4EI3l9eoJxeyNeUmyWAqPcVvFXFXwHHroBX/d/TLQsclnKeHCYJM0+sqbN3hPvrX3i8xvQYz6qvo+iGAmq3IYP/umDN8atS8Tl9Ofsvb5QEJ8scNFPN1F52WbvmBNFx//WVY1jMO/+F2c0GicoFG0X+OkBEiHMnAvwj36s+Vpu7cnd0UhExjMW87Y2phBf9zRYgqxpyVyyuusGPe8QqYdNRNwS9paOBDhPQw==';const _IH='78a8af147e445b02ab4c5066b69a669a64887a3ff2da27c91445358516a793b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
