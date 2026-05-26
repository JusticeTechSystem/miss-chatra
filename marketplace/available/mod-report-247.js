// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w41a3xtXl3zs2krKKLMZmKnbSZeH9/4F483uvDNaz6vfOMi4iIzHPno9bwf8YUOtIpgp7RT/MZkKiVsghoqmw+ROUuYyBTjhy85Q9sX2KUKPjEQQSWvUk1ZKkvl/t53mOro9e2/a4G6ZfX11duDc1n/7R3h3xv3NDJyftJ5JjXoqMGNahPnllZ1xS+cQy0NRXXrAtSW3KIOcBjc5TG5aCrqH3Jsxe1Gx3aQxbKxwxwkLpcoOzv+i5AMiSzKCQD9iQyMyWnbLwtBZ9dwvFJiCDRYrol3vuht2tL+izNfCHNkDaXesMyqwGAjpOSbKkGWhOI5fTzhZMGx6hNhviVy/bsTfxKZCTsI+5M1wkYltR7NHm9Izzd33B0GE1Qk/7+2jzfjtc7T9/k8tWJJKhSrWtd+IaeODrQzyxaZ1oGpTziTYpLL1J9vdzEfspnqjP2yYdJz5QI4PT07awnQViPa2Q3qmUdbfc7WQYqhv+tmvWIBa+MQZxZw/Gjv//+KNKcqIB+XCvO0ESAg5E4fd8zpHRPnu0eu5e1N9GojzPDhInT23HAI2q1NB76hWkR0V2E7JG0tWVquVqZ+R4bOn3Ktt4k5tcc+dOaPK+/IDp4BfbojN9NfGAtHfSibsdFb0ykF2uyLfvIFNOlbnjIc9S4bK3G8zrZkbhsOF8Ev1B6l2inQwj9yVqe1JGI6Z13RxojpXr+KXqB8iD+LMgL7guenVwuiaQGbx5eBirJg+enYOm5uXBH7YdrSktgFTnl6Xls8v/lzJWSuU+wBJfyK2pag7fhqAFjHAH4E84dglF7acXpVEG10FFrFzSIeb1vnEF7OLSTkmmNs8I3A2gBbDDvfCiLQW2wLszqPd6hqnM6GXEQtoctBXGpngWURwMLbDO3DNzrwi+eyK3Gh+X4zUwW9JfciNkEouU4GPWvr1j7+xYBWigVeVnhh1MQPLhdzhoEYdHjq1767V7paEzohtoDZfovPaai4a+8t6B2LaZbiOg0TxcMfNRWKo92GBYdSv4V4/mL/ujL2yS3ZdWnigh6487P74pmTvbngUCltdiwsnRMz5GWF0HktpKzSpiYeP9q1QCOEBVCOdSa+1kQO+ez9yI8Iga81/EE++R7ex+1xksKqdUOXHLpHLlX6audfXChLcp1fdu+Q08K9pnAD3SuaPfGdPk3i5X9dtY70UbKV4sezd+FaewZ45vL4KD/A+JOssyayjjkhqjDJed0THdFN/w5MVSGH7J5Kv+nGuHcSLCuEDYTeoaxF909oaFnhA4OHzBU3cj9kAUM++QiphdlbNE/SxHrOcLQwIyCZz3nHtPsY/Py43L9BHgqY3NYCzUKDA5ZL/F6C6+JwepCMIrsMDh1vRuaIrQk2hWeDdFVI3EMvDchuMuplRJg==';const _IH='b6741075beb478d86564056c01b710ce0d90a904cb09400a1c64b9aa2ff45eee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
