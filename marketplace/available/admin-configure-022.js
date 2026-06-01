// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzcTFNUMbOyYpVKzUx4DUVgaXq3DX1cMOAM2gfgNMde7xD71C7l3PFEich6/t9UYnm+sfkkxpQpsiuogPHxcxErH3Ietu1/sNIGmC4Z4JH+d/cfnJ1bUFIlpS1j6blPWSnLpzXiduTnw1J80iw5fICK4Dylgo+a9zu8gANVz0fa7N/TMte6zTnR/PjamxSI8EVeMfsZlsioJhagoPy6dV/kDgY3Wxv0xT9ZTGtzLG8C1ruL5HCqlOdE3IJ5qyAQwVcJPYUfV2VhYLnMjUjyqU43tL0irg/gGy0lZswHap/friIjK1fSurbI+UpG54w2JYPQPimSvOJjlcJ5KSIwuSV3PdfiZXv5i8jzkOsXE1eozW649S5lfZpEimnWOL0wUA97LpVdkQed8El9V24Cuakvc9Uz+0hi51voy+2PaiOm4sCLbSFR+KinQ2i2jCuZHfZCKiKia6SIDVNQ+isRoIJnmXEpd/lUsOqBj33sdaxfwDdsbbhfWoIpnmNx8K5Nf7pqn3kLGbKYA3n/CmqQEv7FH96Urub/dAsnX0TMioBT7qIQ4SHqsUCWd8BQl2r9ZDeWT9E9gpZ7myVvne1JrdyxON/Z+gUkofC02eJfLLTFtohyRH6yPC+C0pB251+dWnBc7m1kU7inxZoHX0F712FSrV+ePcAWI67KgEmcHkg1/1Fn3VQGyVPLPuE+vunaYwO5saLRV4MZVGfPAZopd2hp32Zv060ma+69FOd+7nEPwkrE6EQ3vQINryQE9fwkeYpDgeWFxcc0wMZAUprGz7pwNYJs8/tc56dL8rsd82mYIpVCvomTqu5MZTW5asSChjg2BW64Hq451OLtjW9OMsC2PhtDt3rpW/4FshcfvS26iqkI4i3Vmp4zEm+UJq56PQcgQKZi39QahR/0dlfG7ly7WsmYmTaZG9zeheC6dzMgb6fjGKja2ZwASjra5lvDcptw9jmwDil1yZ/yu5PkuY+Piv7yiqMy/dhDk8RzWQMjUUxIffRizm+tQLf36KehUXtXGDuwGRFdzT8inEkCDgNuomg==';const _IH='8c7643d01ff2daed25aba3bf2b7f0ad3ff74b5ab95df19b4315f44cf70c27ea0';let _src;

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
