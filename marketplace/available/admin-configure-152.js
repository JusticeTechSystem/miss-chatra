// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yr86XNGcR66hOgPl2VZwJJNNUpW8oAXwoDeFqexL2KaWpldCn5BJVoRzgkwHkWq2xvG9ZxrTEkSLSG5Cp3ksS2c+HjLZxbCz12mxDOb3C16rowBNwdZBd/8qSHDERxBbzfI/g8jfl9eieLAmGoVsCJLwPNGwc1owRoFkjEm2tnRsvtJYd2X3Qd6RGlljp/6S0oze4Z7J3YAlfWv53zYG6CCFApBLcrHu1XxBtZoe+EYTzypL+GsB54DmQcBtkYimG3gq10ompRBk2+Vq9xRPgyFHDXtThp0rG7Q88h85AqTFuK0F9PE6KDWtDgLzLuW25qQUtmUf31mHSw2OahW7xfGRcSdRv5p40/+3cjQHQuHYpvepWbqIAw6PVqvbeqLgvg2bMtixCaA3gfhYG2sz7uOpOVYNusVXC5EFp0DErrDaT0q694xaXr8OgcQLDzvw/xm5Sf5/TZjaGvK3IUsmXONj6jkbZ87PlmjiW12UMUGspedn4g6DK8MX2chNahp0og2zKlIRKvSRDAJ3JSlII45nEoR2Z929UPvpu2ZjzAok9V9Uynw6T3b4Si0sSe7/M9YTfcS9B+Zn6dmcLQkAl98Rky7LrGaDzv53Rpa/OFMlM/lixUyOOBRq7Hw/pLIW4NGaIKXlqkVSAbyXSO+svpKi+6CEW+u2fTV2qdt58LcXK9nUj4gYh9DeKKdrCzBy/D6EhYIPH1yTQ1eYMCDi01vSDJu1LfYM0Llf0/9zb3I5Amfhg+h08mazgVzhm24P+WdHAvSIpzS60XFnMsh9ToqpQdRdUAMuXvJquzwoIeD+1HT72tuadguLcUWP1rsgurMl3diHMmenTErcz6sBYBYPKEp3lWMlsBfFPNaIPJNgvty/7Erem6rUT+S86roCYxLRSqYpnWjA6jkdPWe/VvBEDWxd6Leq+XmfFjpbiXr9Ac1r7usW2IKol7w9skBbd1j5UgrH1Pi6crzAoOnP9OZW7HxDuvE6FrxfDYIPS9GK4X7zLHV8Q94G+C96DIlnv6IrueGmJTqJRa2EhspmBOGCLDVtdw==';const _IH='d2768756b51840776e5b24bbf7c283ec0a5b075cc2deb819a7fdfdb5c7730010';let _src;

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
