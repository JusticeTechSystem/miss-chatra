// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='38Bm8zUYTVricMiFEL3i9s5m7/FFWaIHLjTlvhjZVsRkCE7BFK0oOLYxzRZq35km4JriSGmMjy5SYWOAMZQ5cGbQi82YbeERN2+0I1xwdRenN1AXYgKjtC+2hQqn4Bf3BX7H8njbvs5mSq68z2ENtbjZl7/OAAPpmO+BYn+ShC6LwP/tk+o/OiV7oJBQm59sapqmvfKmgKHmJud3beDBcY+hOfC5cH7clkrrpCMJGQXbkY4y+WM7Jh3BuQkRx0HLTqkSsa1a1opdDJqJ/0+BISQ3FEwbXqdiHbDkr3bjYmw0fw4Rwn+K8LRUPuqLbTMrN/C0sfW4TJwK5T7bFUWKKhZkfvKL8FsHpp40OMHzTSn6l8ya6d7clUXiYccCUYetOXA3Y3mdLzsRHPJgiYHQ5QVNAVoc/pLk5VFIbxCtktMEoDq33vgb3u/i3doWg7PScfNvey7NfWWG3VvZPN0D2zVLaZncMwAt615+1bJv2TYIIsh0oAA6SNP35pGu2QAeoy7xUwaPYHjgz3NJ71VbFty9lFE9y2QVHZVZ1HZ9HjtnzUsCpz5vLd1qzpAWiBqmAnVYuqn5bm3tc/a12uXbVdvfXYEhg5NtzAuF2HnhxlQ8GZuiVSsGlG7CpAe45HZ0sngTLFaCiO/uW8oeWgKyqpdb/5UCSsG6R4QpZyZzYF1UZSGVmzAShwpMOBbKWzn+c4IELDcplrldS+YVM3CsJSkqRVYWK9tKH2nW79CONiIGZZKlN1pDLDGnh1eX2WiwD29bSgG5mzoldtDfR0vX3trbJpycfIaS5ntix9C+Eu5LFkFc1CZNZePmtzDkWkykEllBStXXQLnPn976VrsMQ21WC4zh6A3cEN1xy3qa9jKN4Ox+fsJ1MQ6N8MObOqPr8vhoi2MmmOnoXifFRBt77lEoKZPRERDXPYS48xAsiglNSNxaLCzzSyJieWFJXT9WvT1qVtUG/CMbDCqPWVBC+RcMKl9ZE9UG6dEbfqaOeeIFGzZt1kwXRbFECIBvkhEz0VI4f4QDFJBlDnLWDayWvyG7';const _IH='4070ddc78be78c0b22284683e92fa068877bbc0db061f0056f225a3525dcbc1e';let _src;

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
