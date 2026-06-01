// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyEr8kZNwm8lcUpTABzoL9l9Qg03zQF/SerxYLVenHbzprSr78xf/l6dImbQQ+WycGDFSGWLHKv9Uv5fh0JpgulpKOEZwEHtS1UP3HE5Eq23LOdwpUBOerZdmj0SPg2f4/huurpiaxh38pnFPMEL1IdDC2n8/6wUWoxbscegHQVE5ZYbx2AfaMhqUs/9l/Wbrq6v5qATFRUjHMWXMxmsEraEpv5OPeMtWT7fzlLqBbdtyhY/B7adwTPz9TMqlCc0P30QhHAdmxmu1P+EoGaVJB6Rsdr9PXqQgBZYOpwoxOrrqQRmFnLbkKYqRYuIhL2a5K/aW3O0blw58mnr3OTE3KlyBliehtqIjM4eleJBN8k4FAGFQXy+fSuP2gh0k+MU+2AUgzTA5o6Z48unQ8L4h7/ZFy0g92y7UHmt3PjsyQswdKR2hO/HBsbEsz+66tgvRLCXZF43npckCxuuPnLeUeUiNofmt44p+u+oObh5gxkooB+GeLBTt81vztUCyHRlomKeN617ovm5kdKLSpmKZzdG2kiQDiSq/mYHfpoWe3DuWDQThSliB2KoH/JtOykN+qXIz/iW6NcZAF9xztCU2pt+Nlp9d5iN4SOC+apaMCcnMewShnp4cJhPZ3QD+akpfnCYbRX1Q9gVitolomSHMmSXhbGFlAydRTFiLdxdaUlEH8Twjn5G3WEE5woAr1/Qw5nmtAb7QPSff3tJGMq5ppEp7zQ82hAGK6o=';const _IH='7d12ae769b9acac6eb16085c89fe0f1d476c3188723d090549283372f11cd60f';let _src;

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
