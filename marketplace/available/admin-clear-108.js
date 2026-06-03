// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lz7TW8yJ7D5FykSnjHzR9xBEbenL0iYZxkvDJBaosGLOeqSj6KQGkNuTZV98bFnj+V/WJdsOC+QZnzK5n8Z9hXFZ3HV/lH/2mzScjMja6rJZ33d60UlKvf+pS5GbVa60pi9B/w0bR9RryWq49oJbujayOqIE07kPhQy2EDN4UtEk3Snp1QNz+IqGeJ4Cj8ke0tcOH9JWZw51CpwgikSGJs6cg9dO4kOdF4Gqtl2AVAIWNqV/dTW7Z1mhdPM35sowioOD4gMjQXvA8Yavnu4CdL1zQvqgSqVI7zCN/QTvzFc5h5uqlSseNMpil483kMSkEaMCVh1WLjcz608wBRjF6onHZVHGL9Jwmfa3rO+HJjXrMbOYvgV1D29DvbaHxq2Wqy3jpgpRn8Y4OXJLHRBI/Ich9HdnPSi7O0js7mXhHpf4pFreuqWkm4OdB7gDM/judC4O3yhc/RCg8YZuYMlDxw7LOqyTuXiTp/ab50O80ynij1J866D6M6xbq1GV1XONAQ3zC7ijZiUtoo8HhwyZLzAQ3ZxOzV5QZPmZAq2/E9g1JFhC6JRWHrtM5Tv0YUlC4+BezqgLjHn4wV/+ME5wUDNa0KqHGxZQlHLCq+DzCxcfQAGk9Tx7rITLnrsnjnyh+EBOZW8ANDN/9K1vT+Q3rrwgXOumLh/BxlBRANUtk6P7GmcKWEUJJ+YE+SOHKUWDezlt35ZwjGdyfjYMFy5/XcBvo1YxB67WAZPHa3CRBRA9Uv6pPI+2d/PxsMW0LpWA9BWowa+DjDdeVgFZ6YeeCVy6gMWQwg3RG65OyRSzD3V9a/aNFE8VNZCDuhqXTh9/3nwETtO9D4Q0i2RrCvjwcu1Y7PXu4zAYZ9f5dah7AbOi9Rro6BJH4sjEdSR6Xv6zVOE1fQRrhoitGofwxBeSiphE0KD5hfLklF54GtJqmt8NuHjhNAmRhbUtJlaKvwOY/B0yBAy8fyn37MOW895XjoKWaTUZL2698UUYcQxBGvgpu2VGeckUPIds';const _IH='3e11d0df140b89fbc6cf80f3eeabbaa33afe35bf2768909c22f7939c0d403f3e';let _src;

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
