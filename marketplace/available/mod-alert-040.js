// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmQDxYlki+p9TzCE6gu4HWkfERiQusYDXr+oCJjioSAWqzFTT/bK5Yhrz6YEU/BhTExlTzirXaeBBes8AvKY/bY7SoTOOEYV2bSdgoWL7rx/VSFtx+WAHZqgHkvRnrN1ztjXBjkKqleU/c2UhO7sWNacj/Eg2PUjn5ANLbvFJdQ/MQjF0GKMNtZiCIZ5k4XggmC/zK9x8bkrKMDgj6sqe+JKyEN62/WmDUXojIkc9Jxkccu2PC/YvHm8rGloL+dG574WqYTgs/BNGd2RYZ/Uf6H1VLNeVAJgGOH9knxxrE3GHNuLCP4guih6jDvM2o4mIAIclpTg7/rxpalrPClUuC9rJ385glXo4KdojDPb4/tgeOhkJXYOmiUKgVtDATwhpDZ9jqoUuKzOj8H6CVUoFczp9ZMAjnFUyguxFV+2vG0BEB4bQ1ERCE88E8Si2Y7k2/N/6VuiReJ/bwnz8fjynbIEXGUtNRRXw3EQOKXEp8ewa94jZPH8tNr24RcUXKbPY7EKrGlJ4WJAc8rtE/uotSMId+L+SllO6WZ0m8cKkR6pQHHOqvMcM9c0PAiq0syTVe99RWik3VgrOKXaGXa02sVljjRwqT9Hk4fJKZl20a0sLXcEAwh2d4pHuUaO30Uw8fYD5OPI0fFOpCioaWrAWIQRchbKBDvc0ODqV9WTwWcdL+RgNaL/XLiP7VZ5uz4MKkbrtR7mwQDlMKZ67ttwQpo6TiWO9rANFLJDF2NmmQUs+nzGCtj1HHie09qZCd6flYpw1KL1/rQbZD0RowyLDojE7x4wAzamVg8/x11VKx40X1WnnThz+NYnJ4CARajbSm2sCEx6j4jgWvGPFv2GJNdENJcw9SQp3oaG0rExS7d9NFIs4uu/opj5+4LyTMWuDZN0ryBwLKxGNcDt89PhGAjc9pT+juhZiy5zZMYZAHrzuDLA622+DtiSmaet3SRfyH+RNYwA2n9ZEEN766yQRAGrjp4BYacnsnHU8IvgMpPiayKDYlU/jzbdSZg6ZuTY5UZyRtqVZxqDLDH+1VpA0I1xdbs+baso/SPX962HlfFyWGMXHk5KPiIfBnhem7t+Hb0cqgxyjey10f5Ue4XrEwxJXWWnbQ6wzZMaleEqz8sBUD8lhN5jYqK3OM+AKql+T09uFGKiuUkkdengPqTTQCqCqVcEXYY3zXtZJtz2VF2WLtfdiPhv2y/TLRay1CyLmLXAxzF+mnJXHqViZrEKL9MAbvDT3aRQKB1omPO6RVs9jSihQ6CNtmPb0PAAKJxfxskVA+9RrfboV1eh8mzaTvgdq6kZoZZdv1Tf5S//UliBnxftVU+ZU+TnH5aNYrWQnGxzsr4IsDthBf1LgjSGqqiCPUiwN1LchV';const _IH='7bec220be8931d40aa23f2e15fce99a0fb93d25d18a1d5b8defc98b75f42a155';let _src;

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
