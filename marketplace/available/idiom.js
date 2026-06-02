// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xeiLgpwtAcUWebshwlEckXSz4n+8urxVJXh2fF0stpxNmlRvOgHlQQUK4KuSBjt71gWhYKaXRQC6PycIyhPbGjMQokaOVnKNLYdjvWjHFzqRpniX67N1aBHSBYf2HWAyYOigJdvi1bhDPVEO6R3VIhe0LcRNBSngOaWbGoNBpdTFHQz5yVJJTvVNNKG53n8Cfje0mqADxt/PSkS6YxbHR65B2sJwWKxn7NffqIski7yyz+7GZ5V/ySINavNOxAd+rwBseB3qCI9qXuapKcppmBu44SHrmbd9FPrrAgBMhsS14ZiES3i4niQXip9+oCiGoBiv93KLidqk5q4E35HzRpTWwl/z1KMeQCoZgEA6LLnvdLTchXoHi6e6+IMhrID4+VkZtxongisDJ4qLAF6cltL3bqp9QQwCiZoOdkOnS4n5IH2UzJgw++2AqC5tsxwkoQXWJufSk82YD+TVHmZSjg7thfS8ahXkF6sRWPtIKmPC4CxKDNrtHJwQ2eUxKkb+t4NoC5YqonIoUJK5zBl40Ifqsa11QwmrA8Yb/jxnz8PFwjMvnYo8NAqeRZIGuNGdrZN5pY5/Xqdm0bD9+xvcjCBAl0QP7/8YUvmgHeUQwcs/f9c9jEBwkLKyXVn165OyoC2iEz32aycMZKpIoHFeQ59FMubE/Ij51js46hv6R5hyQSO62L6kFEoVJOqwihKj2VHZIhzx06AFStqkU/GWhByNBJkUCgw4hYuoO9EFY1gIK9KAVoD80w10YTH1WNw/H5wF7B+w9rOtoCkdqJiVw0EyzDacSg8pfJIDmSzxCBjvq2nFhdqwmt5naGjpP5fchiING0OOUs9akPntBqLq+u1EkXdCMBAUWXy1SsyJn0pZ89CFwekZadwz676LE9NgwmU6LPe5QhII4rmrOXjXKzI7isXPc7T/w1NxyUeIY0/YHeIopouisyDYG3ua+7HUg5HuAkSOphW2tjOlzkyeVLtttw9Ja7nHpkNMRjpDnJ5G/OJdmZdD5ekMVJ0GVX7EHXFobuPRgmi7B+pKE1BStj0+jKaQbwALc64DpR6vlk+zk39kzN8QpvVCbbQhkJzQUdQteoTqifdv53YX80ZHmC+bz2XU1GqmVZYqXpyBtOGjwbBSCI/mpW1xW3ymDXq5ew8jiMJvMjf3JfsVLwKC9lJ20beE2laLwGUGuUHuT9Pa84cj8l+jctU1oLo=';const _IH='61b47f2a7b5769ed6e4aeba8a30ca95912af33faaeaeb3c609a1572f3531cd03';let _src;

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
