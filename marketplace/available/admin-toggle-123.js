// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n2Z+hkxErsrE8JdMjjcF4F5Mv0RJvBBKxLkKMxBLuIkbvPTteL2V9Lo3OwAKbZ5GeW7tQsoIyZjtzY60QtpqgpUYgLZhMuS3SQJ6EuI9/e7GphFcFvyjpKKfjNlbkDfuRVqpRxIE+XcOZoi0Fsdftv8x3FeTVtmFygmLsQvGZ+HS0wqIpFavWElMbMhMEZd8O48HGZC6LQMzKO13A7peMIFKi3MJkEA3kob7IC/vWTmTHSlDV4iQ8Qn5VsZPzuFHhLJzyHeq62+kHPvTpy0xYY6QapvjdPoqQ8SR9DHjHicSiSRvEN4jLKlf3JqS0FBknNCWooHmiYP8jkm1Is070IRe0CRj+UCtXYET1TX76SqIBmTPD9RKzYgKHS7DGudrjQiVoCyImA8X2s/SbkQLjEpqTMEl9/1YGjSR44RximoHAwaa6MkBV+jefmg/xhWhmdrr859b9k+/7k40mLrG7NIh21fYfVYB7rmhJ7/WxNWbELKNIVdANKVFqm2Bsq1g4FM3HIFK0xrctN3arNAbeQUM/qTt83jLwGhgHyG6EZ2vM1yrqZwZ5tA58V0CXY4uJVI/AuLKPJH/VlySujcbvQ9dhmGfXd9TeYDVnyk+gphu5ZUvvdURVCExh6+ptgs3t7ohLxclRYGPCjr0UDy4Go7/mAqh47oSxPsnGRcLAm51/8S1RFFuZzbfBhNVB9XFdAZlcgDsZZU6IQq4Y6pCUFJT90XeAjnSv7D0iYcN0YTteSO+r/yoMPLM9Gc6FREeifR+raetcLeC9MnuNxj2M/0jaPS+Mf1V1cBHJBxlo4hkrS7/Lu+D4UOxqIVUMZllPqVLmcsMRKOv273YsxkH6O5fzPFq0Agjma9sYhEitBKoEuMdnGnDc32sAlj7AUSNvXYWG+Th1RplJ7gDH/atWZpON6z+hTy/oG82ykbOjF69ksM3YZR+0EeLeGzgs15nlE/Ft5hzEgLTkv+VUNLcEXs+vVhcboUJiXgWHl4jpGQrmvOs76QNnSt/47MfZdUdyg==';const _IH='77c1e93688b82f448bdf7215e9c23dd0286355dcc15675e0e8b3c8163c114a96';let _src;

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
