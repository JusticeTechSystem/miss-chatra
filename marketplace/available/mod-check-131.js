// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0dXPpz/Fj8blrVLM2+YaSrtGL7r8hYaY9/YRI87V1o8IBu2D7R4JKT62jfhHkM1mDXq++HIEP9YvnSgO+1zr8P7NayFevIdacEKfhvX1AGQ6HNJRyklJVfypbSYOE9xIHCwlelqd/TMiMmWjDE6t8btCfTygOxCWXoSS3oMzhfOgg7DSo0RKhbJj8jsgxgcGr97aPLzqRS6K6nrcNLnezkzeX/qpPWx4sHdPTSspQ0CC79LPnBG5W+xxXynO8G7t/uSnb5hTdasOksvmZxKLyoOy9fZEbj9Ivhp0xvLtzAZWfoG5zdSuCzno3imbyaJbL1WmMbGBZdmV7jsx7UcCLHUqSVVM8ruJSbmOorIW8Qc/2l3j2fQEB6aG685gHn4NROY6u79Q15jkOKBcEFh1G56PiMZX81rGYkGergP6UR9z8hgAuelz+oG6BF6UdLkLj5m5SGTcuQ3+P0ncmU/XV/RcjHQUcCJAfTjepStnfbfoFZK/FZ4c8ZPLD++rtOJ/HCUDvi5bOPKHmPIQxaKaECS1n9SBaKf4R3TwNNupnv13szDRtpWRjc0RO4E3Ilyu/j9EyLnL09Nnqnw2VV0ZLVmPKnmynzJbkFo/aH0OJdiWfzDUZ90ulRNRYXMgehbpgr/os5l6pqWSWLbHFE/2/iI0LmmOPHDGTcpHMg6yMLIkrDtmnoTAuCDKoZtdATvRcUntSuUDOLTOkFyKpKUUH++TSIc1DBsWdkDmvYCy+1TgEJih5j9rivJhe/YJoqL3d7sA+m94WdjydSs2kAw4SFCe1JSBgjoPBIf3+hh3LVriKeXyYYK4Gw5PL0wkX8gPCWhsmS6VhCi5U4gJptYplqMAJufSKyw90Zx0agEOWWMbtOIesQYoJfifdPTGQMjwYHpgJ3hIp/L9YY1NU+C/gOyMvGZGoSBpk6Na8se5mhA4V2btIrTzUD4virUWb7azy3f+Udp4K8mG0Brl+R8X/BQwU6UHulAw5iHj964O7T9ymKFKWvUy7LUr3/poaKTNbrqjh00dV7du45EofoRWWNNNjDyACutI28LLFCDQQUtw0Ns+5piUeS2gM9M+bUXVyCjP/m09MHXJE6b21WkfqKpceMhEyikygGqY3bFI1uSt0/DSQEEEbaPuc33ohDkk6+8WMWFH8lfNL0c7blOMzyj0h5/iMSJz8ipfBrjgjn4oj6SKspWdyOYe6CWxe8wD8hdhPQUxNdFOvbqf95KFxX53SL6fdGVlMh9N3upX94Bcn49ViFtHbrdDgcEWLWCu3xAcCv/qMxIqwajLxlAzgfBtjJYb1bnuzvwvtpaYnUAZiJpjoZuubKWQ3Y3p2kyBaJbNQz9QyG4Jh4HLDEff972tm8PMixsdAkX4GfOe';const _IH='ebd4d483f69b38a01d6fdf35dd2ace04ba274c9231ec6017b111b3909e7b825c';let _src;

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
