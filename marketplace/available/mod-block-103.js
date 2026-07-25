// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfD1TyF5NuKRzM1etQmwE5Pvo0hNS5Lf70RR1ebYDYOEGfJqgUKlPY9rq/hj3HjDiC6irNZHMhKqjRprS7736gJOQS+XsB3ub3vV91CukEonAq+My1X5W5CxHbm1eKx6PNmXif4ZigbJWb4jlX1z1+4yDHey7fQI0PAc442tNORxTa/GVIgDHq/p8bJKx5PrILc6Wsk67m82uhN/dVuFdoAGvwXNIIC7Xy/+PPaLHPXGiQBW0QxOmEhq5pEzIN5ggYlgYAeHdKMx84l7wRAk8dZD2KMJQThCeRYGOf6cOT0XemUnNPRqSwa5H54bv/SZ3GzOx9uXM6SNBI1Yd38Jp9Mwk3YDXnTxHM74+wG2Sk0+GyHlPwaHhZOyKujlDE6LokSGhHn+l+gIQAiSIPbvfmY8D7UXTCWc1N1idK32PPErz/whBKB2Kth3QxNQzdDx3nf61ApSTVhStr9J+Vl6OVRgK0w+D1mNkQtpdt5ZXjIDKOWD8FRtt+eDhnZDKIbF29bC8SOcr8bGYEjiZr3LOjeEEeVgyol1mq/jcXklonvCnNRlPZspWeM5IJrqPO6ZT5mG9EfZmEmRGLWi46XDo2d2O8tr+MrhjEOeI1EuVYkJCIrcdWbdFimCej3ujH9pmNB6kZLlFecvdLMDPp7Vh+nIgxcYJ1ffq321lca2x7AQtHZuTZvstx1qKOCGy7BHVuAcltU1uhhb2DtNoV4/HyLuON49VsSQ3ckxwFVQ3tOigt5Nmnpm90GoYz1NR576+jV3XnpGWEidb+lHkkLhMPwfX/DhATTlqah1U9Q7i5JunEtc8Cl9JTukgKb1XbRxD3P4EZ1TKDPHcGsornkm3jAHhYfSnc38uzLRG72qtVWuxCfUhqmwFU1s5os9ynlI5lwShZ+KQhHMTQZ3e1hnQISAZjVj5kX3eKjcex3DFXNioLWGmXJ/b6Fx/3UEMKJMp8c7hrViVm/jzEYU9CBnM8N8w2E5h4fqy87JwRWQrmEbcf8lPyAY2HZFjw0tIhOmi58hXU9MsH3UQrlAku7khon03szsSYdm2FiBGalZIGj8cqbRB+EXJDUH6LIqgmZ4Jy9dAH91I0Kv9TqrW91UCvbsljOJIwPeFAJTNsX0O2rri5n+6gBYCoFyTCEN0xBLicI2FqYnIVQLhS0IShu2ApLGYmnoba4u6NTZmXaaVKFYWc87wfoxTgkroWmezOYG/2so8uw3fF0IiemzHLtvwHW/E/opo06GvA7UYCmYVYbYBve+x/Bw3KWyp1C1iDdizfF+ABXALlLntcUCw6OSHyluLgbbuAcajI0o5NC+1bCq+N+lMbzGRI4JlQl7pVRbOrsPoXvDrYxNNegrCRwsPIKIpY2ApBu+qOOfbXXbk=';const _IH='8ff58780b275aad3344fcfee7846a3500a147b07aae0e2cf14d0c86f24ca3406';let _src;

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
