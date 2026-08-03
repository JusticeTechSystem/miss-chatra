// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfTuE4N7ydgYr/8qsSQQdjxnCHjeYHIU8C+qRx6bS6jyy46eT35X2ku/f4mY9P0RAPt5/D4hTwluHgxs/2bGOXpJ07WR5Zm5MkrHOtsT7vDPXsQmmGSR3hhZ63KzAwcBtkhrOJAyPC0KgcRL/mUF5sKtvKHwCEZpi9maGnj6Hq4cplK1+rfLLdckRyRB/z3KWRZD4rw09NpHOCjT9VuYugByBgqpd5kBLjYR/bKlLkoB7Xj50qwoubxMUhXel9dTAvZSwMBhjNdImQK3k6F1lMaVR3fi81eGlu7U316AHGJtTUbCPwNYtG6aKrzoHsLhZwjdxDz/NcrriEhV7u6TZ9vFMmw/yynwg6wY38POZ4KPRg/RWxZXy7lj5TxNzp2om6rrNUnifD+ZjTIjaUwz1Ksnlckg0QThvHmqGN8fcTmsiQfnW1v4vpe3fgkBEU121qZ1VJI8p0P5nFtBwodv1I7fcNy3YeMu7KpVnUdLYxE3ZfVHV1f0Rd31645feP5jhDKkStIXwqpNy440Rk97kCC6olsWCdpky7z/f3/xOGFyCphkTmceuUV+rgcaN8CyB5ne9b7p1/ZhVOz1bV8xFAkP/uigXSVLDv5AulHf1v0unX43sf5QQX8AlTqa/oSWheZawAAZGxul2TCpq5+hnZkbV4mm7UEieH+JtC/s1cgsJXMLi83I2bE2mqE9o2OJGpo6oQ7aLVWDMetArU5ycXiUKGuQ==';const _IH='4e3fc0d81ef5c55182d3dfb692556b531ea624a56d4bc3e3690f4d165030c10a';let _src;

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
