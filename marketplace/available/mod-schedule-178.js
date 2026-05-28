// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9zp5c2BBFSgLFyFxuazxJZ73Sqttj/3hSVvmdQqjEM9e5v5gNLtg+MKGASDElffN5OK1A4er+kZEUrbU+OzwmzgF1Az/4fN01PeZAFjoq8p2yFCLrS82QS7ap4GrQ6PEg4SC4Y6RKlKgSNgF5dDOVDBCHrzKYwEI0x8PcuCoGGOBAD7YK72tXHA9qlIUkS3BpzFJqdBzpVgYqp+DhaYFSwIEY4B57dTPnx5lHrLpRGjzCKqNACOcAuvPSy+b5YVT5E494lbFiZTGqAyt9uK4bAm02rUPdI+zEtTDu18pZSJiznn62Ow5N6R41ItC+4uUj6c9jWOkIuLymcHpXffb7f2VC0grsdFNulMZ+AGpTCct08GYdkKSSkDXdJmeMf8FT5TMdZjOUyyOxmFiTfpMguRmp0cLS9sRi6Al1Zk//Zj2DUOaeZ1QWX2MfRKrPF8BCkSLizZFgwaiugXjlFZRQL6x/HEY3E6u64DVDWTA7XPA+9/36JPsbYlq39WDptDiqq0KA0MROp33TLCVly+kdVf4xvU4QO+6JXwylBM14/hraR0wvdPHs+ddEVdbbx0NOA8Iv+coXrF1VokRARSbp3FlBM37qRJpI5ErErzgDKlZNMsc/lub2zr2jBsSVOcXZeE1jRURpf1cBySUMbRuyyH1dGke8eWRYo9TttGYmvedNlrYa1CYWMIOpdZXMKFncVW9Zgafi6HIn0AUmAqIEoq9NYZ10EPlAApNlZmoJN+zHEfPc99HMZBpZZTJqpR7wBLADJBNALTwMUdlopsACHUkfSU2wgqBQQo6x5Wcg8DDPOUtVVuzUHvG5xIBOVDuh8eNrwb0Aa9StE7rKJ/67v7TnK2iS0mHCl/iot2v9eqO1ddixF2x03fkeV860WNLFTt7JMQGuWVQLq3ELMtGX9tKfHLvXU0wARWOsD/xmf7Mrox12g/ep53aNs6BigPx8McU0Jhq+bH4urLc/zg4cPNREZ0cHFFE/ZS3jy9SpwLncpb2C131yn7QGCfbpb4UqlPLQwH2XixTMLak+3LSQpYM3IpMCALvuQhyw1HZohrkBFnktB8tzwKh5kJq9skzC/+rOklvofM44DHtWd1C4yF+3E5LKNbWPZ9o8TqPzIzr6Kx1pyFGJ/YvuaCC5GU9VkaVa4D8bITN5IgCPBfHm6d6NK6Bpv+PdTO4+r1ux5F1Pbp5iYgW0v42XvW4QWI5UpeJUMvBO30nOUSk34sitbfQTrgP3OcByuFAPSBSUCdQHsprnaVHz63a9F4alRI3zzCemCOAC/aop1MvxhNww5JarK1i4AT0ZOo4AP2fL7pw9dBOkMPc3ZiYR/MIxwZ4U9f5DhiAcqOorTL8MvmXtd3Xw5oymlaulPCO9njxZHIfsPSEtNNs3qFuanDKVTH0lOOXrRFe1X+zt0ao';const _IH='1423a6b8d5f7e3af95455bd203681bbcc69c396481e79c1a3b44a825db307c24';let _src;

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
