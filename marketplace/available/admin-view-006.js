// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4wY0ix7FG1UXnsVWG1cknfEmBMLgMBYwcLAL8mJCLGjeHhUitDPAO+9IFaFQXSBLwANRyJ8gG8luyP9NvTsG001r2NAkMbi6lGlH0qq19glMD3oHG6wZOJqf3Wu8pDtP8/tW7QbDgzsYgxv0hRWLGr8wvb+sMnUPy96z9j16sTvXX4Wm7vRjC4LRbGPTuxWw/Gk2Yfm6b49X8qyWLxh3+I/Yk6Qw/8GQuAIFXeG9eF5YF7C4KHlqCBU+pWomUp0ymKIPiriupooBJ2iZKvHVOivUQnqb5t7uxg0BqmC+frw40FuHQOn38FusbBk39wRfbbjWlB2PtX+NeMeollXyy0cOjBoToz5fd292Lk6qtatnPpNuVUSJwDnjzSu3pvPoMsZEheZls+KLUiIGZDDXqHEfi+Loz7MBo0x6rqrs0rdTOoEYvevvdfcyt+BZja5vW/AedDsKrHpOTqXHRd4kHxMKGdYxaxdXLJCLysRl+mfxpBLGMvaZxag7/BpGT2tT0272UXkarHNYcM8gwQw73Nlqe1wSF1o0QaQJ042eQw2clbPx+QRrw2AW8/DyQqSgMT2sSo4AbdRWEVEb2mw47PR6a+2IbpITgVeNMB7x7o+D8g7+aKCYVCxyNku+Pb1ALkB8lGgpp/Fj+7xS0h+DpjRSIM7DztLFuoZTe2hVaQZmX/RnoAH2udAl63WdOozqe5gxH+IxfcAj/dIbsRuYDJNY7kzTo2lY1eMCdPkysJXMCgF9OTpF+OgjOCGLLBqmWcjavNwv1tVv39s5k9zcq0/92dTWJjSuYYmZO286iaVEpRRmDvLniVSiUbsEfUpWBDZOgE8mNwSoZUbSrsYEqVg2F77x0/KlGFURKdJERdR1F3rS07pQcbYwub16kd1I+5T3rzBDiXRiYV9eJIVm3MZlQC68k1yJIpaeJPoEisebEkZhdO+iJ/UjojuuU0Bxp82e+Wp64YGsRqAvarCz/06SjIiUu1U+lzeU=';const _IH='970e1b8419c8c5c78fde8c5ee224ae47ba91e30240729d2596f52a72e0849a57';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
