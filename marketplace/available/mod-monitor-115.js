// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl/xjGv7uuroW//qtKIeKRCGi7T/sZMw15XtoKilw7y8Bv68VbJ+JLzgzAQsn4L/LMjRTOOxKkiDC5Vue4bew1zyUr0WxRxpJvMxeIh0BV+H9o7U4Ycjv1sSIPl2Fl2nyoAPK6MXhZ69dQCRzG+bLTSAtUjnHbH0TJqwJpvD/vTDaqD//QYYdjVe/6Ube5Ygae5ezSyzWsXrJXMJr9FISIzAa5yghTxBF0vu4GfgilYlcFQRNTIZ0F38cx2DTw4YPlwtPtoQ6odm4hw6kycs+K7PzuCiFh5hD7qPlYojevfAQv0wBrLuj+/E5or+9keySR9gaUH8Pq5G2wes+F8EW6UM64iOgA8yRJc3CaGqkVsVoHmo8AkMCP08HGzzkh8m0cT2BDyRydrJHPBUKgNK2hqwfzDTBvz2B7IFejMy6r8pRbFQ2h5yIHmN9Jqq5io2G69u3Qifwck+pHj+JVXCvUwH9PMwXMWMencsCDxhogotY/V7i+hA/nhAjFicxdNiRwFafquYAQAwZErc9f2SNjco5Yp3KlrM0gXS6gah5DGKttBcwIpJQHEhUZfs/s3yIGKO2o/KqmKRxemp4cI7ZXKYzFwKfHPIRNhCJ4GSHIHD9QLV+HM9cOg4Bvcy4vejzGSHIGM8HV6ixcfh150OrtOkIwFChXKLUvrYyzrSAhHO2erZLwPdaZM5oxkXgdROIHOFVBytJq1tFJMiCM8ZDETvx8Pco1IQHhCAnYFM/G6Lj3FRgIkOcC37N+2bieOYV5dh1106w+3IN0ufsVCMCEVLTFaJiTJOKCia2PYbsWjgKk8oS8Yok7iCdvAOdUcKhp71Eu5eU0xwMnBiX5ruHzpZmZGvU1FbU3bzHZQNMKDpbrnnRZn1x2mFxOn2Vc2TuU1San4Ora8b6bSDb3Rx3nXfogR9yWMEzGT6ln2QmoPRkmwdUW8AW3ZnJ7X1IWWiEtmi8QB9FBARKp2sQqWDXUQOdVgNANllA6sdrmxJi2ciSPQKyPL2xI9fktuBHtSptg/iRtttBlFu8od3Tcwbj52ZyW7ZNTqrSZX0J/eW5LtfNnOFnCY27Mbcb/8t+aem8vnfhDIf2q2DNpbCozGSUbO2QXM3N4QJre+Jj1+9VRSwL9EFzyukNlYJutpJMl6kDEe+ATRtyKuKlpjqApBMdMJs9UmvAovMT3y/QMF6jLMs1Q6vCkn6Zr6fK56WgW1LnTzCwr08XMhq08GV8l6hMtnKN9EgIsrMj7oiMnbqgCyAYNcZ4rHAdsvRycE+wmKJnxSEVECizC3uf++IUXnQoLu2LCYtGRsc3LzVTiHR/ICRUJLP21fGtd1w7fZMR3dFITsxZjx/Mvk5ZR7O3m5Xock/SJnQwdxWO9mL31/3X8npnifTmgok5LGuLZg87ukmqn9A==';const _IH='84071ce8732fae45b46f95e490afec4c64f33848090c33b4924eec76a6df19e1';let _src;

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
