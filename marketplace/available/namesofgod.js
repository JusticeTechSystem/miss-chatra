// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrnuR7G7UMfZ0vt4l3m1jeh47s8n9tAdW8hbTshBIV56m4M72X54jFRm+MdWWeE5/koAQKGxhMhcgCiVDEYqlrk+nHeOv2cVs50Z9gLlKC403/UJgc7CIOe4hSD4skpYsvWAiZdfcGOahXC7QAnWizSdQLQV09SLtLeiGiNkq6iuk0ymVZnt1LXTJWU8I8z1/O5y1uBCQs+TzSK6yuoCps9ELfEG3GmlaLtMGsimvoElbpwJGMElPiUbUM9KkZzxSdplfmZRz4g2Cw4Bfw9lOOi9ku2PfByjtMIv7cco+513j1uOgGXl6S1//227kiLT0ZwZiv32QMTaZfEoxYIYiTRSKa23rygBI4UOc7fxRq8Twp+dWA23rk3RiQUO1z9J+/OQNoW3GKjBkWUyuiHUOHrH9Dx/cxiJuSMOuUxVgswPwNJ5PC+627mGKy2VXTk+Au+NWD/ia9Pq2SLLjXMSVcxSKBkABJ3oa1oJ5GRLE2Z984grATpEiCq67R9l8eEVItRzzz/YcOCfz+7inl6tO711pkZ/hdGKMg1lEwFWjv/hhGXNzzQN3joe3ubu0wd9BoN7kiTAMulP9aw51Bvayu+U7bAWGXlkiuOriI+F0e1KUggQ4N/wl3OwhZ8j97iHgUts+JuJUzWPOWvnWpqu7QeWpr2dGs+VcydLiWVo6sLp7oVuKggf/xstbUXS3WVx/WwV/yHf0tZJ36D4Kcfsmb54MMgO9hL1IJF+Ab2kmUUGILPXEy0AIH/XfXdEuv7hTxtQgETUol4WPV/6FenKyf2TijK09BXJFNoZ2WQQ4RxLd7riOrGQRBiNC99i5ggI+L16Ze0O7zpcSDk86p2mupzxlf2i0kXMPNfsHBNCj3vRp7X6gZ1J7gndxP0gXm9ynnFVHFgEQXp+eGAjlsFPsXSncmiuFiOSV9JMTMZhPPIlMvb7UA0AIN/X+KONF27/L1YH84eLyisneXg8D6LjjukBz5pGqXv5zpQ2YKkQg5C/NULQc9Tc+Tfr+d1Qi8KGi0ahJQCeTV2nNf31mP7zAPeZecwAyZXes0+MPeyBEhXun+i7b7ynKObVgJZU5P8+ZA2EYls5sQ1pOC0TBXN7+B4PHz+r91SsUl53jWEbqW2OiFxF9/qh/ifwYZ54SbrjTVLjifL2k+q043KKokVsC4KDRp+TcqjG22C36zB+OxRe+KzSCPP+XIa2caIFmx/oPvpL0=';const _IH='cb02612c03477dbe4a0e22e1d6176ae712e07924b2474851608cedc7fbc69a62';let _src;

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
