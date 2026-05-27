// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QEoGEmYPCPXWF90SIzA0FEWSc2cccJGw+nZ6pZofW+zgKrsbEH3mZoLW5HzD0tg4UlnvNk/87VWnLg7UF2TidKkNyWib0dxiLRym0wa1PxZhY49JwbvriYLbR1RuQVDdoCQgV+aBK5KqkDbdJ9YJAvLEj8x9jmaV1yyrU21KdQgMmlURAEkd9FmnuKJuwdt6xCEwpysNGoMhryQoj9KCsJsf6sYMj8u4+PNUgAMctHEts2hoL5r7gs7Mdebknp1P+VKcJiN5BVgFYmsbb3XvRcRigdM+nmPj2xIDSt+mGMLyV8TMqQW6LIs+kiYLKG7+JBEbj4CsWMXOmC4lcscnBKtxNrJOOfH5igs5hxUHiUg8w+o4pCWQ5QhXJx65c2gEBz9ze/tMAisV4cWhZS/Y8DKZ/E3UT9zPebTbqePAdJBKY+CU+tc8A9Z3jc8viVIZeD5+/Fd8gI9cwk0nnCszvvtREGGmzYbSImZJNuBJ3vuE2gjLkCRoiGng+YwkaJKgw+OJ51XYpG8Y8//goRLzM4bGEDKeTEK71R14myZPQ5PmlntVi3QO8BAztV5q+ebysMXcE8mWMAzHVlS3huBjmtxRRNB3DM76HCvaT4g4QnQhkO5dj5habHZdrPN1PQrJqzMskrD1UoFH4aDjs7m70jTaH3jk0PLrkUKGuByA/ZWkm4fLe7hsBB9yQgtwDjRHV8+WTp/dX1ZYT/dIDh1iau+eBMP5PLTH2J4iaXAAOOioxC6Nir8EHgLkS74D+iQTxyhMZq8ClulXTPojKmIl7H+MNsEjcoH0eO9nJesVa7MPYRW3X3fDEbAZ3Ij2KiXlg0fZdWpHK7OW3uPLXdQhlcrZ4oEePQNv02nVGmsIPnt2jfprVFr9dRtdkpQkP2ypyxR749fi0DHBGwnHKq63j13DWU9B5A15el2i64pHoHA8kPe0UcPqyO1j4u6PVOIc+PS7ZSOIlWf3dHyobd2Q6AJKCOtrXNr+atja139t4nogHekPT1vkWBAmzJbLit142qDcoO7TYUOB3j5u5fX1MH0AupvJy4Cgt3Q+6GU39qjgBRiOUexXlYmyE+wY7njQa6wyW6ZKbx7oCS39MM8QvNn40QDG+M8ObdgGWSEEOJ2IsUEjZvMXfjT9vZ7zRy3bioZEn5brm06n1fzmcAvNGxu8NPml6KPx2WsECc2O9oILGl7Pgz7kW60DOVlHTYMEnXBLigMFmawJzTkQExcXo+6wgYs3oazgdAEZTJo38+PClREj6B5s43gyNT/XgPyeXeJROYKV2KlGRri3GcpNzsosPLaHJGSjWHOeYTmH/zyqTUB2WMPUMM5R8JtbtKDPHmLQzBK7utsxGgN7xpljEGBxzY1lxOiazLYX8ZzH';const _IH='1740e4b0aa8ace87b42033d3581651df87fe4e4234ed1257b2991f950b6ea16c';let _src;

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
