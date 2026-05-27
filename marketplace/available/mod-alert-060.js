// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hfvg3vCldlW+XmEqpE8ku+ZKpw6FWvVXyo4D3/9J+LTTFwE/XpUfYmzxTGZxE/6tyZf0po+vAAHDY5fOEvJh8WyORifuBdJNEhW93YryWa0wya6QQNH2qN/koaoEjvif3H/SQtFYxi3TUxuTiCm03fcJZX2AhkDXpF6z6lEPuUTK27qgsnQ1rktxBp6MRUU7VK0gSUI3fQAiH2CV8igAAT2NMcL89bdXB+HJvFIt/ovN19+gnX8qKTpVpqADESQP4hhGR5VvRMXCUs5gRamsTv7J5dY0OlQfpilA8XMY5xVln94SDsY9/Khx2mCV+w+kw8Q61ng72MFohAoo5DrSVpNCPFiFi+jfHdWsfssYnVp8hZhMwB9zOqwgNgYaITWzkHfLubl6uQ+H/n2z7zrPoDNY0p4GXT6XrznO5nJlZf5U6Iz7riHyFb+Oe39CLheEI/BdH7maXFMg2xncdvmLbyL1aM9CKsO9tM67ziwrPtEVl28Oo1thEGXJUr1N3IYvEebxzSo+F0TzN2aP2wpoXZcKIQ0hS4Ors/Qq+owgW2EKJycgsbUp3SRTLLyVtKWeWmlxUB5Y4lKYYgPDdgLzP6BZJQC9gcbTGDtXQY6tKvwG5xIKwa82KptfZt7FAaLd9AyGps5RtqW+pUfyTNJti68LOVZU7rsispJa7IeO1DrIkRgX/KqJjS//ro9CodHXxvq7LfAMuCPtga5LCwdNH401grhLXGj6lRUhKQJq0VO3LCsAhpaTL5hbUw9/rlK34tkwlp+D8thXvkU0huhGUswjD1IPH+e2atHOdQRpwHeu+k90x9j2J0AolzuwBUBU8Qi3I/66ubXA2gK7iXGXGCcyv0P0R5O/edLdZSes+ew984FtPY+ZLpfTBJ9BkUrDbJ8XEa57mszZxNrRNslpm4j6p4d4kR1pMKbvQRkTrPxSOxSOEm0SR2L9mtCYHrOYZ/vHGaiWzN8S/Bhwa3Ay2mmOGDUZ5rpshbyQiODdaJMin+Dj0JueaiMsFTB38VjVbs/h9XBGuhuxXD42Rq0axk/nzECWEpIpH30/mn+nImYPXLzAyYnGZaFW4KhVrEwXD8AaKWQBsOJMKirSRTwRLpE/3/kTLc15E+RNJTVKwWoqAv85EiNoMAJPgsXEExcxYmcYTmPOXgGq+KR5BIodQM2UWyfLZF+CN9cwBfseaNfSHwXvDtPhXdsUpqHDuPHBXUzkLhbRaXr+wBFakx1ta2asMDwUVBf1jNM3sERJZS0HXf9h/Vp3hMQPu8gFTBi7BqqF5Jj/v8Z/DM1ogQ/WxcQpyRF06NUJWMRcnwLafl/CJkWSbQuSqXbo48z2IPuGKzVbwn5FJfuFBV7Jl810B00OutdQ8v/vhw==';const _IH='96f207029524aafdafde8adf5f4c8db40b343d8963e0995aede6e3c5cc57eec3';let _src;

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
