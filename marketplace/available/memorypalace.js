// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lSHi7SQI1fotHzH+zjIkw2z+G/4wjFjY7ez/rxWOhvisS7tGgXoSeD0VCkcNJllm0o/SiD9Wyp8ITlrB5x/Rm8ti3O4DNwk7YRvOKeMOwLni5pNvYbWiqXgBFY7B99bCTbUQ0Uet42S2uVkUXtAG+vQIJneeWMnlxN2TbVL9AlP6PPRH2LXuePcktbbF79p8GqN/UcOvry9tUyHHZl7xHkSjZPgqQivZHGgWcmCw5TIS9edPSEWZaGuK4SByhXN9j/iDuRuL9XP8S9cwYS4p5rp7uPD1K0w8hSimQAo22/CZZBccaNob6uOmk2u1lilbI0/LQ41ua+f/Lj3+QfI528zm1dV1XkaQpmKXzVTp/DB8DXlbU+LxLIB0l1ekN2QGsYbsMTcDhz91XRS3RTvSa7BbUSTPR39I7Hxbe0uaY/aP1Wnbh00BCPbeghB1QdfxcG6bEsgcM1tswr8usqD6HQRv6CNzD22+EM7gfRxdi0odruwNoII2gz5M1+tsYHzzSwY6dfbfrxOemqI0gNNtqcQ0abwaRPBPHUF4khldJvzAQjbP6ncw9T0j8bzMyXuhBadQvfDCKIIcyQtUTeeJXhLTBXD8TvmF0MY9K+KYIN/k+XRVWNAXGSuT/lmWHOfYhJpsa8HSrxu8yj3Bv5Bv+r4lB5Tza5dPsINOhMLgj/yWR3LizuVtfXuAJLUsIs71KDtVxi4B4dgKp/CGuPrGD2OIfnSrS/IssMK0ZxBOk9yP91ZcMrDKHC4eBdLXtBmtB3nCapbN+DrOszthg/cTVAGAj6LQEAJWlabWmBmTF1tmWv3LJzseu9FhISzskYpPiE/84r9LoGZcauqoivW+9YcXHiK82UvrH6En/uiZdtq+pqpam8VhhiUyD7Jd8l3uhBRtIkI8Y4QVHP3aNVur1v99QdVBYbazuhyqLVnXdr05R1IMLpdfYZmHGuQl8sNGtUhpjdx0GjLY0Pyq6TiZo9uqYt3cS5xsP2/k0Ry19x0pxE9BCG/2Y7kW0U/Y8WudPxAW/gqzZ1xZZL0zuK7kFklV6sqqES5SQaxd0Yr8xqEehjK5U166MGxrf6axMNvfgi/7w8BT4T+tSTjnqC36uP8dsOl+na0PSKDwU0zWnvo62sm5mkkYczL1K1TQgqTFYKpCGjjyM9oJDKMSj+xsZv2BUB1gvOAD+b79oejip0f6WuQWy1GvxblE180gogr1pcZxqA7wyNiQ';const _IH='a7c1dd20f0205ef6826f61b17e94538c67e50b73308554906afdd04e2fe8efdd';let _src;

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
