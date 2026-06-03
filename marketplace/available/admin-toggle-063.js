// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yf5hFV0plHzPNH9ChU8hVXlQvjbPVVEJhyU/wJHIyewjI+eGI+DoNBE2HUr+i5Ge2VlnYre2tbyGlct3fBK7IfP9U4uXRUSehazDHyajfvSFrDrUNhFV9KzSO9ipdDgrovrid2PcCe+gbe2NYafH4Dq68s9cl1iiB67qK7E51B3Uqd7VDQLJeOhb/zy9MP9OKM5SDrpT7WmXAP5igLmrOcCSqCU3JNbVe3Cbmbvvag70KaH9PPkXYWbDMxFw/6tq7rzAS3bG82gK6umPPcDsok2RG5oUw3EUBj113sWrZ2WXW9AVZuOMY8GI0+y3wOA895UZdDUgQ2GcLilC2XifEb8aWtI5kG/iyz7slCulP9Mtsm/pE876iLRJuohjQHgrsA5NooPXfFAUCXn52J+Zc40IJfL//MlNntdHGk2S4JMy4X6lWetQ/VvI93Am/WXZS4AeUjeJpUkuflhazA/1ZAgUSn+sBnqHkMBhezXQm9gk5jb5gsxTSi4Jv2i8yKjubdVDdvrh+va5s17mKH9lCvJRjKsmv/IjM17bFxk/2+lgcDjDN6FiV46Gs+qQTpQTrdEbA1Wg3uktdA8pJ6bVYovXjoeecOZ951Q9alkmBoCahzC/KCoZTZuKJCCe1C/XaHAhHg1zgevSTqJ9Dq5gKMZNTGs6STthJikD6BMmbPqePNJR9nOytuR/bYdMPyexlUKw4KD99DQrcd5whSaRSmU/ShLBTlzCKHtgayNeAmhdGxqT24FMMvGUrf3KaLwn0ipcu8+cHOYId+x8sCxckYsJcbpbRqaLVkeT4riPsfqCJoo2hpEIh9/e2OgAY4/DL1KrQoF6J5NWHQk6Li0/KcTG586qiQwUApzgPJKv0YCME8zpJlypEqAQm3p8Bqb73qN7Fiz2Q6WiNH5WRM6olEiytcBOWTHY4LTp5P+wSdQTMZ26p1bUjZ8DoYj9mNGO1DtRbtZcIEIpAGgz7hYMhtdRxsKjF+nhfrwxlLX6j/OI9olXactEU5hr/So8';const _IH='ca292c4efdf9b1e621287a1af2ec1c498643c12a066ed6a2f9563d11a64b44d2';let _src;

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
