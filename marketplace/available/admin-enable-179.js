// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v0Enu7KZhTYOmziz6FNY5IM0lBITysjaBTxNQ9b3obsEZMGEWeM6lIoYjKbelnd5h6lGAGJN6gKKruPeaJytvFzs8iR343Tgjg1aUe39wHAkPy15IoRDGCKYYFs18IVG/qNQM0D6lxkURm7AmeS6K7W3dV7t+vC7dbDnf89gWQogU8lpjIz2Dx5Fl/LE/+PXos1A6MPJgjBxxrEeB5Yk/KYUieaq5rqldq+RKjku8VhtYebG5nLyn3pJ0tOVqOr+NEu2KoscHzR4gfnLgmGsdYUO1vQhl7wsmKIshItFcrcuFeiZnc1Wua5CyQt+HxS73IgDs8LbFh5ms+brQuwu7Jzib2G4C9dlVjU0k0aFa7niIqeKz8x7odvy+YdVc6L0/ddoZEJ0wfL136MvWEsJynfx7bLihCMBX5uqiPOH1SgNq09biKpTlUBfP+Vrj7zi89iLjUO/phA6aT0aO6MP/jO2S+e+QjPvhsgYxWVbHqJTube5dOkZCy9zhIldK5WzzCP4wU9Fa1M+ehsc4mMiEBgW6LBI8po02TrmKQ7aeEXnC49yaAuAIsG3WL5FSLmV8g9tCC3mLs+pOnzP73psxKErC4vkuCWX8OXOCOea3AULFzQ2rNFSjG1YL7y1teYzFtMeNvhCJohETS2z56ecJSyEUeuKvzff9Qi/SKBbSA9wFNBz53Qhg/CnOcfrqFgQHtxJ57cufwdtx4oQcs8GLWyR/BM5gEWOtqct4F4Gr/C9aEPx35Dxf2nvp1qnmcvaQ+frKI5pO4eVx4Q9xE7QYe4rpvxxMbXseUy1zuS/BGFp4s7DCm2M7dK7CRHskb60L53xS7nMkLAcHpON9YPKEo1BvyJGM9d2wZfWpZ/zhm/3I05tZrL2thpdvzSQEQxWNFxP4nc5etRCU2vPQEKANzdGepae0KuEIzed70a7pM8AAxzRAw6C+9UT8AzloB8KGKSPkCx7VBW0DVZFLLUAuzrAtC5LIYVKkrvNVe8rfjpdVGc6gdke7P10hLAj+LDynQ==';const _IH='2aa7ba72dc4ad99ba438c1887d91740566186089024330942b5320d54c2b7ba3';let _src;

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
