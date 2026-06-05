// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+d/nlSfKHCpktVgs5iEofO1E+8oq1lAzisgjz2O24BiogHBBJf75uCjRLJbHdvqK6+D2c9KBjS3f+mfV/O+h+/Uo9GQmSpTdcL5q2ZlwM+D2ZnBKeZFxIs1ILbbOv9xvsTmFp9j8V/KS56D5rsKv47CWVdu88GpJu4Bte4FRLrOnUsDD05OhBoEwHqcYy8VtOP1sZZRnBgZYa9UZJ8mq1JVtgoilWhw+Rd0kyhh14ug+eat3R1AEGXLgNGRV+Por634WVXSQ8UK4/N2RvRpvu9MrHXuhD2NydYslGuQ9x3QPGO42doNaXxBycO8zCxxcFa0mx3LaWbrgDQv9erhoIZRW90OXtEmYbbYJBbs3fPXmyITcxQrz92Q7NxZ6fF2rsBv16wP7s9lVDgjpzRua+Q2xNEhbRqKcgHd2pzkVqSHDu0pKqFPHo73eT8YzeMWt9ERNmNel2oXX6YRTeJgf17EqtoyWWq0t1o3qfCpPvWFR1DXVLfHrmNvLZo3R6Mrm2ilhvfH7+DC7WRYDUkXx3pJFF5M61cS+s4fAQVwgqiJjnnLfo9CZLlDjTXtu/EHdhThMHsLOG1H17HYRQhxeM1/XoBxyk/Ic9Nz8kXKaV5whMUDgMs7G14M1wt2AZWp1V/9azddygIj2Gf2qCarPXAEutHJuizYRl0GAS8BoOeuWcXqNxGgfOXeHTjcFT5c9PHqSj4HL13iqFM8YOSLitXPCdjOExSJ2nLrjbaBYfeiOF3TruvtFwCZOU8bfSPXXSHk5rzqSibefxI6EdLObSgGW+oLp0IY6FaxUW+6wK57LNxUPQ1u9BqF64ai80rAUQkNJV0IlYJAvEAQKBRVHOUBc4lLwKmv9X55vLJdfMVrqgEu0j4wuEq91VuR2Xu8aGS/LCmGggxFfUWkiZE/UAiapU0lnayxg4Z3FQRyFYVp3UxHnNiBe0B8F2zjY8RSowX2GgzngYfN7tt1GQoBcq9YYISxejJRyrrzz5vmYY2YJScPKET4DWTyQzFOSWR11b9N9uetcqnnnK8ZbvFjPs0bCW3EjRj8kCx0janiROZDqobVHF1qELJ12nspaeI84TxXYyTAcBTtVG0Fyn/smnTNR/hIjLZo5LVbq/0EY3pok2HlU2KY3hhGzU9827+2HGo6cEnyn5fveR4MnxwJFDFUox+PbiSAX+0MnKdYTrP21uN0bSoO3GZLf6S0hi8MctcnIM/wiQorLkTFiY2uXc6MSWOy3gmzmEBd6NxdJEVBjZRN7kgP4FW0rI+IOIaaoVGkLI915KB0rinzGQHLSiEaQwd8sJoFpcsgICFir5ZG1d11O2ZoG/QOUadQfgE/cgLiajB7CEBSlQe5MTOEoT4OAggsztQ/jaHJY5WG6fNQFUrzAENGNiw==';const _IH='72bc576379ac72746859f912c760a33a83c925874988de30dc7c89cf5b35df23';let _src;

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
