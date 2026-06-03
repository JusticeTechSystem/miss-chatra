// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='upG5GTKtPJ2798uGqD/P2eSiXQOGewK63uoK0gEu8jFRN1AGvGARZwCHDifqgnrfFdwhucEEruCx1gL3z+sDfuglowgNVe0TSyTBd8OUZuxpCFAb53BehOHq0feh7hRSOxbo9ojHJmf1m+XyEj7tQL3b+AiVeMCDK4S6hEsYwhHfE7KsRvxqezUP6Jdcx0JXaWp/oYqcA2sW/56cJuLvAyUVGNQM3HpA32GAEIvuaojvU65j7bzxkRVT3YQfACebsM0CRQ179+fJqse4g2xMPza1XsBpfQLOlpEkidd0sVApKGKZhTaDHTtPOVCzg1GyolAJh3k6N7WdkLwTsOzrouAkYc8BllS+/P3GhHFCAZvJ2w7RPLJA/WoFSg7QRkxdan4UBlHyKXrUWmk1t/jUSWV3IIeFfl2NqzLj9uFLBvaxAevNU0ItJfT86RqcnLd9PRUYJorN+U+FqGzN9xx0c+V0cG44tFJRpPiENTlipO75K7NwG2nALr7uyaQGCBH2xFZDrCJi3knOt8+FJ/k3ceRBLGrWcAYO5svLYc8cggdT1H147uu2AcMRnZI6Jhc+fNoFImQgnyc6AXopWVxyewnr8febRMFHGeCVJoLK8o28sex0mW3Sj/SxCGtNqy45EH/eF+dMYpYqNbNFNpqO2R6031IlTqoaTncT9IdqYrQo4HSCfOca1jc5f2FKHQczJbXvZsVIjVrj+InClMwELpnEPdEL2QA+qcbSBtEC5q29sGQs9zdG+xYMUVMCjOIIROVGR9GVaj2w4Q8YsPekYOYtlYesPaN4n6E3+8+8XsfHhIw5chtGyQn502khdQI/KgYrBEm4xuz669x9zrF7rkW3dSWLU8cBrtezc2kl/ZNofJfO//bZ53+2Xr4JghTlzFIOuYFWRGvG/dIinBGGI0awzSAf5wVjYabyC7QFBkhDpkgVmfnabTJ5epAwc0jTcv6LrRtMsV85F33CsKYg9e7Ff8nl/JW4Yyid6eFMaumOsX+WpaLHPPAh+75ZvvWc/wtimwpXQrvKPXtF200Hxa0geGZiSstFw0hMYTxLac8QTKiZWpFbt2WwAoMOcJSJ8KoPtLgb9XJy1Sb4oOOKimLVZb2VsOhxZPjRvrhB8I9+egufspIEtJn+I4wHcunpuH5he7Uk7gto9pWCuTig8XJj5eJk8lm7JLizRL2wbcItV2/5KGE7fKk8ZjtT8ojTdLlFsDlbtaSn7NtWS+uDToGY7lXp5LKnEDL4j3QpYL/ZfBgTmI9W7XRKgRT1HPHdjGnh5FK+FDSXqx4x4FHmok9tERVmcZiBao1DUPE/jJKJRKUrRpPCXA3szn1k8O52tOaWeGc+0bqA7g==';const _IH='ca2371c543f770bce7357137d711f8ca425b59b49cf9bc73168109bfcf9ff01a';let _src;

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
