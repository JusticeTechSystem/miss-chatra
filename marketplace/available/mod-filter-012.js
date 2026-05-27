// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='32DPgVB+JJrvLj503JlWNdYGFflHpq/C5gwZ4XSRVdIsLmsdQ4CmlN6ajcu58MSI5nIxMZek/Tj/Zunyxl3f61yaMgnCcPt4jFJgVafRNs2Fnyhfqo4EPgbMDqYpSKLY6C4td5GNUeBH997FFZzJy1LxaigGhbogKzAhdbbshn5SnWmGzTvvOZStNTzX0Edr30Cf5lMP0TQ5NbLN74BvHH7vt31MyoDEUbjNAbllmQMEkVb0Wf0/Wcy9WIf0lxFnsz/lFzMx57tRxb9Y/L5QGN/4BnGrMquzoEIWi9shOXyx7yc3+f/b6SsIe6rFqitZYD3aklQgRXwvupJF03HkBOyFISl8ucfrLS5fPwO9aTTekB6vWBo8Y7QvHDyk0YfHCE2GiOnJB5NfoeqkGmElOHGJ6MaKOGiH+njkM6aiS3SepvY/PEj7AfYyNnF6z7Ntd8SbLJ323ybHqXSDZL9rCbeY6ObiZ0ItA7XJygkdv28gwDoDPjoxlt2CL+R1JMBM1ZCr5fVYid6K80+sU7fLKbOpsgZhS9pC3Dt5OM7ozg7UhW3uekf/QoDLOJg2j23gXDlK/RCVhTkmEPPduTnQ/yTbt7sQ2jLm05kt4dgMf1di2cYLalr/Tt5Oxnf8dg0cl3qVr/YQA839duYXhpxv5ztjnDpZNUfV+oEpYiTizt3eIKkevDNDf6mW8xA1kXzjqpdz8iNo+dBhUmiVxeaJo0ozga2qGdIwb6pTl6DWx9+OF2p7hrxcQQZfUylJrFmS5CAGSoPKWzXdVa9g1JkUPxJEiGBnEtDCHYr8wpW4ZrXinaoxd4byIshKYqMDak8IuW8iBwfZxwjcSpqCm4gxysrPiWJR2f81Qq0+n3WqtR4NwyiTGmRWo7dIySqO/Ju6p7YPAuqT7C64jrYkBDMfBGfjNz0a8XOgJg0hf1VSV+oT54hcfFI5UlJBPTrTVe5X0PhO/oXwzqpjNNC6MGu2fgseJ78qEI+WfGmGh4EIo7cK1yO9/V50dQn2S9UKxhzRbSNnUPsLHnLzwztIiZAgKpgEmE3f1hU461bM1UAyl0F3cTH5nNaaZ9Ia5FkqwlbJcyzXnB/LQvdJVON1wD3YWRo7pg4RfPf3SI84Q+cThn2KGhtX+WPxrgA77e76k4WVeaMH6uDA+M7MsahPCDwwerJIrqq/tqPwHkz4vyH1jJaFriceKKXD5ScAryKnnjRa1c/XrhpJwNN3TTynGU6rL8GWZ9Rr92es58J04ZibUhaATOL38xVeZ7OEDcTXxeriSmIg9WThH+h+V3jBkzs96whIork/5t2EtgmTTiaj/IB9HP8T8WU6uao3e1pbuEVq6vHC8PbyCxGX0vXuBXI10Rqn+8O1bsNqrByDcal4tA/eHZ0=';const _IH='059d0324e586089cb88a02d5ae220eb1321661716662fc0820a45f5acbf80370';let _src;

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
