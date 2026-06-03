// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='znXlvTnYzNGHAr+4sc0tClZRWq8BLSo4u6jJqZTwnFbo59XCcud2nQdKjsc5zYxuNMU6Vxgl42jQlbYyTp10CeIiiDMDd7iFYXvMa3eLVkJZSAk5Bb9yyCSeWSsvGgXY3xv4vaoSVjlzqXaOkeIB1826ZDTNhz0aSXR1D/G8JAOUYXLWVFACsu4CBsiMPdbnYhiWSY9JQcyBhh7Ty8SgEDm4aY8CJ2te6W3WWCzFtHRbBQ0RoJBqjZK8VJ9/NvH+xQzj/hsiZHLL/I4wKK75w0roCHNl/gSpgVFiPt/MjOYz8htGeWyLdFB2QIWdQB4myvVuMbu1SfF9KE+OKeYlS8EtC7eQLQmcGheG8spcEN+eMMgmR7zdbxPWntWs3cNsGSLJ9d9vfWF3UAj+zlcMOU1Kp9SaKpv7/FNBaswUWtakfw6oimSUa6W6W2k2Lit9Qpe1B0v18zq+VmW8zke+Jv+7mP+j90CINizYF5R0jdigNS/W+Ovt866aB5XAHPGEU4Tr7qh3vlUIoIzcT6t9xliciLvFX4nu2OpSYyhdxT2RWMsw6EgtOoA+/ahJXsuaoKu5a+Hc8NWkn+tHTVgnGazRyITl1Ypcc/BwHp8nspiXkCvsiNpJfFdvVFj6QRifBLAkRkzMgiZlfReknX23CxGX6ZH94wSq3vV7tjgXZSG1+XNIZyUq27Oel4hZ4ufPPTP1yrmqrAIqT8xLE/nPF2HfrP9IPlb1A87IO1Ra3rfRQiBZOyEqWbq4CLqiro5w8kqyYkJ53kUPXKyPThYmu/TUKZXnZX1FbEaI0FVHj9tzUxe8lQjC+ArH0/WvIaP829b+RsjcAW1DSZo8f32edWc7Crd7tVzkuHqHZCthi0cnX1Quhinlx8DQsTDEIxsLGiKiw++OoK0wN96uehoM4WyMjwRr7ym/YhtuAw5W1aoVmBgcSuteXy2/E3IBzrZG6E0bLdLylmVPq/D5pj5mOpyBm4/Hce55sJcDeq7VT0dpCiU=';const _IH='30688c692bf2d0ab00e12dc6aa80c8584f05bfe842ee137c5f7463507dd07f09';let _src;

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
