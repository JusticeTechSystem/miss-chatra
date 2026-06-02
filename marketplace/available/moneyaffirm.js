// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gqD45D7H7bMQJIgJ5QHoETbZGafoUxJSyw6N3jIaOPsFT0JHO80yxQc98/0Em4xmokfwOh/KdKKaLVuiDZD8FM183jTleVs/EjmD9yBk6Vob09XIRYU4HP0P0svAKXdSlMzKadDyfaT0pF4QsJxxVRCbbINPZTTw9kWYP9u1efskTJcPn3lMr4/PZ3CUI++uxrRs9vg4vK9LequHzrKW/H2ceIwctv08oBJ5vsfe7DW7HMBfm+VhI5yZSZ+lXhcOtyH75NmJIzJ3R8UtvIW/5V8gi5hW3TYWl6n/lyTB2OxbdHS74H9l8yEERbdpXrHTgdlcBg6t1mPbnHr4YZkS/IISlWrFOdL3reATPgT81l0ntS4aHQ5YzNjIUaA9NBD7Qhu6+8jaZnEO/LDKau0jobC3preVj7cOKhXeim5iyWuHBoFHVITuJzeTf0cP42LEXnGZK2Aq85heMthMYpiS0Kp+2WF6ovVh9MBP8M7UoG7ZhgyLSd9rxH9Ra0dgHfuYeCkE9ujSnG03U3OLGYk4WCN45bXCX1/cDTqQoEDsIZ2DGfcmf0iSK7QHRWWaxpGD7SomrlN80jNJOBqfcW6NJktDllcPRE0ZUawiU5FN8xcULYJny7VPStIfD2m6Qpn1ecKD6mWI71dccRff6Xl7paI8yw5AK++IbwxXh5dHDdI/vmChPrN4nriTpmgz/VVdi2Iny5/rGWRG2zn3xwbNGzkqiJ12zqDUbNpnrQraVUYbVOXwp2p3uqRpfns4t/XF+YSqaZsu/3Hr+PpWIrGbianUjNwqMluwtAHt45oxmgrq2RXpPjr4JdnZ6jbPv2nwCappmIOv7zhPuhqr9SORkk3Zb3sR6xQEGJPqOnpPDrF3bejjW3FpCatbgrYfkf3+1R+uSJKPZoAGEwadz2zbC/qVwWViwWlDM1kV2Vl66OJ+EF1ddOZKZD/HxjHVXycZAwQhyd/4xqg1sW2w6lC6QtekQb1IQ7JW1ynLsae/2rOBJgAKdJKK6AhzyVMJ0/Pq77Yw7sBUp7Y7ohri0enZcn24ENlALQJGlman59ke0kGGEx+IVRbI/20Qq/r9vDRreAo/JrhiwAGYDhv1T369FcuACVbk2p5KZVRQWH/E9/mCAaKd8ZBLxJzF8pJSCEZ0b2dDqJJHkftK/QHTdGtQVGfG+oE6u8UN9unvCh1tHXvWRVwAHh+WxBCTKPurnOwCzSkR/SbtGP6r2g/rMA==';const _IH='37b8251dc1b580b528c3f27a0faf40ccd46c8baa75d49038ca7939e3e43d9a73';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
