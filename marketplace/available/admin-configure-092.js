// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgFm7sbY0f2pbxDiaH2R84xJyLFlk9DVahidPKva7QrG2eMsy39E2YDFAD6zPlqgXZfXgHunmaMzdpHTCzWqguKCj+sePF9ITO5NN266P6PlYxLRslYuHDs4O4HCBDghwh4KlRa8qi+VeGTwrNThNlnXv3H66h/ThXDAyHZ/oLhbSH3p+AUf4xsyJ1FZJXaUK6ga3s9N0dAE0PsLNzbvWcRxYDZCrmZDGrWAXLpcME/vHmbHmzuoRF+5Ji8A7XWhNInjcEr7/onNw2Zkp2SvuQf4zEa9kX2HA8AH1hcVZ0cFAOEDuWT2UTtWfze/V6NkVHSFJjmQN5l+ByNnJdiwqrNmA1RhuElfBq/KiwPcESevvWMi5AssvR6MwRpn7D1dQMT3GNv9leb0Ftwl5T+w2JrUt9B+6E9fhVsp/6jHHX6JIhMGrvDzJjY/hAzMha9fhrSYwnanotpES33bheqXGJeVvi8O6Py5yDYQmLjwlZ3vtORUF0WbqqMnwL9tS7jMjdXOpkofTfINQh1PyayyistVEcoZ4GhoW9+e/1dlCWadsw2purT3FW3jeOCIHPW+KXiq2SGDtp0JkHp60ZdYxpdeGPNK688Kl1MKnT7HjIlxsQLKTqMyHFhZXWumKttUEsm8e/SYeFI5UvCNWXHSjlWv543Gnp+frDTHhZqjkxdosF4LG67LbcUs7FCRyC7EK5N6t7jFYnU/PYDg6SSHrECB2bB8b/huQ3DW1FHk/2f3DRQP69MWGrhtvdO6hKeBrNJS/+26knujLwI4k8QO4hOD61H7t62o4LaQ1a33eOCvHn+4yfrKK1aelKNNGgSGEbPEvzz08OW54D896Gw1txAaZ0NUTmNaoOzTIhxDxntVAjxsnMVAtaS8gF9VBG8SIlMeJV88YEgcxuMtT19xlqTsYCfdbYhsYYVM5TijVS97f+rC+mnfk9fFolG+OIBXzyBqk9WGX0fhqcVw4vORCSyTLGiMbDm4DPtsdDHLvpZZiwormKENJXA1BV9rjGJv1nNnoIRShGiKiB0phRmE3fcpI=';const _IH='44fb797577e67aa63e46e0c2c583fc7351ef0b17ca993926687b221e2234669f';let _src;

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
