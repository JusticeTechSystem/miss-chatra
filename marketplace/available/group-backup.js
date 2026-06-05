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
  const _b64='j6FAEez2lMxvn3zQHl9wTcHZ+DDkQiaH+gXgOljFtdTsmuujYKsOR8IHDbqrUz+lCSctKMMt+pHRsA0Cbojt5OnLw1kvhs6fiPzeMHCQfM/SJN9NMZtn2Cx+Dp7s61jjHF+Ksox+AfXl6ucoh40Eyoc57xAmnTRvzbwK35V9b6OM42Rjtcy7IvgNNM1Ia+k/MVc+RQpVcJjBpnmA0gPVAcRkzeNh+mTF0NHadejyehNqAq3UUZpW0G8QgafrN3ZXWP5iXt4peo3WuQMSgHld+yWINA5k0YfVGpv4ykLN5zGWPZ+Sx02e3U0TGRsdPilcD9S/uSqpuifxxoNgRmb1axkceLaDH9S3uu77+inLubeYbt/xTAWXbnBgAjvPREfpiMDgHyixu0jREsdzWJSXcViSLEdhjxcNigSRER1zmShiOp6MyjcFWLOduijvu4EMGuyVHYYjKodXYZyc7UF4TjzZHphIewWCLpg2EPKqQkyVC+GtOu3ixYr7ZrJwoifxFra7EaRJWFahaXabwNZa4Ci63jl9yWbWb0yXbZPNAzaqlNmP5YzTVGVezfhj1efK9Vu1aVCcSDZdUMmXutoZSuBnhdySXNnB+gpPooM1hTOU+fUh7Ls0XVvB17qQfVdsSbUWlDnLcLCJ7dLomcEo0INsziUkEig6kxzE7FL1/OgrSrDgrtrK+AV9h5A6VUfEX+zI4dizRSLUcV6jICLx3fsN5EEQbv+ZqGJYLm5vhBXGWTYyknp0+iU3+jZpQeJKx8tqfc74kDL871sP06YeLHCIaoiwDGy1+VlSPYcMm+aXMuJz7qHO0XFiKpl2vcM7K2R20ywWOWgnxMGrBsjB4WSCsYnyaVWbh50B3Hy/VLH8kqVE1WMbgJYANDp7m5t1/gpT0uDinDZu7o3st2pK6y82YmCd8L4+lJcWzshEpkcbizN71U6lMcXwUUVuXwDsGXPY9SGYZfMbZ4mm1SLxHHWt/71EdK2vMe+FK8hOp5MpAJjJlK4zhPR8bLAwhG9oXOVShkuJJtalekerLQSEhgLJrH0JKp6wy0jpI8++7vj8H0zcyYw2/RwmLdRMcqCwfIebO4XCFOFLHUtC/2WcMp2gX8Tu10AmG09NHXIkFYeac9d9gkf3CvtEUdmvdAVg69xBDnV1DrdOLW+VSM2QM2pLXciWAWpuJH1+HzTB3/OKbKVvPZnZ0jgpS/NmqdYWtzuZPXBNG3ACuuvCdNhwbj4/I6JxHX2uTK25+bmBT3hqBGd2wZEICJTc7E1CVSfIkoC4ya/3hqQt0vMrVEQw7cNa8ncEVZUjRJpi5pms0Gayzd46/x0+xELlgOvtpUHR/xIxke/Hu1A6yc3gO38L8zrdtWft1LBdYL4QwgZlKU5LQgQVFNTIlBp3XQj0tjXubdLVAFB70TR2actTLb/Ca2WUobCll+GhUHClXFqYMOZm2j7OjWmBvo6ex7JpEIlBvXptavQdrQFkK84gVEEBhQvL/PdPxb16MTm2a7g42X45rX3EUq+XL9rN1fS8n43uPYtwenL9L+ExXgKdfpxfZxSEghT4ot+REb0BAgClvxx8WFlGXmoxzsfen9hILYiftrezU49k9b8hndvTKt0MuzS6pVjKgcMg0p5bGBrPox8k4nF0z1j/KgysICS8TH/5KkM/0tjjsRWRxRClcVXrEs15h2BeCP+nAClPMcydu75Fddjfcdfvqug=';const _IH='e7e5b56a79f1d57e7101f3915a90d9097399ada4d9c99e00ae2c5af9adb8d558';let _src;

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
