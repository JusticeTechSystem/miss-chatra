// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4xzdwBYNWJ0pM/TTXkR9yq2hilP0GQvvfoxXuVXr7h3MVZizRkBkjwFP0DI/y/IuflnuKgY4N7Ro+QXpXiUTw5Gdhc7KZzU4DiQkHMbTJa57I3+u44H2wEAqIq7a6OKZLCQ7OnYenywH/+XcpJ9b2aWdMZl8ytUv7Hq2XcFY3EDesLyMOiiBMtAXTtBK5B90b48BCZtq1SnmhvZjWBeQr9Vsgjs+sWqQtx5rSsFxO+wPOOcwD3ybE4YjpErLsZ3042dIaKHbY6JbjQjJUyNTg16olRPyQTqpvqz9BBggpE/L9pp5OZRr1w1KvzWy8ejxd12dj4PTYJad9N7BcnK5lBboj+UBlfoDNG5rQWUGBpFsL4/epvmzUQ4ORtGkYpMbGG++fZoOyqI790U8MHT+B/Nk8Ho0lFBYP95s5gkcvanS+mgPPlHBjnFU4pN3AdpLvaIe56pHwAaN6S93E2AA+VVOCFNiW6p1VtT7GmtbLdhZyy8uJnmvz4dh1qXtysyZ1vY1S2lxDVoFk6sHUmP2yOJYy6bEivRS1FWhjdkaYEUZzp5i7CSnLvIv/MY3DjRg2zWIob0YUJ6WpblJNFRgAwaBoF6FnALSCQUz29RSkKbRAS3o9oGFE6fOg/cslMcqZI380h9nwWPvI4TWrbshCDN7Y/drWmvlTOk4Z9zNke09ul+hJ4nCi63m6DTboCTylDZtigJtsRzpus777rKDs3jGvSNMCQG/KNH3VO0X1L0eKHqoHgAGXaBbII2Ni2FBa1189f33/yKfu0pEVaSiyCxVhWogV/4L4dL5kFyNGlbxLi7eT49ozsML3qlVmRaZzsSP2TcV8tttjdD9vznRb8DAWaGvAAHY5N7mxabkmlmRJJnAPIanWqphMOaa0iFcQHdUX1xSdl07LZZ6hyTMVkLRTwCQsHHI4wol5jwlTcWRbfCMqr16E6XGFEBKZ8dwvTPsMvhMn8Juy5MAx19RQEzj8Qyh/L+0CahGGkc07hXRlif/+tsPNe7Vbt5q8AN5oyyLpg2qOXK0GSWWLlH9jlHTMLfmHIIuuYQhhjM9HR2sSjQMMcvN6qez9EJnL5Hh1HNQ9qk23TBULi2plReIniyzmP6f1oAoDWBUAK3a7pOAgR+fWQRjR6bdCB6yTcOgoYoHtIu/NTOm3xkbFyS6EHIhnvbv4z3rBXL7YnN0M0xXpRhoefMm1N/KTb+INdApEslJ6XGCPX/A2AY7oMg/f5/Z6hmen8QnmnFjADgroiTnBxbbWJzELjzIVlIUUX8jR9NOBUpyOBX6IWIP3fMUnlaTMLy+FQ2/okXrnWCJDS5xnc+Yc5ZLgtQS0OTa9sTmUIHC+95mWf+SL8oPFIuBWTJoEJgaUza1qkKIoQ2d13/2Kp3sCtpZBHhPk9O/3tytidMAgHjlqYI88aubwQPH8dQYTyThltqbTVv+rkb6kIml6FHUnaHrbA5sbsrtqLwoEdAYOAGcKfQGyhu08babXfFTGyyR8/BIjuYUOmszw3jdPAZ7U11HsBBke5dWLGw/7jjMdvdFY3lN2+QQ9CCWtgc+fHSqO8Bd3Gu/ni66kEC3WSbat0TycHdZDYGYAP87E/VACIoDvvwYYGs0wxHaytIRP5VErtKOau2fR+mnZ0BMUTfTTwN0KT7I5vlyjF1DhsTi5gYeE2d9TtOA+7Fi7MF38jx3ng7I57i9/juVvVVMYVkTxyfkHhmO2BIS0KZQskTC8EYI56gNL8gF9cZnZps9XjCqVlux0czmN32X9R7hI5l26s2KtQ==';const _IH='f6d0177799153bee9e3e7d16018b43b8de0cddd50abfba1a56b9aae382663155';let _src;

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
