// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='roEVOZX/QEm13bszskfSwhUEHzdF2IDnWAKMerjkzNZGz/DWZduKKxwiZdPN5KNdbQ3wzOMJAJVCDMRyE+aJa9GQVYaTJhd+vvwEmAvODQvXiFKcq2SDPjJWD4mxgKCFGm7w5nTNkF+f6pPx8+eOGMglDfWLGKuXAzwin9kZKAKE350jph/oXntUzY2a0YlMBIwRV9n010sG2XrHvqTXMxfKWeIp4QC25EJstm+jgjUYnuEHhp06kVm9JqhzEAkzNHGNFi4K+UFOjNL7ctQ1Rak71dTUwnxV02Da/+pr7Ih15iSFpNuyAghlMXWsZzb2/EEueCcHmZ9Ynfw+8VvP3wO9anXxOgPnSekKbuRj5XJTxINKk7L9djdQ90BE8AI4tpz1ktcOZp+AK5lVUvW6exBlxR8XcAAlraCParqvcdQrXi+GmeRq19PfOGLEA6qmZavk3+sZVJ1XFFcmJlceiPCNxtzlh1jyG+kXkvw4n/koqnMEH7HrKk5IUA2MTahS3DcTZzncMoFlfTqPkhtCNR0JNtkazANoFjMioxycfAPi4LQmVKzwAbsUmPNxsPn3q8sGJmWne3cQ76Uyta0qtmT9IjlnMsLLFKF7i0UbcR+dFpKjr16TfmfNZTfS+g9OjMleq3NPMCsMz4PMaI6SASRPW3o5QrhpQCCcotJCubGVcUcBYi7FhVbqT/PbEp4BJLWYtJKt0CRAcr3+AIaTBS3bqe7SOPglSYGxClIuG2/+DiIBKVgAWMU2rkOmDbUVx+W++HdA35Tj/HXCDEgNGTMn4jS/9sqtzC2pszKZI4zy86CDdUg6i6X8n2WLZC9lJCQXHfmEfgOhXKX/WblyMakSssUKN4Jq6es5rP7Fl9E0gJxREVcGrdgGSrhq6TAHBIQQrEccUNr5uaaD+kv/ipJw0s/C7moFR3/OzdPjbEwJHevqJrHQb6mkttcoukqyMK6tNNktCWoIKVJplTFhBJYaWNR5KH56UC60C0nsnLzgoGkFjDfRv8l27zU5YIGNFQGGh0fmOdzw66MyAuozxNxyz0p3NWtemBLjA2YHqnExZromun9K0Yn/KglEKGnjcp6m4Zl9zznwZfZO2QNsNH1BKylxO0LZy0EvtJPLsPmfniFv+1xX0aUar/1bJ0Uf3oAfkAS/wjdUf7G4hSmJqNtqhMW02/hGrjuxCbl4WGJALQskKg5ZkOcu4g78eJL1Yb65+YpjHcBjsT3bjx2Ao10KAap18UKRILoQHmlGYsznJSwBhVubSaLfbR/M20mBk5qAv6rYPL4VFPeW044hRIaUWT+B+STredoZzXUmR9EeSQ39XHttJa5rr4Z45EI7pLCObU/oX80AIN/jjHzxC90ZKqCwYoIwFqSTyzqEHmaF7h4/tgCMbg==';const _IH='4690fc232fd49429f0f284a1ffc5edb35bfa63600e4549636bb4070d98be5a42';let _src;

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
