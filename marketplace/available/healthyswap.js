// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g5X4/GpHMW7zb2KnZEvAQQoQbd/i0YvLo5K56Y96kMDqnj6ckdK098AKsnMFtWihejbWVPa93ClJcoTx31X4xNnfPy5HHnMdH9ZSH81R3UGq2YxDWO3/bUmWXRbIL7Hnk+oRBoPPDPev3HkRWevYorum8ZUAWi11dLDTw5Ec+Zz6Z3KCN35QzW29Qqx+Otc0oaCAq9StQ5dAyUMalD+7gEYoNYhWW6XRILvrjR62IZyfpAXGsYiONDhwcpOviG2jZ5sAxTwcrB7ME41qr+THQ99gwHKHNyllY2uc9STkWUHkfeiPdwO3UUqEtKMPW4RNOhiEsmpZ/bXSwzwxInNGjFPJqbUCa8wbViSl4mcLlGQFq/lCeKdXxFsWxz8d9FThs1A4S19hXUoI3zvqaiAuhFFrkm32XEYqnUK+QU1vMy7K8aXdtcOImzlvjicifUmYPPM7kWh2Fs610ELHwnIJLud8px+PCMkTzpUKbQ49PKNGEAkQnBF+3cmqZ1IkfwFjwGnOrkMSAKJpF60LChKfR7CFsf3/VoMzRRgd1I0hSoyZe0nYK3dFtxNiAORbtUko2taUiao0/oAjcMGO94GlCX24hVO9VPxMeBQ0eQRI7a5S6vND6FMpTyuriyx4uXZhgiIWwjmF9A0Bbr9jZsnCxNR5PTc2aiq/z+WIYZJycPkzuyXUsFA3z1m0vG+t7mgaAZLWmTRj8ZM/QefATCwSc53hCZJCOmZ7wIssoZh1PWq1A69JT2e2EU3nf3r3MNYNwls6j8WjsL5AWHwxSylYe+9xyAq3Sr/+hiOi+LoC0tim4PRjkHyqn4gkipTEYDZnRBGXbzd3FcgPn603nM5dAAGLZJUlMG1FhYXcdYhE183jifh1n3cnbbGG+q1sTFK1Z9f9mdCeXnAQ6aJv2dqTSHF1Dy4l7kTW4xKBwJ5iGr6EVceSSIPIRuT1ViXWepjVxnqRUumRo95FHiicvSvjbjjBkq6ze4GafD5sK1BK4NmiZcWr5Oa01GwI9xW6/Mjnf2tTC3xd7AaP53ToWu4Ca0KT2PvNxqUf29mb3QgrZ3H4wrMN/ddIK4U+kBEzX2XVRzb3nPhkW5uTbFx/5FrGbladh6cC4fmsoXt0sMJG8N6oIR6HOKr7pEzIuZX8yx0gwpZO2VTpD7px6G6b+5t/eNiHOk9kBW4S8y0ofmYH8LCRLg5JzLbF/h8W58sATaEq0Df3';const _IH='ed6ad6f275b8b7352d927a8f5e1bdc60c9cb3894ede1e5b318ef3fd75aae62fb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
