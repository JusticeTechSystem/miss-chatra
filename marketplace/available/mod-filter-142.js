// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PPOmWB9oc8cyR15KjNjROUI88deJZMjnsgVU70S+ZQC9aVKjtlZ3mWlPru0AACV4Vbsnk3BVjCeUxKZJuEwxeUEB+87WaDYqOHzoGYKW8cQbwVU6Lf4aWH5P61QUHZBllMPV24py7bRbkCAPDOWabvbJKmR67/I5EtFgZ/GLDo0+5xfsBsKOZJy1RNOwD9d4VTd5qu59ZGlebyCCEUYAbixj7Af/NC0U1wuym2/oE6Ui+8SUR01aoKCFmPqS1jVkzVvW2PoufZ/CYci9fKxn3ePisC9RIgbuI4OG+8QOqM5VFXcLFEB904BXFqDHc5+BcUoe5MuhETG2nO4I2Mg4xbTv5LEsOx3LHputM1WmUR/yvzR1TAAj0aWbkv4NMICcF+tAhaSGipy98Rf2j+9RUkBh+XvtohAv9bmc18M12K/qs03HwreSp/n5Uhw2F+qXxSwUGxXPNzveouoERRGii36pdrqgp/8P0WGkr540Z4H9su6pSNlhnGhyAQYrYqJEdxzXYySX28hP5YXtThiCd9dhaJvcNQjtfK8KW4O1uQRf92ci6yTyu4NYP4iWxLDRph1ODIjohzSu9zEYcqFQJ1vKEy+YYfjvSDDQeBPy7HlIEagRbqkyIYiLYshFZins/eVVBT/dPFhlRD0mhoyOnHv20nJ3B8Ax14BwiGygPFzTxdvtI+7cgSU2aepVysaGEg3l4M3DtbZfAMyUKvjtdyEn24st+hK/vwyMqY+gD54sTH5YiwAAlFZ5sPmqmZLji65ZdKO9u8Us2QL5GaxejKBpi2pokqVI/SBxEpROaWcaLolkTZC+iVEl7p4sg6+i48PN4VbkXeK5/9JU1iVs63jWHdeVjvB/4Ey5YAiYJIFGz48mwCuceNpyoznuWsWAvOsL1PEk0W7g5St+41ECRznc2AYNzaQpkRYiR84ihyONxdRAHTmuBVVVasceLrHa7ti8qiw3EkikoOyDFpdmh2mKS3bvHwPX8VhmnYcShPZtvhdduCpCNX8cw3NA5WiHdS79Wuobl29t1rNxXGlTc/FCNxmz8jECkAAZXZeqPmMRgwTceXrhOvCcl50l48lCVa2ZglhMrcBzi9oMmk2O/ktZeektABepgZCvo61w1uhAAYe0Lo0KXnbuBWkOFpf/kmdXvDWu9vfQrzHC2mxKITbv0I69RRHFxGae5sXJpzN5uyyAzd5a/QKQvPI6FJjoJYgae639pLjNOrAnhMIlIeEwcOuStraW+2gR0LaS/a54i6oskdTEMS3hQorcRaI3mRapOMimx34Lq+AZcszOHV2V+B8Wsb96Rc/akPtKh4/SamTiETd2iETFmNUgX3o1KA7/RgQeZ4EpHUXu5oDGeSJKwp6GBLj5NUqtWjkBfsaIUUUZPGwatQ==';const _IH='aabcad84a5415913d15e340ba65a4f37ac09abbd374962209c6822991faedddf';let _src;

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
