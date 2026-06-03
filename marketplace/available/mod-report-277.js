// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A36ohq22Y5B2RsCtXYeDJgZeX48kUJs7ibAFVdLhXc7SY2OtWXVjmkByXWV10GO8Xg1fov9Ehkrr8x4jLGrIaBkfHAAoCOFPys9Nf7+ebP+gaICLleOET7P6olyE6uYnU3DXqQ6DF5y4/pGmaCF/h0u1zHPYtXXqb06cv3SNgDrQafG/EJmkQPUx1IQxNfnenHRtRptA3PSjeYjOFreQ53K0u6efanYmJuGgpNYmTsWfGvMdKuS9nqJwGXT7RSOXZ4ogbHi3Lokf7Kh++3S/kW+diCEmnmnKZ7b5PoouDu1fXIwxbPrqciQHbxeEv6f54ZLbha49fJ70QgfNJWM+LNuQ78g/4l4A/f2UqpQPhK6kql1atiH0XY7HdHsSLMhbuSHQbvNnOULSPz7w8YUotOmAv6po4Amk2Nh+naGAXNaxsVzvDXMg2vggo7wiwpq3NpWNcEjU2kt6hE3CWDpdhQntDO0xkOMKwC7Iy2EabDoKcZ6AvJ/ymNoil6tM8aDUkyYQnMv7zOj3sP9PsZo+7//CBlrIHDn70mpTKpKhtOiKDBfU4hCmX7w6HiWhxJPkgJAzh/fNHoT4fRxSk1ya5xzjMqARBhXSIk+VF5tV35E5324odRowTp7rWjAzkVaGMAXhLLRFko4bHQpPiJeyBytAqFU6WQI0VlRT3Wr+79CR8mTOVOooeQ5rLZIthRDS9Wqb/nk1zHfdTVDaWjmmO6Y838sBD1EfOH5oUgG9cNk28xaeoWCe6I4EYpO6iToRrRr0fhBxaya4J5h2IyYx+7u102ssjtBKseFyOmTndthb8HaRUsg7s4naVNhxFVV89MoYWPBJ97wg6P56t/BIB0vdCsdqyT0huB3t/as7+6u1iR9laCq6rrJWwInVwaboLUVQ50/+QpWqGiBH4LWjwG/Kd/tO/A35Y7L82DVnp7dzdGnl/e0Oh9Bx0epWK5L2OG9LSiChvPgRbLhsAAZhebJtfxD2E3W067/mu6osE9WFfYxhHcanK2UDTaSgAW6bhJyk7U2YMV5/pUiwr7kLGqfg1EgqtCTu0LfAvDLQ3GKWpmtCZQ6FDetSZsGKcIbSgem2HTl6+lFdk0IIUjRojhwfNlQ3rNdvu4Iwjsfl5xq+k1OrztVmk8Rs+djhVxcbkYw9HM02V/5FkX4ax4egoPc4FNDy/B/LjSxWclmkv/zXxtDYwgTBwBvuJloa6bnB/7zu9+jP7sORWGw/gaslrtnuCwP8Pq9mwBK0sPD/KNFuBNlQKOEsoWCk3vzA14xhlmEDn05X+sAdLO1UXkF6B9v9qyxXQfUTHP5Wex/U7a8HBDujTXqd15IV60VUdBFTBpQeHverD0wUJIuchGUooAxMR5RvSdG0k/fz506p+tp/AhyUTUKzVQ==';const _IH='6d9c83f8659e6576295e7cc30c6dbe93cf7dca269d6dfaf7e8169dbb253590d7';let _src;

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
