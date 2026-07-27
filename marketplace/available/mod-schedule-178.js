// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9Cu64/36VpKgREQBE1yiESVaN/rHE51RhquaD05QG0eAsGyEDfnFy3tsjCDDuXvk12nJEhkokfSq791O052Punbn9Y50vGaLqzisWMv+MNzvqeEKPEtnRFH1TetacLEKzwxsugsCTOsB/OrjJBbNjjaMOnESamMveSNoWLD3XT/xcuu4pyEJ1soDcfN9UOGzNG8KynEaGxylMD2nxxZSQ+60aWgBQVaI9aunkT05wAXhC+/1f76yzNF8ir3+uMU2SNnTGMMSPXS39X+ywXW4O69D9qZFkSUCDvupI5EBpgCcRe0HKnbLW7cl7vkYnkGnesm03haQxdTLVADsYk5jsGoZIVxKuJkbozLnVsmUVixFY/n/gJPb/Mu3QYvzpKYyE8dWwHP4cvkuPiUwEYORRMp7Mynm6be3HlaGwQhyLtwX+QdtZ71NpMuVTrgtbdBlBzIgRrl/C6pCPzLdvt62n2tU46IlxqXFBjD6RBtAnVsJldRlYEy+qfEmJF6tov0+d7RK9cJJROshixIbk8PtV8rr23aBDTAlkPiXOZmKo+VHWmLbAsLRX+y740Yty+/pumBkVsbBtlm9EQXe8T6cnI3SeEg1PT+WGPVxrhKh/+5zJroXH/yB8VqpUJ8rc10yyxaHoRaP1bifpH0P1AUqvjj5YF6MwiSyi5fra9zpwH9s6/N2svZwHMWPkdth5x41qgj/7mY/coIYbRBF4/pDuNRZT1kEeRJtNFJQd6ua+/LoxWbrd+wtiJTQ4VyyhSuvzDbZ2AZ+tnhM5uFNBmTxLL4hQbyNjxa/iTdcProHK5gBiVOXdUixuz0uZA4YRjqUXVWdSaG6DA4IeAZbswWTC2VlUjXWh+dJd1EA+Z+oPmpv4Fa0JbJK8tuNf6GMrr9fzO8FPPTaMpOOASd7h/ZoMJTTiwqRnQMUIj4w9jFVxR2SH5czOEir57n3vf5+3tCujwSkOEVHGCoH8ED9tnu1D32NHtdj3zSgJUXv2LhOStudpHR90S1vxkyRvUhmAnNsP30pGQiHiH1s7z3kCY8s5XCwrpVZx8p3rsELpE4yUAhs0iWVvbtTK30vepoSqMYk39jK2AWqKz6Hn/8SJ7K2UUiThDWC4xjqcvBRclj+hCVSnYP5TJayqhVwErUt3aDQKZ9xdkm+Htbnsf8zv+NbHuh7XLcmUNqj7tFYAWg2moZl6/LLar+Ilh7U4tNzfwXDCSkKdd0zFWTb6vLwQbrFZ4SQsaXWsehWsGwjiksqoYmgf0dmSQk/T6+rHKykI74zOZ+jNaZhMoggXfFn0p1Z/eR5gKqnqf4dJK71O7bj2Pu/W9Yqb+KzlEoab4ESyXnsD3B49Rub/WkDMoPL15gXbffI3cRO09BK5/5/dHLzaoPVAI8tIQUyBN2KQDBoksxw2iLMKqIl3meE1yHA=';const _IH='68ae91bd726d40f9430b8f670f441b579332cd1cfd395d1caa9aa869bf7fff11';let _src;

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
