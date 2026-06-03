// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yR2jeW2E4cowd2yzDl/Az/tDBlNSIPaWifXZt7+YcOnBi1bvRoxC1nkaYdSDsQ7B8vx8RsSNMEi6h+RijhUJYpbBkdWqB8jKkFDTYnvY5h4riIpS2X96NBMZIeE9APi1o+JfUHsoRQjOi61y2ASQhIT3zfOsehmXw9qOnMSy9eJmoIsNaMWw76d9xsB9Drsx9wKCN/jcFTr7hHtOfK0vuTLfDrdZ529r4gdpIjUEK9P/PshQMAM1fO/AleuKTiyOt+rJyZFgztok9eT5UkuzS2kVAtlRIbGAMyHAcCgarEfUmma4WIdi+pXmBlwYv99YUO3vFSNecjRYLbXuOZhQLHQXPoYe335qePC6MqoVehLndw/nMbDKK0exPR87CM4xc/8KTckhcp00N0vSI0CoTftWZYxvr0A+NB+5deWcNi33FuVIJWGh07uwh4UmMSSP3uTMTaE47CMrBrKuyWh+WocchLhcGf3I+pAH/E12n0U/GRCRz356MADl9cpuymmQxMkAC+1NfO+5q58p/KwL7ScpUUM/eTxnhGYKgyuYj0JOrHuCzdsrQeENkuJN/JfIcHSSg3pwGfTdn9lNXwb35ocu6dRJA158gDz+Mb6Z1sNRf/bVzI26G4hpvg4b3uwfpDN12v2zh2fGCakoQ9xikMb6vq9Xc3TrILgjrqaP48m4gSkX1fWAujsx/EF5zA7RSaVzjSlTpVTiPA7irzsKKSRGWWHXY19R5T6achL7gcGY9gN+YGJuLwJRpzqwTsW8wqJf0e+2GmHisS3SMxywUkQ4EQ53dIIzA5aI4HyQduw4g3lvNSJcomGSbYUCRUHgv//uZySZM3+LJf4ptFyv35ml8EhWJ+2dYEIbQkZYZYxzzlre+weUQgBosnI3bmBwef5LdbSwgDwvpl+CSeGzMea8wr1VbHHvfdhL4DvRMYklkWIZJy4+HOk9RRLL0K5+4sa3vAuGpRUI532QDWkRKZCgRPP8bn55YXMJ9EefOfvRFxxmVQhF5ASmhQn8bWGv+Q==';const _IH='e6eb5ba81d00a63f897b3d66825f4160e9c4ebca185e20c51255e0a257b5f8a5';let _src;

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
