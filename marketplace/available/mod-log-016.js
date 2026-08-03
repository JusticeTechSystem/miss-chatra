// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsJ78XiEAKVPfvVk7R8cPiuYa6RNKhFZ6heqTStTtWC9jt/nV6/VgSD+ZA30iNSY2ZXLAPjsed51t7M/NOAmsa9c9GPJn77BIPHf/Kovlspi4uZGlvv70ZW5RI+Ym3kYF/ia+uldCl3POFxSvixbwiRIysHdhIVtH7gAhRhvd5wwqoWDhcVmO2XgFyg7J+vbCYNgQ/8RTOLJcB1x5xQXd6EqtCTMeLSl5YRIQ1H8BO1Jf8N7dAnmrZ5h4HfbpACXH1mKzWlZOsE+szlGUO5FnjTxJNZ9ngBf1z2/IUK/Jlkoc4LtXTlbfgrZR4mC7jjAEw8r3hNXvW3VVwKdDZU3NvxObRMnf8IvG1uj5zmzgEqSXS3S6fmHFPiq9131l6iEoMYagpWrgfTaF9rkRFpaVfytS/65BYEcmfq9rosm1i6VS7WGAUJC0RzOTGhPOTFP7INPDjk0Il0mU+GKtae+PfA1CZnwSRHepI8649wizzqUWIxg4WFN1SMnCkNfFGfPDTStbnoSSfpnr6nnm48uNDRB1ry0RLgYOLeiKJl9HW81CLzPadt5yRgYhknqzqAZ62L5gD9+kWJR9PV5EvLkqQaUB2g+gYAhcFhgEGWvIS6C/YMczoOAJO0+65jppL/cuC4h9UWtgGM250mp+SxmpkneFAAIxNSDZZ5JaKnlhd5fzLo9JxWIUGN/WVWx43L/fUb0IFimeU/VtcKL6KAGIVzZiVemijEPEkR/JPUXve6ChKfOEcc1hZJnbdJTSn+p7f2M5vdmKpmCB7Dj8R9C4sVJZwsNxglZFjGMYCtmj5/fROvPfgci+Ip2tz+iCml6hF6U1SI9RiDZj3d2bTDg3Bpbx1za3aO/8fG6AaUOWvppLtVvognQCzQaF5RnItuITgbsf41jJ0CJPY0qyrgihse1O6JRITIrSfg1Vq54MgMVliNqmzH4++f/vNrAXWmoGokXkiNTfV3zM94NCkd1u6+Oy9x+L5uxzGqs0I8glgjf8oiRJ+BALGCtp0HTgeCzs04hxiP7yuplCThRZwBYlkebYYcAYwt6Z9Or5xqyrHLZnBBHpZGZe3MFGN9t6zDNPfNsCNnJZNwIkUNaBbekPHZMRssIxB7KSHPhscVL2MYBALsH1XM6UgJlFF9qcj5cemAUyThqtM5o4UJBK0vHhBw+T2aGp1rN8GRg0RvryCPGMa6ACxFI/4fiDa81HTicyemAf8vNoJFlkqbG5C4jN3U8w5HALp1g54O/K0wswWF7ypLXW47i7djYuW/zujpJlmhBHL8ZmM8Mbu54pEy6ToQ68cJz/73NhKgiwmftJ9nb8uZIgZo46AIePGMjypSuEiIw==';const _IH='70d050eebb90149740845aad543b4ac93faddc9e25a07013346820e1fed1fbc2';let _src;

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
