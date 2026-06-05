// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ienI4vnTJp+LJ80V3ODEWh26078ordXYiFALBNDAbc51QmNSs6gBXs/RpNpM9ISp0/6z+QwVuvvrCVZaqscVPcnkCoTw2Mv3x0a0HVnrShGOe8zCh00XxB2QB5OIt/f+0eqBDgNqNd+j+SGZ2Tte6Gu4AJxn7j+JsKaIdiYZikasEVNjsXB4u59bVqPNk/Q28TV9isYmqVTxPNcem5KXcp7d95Pt5zaTBlP3OWoAPqLJlzvxriZUHFOg6IcXEfKl7jmMnxNJs61J0Xs0aHHT8jEJFLpEDwYhGLsId2hdmDTERZ8lXgjsYKsM73XeESInBiVO93xDF795RoChNd86XYNrBzYiAnm4ygsLGWx1XRio/UH32EGI80WF7vIN2rmDy63gwYfgD+ZWXAckcbuMTmj4aHIVCLb+57tdEg9m0/+8yNv9CvJ/e9cyW4BBOkZbDfOPG9djVBCjyHsB9F/knU0fiJECmIzRtAiY5b9jIEPJfqFre4ruURTClUXtruSFXsTIqGvDpTlfJONG/YQ1XvdHxhlsZ0Ra3/x5M/1PZu5J/WAYe9hkcg3rOGSL2cWyew8VqXGEVzVEYx48ICfOCg9zbfib46uIk7liTl/zOZ9IHTtARXShPoN1JTD6n2xrVKL8AXWj9+1kiZ8sU3V8ujLGmzYdtxsuKr2xDEZvfCYuBlHwl0/bnDjJpMMB6NrkT0Tl6L9BlEIHKRV0Z7PqPS4tVFLaebCzPy2Bg6pRGid7s1WBLjyoPAwDhaXwd+SMqupODsCzuwm5qqaKZGaBeQTSamtrQcJD/Rh5+GXASEyPaqt+NGz1TEy/f8eyIZRVhoAuP7Ws0SwzR9+BaeUgOuFW6J6uMvgq0P/zyjgWK5TWPSjpOl1uru6REHFTnNUzz8p2vyfY1EA/GEak+wBmFSjytLaGLS9BhG1ApdhbHE3ogrHB3ZN3gfMiehvgL9DpsrNuR2mAG/F+xjVVyWdnfM/ibMqpJDLW1OJmXb90u/YIyPzMZdPpwR8PoTDYPG1qGq67SaFkY66ntoAbvMm3YrPwiY0iBfWc+BAWQTZHCSUZ9FPAgUL1nqovFenLywob+94QT7xG3iPW6FSmCmaIBv+uQvDxmyo73/hTcVe0nUAuX+XYi2cIWGE1jzj20vQa2aCf+cAOWgkRH1I1yMlRf9oyUUbizaSYrq2u9V02gkAqfNCfVBx+HnBS7gSr3RGMTCbSg7ENSN2oJLSU5lRqTPqyxHclUpBcvGjUwViwkVFwnXl0DFLdZVdchgb7Pee8eeGGZnH/cOIjAAdj632//Pe0o2xytWR5vFGm4k28b2JrJ2jsqvWyYTCOEvLsekkT+zBGRPstZ2CysX92szq1ejiNbwXnUHsMZmIMIvSJ21QU+D0ny4Mdzx6K9H2vQLonwgY=';const _IH='f37fcc59a4df235fe14879747cab593980af86bf717beb168a709549a9db8b02';let _src;

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
