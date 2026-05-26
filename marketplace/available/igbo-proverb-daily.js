// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='87tCGMTiokrnm5nSBEWVR2mZPJX/HFExCgqnS7MPbKCr1na0a1Hswp4KCOczRtf62Djkh2y05Q8Bi+xKl6kjIl07wswVPVlm8o5ft5BBc1pvOBxsU/JTwCzZMMpQgw8cAK6s1M0MWJghDTuX5QCISDe76JxkuZ/8aObh0aRS/19mmOTiSk7iD7wJ1Sm2t1RO1ssSotP3tEqb/r25gfHP9HqId74uybk4vkD7c9E1vKYBuFhbd6XtEzfvqlX0eU2jku9AM4XKnOFQS4LoYSIoDF/6CPYaJs8qYC6Xlf/kLo8tTN5vu476kQUyAm0B0Juc9Bucoes2VP3kyIYF/d4zPKmllhaKH2jReWhkcfY/Wti+XLVoxKRRTj3CG8pmsD73HUOori7ta45XzMlKs2Oyndzzdr5WzZyDlYIzTGnIMpaCZI6FETuqQL71HL5hNgNdqWbpno1P7O8zl/Mh+vZCVr8+hS1rWi95RcIPLckCtKtB2NFq3H2BAuUP2XGAz1MbNoGRL8w5IW/O1MBVSgnOQsnTZOkCkT+Pb0nsweCf4ss0jtVhc/lUTqXN281xlI5uA53jIqGXfEQtll9GUKuP0/jPIOsXQvPMMwcEIiIJeBhb3vF7kRlMY/fbJGZdGZXPbNgJNG9bdU8ZmoQ8G39b2R+1LjQHRqS/3D5AamFolU+2jMl3/ON2ViKFCcB778C3FjeXPBP/KlsnuUvHc7PuOJ7JDkeWiBQxGyF2ON0KrquJZrcLjyOXwErtUkqMDEuiaXf/DjvQ1H/zDizY0wjF7OCzqGazP/c3nG1ltwCi+4gQUa0C2OA1crH1EUl1AwvP6CYCiSVwx6cq4MrD4CbVxwz3itYY6doZ2r+s56mndcAXq/g2cc9IIsX1cMT0Q1jL+MQeEQlPY67V/T3uPrX7RJd87H39ezdbzmBHHYdFHOPVs5XkKELrG8LehgzPLVctZzwJP2/h9+RBda1/S83/DL11J+321IxtNRHB11k5Q3VLxairZm0eRlUF3cZCVQPWRiJc3yPr8eQhgg2hbsOmDNhVQZD7JOyy3s1APhHlFOPjyzLohL9HNXfP3SgXPU4+aUFWjYd4q1niFnvBZmuNtsTlM9KhdaF3h0L8Wj4UOTSkSQ7V//K1YCzBiiByVxcbTGZuKGw9PUkJpKwzkVBbVIjiK5ylAaTVPg0Qtc79HsCwF6DjKkSwVRAZMCOlW403GzU9wqzQmL1eOUjsfnSbeRtrnX/l31KCFO2DdVXv4eHinp4WmLhuhUUoawucqK/2sjFiay0PkW4rIUXEltsbApSPQncdQl58X4lb6+QjaEcVz7EIdyeiDyVy25McaFu9hQKE8rRJ/Eam8WICGG//VqlmHR+9+CFWgd6fdS1ugQDb/pbwvfZKxG1QwsySYPsaivSKPkHozgFowWDKZoLzo2ECu8mNililjpKQHqNnzRT+Qwg9IDJ7OHAJPsau+js8zRj8Ttw1UvH6ebHcxH3kVlTkrnAAcMvMpHkangbuoBbvWS3YFfoBJ1IZNyhzanRSjLLtfM/VLtIOTmfgFJAnEsU+qsus1aDMVqjk+mFkQpvZ8BGXlu/9cjvOUOS/Mpg3CcCeacHnaglb0YxkWCBPbMnZ7/NVaw6xGzOfaDahIstMYsKL2Xl/DRNyUeClrK/Sgs9fhDZE4A7my3LGq8JsNPiYWpJ641p/p+/b9kDdGPvQ2NyLAYXM6X1JyM89TilrkMwG+nPeXNtDaiL1+DjQZvJZ+Q4cgcwJhTpC+4eg7qisa5d+X2tRRSISlbhPmYroGyV3YnpVaA0rvIOsdfjONMGpV5Lgg7f2De6vtxgFXlVNA9WctSR3VQ4=';const _IH='b8963d6cb2546bd0479a578b57ee185f57dc01571de5a7bb72b016255a23b3e8';let _src;

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
