// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HFDo+RzslnuQjWEbzvEw6dLnct8iOsux/k3hJIrp/eXKrAm0dOMHx3V8ROxsgmevMgLqL9mB6xA0+p/Pzyb0s2f5p75WLQVCdhtdKht0XVomE+ArDWdEZBUbUh0M7DSVvzX3yjN/4FF3BXy+4SB/GgNh75JmyMgoIAB50Ca77iPLTRHArQo4nyaqHH9NwjYwzl6mhG8ATeTsuvc+uQy3KyAOCP1pBabpzn+tzo/QrRRBcl27aLf2sXB40uZdrK+cCKBIBOHCx7tWoS3HXZnQ36Axl0/TtGk1h2u+V7wk73M56MMZe2ysiZUqhMScTikUZxAf1A8cEQhdJjeKNuSdhyUd6MHGiw/CZnQSnLeu7fm+PV7Bl52p5Ds/iTIcO/it7Rl2oKZ4ylV+hS2ANnT/A9Mt4MBNyV9XFxQgzPjtK7oKPdcwLD64azQAb6EWaZ3yfqWi7EiqPNjxZTYi78Hoq074buoNYbjTvW+yMhtBTGTLIIVmxbwMZg2/QFpOV8f3eFJnW/EyL+8/IFVsZX/lTa+/zURNqlqnWAFcS2sQPIEopleV2Uce52Qt1BHVluC6HmigynRfsL5Irr0Otqb0uRTKbDDOiLd7RpKLao6AwWWQzS4wC5HNvYOADdGubY71Q+uJuIktYODaJiydzSLI2LhZ1Jqw9rKoTQPp99avWp/ZTXY3FdOQCZZfcniTWZwnjtStiqrNRSc8/jN6m9QR/a/oj2qZlb4zL1Yzowv3pJIe8qHMBo33jbVv';const _IH='47e8857cab0334a20e3261049fe2455d8aeb04775132eab0cca213e6aed55e60';let _src;

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
