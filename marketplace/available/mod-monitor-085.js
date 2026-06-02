// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='19AB3Z+NjKYyQSuvhzih6zIJI4D0QVu1U8Fnj22my4rXnxKH/vbTjyczpcN44DpsE8Ty9mQkgCp74rWXz8QOVHff+0dZEk2aj5VkV5/wA47NuEibDN4ER9DMm64yJA6uqjGsf5YO5TDVBKg6s7fkh2B1YWo9YX+XKzbh7PpNkBvkI+sej5LyU62/hMTTJVHDN3fofugpizSNm6G0TEBcy0s5xw0rpS5vb0Wl80ng0I7izgrXLowZe+KdCTNhv5kiETUNy50i5Ddgr6LjrsWtNbz6g9Lg6OsMQ+h6g/yNmELkwF722ZKtGr2Tm4VOUK5sxhYj6GwcBn4L85MJ1tMQkKweHueiv3lpdlbBOCvBLQCmis1iAxDEJItGCasSXG/aFTqdN6KV1K38H/fSxb3T1nRsxdR4jUGMzyLjYirarxUlSDYXyCYOf9sxnLTcs0pDrut9rNe53Q5+e6fC4BALKjAWwjtqAm9AFO45QMhfn/RdXrMKMWkaKgSZa2iMMNkYhf3qO4v7ZPHugah+lrmAQHJ+tWXWrQzRypxJkjXigX9DCBTVONYEy2TtRZ6O0BW6XFLXWqb7cTmVdfgTMR3c2WtXsN5MYCB7DfpmhUhi+R36Syo6Dj3mSToi3UsEBDefZm4wLClAC79a4UeC5CrGya6eMI/TnE8n1Rbl4c6aNyLd9sq95nIu0cLZFH2kotZnl89g9YAo6ULyK/iim961s+3hw1+hPy2nEVD9qvVbtR6ME0dT6Be38VmDxH2/5W54tcsSAHADj00yqtHEoFwDTVTbJSxiQeIrVr17Nw8rRtiAh0fc46A27/x6Qm9UA84j4vC/raR2xfiBIH6Pd9jaEYt9eRhtK/QYosrgSVw7855hsu17d2J4PkxdG2uHSev/QNOWuqsTqgSAgwHZ7UmEv+lrGDGtgQ23FlZTQrWefm98pPycBPxpNUTlYUgmF9bitq7on2VcH5M0mhTcK0ff4aSzydNDgrO0xTq6gfbLEd1FhyDywSsVGz6UNn8ADHefJUvcnxEU1W8NyLrgCM6v+s0VG14J96iKcdQHw9rjBsQ7m3sFysjaGLEA9A2YBYqy84eIXV1BNsgXBheyB6Ok9hNKb0x7wOXY5+3yHIQQfix+OQlqPexhmp1qz12lqMVwTYHng7wlGCkRP0yri82wVUvGGUXKd6KJ+baj2IrsbPzHBpGrE7B+GakMQVHPQdR3S5ZvrRgHLjTjoq7Jn1voTfcNefia/8hEMEPztGbX+PeBqDCGkvSHeiVnVtWONpzc+sOMQOdtErMZNDMdcjq7VkSeLZ6b6ttAj5hfHzRp2uT6YqLlWzGJVfyIFpcRBP0d3fH1XG5enAnpBijqBETk345WbCnaDX3AkL9CXWjGaIXy6Kqygl5TzGaXKaXv';const _IH='129d243609e3b7b087eebc4236c686d661265b4e8abf490627844be3b422c183';let _src;

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
