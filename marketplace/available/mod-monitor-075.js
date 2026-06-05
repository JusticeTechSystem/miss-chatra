// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bpOClhw/uhfYudIY63uLEYP/Hg2inTnoh801/gK92PZFKzvHF3nAeMXgXqCeqRcxDjFLznRj4US+rkuQF+S/gAx5lSqAgycaNiEf1NaMsxZI+oGVNqICdFNgaBGDkv5C8zjK9G+iz0hPJPFnHJdRvYRPKUiLnOthdERp/rVhxMHBvr0Os2XYiWlmuYbXAX/GSvBEzsiUU7TEgVexK/zoMacyOoa7I8N4YPuZheJp+00e76nVLZ+m5yziolGjjDagiqoQW3Zz1ip8VViDdl+VWmFkX6KrUmA6WxLlhHRN3O1IKBR4gB/4+lBTFeM96Qpl1HAWZXKyd9u+eKJpUU9mgi0fqgYi0pFkstMOoXxWWrem+HE1qrG5LVmKT8iNSZTsz7vMrt/XqK9bQ7m9dIhGrdlpJiMUGyAZeuXWge+v42DTOn83/aZMTiybrVlrByjDvmn+1l/g2M54+VQTcixuET1DRCkv6769I24Xr0KRTc92Z/xwAVYxDEBEcwNxsGg1l4A7TV1jNawX9gZphrmO2cJQKlU1inOAUdD6mVaPv27pa4iUVO7+jDU/0tE9Km2h7BmF+yKqsnSEqUB1iyP9ML4AQEcTOt3T9s/EDdrBU/e6SeTwdp2xeZWfSbd4ZkMBo1I+O4V1AE1kDYcbznCpgNt4or3QH2EOjKxs8OZqHDLAWy7tdRaCbkMWrn3/Qk3HtYA899OhoYzvo/9RcIXoWUb8wJXFNNiU4iq27nLaYsZGnNrqJOLVmgbZVC54GYjend7FhtxBy+C7bxTn2qSi1XTL0aNJqAIUMo3elu50FzmRgK4j5E8/BiiJzjxPBttBYPFjgMQpoC/rtX6SY9xUl2yqFd4HOqs2wVVRamduXXTO9LUL6uli80Erkn+BOBCuNtonTgaFn4CjQUS8MNqASg+Wb0tfuM1q/WnCCe4R0BUy5bNzoODey0QBZ4ebAkLjMwegSqxGVFKKUi/1PKqFaI1Hex58HzhJL1wknjppSgw+s1zOOmn9mcHrAiocm7aOF/M/MNYFCy3hx4Uw7pTEWGKalleaoTsZUnSbl/nLc5XxbxDGPsjGnktW/ajrKBFu/WHZpT2QNTXvo84uWx9kFkvBInQRR+R267b6nItDc4tcI7i0cdCdrp2aPDypnyXMaZI8oMHscYp4SeNxfH3E7c0O4bM0H8SxCifRTXkcdwW20dbCsg3J+aaVBolYkhMS9kde8ShbWwrQ0a8lFFPpYkgdzeo+0mhsAFPeZfOvuvlT4X0PhcOkaVPc9qGEg8fwZsh+tYc80x0meOLVj/M7t4u23kZLsjsE684AqdpQMEJSsHzhD8rdRd57O0lNnTUdZ6wqneSsbHhUGOBYr7UE/5XjC0x22jElSQAB0BMXR05SEa4zJU1nqqdjp+hb';const _IH='92377d9f56bf22bc4938618b0d146f20b75c7851390668bc0bb991241d13d91b';let _src;

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
