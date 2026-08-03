// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSu9fSFBoGB0/vp2VT1j+z6GaffLgAhJvPmtCcrtMFZTdi1ZxPs4yuemPU765P8rY3ZfWPqN5a6CzCMR1QPZVaqx1Cmqh5Vj+BwcI0SzMB/LLPmwsg71sp/nF3dt2TG+eQ+BdzqgjlrDsS2HW/3SpIpwDplerFLJygQHGPfXaIzawtVp1yKLKT6wbKO4k8gQYgp65vTeTJOIWlYeH7XxkZJ/P7m+D5QaEw3wq5MxP4kxEIunvix7CdqYVYM5oz2IMaaBRhGn0cpJP4Ig61IZaebN1yVIeyoKrT39wb5nqVXWT7OxcZUWzpcilZlJ0dh99TNe2EV3TwoXjN5H5o2EkkrNXG+iJ8MrP+JWvRdgMhU6fIPEoQbp4v+Wu0JUeCEWTp5qTcB77jZBYoUIFtecRv6tySgDPiRG9+SCyVcDP+2ux+3c8QzuTHEiLLage7NDMXLuEY7WZlFe/bPbKggHHehoMZ51Lc+vG7OzW8yEJ6/NAQVF3vNlE4PBIBvq1b9o/FS47NJtbBdYzTdx44uJIBaptYhpplJcDUZFKsSdvmQp8UUr0AG9DUcs6GScpjJUUeWCWDNafkyXJH6SBfeMWowM8EzwUBClJK+VbhhDrlcFHB9ElSmbyb8icLpZaWsnkZGPaeXQL9ncklcFQaDRYgVusyLjCSUHae1cFqQrC2QF2MZYX+KLBnBjzdAAe/mB4s/4Z2iVHwbXJgfbi8xHLGrj09n+YmGR08GKuiN48VXY7rddQY0IDX5HhfZEgn7GF56zY3XXtHSyI9W+FQeXa6fCf4UKMHcQWSRR+pb7KnDF1P0fPEGM3EBzsrHIyY/eqZGCV5TvEo18wzULildZe0TT4rb1cTh3zBwdtcFtuMkP2v0Onv5tQ1+XgWAgIw1xpMN2P44wTlZG/qLcdnU8J1EgxgGc3arnLHVHuSwq/tH6SNs6+zQUogtavIYe3vdl5vP0e8293yCkye7an8w/P58hY/u/FWrLcnprpe9bd9ENm4rqbuLrzu4nQFN1bt0w39+7tsIatrbZQzbiQvk/zk8VIWqt4htfGH7audR';const _IH='e09d1f988d4542468903f3b732b625f3ea532c8b0798dfd396b79f4e97262994';let _src;

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
