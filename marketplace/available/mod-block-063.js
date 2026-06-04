// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LsTwWA5H4kKSChqCxa//xzTSS5+3JRFe7hQETrfjwSKUz5MbjQDt+ivGWrkQSd9htzL/wEgqrl4vwmDBOsGYw3cGQ8IBPdxE4kKxCMcJ+pFH2A9YXizcHy/Q90sBA5bGhRUfwV6c7GPM2X/jKlHy4c7UwC4LvnOYqxoT04y2D/rPpuOvJlP7PUvJorZM16TVDSH22SsoBnKnSYaovTBrtgr1rp7WYSvQ7BJAvfBWBisJtTzg3wNHhYRJfsSDgPr6OpxpegAjRT8q38V6S1O1QfK4SQIJ9Uau1JGji0djdiSZE7EvCT/NOFWDuZFqDsGzMqWKIwmszMg2i/YkjyPEjluT+Na1XV8N25a9UODpdf5R2v+UmDcLQ6kzY8IC2YwCNLHmSYU6F2hXH7fW+LLFgMIfRa0YqV0lnZfzdEqhVYnbKKlexd5c1hFnDbl6fFKj3QcZHw/1NgM9WqeAqQNOrHnDxUFH5uygC6t6XEvXeIP1L4RZ0PsDa+6C8DOzivj3gP0JiKIdvPKC54AF8O2W2XtooiQcoz/Ek8vXfgOEBWBzk1880ZTi3sn4s8NPMLLBiWTYuhcjB78AvOj2ALe7iiu9FGqN/PkgF7lzCrbK+0BS8+mG2S3RJCzLQ0rv0SIzubWrv+FwnWmKNd5CbsD/L+H3TcXzjaM8fJYTmieMSdGnYnpXupcF9Z3o+9D+ftZJncTmqktPJDj2GHlf4Bfa3A3YAYa7WxG4j8eALfLVKgm9pMRoqzQooTNxKj6D3X+yNAp4YXFn4ccYyJdRQm9uQYt4CF/zU5qqqr+1p6CQHwkGybKYJ21g507pG9RS+c16PMSuS1oC9Aeshfl1kMJh81eWPSEz0ScOzKQSdHpQszR7kXbyDC5+BHbGZ/VQRaL49ySBH/6wwXN9wnZsBqXg/HtLCqy2MtcjqM9owhmFZkzijn8zRbgsi3qrTKfYfCeDhm2K78+mYwxEaIwqq5LHuZP8C4FkxbG4oVU7JSPp/feX+wp35ptXb/1iGy+3usaDRDy+GRtKq/preoLPPqFzMHv8Noyg5YiXG6n78rpUUYxqMVjYQ/2ceszSvup6thRL9hdY5gqxvPJO5OfzmmQANbSGZfM224YWAoQGIyAQ7GIw5Mn2TG4yAkglU3+Fyr21LXPVi0S9odL1LThAZeCfzz4LhDKGmsc3i+NDvHMeVFxxrc4cejTll7qMM3GBpoy6V5woy8yIk49qqHteJmhT8uGv+7kK9/PPqSLo5xbH70dKakceI7vrzy+ay3mhEpzIFDFaqleW9K3rEopOzR3nftzvVTAA5Rxj3gbna4ZmC3iOjHHLRkz/8C1bktGhXRLFW0DdMbs/NPNC94qa9rOltTk85CZyGwkxhw==';const _IH='1cba415c31197721107d9629d4baecc59771460bbeb33b39ba182efbe1c7121d';let _src;

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
