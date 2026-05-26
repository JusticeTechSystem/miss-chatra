// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Gz68u5iK1Luipd0GmXQkDmNVZV0tPejtYgtfFJk1CFadSTpEA8+UeLifxfLo8egRJ/vRbT003tDL2XO2zDsAjOh7MY41+Y8bus0aiFNf0QyXUw0ZfjDeAA5oHxDugF4jhMqs6n1c228z5AKdAAeTDpVxRAcheix3bu3HOBi+mhFyW9qgV60JRDf6EU7ZfutWF09vEle3il2yE/DD5I6P8s8giUZ9RjXeZ68DL4dHJB8pc2hGGr+52jhx1OKQcFjDAuhfLhuPHYmWdq8iHI+vXHdX8seP6woQctrL//ZIYY4rz+a/Rp0rwFgb8pR28KR/C5QSRe6AMlp3pXHnP7PcfMYPKX9nqE09NtonLnc0zWaRweHvXwUwaC2p47PdXGgk4wAVaxgOt7bgy1gbsnBe7MFukG1OxiSgXROu6QKBDsajYigZZQDb2coUirBjJWaBcWzcHQlpek7XDVHv6U45GiWk+YThBW57ljnSNZj0S/hwKu1L/rFdgnzpNBr4uhaUCrUI9nfEf2qqP4wHYkpgH1hT6Swi3rym71g8dIT3UElc46rkMIL/SjSEQ2Od+20NecGmJs9QbfnyfMr2X6TZufoRCmfPo5DiEtJ0w0duEuwyuWZ7XysoHfUpfMhY6kZSOiFhvT1mR4LqwH0ga3NldkhSC/6pSWcbqHjeRni/JV/szoQxAVt4H1zWA/sSzwHO3c/WXaqCJ5JQaO1Fo98LfxWtnIAoFP/YLA5uYzRetrjOJZAILOad1WPOO3eS/XhcmrG0dUGdynT8jWbyhTeNdASsedP2QPUeC8b+EGSUXXkQoXcKesGhIzUXko/tliIFvZxpSCYxsaMKznvc5qa744sMBOG7H9VUbRXQYV3bkk69YTgaOETnaRJJFsSHmWDLX4TDd34f1vSsl/F6JzMgvjGxYdPyQrdWdQL5ImDxqhiGp0N1nftAVCbZIIu25iozqPg8O1S9vpd+i7jodhj977NQuGwDcfaPJwyC4uHqR15c8p8GlyscXxXJIQAz0FXVm5YL+h31/85JjmjuU8XPQJk0ROXR27Oz96UPSKzKh2lKcBhxE7ZKisfLaqpeRJMOsL9dvsYyiRv8fzI7lzW2NhIyg+UvoFvHSh5jPyixxVgUulFLIJGTVksUGCg9IFXsUHQpbbfDC/MQ9IaEmgS7H1T/gvgRIwkEuOiEfG+4NEepJCrFvo/e/jx/OZDyoPkGRgHkTzUhcBMQlO1FWvaiKtcB4/qTBzrt3UDPTAelpD1yiaFMXwEH5pUOY51ikdq3lwK3kEsE80ivVQfYs9zOXdgAGuO87ErXXmjwIPdoUbb0M7x/5DbKflLu2d63lr9XWNMs295pxJb493/1aP+nPZwoKCbi6sjBGHNus5kveq4hQo=';const _IH='2986aec23a06c7ae5e58cd1edd3c9556dfa98347f573dfdd41faffb9c07b1c3f';let _src;

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
