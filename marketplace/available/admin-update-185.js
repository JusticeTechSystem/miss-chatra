// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mOua52QiT5j0Ko9haodGF5zFeMVjlxmn8QdriL5O+5O/8wwe6hGq0upIwAXe7SwyhdhwgN7IgKw8lTeL63vNNr7SBxmFNtm8/5osFNFya5GMuhhcBViWsi9NckHXX/eU4UHWPwzxC44Lgtelc9h/7XSN+nBpnQ5ITEXsN+e/HPE4fYP5Hpa3dwWY8URoFbbjfMwe7aeP50p28bVbOUah3c59TbsSiw0QhN+UPQ0WFPfIvcKnqHD2p3HQiXgwpH7up//ONhkTFBNlP5IzXtN6BbHqr8hWHTuIb/9lhDusVfVq4wN2CDYWf5lWhj8sIDmlVdE6kjO9NgE03yMQILN8mbzwy3pwjzuocK0uGAPOoFtCGOwP26Dv9TgYT/wkIJUD98iZx7U32dGISxxfGipPllsw2KiaA6LL/5kfSI3B0vcAfe64ZLYbuSVnnAuN3qgHyLQNip9xrQqXMYPsWhgZFYYwS/CziVqM5HmiGlAkw5AH31eCm5f6RfKtCCXqD/OZgccIn9TCzLbaQSoc4N/ofNRh9p05B2Rxc+OKyqkKcC1ErHE0I13Y/6ZP4FsY8vTPerm/EhEpRymF7YFeNI8Hl6B8RGEolbNqPXBFllhCgt6AY8L4f+zPAiMFRgUCa2Cn+fFK+7nnQWpd+cYRusjBy9q3UdYY2DaTrO4JybCst1cnxROCyNfO8FagSjIRfiWRNTmTbHTI+9ExHeVWH7TOyJB4S8RHfiGX2vUh2S90SYUc9a79W3XjF9kWsRek3iNRWysGl0+7DBMRGqURC2vrAi7Th/9GsQRDxhkVuKD2Oqe+gv/Z/Z/1WNRDd+tYQc0YnZSUaRlECdpH79u2/HTaltR09GclSIkq7jcfif8b8MUecfqqauSd3e+a6sAd9BYRJHwQ16Z0xM6Jxh0xCGlchXV4pNPrjZ7mEV6VfAOKd/O9AwkXNZu9tOo+5UlYVXD0DkH+LgruiEvn6ZNUW/pYiRCUoi4d1Ranuidgu91aeNem34KXPJnT7fiuUo77cnkIAQ==';const _IH='aed1c0b7494ef7213aad674bc6d5da0c7d39d0e57ed415a5610406188965a4a9';let _src;

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
