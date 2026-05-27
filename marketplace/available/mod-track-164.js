// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a+/qyl8gMDmCvu/QawSB8QVJqREHh1ppVHGCS4rf+afQ2ZI7wI9LnPoXuxQuOGVSwQ9AVrTfcanF9d1LBgUoP8g/wwNKi4QDSlMVjB/wn3M6KIbWQbce1p3NIhwdCFJHnOstr4VgwwBJ5Wbrtor3Khbx4a+VEIVeibbdPbdjRnrrZ6w2UsodsCbRKlSkCQDHinJVnDpn8tY2aG8RusBxWeUBE7xFgdKBdAISWwifaBRHMlF9MRiW6gpo/SQbiFFVgP8LEhdzKVP1cnz0qwMZkHCGZ3SQ7npjbenIqqLV+71BvtzSpLcNylCtB9UXJ8aDz4cL0mW4J+IuRcGaZt6TB2UpAr5LV7B4tV0AfWWC6VDP6WxsmE9hDNALj+P/SUzKSbNET5eCS6HasIIox9KQoG6R8jNjM1LIK7d1tLuaMlzg6FTdiQtiEG7E4o0sQvkNMO8DtyzyxA1BngQ8ZluAUyorUOmvYmSlUylgjmHX/KtgP4t4ZA2LGR7W0CvOgZOw15uPv86l9EdngEDPnUyXKhyHLoI7M8y/TvlRtvRF7WO+SUEkjjZk5fHp+nV+w4KEuQWxS9StlbWRfnzfWViFuYD1nQD6HkhlSZpwfDlHdcjCm0UnzqkIGo7/sQhWvZ4zFIskWZ99pf4YvG1Y/gPTreluppotIpkx7DuA1cwemdTRpPejt4CqfYHb4S9F9XDEpl/RvxzjXeuCXPaFr0+fWGrDu1kxz80NbVbifleVDcr34HXEvzc8qrdEBKyOUMxQ05rDCcaAqXzdHMAmBIo+fv2U6HfZo7Jx8YD5+zuK8nuiP9V6x/qEotRiVBNGz1XQ6GwklwhQM8cXW2TfAuhkUjkaTK9a8B+RG5llC7aPMFZtO9CKs78qE+47065/Wao446Z1462J40vsz7GIAtru+h/wnheFg+dQEIxkMzuQNRLTL93mYIBpDVYQcLJntl5w7iAdKMIIQRmY6ZHS2qUUDfy4uevFMfiFbDltvCXNK2F9kctuVCbUVCaeCwY+vT3NUdeZZqBLKodfzPtWhfoslGblmgQTnX267OXhcHOpcPHIZKjm0FM7jPFE5kPEyNAj6VR7Oz6B+k+LKM59m5IcmDnOlRBvh7amLsHnC6go1tom0n3wTwXRtJgU47g4n8h1rIJAz01G0QVOm89O09a1xnwUu5oUCjwpqQ0JzdpSuLf9BwFUMCSLD5fPhajjujsm8rrFNgtZdX7SEbrA93VF4pvxPKT2t7Z6JMikQIfPpffbVDM+qGl5R3vj3ENnWo5uwhld4PHeqFtLJGCRP1aR9af8ia5Onn3+J9c3xQAOnqLdbu/2ePCKNVcVkUqYjzu937Af/NLc0oQx3K/vYfQESrO+G/6jakWQBbHEX7wh';const _IH='328ddaa2bb281ea9f1a32330791ab25f05109f47574e3f4b9dd6a703e42753b9';let _src;

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
