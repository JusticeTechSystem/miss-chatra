// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V4BSg+R5LSxexfe6uIF2l9CdZXvjtZ7Um+ZrLbFeGcxLLGOXESYrf7nMXXdOU2jFx7rz3H4+W/jWWiAczyHFl871A2ACb6T5FWVRJDja1rX9fevNVoat8u8rwEaqj3z+DCz+VOw5zV6DUtCJm+Er8Vfu7VjkTeF+AR186lJASQ5hk+vMevJbz7Ieso450iXNu2k0DOrH+npUJwRCEMfN4h2whNWzbRY57HBf55LvhEqT+JYVC+s/tIPm9AIB0dqnRsls6UQ7X26PlejVhYetQ0SG4DxVmdSttAugXv81xH1IFunJL+3c2qyyNSfdio3kzbhYwzWcvv/bW5mWtnpzyXp0ubhLfNteMEdsPDm/CCkIH7kRw25mkg/jl0PPHRKNr0UFoCRY5UBYNcANaoheXhnXSUehGnPZTyD24+9Zo0BmTBadSFjzrOmn1FOxDMPr9djCTzw78GXMExVvyZCokDltaR95Zlytv6Bs6z+VtzhDtMyFyp7xSu5zsoSlRow8jiuT14f2M3WHC7d7eClwIyLS6TWhmtH1VlGBVmJ8J7dZBgX9rJwA+ScdabZdJtepjTpJVyofOAsZnMxPoI+5wpaEqIlj4thRi5nWZ/bnH2LYmI5PMpxGXjJUdwdDLXrp4MUUhmWXCYlR+ErKal67O7QyihY1zIjGhPTTX0xtt2qKzKsYdOLYKxC/uqNqSuyOJW/I1G5NMz4lMAi/DQjTGaGjB4q3uCGxaSvOtmM2YTr+Q+2OjSiGCm0n7/SWoQHmE/5E2My3wMEINcobaxMkUTzEOpZ94SSoqivOxvu+wkZwtotBfdrurLXLpUh22+/hzx55NCvJs37SPybximECIjeomUvNGer3TAVjCyrDy9FyGnrfQKb4e1JeYX0QMGtCCvLuJPsINWbXFWYSHbcXqJPgBSSc1A6KOnmUkbodD05MX4t8WHMGsFFyPlC8OplHMa6lbjw7Q+QrCoBHoAjl2CdB2EBDbqa099YtTXLMfetMFCEprNPNuMpMBJ9INOnXQw9uJwaQL7U8u5bDZcQxXutocBivEVavX/yQB/6D681bn/tGAbIwUh7iuMfltBu04BlXY17QR7+1TuYKkvZcmfN/+rRy0Q2Af6QL9kngOveK8Snwn2SqK+Rb3q6e4xRtMmTGJc2Kx29pSlnNpBDnwUP5dbp2/HOPnfCRG5aVPQrdiz7xhEI3L9+B61mhnGpy8UP1FYnc';const _IH='59c73c6dea55aa21c0524473ebcdc3b351d181f505b1f7256d2ce0438ce735aa';let _src;

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
