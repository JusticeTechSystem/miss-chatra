// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/d1d+hRx+zdGTTIzvj80VGdwGDgCFFdQt7LKL3SCYHCDaGMY/leHkpeJwKvf9nu+XccvpdC3xjytJwD2Ma4aBW7dH6HO5IqdRyr7AbyLehuuxOsc/EeNOCKXUuebtOkH43uNrQ5hCVOcfKW0Ar3kx+Eqb7Oxhw/KAMOVRcOZloDgnXi4BUYmY1zSce7HzEbNGdM9G36iyI7IUXh50J0hzQstVwGJocqN8eLiI7BYPyZfcyL9ejgJaZ83jxN5ZJrLc6hfgfsfsP9NWnQIF/sU6qghvPpac2VnlOxYvWxPY+oxcjnLSRpc0258T0VmiZMMmk73gnDr9nL17ran5kv/Si6XauNSoHqtwA8H1AOkQUP6bbLKfjf5jW3lQmUA+1p2jcLNt7+6/wKFoMBwHC+WvnDBMMKtp6Eorhsxri4WhZZ64NLmkHgOmDeHh3dy2njfLXBIwGkD5OuuNMQDNL52kGdH3CTU91gKV2KYXOVEMnt/DXDZv/n0B4/ljy+HHUaezwFte4ECtSNu5cEvwFldwun5f0hzOPXT9G++YmdeGLkfmKfeCflm50I90S5hYL/P0HcD5ECxPuJLpxNlowd5o41a6/fqFgmiXWxQL9qHTVQZnRvHc0Y/Fc6uqDd1V4sAwPo7ybNYTLOP2rNGGaa704b0K1gsp7Asjn3t30FGXr32P7UEsJtag239GNaTw8AXHvZlXcSlnVarLc04lSaNVKrbjvLTKTyLu3PNxz7MtptNPceJ1m+ub+Fodgrdavo9bcL8Oshb2ALdFETJUCieWzAk8GYI9UiGMxoaC989/D1oPN3k8cLjJac6irKqAJOHCLlreEN5WMDTu4K0T2zr7pQIyRl69ZPKWPMwwIYhaDBtoKrKqxByPvmyrXbEq7tIWWYwPe37OTgmMXRZ0GaZ1WBszXbyz+/Qo3MQ5t2UZp5H0rcrNMOcBEks6gSFEJ/M54qBWFvF9541zEOyQHdI/uDIlJgHqEzGl13P+vkhCO7tPPu0gX5bl883mUYEo5J9IthUtAqvzw5PZ970eUy2nl5dmydXvL/JQWbpcco46KG49D4f43bB03WTAIEg7SLx5+xWLymUPg6Xo6OlCCNAqbglumTfJTTlM9NmdH4AER/SSIqQGacpv1kAp+rV458AqrJ5tYDTaxGywyKzbwdeB19Bdzx9VH5KEMG1kmU0LlOOvIAa8mJxUTbwUYsrJDrrr3iyDd7mN7wuj8QGdbMSl5FLWwjwp7QBKjGm1riS/6YIDsflJTKWh2Mw31oPzZseVDHt6n7RZ2ar1WVv8Q4UuOk+TAKgVHrVxNxaT0+M/dDLgJpc3FLMq4rbGT6Sc7gXNT0y1tjOHI4WLMH+yYvCEyaFrxIDXZbtfmpzRu2tTLty3Y+FcrqU3BfQIqcr8JtOxdg==';const _IH='9326cdd04e805e8d969c365923ab0454aa1eb6e3095a421f0a957f6798011b31';let _src;

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
