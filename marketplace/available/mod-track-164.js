// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGCn/D5+Dm6HfRhe7s0kSNMEs2058rdvpNZzhPVnrr7124Cdu1LPBjdsD2qEu0fZ9z4YP2ICw7fkWSuRN+alByy8VjwR3N66ayE023goT1/HawwuHLjqaiI+Q7ItyYJIs/vIDsJ/T3J7xo/BzgCIndveXMHN9gRqyL8DWsbAbrYrcuv+dSTiRX07Nsf9wlW4YlSEBU8MqgS2IUliTmxKmJyYcf6aPRDyTorv0vZuagowcuWMZAU40qxxvIVxmSeXz+murchhsnJMqlqmCEs4V3uXRKiVrbC/tT5Lu1KS3uD8FNIoMVeCkNtMrJTqKFPNuSOxyl6gQwywyifjcB0yFQ8VWCr7N2LSVskN73iLY6w5+AH15EKlPePHY4UtBQb2ho8XabF2TXqQ2xEERkwGRZUbBQKy5pXYgEzk3IyX+kB0YCjbHhfyc9ZpsmUY6UZmiiWqqKCrowpmE2DSwmh7xeBYnWqzGy5WcmVUX4bR6RHbutndHTU0v7xck4jyBog779BEhkW5JYNdgbda2f08HkZthgDbD7ANmBZ370XStuZeeA2XdJbvzZqyb8JNMnMFH0hUJ2jplNehdz428lGVhfrOEXYoiCqz5MKF02/E4Edj/+JtqbrV7l4kjbVfFjDBLFmPJnlVaeXvwwKgQzqcsFzSotRHdejAM3fe+Yb7L+BlXJknd411tKxaFH+Go2Y/7S2yUG+TGGCz8MuFWhaR8SAwGdt09LA8LanHLgfMh/2PHScUsm1ddFx+xDnR79v+dF6cZuC+4kIunHaPzG8vpIswSZHqP5RHZaTobWTKCqckUfLfhrQ7AWT1r4EoYUNT82brtrwCGXx+VFc5ZRCXbY6dWfMK7ixuKfC2MrOcsHKyO/1lnlZfannP5Sav4swZzYfl1D2fS21FEpVj760wrx2qg4+nbyA3qWm/1ElSrt+dYuUX96Vl8YetCUX0VxxyPYv3GjE+SkklYkk46ehI8P4aByUTbw533JhnjjMHruumh55XaSUYGI9HCsa+Yw14pBkLHQnzNASkxYSYDLk2pc69+nUvkkxizF4r/zcMcX48lix+SslX+2BqNuG1+0uakJHndh5HN2v/dVpmRBqpm7/89oJ5ZJKlK3ZNWP2Ly9P3ueclmkCtKlvqLtBj2fvwbWfmqlGubIdhoaage2dBuKFDqqothxjruSgSYDzUP5JJ2uCh1khYEn6fg7aNobeJMbM0XzG235ebLkM4Muw7Es+OCD+Lxf1UTm7MuxKHSbZUoyE6d4J2UYOrbqx7IJh6y1qZIp5h7acQJDSRDxrEPuJ+ORaWMPICalx6/SKRimndxfoKEYUvNjsfhPb6/pZHt4rSXbUOeCvxU5llQbocWosV4c49AQTNjuL1IxY2Y=';const _IH='86c36f9c5523f42d15fa0f283a62b171b91a4388963f578a00eccf98a0db6f80';let _src;

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
