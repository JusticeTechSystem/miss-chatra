// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hUAoNDrRMA9gaw7w0Iwjq2nBbvZK0l7dn3LXgpigr6T1xjCJjrriCOMAQX/nXHxFEYPIEpgli4jsyN2HsXsKyzpqrfw4nf7x5R7P0PTydXU7pvhkK7gM1rrtqCYtrTOA85bOi2rh8Si8OkQ45qss0msYk+cK93DsibubvmlfjrJFMZ5pkXzJIAjJFg5xR6PKO78Us8TG08SOaYyyQe+02Fj0uMEAcmmg0uXb5lFkEPDS3RH12omqPkkCUrz+po4VS7blHfOL3KAJd0rqe9gBo7WCPQDZm8KuXD9ka0nWz0q5B0u11yVpMW4SRcX8qCshKsiNVQ+ZHsGazNXCgQL0nki8yX2r7tkt5/eiHKRaoSdYdtlnd6g9H/HV/7DmegL0Bxk0ffXZOjw/lo0ja0rXrjmfgGNo6yQaCYb9hV3xbGwD2lyIwm+znphgcpnk0Ecux6PtK3fmgPN+DDK3JfEu31LOv0GU4MBuhYYdK7mc2iNhkZ8+joZGW8Q2x3U+pCE7Izs5xTGy8sd/ABjdiHKhUA8Gwfu67oJ/aaZ6DeaNwedKW8opT+DJ+2f1rW8HxHlZ2L68lEL85NmE7hSg+oXd+uFa03gbmBDTOfVPv6r0zTYMRlDqGD0R7NSmTZabVPFHZ51cBqP2qr9a3YF4TWSb6RgI1SFl6JFlH/8Tp8Kj3IVwZk9o49IHQLVcDRP+Vecjrmnmu6hI8Z38w4n9kVNhyjxmaamWSyH69WUyCtoOPwbLLgncWE/Y1P+ZllWGqEwZf5DglG/tCWv1aAfIJ2odPTbjQX9kxmtspwBIqR/OAQdl62Pxr3flAmOrXLeuG2tYcEVzFUFpHsRYyK/r341IikPGAUeokrwoiN3DDu5bA0suybIsVxwcmi9v6+MQ66TqOHwk8qVQY9mAoMrzgEYKdxLshT7/KlSFiJdsB6xmqliGAkV1IlkxIRklMnRsFE39mytTg+8TQ8Vp5fp5/fz2K1lltfIH3+eX6GV2WAPHXki+v+iROI0uVRFKb1J7dQ3/vQVAymthLO+KAqUDVx3Sulv4eaq+K74gFaRgklbjhKJqvCLa4sf85nWESrVW95GSPQAgwFJuXsbFWm3sMIc/qvh+P13YdB2Mw1HWR2sgAqqnkpzyWJ6KcUf3emy0ZnL9J0ncFMLV+7//ck3FUsj+xJXMU+9kR/W6Wvr42L9E3x3qEb8ays4VIutKtkP2+5QW2lhq4b+Ug73ATa8=';const _IH='7dfe213a6c31244a72b5825900b8783837be9088c307798c94ba47e6ff951545';let _src;

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
