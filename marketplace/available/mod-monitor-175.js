// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='riwQd7Z9bslK/vdfLYSIFASoopqZTibfQ4gMcOOoO5NXoardpboeVkMbUR7BTszwm0dKzJh1t/VEpRO/MIgX8NG0l5QIi2Sn/sYP6ooCz7RCSI13Jc+AfNHbleFlGzPpXFNku7+aj/VDuqKJtWO3mblcTfbxqlMP7Ic339vQES2yV84+kYC+Go452EW+MZLKDDuyT3Iqm/+X6nmUjHvaIcvdId7FtnOpcmbE6WEQIWYePm882yxFA2gv5IDoW9Gkm6+hYxl/Tjj6MzauapahdSPMiNoWbxgut08BpKFKg7l12rZ0Y6lVmuZGd1akDrseQAmWUCDqQ39wAhmgr9QNYZziaBGc9QhLIvKjyDV2HAWdDXkMONXAHCKmozIGRg3Qg4J4V/Fdr4w3FF4FELZaIKYP53XBBmZi+/+7y21pCFCMZDrh4NWbLrK23xBDedKLEVurkdhDfmXSrX+v/lISa+6KBsXKfUHZTBnvaL4IgXOxdNByjsGrXtvyamCyK7k4e9eaRi7TETlrGL3rJNrAi5bZVTfYdwiucl1dGJhcVB/Qciez6W1GyasH4kj+kEc3qzTlg2kwmAFizvQD4g75ZY8Lo4E7F7t04zq3R0zpwWQea8mvrsJae67b0JtrmshGJG2tdwITyhsfxA5PbR9+PEb9DDKTgUmjUyekg1NdcqEF/CWDXpTGJJL6It8ESwygaLs+cRtWZNZjZyx5BnjXD06MdbC4RsvDZlXQj4ZsYvH6M2x7f60MAU3Ra9pJn3NwLGe6F8omHcLfgTTZx5/8SDajfnnPRRIDnAmhS3vBXJfY4A32RxzWJJorgjrYRB6TV9MURvBwflOni8SmknLKS03/DXK8ROcaAjAol0gvt16ZseX8QTWyXxwNfQTOsKB8KLM2JaFgK4iiyeyLU05BEAyPe6sxyB/FOzMlaNodhu+zp/vMF7M35gw/2pMVODS+lYRYK88LPUsXuKNdOKDYWIyk8eflvljIx/XThRyVgPCLjloNGFnSPUb02FCwuoinuW6XABVN+KqF6y+ySBXnfN1LGxDG8LYDWSsc8flDBuT/R/ta9Pm/pZgAmqCVKtnAtrRZSpAc6yg/xdbAQ0LW7yj0BeRKOfk7Y6I9r7ewMRfhnGDx0MN+gDfaRVqdU7u6QE991J0TBlOA6pB3g+Dno0Gre16/XxkeV866QO/Vhm+N4nZDP70X6ART4Mu493pqkLHJ5gvC3LeYUkgkEP9ceStAxYhfeUiZLMLattNYdXqIzqnMcH4JQcAtRh8ZQuzO2riSbMmdg/ACQmy8efMOR+6ECO7rjbXgwSUfAd7wCYxwkeFMdXW413h9wIDE+QI/AmxlGu8p/kisMl4moJ8jMBH4KnrtI9G8TyrjOB27mvZ/Ws6EoPix757EFiR9c+wFvog=';const _IH='ae79671e9076ff9131e799693c9552f4ea292d939e4e47cd1a0eeb36c565a2b1';let _src;

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
