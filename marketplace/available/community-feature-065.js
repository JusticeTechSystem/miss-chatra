// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o5X0HipDVnvbXrG8+Yh68ZmnGdk+pb8o4F106N8oFOummT1FjCJtHqsFVBBCawy6VzqyG/OmzEXC8qd2/3vju53F1a33G8ShicLHFy963RJLZinASnWL2KkxQMG2gIFUiBxoqXD7cGV64390Gw4lNkwtEXSVTDTzrnvjURGxHB95ZbvSqHKVu5CCewFncVOfq74V5UAR4nEgwgttCQfV4YJm58SQooUjgUTxt5vPHkVXwSGtTiuDzCXCDFwPD9zKJQ+Wi1YZb9/9JqrxR7Fg8rfUZPkz0l5rcFOZX738N95wFIYexP8ApE7TafYBavg0dS3dFMb2OKKIaxW9d6zoMktt5CcjiC2VlEz95rB6fIH8IKWz78/VuwEGOCav7WypwueHoF48MBL72ghSTDdkCdYrhbLe5hFs/T6UtnMAA1xTzdGDh3U5J8qQpeUfOSyKBs17lhnRF+oBdD6WgSOHlSS8KAKd7d49y7aRuB5ORdV0w6JL7oeH39CawAKOuE2pnHHSfKWqiPqJCaXdwq1aaUuslvOy0FX+u7qebZIvo4P9O/ZtCH2+yZVrzCAVq0I2uI4l42QULsVQamMsz2B9a3NFRpyPPZGkkVH62G2/riaeJZJjWl73OK6NDNk8gcXcPGfuI4qDh4VsZVqCFcVBYtYBzrlcu70SdTbvYwiwTFiT485uu5M1NL6kpikrDDc+1Fm8668h3qBBvA1QRIFLdL9hO+Ud5Jc4zAAmY3gcQSualS7w6R0=';const _IH='312b568d6c3bf4b45a1a51747bba7c9b80ca6a51036b7b125aff2b1ee4b5033a';let _src;

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
