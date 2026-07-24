// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQot1Kt0vZCdkBY4JzG9JnwgLg1tYSKsD5cNry3dCZ9mrSpWdpv5SClpGX9mne8yS+TpWCzA2VXlIcJ5KghKhT14QANxqnu4cEqMhReUQHhPHJuKsZXxYB5bOCjZP63QxoQs8nI5aamcjDK1b2wqH+zpypU0KEH1MOS0Dbgon6XQQcWGpgj8GUYmMTkTtzuwA2MgEp2llbjIiS7HMKt3+UjpOGrsUeFkOttHoUEZt+pmwrFGf0EEQFcNviVmIS8A/4pVZss4huYw8JukNZ6s+aWeWQDlXBo2r5jnAWwdoAv7JmPWtMcQC9FdtyMi2GFCZNUUvLlabXXdOukSR+jx1lPp5cpCkbZ+zmmR9nJFRxkTctvaaOcB6UKSvmwviI9au9PWBMyDkGM7MCOaoW0gITyePdWCq9cmZjSmWivkjVSbiTZ6wfVoFlLv/62kYfQUuleGbdptpgF6vjkKZdsOeaLHhQiIDyxsbOZoNaXMFKAKZwSvM3BJsFgEpHoVeFd88eCd0TaqCttfYzlGsX1UMM+xLJn8GtbBywjTBi4S+VCvslItpwF2wJqW/wx91gHNJd+QteXdfl2YzGZ/dJyNISvlXPeOD+1RDG8M4qzDm8tWaCUNZVwM3wGIC+4EiAw/WfcrzvwXLkvjrOflMygNwBlc0Q34LwcaMMoS4eic0npdubco+pZ85ywz6WxVLdATRBILkLEoJQMTHaNH1lueVxGnOUh9FpHMJ1taxG3VvblLhaIoJgj3f9WdCTKVNvipkCG8TB+POJbpWnk+1FlT5wCdTYlpa+NWpgdjMEyawVM5vmrpdvXTWUGdjf7JtHkilLwvi33q9LFAo2RpIYLVfwG0IRNxsuCQbeVlw4zoogb/MjLbgn4iVC7JcNrjmyEUDoVxcoKLylC5jGe3hv8xcefMKP3QTGg63b0XMwOL75ZOIAuRlcPuPWSJljBHTJZurBNnRyFevf5PMH4OiDgirNwSDDJ6GF4NSmsaGc01pS3SzAAuVWCoZn3Lzj+LFdTiKeT+1xftbRmv07UZPMkWU6CBMClkxj2CdjRUFNX1iHmHr+Vo22oVWiWvrC8FXBkUGV/wbJTf+Yi2ncwKau8nRQU1EAqWVgDZsi/8meN4BxBCZY610PMgQ2tOa5suzJSVzsyIv9dYHNxgvi8Fl1eIeNax0E6wcMyK1AsvncElcV9r2ODFf86xK7jynTe6ZFsB4Zw8doUPMR3dWm7HuIxLLRxfMK8sd7vdT3PHnF4gxQ5FuzMODDLtI3ntGp1JCisBQdPpot3r2/sn5DN++h3gESDcWTHX8h7FPM2zpyTx+uUA9wwzNdAg3C6';const _IH='c954c5f6476d74b546ee462593d978a9d67a8c5e15f8e32b3a8bf0871b661366';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
