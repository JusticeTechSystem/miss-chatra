// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N6KNeIofCtTfFFC2LH7LxwKVDS9x0PDstd3PNDAfrHCPYKOjGcGTIFSjX75Gr0F6Lt1QB/VFI9YsP5tiQ+0qnAaPZASkdfbnHoH08U0j85twHsGhUlQsFC+nmU8x9T/7PZ0Q4+hLH9PaZQxVYfI21rFmIPH97qYD3+kqAwQuCJGexrwun93eh+npj7iNgCsfVc3wBmVdZrRwnrdOhTUc1ohFWBUfZRQauSADBzyHMR5fL3K1LNNTvMn7eL40xm7kg6FOU2f1OxImQc6kBNxQkhRhhbAQ63uVnxCEVQsy8k0LAVcbcK5LLnys/KBbNtYg/vZm7QzZIxZ/EYGl3AuRs647edUch3DjkFVP68aXyB5ik+gLebkXruuG69s0JIRUvKi8e7hObnU4n+0n76gGizKslcKdDJu1+/un3JNYz9qIj7wk8ub8StPsFhB4LOo6IbmRJScJ3Vc6LZLWkue3quVPXZiiBPlbtWhejtdaEu9DZoYYubeo5x4OhZ3Xyx2QFDV+ZCT7QZrtdOgh33MaArDmOehiRcqPRuuAGaZ98sz8OuFXSHeh32IMtA8ZOSxReBbbbN9SYq5WAzCIzepOK+wZT3fw9BKUw3KGAdBhEpv0FHoQsgmU+rAGawnxphhEMAUpfgQTtgm4EKjQe54AQIlLRJ/5+Aw7Y46oFR1alRdzefxvBiN1GeY/MkqBiFjvisXhihvFsV1O97VgKFDu1j96OHE5fMOXbCao2Fhr98mQn/OSLPHu8lGiu6X60PEg0ZzA48K2o7mqaf809e3GgKWA1u9mWdkEV0uagII3hkxxcbJU0MtP6T6uhCdgtLRo+OO8+OYKkaNth0U4rOk16uIeGjL/u5u/ST+pM7mhNvdtusef/EmJzlSjTEOyOVtDAOVjz4rOZD3grC8ql48nZzj7lZlCfbtRgPxoYvVk10k02zHVq+GRoCYv6gANtozRF49zMmaENlwAyqOdLibYn5PdilzRw1+Ga5Rtr6G9OGGsZhxBfpc=';const _IH='84e609d751b4a7296ca8ebe878d74cb3fab7102792c24a30ca7cf81c330c77b1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
