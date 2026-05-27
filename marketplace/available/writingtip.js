// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zc+dXkLCYFT0TlFr6XKhVhqPEPn77dvVSsBqO1E768xcftOLvfJct/A1kznzOQL892ObDuoeuQI4XcF74UsWgZdZlaLovOoL/Oubd8zmBYGNjXmzxyZ6h2U52UV+VheE4HddVOmNKhiKwv1Iv1a9k64PAh5C4movOD9C8ILyJk2qSkhKRAqYdciO2/XGfDUWtMRN2UITu/UFV3QVkZnmUp03cLTN4zIYukzzfH54a8gawbp0r/ITNFUARE9kAvUt/JBodOiwapF1y6se0pRYp9Q/bIncw9JF1HOqT2lHfCH3VeVMQOQZIJzgoz/PWaX0PwraQK6FY5nmU+2A66tzR83unjn7KLNT0i6JBuXZ9IPG5KcCwcm3eoKdPD4t1LE8yxu/CImnNnO1o9TSFVez0oq9wz0H+o+y0dWF2BaTn4RTlzE3gn71rhlQ5Veb/ZqSN5XQPc+iZmcNXGL3SsvmuLgN2niBj47TscDHjy1nH1WXOPWbPv/UIHPYoiCovHg5Jotzg3VI4EVQmAJFPNNIDqggnym6dbzVuiztuIjbg8IsF6GSdegv5e0AJSyYzS6TXlgcO2EQkVpfjKtK8bpUoX7KczYNfc8cl9qxuGIZbTePcJpTnZz8GfSJYZ8hw3ivKK6t9XPT3gbz8vaRrjiUiQ8NBYi5xX3C8K0+93o5D2dDoQZ8Tz6pcTsN2JhJnrNnweXfJokNzgBvXEsylV020LMcYtnApdtn71kQV60Dh4bjkPfggoMiOe+a9veKcUcxFdn7LcSNkWhJdP9HV6CIccjEdh4dNppNuH6MGAifcWMEqri6ROEULgVHw4APRMi+Sh0fwrjAdpNyMtHNiOJma5eMfPSrcq0cFJjByXS0nLpp1a06QDA11UlROokCepPRMaCStkSrzbcB+6wZBFMOzOJJufwBUMWM2oVdReJD+Id6wW+tShS4D4dOoNx59B707/3c7EJkvAkpVnxRUFYWOxw0FFZY5EoNeFR7DrbNgYFZ9Jqg1Vzb68XoAuNo/wXNlvCpVvhC8PeRLM+qpt/nJprPiMMYcWdRDW3NA7eSiXNFMPTpbfmvJ6VDRH+IuKSZfVVy9tSsxV8K55bqrA8lk3bdr37EddMJ5ogIWt5lL39cylv3uP9H9BwUzj9e9RfM2vD4bpyuSY0bwSQecKQdaDzmcAzO9TisM/Rqmv5uGM2WaSRleqa+DLRhDofokkkFPJnu65Mnrg==';const _IH='61d20d280646374984621db2f852607d9b4ed6dbba5918f08df6a8dcb4695ed6';let _src;

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
