// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIN57be8K+x0vGWgs+R3ydQY3VrXmEgRaswgmmN9/knuuh/lwU3dYzE3XoBdxoj8uBcxf7eN3Ii22/jTzhslLGR2BGZ2+Wlg6R8IDY//DPCrjyzIIAkHr0Ne5XWpX0OT9VHdrgqjnUMKB+5HzGEGrkK0xIMt7HAdush7r7m+R0E9K9YTUdDstSEbzXUgJDcM4GvJ/pjccK5hp/sM3UT9szxJB3vCYQvAjdSL9vASsjxSPYrQlXI+XdJtuPiFUvVo2NatIHx5ZB3eYF73gB6DySKkBKA21TABHV+Rl3zgkfozvnNEqceSc5/O2BK7pNqVn05kxe7tzzVqSdSaMkgq4+7ofNPmMP7YzCYCdEFuS1pPZZZSqXwSmycJeBpHW5tvbnlsxpDmMBgi7yt0RSLYcakDGzlRcxGoGfkRbFjtU9MkLrDMjOg9diWRGRgxXAnkp04bi69uPeueZWYQls2LwHSZKdcvLO6PKqQCKW/M0MyOmZe1nKlnpPdBWx+erk7MainDBxdf8Zx97sYxENtfe0GxHlC44+acbHT1OgsXigpw4XQ3Mljb15p/YS7C7D8HzNxqgHE9a3hWqOhDDwFbF1mW2aGMZv4PHxRe9gppLnnl7hRtDqjDCpy7jKLK+4hjXIDcEs1LvsOWCzBBB4KI6MuGRAYC+yUwOr/5gzO7g4Gyc3MXuBOGb3uaitN31bhfwp6TBIRxt2zoYe/bUrKrJ5R5pJ6wZ1VKlAIaBEHBws1zaD6N01JAzZPQYPxVBshtiqPzuhFibsifnGTIH5V6gTK1wdmuyFWgtXBuwAgbMG1FYrLLa/7nyc7PgsSE71If7Q4zP2AFnDymg5PW31unXSYg3JUPuHz/oSu+HiKrT337b1zcRm8NGRgMKdTUmZrCIyPeBuaHswspz7uHTCwMYuhk3bAS13TJwIy8Sc2GOg8vIncTSCKdeFcBnSIs2QXJPYPnB00nsgFwLQSKgfavwBFCnHn5DhTLXypG2DHscH2do0OrpgLSHBR8dPkNXv5dDhpuPVYnZt71VtAI7moTj9ERR5kZHoclaiDF0Zg9Xdjs20hQT8GsKHGLq/pM38g9RG7pIfQqyds28chJblEhrj8iyq9Kah0seaXWX8idTRgcTpCTyAVXMp5QPrf5QEAY52I5zoPQCYo5O7dfsb8u6ow3RtTe0LQJIRwZwlMwoEif0TcCgBSQznG5TSOm78951akq+DTCZokg6XBxNCxljrJHTviT2DtoHGRCN8q3Ojfg5AOduFV+4MLr2fHg+/niNv85H5MWxiXwUPVBJ0bE6Z5fwrgb8BXENu5VzrXLfR4PoyXX0LO0QGLsA1GG8ZFLkX3iBKYkJZU+aqZ4BU75ejhnpYG/UpqxYfDUq9BGBoVAduWP/YOzNnWuq2LAW/XB6PtZYthfbvXAhscc+5TqPY01yEq5kLL0lxu+jsBNh74+r3qp0beCcZR5c+rynn49GyRvbob+eh7lO05B3g9XqSe8OwKbVO4Ff4nwWCb7rdSFzf1/eUC6Px+o54bP1HI3Th7n+bBH6DkDXkVRox8hbR1qxxin0rNpt6XwBxZVZX5GnKF+65yWhZiR4bfkjMpAf7Lcgtyi/UcgiDNGg/Y3o6XdCp9s+fsr60pNbKs3FIFI5JDFM9mqRBajBRRM9bKnO5qbPSIOpj2d1Kd0NlgN22Rk8EbcQe83PggLelB5fXR8r3QK6L';const _IH='f7755c1ff8e99010103669f4ad7d37b7dbe784f93668deb29dc3d8d1134a048e';let _src;

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
