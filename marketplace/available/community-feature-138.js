// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTTuejNlR3CASUi/SrbPkn1OLdppz1eTr4XjajdEbRET8jxZ93cJwEtWWdpKJfQ4IDvYb4Stgch5v59ejyJ+2YuBTOv1SYZTlYSWr7x2dbvo6YbqxjxN9nSJkRpyPJ7o/uAkhAqZ5X0boABGiffoXqc4VRgmQarsFYDBhTu3wVL6cKwLqExfObUKNEj6pv6JB4zCQu9O+XVgtJCJR/y73BNNvzBwFWlI0USSI5FiDaCJJQrThrI6bymH8ERCUEDBp4D2D8NwrybuDwQ/GwjDj2rT+TsMCbfK1ty7/yT1b4t2xHQFGkV9rEHNg19kbAYksm6523M0UgvG78D98DCakAOG2Hamzu61qiC7Qv/it0wS85rPXUbK9QFJb18CDl0cc9moqthalBmWpHV6UQ5rWy950uxax7Yc+Jao1C7ZnbTSuB+/Za7sACDp7f7BS1wXuu6/ITtkYLTX9QshMkCZe4byn26K2Dt0+0E1+JFlTk/4/ml07NvUJcq2OW8syNVmLq+a6BgWyBVmipWEidd48fUTebxUAkjZB9kNuSycv6UC/6DZ3VFRttDFmPU6yNCcZXnnuO6NKcMI6ysw/47kxd5g2y80AV0SsnoAjcdlZuW475A9BDgfNMViV0oxHFjtvXG8yGXStRfsilhlFaDh/BtF9znWFGyV65LID9O2JJgEFJ+4JVESNuas8eN9B9rlaVzqSZlHbKij08Aj9tg2XH49DTJ2xftHbRf81kOQ==';const _IH='36e81544181ab9be40dcc89efdd10e73a857fb555f730f1bf04b858f02f0c781';let _src;

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
