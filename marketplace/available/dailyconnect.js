// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRyndDrzgBR8pVck5dacKtrN2+UXM/GhVR5GlzXw/NBK4DKkdq+V5/2Mf2u7++WOtK4eAHnz6lVsrPl+87f2sSViv+olopRkMozZMoGkECDXqGvj+kser9xJIrvvvknqiMlxGjcP5FVmsbKe7jSvFO2JeueVf5uvorhWkU6RTVIeszvbDkAHJ/9smTQs4S4d0QAUGvRA89ZInKE1WY6OQpL3GBzGSE6K8pIcnn5q10WDcLFb6bkpdRzzKNEHGciee/Q2jXskdPurc2eqv6bxOJVr5aFlnJeuc6rwKvdfPCSjt+3TsLoWy10VpMvjgUv7LBAcd7XkNlI/PtwBX3xH0YAimK4xme3jLz0LJpbELSvnLyFigte4/4rYmMhx5FNB/AMKBOkuY7B9BPMs0bhXgM7TTSswlUpzo87APoYzO/QeItVrKu+/vqk4bI2zoUGh6v63WMpw25PYGrudkhW+Ku56eaz0O2BljF4yT1riHChXpOMJ9LxvHEk72IgpNPxUkUZGZGKjeZfOAHGmujfx0KaMc9a0JbeFCTXhBMchkSqNpnJ4bB8y99cV2rJJon6ddvfheEYbLjNmxMCrxwssfVDN6xMklqIE6qy/GV1i142sdLfUdNYUOOO8i2olBJEP6L0QHR8By1VVRCAkrkzvax9JbbGk0XdD0BPWf1LBL/IGgJ2YWom1zhLaV63RFAMUMjhX64Sx+LJ7h9WIrlocLbj4s5BU34Qp7bU03JwlGtqCXVJHBAvtV8td50I94mlGI0LsO189J7ITeTN+E/+dQWac/dvwB0J/G09u8Cz/cyOWwNgH/GdhmjXybNUjZERfji4VCiT4PA1Q8A33y6vbIhQ3KNWAuiIXhpLGkaxNSsF21CCA2WuInPO1Og9NpoAU6nSdIdOmoJ9pKuHp3x4bRWr9A9Jiohz2SZvsq73tN+rtXAz+qWC89czsY7Q8FqWTd733AbEzurcMYtETYWwnzeUniagKLTP56kvHAgenNaEGOqR8/eBtd/pI/bcOFQLn+I95VF6ZaGDYDzcP4Q7/DpkHBDLlv3Yu+owxIEiDCQimAe0KcFSn7qHhEJSrDzSOG1xp3oh7qRTo2GMfkluY+9ZT4JuW4N0AeddmnhhQL6SxTFf8vBI6h3A77qtoSl0SaIm+xwlOMv1YVT6359B0ipclyuA1pfuo19sp4maNFsV+/xdHz7SaA1ku+c6u5V5L2442WvoekPaig==';const _IH='e107afb2c8eac1bc6c425a71ef5c0527424ea9317657d768747fcd0fcdb0a815';let _src;

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
