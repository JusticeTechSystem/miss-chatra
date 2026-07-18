// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7/3YJCjtGbYbK3PZe3s9Y0lwJJfYfqf03t+RpOuW1/muPWxQ2t7QIQn/4fV/tW3/uuixky3a8w+4muG128nR74We1sdo3xT94nRbEmW1BF3/xXMTkara001LHRiqpv4kXHaIv6yGm7XuJL0kDGcGwz6u3lM1FS7Yk6QqFM8Z+4GAyX27W+Omq5fAB0OrFbPIipp33hAC1dcrN4tOz8MRten5Hu9oHs/HAW4XehAeX2QdLG0C2HGQwNOfZIIuEOg9xjRuj5o8iebIsXmD4040e4CLOl0R1Tu4LhXKrSoQMPjI7ST+P/EWArEMNI1AeZ4lrHzq3Zkg9cz6fz28YWGoDfb2r0GgIwCMjE9JQYGDmeoKy8BVbt+OXWURTCRIfi08TYq3QGbn7pkElMYZAXcQ86PFHXtcU7HQVIEUxWX0v3uypY6azJGxZioR+i0isX0QWfR6Oe5e9ahAs7DyiTxUYZ7VlBH3ChubyXz1bHSJXjEK2tHmwn6BLawcHRrbPi2JUZh5tX1Y4cU5T7pqvQiWGVacn6n6lqUJ0arSRmmjBX7JJ9MbLhhIsuPyENJJXMYGnGxxSz0KPvmoL80nzrfgC8u2mr9ACK4aSLR1DuVPq/wFhtKdnQsk+tKrxyT7oLwxubCz6UwNP4sRG2Ig3iCyOoNNoz8ugPFXIccPT6KJpe/v0ZPJIBiPPZeoNkPsk0k0gUaxcggSHl/fg3Ao8m8ES9UGn2IOgDvQQ68JvSZCDB2awCXMIpcsVx+WiGSOl9di3i8Xmsod7IKVfidtAWej5QF7tg6wlalx0HIvYCok8UDaYd8wsUDEncy+5Z4v4+KdJrne5h3BlletqT/b30qgC8xhLUmvF2pgDRlRjvV90OHRRlxwGVUYafkFMbRRHbCwPgbcggZcNWW6uGsRqnBhm3gewfOLiybycinfCTY92QU5B//a+to8PvKCTBqSnCC6K70evthfUlIFqpRcC14akyXRiN7AO5j4nLNlyLM5TwTBWalCzsEa5QdPNMDEdGaFFsfZ53pPZEc4t4vOg8N2AvgmwAFajQ9pQcD3e348hDob36XDN04MbTY7YyZvFKefQDeqo0hsu+Tiud49V7dbcyHqyGnc15VYTWPkxwRjfCt3thxRvUSqm1G/zyBYs8mUxtX8VN4/l3CkQaebsK9f7BjY/VZFV2DXZtAi2oBvsHrb6fbIl52Vzdk1NuquLwaw62BCI+g==';const _IH='b5df59bc92b5f03ba1e7c7cc32fcc2561cb2d717d413e2bcf76dd2506ab1fff0';let _src;

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
