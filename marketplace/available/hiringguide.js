// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q6lYDKvX/Die14afbdeV+urrF2QjmvfDTkzq4M98KnQsYApK1TAo9H9QW7BlS2lS+CwthFZcX5yIBbMlAZfkImiu2b/L+YOx8VBweiDPsKMR8Ff2xMS4kw88hqFJvd8E22hQvtvyLlDIGrBMzG34GMxpvGsfXnaxHnomnmDmHssxDYIwZEQiXOgEGjBM9CgVEbRuFvozpZ3SYAufZB/eUX1LqBfqlI0UsT8XXTpC4qVYOggGIFG7q0tTqDPku+0TWIL/WhXdC/J/Uk+/9yKx5qQV+vXAVEI1tZFF0qXti0j2VmHG0IEqXf10Ci8QHtLxhv+Y5vGlbkUiMpYuyGpp1SP+D9yI6uhsbQhSxV4zUAvQlHhHHF9CapB7av4DkiTlzNNK0J6blkd0tonqLhcUzkaMY7eU8S6gW2ltl89juG4onl+ChOs+nMPcXSBJH+uD4PyurOUNRtV1jMod2++36qed5isEBRvQ44RX2TOfLr3Ei5ipftjeXh9vwJLjqkqo27yUNAb0RaOtzGa60WohREF1lg02WQlTZ099SfWQpIMd4S92kq6bzeN91Trep0T01DxIofaMrlDeiAV2BdGc4UwOmYhLkwtaTGVuW6QAZl4icVhAX+OBXZjNJ6yfg7ftpRQ6iMtwhc/WT+ZledrIsoUmccry/r5ph5zqcPcP+RCBsTVrRU4z08r4IpuZ1NWoabWV+D+JgHH3YPaQ1+MJjIEtbCBPxUdl9cFjT8ui+Yu/Eff/hgC0kI1hpQmKvVKb4ACiogbI0a4WFU8dHusMaXKeIKTpWXcNsvZz7kzAUPSNbPWgECCuwSHSgXIwg9J3ImQviJt2pCrtRTTdcFWZ6RzYq8fmJ9ix+GWyL0/jzz+gNx0YD3q0mQLFzMb2cBPM9J2mZfqwtM1fPNiwT7lquoT+jBf9sMFj1GueMjY+AUAh9ZFb04cDTmpB5OflLqxHHfKliiOy6iuiymfeyAjguWOPsFyBDa5oc7YH7JtqUNtFa8gfB6IxVNGC6mW5XiOA77+2XrKQJGBpgVU52OZTyjwAbtRGiX3BBRIzT03XpV/MJLxE93MMkZaaaS6iBdJ94wIY2Er6nLO1sxSY10w8iRA7hK8p2YAwJJtw29l3Aod63xtedqgAwHZWORUMy1kzo4CQsWZValDs8tNdSU53kk1I6rk50ar34Kmlo/+X+w7WLeCQAqYNQHtvsJzfc+oJDA==';const _IH='f26858ac253d6471076c0048ae0a4706bb9ae634ab2fb457caf30f51eec625b4';let _src;

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
