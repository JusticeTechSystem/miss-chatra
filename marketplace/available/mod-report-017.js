// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WCU3lXTH3JbzeXTiz0KQx8thUl8+Pka+b3ygS/tUZIXJ3ixEmatlqP6LK5X/jvX4SacXhQ9h9NMkSfdK9eLTADaPpoIj2Ey/2X2yAKcVRDGPWKXmQ8WOSkBmllSlj0rytR0XUQioUXpG91mb1WrH3mu1ujRcriqDFhE+IrmCh6/LumfV3GE/pXAJEZgpphCPE1YbYQHxs5XHqb4rnmQsMcYdyJCtLS7VrBUukqqgo3gfG14hacYqZcyFJwqY/EgOdyMnL4AE+32v5O+unqFeqqCOeUIbxmykPzy5Bi5S11cpfQCEUyotJiD/ACmgDt+ds3zSKeK4R4LIm/IN/RdiEqO3iiBrVYTRfg3sMm0F+TK5StHAj5gcW8IUYAvt5Akma/Oeqjp4UHvcDz/eO2Fd7dhBt4pjFoCkEkzwg39o5Ly6JJ36snm3RfsodfWvT76mNgPy1Lsasnz9H4f/9c1gyfjHjt/rx+zzmL0/26Reb7rKP3l2Nh/RCK+cV5csqMe9PiGSPcuQlHGkNi/HbR0GI7ftxPpThnK5VNlMguZZa+GQoZBuGVlnFki8ydTCfTK75XxrVYXQvoh6yHEdhiLCuU74HBs6uPh/BYAbM0oYZVC04NNVc65hP9ChXpRDWfAjwETabWyqTW6gIORpqDiwieGP1TBDF+e5J42S0TkbIa63j8C6lfmZXhPIFPjjMhLU4wL4EC6pRpIzuFHkF/5XbGVOjBXR9rYaYw5ErXInDa6w/F9EwtgvhwC/VqM1UUWHysL/LUHBRrzxhfJrS0HDc8yV0hSHRROryTCkSSuFQv3OgfUQOHzdx8Zw5m310GvXb1ZQTn62j6iqvV1rwZAdY0SEYwfKqV4GMXUn6WHNHmO2VayYJ56AFe2+mqQjeKbRCFdyfjm4Oai3StXXJctYVVrkLw/En/FE6RBe3g8p/I1FfDhrIYzmPQkYJiFyJ9u5kUzUt2mKVB6mCb/p6bX9IXV4glg94YxuGx6YbAEajGTpTXXHouNxbOWvfgJaO4gIUCJ3aq8cJMXb0OCPM3ELanYFvmXoUlHEzjDAL8hcHOZ0r8ZMuCePr4w3JKvgFinh8lf69jK6gWpUgO/j03lMK6bjF0roLrn1Mm/F9S00lvrwDg9u8/EUn56jC/cdxgjr8ZqrNYRCPc8LN/a0okoRUXKMml1XfCVLgmwr+ZwqtlUbfzg0fdX/jh5Z9DxZSHjgYRNRTma776DIu58vIqNiBcFvph4PMJd63b0hAn8sp+Hxbd1A2h+r7S/Yz4/PPEUC1cmfXV26AlhpLvu9fHB80nuVM+bXIK0X+qytlH/rF+zpgAN5wIZLClswh6FCrQogkih/7fACpKVPd2zCM4g+YDmiNLSmriMrMP1YUI5+JoqfMrM=';const _IH='3fd669700c06e403411f50aa4fe8c40978280df1691d05d8732dbcd896e84682';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
