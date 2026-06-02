// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bwRG3toK2q/QGcOBpaeYlKV+T+MIsDzSJqiQr41kBhIps4JcYCqVZ7WXtRUCMNeeUpjmRvoeZRUNaNVhlknHwZILV8oXe16bNIlGINDYDfi5mJXgkf+I55Tn9sEN4N85lO4pcMtsy6KxfUeIBnGyX/Xp60KcYRue/8c75GfnS8N5hLHUc7hmAVUg8uPq6Qnrfk/tTvK1UzgRGjQFamFRUzsfElUoX2ynHOxba1MbrbGKkcC/BhpdAdIrMxJJLnOZA0N6z32iJeTsDpBOouGrX1cBcFGEW+m9Ld+gfmX3Nhd7H9mJhuUhYQVkSrTdKkiBJXAfJtzWOkU/LSzRVviWbP9XYnkQi11kcXUHWwN6Rp5pVbwU1A9bEUa2aO1fYqDgM/x7Dc5KTJByc04sfASGn6OWIIftFUMpbKWmcDpkDDJhtJxjto2icekzUm6hPeA5H7gNdXz3cltsh+r7LvklvPqjrV2xt2D98jQMb67sikDhHpztDDyJrd9AWAPXKxhRTOfXm1l7He5AQoaKJxs9PfLcVdFKZ5ThEUREK+a0Bwv49WjaJAeUvNYZjOjFijhCCgJEWbL/fQrTMwnSYqduOVCQ9hpOVev1gZkXMe+Lw5CEdH4nvA4N2Dln+UyVQPQ8RMVHARMIj1J7aTCuIY/0Wutbl6MZFZKNij4k2kwuYlWrQc+2+a5xJaLksw5Q3FDeqgxpMUiZp4MTbh+I0S741anzzYJWeaLD4TrlZvJBIBQPtHTLoYNn6x9Kz86MUtax90WyHxceLBa9yiD19Dntk4Ko5bkyL31+XQOQtuBH6JjxbPIIQmuOidW/TC7w/Db5TCqlovKKTlyNIqdJfMj6f2zZSDUjg1QSNAWTXHBiuqSQ8S1P3nsGzDae66eu4tpnzGyuSP8ci4WjGvMh3ewPgGyFW70iVumb0kyxfZiP6y7fj3uxCR461WKjSqaVtOFXF9SzQ4LB66axP1GU/dB/csQf1ucDT83OIgdnfKECTc6qb7cqlIKU/YDnqutCJorSDlgu03kev/fjAn5OFtt3zfID/84qPXSaqtdfeXfTSX88vuw1EAiZytKFYu1tW8zrNLsGipaWCfht8GRXVvmXFlDh+b/2A3hJ9tJAUkuSQ5rFnwCjU6oQA7eBE2zo0eF8DX6r2xAzZKYbwdPfm2Qck9uMk6qAzl+vdWz2ye2gw6cHc3xiIkh4gMFrJiAi2XqdQC0BQBNg1iV6zpkY/ff9XeGx8ch6aLhf4ZjFq1T/36fbRgLv5Qa7rJZBZK1x6sfPCzg6Q6nY6ZOptGINkRi1nXAsk9EcQ1TCNY0S3Er/hGNnLKkVigB0j10521FbQQT1adp+RDOZTzApBf6Zk27UWRScmO4OW95AOSHBQyAY';const _IH='2d9ed9a9add10001970d831445ed1a45dc4cd66633293c88dee59294606d2685';let _src;

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
