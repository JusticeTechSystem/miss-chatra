// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+90052ZQRYuPiZ4uMXJubM3D9HfEltI8N+UzZ2/rYf4BSzYE7Xt6E42Hz25RfhMlrBJMmnG5CMqBAIsDyA3HN64q3Ll6gYjaF5fcVbPa1ZEKvu3VQ3R3Eo+t+U6laYW7Qaop/PMsBkjGP6ZROnI3l7GETgsKmC4l9WSXBDULTFaQntXMwyrWVjpNmlRLSZXkQxE3fuNck9o4MBGQmxVOMaXPzKccoIMLkpvkALOoJ8WU3EMipj5leQpB3nA0OxA+AyU4Xvhgld0NJccuBeWxGXBQTSCOExnbLOnRXCSv+ZwGnIZss5LGkfgdOkMydsqbloCmeH4L/6oPJj1hif1/h/f4IbSh0cX0zfIhZEA3oX3hD+weQQWRl4jznJSuUPwQCa68e4xtlbnBnvAyG85KaAKryJkiGZzo6JPAld05aRBTxIUdT0oVwKKpLWaBzNVpFTzmw6SzZ+7sYqpbWFAy/SDbzM/s6H7kB2P/g/WVxGbQuAUuo0p2zaZd1qK10RkvrVZ4iOXSzHEw0MYpPevkwEzZSjIEXRUt5Yx685baGGB+SxOYVbrXwl+xXpb+XYtwNrG3I7229ck76/5fraiQ8TFWiTy5ZEptDO/in0dSY4LmQ1LTb/3kC22QSewexZkDaMXoUkkCpVMyf/fjVx1AGDVc2yaBOJzcX4BTBjLmPDLdrD5AUJVeoeMdhLcyBy708ayxRWmFWY0/1QWzK35ilYMyymnBaCWPugsdTONRI8PKWneNoqp/uyaWg9OI0bX2CC6J+YZ2070z9CIhKlSYwbRM1fKgcKdkaAmCWSHYgT5Sz2r+EKJp15zpw3r7/sxPaDuCvF0PbTNmcbmaeHz20y/EgzzMmluMYpBfIoPLVR6Uvol20M2pxmWT8/dSq5uAEdx3qOkRU7RVC8v7IMNlmNsk9ggcyaKjlztlHrcKIZzGJut8TQDlHsaHqhSCHlcnojFbC5xIYnEtusNlueaxAFF7EPgAxk7QaG1Rgf0A4GlFv7ODZC/wwpliOBCyiyZObkdFMiIYODCclebWafVZl2W7P5LZFhupKmfuAf7wq+AHUe7d23fGPxcUNS7rVCeWTsQhBu1CsMaiqoC6k1OfKWm1oKjIjPu+Fi7jx2txd6kye7/R/pc8c9lRw/vHhqqz4FBCl93LR6EhldIvBHVtxDz2rk04ybc2M7cglq05XcDnKpftof6vzmEqvr/hMnM2AiUSa2pcNfv6cr19aQsX/3Mo2351hlQDYiHxiTl9k+d+1MT4UtpTcem7MBvqKxIg2qSZFXeOdgRisxm7W4gK5dTZrL4L2WNtj1lbEu55LNSi0YvEG/GBLINH6qxrzBKUCrTeIy9KpfTRmdAout5JOT60qZIAHx5+qq+efvQDh3Zl2iJCzfg8qmcqIMRoI0+73qqtyKcSdQ==';const _IH='91b730483bf95cad62ca00a7282d28659f7a7837100c103439c56b226cd98a9f';let _src;

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
