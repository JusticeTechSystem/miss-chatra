// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XQ3PlBb1wARoC6WXfA7Dq3hK4HMyK8G0E3qLg35B+aN6by/dVEWpgfHnU9V2FNuKWC15mO+6k0dEndtxqmqHIalkqAoj96ekAa4fxZZkeoED9raWOsrI3NHVAuZi0hUXXwhChrPgAYZRE1xqPCX8kvsVVEDJyhhcFlkoWk5rxMCL0xcJbnLxo7Se4sbJw6y6MWmarPEMiVGIoBHMpHYcbpRwd0CJ/Oz8L4nKWjHA3p46PGNatXYjUNMXrOZn3mq8sIFUtC4JDF/I5JP6m+qoCgrlMutu8HzB+SqF5UURYRd0JLNZuiiyWqOzqsSeTlamGR7e6Z4oDOpDR7kcoq+6kCjO4MrgY0FGICmJDQWn1WUBAaY8gRdSQKp023tefMjWxBzHFUiqA+ujQ+ACkeW3AlBT0DMlEbt82AdkItIU0K8lmxEdNDsVI8jklum+V1BD5QEZanHrO7VPENxcKhK51r+OVOpJHDD19RptCVxlLOz6JudO0/jCY7D6yFFe70tb1FmyRCWWMvTuZ7ciHedV5Sh7MrfV7suheWtf5fDKjAZYapfwxaKGW6MPs+DK/B8TFI8me6VIoSquB3XTrhE3FAutRCqunwB19spSigULiWou4GvfYKCtZ0N7pJ3J7hnlBRl/gFmt8HcBTPjT/t74F0cCT9P4vQ8yttSKLX+WCUi4DweiefuehnZ99nbcp30kF+/6vOlULCfnK9n0LtCkV1uSvYptBZFVkJKIblGuVW01QhuEjhlxhVYxEOXviHCyVPqcW45MmKRDb+f7MJSYTrYg3Zj4s4fi8VezM3oOpcMvjTOVVGEvusFgBTQXBmqmDF5Rizrp8So1I2ztW/3UbiUc10yrlWxZHLZdq8w5Th/wKqGJftlDSzHKmQrWPx0DZNbZdg+Zm/NY7sxmkeuXGYVnAzsRfJbN/WIx4JSGwkRkl/iJuG3a8qFnTJcLtfDfuwu6fchPdct27kAvWE825JENbCKqBw6Ug9iTCGk+PzWVeS4wCZH9xXKGHKU/1QffbTsMUODDijKW185n0dMP+Zfovq8vXBcIPRRbTWGqJIW+MMFljzG3IPaSpe8jso1SEboG+GE0NBB1hiayXW+dkFqeXiUqvWpnV6+HvaBEwAaw/OeJES0rG8jNC/nDWvC3x3km5v2YvjNaqoaKZtvdhQy/bIFoExQGY7zStufUtqagZNmZiIXQWX66aWAGGVw++6TlJzDMw2KVDIG/vM2/DDwRO1DOlVPiAoXf9k5TLdXgYEN/ajZ6u88SnSK6esKCfOZOvXi8d5nOhCnQOAHReQQi/B/F4rVLLTD2gkXR5EII4a8h7r4aVC+nJmFoblk8s2bOiQI=';const _IH='b01f6821361ef866206c6d1630041f7f6374be1a7e5b3578d8763bc1a2e8d434';let _src;

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
