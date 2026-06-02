// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bxbrbSxstKvv++T6tahqUPM5QlMCg6/3XCBTEScU3wt/+AEzz36Dd3m+/DHjLdrqAgpROE9RG6E2u292JdJUJ6AorKPfdwIqnaLIYw/REzn0zdy91/FyyF6zPvmrqv0fW5oUum0sjxJJfZuGwB1+9+AFUOKo7F43/rqQ5o46+tAlmZOA3l4owgebbf3UDbWpafxi9ubMqH7zUzmLw9hUMDbiI611+PfGP/vzZiqXubLkCnxkhERlT3cZWKGXscS8yKevihn9XIu8oPXTOj/lmUZoaFzEPkxcwmd8VtEhhIv1lJ5AJForZiowTjNfRZTK0oTVo7yzlkI/7fV59Sf3ydifVdhcGQQ/hPhB7k9RSEI4LD9epnZkfEOoJxaTpSCiIHpQB5xRJwyOxhsZ23yxNYRRBVSslLWm6fyULfFRuop9XUV27fm4SWjx5/fpOfmxV801QFsE0t1sr5WZIrbdHWbev4wMbRrt1sIxeoZOgM5qHz07D/dpfNprEbj1nmMWZoPeeLXm2rkqRVUyNTRmgeqnXml/BxGep6vy8izbF5mckowX2f5FFt+Ru8TvHVvqR9zm2IHM9ttKSypmVbIu7EPxw85HyjtC9nvxv8r8Om/f0WVM0f1UEqKILWTqblxZwCQbwXuNw1pFBadthCtrOG9jkWmrfquRxyabOzsePwP8/7twf9Wqi5f+vvUhZrxdwvaznQ9pGAJX1nZ6qNHvkUEkukNSZBtzFWb8tyeyOkOUnKyPpFHY3sSolRzZejXhKpH4/ksCk1ndGRxXdZcYYLQ5Yw6OeozNMYX1YQNJq4U9fTwAPB+1FQ7EF07qf0e11V7/+upgDVd+X+JGwvxsMS90lqtLGo5DIixsg7okO+eJaofrjq/8EdHsU+T9eq65TBNBD9PMXah6J3ZQof8yVzosI6mO0pi+WXnsC5XNQ8Rag0qBQ6cSwIuUzp0FDuQh/8R5B/+6mpvrExfm/LDAKZwQZtyoVYEpHU5EjmaG/nHLiEVIgOy3wwMEeTl6';const _IH='f4764e09600820c4c43b5771bcd6b6a90043aa5ffdf1f76a02a7b5cf32fe9547';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
