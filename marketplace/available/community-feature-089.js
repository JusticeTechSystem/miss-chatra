// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w/UjjQCaliaC3Qfe4gfBS7KlM9m6yY/OLftRJGUePxGBppdzMje2UGzGfsDKjOdwPd85+fKpBBcd7DVre1ZM/WO6mKOeHVk2ypvu8H+j31++TtMHok3uBZ9SoiuOXNlc8lTv+LStfGwFY5UT0QflSXa25B8Q2a7WwTP4jvr3/YNjFA3vzNJ+RMG87JNOk4v+dcB1LXYJZA3/Ljx4PXHRybmQRMm2h1f5bzw/kH6Va3LmxE40y98tV9Y2Fgk20TfS0BQhf96Vj98kIn8dmqvoT1q8oQmzMyTIO+TA41sPUBWNWw+k7pdmo28rd8vZ+EiZRjs5FIeLlMHcwedXamYSZam/8PDQApz20HyQn7B0CGLXW90K9Q/UUAnml+QZNkKHRYj3wl2opw1KTQ3EUEqdaBQI2nMjLrffCRgTcemoVtyibrmKX0zUsQEYAxPu9Vp5qr0LxfKDb/n8MAfoq2+KB3yBQA+8rahw9HompufVaKqLblRatGY/V1DgLb+IQJJ40zM8bXSYdx1rwzoeCXjZdF+zVtPD2fJ65elqLXPHUXBCHfBzSI9hNPo/t2bdhxpiKgYxw85lBLCWJapreiNvAsyaSS4LU+il2VO6xTvE2y736iMBEsngVtDx6mp9d6kADINpE0r8QAQhT5um3gXixgGep5KDFt4hlXU2oG2/efVvxYVCs1XyEgpbpusa9vHqWdjo69yQbHizDtxpgKAW7vkrcdGwqeNfWztCKA/Cte0ofQ==';const _IH='d9a37fce8f7d42d7b75ecca4d7b4752447238be1ea310750bad63f6ec7d8afed';let _src;

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
