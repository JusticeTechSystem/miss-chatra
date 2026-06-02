// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='byr9nwJxMhqgNJwbylUwIqOMJwZe6rCI1Jt7WyT6+C8qRVWRj6HNPynEUSLjWfTRUQnQ8ww+/8uUhGiVsxHW0su3sV2olK2OdcAYg/5E5XKmrmBFhckX8fe7/+Zia+UP6G7QtbOY1VqHnUZYiDHhG6ILZJqAwNLnDaTgoFgR71Pz0dsA/fo6pxYy/Hx1iXeoyd34YIzKv3AY10+XgInI5KwqpwPLX7baxyIO+Ge1Ls0Juqxh09fqJ3C9bJ10iilo5M4zrAhY3qIBf+4I+MIK7A6PqW5g7ZvFLBvqGvREKf69XDLDjuk4WvXMayhldHErFJd6MlixM3HvWii4PFS+7yTMNumQShuryx3ELboL/L48I35ScIZlz0Rbdgu+0K8ONMPEqJH1FLlZBdLz3C2wrlLYkN2tNhXu6vtvPGt5EU+wpm/FR+fCFoWj0my8vjKQ5cQHUl3fXkinn1TSBKa8KGnqykCp/s234TZyfcyJWUpuyIJdAliqsXISuUsqHZ/Q8/DTKwFTX6I+//z5Rd/LmWv5FuSLMu6K+cg3+lSY1oPGZ++e89gE3oCMdbpOEEWERFxKDWljDyvl5WuvryoclZONwePPUcCw6qvEDwOXYWPcpOROsAEkyM2XKOmkQabWScROOLetiEeWhIwyeuA4ySX+ZwquF0YY++TlgFBo4SXuWb6ViK4y4MsHLRECxGtu6V82ibOv5VMug+2apBkXCcVDt85Kgh/ci1I91IqOXlDaZJBd4VlGg8t0JQ4RVw6jO+6tsUI8boNz1eU3yyV9kCoYP3QAFlsYgLegieShBiAMUWfDx34+PUocMYEnwVeUusSpBT8mpW6Ou/KxzTYxM20/lRZTI7udDPdySrtlncWm3wVdmm6LilI8JRxJ/UHOR5DpdCPDxMaO2GdZiIowpuXSaLleCCPe+nam1Ns3FesOWjs1sppFyFvrmnPwV8W+wOow6dkF9R/gKxwGWB6P7DdH1iIOd1prMVZS6e0+z2Ky8cuWgAanW/3339gbLokmYtQlnGLXTFyZvpJSNy0LAM8Inqc1FbvilsrWQLvGh3FfygZU5lDisfowhVoj5GIcsArfjSdEy4t4iMOcUsWw2AZ6z5Fiw7+o55aoo+FEHt7DcpBec8ecDblaXs8+FvKJYdn4cI07K5R1OOgXPSS2hgPiDJDUDHZ1M+YoSVcChPVCM8xbLfrahzVclwy3TcpGeIil+M/4xTLvYurl0/cFaqhKFRCoCyuOYM0MW4h63t3SAvQKpZ/i7JmdWRzNRzf8BwA4Y9XDdT0zJdQ8chQpiX61dId+frcsERdw/2dzlBpaFSR5v41vfYj4m6w7kZEXyLKbQbUybn3NRfQ43hqo8r9WKPyJd303iVrzr21P';const _IH='aca1cebe751820950688bb65515e1020122cdce245f0553766019952f8914d00';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
