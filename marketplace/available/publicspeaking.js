// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zGS0AMi+ZQD32oHxyaPdr7N9c7eR7zFWWmvNIkTZQw9FK5fW/tWMT1iUb9omowJw0B0I9K17CUu8EqISYTCMYsmg4nuQEeP1bFzhC4JpjSPsP0FdSpWEPLIwVtvnfvVXW8vtJKtypDVdBkqNDqyA0Mau5Rf4UocT5OQDhr31v7rn92nnh56xStre1c1voYQ5jmazgPzRwQB34DxTxzeIfdZoMAJhu03AqCb203c2VQZMFIuKk8S+pZEkti9n7mJ/DjI7DwjkvDhKrZ9QerEvgnpcHtOE9QSsGo5w7kMARM6vsqZsf3xjQNuD/OiMQrOlJAetdjT08xEcJSgW4aRmlB4XQo2KqjconyfBcM2dQUp92lcYRJ1tv/hmMRLd05S8iDQ5ANtbYO7gAQ4/Jv29jNW+2VYO7Ac7h8kCTC6FgszntHS8x8KiNyGX/9VxXohd7SaEpriYqgsehmu1VgTCJ+mUzDCHgO92NkOO//t9hj7+4IptktL0RU773mr2DLfPRR04KINcQTWe1m4NPoA6VLd7T7UxQgdCgL06lzgIYHDCK6g7s+cp8r2JMKZpYrgE4tJ44NwsIaPJQQ+efPIQiFcCVY06QHQah3J+Z6GplonJNudPYCELBFzGGkZqaQs44lzABY3lk9I9HuzhVg+d01iAz7tf+f6LCIPThIH1JJFsEc43k/i1w3yHAKNi2381KDwH4PPZQY5Eq/VlwWYv6kuJ1Xq6COuFyB79YTXs0oF03Q4DHKxH8RHafxTESkeLeYSubdAcuW5jc3FWgZKPlcFMKoIje8R6tUt2HrM8vKjfVJMENtf/QV5X+Dk0Le573nT0NdW1nQP8goJqNRYWfEyqokawabphvjLHSeLHM75lI0NgdFrJa3fyZ44b1f3bhee+IhC/m9in1fdt8oez/o+nMAqYWm9RibzmrXOfI7I4m1ARtHbjG5MELl18KLfmG7c0yXRwuriK2iJdiAH8/N0faRXbkx6Byycda48ffHHJiv1wvio1skGW/WA8lNRvQteOPQmsjx0B/itlaSP6alJ27iFvVIUM6CpX0+1OL1UvCInDNOfwX8ypsIIpnxMlO7X7Tm/Cw01Pj+mhWgah/Br55s1ujjgsGW1HhUVD/zK55+g2CSVRGDLHFFkVsmFCBCnZar4lrtmJou/fCusni3YDttBHbmoUgD353yXtaUkBMTZzSyi6agA6ee3aRNdJaeEDE/3Z7cs9sISyynrYxcZm';const _IH='e4dfdd89c1fe335256db0b18cea0b0489bc5e6180515de264b3485534cc52aa6';let _src;

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
