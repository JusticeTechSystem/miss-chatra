// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GZ4lKWKrpgxifvAFhH5k6hF22HS7nl1DnBWQaXZUmm/evdKsy8sFEWCQRjOXdfyWsHRt6rhLeZmgCuPcaxdblaKWqobBXWWp3J/omEZzIcPX7Gcj4pWyY+au1CgZBCGr2lTDzH2yn4rUYT5vYz0PoW2FS0oZ8wN5nz5OlLRgfMITitkk7nFvJJZ7K/T0aV2iQrqIwcUBUrStjmQ60JzMhLETgxEEEDaJv3ohMijTn+mV/mPgaeh+1tkppP30t4vcA4bFIYptlRGf5Zf1J5nrSx5omVnLVTriV9qUxANZXSi55wRBW0GmB7L19UUmrofM7Xyn0G2RoviUK/T6xr37pbl2MiIErRXM0t0uxn736EKMtOhBoht4bzyA6/MNP8Sv3bokl+Z3NFGPvzDQ0AkvNodOr9e1FeK462nMW2gDNGtYkKePNiGz7omYTwml+u04+kWPIabAyDn917TARDv2fv7y5GzfDO11h9Ri96FMkBvO74yzDhTwECUtLcDakQPZIZ3Pw98fOykl0TiWt7xKGlPA6S+C5T0DDm+ElZDgt2i55+hOa+aFYSMITeTbsRHBHcfZVaKQz7cE8oJOg234r9p/11NXr4Nf8ukX70zJoG60Qep1sewmgepz+XnJBGbxOu2N8LLudbUkkWmaBgrqnqw5J18rZFPHk4ibLCuULO5rM7I10JErRYqyerG1WFAh4PTvePdVIERs259P2DhajDwwI7lU45+6gvj+wgQehBK+M+henL85sg9IL/AqtjpljNKBC+lyqK0Recnnj7JadUXAAzkCE5+krsptchhXTUKJaNKbtR1nWJuKt3wpd6k8lzf49oUSFubMw7xFbZ7OOBQSWKtqduSyM8Z697tY8dDzIig2kz7H0OexSQnqrXcTR8NaVdkghizqTUenDvXBog2zIOR84tJnNOn1TnHQuDRFgIkklnA13oS7BA+gVbaZ6KRRk0qe2i366oRr20+WA2NUjFh2H0PqmJz3Bg6LcxuNbwhlE8McwJrejdK5PSlXLql3m5owCDc4lE1l/HE8Du++tb+SSx0dbmfBYOJ6CyGpR6H1UBU925TJrE5t5jmP8zhn6ajWXouwchdD2I164QOdvo7yuCTU51wfz1T6vRSiq3e08B6Rzc79YulNvcis0rDYJbYT9ZWvgTEdLKopYSJpuxtipejSL6yrS8C15sv8iSToiX671q/fhEE2NmTNx4WvXd5gvsyf7r5o8dSUkwJL8NaSeQbqLjh86tGUhA6SrQQ+yLxM6GFg+3e1svvI5NAM8qwjwz4WsowXwQn4JMrd477Mrucdkm9CVbVOUK4253uyvq2Z4X7GTof/7F+g4CxNvw3MBDq2MGj/epgtpjVFmwpu2/OBpQELuEncEaNqilCX8Z8cOTPmTVEZzQU3XkPJOvNeoVan04dONIIq3EcBuEebzt9k/ryjv0ul/4IkknHkWbG+CpI6o3DAhd0zKEkzNOwOxk1T9ityyXxOpzE1CMPnU4MWzuAC6180K4uByBw7/inh8ine0HR9zVxkLmpY3prEjWRo9CzaJ7jaU+z4guorrV3zbqRXrbCNcjlSwbL31XyvulWtU5nKQJPYYeO1c7VRQ1Ei1G4NS/IzX39uILN27Pv7AIW8WrK5lQSgh8Q4dv3c9W5bDKtOO3qcyAAGnd0uwDMaC9CSzU1h8bNLe5qyQW40vVBVjP5Ol7n6eQ==';const _IH='d8ed5f796b2e59b7467c1ae4f5ef220c43ab7e2c2609a60f4bbf586e299f3b7f';let _src;

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
