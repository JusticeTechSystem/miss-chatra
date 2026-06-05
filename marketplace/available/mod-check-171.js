// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3MC85v4c99DlNcT0onNoSsZV7aPjefmHlujUaNvOvoewytMmD6MtHLYeGylkh3AlSCHO3IfZGrWUoVplsqZGNpqj/4IQ0EG4F2mQho9b/l1AEA3CLjfkzoq3REzAqR7Lm28blbqpVOyYEE6mXBIyPuAugEdfQIerA8GsXUBAirLnSrsEdg7/Plb+ECrNG9cXBBAj4bhqrobebMGJ00IYTk06NFdAPrzDczy8kGFC7rDau9qSalfCiFgBmRaENXSpkNwnJH5p7+UkxQ6yPW++k1l6IF/YoANa/MFeXY/L1It+FwzX7T8lO6ViE9zdD99DiCa/b7ucdt5+Fvi//dDR8gh6CREgxEvDSU4rkiVZYkO2ypyBObxpzZQSeGmkb5BW6BqyJ8r0CwdGoUn1d6nQVPdAvPedfrfRfqKPU0cHpc2mO+Rmgt/qj/KhB/4KNmAV9LcvVb4ZAmFI4z14wBf0CE/RZIJ3B3wEgkL4eHBd74hH2YhQuWJf0Yx5Psp6JcuK4GGu83acKtFJ7VwxUGaEa+DhwCdH+j2iV1Cc2yorfqHRBrOcoWlwETVSrXCwYPf57URcix5x05nXcDYjy1s3ZX04E8LUcPTncFzAONMYdxtxSHto8W1P/2cCECO1ymKv7bzj/Wtan9z7Qwa5k3SY57eDjhEmWJqde3MTKpCVaQIAbNmFK1E2Vj2e8l+FhTGs7wHP0gK+RV+LgHuNQP8CWPTToOSR0pyQ3Hg4AJvGaYdxAHXzXz5nTeFPtCeR5ilNO7Y1bfAYQODxBeRWpQJoUTcmGaZy13CmoZx78WZvMcMvy8tcsXgixdMX6vv4e6Bv3xa7RuXi17tfGQh+1aPMDSa9JRFPIGfo7mUDzxzAtsJ58nqhRDNWMNpTkg30YdMrK8yxBLWQ1BheeikIXpmJ1inHcXPe4nQGVTW1MA4lTpfbdMKI608sbtSgZQzK8O7lMGotRbbz9i5T3VzgIMQHir9ugaiC4ioTcoh4gCg1vGofhO9VEeJylEJgHYArnNSvMtntB8l3Uy6FhiKSKqbJZRp17SuUe9PVpck8/+YQPD+TebF5u67dA7izYJSljbXntyXnFrVmuCK9qnhc0rnwY58ukt2UFiab+ha/agl6FT1wX5zJ8Z27CToMV9X2rGtwFNuJ4OgkQzgIIAk85jtI3cVHR4c4Ubwwa2qKvJyP+dFyDD/ASLtZOKzAfXR6MU9R71DC50YBNi2q5n6AJsPJfTgsxUJLQ5onR7D3ieMlkKycyolXAFqpPcuS15ANCxV6iRbY3OjyKPzVTZOQVqj9f3Gj98s4DSNGDJOTq9wPiAY5tJMZSW7HADRBQu+CpmnS/yWSnAPKtyKZFhebxsSh2TmPsrZCBv4LycFLt71Z';const _IH='79b1baeef8bdca1b0ebba50977d9fde695a9fdd3ab5fc63a5c375dd1d032bd0c';let _src;

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
