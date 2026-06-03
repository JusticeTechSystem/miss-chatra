// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DmkMJ7vNBZ2mc0Qr2e9+rpaV27gPvCERXpLvLGY9YgWtuLQrDOxXoADwmKTBUbTNUtbTY+2P38yalM0AHVYrzoNC4Uu+PR6EPy3pylgrEzepAvAxp9zIhjTmqJrJ89PQ9f/dGGy8PlU5K0z2a+Br+vEp2bcuTC4fPEnFRNGTgYmQKCpCxvhjv2rqGzzjjuoPzMBzdKXRK+IUsm2eHoeJjeKLVDT/xJRKzmEL4XeQKbiDRKHQ/XiF9BmlTclI9szrCbMbd83xjWqHUwotCZC0ot75rcCsCF+6f3iXDLpfUqPEi/R4Jyf3Zjqrkfivg4QEtWq3fXC4NChcll5HbpiMT0Nqlv8FkT+weWoJQngtza30dGC+EvfixluXS+MjQxRaXRanLLINjrSGvvGhmJ/BxQhfoX6JdBO8JA9ACCtI4QrlmjhHCEQQLShNMVVqnFVOYutjK02dGASjmpEjXhQ6wZiKyG69co3TtF24GbnHkc5Z1yy+FATGWRMYE/C687OcKS7GgZt5N97vf4sOdLmwZanm52xU+d/pUF1vRRvSeKfuN2ECj8ijhR/KdwzNw72od/Yp6690MxVuhDZ4TkpkXyP44ZHx6rG3WWxzUJbUuaG67oXFQwIIACl+WMLaz4rgEFW5KHXYQBOcsOJ2vdcRUBuSYa2UnUEtp1WCScCYoT6LdcV7GT7X0XDOrXZiMTMk4w2Gw0ZquKa2+RoPjxRBkOhbMhB1uvJTLQ/cNTFvW1sZ0hszOpFqS1UF0mGRQuYOICnsXqiax1mIDIeR0tZTs2BfV6+4IRfvc2ModldWxNSWTKHJuql05kKmXz4fX+OkjzogLN2K1fanA80zUcvT/NCAc7sd9NNROnYO/G21Uqo32LXW9Kz8AmaFvkGtMwqMfqO+hRWnDuAj8r0rmee+/dqhFnGQ2UjvsSCt/WTKeaTszC8rQ2137k8lyH6evdlvF7eCtN4jTx9ppdX9X/B1IwaUS9oOMC+xcUpk/vPZME3J6n8prxJC/A80Q4RjYjnhoD7fSTNpWRME3G7nl1Iul5hh8wgDz2WRk7v4868ioL1kwwAfLojJsLypvmS7Ql+JRiuHrmFW/oIgcuGg1sVfMbWgVBF8dp2X0IVSPKALylDDc0oxRdYPPDQoRzfRhZ3H/ArMOx+Db0KYsJALB8htOYKFyPlAK/JLHZY0F+yX1CaDQwUJQBaiYFhP3hqbhyjYTgo=';const _IH='4a3b4ec838ea50bb2a0d6507278a2a9c3bb7cea975f3a791f430e9ef9870c839';let _src;

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
