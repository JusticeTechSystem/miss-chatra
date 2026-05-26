// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+yZmha+Sh05KWCl0UQd8vEkKK4QlTYk5fRO1MxP6CCiGMpFt1E1ZQpGq5mm1QpVfssIjAQy6/xzJXU8mrg5jy22rovsViEVcZ/DTvWAM1q+1vmDFFLL/PD3lBCRXd4lhx9CzH7wmU8ukFp1jY+ZP5CtKeYpKyI9exD3CZe9Kjvt1ElxZWmQnXfe9PjTjq5EFPyl/9mVizDHuEzuzoaH6NgzAxls6WPGoHGx7gR+XQAKqKYkhEovslfF9Ix36idW9rUcC66E8pwTcEirEtDX6O/hLMAg2FVgGablu7MigqaOmyNVbGqrSarH8aG55nNVkRj+IjOkiSW93dioywZmX2ZARd/6zGTIYIf0i2vdpMUK41y6O4xf8OYu2bbf8MxykF9DO46bUCkmPI801CskDuclK89o6DgO7+B3c4n7M39dqzObYGQL5XyIZET9wRakMxlqtEBIQxN0OjE6+RUIeiHv3me9ncpsUd0QtEClwTdikicfk83WWv7AaeMlJa+HWeTkLBwnW5iCmDxsD8PfVk0NtsXzUmwAm+rppnoxAywJLlVJBv3qUH94AFWQDfDYGWqLCj/hJBvGBKi+Aq03kJ8vcsT7jUM39Eha95u1U6fSVgNQVkW/2tzXmBqSFnXUEyd+m95uE+Rr4GKUUpeBoY4R7o16BFVOwDcR00tDAlCt7U2tAsJulV22Jr5rhEC51P9/SqlPjPEaqNN2xnof84WHtDqcxUKr8VEQ2CI/LQE0GSrQoo25rMky/xX1o3nxFGiFLl9LXtLNpEVzvFsQEHr6poOUHn4hxynMzDl1hnV+nIdXvZKb1rqD7ZvH0bOba3kSBh+HMzVtSItZLECseWmRbPblA6jMQv4BKb2ZY00iEwtL24B4HtCKZRBlFOJ5IaNfX1jnMHDdhWFYS0xhkhCNSSfpa0DAVsTsvlXgvdNwliVGtRb3CxZduufyesuud6OxDwEZRAFSh5jNC/ObN8zoUdcr+ykJ50w9UqWPwu8HpKe1bvMNAINKO0fFxJ1OTsD+QwJ1fAUDn/jnLmNWq3crwrL7LAI9XWGusDnKKc6M1l6W1IUHX18GdJEW7dPdHoy+aqz/uWXxFoG+oAj4Mz9glDgd6t+rxy6LkXgFoCCoH8/nkVHL9JXF2sAZNWdb7PVw0w01i0eoobVDgHgIOAzbXAu1BWhwzmSu0nuznJaRa7cW8/XkD7GlV5MnxFX4rRMKU2qkAFHfHd2fn';const _IH='ab31e08458ef8f9d9a14ad55de0aed700ade50ac8217387d50ca861466874262';let _src;

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
