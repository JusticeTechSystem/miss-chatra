// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cim2GCRjtkx1xn0sWPZUnvR6cn4m1ZRldYIUChTYwjdxf3owd5x8S+gwdPzLwXK4827jxantY3PPKzoEZH0l5RZCSgs0DXvc08UQjV+NO+LZnloFipUaObPiIZyLRO6G1Hbp2cdOzRR6bMS+H34P36ss8XxFvmGFgANtlPa7L1PgPs60OduSmQqx1i3NfQjVe4qCyqIKwuT5yw01LhlTJmU9qn5fyrDDuXkLylsVnJtLbeJAle3PBnyrK9NCCjUCTyNfKUNIbDQe+FOhL4DZOsYCHdZ7PMbWCDXXSg8G0w5wj/71pXp8kp19Odl2jsGxTimvqni2Er6BuOqwDheRP0jmj+KowmnfZq50O41zL8bpyn9TpROCtqb0aGYroHxM/LY13AuOmzY4s/HInkTxQSqv+VEQqDA5bCDuXlG5Q8GwgoU9Y7KiDfuGJrxrNDgwlW5VX+KcMUp0xOsnYaasMObRwMQ7ztX0CvIsEb6BRN2Xp7VdevV8+lETUfO/xrlj4IyWAZsgbI3ZklAbCCKqkp35aiURPLY0DfMS/aEURlL76JZcQ71HXqezIyxeQJ35XfiG+/YjFUg1nblig+McX2EuyZp7QvvPw+8In7vRn8YfLB33DhceHFZOtRwtjh2M2LBgY5jZpBX3bFC7StHBWnjnY6WufKNSPsaVVw9VQH9E1bgV0Ztbe0DQH3t3bTEc8NHu9D2ZTCDQJR174L9daGDjeKRyzAyuX3fuihBSNCcMoy2HB+gE0ppGtTEKWwuOaR36JmApLmGhCZRBLM99mi5jnNtEZCnZywftfGAbK4UuHbanPbbSnp3DTsJYipWmJRr0gdxsigst2eFjPtTYVGzebv6ksi/V275mXVGazLuxzjfbv65KAn2MsR/XdWhU1/Ga28u9rVsfLMj24jZJugMCF+3Fjr3xynPkjTSGYhg43ktd9NAzH3/78Crd+vkSds6uixrex7nNsnJrhR0kWtmHXT4PRIwkdn4l3VAMrxCI2qU02pafWV4VmUlGypEkx3JQ+NwokunOIvKE5R+ObPsPh91+ghVLVmNm7+vCBnuE3Lm/JLVkSIR5KC7K7jaT0a9+hrwz70ZzY/I0xD5V6kdjGSBIsXmy1KjmKSuLFClrdtcYHbB4opmJl34OPdStluV1aqXIkTWm4KQcDAPho/IZru/ics5YHWqk0kL9CIWbIwhj8BiJlzyIMRolCSUY+wkFbgH/UGg23q6Qh+zPk4c8LCGi9SHlqikfTKobHSf5jUZfu9a60S3GGAIo9UMjH8cr5JjddWwn8lBLSWzoSTUHgMYKO0Mp8fV3lBB24Pu2A3G5n09kkGAZCuXuQMob8laf84rFMyS6P7amUXq9A9BfL9VABJnSI8tvMok62ceaHtZs8OgO0FiC5oV+I8LPNw3634sSdQ==';const _IH='ecf94b17a23d383a9dd8c5f6911667448b484fbd43b75caee4524a3e3b925474';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
