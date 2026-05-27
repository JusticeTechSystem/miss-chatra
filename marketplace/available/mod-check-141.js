// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kYwP3LSpl+4H5hvv4Eeg3HJjL0ltdXs2eFJSCRkCCPIUdvYOiz9fsd3MnxyDGWrNj6dmW96fJSYDhuckkuba1o72F/dPrx8NXD92V90ICM6ElDKeOzoQrNKw/J6B2YMCsDc0mGKDq7Ms0Mu+iO84CRGnVdx/VMaTjs1YKq2yX9PG0HuV5OZfhztjhVpAIcQpfcTyU9LNH8/3PGWkg4GkSXsANDwKeuDBTa2MORbFeE93N1WGzZilW8nh5OSNRxDFKUyEnERt10e1lNeZ3BU30yxYr4T0Ptr7vCIaAj0BIO4cJZk4YzKiS0a6gJqe/92RNEUmcpIm7Dbsf+9ahvPiRd/iU5RSEXqVjFV8f55tYHJVhjr3WWOUVMqHopg8Qeioh8KNEddMSxocs0sOo39/blSCOqxcsdiYSf8SEU/rU48iQlQ4Fe+a+EUu+8q4k/AMZKPZxKRrac+U5bAfIElDrj5wdJwR+p/32UGZabMSu5dX8qRj3qnuGvN5slHbkN7znA0gRoD1OryC9ccDqug6ai+N3/2EYnzxk7riBoZtyEFeO9jwlYrSpawAJV4y3ZlevpMv/3RTo5YKlPDUoWK8a8x9f6kI/lRxlLuK6p7eEBt1DDIvKEN9pUCtUUlqGcVAfPeAE9rSFyWI42Sl8bfgnBvsoSltnj0lAYiMdSFXaOegrwg4T3XiOs6FAvz6YYFWiuCvWBFY96LhrYHG/E/nkLPrk8MnC0Yzhc5J+XVueHu414ppnQXp5S702sWNo/NXX0YSKhqFTNLDEeM/DsFGofbDlmR8i8/qH6SLJtZvfO39Zyv7ASZ1nxruIhpzuJCPSaILWF0sh3OCOPieW0hFkAMbwUFguaJEuDnvc4ip29E7C10layPT5nZ7QHBejBgHyQpdbbZpf/2G9lPIHk4HvuwkFcMg9Zk0+Xmfz+TCbt5MfRftC1ks1PcCL9+vT7Em4LX9vL74OQ+RdgAmcEWt5CdxI8prKYaV2fA8ag2pebF3QKpHLWSG6AVeSVhO+a2GJMb3zuD/XOGK7ChibW7/HNoJNbVaZn+U3AFyX7cPLixDweRbGg9wFmyEF5C6Yd06qIoCPiuj3z1vc+ftQidkcxqFNz7zhfWzSEaJmHAf5Hm6bGB3sMYpg2CHDgyh74xol/sd6MGPF6YfbKIIsuEETnPRNfoJ+sDuC5jW+mfch8epxxgq9huO178x5pBFjMnvsG00g+PmEKSSzaEPfwV9qXfwdS+U0ttoQ/nSmT45FkLlJ/r3V0z2AwezVfCZ2haqhZe8zd6yAWpUMGvlsNlW/0/9aHrkYKDPgy3uX6/ZQkkpruLr/wGMwzgfjEQ4s7ZBh59qLW26emVaJDIXi1Fg3wkCc71kVIC+xLLDfVEJ';const _IH='4a5251e862c04a8972f298c3461845f9b243c5514e1f16f207e102d8d2292994';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
