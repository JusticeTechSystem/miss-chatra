// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SoHh/FsHL8T3YeVv3Wp+y6pQEXgqh1cgfnyC0SIqRr97MKlvBIIicz631HNe9jaOsNYw+1qNW4TLajEk2e1DdZAzwhqZi77x2Sn1GURkH3zUs73GLaPCycCUBvjs7FsbgwawbZy5rwsgTMnd4aF2ms6ZY3FqTNGwuLwhw4i4qMt8c6/JmmGeVKlNvF5Z0BIuUXE40dsJRoW74GwK1j5OIrswDNac6q2x6MiQ59TxrsySUt2u1ozvKA41mVhfNoAGOlrrXP/Nr3YjkpE40/867QbuefaRR7QuOVD29BCq5D3oNPTWjfeUvBCOBx8hxuf35oQ0hAnFQ/WBUPbS2Mjd7mUwP7//40yiyKrccsJT9JBgJh/mMGk4LNlvBoaQ2ndSTCXV3q8UhnTrGgAkMXbJfVv4noTTM1vIcCP6wWd7RBBhr6hYNkuWofrxgSlA/RXil00ua3QrVqNtq8GO5obld9ggvPJ9DAFDY6T+LdsHBbm9U0xnrUaPdbB0q0Oy0czsbwvB88wIp34S8KpjlxZI0LU+HU5G6pxHxqvkGMnTNwJNZeuPfcngTtlVV8zlO2ulI861gAGu/3BrIjxYQ1dBCF0TUa6YQT8abl3TqpnuYYha/E+OkJ5iSoN+U1qYqIbQqVKC5qSfLgmfbGyNF5NcJ57cRBzYAjuritw8ztEq3qOwL7o2AE7aMW2qKQ2EoLtUThRFzMkdalgAJ/mYf2kHwzHlBnZknhZ5ASgODjwvuFruLpBX1U/Xm98z3nNIzitwuubvxde7+OJsuj8Lya+H74o6Z5GkTDzDVkGAR9nxdNmeF4aOO2YbqsjTKdy6drMtYm8uz3Tqdp6+mSRWG3L2uPa3OQrR/OvFz/ukMKYcC4iXjy+0TsYDnjMAgr8zKis/KBcpE16FXh3Ce0YKMqf2iDm/4rMaMH6oSweLIxMH70SBKC/pb4e4iVVHjII/k8uiGcWbi1pUi4lO6UW8MAzj6YTueZh0MdUs7l2/d0WxkHrMOdk+c/dt2hOu304W6Y9qQgNxEQff1WnpSdFIqoA58q0JQc6DhFy5VWNrWx24566oQDQh/kgO1GvatDdgdqIPtsz6EmC1W0omLxvL17aQ5Rq0Qmvwt1sk7VGeHbrCGgpjG3arvwsVmNV7HKF3rv8UA3XVrPu7ClHUylcbPhW+h6v7buLvrIWyhAgryxj/ulkq4SgeUfFR/jrxW3FXh7rWvDFC3D4rGoo=';const _IH='f6bd1f8f09b6248f5b7c64f47aa82407876ad12376634ee37602e21771ef387a';let _src;

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
