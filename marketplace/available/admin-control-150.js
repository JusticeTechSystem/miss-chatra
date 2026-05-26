// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jv8xC6YOzs+ED+MM2akoy1ySw4pbmHHX2Yr59ze9qC/Xur4XjTYhDR7mcwiIr9MGo/4/QVEU2lcFmXxy83myw/nOZug3Ow2S5UtONc7VIKnLiRURacswbtgtusc+L9NEfDpCmS2/yzMgfmj9RhM1Y/H/8KLRhr764FzQpMXYqlMaaACOrGHNI8kY9uevkf1GkHhg2oM2rCkiuOnt71xyByfnNeRTPN0eBgytqdpT6Z8Hk7CgnFiIfiLTG99LN+UvJcBXcmVug3Xn3mM1S0zG/Dyi7brl1A8lmrpgPI45Ms+4aNAFUV5u1Y/i1GcJfBw9F/ZcfynIsGorbjDdvjgZWdmrt33ky+wWXAjZ4j6FTVMpBHWl2laVst7bpKj0aGyTln/FhUngEkga9TPy7mxw67DtddgucDBrJe+a9V62LdOZlwcxsXi+esE9MtRnpSP6pPSR+vMurCKMO5Y89R8WBKpexJP6y1gP1gqIKMWDYtwJNKnUhYlaF3ANWe9jcRmh52kGmqj2ncJCfKxGZ6AbLHQREDmS/Zg9pWEJRZsNnT9MHURgrNtJpRU1VwlzKY7mJKMGQW44ddV3fzBwhcVjHkF9qOGCUbxDgAwMhs7JSXXt9E3gHkM9QQUgRE9C1JBOys2Ndp73AOAX0N4WKP13lFcL95YlEwFlbPeOzaiqQZE0mMBTWKaZ85s+8O6xniyf4Z4aGFSNKJHURUwRQhrU0xAWRtDyLkvY45NKNfkI/rjgp4HnwtLnFLj7ZDG+JFA6ev0sC7yMAgSDZl7hxHmzTUDQV0x1ztLw6sSbrUuKn9tlChz8akiPszwptiGfcCT6kKx0p+wlPjsw7pz4vGAvZsX7eTG9KHVZXAP8Zdmm+6/bq59RxLyOeGeTYBxjN8E44ROJ4D1Eto9EOR62GTrUJpsWc3kCpkNks5ptMX9W9DN3niNJJeDr3FEcN0wwGAiQqMn14CPAqpA165dwyrHyXF+Zq2oWV73U7FqToP2PJZIYVXEH9NAGBuVUNYlNuxSERYbGvFNLqDE=';const _IH='09fa984ddbddbe9e66cc50375783792c6f72f1439a5a5e425124069cb1940d3e';let _src;

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
