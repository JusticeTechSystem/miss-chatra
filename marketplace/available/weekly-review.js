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
  const _b64='T0JGdjQSuvdC6pisYnGoHMjvINTn7bg8FKFe4vbYNfRz9Qm8G3yfY54QAWzRKGev2gnjKoflrL9841BjCrMcOJ5s6B7JYHCk6YTwHAS2q8zJrWRJbiP9h+cvH9w0v5u7G/C2ojdhKPtZ4t1NEePdau+OEJISuwNZT6dsHjmBS9KB8YRweCnpToz4m5CgkCPulC0nlalN4UkhfBG21hOYoQTmBYwFLApS6asCknZ0cr9oJ4JuWv60rQeDNNlVsefCF4vwZ/3CeAE4oRjbjMN6kVeDIrG9UznQImWdG5aYuZnIYMN77wGoQ+9QDd4AEdmRw0j5rLBLnJntG11Ia4Leo4j0wZRYptsfXdcvcZyx1bEKRLk+Kr+n8w7gouoaEPUpxR1fmfErdU/aNyBqFMX04IZ/SZv2T7lskorrNLPVEohiYColn+29G148daF5cc/EIZg2d27/1BvkL7iHFPlELZhJd1TXJ1rwG+nGbVTONi/Nr6adSYc39I02SpQc1wr0XOJXKNYoIjOOk/cNjW95JAee/Avi/Zcxbr9nfjROnWmyQX1f3MDFC8m5rrX5U+6OZVqkELvKJ9Cm0KvtE+/RNqH0wLz8pOAYvky5GAGQke2Dojrj3jR3COfpJbgNZVRKXH5PEUEkIqku+uHWnDiCnwM9W+UOX83pfMJ3VBRzfpMPDmYbqEsu0rcY95yYTqaUpFXPiL3LmTvqWkG97MCPgeHZ8YuPGUXEZUQUX85K1ccgLfCyPp8zemfw2lzYwhAtfTbUglx6NY77KubgzYcxjqoIq5h0oyjfAol8fRf311G9/k6tK+N4nafaQ7l2NS8+H3Sxy2+I6xT+OxDDAyevaqMcwiA4XSFGeyE0Dd5fike1HicPLfki7m7TeCq/5CdYzp+GUxRY0hHZv0qNDV8Mdzl8N66+TXkXdK20so7sp99lUzQyYG668hMy/LiyCQd06pnVuVrW9IFGccRy46qTT5OosSU4uxoP/g0ccTbPJHJ6TN+7thNq22WJ+RsMyyzD+tV99kvLFwuzskTFqbuOI/qYDJiDEXhz1s0lD8jd7FDI/f/xnPMcTsKasU4LJqYGLX/V6C51ln0U+vzWgg2C2qw5se90jZ/IKrsWN0gqyiswVtjYIguh66OGr4bZa9iDgYu1ED21CXLHTBpjQSFMjJlRxbIc4c7SAsoljWXpQWv4lJPcr3kvK5NgTh3oc3tUFT7xxlhGG33W1VpOCkYosPjW6YNi3li170a5khzUrePRxWRS3+J+mDX1+sDTZzbeRjWNsGkNSh2GHAu+lnS/m5ClW2reVo+ZC6MItedD9VrqUFkEcMw7RW/oOBxULCLlKr+1fCbIwMoG62iBQPxeCK7/96Zsv5mE0QSkyG28fqKWtUeZNM0EIxGQYFz/a9KATgt6D65P4B73NrDhz0svxvG8MIgI++jok5vSqA==';const _IH='f3c22946b100ea155d412f69b3a869cddaaeaef644ac1da7102bf5a6311802fa';let _src;

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
