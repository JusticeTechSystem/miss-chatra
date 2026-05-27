// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rbdgqH+d309nogWUTAyg9fT24T7K9g71VIJaiQAHzHuc8pHil46awqR3FXQod0kXlCwvulD9nfmBv+IBioxRlj1MNzEdW8VaFX1vSUa4JQ4ol8BpYtrZkPLML6zdErnU1v0CDhKrMjjoMXYVcp47G8Fx9w8FcmDqpjmcrVY8gj1IGd2wwn2LmZd9kUozMSkVgZeMBn4iSMsviG61kJ5gQtt+xbStKzFr2/OZtIS6L1M/sZHBsayU/cR3h5CDZya75HQTzDLwqVKJL0eW4P7k4IywcFD58dTMI3OytfmpI2eQ3RC0p+zRg+kFJVIox+DI6+4Ihv0wW3TApHZwAGxhqlecCo0nzNFA3ygNB2qmasAbzf3Dnonh7lxHn2YnKxudbQIFVfymCXYgAJsQ8IA2jMd2vgQ0QHwvll3Yv9TCfzKIeUofhbcK/ZlTe0xzXXZHodoEwWYEBZWR5LLvtX2KKyl5DcworDoo8ivlZmyhzZ+a2VTsyt7Y1fd6HoXQBLvt/r4rORwXBaQBUc2MY4WYr996fCouRyHYAMSOlYYiKU3k+osWLCr2gs/GLWPo76tChV93aG+AgmUL5po7LWWJzAg/dLx3rrhWhelqqOk1fpG8OPMqQofwcP6UFRhHoftafEPDOWItbZfurEzUMwmpxvfYuCHKwXBMRtEdx0Ide5YHln9qDBXQtspW7kX4mZaWbBx2PsDTkXqGJ/jkckz51CdgxlJrTUbjW+rForFVBZhOoJVC6ILpOcBMFMnT09flEO71F1jPPZkgOo1pWZUhGY2Ao0+iXkCGA7EYcJx+d/BLnkgZLX+4iF3RJtWFIstN8BEIXfSoRzSgUT0OYZSx1zj3eHDVqisKbntxgWPN/fqhjpTuZzeUr4aWMdrLievaUdx4PEzamQ8P+STm3/5tiqoutXrSf2aszrxymocUG60g1nci+F3CMkL3sSf00OBG9Jxeg8kSEh7JjNCUI9AOLq/WlFtBbo17q2P7cmrPSBWoKKUeMcRoSi4xK4i5PjUkxF8PHurdhq/J3FOSz7TtMhKk+QDvAFXWqfOGKby0nKsg7XaDRae1oSLEb4hc1mX3cHHja8QMEZZLvKFEpel4ydHXI+Gt1aldvh7DeP7B4jYe5pxnsedYxCWXOlJpjFUv1/23vkQS4UA9VrxkPeaDbcpnvLs4UkPF0rAsSYis9qFa9zjDHqzGNek64pv4pDG4YB57vQSCslCopTbd3vWQ1l6ZvifldhIijVCZSYkjrOv2hxmWADmBahVcml37/HKSU4pgpZ/7+5F6hdwLEYIiwh5OTVR4jylGG44pQaTMkZHMezhBX+tyB+M5we6SghGxn0i4tu1l6bAl5g==';const _IH='5ff5c340890f938d86080ebe9b58c5b979bd43bc8d99498379a23814a79f0140';let _src;

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
