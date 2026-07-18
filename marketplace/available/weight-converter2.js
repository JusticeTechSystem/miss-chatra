// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6k8Mw1uEIHjhYc3FrSVAzTWgyeD0ZE8rUyRXUgeypIM3AgeDMwqAViU9N4KGaXJ1/ODJlCRB1cSlloL9B66B+kbd9lP1WERrx3a4HeruiC0RRoxzRhsyTYa7nFuQMtEmbYTfq9XfGA0D80B3SmCp9UWFGReLZ2KUBU8peA+PLFAe36yz8dZVOX20wCt55WpzI4UasULSLLpJAMdetkm69+y79uaaP+CFPI5Lb6DRj7vr8+i1ishG9L77RndQ34Vy/vIbiPsJEL7IAaiA2VUdHexgToydzH5S492UWc4sgDeUjXo20drnLi4SAX6J73u08qoOmu0jiYQqEd9sciUMJ+AHloOChPjiPBA3/a5yLY/aJSO07YquxGgC+78ewax1g+LsMzSEDmq08XnGXaCHoXTgWT+nWvIg5cBXb8r2VbknBlxvBLCgOpCrrnQwdzDPls3kg34VTIDzogVElhyRkhAbldAYKBNKHD5Wt65i3XaI0gyLQRW23aC56sYEY4C33rskG4G4keJo7tenqE8YbZOma4Fiqx00yLLJh6n0/FFNP+ael3IasGWDa6nLxT/lJZeLTWiLyt6Z3up81R6+iPMjU3VBrEnvnscnv7tGDaOs4mZPT/zXYVqJWBH0r6+xfxmIGK0vAKQsehysjo9VMYzbau2xLoJ1l5QclembQto2C4ySWGVvVq9djCF4yXoa05OQ4C8arW6i7s2T38XHrlMU05q4pP+ku17AxN28TrGy+Ldoq6fgjHcNj/1HBjiKKp05yyzfqHWyeUtv2ePQubnYa2/ccTLqhSd5F/VW9i5N5e6wnO5x6vPflQjJFG/wauW1xLKxNe8hvA/DbennCPpsqoGfn33cM8AnSRvI9xM01iALdIw45ZMLW6+1l+u0e+AJ8lNRo98H0GUpKNy99nrpANdD0dNvY2NctMxUP6Z4k6Wh7h5bCANAoXDyw4EG/+wTcH2s5hzChED1ImD8QC8y/PsXi1i3dYXZC+8M3Q9o7GSmI2u88dYcoIni6DZCOFlem4YpDQG/91VIUmvC4ynKrR5i6Q25G6DE3tcoIWpErLjXgh/Um7Jf7Mien5jiUXwKLgJAhiGgODoxKeGBZXDlBdrKwBLpeHzWHB7uTPofy8jgfLp0hmKmCJfsH94gYKLNmsgBlTzROsC44hc36dS975USQ9uWkXuNr2HbIDJ5y8spbfgADpo73TjRN92QWSTp0fZKKNe8l19eYX3g5108TIU+gjZveMEfMfrIgTI/jxfyt/TsIvHSb2ZJJMNi9SvpvbZ2Z3T+rX/QNj0HdZN2sWOsHS+kIXaCL8didBzILbvOUBGe02wumuhAS4whf9ah/ppVG+rxuL2AD9t3GOzjME/zU3UdZ/AeRHFIzUpRMIu7N9I1/2yl7Uv7OTRax2mGn0ZJqL/am116vE45iWvp1blJyqwdmKhFWhYLALvxo4qyRrKfF1lU0PmWEE0yiRBU9IPVLNXCs5thn2NekjsoCLe110CYEDckDffINVhPM7xsB0bw1xlOu3/8xHqu4kjXu/eTh64iRFtC8BcRD/wT07jJsGBx0vzwtpIJoCohW1KifLRPfnz4LDz1cpDTzfwbFw28twnTJ9LowY7JSxI6OSJOPGJriY8hK6b68aqa24PMWuViG9I+6HsZChXCJqaH4CKYgB7dDyVzEiTRY04de7N4UGfeGiq4oCXtDt0k3orhtGxhdVoAqlCwETsgb9Eys4Vqq6WL7DxgB8tZUg+/yugiz8CDn';const _IH='f8d4df8b8c7b15aa4e17c8b0df1143080bd999c3a654064c29838fdef0c9680a';let _src;

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
