// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPqA7O+jfjTpdaUdGWaqmSxEIv2f24DIZORo2+5SQf9OWQ3L3jBL0wPsdiKllmYOpxJVPS1Jy1dOvfTFViZdabEf/pN6HE0qVz3Mff7cqtrsKRPJpGLMWBlZAeP+Bw79zp7fNATQQ3OGjG/D+LqeYtBFf1WCtYvTGNSvI/PvmA7Du32J03uDovWDHNnyxl8qUMyPzilfOJOv/Cdy1Us9dZ+BjMyu+YynpOJJ9ZrA3LKR6uR3minhJrBWpvll1BoaPxP0pVcFp5GXeJLkalRS3kgDBkOZKAPPXH0TuWyj7puYGzf6x+dzJrQHHzhuTSjz2nPsExO9BnrkZQ8M6mSdZl1xlycvnaiOXK5FBqizpJIk/RiJbvzXdjGeZEOiSvyubvHZTH2bx3GQ8YaXLmtVavHxw0EY7muD7Vq+6CY5iLAkxdK03zG1bHEGHk3laeRA8WA8jVzKMDuLjBxu5mJYz/vIz0EySCl+qDouIZC9MFnesr1W9wCXjVg6FvG+OtzhGjSqffyILdgLvi/Fcok68vFrl/zMp8cM2nzvvUN2GCBzki7rNEKRvaa7KgD87MfVFoFyg+cKNOG/HqnpHbiXQZRD1NFybj49qQ6FR3MvPcYIx0ox59BkvGsuQ0lWLHRrOlGUtSI5hwNxta6e9fJLP2X6RLA0yFSZ/aZp1Z++9wfi2BVbsyhWfsHfD0QBK84Jm9xPOFSyFDMb2dmgb2pialNgL5QqjQ0i/5L3bc/VXQE9tJ6Lx0QJkwmYMMh9TnpLCsIyayn1gprdPZVTIX6lKXlnfx88okxxKx/Fh+tmnvhl5BiRPVfsHMCF4+dV9cagvAA13YlwBfKINChYoOEv0UpYRbEQ2U/Qg3phL8jfh3sXSlHjAgUyGahpIk53u3umXh6RJlmFTRu2yO1fTEB/oOaFqwqMmbwkVlYR0T7SPKIODGIlF0F1BCLJmi3OM2XscifvivC4ghHZ+xquR38Uc7PfwnvJMiC5/HHnCqZIBkkCdwl+llXUqX34RKNZKy4VXuXequU83Uqr6kB92czwo6uIBPRmA3GVF8GY0/srmP47fEYxNb1R09Tc7zDarFkoc7LBpJXGojkbmMEumZdN0iVWSSty6mS2yqVSMCkh6jVyTvQ2KJ4G+rIWbzFobN7L4d4SiYg5WvY9NaKYJ1VwPmsil4CPoHWvt/DAo3ObAJuWWS4zmqHMTn0pj5GenIzrVre+Y9WsP7z5AVq1aNEIAvi5OPGlu0Q3SfigtbJ0VOnqz55tb4Qx8NNqGKoz/DJkg8odL+8+pnnAZyZHB2FWSdN/HDyAqWSXU0YM7e8UHeJJUy27WEmxczz2b8VZUEYYrxPsw05LShSbQts4fqzA1XkzyNqq5QEWW0AkmaJtZMiyEuJDl5fzhY';const _IH='b015b8b74f11d3ec9bc1b81a8473ac98f28110916f3a6549fa1a73fd5df50856';let _src;

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
