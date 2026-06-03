// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DwJ9QDHra2m7f0a1TNz58mqmxikAJrQuzc+Ru2HMNTn5QQG9u6IG6KnbuIJggM8hxizGpCiXxIAWuu/53zwfcWVblHXjSuy4EdvKMipXWloAWhzSc4fu5dwCL2vPW4bsIRAXbkvRTrsYj+TJ259ebbLCJO+pOmKdkOphGzsdZOSXtF0xG6Gk14K4nDTtIOlyiDEucM16FFxgu/3btWZ11OWtaOCBgVC6G8E7V/+eDtObngyua2u3xF5NkwMdwjW/jtwNluMj7oho9+R8pcCfhPXODumtAiazDPpTdrmtbQy70oXtrga4OH05sw0XiFHEuba5un5nfXDMqT6apN4nji+F2bag/kYd2XvG/FXU73LSHj4KWX39/Xp1035vwTIOe3y6blWpu0ZhbV0iUhbJIJY36opIOag69bEId1FulsW5MZTKSgN9Pm5PUrdqrNZhct0Kl/hak7sDrP0am44Gl6SOKOFMMO8Ew+p1F5N5nhoMn6HKlehHDYHfO4cdw2dMGd/AePpzJr03LwY0kWQVongT1cpQiw/rkkhf5NuSsAihonTfWuoSxYvla4QgQ3bxtoa0YhxWPObMZgClPgK4YOdGbrpzxsqceO53NrmMRrY5q77hrLkfwYECi2soht3DtCbJaLNG5jL0JQaoO2TmSGW2hIlLLh1Ai040fIUnuHou86nbxUvKJlA9Pt4QHSSKIPqWL19+0FBZ+8l2rMoK45CQoq66T4IS3dXjqBT19UPTGykpzECzatrPq7eYumusaD4hN44w1ofiJi4xIEiiJxkTKeeUwbwMXPVV1+mzE7javFiGFJ9MWalrM+twS/OL/sUqcW5FbgT1cxkzYOdA0MUXMr5OMCGOGUYhRakkO7cQux5sgwfqItBnMNva/AXBzZdnGMinLzudxZCOfQYTav3DH+FvUX0fU4GYBLmRdKOR+CVdW1mggGl2XSY4cUsdFvKVrhLV5voSZDIbM9X9PPyeTjmpBqTibSZ90pv/5pBI62hoJBJxDoEDpbUJS3vGoHJROyQMDFH4KHXwGwBofdWjcai4JrpZyg2h+Zqs3joF1X0aURWtTg+oW/IneWc+VA/2sKp4gMwVrGnFNKuDORidUzOuu+EHtlupRrXGyNkI2VPNpPvk529xGy8IftJy9ywSefYJ+nBAuwtcymIYzmcXZl3l7odHJxA8NNU6C4LW3zQwPyJI/hvMJnYDbA54exX72JxCm8EfW2mLXHrObyLYGsivkhW9pNZRNG94UKd0nCMTjd2lE0NgN2j7QT3aWKRonjyV3Qm0LAJPfBQw3Ryh1DXZnD8OUQXC77dNfD/p0/DumBczy1WHvaJ0EWb25/gDlQelhIQAc4PIW/xjmK3D31rHWquwG6PdE2bP';const _IH='e89ed2cb09ac555807896b2939bdaad7b3d220c2122786103742f90fefa99e59';let _src;

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
