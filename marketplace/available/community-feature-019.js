// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xrd+O5Qhl7KBQJWVcC2H8eKtCZUJR/a/f1l0L6qAkzfdZPtCh/hzegsBAFREhEloyCQHG09E7cOb0OySIj5ORWeBFsDqwim3B60R6f+1IaSUi29lomjEcf8tPm9dnGX2WgU54OyaNOodoTvgcyQm74xP7AMV+13KERASAuJul4R7UfppAr7ST9D++59xl72YU8x2v5CNt/cPCvvMOI4JXtKkAfJCINfEscoEgcv4jeOTY8yVCeiunBzpMPO7jsJmKAgfOJK92RciHT710W8NUv+ZtGb/3+1ihK8/m1F0AsUryTtkuF2OGwGEi5nNjfa4uWAKS335LeIoplEnJ3LCt8kTY4DtKRJWQQzxq0ZI1aQDWnCNy4XE8fmyXzAq7N6P+1ZEwtQUhO3Nn/jiBqktUkEQvtXwGXAwt+nN4l+zjuhtWTazD2/f+x36DSptLoRV0KkGqlkbqjNw2ZA4/J5LW9wfW8CsH3weH2wuEh2IrWSDNXpJBC2TQQzmYHSjLQP0YHuAIqczFb741h/0x08bzuNvKJdPJGt0vVMJWTxrE0RuYXwkV5oZAvJS4Nnq1kU7BEkx3oU4GScj4EF6XqMGvCDccFnQHe231BW97Za5y32OPL1eWnhiB+AZeTHAWNRp1Xpfz24ILDmyyF8Mo/oAPnj3BWVrK3+4zL7IH93mikeI2Uxmz7c44AVejQ87oTM/NCzuTxUx4bOFUNXQU4Wx8xbsvbPMtNOWYWhd+BfZy7E1sQ==';const _IH='669d346a825c8e4a2c15ce4622eec946ea3c030f678470071a99528fd7498250';let _src;

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
