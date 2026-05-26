// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPs2/W7UZogQoU1/zAIPeSpgqhkScFozlpZlMgyE1K/F5nTxkJJgo4H5PAw3bXiXnGS51wy0rXpCDFbJaR+tVkgJn/L9wn9cnx1KbW6NXA3EohkADWQy+BQyspo1wIme64HBAgV3hfn5zowYYOyyuHne/IziKQMfrnR0B5/fuZSWCQ3cbwT5L1DRGxwM7c+7K37a52U5SvtABraTu7cCrqZjonjzYbo2YHLDtF3ycz2zGbJNWMRP4YE37ygb/kUPjlqwHIsXHmdAomhv6/7s6Bmx4XlzlYtTeraO5HF0DLOjsig/IdtGPv0mmtREs7/lPQG/aecrVg4GsvEzpigErNe222uD2oL0lLiM8AaLVYplMguoBkGTNEOcDsd4XmApru81i1wOKeldqldqb5wopH2EwOT5JtJ5q66KsjEf71BZLhypMriNsC4QXt+aSREUufHh0cn8Ek8JbRl2dPLide4iXe+KSPgU+VkA5fl0NgfjrxbqeUF/0Kc91AnNFetMzlvs3B0rX2MZqQdvbma+NYBfvtaNBh5zf45gQGy7XWfr2XbSnU1U8kyLsjZw8bnNIKav6eOqr2bsmWKZY6281fcxWvJKHt+cQtsdt3uZYdARApOs0oVLH1Y2vhiN8eFMITeWAm9riB7PwbyJCujqDmNtuB3W/wzDcwUwe4jbuOV0UueR28SOh335lBC0p0THybz5ypYNs3YKNM5BQiugg/4+IDTDszGSXYWyZR6Y/f7e8BNyQPsHaR2yQ8VA9kkVcanid75jdnhFRs5wG7xmVUwIR1x0FtsZDNkm48A9nT6kAj8QRyTpvmB2t0TxfjkwdoocsuPFrim3G3B2A7/U5oqWWEdGLtaBxUdXl67/Nn9cNCQqQzSKuk7CM9lUQpY5MvC8E276IyQltr9GTQv9Kw/YC87vAbXcGsu5mVSXyRCwEw3rwIucGE+UCG8BL2LUr9HY+6GvuTWZeXdmJtTVMXPPDIhzLXM5z0FAyaab2uPztYYBOrE7nxDNGR8t1JKC+eSGJ0Vq5gg9MQiZ4QyQuNmu+LDU1OVu17NpQJt/s/n9upvBhirp9sJXsJPYYxJ5YuhyXXabxdPFMQrsW822X7CdO0zE0XhMViuSsett+OZytHvgmRKPU+9EydnH1LrlJW3eg4UZYlhYeSDnbypVLdkGDf7jVRY+5HNN5Pgo5GvKQfTU3DnF33bAOM+zRAQ7p/phsKCQZeRY';const _IH='1be1021c546696cef9c4a12f3f7c0231be8b52b89675ce12212305e3cadba271';let _src;

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
