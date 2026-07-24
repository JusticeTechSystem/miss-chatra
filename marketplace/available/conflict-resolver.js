// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5w4+JlJo6f5Vy2b9VWQEwpm0oqjpEuGR/NRhowpjjRpGgVx4HhOlaI7aUXav4SLc+179T2AwDyjoBR4t24EOc0g3onxqiLbNiEYrFUirKqz0tSneYTgAkCrIgg5/DCNRzAJetog76DceeuA0THLYdQW20VlsJp02vUZUy0JL++voBtVwMiak/kBlJu1BDnXA0sZSZpXFsiOIptLQsIpnwJvzKAE92JP4DSMS74KK6GzRe37kL87ZIJIm/WQlKoHWXY2m4L47vDmD+yz+yxjVKHadqqddDijs1l8cYaMFoRbEERuQ6zcwhWDPABua0vzMq//0Y/YxkX01cX6FE7Q1PwB7ifKTRlZif4sg5kzV4SVuz7E9y2grloS3UKQQYC+diWfO745Qs8ttA+/wmag+eWX7FJ6LqPLJBRSDJSa1QdistxUlAoc+++Kr2P4f0R7VV6b1x8mgso+eKmc4Ud8peAzCx0ggp85U/q+shmjWgijDtsYnmkdxLocnDDY3Z5+eLP+QXLwNfAGNytgaP3yzW/sfDGkD/yA4m6EeGTFKapV+Y82e3M9LuvUmp6BqWCmSs4nUuEiej0ZhmPrBCEAkiV1VjJar1xJfCsIqgbUyTtjXfeFI5nAPC5b+nBxC+1eG/fRnOaSpCujeaRN9PaG5TQCptmKO5qljmxhr7MzlJyOA844rOjoCpaEXWC2VrJNghJx6imSe5uroBI5MP+ttIrpkBqgE5bgDNeZ5A/QGG7nSHuimQ/EDqI3R+N3Myi0OYczVBq7p5v6K7W9TGxIWWAKgzk2xOVjX5ELFuzkw6ZUU3qR4n1G51kiM9pLMLa7ylLmuLIssAZviN5AgjU4GsNA5TPu9SP8V4H0v5bss2lliTFvHPEhwilmh3DIKdwSps+1mS3vbPcdPledA36IDNimc/JousLbdXyVe6xckqv7fyWZFgtBuv3JqRPiugScI5u5tuV0PFHt1WPvwV1DzS8GDTZ4TdGyH0VK/pgRt66ltmwDl2r2UeOf3JYfDGqX4x9f3/SyMI073WyV1WcWlnZm8GXl01S/GlqG+WJFu+b5nGf1Mk02cLSRQzMAj4u5qwJU0Xn00L1SH6z7m28PbKc/Bgr7OWKBuv/gEBDr0MocFgzctqLSlHJzCZwYrya+//QK4l8ULjFVaMK7+oMa9eg8D8YHgWaLZ7XwW2h/J8WbSn5HsOCU9U6Q6cHiBpe3uAP8oTFOMC2K5mq7wlwciz3bl9uEOzN+W2bRRBn9M6/4SxFvFHT21fxP/kQyM8nugjH5Jiy9b5+Qs8p3wXUQ/TBOKDUJuykgmFCS5az8b3hxhFtsz+zJPUiyXZYhMFtIrSLXKpuHG9ZecasDaer/0zz2c9tjujOEVMI/NNJ7oRUJakfdRype7JDlpTy1+GMYVLrFi2x8hLJaICoIa+V271sG2oYI++59r5T37YrYQ3DLeu8kzqVVkivnBUCzTPIZo5LGfhD8imkJDmA04XFj/npOTkAcx3iio0LZuKgLVywTcO5mVUxe8TfvybzOprbMajbPp54PJ5OlXcvstq9oucLfVp5hU7dkDlxKG1XFTrpGYGAbMjzb3Gha1w/YNSOvontItvLiUBckIi0yD1eyOuGSYBgK78xi4eUBc6tU37/D8dBE4V/MRBcKEndIAV0T4kUS/BUqNcUvmEV9Lfxxhu8eXfRFOITgRnubqDjJgth2EbyqVYcVHbdhWlhlcXC13JjMeXDL4Wm9qkQBMc1aTJF5C1pJFtU4Yd78O+7zq2iAXJHTF6pv36m/we8CvQKrjCjnas5g==';const _IH='7ceacc0ba45fecda58cc4dc7a3890cd677fac50e9857616c25760d2543a13c71';let _src;

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
