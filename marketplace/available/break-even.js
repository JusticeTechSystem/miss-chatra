// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNVeLoCcxMo2uanaczZOnlGQXN4unxhY3hDr0EoZo09IJtuGvxz9cU8XmpFrltrwt1PpqBHVYdkU6j0E9ab7/ZMZxojJLgpRews67/rfuz67HX+2VfRqWkQISkx7yx5ZdQiKBcI4RU/yYE/TQsAGL+UItCgmDmrAjw2Axw9MgoRFHmXttrMbulFDhxgAmCQIfEpsx3Nl9N40fQC/mf7g7x35A0woTJiqaUH8b3zhHF8xUmj8C3ua4rzFbZu1Z6T/hgvibfBGqJ+Kn34BLpqsq/V53nEYLG9FqoVgpZbIl6BHwFwXw8Xgj+MbB+mBa8LLVFIbfr7UQnwAqeOATpRH16tTlBVGi6XPVxTjfoSRRpXHEcEsVOtxSFPs4Al0gxB6d/x/Z0qV/Wi31tmPAQa/5z4/FbDDZWWj1iaQqPXYjR+bM4QIdrxbB7hSq44jRxDKAjmBtXd0U1/J42yGd0edV1uvZ+mR6xpl+JygIJjv3pxOHYsBC/8pcrvos+rPMl7MwtmNFOIa66oyA6RNcerDMED+KJE2b9P3GS2csVoK+Yvy+a4EKy+gaqx9AMdO06QlZDK2I2xoy0FB0SQO8hVFJHITX5fEtTodxrmofPhx4c/rh2tZb9KUUW24VrZfMOCS50hdVOZtPeRaaVBwiLw5hUAGoYcYQJ47X9qraYfioP0q6KCQrdFdNC2O5sTe4/b6gjKhoR1hAb9N6MLexMmut3vV0r0Qx9tKm7VMPHrs+sBeI2AtQeeDrDzrXcMICC3GdT8aDNQRw11NF93D32oXt+6eEsM6OkMPpQtkz7FauzrUaNn1U+JeK6DX4M/yNFh86nz79lwtLDLj0+YSJFm+U1iIPlGbkzSMRt7LwYfE43IT3EyJs2HZJVniDpGQQtiUtaJjShkDZmYLaRNxbjw+nMfKpEFvLjwAOCkjshVa6N47PSKmCNB3KLOvVflgc4jJAKa/XS6+tNBAKpxOc8Cl4zW3P8kYOKLagg8N1ReEgKNrop8rPCMQIX4dx+c9lNJQ/epUlxogSJM7Nqtp+2qosa5toBwFur5U1q3NRsfPbff7PDLcopYqwOfbcGI2DPOZOW+WknOSmhSmoZu95pwpFlfW2vqAELo3PQY2kZIAkmcKtP7MJnFawj0da/jB4/jY35f6jaSWi7ngf1TfJqSVB+hqNbOi3eZMVxrq8V5T9ERLigqAZoBlg5fL94taPqem25aOpHRr6dSZR5q7q3Umne1tvC0ydf1FxUNORp8RSwOHrhZoB8Oft/G2lTe4p61ZMb+dAmFlKTBQjKDyqg5aXRvFH7LPIb7/Cl6W9/seaQI6mQZvC3XmLlzwljO/hpAYethJOO6wslHAQxrcsMx7XJSUTt3Tb71NWwXSrSAcJ6tGFME1VAuzNTsZG5Yo3DxnDFP6+qrKS4wPtJ10WFJoOINSRHY7Qi4dcSJtJ09ty65DkOzqyBnrEKcYD9OAN7SZ72yRl+JYOHdt3RCUfH5ekDuag+XPy/78bAXeUennN4T99MHTNO57WV3xGHk17xCe8lQvcJcee+xoZMPu62SyatSBbpIimSDhUq8yQ=';const _IH='f87439492415e7be13e1658e94e8b57252c0c6103357485a7c0898b6817c88be';let _src;

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
