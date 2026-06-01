// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5cJfX9YXgfvWfL8RMXr1nW61zdzmALAyZ8ATN7U4jh07Go0lTxhmzyeJGj7mTV+moYWpL23klaj6IA9rYfah2sbj/W0W2yy56izh7jBCjyYcGuvzWttINJbE1YG2+q0CVUw7Recs7SALA1oMui3A5LkCQSI3KT2Gc69jjffd5ellln9VSnaqS5LzqANzFLAfqcMZTI+3clzsuziwwv/M/KE5OEbgJGXcGA+cj3niCJXWioU1XCxqjv6Pbxkl/Yu/7c+FsrElUajWY7QXceH4pZR36rzfjpnogKZzDBXVlCSDCMB0W5UA6WsG4kHrCJHsJD1k0ki5rDccyO761qkeVa34/TRCB/dKpHYHABn0dAMQDw9S9CNUle2qxzck9QkiPiv33FTG06a/+LbDuLD7w/Dd2w1kofX9WtmhQDtvAdr5L6JFfSyU1qaRP/D7d5/cHd8zL67CLV9GJ45sUTuDftuyjCJ5a28Tple0KdNITcaDwhIabQbTdwzyS8OJVe0xAPjrI7arkkm4B6MGAvL3iONsVVXEzmtZSEcpMXLVgpncXGmZ20R7b3mMFCwKpQ75SoX8wTUMpemTIz1eeJUu+mSMaoub2C9AlkWcfbw5WdYzfYvMkXnyGv/LORzlVy/67qW9VNH17DXeo7WJRp8TzwwQfGKueNg0bM4xweWwxl4nBzCyMN7d6OedBVbOiF01gTSZAFIvuHYzMdR7se/A+C6QWcX/e2b88o/uE1SSSa/PrppPWQVP4e0MRHFl1dI920xDP+7vZAd4pG02Bx0Ia4jkS7Qa2kCgA1Be67fqxVLmP2nWjKf/GHQQlQNIaCdKReOse1ELkFHD8Wz0UnPrxn87jgCdEVBTwjUwqfjKxIIVbZDkTjP338gVf5gvoTeFPxvwltYfIRlBykqL8HBnG7KHgk+FS01DaerP3H3un2Nidmz95rAGC9Vg8w37F4kVh9dpwfMUFYcgkw0pvtOzTGwL2ipp58I2ZtbuLAWB2pDmTouoapyig3srJkowsc0zDv0n6frOIYGoxC1YTnMcojllZuJj70NYA5Yhc0Ck+sOr3tAzN8jOV1Ht4FDxfzN6XhoaskhPzB4mT2Y9u4JZmJvQYM+sqtP4+q4GGAnAuke9eNJJSZDoiUzRfHJb/nm4aNn2kFDvJsAVyqx/TN9qaxUJlHy5lO4pq9OlZ6r3gtdj3GnsHw+p2rVGtCN9eqnpiZotcFV0cjCG/yIEstVm3m51WmIxM8w6ebTYesn2MCoSCVwhaNTaTNnGA3gHrwWQfjcFm1cVVthBRDBjMBy2exlQi1DJC9lmz0wtCwSQ43kGDMpZ5BmbnT6QRaeGCbDHh/TI/jshu30i4BC92Wn+9S7eQ9oKGUr1yy2Y40AWA==';const _IH='6c017a6489de2ef3b1846be3615fb201c57aab77aabd1e5a05171e59e8cbc0ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
