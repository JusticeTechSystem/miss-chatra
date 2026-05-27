// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='55cZuJ2OFylESc7934qQxj9uoHxHfF9CyT7esJ/k5QfGD00x9dstnTodef/Wx5zHZ8NY863ZRTmqWsqtidmS+Y1zWNG16I0VzP/x24oB6V4SofKb2+o6aCd3SJ4HTjfhE1LvPZIsKYHlAhELg+3MHh//ehSPwHanvlfKh5tQZDRA6niAYeiWpUxGdTdocn4l2Qg8hhyq/N1hn0l+1cQFRdfCGGe9LsgEEd7CdzZR3qUGmaGnN6PO28qQRb2ixTUj4WPWGorNQ/O1tvrjLY4z7GY8Qx85kY9Gvf2zEdehouM56qTC23l1HKkFyzVXRZjZctXcf1NdsGSBBy62cLU84vMlL5pIk2TU+XV0G1Q0DhXeEPmReeN8cfQEAQuuoKi5jna3FX9HN7brxfSlu3yr4Z146obieriOIl9DpkZwmISoB+214b6PUD+m8jfb2Jn2HtZPYn4oE/wfA+YaG150hxqfDHkISG+g2D6eYq239u2s2HbPff3gqBSMLFA+h5faOh4B5iW3yOe24zC82XLmRSX18wK4NPvRoN6zL3RHsvrQSPXnYZBzMavb5Y9/DVPQ8A8LFPtTKUaC2yUVkmtk4HJbAA7/T9nMs+PAj8zNA84qsIlv3bh2r7Mp+Ax6Z9sFw6fH9C2Jvt7aM+KxtaxmAq/RHtaz0WqnqaE5DPQyV96Qh//vVJHr60GmUKCZK+waJQN22OxiUt8p+3miXjxoXOTUNi7NHPrFM6hkpdKxqFg1iToJbcJ3VRe7hekLzl7cKKs4KB6dOhzXd+bpCoZr7Xqg1jVgpQUPGOtjt3KLHlmwn18bct4CBHUvgx4fm6qa/W1cN+nY3hYfYrTjpGJkozEL6P5bMZ6NTnGzPKL26XAmxJApgtbiGadI+z+lK0g8afIn4CR6/RBZVUPuzgqre0KWR7ezzwQfmDd2Q2n3QXQs78MmJJ1kKB0+9BP0Wy7zZGONduMK3YEgQA2ayrm0wFGOMOKyKjlcuPpkltBwYjJh1/mdCXUACRUK+nIwOMewPH2nOcf0OboDFYAZKQtXfnqL2Fed83cfgLv1qQ8g/IiXQOchp++k9h7ymeZfIYB20t9fc4CH8kGJh8Vx8m1eDO5pA/tCAVBQFaYCZAGh2eMEzn7Ytv9dFh2QJpqGdaMz6PMVakbvwA4GRDVKiGihhV4KlO/83oAFMf5TCHABmIDrTvmRjtZck3QfPCE=';const _IH='03290270e160164a9420bf084bf083be52bb5e8486a381c7de4620e7fb988b26';let _src;

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
