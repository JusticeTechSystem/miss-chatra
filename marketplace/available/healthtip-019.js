// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yt/55XVb6OLgVBQPwSnb7Y1UxNrqz1JaTVmzIq4GkQFwHCjAesOpbuUZHm68fgUNHWZx+FowyVfsH2M634JeVd8jmajrPdMm2cap2zpgBiL8Y8WZLqpaoww3NdTVVNymWjhMH1SRfKNEM5rJngtXvmne9IOnt9OhdwMABtabm5CItyJm3wLEpBwjHlrfMyzne0EQS5LUxrB8IXhsauRwg9CfYDLE1aU7H/ueNQEk4bF3TKG0Gpx4sXAHowGdor/dXpE6aJLKyw1tpv+RGguqsFUvXQvbwAahSrSQphwvXLKWFgUHhtTgRi3b9bX/PoYElHlRShuV9j8L07/pAPfjDE2jtIoLQqNxyevxCIIP+GpfEkYyCkBpI4yp6E3YvUOu+Qvsgd4y+qg/9n/NeQLwFJXfWcJQF1g9Ga1XQ7OllY4WNOyZ1JKQVWmXNqLJgGoNnnCaV4dCMFHPzlG5MxWgrGFlxK025OyiQ3iktd8oS6fibpYHQC+CKFoLLRkpaP5m1Hawr+fVFBDf9+EZ9pq52w8TMYO09Vxp2O8wMt5okgtNLGZmwqvpCHTHabEBdJVIG4PajEFWAFq9dljjAKhb78nCTHC/YG2OU5kWyZwY6CjWzlHY4U2MskDnme/iglQn8Yk9D0LnWHy3JedPzdAeYM07t6GtkEENo0ThTQF9gmNDtCD+NmNxkkKAx022CSp2WNXcsEP05nTmPoLHvq4jOam1EdKEoqo0m/7Ik2pFTUBdtjZaFFjnvfSjof8b582t0buRXO2vcTTHOEMbaQjCiLQffH2rC2FAfMyq3vFTpZr9Q77Z1vvXFZHZxLyjR1HBP5cHnEyLrwIpjm7LmMfRl3+vAiuGMdrriucJVhM2fQSBgkQXm3rD/rRbq+GHMNt34ceemw+/fWceztphypoHoiWs2E+UKlhoYUX6gCxrbZJRtUYlWt904JhcZRM=';const _IH='c28f152d34e9f64f6eda0737879d61ff85dc565efa56e51cef95da6869eb1458';let _src;

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
