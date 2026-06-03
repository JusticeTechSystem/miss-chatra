// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hl8EK+2LPN775l3aUHa7l48/NUdCWLwxpnBhJoTxKGnzZCQKkIK/PdhE/bGgiLMOb1d9c86PFMmKASWLNDExXDcrhG6cNIVZe3R+5oFrtHn5piM6LHAXljN1Wb3L3kgF6VOF4UfGtiPI3gTPtwnyW+i+yEyA2RpRznlKZrpsx3vWZKPGbyT5eoKI2uQf4/5LUjGU2JwFIPmG3Woz30gu3XZxvab9k+pfdxjOl78DMc6F035lWzEhq2xNdBTbNkjMdg1kgQxGV1myXpg3NF8qhY6m6PicR0qMFscWQuaHf4Pe0V8gm+wFmAbOQ3747cDt+619Ge7kzMCtGk5iXJeLYoF3mCW32nxb272oCmi33o/bNqhZrJum4UNXz8eENw0lD5pzMTRaGf1SYjK8iNjLBbsfqTOYbCXE9Cy6Ss3RMh5jMzYPzxR5ofn9e7D7xXv3E8DkBvh/mEIoZMZDn0nAPg75jUh3fz+1uH63frrJchjAhTLqrM6846DrC1K2XTMTp7GUYaSAGndWDBt62mrEkNOAqfZfK8gcInYm8ELbQfYFoCZJHXcWQR7/f+3pmzZ/bmok4LZ+2YHAgxdcWXDrDjU3Cb8SdLC0rt/Essk6ntISwXMvDliOeE/3fBUrgJvhUZdV/OzMeFYXIz2SqWVxBiKK5H+Uq2qFs85L8oeKVwH3+JfPWgHwPzT1sWZm0n6Q8+JpV6LgI7lY+dGcNF4E/iEy8ZeBfVUmgO9gbKOhQSlNv2/irP0G2mxcu5517GCgEaNIlG9l2hZSn2NWCC8ehPR7cFphyjNpLuwWriLjohigCW/Dnpw7iorIvVpesd5ygTS3S2B4guwH5Ev7nor+PC7o7LbY5uh3YqUjehdANNCyI7P+PuEpkpnlsv5N9lHl0x4tJsZXe6K26W6xvy2cYXM5B6+CEDH9AMxwmf1DXNjaypuGRgn2qELkMCFjvteLcCn0mnHR530oUAMWG/UfcOXn/XBN3/5LJosvcgTVCfAARD8Oy9VBgk9w4ixCe4XLdbPoJGCEk7v4+myAsuhPK3QMiUoDpbCgyr9A4lI5bFIdIqu/DoiEhIEWmBjClyM+UWGEMfrV5PeRAujfNRkmaY6YgbKIRM1frbD6SosLCaE0vU6pUtqAB0Ur7U+wsdzQ9S6VIZyRyIvwkMZKi+yPC74Gc2mhvqJZrg1q6WV65DlHoP0KLzp6bvD5kOoikjfEJDva6ciLDtiZSbe8SIAM7Tup1YJ/QZ92eTU5HK36+xDVBj6QsfICrPmFgCUD5MF8APImnga5QgqfcPO27Oxs5uZtqhxkktTfolDHGZCFVPOJ9Zlv4FFTfBXk48pv9glF82SP9gzZJEJC7tz6CE+im6zEhgAK8Wx08nu1QDXYqkJHFhM8Aku7HwZsxgkV5W2jSoo=';const _IH='3b48cb5fd35dc58f5f250d99cfc2db82b23a86e84cab192c27c4472031279d06';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
