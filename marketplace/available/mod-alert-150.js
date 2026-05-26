// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='66QXHIWKcENPYSEiGAJBwysmSmdIn4wkzM/7VVl6L5s82UTN2CP+YD4tP2vjStMS746X2slyymlhEe95pcbitdGC3oJ6Zsjoej0FZwC7KNLwXtIYWtEA/4Cy7aBJhPEQ0a9H0i1hnvFhUUzLuutO3V2gCHhNeiufypuwXZldpwHVSLoPNIDLUIqQfsKAmk4QzFPafbxhgpcYWPZYCKOalMIfqieG57Aj0sbYATFhtrt8h82wSDJM7z7ReChgjgLhv5EULdjY6GwWtvdi8IqmuKVcdMgG65SInNF/LTQO296Srlg2Df8o9XiPGXAM7t+LwkfYRL2W+EoyvIR07pWqWcFp5Mzy9uZCWhccMsjmcQxOB5ttao5kRw6W7a4EX28Q/3CNFdWIZJe7h0qPVhz1vyJvmewRiw7HtKL+Oc7ux+YvWSuwuMLOYRryP0wXO3zzvXg4PsgQorn5ZOPsi4+BRdxn8idUs/T7A++TU24mm8sjGqpIbIb1a7uL9WmUmX8WsaQ7uP60gaErh12cP549ddVi73JmiVVWv1V2kMZJf91ikzpxPtuizksGm3JyINkh84w4iU6STUTAFLgm5DMJ92diDUhKh3bsvFE15n/EXZOmJO1SsilasabGCTsiYS7NwCksAYRcaSftAsh9e+lQC1tSwqQkHTAApioR+3QWpyVDU6dXgydKlPDruRC1HFAxpFWX8Zpe0VPrkqz2sCUidv8T6xaqRjdoWNoK+I3OR4kLdS64/Aa6MkLN/JWdm31h4g1fi6EwV3tToKwhfC0DGD2Uy0n609Jq0CjBV/apT/Kw8SVz0MFCRxiZxiF5j6VsLtOX+OL3kQiIj8OnSXMbhbk1d8MsORC0tcPnFq5ZHuAhQPJ/L97fXBzOogZnJLATONTyhXkRc+9HwYmDeZwuNOyVB6HiO1+43QwKpChliamjpaGQZottlNxFjbY7h8GHgnQVicpLjVlInqjyIm1IJKsz+HDrstcPQPgvrXgmBdw9QBlEPOtjVKuKlqQeM4H+9qIYh2bjiEtAAqDLNNYa+ByqsCfJyoSTt0aOtpH3JsySEoOfBWxp/x9Yw9QecEbQf/QBRidvI3v7QhvcQ7AErI5uI3Yf5O4F9BrjLpiGVQGetekKjoDJMp+GHiyma0PycK8u9RVTi3ngmpyRe5933t7XUCpKEoqOU5ZveEuz6XrPE9SYQoKLsF33+PyK7od0byQ2vA2a1NvxPxlrXetqrAwL5jRRw/PVRCB+zD8c9Q7ZP2vP6FDakOP8Ke880ZkNlNjwdOtP5u5IdK6yhs5hyehfmd1fO6pfQQN8NsMfbY29ldgwd44iTXvV9FEUSwe6Q1UbSggxsvhQC0r65k1QmXWaA9nGle38mm7cnmrd';const _IH='941763c774001126de0aa408040d211d1abcc964bfa9ec130a420a5fec0df943';let _src;

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
