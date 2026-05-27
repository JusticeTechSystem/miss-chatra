// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JrAf6sLgdfeDzuPBUuWOQ67HHDT13TZth8nKhqgkXBgWCpuJ4cOxzR4nkYS5+3NZOp6AKjBkPCiA5U9EgJi99NQfiTHkKe32D6abbvJ13MM0q/QV15RbYNH4CxEYFj1shGHvjeg6VGJ636uCFZSvKYleFYvBQM973y5hfICeYPt+MbTUeFD2DAkvxiyWdJ3AAt9lCLSrHd/FVF88uaOxLXPfqdQhOWiyG48EJ1O/qNJ97JFjedMzRsiKSjtE3q86vyrzOp5tCLAt5IiNHa3ZFd+8LTbwShXI43DhSOhB3POcjd15n4IuYu7e3PiKGkBVB50f820MxSXt8aChpKLPGqnMQt6gvcKDYPnhseiq6hlQiZ4ZaX6sA/8milUOs8VS2wVDltAfOm4oxelw96CYEeWM0JX9W9IgE/HfrnCosz5xB/Ba+m4EsmBzbu8Hu455sSDF9PwK8DP4BLy/ATw0l7TdFVFJXCGxCSo5k5GzJYWYgUnB8Rjs+IaEBZi2paJH8dbwQTjcLi+58U5LH7Dd7iR/8x7tViQZOz5yMJBSIOftjx6VOhiXVPfQSo/6CZsomdD4np6TnlDOvGv+BTkn02yMHJkQdheHtqWz89T79eP7jb6YeZdkjytFIFlamb8Y+QpSyD3MOWysJmcE/jfHMrf2gIF1NPSxlJ1L4DrHwH4LyJetTjU1PIZdl3ljVAujGbR38Ec7nWswPBBqtR3xrPC010Y/w66W+SyLof1mVf+9TBQX4gCmFBQp37uGjdziyyn9j5nqY+zYQS8gidUODIOTFN3CeRfhYOr7GwL3rTriDAjMzc6ydi7znopnjey2DTDjR9n81Gz64vMF7rLo4L6UI/9f1HZ7XtFaybcPGhSCmthFH2UvCqzBqSEqX3pp0opgZ8DBofM8xE5/wAb8W+mIkCT8sKnoMzmPVZ/RHhb1mcsR1BXwzwIBkLx424gevrNdHVviDJ+YaUCLhYhz9NoWXzyMZ7JQvdD0+rPVU6kocLurJzuhoKnWtJGoRWg31K731B4J/aFdCsKuOzITG/3Y9PSLG5+h/o85ZvuPTIX/xLRJU8s56GdCqYobThqLALW3hhE4fjuL7eTzhUYQuDLg/sVWC62BV1rLqUvC6egGhacjYH/jzPsBX9Umwr39XqUjXc92TZxgvE7aDdpBJa4vkVzbIm34VCuglizm9cV4GImU7bNBntx92Gr3aiKlVCXRvuAd8GAozMxVLZqisFpILfdw6KXJIWSeoinuazKLr3ASbuHcXHDVhccK+jXmSL2B6pl5wTGiDs8oAvTL2HpgvkP7Hf4im2D9V1r7dZb+nem2mWGPz6GvhckP+HhM6M2fDzp6J0i6i+VfTwU/zQNhV0enOqvwhQ==';const _IH='dc6ff117e46a11f4edc20a9629ac61fe59b7da3b3ef2e215769f9792dbb36bc2';let _src;

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
