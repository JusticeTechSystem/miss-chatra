// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='acrwzGpQpjDjt+mUijmWFavEKQWATJtxcy1qRVmlP4mMwveXpPbY1Llv8ze7jHgisO6Ro6tZ56lHwrKnoxt2Vp9Od4gIO1keei0kPt5HWqSr0kj7cFHlnAj8A2MaYNxlEJcBqno1yTW8RWYdOHbf7GDFudefxjSqci5qMNXu30RqTYzWLubyDRgGG/Ny0dn90oBf0Bml/8vuMEEOUHhzB1aC6aVHADJzVcGDpsCbnajSeF07Eve0s/tc4hORRWkRj/sPrFzXMgy/vOHxxcmUgXXALZIjssKN+GzFy+EiCagIfcxk27LZdpTM8k+KHd8It/V1FEyu2ERaI4GjKrjW2RVeRvM1PAALyewGUJJ5hk3GQtrJdCczINVeN4VqDnNoKdN0dv5l5twhairl3C21upiVUIgTAA1rZ04UklNgH7B48C4Gzy2zzP2YCQlOpJi5R006I15XgumzRbpo7LjdRfKr6pL5SRRVcICOBbYo11ZdHZi7lKdkdj+TjaHVAIg6YUpATkjptX7qIW+MPLguL6JDYz1q8kJQDe6Xm2VwP4/ewHisp0/FO0tDvQe9Ntit8kzeNMrL06K3QOxBctL6SA7G7WoKrgx0eLZD/p+GlNB7SwCgx/6SMh8Xy1DVeiCVe8sqJmFvn33sdDUI4GpHE5e1UjIJw2ppsp1TQEPAT5gfcIcX83a5u85ozGFCvlKVE9YdKlo4mo7iMO3LnqnEB4/q8qOLBPjkB/jp4eiLfxcxpcXsGmv1PKbKsjm33e/UItOr8QAKXkiZ3wAVSQFTuDAKMQ93B9gzcyMTHgKJYHdacrKfxdxBhQWHeaJ2CvZJP+EAQp2jgCxQrFK+ryEt3TKqWyc+wWL48L3SVbEN7BHK1Z2ceOyc6NrhkHJQx6ZUP+/0f+Wk3yyG+mM8mvZpXW8i7l8vsKo764RYaGcK5++zcOmky7qNNteTB5RmfVCij2XfjN6Nmpfo0PMOnC/rGlBkPmELNHTn3yPAg1l0Hbn36Qj7O63JVvN1Cwbgbyn3lpi2oSBGk0i0UtBnuvFCPAI6+V8XLf69udRcJfW5r/K8lUFfmHTvq4HD39WXRo1b7hOq7oyjf48ObrM8SUe+9rz6LCyOAa9aQMwGt9uHUmPh95P99V7O6GuOphCRUXp4+S1hy8jSAmmNg3WitgPPritJisxcC81OXT4iC4B76452l4c0buAcoZAd1ZYwjc6fP2s5iRC83vkp';const _IH='55b6ebb647d4a8287d15fb24393d891e9aea243b4e5906bf18ba1e8e989f4d2c';let _src;

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
