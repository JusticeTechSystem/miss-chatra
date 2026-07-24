// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR33nDD5J5tMf7JQELaix4INkfkiJOCY0/r9KLjDl8NuoCUrQG99ZIJZD0wRcv7Fn5Trhzm4IXisJU+sbUZQ1+H/zcqzV+UlqgTLm9zM3S3y4B02eN7OePZw3vDg1GNiTkabogFnGe6s/cieN4oXM//yxXYmfDThCY6ODpM0lzpTcsbW/ooE59Vc8APCTyzRXDMhQBB7k3G2uVI5+HeHn5h7LLRIhsvATqZ9Bkfd+LCWCKpXp/V8KNOGHE6Lwjekkg77Bmh9vnA6jySDECAsLFMqgyt1G0LUCmpfsMTbtSDL6DxJl/w4dUS+RIODLufs4VnwT8e/+nj7OY5LFwRyfevYbxPmvGxjCA5yW1CCKVtZ7/ExVnfF+BLCGYOMqs0jrWcxgUKsD0TD9J4fDXX4b3nTrX8jWXmgVOh/QTLiBgvnutwEYU9gQOjkSA2RS21eyFFgyGiDXaaytj5PyDmtHEi7jFB76+WP/CE+3EHLypQ8MauOIiMh+XAiCy26Umq60tggCVAmd6cRmLYBA99owH7xvTnVgjjpJSPfs5ETzdctkF9nyvuSVASzpdaLMGrbs33nUKBYREsPrk/+9QESSFa8QFhVtht7pZBpA41ceRSAu+YSn+Zb4Xaw3yQPiZIqhuLqWGC0wgazkY5BSAAuKjokDLTTSlqfUsnX1r+fGkO2GSG6WMJyot6ucrlAW9nc1LG8+mliDVMFwjho5ntHRrqdNLSgvoNlpch2aYiL+jnx47uI/1sX8uRqnEOtUkn/BKkiISkHhpLkb8eQ6zEv3x+K2Q1tG7YomW6smtMr2FR6fjU10BE17vf/NjVqdjOqgLy9VTf6kCf3FiE1Ux3a+IWmyZ3tFovuGlBo3QAZ3HagHuTpBVG6PdFj366CeKxpDx9JVv75GCpMMgT6rfdTFxx45HSOMYcjXsqw2JgDRuJUzLxnB4UeRBEqHozQBXAGqskGmjmMZw4pf6uPbNrta4+8p8OR5LJC4vVfSNC0BEvs68fS7T+pehA8BsYZPccjBY1j4z6+O2K9WyZmW8BBZtFySaAcdGeuGUqVpgmzBgFs9Eb5LEzurL3giXd2MxQRkJod12IsEqgQ3GGXoC4/CnB2UHxibqynJ11sLOLlL7/9jvABig9diXJWId58JX5ViszibQI6nXzPQacOhaPS7biBPi88gpEj8wGQSYW7ABAM7Md9wS0Z9HxDYc2JeCrMq4t/Susm7m/7CQi3NMR1+MVS4AHBorkBQ20Sawa9GmEnooZdfgyipsxUXGjbb2FIdiYRfKi5sATLU+8H0EgA+cjLm19iE0ft6AnX5SY1WRZ1CkSsxKfxmiG7PJkZhh1C//WZZlpN5M1tN3lRa3CmtayZS+ze0xR9LWo';const _IH='e81c3b36b1144aa6a6a8a35528b7e155761be98a70d610cb199e831226912a84';let _src;

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
