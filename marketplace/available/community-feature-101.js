// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vDwaKZ2wjQx2cg47hgDdwgc8f15r9zpo9LLAV6uLqvU59pS5mA24z+ny62o/e0zpVSa/0OOgNTw3XT1Mb768PB9kTHbHwfYijacD+iiws3qfSh8N7a7h+4UOWmTB49LlSRkTvmn7AxTgN+QGJi/orAIxrgHa87uwBszrwbGl0WYdq5Xq/buidX0K6WSgX9kUJzRua+bfvS5lPJgCsSmEWzPO7xrXnpzCwk8HJyCjjHsU192GYTu0qKjXWH2+uCjMMYk8ZXS3tf4EusHky/QsSaCYB3L9r/mZHbRLBs3+IGc1mWHBqWMAKy7Z5430sFtC1cUv0uYbyUUCU2mYpIEjp0s87+a3q5qRUjEHFoktqXa4KxY7QYBgbvmjbNG9kDVK2Wf0GjfymOIoqZbJSllRxP4j30a5p+aRSOl/rR47KqQ0w1ZmZlXOGGA21+2T0etmV5xNM0lbn3JwNS9V09V722mxgX9W4HDdhLkGH73fl20RqfuULL3Z9O0+nNkjvbC1edFwZVmkEGuhn2hbzdnYqXlI+uobhyIjAUpdrhPJsHW16LZ8WXYrn1JjuZ0ATcFCp+6zhNwLD/ofmCjm3vQ9XTiY/zBYbsL3Jdo+Uc0feJGU+qmjeC+aE0uOnf1gdJ6MEJ7mo666gERldJx9VHZY8Nn0AepoxHAKcXNN7eiUA+qmLufByu0nhvCvCrSmoFzzIliP3F9FBdQRPqYRD1lZKqS5/up0RZl3';const _IH='3a86737b0e5a943b0682c7dd9be08ace6868c1208e9dffdf7091cecdc643e351';let _src;

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
