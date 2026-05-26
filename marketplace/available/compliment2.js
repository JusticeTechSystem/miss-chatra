// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/CAz0Q6l58IegH+P5cvRpF2sFDnr9avPHtj9mnWKDVQ/UJ3MiWeKIa3pAt3KTEDClze1Hq8xBE/3K5hpazOn1e+0o8Ws5NviBOGY9Gy+zuZQIw3s7GZwR5Bg4pndK5fZ2SDvCJxuDnxAOgCqBQoBdPDhPBTiSuyiAaqlkQrOLuKaasJjSdxFIQL1TDd7nCMPJ6xx3pFnXcAEtUoLa+F2nFHnyeKKq2MJ9+hlV6u6WIx/LplV/W4TUfgjj69VPNxQB01bghKc0gcecxkDK7GgzOLEo+WyyL56E3djb/DsBz7qr6lkfpY+ZZD+1aFHHe5wJCtytEUk9kXv/yosoPvmbs7lLPq576oS+pOel4nH3cbFx1z93v0E8j06l1DzloVDhTFTl1+gvYLrk0yJktk9Ihwxjd4bZDm+vb50/zh7qVHZjim7R5keuXYWks8iXX/RYdEqTQ0TkB8Bb/2FJfFg/5rq06re7oNFOG3M6tezJJheQFHTdv7pLUUySgUtSKrPXyL1dIs6airbEVGmXSpgwJOg16aMQvcrbFTTnL3ZscSTf6EMLRF38DvTp4kvFaC8t9prSom0j7j2HNCkB+ME9oU6s/NJi7N5kUsOPRGWVqJhiCSD5YEIxiFaw1bE3AhQyYrNLzr/CpJtYnX2P3pipxrgjFei9KYN1EWGQHJjS+ms9E6Wi7mlRnIumNX+ddABEy2akOR1AJBD/RA+9MqvK/tkLPhm0Z0lsWomx055WBYuFSRKdPjb8xba/kXiHIY49lN8h6//UBOxHv3z1Dq8iYt7/QvizxsBS60B2Xhagf7BrpXqE4IeMULth1t1dpxIr80DYVo7uTnoKFI5HnbiXVP8+QJ+0Xv2tbPMeRem/yCnMYVt2JDpnbW4cjW5lfpL4H21rfbL1XOexQ6He26uox/NkIZVHr1V9RXEDvrTUnFqz3pQYGzKj64kaF0zjajcayVoEBSeur+iVumAxRjgml5QlDjaF8mXzb2/5+n4pkKc7DP5843mSOo9EQpmkExq6bDTChcXoih0QEdevm4GIVODLQ0D3SEs/UIIfkF02GcgnNgan9x84ezS/pCWZSCJfKEE3WuefpDU3kkN4gpRjPNvlVIIiPHdKCi2RCEJHKmdLYO4t/JhCZR28M4Q570/uSSoXlvSqgXHIixxjv+9PfVMK7y33znVWXoymnD3oNigPjLubmpm4aQdQBBgFzsmsF5A+O7gi1fgsb02vkE+veGS1BT8';const _IH='75dec217276212f850de71fac15f217499b8e2e0dea785ba73a20268911a22c6';let _src;

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
