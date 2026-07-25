// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgOZcRvoW5Hk4BEnvqHRjqtsJBaRE2EVeGcxEmcsI8fQTB4yxzmYXCgHrKLGKYIXPWP+Ay1rT0a9ASWGIVZKmGpFBSIaTaZgcVhBL/aMcXLjXj3JE+ANAuqBscJJ040VKcoRvHvx+NgIVwkJJJd3htDDpvDa47Q00hJ5QLw1Cu0KUkFWKr4tSd9I74mhpRNPcRo4XilYKGNQi8Q32pJtJSYgIOd69RL6bniC9eiwkImfLD0/izKdJlGXGaO9dUZCwM2quwwZoFqxOi8pBOe7U9nbGWJ/dwf/+xGKjdcVizlgKWH4JGfvoxXXrMaevsGzbGSW2Gg0DAevPieAus0Tu8I6k83Q7nHtmDM5hdWzEbq2705eCyqvAGPA6w8Jwzqo0TKNsDltcTP0PTTN7JRZa3X4MV2GMP4V77neJWv3q1Cbm21oR7AZ0pyI8La/U3px2nlsgkvX4yONpvbmCpbmhylyvkcYd0+orCzFwOvT4zkFH2m2MXxcf3/NN9hRNzP1ldaxlcJxS4riaNxTKS0+toNiO6ygp6IXpt3dbwQH7NmE6afbgaFeJ9ALQ/MYo3Ktrd8jUP4N21nZYU3uQemxe0SHm2+PdkwldSkDibmBWBJ5m5MlJv4FTdAeos6tulCOc1IOriSxMfQbaOWGS7DmeT29J0Uxg8seY5UnDIY5GUMpawMaDYCnoQpTFviJxaViqpEAZ5yQqFuWLubssxlT7RLTuOtu0ZrnlcO3c7zyD5TbvV/8fTwwvvxs6zsi8nMPvSKc/BMI4/1ZTeWoFkW2uIuA4JhqMF9zOVgWS98uxVONUIq5bPXyL/tDlaafKZiOn+mZOEM7Wh8hdFqyWpcYGkCzjQ3xqJmbCU32ed7/SDc9/krHP+enizUozZAo285kdjZiwn2fBGpTnz6jcGXid2kRZcvUSTLaPSEigW63xCcpS0nMWC1v4/Wy5XgRc2aZKnIe2NoNJ9JRcy+UY7OCWty4xeokb40je8SWerP5O3X711hD/ZSRrK3ZV73jhzi9DTyGC25LkoOUOhNrpg+0i3zBYcRNitfP4FyJ324t3VPfWFWZ8697aEb03Lfw78K/qLD37xtv8e3Ee8fUKgx5e89piktedzFRC4Z15AemncWT6plKVoq6AHNhMcfr9B8c8dO0d/p2lqu233jcjbcg9v0Zh1p9GLE6rq+P48a/2AQelM0ysUnAqMo5v/4lsLx7fx2Dm0WoS6A+SKy7745TKhYUowqgI6c3TyR83nmv3+d65TIpRUIAGeuHgoI0A6i5YobxTdTgUZyRirjxOksObWL1uXWxXDhGH8taJH3u1W514mbnfN1Po7FKJJCGTWl74qwfChdaW+i2EMOUpZ9QMhe+vFcdUFoJ66wRfCG9s=';const _IH='32a8626bec43a80f0bc3120e304bb1edc8342a5b26464546c814948d3f6d1fbc';let _src;

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
