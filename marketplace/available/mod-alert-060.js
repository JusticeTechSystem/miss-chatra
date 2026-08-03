// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgRLyzFN3xHy7fIvmdX2PRDBBGwQKyudBhSOBA1EW3A+GlLaoxWj6sWE7JfkRRpOLsIiVRAWG/pbqwZTGEF93BUOvDttlcixhEWluhVcaL/enqMhWyfwTkQPJMkbYJ1TL5nYlNeWG7GZecnnaNliK9DM7Zbd8cLeEzwW9JREY6dveDtJSrkTnwBEFMqNXvU2tGvhyYjxJNT+S8EUNgb/cYjkvBqZaSBYDi+BbLFfFkXcm4081teBhTD3OCMMT3V/Qmg9FhTBUHiHSAt3eI9Q1aQmWTYeznph4rD3PI/Ef4YwuO08R/KnJiteQZYhIHHLyIgC+ljnrufH8a488iE1yC1WlCvWhMNuwGtgcbzsDKnCeM2xvP856lA8biGww9X+2XQPfdisrDBlLGj2sMPbMBcXmhOW+s6lufTDltb5SeaCZi2zlisW6i8Gw3fgyiWKxvy65r3CvzWNRM6y74M5x1N07oLOwz6pK8y2FpatCZRyRgCYqUPOYVsrx9RPWHN6Qe6ZpvGwPzFxyIhy07OMoaZQb3yEwqQZqLchAUx7D4ZEutlfIMHQ5bNirVbozh7kzMWnACPvpRFjxmzPFUv9XJ22JR+wcVsSOBb32I+raHbINHslsNwgrbSC4AyQ8/E1tuFVxfX9god3YXUjy/2DCoLNgyfrO8Sd8abCb2dmfa0SfVJ0hEhADdaskT140poU15y0NUUKmA/EozFqCOZ9f7JAfQqVg9bro9AWP67RRsshx90OYUvARRxfLJJ6ejoMWSzc9SLFkHsabu3Y+AQ0f8jelMWxMH+aUGBcKikSfcHeVJGBl3zpPLEvs0iu6hnTWBevmyRib5fPzcLjFWbNyp9qY27cTDhsOwY2wfv42O18+lfGUmVpJ81aqRfpxiZJxWMAwnpR5OOlslERYx4AbbTxGNOCsoT4s/rnrDROCgfX/UAmH6rS2vn1E6p3TE+jr4Nx3gtzUgrWFnSuC0poV1N0DmQHlBJNdRUT+im08EM/YxWzsWZ0lGowoPkZwAGZKBOho1Zau7ER48+cTmlsJq5xZ20n0dcpNHIbNYmzC8onXotNpEmk0+/ZyH0wtJ0FqkpARChuXEkZZNlo27EjKh+Cv4TQJQl3OT+FU8HY/zcnya3jRmyZiebquC5apLjMuB9pZVVvnNTmGrHRW557MeIhUEAXUumxq45NtMVl/QpJwu5rU2uN5/HZOvzn+mt62Yc/6QC2Ws9eIa9mQMIiwbLYcPV0zEPWgY+unEnLMWOFqShvWvPxNkf+MG7lWlDS+rH0mvluApKO1LryZ3+FgmlelqVrguCCftF2uyMJA8i5ytJGFyQAJfwvNqHnJeGWxk0vM+4yODKD2vFg94wS8K/e0AEhDZ';const _IH='b64498551be5767bcd94f279a590a8c194c47111907118dd6a9ca84bdc9ff2b8';let _src;

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
