// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='80mM7ErnkgsY3VqcQJiHAeXOSiEd61RB8c0odi4/rp0yxrL/jcuCJVfMXFiRuwpVk3SD8x2pYunKWpLxblBckKAd6J3DQjyzITXuCa4nEnjylqT+xsWkWSXx+WJmR3pUbTBof2tFRUrwuBa48T+lqqPm99SVbz1S40dTWkAzleaWwfR6cK5OEW37Ejzh8GYtqBkDHgS5U9hDT1ulFkJzXKVHcSQtulFu/KMxB2FgqiXgG7IAb68Ww2jdFLsi1z9uRz5qyHg6R3zeHCVV4SaWeF4PfjL8smYf8bx65SYZszfEilv9ZNFms/q2FdqswlsPKmPtvFTpjAqEWHIFzldgyKz0zNwNbzR6itaxe5atXXDNTlMxXEUC4fiQP/ZpQVFU14oTieD0IS4/9JVXLc7tpv0rXnzC3qIs7elVOcciO2v2kYbdqZt8Prcf5x/eigU5Vp8MxHFr5QqRbgPnoa4WkiC1jQufj+sRFdCzbWkt0zyE/c6MSG3FRgZUngMrlI3KZBsGmPaW2LMQB0aAF803mOo+cQgEADPjavoWQV0tf1xiqGXAb1MDE/9eLh51zcFlhW0sXePF9uWprE+kE3ztfqWDlwc6SEvOBKEJWCcUyWHmVa5RGAy+EfDmSZQQX7DqMGGDlQ/wSgDgl+WWbkT8ogKRa3U9Azi6DrMCuChZ0+A2YVJbkdJMhUhnlVoWuW+znbuiM6DlVZqRn1Leh5abuT8P/dI07yeBmPA58cIprNJBM+6ED6rYMQ0oIb9WnfADiPM9TWbIpF8T9dH8mfAUvcQsE7+W1IJ9n5HzkH0ZCgUtZFsDUtUQ5wtxlKbBdHa1URY+85j35GMpYPrnUqfUriDja1JOFr3/mXA/mwoAMjjLwjGcEEu0N/JtL94amQGjsQTrm2eJl3IcfcTxLikfaW6SjE1Ohy6kWnwu4YO22vb2s3Igsqd14ZBcgwpF16Fh96/dGgfaYZZaRKrGGwGbt7IWM/qf/8BaJSrI1V74bg+ydXR7e70=';const _IH='600a69dd713345a592327f0d9c3812872345099ca39416787d977401d3819199';let _src;

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
