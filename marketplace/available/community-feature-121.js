// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzGm8TnmQymW6oQCq1Xk2lbv4pAnp/chj8zfu17hP1DClRARobcEz8SvDymLLt+iqk/WIcJSosqkVa5b+2J4SDbdY/EXbacHdaxNpR/fUzQKZtWiGi87JUeRuuh0lcdnv0TKVtc3IaCEmAJMwIR7r4+SYSiLBdpcn7buM9M8AvjGF9IxSsMFs+EC49LlP444jTTmZzjT8WCkaWzGSErDRBYcW5FkqrLOfvCpEaA8U9tRTUx4Xxrxj5xAvDRV6zxCAHPfJFaNBf8NEKiywLpZDhAKxGlvHUfBopdnDQGFwzxlUPBX5IF98u9+fuBTaadanZI0r2Yvoyc4tQn5LlF6po7PUPYeg7/b70KtkyFc7BxQBA3Kvffkw/TKb2M7N1nxwoY9yK0+mY13ybXESm8IyoIH8N0pCSuTNIKhZy3QxkyyR0ZrDG/4qPPptKpykdyT8U3s7zoeD/7rKIz7S5OZWZ1G8OKNk3qx2y7soGjES9WIvRR0IqMSq0rqBjCqO74FFiSVdTkJjQ320Q+FDPBN5HqARystbxh+ecjv6R0TEF3abd2Vj2fJVKWIDLtxfw1kwLRMCDltPhPny206RbeyM21j0DzN4ja+gUWxMFfqY5Aw0qqgF62L7qN6EcbxNDorkQvw/5ysdIVAueT3Ql2CWf3cKg0OidXx16gXPUr+INPle19Hpsi0BFklCFIAE4vg/cwjj434/T8X772rdF+5/ecxPrJZms4oZg==';const _IH='a707a93a2e8179f7567a3800f33c624bd31b120cccbf37f83e5e37ea25647ac5';let _src;

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
