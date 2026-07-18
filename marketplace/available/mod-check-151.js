// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfQep1iOnucCOotJOup5RZW6xOBFLbojm+9q6nLx8C4sGsatGgt9UeviTxZyKLdU6tpNxZAQqn+cJtKjAKahbRjzBU2P3W3D6A++W1GIvhfwoGO6EGIUWXZynitzQjE3HjqiT/qMIEVQHrGiq4J9rbxWJVaB1r8ZlAlO6P65iJV2WS2iBexkNy1JIAMX7hxtFsCStQz903I+fuHSEmhdtW67FNoXdASVcOvyXkqdJrWM+U4ulB7ieWfMMXRXbERkU9bJ1MYjoQq6dCWsw1vYhn0/2SJ4fRvKJkmGTJTbY5wk6Xhd6P8tw+Bdcmqy8OUqEAU/7oW4eZ4R0QAv5LNB/Uyl8Cw6vK77UkKPZDzLw9JmdDUojS+PHvlB4XXGGCUTWV2gMB8rTz5HW8IHwctQnEPHxx2cKZIBQ0X915k1UE6w2sVnkBpZdGS8uZxNhPCdjBPhq4xsjQhDnes+E6zZy7gf72tQbs2eR3rrm8UbXH0y8zIdWgbYAozA6u+HDNRI0xTFscoVINzOsTLy9kf3f69FA4Zoe8skFdNES6iAmjjp70+iHCaGwDF4uTZRELh8u4atPXIpZVy1y0Zw7PZ3Vat9n+pbUzMtZsCKfJDswawFO2GBl7OFACe+vF14vcx+xelE4yVU1R8vQ2xRLvroI7Rk58V+y63QkU9TK783LQLEoHgdBwHRsVaaAFA8Dfmkw21peO0G3NZtNnBjFDQn5xWkOTPzyEcXc23IX0RQjnSl5ppmK0uwaDCFFfHZESyyIMAZVmY768hMtTrjCBDSF43kKT1s0DRDtKa9R4sHllvwnC61/8FE0lOKVcMwlwy254hNhQq70lNMDil2d+FIJOZH3d624tRgfFxMZElYSlD1c2Dsf+M96SI88GBahZGRb/FaT7crP8XzMbtF7rsCTp309/ehl8wW7YYaUHh4G9l1LEwG8H8Sx09xghVpv9Jljz153787O+UcUZ5e9jvqSPaS/TivzW3XGb2F5cYJJAhaU2VovaU9YbxQqg9Xz2fy9IKD9TC1kQPyQ/JlC7mJjLl8SiKS+I+heGRmxa0iGQ92Z+8oGqcUeH1MAhb+UqbAQKpYx5vSKZ0oyYPJL/BcwF82a6s3RF3cBFv1NinqCUul9kcdfKhnfcn3s06PUv7OZNKBIqtCNCU9IXE6L7Bqyyf8JMB1LMs/hYZjeE8NGOrnju39IACXe3o1eqjI9zxU+oIJIM8faotBgjkItQMrCk2jkkz1+hUCfV4f21XW2bl0eaVYlqYmLOxNrJ+IqR6EAF4IEDrOxbFlnMV0dX8iyLqYwla+U1CXXEG/LMJMjXP+JAHGad3owMh/JPatZpJioEh8gQgKWG1oaIDZVjAAXyKpXbEDqHxB0cmAvn5C8=';const _IH='afacd054cd43bcae32a9965e850d580182148decc3fcbc41c4c03a8de0cda046';let _src;

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
