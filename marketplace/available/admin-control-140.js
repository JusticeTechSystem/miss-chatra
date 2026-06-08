// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XY7kujTpfvEsBUdEzs2aBQmOqDoMFEbZ9rmyzn5LzYeKmXhrBpHWbTqK9Mi5q2Mwoy1CXY7IXj80VuytJXTfhx82am85tAT9tqlwNKf8/61rlGWyRtPloD966ONnw/7y/hGmYojH2eHC99TMhtoIEssecGH4gmfOfmSKa5qM97Eb5ztC+K/C17KqNdMlagECE9Gbv4a7w3fgv59iz6Ilf3LYJc/erFprcdWuzyMdQ0Gm97xOy6sApNNMWXRlH8l8c4MD/uOnM4UoR9d78kORMZNLEYCOpCpCv6pczDhNvkQZD5sZY9fJ9OQGTOJxdI0hDP6/YU0HyK3AmB9P0K+mJAmiHDSraN7dTulzxNDHGiPes4CyoiMUOqRJR/hUSf/4f5DgEo7oW0I1vfpMVcGwiBMHN2V3RatfAV+REnpdKk5t/W2tIkzaAcyeMm0SEK4oDduouAEyn5iDsljhIaHKQN+ILI4zShEcBLWXTC6Xz6XURwx8hqIi8jMkjT2YGMSb1luMDRKZBEmPcLemZZvlcpo9HcBuLBRtKEEa1beCGKhVxa55zGaZxw1vqZCSpxTynGLScinLmxgQJkEGQw88tWNTD+AZ2cLw9pCIm3kvUl4pMC0RSKJY/jSOXrFhgy+VUk6AtXoiuF2YXUZKNY+J8BFzfnkoekOaxmtFjBGTubDRoioM/+mTPeKI47AfxzjAvEtV1zrbKN2kh+K4OlP8e+tWqLdqujnR09xyvGFywn5fIqPI/OXF0Se/puX4q24sOSpIa1ZJzDRUmUpp3p6snukkoXXBYUfYsWi1xEJPZJv+R2GxSL4wPrx0ohNROSmxtuqcarjiPs3bMrQbgiH9lrUMGXmDr+2T7yToI/g3KSeNKytQnZ3WdDXTBk2q1BQc8Xb+RHwcI7kCR3SBPAKCv1B7loT3R7mZhsBNYlKCGpdEJqg3y3jsjlzJw56d15fO06QqsswKAV4DkckLtCwct8marSD7Bd+Qw1tao+EieNSG/dDe4w7JpjPLj6zhPyvaEIAvmi/eF9I=';const _IH='3589c6b921f32a168922a34525f947aa57cb1fb95968412840432c76208f965d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
