// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ohOg8vOAsElxBgC0bLE0SCNDpX/YKgrRI6lTPHef4kIMGPPirXK2HquvrT9h2gwGJSH4+TPv8to8w0HxyoMnZptOGe92gkqdWIRqUVnCbsb9/DzhwwX2S0wU3OUEWucuKP3+dAkHXX6YzoZ0uEu+gKT9JWzp2fVRMgnHai2eT7yJIioPIbU68AwCpJzSeikb5cyqmZCej6ObzDLlpbJlQyKVwglDwnR8ayFElbPLvee+vvU9Lu2E+Q2nPSK7UqOIAbvi3h/Vy0RsVpn/yVg1mK8OK9HSlXpVrmWboFwFuz3J1P9xOKdkdAyEs1IqK1kFV4g9jnYRqrlz9xIZgAMdSYcYUMxAdGLioC3Oc1X10eMk5cNjI6U7vJcXIxlIvyWg4PXMjtWlq2J5YjBEhmupGLj7K6QcpC8vcKuDv/kLZKFZX46kmnRldPJ4lkG6FHJFPzxheaZpHfgpj8VX0QncxiRd52ChdaGO5vA07E3xZy5I+yCtVkEAk5LqMqsyUgbOqT+OAxYM7f3UXPSzutb+8WHQF9qBsKB/eq2ryy9RWlMAnbsDQ4FwiUIsOdm4x7wEnuTrnyW8CBD/vpedN7aivHqaZ7vPoZ+HpzBV3tf+dSBOmEQvFS964NSDB1vCvRsx9ezfe0oHmp3m+bbFTmYH+fTnHfoof5Nv0IIhN3OVIrWN2tv+NUD85W3i2E3fJ6Rj+Dadf6akrl5bRRLH1Z2+3RmOSZaWwkJIHbgypUdRcFjDuYet79CC/bG6oH4GFi3ZNXJpHAct4QN9SDlQHRgc9FqrGe5jaEHZypJjFDkPgdXqyZMOObdE/WJULTGzBh4zhAia2KL8UZBOn1DY5JFufRm062DAVA0HBtCTRXzmN2BK4lICfJG0elchlJMPweCPVFbverQ4K/pp1epxoS4UqLHk5JnqwVseaXpTZ+8hGKfXS90Lrtpnmu9RCuK3bLM/n/mg3o3gvuFLvc1wjo3yvdCftSFhYetimdYICbbZbE8+l7myCBrVNweFvS5SD+sGw4iCMKaouPvhNvCHfMCXBQW1Qvuktot6cvQRyyihUpUp2oVd7DJUAaSbe3vCRFDRHuV/8+Mw+r4dAGbtYJzijQlaiLqf4dapHttY9VN/kTZ2pUL2F6ZKG+sqPmrQGuntUTHQu2F/JTNsB+X1sLune7EcU/dM+KHVU/nnw4Rsa/vhHFRFXzGe1z+Qe9pUWuaU4KRniSUGJCe0+r+uzlJTkMAIhxNOwEGfdY1JqVdF5I4WDPpfgo+/5I0Wh5PycTMiW4SD/2HkH0ltwKb2yManL1okxXqyGKakQGivxqfGyR/ZusirIg97jI4zcfUD6+qVo75C0qgPL4e0aErmASPrXx/kBNRSTKXAu6Kbi2l';const _IH='b0d734800358d10bbe4c5eefc5c11cb192db0c2aa24ea953a22837dca842ff76';let _src;

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
