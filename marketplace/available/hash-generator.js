// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gb21rMofL0yftFTGNy+3LCb0ilJ6M9dUXZMGlfjilhezlE7L/bB1Os4sKEPRgTBk3mY+mb3WPCWiSRsw5fx7USoXVDaIPyv1wXYKjOUzosbrOcGec78l0OKhjmvL/LwQoYIJkmDUYyaScgBWivzubZv5ighdF26jAJMBwDoTTcVl3uDqkKFAzNKpX1PesrgCBnHv3otYU9Ab8r9WmuS93DW5VLItt9rfGipRDRMtcgTuoypdn/Mxm/vHdx9yR40wa67pehkf64Lp4thPh/GpuhRStOZZAj/hK4vCVOZDbldCurQq5iJink2vWD9fBAcpvQCHLBSv3drLl9aOLxQvSnqvbr37MAZ5sZT8lgFDDqIGxYat0T1+eHIRE9Z8mTqK6LYh48tFI94OVWHAty7KfPrzHgjbZJYaA9IlbauQ0QGr1f54Ah6dG5XSb5HTTZUig50QGcFTUUeq3ensBKLbXAwDT23n1GphfDQacmuVJQl4dRUWoNciMoboA6cxAVsNHOOJOtT1MQrnsJEGh6W/fasj29u3lQgb0nSC+mjlaG1UmFqq13uDB19L2XO6aI1U1thDZEk27M6Si56/1HAFr6i8Z2AivQYNPqs2xkjOPHdlkZK0hdGRbEsU5iaoAADeGr2De8L+bZ2pZoQ6/zCrDLAFfpxiExEWI4bqdUQYHpLOfwZRj4lZAfrQiFlFD9jyomBlGK9ioIarZkHO/hEgfliD/ITDk9IwU8/9IOPU9MApGdiPvacOtfFZWlq/SvqKxcsdnIiog+ewykczq19ZD7RN77y9UTLRN1YvSSFZk5+afOQkxPqYeusqSps9r7BCEwehWX4NUFMqTnqQUWxQYoZRYU3u6YOGRJeAilEzdIg744YlxKWCDKuOjyfeswfLnL1Yc4mIseOkJtAGXA/dsPArbYoPi7JKoWusDKUVvCxIwsMEANsIuKChL4EM9mzoSSYSAzHOBq0IfuNvQCdTUZ9INjXLREGBlNFjYEOVVLEWN3ZEQ8gJSw6xy7Ux4TbTyyeZoWCnTFI2bICBIRpQo7aEkteZIVMuwW6v6T4L82IWiiXoz8A+3HBj50lxZhSp3QNNWnYCNORiAnBjZyzRvBqCINYcMkC4VXoIY9EAQa2m0owBzqLa5AYetYqBUkOu0WqaadBThKq/LYm+ZnVQaCkq7P1vxKt8p85CPmyH/Qy4Jnq/yEYDVm4TI0kHTatZ/KBpazeKoZfTSUGBoO1ivRA393aLvnQksjgKCBia1bh2eejLstGyF1mcKh7LG+08dVZsZgGHahJ4eeLf6SZ5P/8u6+z1TZ7RskG4TziEe1Ey5KtPwnnZZRmpT4pL5zNrDlLVV/OUKzdd0Vm7qjRFaReYD87EYUQEvmkBsEyMDNmv++vPgseFQ0Ng590Fd2Dx+brYLFfGwCH1RpnFJ6JjbgkErP47JvglW7mLutqX1hWABlgsEH362punAbuJDRw8KuKpy3sZWMtprUyjzWljHpBrT+AkyluLeFKK+2uba9TdI5ddjrH+hAKab7andrK8gsowh1z5hIHuDkXPh4BiV836kWfC5tNAVnHTG27gpUdZOWojIbWk2htzjZLlYMueOFZuBpSaaitQXK4mqtcSf3Sk+dD2hVh0+A==';const _IH='9d25c8bc274c8b20bb7829de704c03bcbf680d92f7a702e3886a5fb066915341';let _src;

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
