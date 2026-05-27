// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4XxuckW4FmPG10bS62FQy+p61972WVCtrTYiD+rSnwvhvD9ZxIR6kz+LFZwhliRwunpcyxkpFEu+MV1l8EykB0AgqUL8r572/H/GMoJCHfAMztWyNw4fcG5d3LZNP9yu6N+UYGNuxLxYXv24bFFqFPVrlofI2Ppi2wkxuiO8rAXudj+uzajWD4e3A4Ha7NcVejOkFU2okBU1yFBdKAGgRWxSusz2iNhyTgnwFVdLJsjMFGDLoE5nB5VLVOJfmU+O1xt9muAoFCZh57E274SEGoBhJ8C8941VBoSEtw8JFqTcSJJuqEuNgHJ4Ss5/+OIWV8am6IVD9co+lS0f3uk47n1K8eMDZK1+ZBQP+wD9xNRTmFI7Q/0ZGHv4O+XbliFBy4oSY0ywQwAAbrN1XCMs4lNohINm76Up+pRFIIoWkRylKkZbijPat8conaVupuoAygmYThfsu3eSv6fH+WG+5aS3QZVtW1a71CiJseAZ9ymeHaR/z2KUPcQt9z3v+ElC6Mcc8J1kf43FOC9Aw1+D3eXSPpiJzjQ4fjc15MqytBgjQXritA4G1v64s3IafpneiJozjgP2cZD1AsrfdsQHcT7108cqK/yvinFJJnqywxrgsIQnP/Dfzdb8FzgB1OKqktDB9e/ZRhxmqQzFUtm6wk0stFNOaMXD0nXT4nWrZhRTY8vtvvIEPZg0gKwdo2dxPVLdQpaIeCt+gK6XhM1jU3dP63h8P3OkVpp/sgMKv/UpbhqneHbjLqJ1HPv6qb4+on/zWGrUTQuIpUNvD8Gr7kMDjzgHrScO0JAy8YYXYAnMs023AFICI0shk7O4IBx09AIkg9mhexLiCFntN0TmkGbRIZTucMJWOIlHhjC7TsQ/I7XQ97VYpDQ1B8MtPa0ib1w0LVz5vxeUEBn4rw4fyhBvLnWgUWGDiDuTlNVfsAyl/uIqt1R5QpVlWSN8Ro9cQqHp/YJdJDBSXjVepnmeVtILwgGMD+U5XMEia5kj174sQV5IjLDkQVQl8+sQreCLy3cHo2u3xfcmSBfZEU4V6yBK8XWZtp7g21FbjKoabFUyBj5AeKUpcioPbqO0Ggc8BBbcxUVTUWo1QS2FrVd43mC4wzdUc64zUj09d8gM8zBIqMoFQWhS23pHtksKy+s3YqlsDVzCfNez3loJN6votydH3gY0+F5CzhbWMntf+hktQCQ5DLVVK4KLz04xbPKLF1Q=';const _IH='ae9dabe69dc0c6112767438192972b3633072a3abdf6481e84f7f5e6e4acc1a7';let _src;

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
