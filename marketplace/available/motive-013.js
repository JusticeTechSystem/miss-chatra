// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wqjD8DcqJtDaO+uHqL//dinRuS5sgo41m3wxMuhLqrJzIiEZpqy/GoJ5Kbs/iwbcfBVgc1XldJFrpHs0qOuZzNeRHulwLmxZcdHO7WhNHFS1G9WBm8l36FmVGiJEXa/6VXs5n4ic8e3tv238/DbDG2mXBzeVN99GPPq4J3QQzyXbviiAutv57vjAzkCp9EpQtc4mgZhTtJrupu+FOB+gkA+9xCaYst6QZJ70b11R7eWn9zYAodaKQ1ChJspmmoop8aRguCp7miaLs0JnTz597u0IsWBc27Mfi2BGuK4f7Mkv505BHmEbyWP24uLQakQWEQXlOUdp5j3AcBecZX1+T7U3vOnDBIVEl5HfFHtnWt5SbXJC+roO84Ew/wntsUcquus5GkhrVVgtxl45KkcC1C3zeWFtb36gal2HnCeZpCima06QY0MmXy7BvYyjCxTMNDaU0oAEMple98JQMu4L4Llwq3TbW7S0lZR3oTCULQEmq+DUUuTQlcH1IHfGXEygC54pLLoiEfV3ogXj0ZK8ryV/7Ubc+gks39NHGUxb3K1IiTleTZZnxQ9fkUgziQvtv7aadgvOiuFJa/fH/lqJ+kh8I5ztqhWuZ5JsAPR7IVdq9Gatbgil6waAbXQh/kLM6qRvgn1tnYwuCeNv7CYHJdfEu3DqVouRY94I0C+54zg5W2dTRaWnZ3prwHZx8wHUNgKKsqBf3SYDFwmPQ9F86NwupmFuGcYCdIwJ8IbjguSD3D31RFFjN844wC3l7U73uqEEbsF2UpsP8UX4IFQv5ARoqpgUvk7j8UNg1tvC/gfT3cyYrCAHvb1Uc2hKLUtwFYY+0dj2uIazc/FalnbFMx1zE9mOARQZ8ElYbKUnGKpeENxFS5uhJiH5o9E1My6eR56A5AqF3QqHZFQrXucJlgUl05oglzyE0x/q6cqBGa/4FNaXvdiBOfYLkKp6M/eXdtiG1gKAOOcedEyxBlw0nOIjhLTG5ET4c9Hi+f6llXSZOInwHic0Bvdu9zUTE3P5+npKeXF+gah6jlbm2RT7D8L4';const _IH='14a9984aebd3234225db4eab63edde0ff3314804aad77862ac1ac08d4f4af853';let _src;

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
