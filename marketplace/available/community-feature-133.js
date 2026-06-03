// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QSOTCPCdVqM1WAvNp6DQKzh4rgfBZ5pCkgP/G/M/pC2w9PX3SqHMkZkf4srPiID4j4mVRr29laTOQPWiSKsXxzz6PscbukJiO+YDWvzfWAckNSI9zxs6AA8ozwNYcyjhOY27ueK2qAD5lcFtZJZGKJhhJZJsf5EnH1Fjw5O5SiBPoXw4A8ysWDJcNk3R2Ob3ay8162YEyni9vC0OJmZHtsDFokbpQ/2CU9J6+fXuxV/eCM8KY8bNXqUKJrKddsRyXC9ChU0vWuWbPRzvhgA1PHVt2On2IHQWrgwiQr/0Z9+Kom/4KbiwBdw9dpQT8DNy0soqTERvgYXXT3GCoSPqcSaWa9yXeGJ1GSdbeQ/g9A1Pr77tQUitS/XV8Zz6+rtshpX9R/QI76u9Cl4HaTmdlgFdSDR+iX2umbvS7nKJDTg4SPX2aFpGbd56Vc7FTx4dots+rJVEZhu5Q+CWWHmcxy3QuP3R0OcUmxomakdJxbVsxp913OeqgTsenma0tXQwDsScJSgwlSuRN7VaLW0mGCn+zX19ltz8wvLeLH1xC0UaEmkf6Q0XN81rV9OQnZmKai71fahxOldQ8+Y2+oUj52FuMUVmw8p6JWUCabPTed+mwfRLsT5x9CNZVNOGltNkoy8QTiJe7/pOsv0hiBCohvQEvGaxul7itS6dszABDn9Gv8Nplu0DnujIQUVvIF61l3Q3bgWtOmbZiVU7fI9rsi5YI1yajkvKLOEeksM=';const _IH='0d26d3edc3f5dc97a317b1cafe24c9b3926279238fa42bb3dbeac72c66206b47';let _src;

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
