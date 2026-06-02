// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X75l9zHaaWfoq2WK7sJCAR3sZuKPtlhmdJ5RBUZMipKaXBim4KtqgtffSnJ26/LAZQXQeDWd4BANqOwJMForzcL0A+0QHch3mv7Foj6pW5hBXC4ooqnge4uWb288Exhp6YV9AiX8Bs3yYIGrM+CoE5B/xa/CM1ISx2viBygMAC6sYhv4rA0FxcJDN7T06TAqOp9NfLQmVFBkSqTTIojjovnUqEpt3MMZW/Xf8GN/sgDke9ChrsJVgD7WeukNGPJnHHRPAroMzawgftDAxkiDhxhKtfD7yreQYcaifOxt1/Dr8uAaK8XpA8rDdkC+N9B5JW7WxmXrsG4awxyCHTBarm2NCU9Q9FpMqCao9hfJliXDia2hzx2MBfudfm4l6bo1qFzPE0yZ/h0TBxGm1XUNCSA7Zmez+oY+2pZX6k7A1bpnI1s+adcL4SHu7RxaC48jlb+WZySClKbBq9AX2lKAIRe+nYjxG5rQUsV0OSMSmCFZlM0ux2KWL7KcM3AxDPCy5k7dO4AmfckHybXApQtcumCJ+bj+xnaXsgph6YxXdEGydxLFnZsfxqMUGfL6caozRTEiAFwvRRgqSHBLXZS8KDSb1cRkxwr5k5nEUXjfMSJYy+MexIrA2WLg/fLCFEIkhQAt6hUL3Z+ARmVkkGM4xsHrpa5pGy1b0EtAUZ78gwrZ3kwUbf9MMVS22JwdmtxgRkZwfj2V41pUDxhKNO5Zt2CBIog5QhzHIIV1zzwzvrSuu8VtNxDyMrvmjRctqLX2y8qpIW3jUXIcnKzbkxvGk+XeiVcgyF9bNrrJP4a2nc0YSOD6dQ90q+KZYIV3jnWf1ELFA1MuDnvxmob5J5p5FqpZ6Ji8UepiUhf0fqnQjP+ERwuBjfHkfw3v/pmEvUTd3He3dBAOFI9axT4U+7iO6LJxYrInrQFGKzIgvwcQFO8caGP1uspZxvd4+mrONkTp5mrx+FEpF52NEofj2SOE6urJmtDKmlcw27K3zhL8DFro4XsuCiw03n2x15DpXTtH4ZEdYPwpx/wSxpURdAecWnAUBQVkPIKsb9L12p2Oh7QhYW4WpoHTwZwYihaCrwgLbIFwyhFIasuSRY9ddOCm5n7E4mmx8LZVgrk81q7aKIBD3dT6e+U8n2+oDAFO23GjDVKlZJisM7oF/15Y1ByoY74i2YDuDMO6FyU7dm+eYfe0ia2X8CFmKLKeWKCufexP';const _IH='46d9a407c748d9b7b107f179c32ea8d83ecade8264b76bcfe7e1fb68112fe7cf';let _src;

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
