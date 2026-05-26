// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fAKBFF/2FwikMMhJlcS4bNxEPwjgQ7w6TtAErK1bePeVMvcY53qEwhLpAXM9bwNnhcWkSJV/dZfRD3idhx7kZ7luDdpfdPpvyJnzei7sdcEuAa/idadlpnsgmI428W3V83lp5JznqWDnNthhwYeXy4+dPqdEW8Hx7MtzOb8gSKx6VjXPrsWd9kj2w09aOqHAeg+ErC2ZK5iasJn/PYu/RqzpY66/6jzkkh/L5i2lSREbiTKJ30zHwepG/3g//639/PSAVP5c/bCXc2xlbJ8v8rtlCqSvumAsvVt5r6MzmjSs0KX0iKIXMHABfcsi9J/jVlmny+WF6DnvIGT2rEDMcD3vC0AV6u60UFmT87458tGHnXl8DMwEseFLkPBdAfSA4NHBowH+cEmdx7fMRBqICBgPeR4ajnSnUGbC3rnZlYeCBw21q2cSVSSiiFW8Ea/LbynIrgavN7o2idhj+1wycf9PHYmdQzqAhIi7cbLVebV5mI2nYDYpht+sk26T1kJJF4pvlFTXQIjNUgnrJVLm33KJjBvr8BHco9j3fRlt9pDElNc8mezivQvCzKCXzQ8CY3W7we0eeWpK/GojhR2eC4NfdWf9oLUfhJpdG1bnwp7Jz2xjDvDF1vmBgN6wzB423MOLvg89PDZ435uGLWvnAcXLdiNnzSeEv52lE9DbXmRJvPQgvBWEtqD6CISLCmdpwkV5f/cpJcsj5L2hJt38JwNpKFJZJ/ii7CJ62de551apHqDPeaELdhRTdqojx3rAgT4Z/YCxQovuSUiNfloxFfa0TtS2Twfh+j1ct8RmxbjOlynyxWcs/rw0yUaqkw/n0/je2w38oDv6gZwbeiw8XxTb1CAy9fMd00Q59vL7AD9FeYaybAflX5HZTxqRNg69+O1fJuvGMdnv69iUnQ78O8ma81Oaf3lVZb6nss2YHMTWP5JgqElb88hNrfo2Qeiwjpn0cPq8wzyzC6id6vrTnBrwFMjhkdSIhHni7llC0Oi/IBbP7Zgp3WyuB02RDGnOLN6D8Q14bB1J0/eXNzlwm5yaDGEaXw==';const _IH='1e0eb77488358bce5dd01e71f35d5553f24e607566e40e936ddb045c740680c5';let _src;

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
