// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I0isc19wwTV1A0k93p0UCHCtYD0ly3l6IOZoVwtnTWjpoJgi9bc6p2fErJZSe1Bdv0y+v/4iq8Js6EXpOs7v4x91OGqomOA0JAsC/acs/Ngc7BPaxOU/gd2y3NUeCBuD2Mw2ZEosZFI8DaEBIxlqUpJYU9Ztyh0zV5KlmRpG8DJ241VdKBSPOypRs8Ed+5IiImu0Na91Eql9EK60Mpm5eiHzOevX127qO8BSNhauC4tCU3Nbl34/YmQlarXvZGBX3dyceDHrpzXoSgvAPzb/meF+dyqmwj64o31v8hijm3aORsLtvyIDBzozcJaSHP0+A8HlqxMjzcsPS8f6NzNk82T4zmz+sRyYDUXn8OZjMVPShcpU23Io8spR/6Zzna+8wvaAIYeNo1Z12GL4YupMYCRvV6BkzcW4/dMXi76P8nZhbUedk5GPvcLvPAE0xEy8zZyHytvY512UUtSPsIDDLuug5XnCpgcY1fevIvABH4F6VRgx7KgLjIiQVnEFGPaeHc3VuoYo+97M9m8/ZMLsO3UVLEzkcf/G1mPsRjJJAaxZrPk4fvhuhojIhh/q4Ryz9riX/Bp5WDOZTsfl7twmszNNB+m+FpVrKPfkZtoL4GAXCU++GmV/tQbTPwGKXeD5keQnKlP6e2kmW7e/k5hzDHYel9J7iTCED0XeAroi4+xtowRIKwBvhxOfMVH8MW2krFm/mjqP/p4xZzU6xOFrNDu4uZXBi+GeACA9GH8jkpC7/g==';const _IH='41110baf0f30a76e059b7dbf357495815ff027e414906f30e6ef794d179160e4';let _src;

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
