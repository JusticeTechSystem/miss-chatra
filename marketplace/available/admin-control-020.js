// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxmwrWwPsOPYFREmJ39fmMlns2IjosgYTwrlEVVJkfxTFH/9Sx7Efp4WGVlWHa8LYbFUhOUILuiO1EYCodWERWBGdklFZKK/PbkzFQ1F7lgoLBLwckI+tjkXSKnSvF5So9n8lCcqDAYTZJXYlYxMC+600Y42C+5+Qp/A6iu3cWf75xnn8A4JEwerQJ20SevYwS8GhJWeX3Qgl46b7isHCbh/MkjCF0vOiu3ytnCq2e6D3b6qkwvyKM6bo+xT26cojreEbE4T70ryC+tWXAZD8oBlqy+0msPWfMlPm2WmZnt6Jv50ChClyQQJ6lptYOS9l/CMhNoSwRJBybXlIlHVMZiS4qrgNmY/AkfmlxvDSmcROo+njoiuZo2sFTTEWtu+642iUxx4+SQzuu/XEEL1vkMYFJqb0p7tzkZAgh3Lu041442Urn8zOlcsoS8vumpNb/GP6QwI7aMvmAZmPdu0hMIFjJrnJ4+n+Il3oTN8LB8U2lAOgqFnIqqoyc1Zcfmm2TwMrzdR86HAKf6znLq5Wr6g310m0cZKraoNqimnHYXREDL2+o5dWEOGn4u5Kytl4yiyt13AtJbJyHVVVCtElo1MIi1vAH/OgTWfH+d1+j2EC2m+6RxPZ5xK/BjMBHC89bDNx3+TqbKW6lgNEeeRcNH253JbYgNjmc8rN1nIsxHPgf2ZJNjsH4V+1n5tRgBRt8Hh1vRvvZeqSN8TrBe4P+5CGISkIaYNkzG5SQXabljNzffsZmQNFX0y6y0WccwA7AGu3hg5XGi7O6YqQpcTp/qVw1sd/ekoUyrcfFnrfuBH5ETbGGeRP4YowR9kelMjd8aXDSthXWSovx1x1ZXBAFRUMkJsky4um0MzMaJwJKDo6jEuVD/yX0Tzp4FEZ/No/dq79Xa6XEat9zcq33ec3nFJGA47ex9ld15sxf/niz/M9GACdL/dxZaxKnnvZC7XyEmDjznUp8yl31nLe8MAwUnkKUcl4yMh5BNnibzGuxdaeV1oZ4K3N2lBtrvBNhRNOcWG/uM=';const _IH='3493c6e58f12cc69341e0491e62ac5199d03944ccaa2f7539d64698c8fdc0d3b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
