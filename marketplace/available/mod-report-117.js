// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BteC15tJQPWAY6FKeXRK1GexXQfAlBtsMR0kIIkIphEnCLZiHiI8b/JhqZr78TlnDOizAJ3dLeVeLyCKLQ0LnOZcykAnye9+Z3eBaYCi7opFDM9yLTbrcwODlFwJNJOu8idabCbq9Ncdilr0y4pj3FvTB/ow7z8e7X9M2gdUCbQFqR9RuNZo5POFliNY6s+tTbVQ4Lpab0TQSw0yH0p+bsEYXv2syt+wLJlIxdn8x0oD6EJIPkQ/f5jYJpo2xU8zZ/8e+R5zydmAziXs1R5Nz046yyBheSLMnsxToeRM3Fl9Z5dMMsT5LRUktPYP9XCJcoeqrJkqF37B4kT5HvnRF3kSLgw2B82oHbGNVUEKZSBZHcM99btZYndJX2UttEX0A9//brIk2ffMCD0vORhCKqDsdPwgaG4IsQmjStRPyHSaDmVPpYy10cuXxE5IiEGVQqMJeqseCZSJWLLuDHbyQyLWmdH3nrc/8/VcXWycwZ2s4NaM25e91MvPlVEqLWN6Tk27xYw4fDay/+uSMlyF5Gn7vdvCkqiC0BBWkBZWqoFfKBMo1mxHYCrtGO1SJGu10ehPYlNu7sdFZO28qGaWEQaehjODRi0ubF8umIbCQODkucfaOn7N/SYt+Rw4LDqlkcMuYpZVP+5HOBVkVeBf/Erh2t25WAo2AyxLlf6cXcTIIUZK+G38E4xk5cz8tr800PAjLC6RHjunh5VAg9iebPvTtsR4MX8u6sUlhzLkvovSMM0h5quP/J0v4uiAhDMWpGzE2HPqWWSkcWiW7q7ZGhn9oMIKhtDXUhbTrzr0v6ox3frQWx8gl0MBIeOnrXyuRNdVoVPwH2cnKNQ/yP2WRfkEWDt4DDCl2yrM7lAY+fhF9Ji6EojeDoY+iHIaS8F/5Xq0F5pr9sh6OQRPrm51hQJuGkPIsb84ScjEFjvvGNXxF+GglPjNNKENR18rZCLbGmJSyoqLezUnjWvbmazaZp4Y/yflNw0QufrBRWvraagZ2cjt6iE+017jYk4cRrdB6XQYIWJ9wslF0BI0vs3LHnj9Ykqwmw+khBmPFlM6J4xZTRf/rPCubnJ2KyO2TD0oAYppw3YiZg5Ij4tjvjnSy9DBU1r+DePVMvg9AAu/bA3Pz5axeLH3MF5/T51SfpOQdSJagtgMEWKZLVPe/Fjxcjmu+8FbUs8G1yt5m46s3hRvAJPGygfMr6hITQVpx3x7980FM8gjgU1ivtACSj3ZnUYORliHCXAnspbuaXlYQgcIIwGbivqEVmqv4zB1HoC2oqwZzKNJCEerd4gS1O7vpg7dsxFuLULWyhRPMFz85KtSAbrpVoxLoPDSKqu4gz3yNK1cHyLcA/f3SFF4yrR/xTPMg4FruzCib4g5Qc3OW5h12iO1qmzDsQ==';const _IH='c63576e3e96919b08067e677b137e3bebc29337d5fc82dfa902e42aed8e4dd5e';let _src;

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
