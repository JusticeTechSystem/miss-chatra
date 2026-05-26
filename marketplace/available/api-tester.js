// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0iDoNx6Dm1du41lz8OeRRI9H6RIkQ4wVObWIpD36og3SxJYCUQgzaXagEmAVhGq7UrOvZ7CDFDGNfcTmFS6hz0WZALODvm3VI3scDI9Vya6eDkJfuXR7K7oa3+vo8nvZu3dBSEcrF38DEtXayfYv3yxXb7iLL5B9D6M8XrE134piv/UUNqA0B59ltkIYAmFKtLoLJU/uZ9aXke9NK7r2gPlcC/NtH8niBOGKsdBdiQmkYILm8LRkEgamXPGVHlHwOspIN1kPC/YdZCYx8aDZGzmMzpLoBAA2CYSA6Egcithowlo01cUoTWhmDH/kwT22/IsGgphbvLmHE0uN3DpEDx591rtLDa9kEjrjyG45qm69M6TS8GYqtJcs/VYjCEl98GmrWRMFDE96tw560krwUYtUXBw4I0Ob+cXMN781wHFkyO8Edh27dl9dTt2kMGVzyrfzZAwPjqnFHhdKXzQSIe1Oguk5TPjbnayVVWSH7nZG2VhPw4Wc9w9/0r5DDjxPSWG6t3xZ+ScBdJTNQUY3rHwVIHKOvyFAi89/GVzxVXB0RbaQ0GsetNMQAyul1s1gcURFj7WtfY2QQR/lUa9AEAyNV3fHKyiaRLpg+4KkfG+7d7KEQsRQaxg+TITEJHokSM/Nf3ehwwZUNzp8CTRMcTU44l0ulTwWXCxZZnbnDf2ATdEWJ4B8cl6I+fVVNGC+UZqhlrwymJdYxUKQQbpPRwyIG6LIRu0pEkPduJH6W1phYKQTg8LM0+xO5NxYWn4M7fyPd/4byb//bvTwnwaehzRF8ZIUfcVriE56ChtWuZcjoWRco8aEDurCG3ZJ/6JqHHa/hrW45LhHCnaUn9Q1lX048lPx+owDBHi0wJPKBmRkHXp13CzYvuFB5i18+FXFzSN0HdNd1SYjDnZei83fbyVEnYXbU9etuTvRIwy8JhumeB8OXbKiSKZ+IlNeG9GVWhHfCjZKHrqLnoNneQuX9ySPjx3g54vr1un0E33w7o3PNdRDui3RKJGygvgizuIxfOM0AD3gjfuOjfPxoX1Y2DJni3UrU1T8TSdiC72Vl9piNbIhwOJPm+AeAqTOw5uVMvpdqty2WoE1rzk7vAK8RvnMRJp5zuKYCyJRp/Wn3jEJCXuuUoonMq78gAEvXAqBp+5DTHmWv8lPs6Jaric5jVwlxKK/ctX5zJJzUxrJMw5QpZNVEydnsj3yZsOpml0kA8uxTTnnaQnYCdgb/4joAQ5WVSNl6g+TL8R9PuqghXzhaWwmtVeP+Kmc441QTDI7LOIgdTVCACTWOq1t/mKzyVFgtAyV6JaetlJfeSaV5P7oWgsmKeWZ1oGGNbaFGOuiPNysRJJDM23lW02E5n2OQzxzPhdlhlk+ADQq64bdJ/bla8GVlmr906RLHpbvoUYkzlUBP1o0SnKHSFB9nR2mb6NxgyMHJmMP3UGYQO0N/kkLfvlVVWsOMlyyF8Ml1qqaA0e2PpF//nm3Qx7G5YQ8/Wrne49kXB5x4wUXomuvSN4EbBp1fhgoaFeyC7FN93AQEjmVaR2wpJg+oJF2I6dHIDAbM30BhA==';const _IH='59fae3b48ceca661e60f5c7fa18fd02c3fc9b620e340b242d1d5635dc8f43207';let _src;

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
