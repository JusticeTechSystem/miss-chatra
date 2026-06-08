// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MsyKBemIpHSZ/h7bngzYWRDGwzSSIXjt29OghZHxQ8dUvRbSzSbrWxMod+wOrM/GmsV1OV6v/Qe1F0LhXmFXboxf+S+ek7nLfWtVrTYPZVQnq/5W3s9S1O8E5RP/EM6G3K56BBonM4q50qTnebJeksJxbrPBd7PAsaIb1hrVC3gM0gtW2L6+jwCEQJF1D15cNBHSODXmc3ASYjjbV4iUwBR3a5Vsuex7jlWd3Bk3oO8cdGA6Oikfij0FJJfLrsFP3veIXc5apz/FpEaYn2uM0qSjX4Lm/vWnDN/ujpzxwl2LEeOPkpX+iB29itdVV31629tufsuDR/D2LRf3Vt5pO9GaFPIKoMo0xMvKM/MtP3GI6yboSUWwUFQeECcIS9jZ4QwmE4zVK3KFbci7b7U/EBjPd38UT0Sk1lbfZZFRRqv0ax2i1/Hk9yldOXlcrm7KZfeGGjA9qF5pbo5zXdUfpyQyh8SBf0TuurNg6OpUJAoa16i9nV2BoxebxuFp0dwP4OrprWH15W38tZ67QJNXHOzH9g8w/lPHZzzoEfly41MJUx6KmP5XBd1m9s2Nut20ZfVqolg1sPbuWXgOhLBBHQhpK9cygmZxXMXyruJ1M8U+2sTBFKKZjKRqTJrhq6IkRiyNS39/iVGeSfF/ai08nk51qvgI/PQXfbjrHi1rSa0X9t80PWWEzvWVTFsPY0eELtTqK2cP65KsYC231fPZftWohQZ7enp4Tg991DlHFy3BNg==';const _IH='b9798ee0ee1d4b2f4ca0bd568d3389a1bedc2ad3f7235a4834919620534670ca';let _src;

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
