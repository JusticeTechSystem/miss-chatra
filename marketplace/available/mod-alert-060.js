// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v0LDWxsZ0PFucD6MwZEzbi2fQAPBs+IHvr1KPqYhyCRh1CjDhDSmtMYCaw6r9MYAqEixCkx1xhRycVvhQfrmwBnZtFdMnA9o8GB/ZVBFKZwx9hCD+GLoAYoMLQfPJq98L2JA0nleL8xkIFgyKfydGuyDycvkYCe/04dadF+QNvobLERqJmzZDTIucrR4mmFiWn9s0PkokDstPUP2h+GRvEH6y7sFcHF5CeVuVouYTTA/qMjcyunAvL1duUuByBbiSNLICkrwOYkXeGgrAEoKtG42omGxxq9iClMW/4FuIWMz/HExlvZdSZuhPCb04em4UH+HUhEDM1BePaZvLBSHEN3m60ZT1MsXbmVdzlLHyvmRcLAFG2eYEYW9XnByDkX5P3lJNfxfpMEI0AIlZJNSZKWN/N3sjxg+0YUnn81F5OZ70nQUD1Z0CVNR2cCsZXF2xHQ6EjH5IAlGfaoEpL5avCY2wmUyqYB5tIA9ZgRpV5Ktn+KIjwBHkf/3gJjwZKqB1hT2shrhATETJ2vqPbWDIS1x8B88Hvo0DX8JQFWG/NC3d8VxD8/dvrf3bm2CcZAnpA82h1KiYEtZ6D/Gdf8htqvX1aqkkZOZE2Orwd3ly8ihcgNrwkWU9/DxFaA6JCSDymlWugGZfBQVebDr4hKWEO/EHKjiapO78rlEzgxh6lPSAgvMB8wJZvoipygS3qhWkNYhbYNtKjulYzAxnIWmXm2eMg5z7Ju4nchJB257LyjrnNZfN+/vunjLfvH3TbOkTVNAIktYrVDNLwRqccoTXDiG5N0Y1JMUHFgv4E+GdDNNPVSH12OhETgftbOO+7HyM73cplxODOcLM7+FajI65BdOgfJbde1Zlvenbh9fmcqUwa2gC/UuKOczDVOCzz93AYitJt5lptapNiB1QmKScVdaBfrOzwOc4Wd93fqIzdtcscRhFDDMmqlQj7/qKR7AEla5IJN2Zk5PwewyEmEr/pwseRKUQf3AVsgcd0esWzHAQP3J8G3fBikZ/l6h89VPBmeLJYIbKnlp88e4knhLy0fSsS2wqzx06FYYt0ll8yWq8Jbde2J8E8d5mDSN809VGP6MKXHxahJeH0u4EqtCUUxHoWKG/3r5c3h1DDQqwhveaj1GF6qESjhnKFwLBlf4Tf4Em2B8GxgTAIWA6KXOKxYikhHUw7bqBNBicYEe2ptc513XxYdjjxumu8kUWv7/WEoExUaNcHoH9eFK55DMH+j8zbWJGovBhlD9ZAff6OHRC6hiKzAk02l8kAgxwzn6iZa2CVz0IWECybkbLHQ0HmsUN1oxuB02OVRJ1wvFd39Xp5qBZ0i7RnOXcdF3DOypovEp2VaVQRGsRdeSKz2+8PJy5y2w+L5cug==';const _IH='797807bc99f376ff1d6dccc2507f76f844e1bd83790a6d4c8750dac1cb2a8f73';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
