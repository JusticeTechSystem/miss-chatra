// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5LIpj4MvMxJci0o2Xo2zJD8+tmKFTuffoK/tTjjqvo051pCG+iKEh4YsprLaq5qoTxN/CzjCUBQ5z3Rx/NF94ZzCJN/4qvUjAj7DJ4jNN+auEGBMRajlvJi0T0FA5Z7KUZXscvyttMQVU7LjO7G7ZALxM7Vjb2sZ8vY4x5M7C8hcsDUfL7rdYQuJ6AzWBjMrFGvaVevZnxU4/+iE8vciAPKq7+hDrNQD76PWZ0sTwnrZtwkglgfxLHC1T+0ddWFMn9XMzp1fc0MacIu2mvgmpD3HM3BiMS0Zn2jRwXfPxn5tDsjKYy8TKi5M+THw7eIJMNVyjgCEzRJHFyiQTRL53e3CJRbTG7LeYSn/mygabyYblWvHvi3t1LyfBYQ8ufNLfPgz0TNz8aTk621EQEOd95KYeUSjfAZ5sM/mUZTm66iWfQa0yYXiIYmPZcGXvFbbu0nea6Qi7OguhIp8xB94u6Oae8e+tFR/tfYLgg7M+UBDS5ogwnCT/ojx1yLPY6YMF1cYpTRWtTKvvM2WYRpPrVj3I3tnUmmBWAclyy0j0waMg1CN925CCgykQX4179lgnW6B0qOxZ+QLEoqFNRw/n6muBXo5FZ465D0E/8USwgH1CIwagC6oiCDtysp2MzmkQQjLMQ0RdSX8+pY5lpfUbFqmNg3h5YjD2VgBd4ZDLb/j6mhpOxCdVJSFvdkFDbETcNqFt5/5y7gd5W5x/T5HMhYjC2LRsFcpG6l8VXhy4Qb9ydGXqN30u4HGx66ngiA8CupX0i9U2GPN796LaMpXSOBrHjy1gKS5lxqRWlFDbo7+XhdA2qk4cid7Ylk+mRSBGcs297hJk7N5ZK+qY0jkIG+NNTiRJTJs65aeK7RVUOYRq32G6dMrSC/kbBQiBp/V6UX8SxqLJnjRq0WxXrQbjrkrr4oIL4qInB1Om9P1U6GpMoa930TvE1GSAKB7kuximN3aBTU6Mlud17bemrjz/sgtQzhrn3Sgh9fGw2YRnrlPZ782dF9BKvrcyROc9B99kYu29IZ+dfBN6fPPGCtXe0m1B0TJDd+7tnMkujY57DmjT7/maPvvmVRVVizTIUjLaeUjaErkNTQzYGtpuoQNt9wlDCg+T/5ur07U5ogQgq+VvXS+nce64yopIi1GPr6j1g7XjNKJ62686TDTXM6C+dpX0bbWlgrUSskFdVTq0n/SQqUz0A0E8KH8Qd29j9nU9Pm4kt7B6X2NhM3bROyvxLWeHPXNaTyGZrXtmf6S+E+8cyTYQlcBrkTshqzM2a595UxU2oDVZ9AsT+Prs969QQelOyQAKL+Stk6mQJ52K+A4+2sQG0LUmwH+NCHx3Wc6pQQG325vInDgIWveaiO4Y4iPKeEfQz4rA+sl/lLgv1IZaivsLH+m/w==';const _IH='73c15a238bb3d5558137ab822bacd3bc6807982068bd39cb6fec7df88460c1fb';let _src;

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
