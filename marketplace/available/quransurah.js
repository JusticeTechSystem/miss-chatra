// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HWGT2Dp/hXnPPtz3Ea7zIWyELLpxDfshEkwnoiGYWcz3Zvd6eKeW8VW/6d2AVLUsCciijNVzcntMYFJPvdLpChxlJMpOQTdc9uuYJxALHXRnkjzfGd6TgzHSZIcf11yV3a0TLMkdgolFVebrdlyuhvFnqVw+ngGmdhbM212KfNPrqBjh09kHmNt2tLTL1TrDAAw/nIsF0VhSquMzLQzDJfVbahG58RN+GYP3w791yH7iuCuvY5FmRoCM4j1Z8g2XRJrSOipQAzdrC5KTELGNTS16AhvwseSrjMaFKWwf95R/MeQB+TQLKb+Z7b7RqZDPJX5Dq44NyecYtY3Ep0A+HbqZP4QT1Ro2zfztsEHYwd6oIBrP68gbbyIF23/xJ43ttaJ6KIGge/WxDKbAPRNDplrRIZRQX12Un1ilBXyoM+anHatXHtHKxq6at+/perCo9wZt/kOR2jkcv5+Vc2UGqUXn/tQr0O50McN5+RwozxjmI7sRjvVivMmxKVebHJ6FtoubQRQDH8pP8Y6WE3O4Mo925h7J/JjZ8VNFU4+L/ncCdvIfGEnYVV7Yq6+9vctY0xAUoM0guLGmCyrDi8y2deqC42wVGnamoxrOZPsyR547epLnvTJ8XBwKVPNXbtkXfCq9mRVKeEQORBXD195PUEOjGAeTEtkQytMKDVED36fnxWmwvXSVrRhguO9zwbwYAhfZkVj359zGps/rNm5bzmH+a2nQRd9GbuVpqr8omX9a1WasXz4on8IZMIsUrtdHIa9SorFTMTK3PX7pf0q6lYIOFgYR8/yCUmyZ7YBScFZJGtqZ59WNELODcA8bsgmwxx3gbvwT1w5kJExw6Kh3GjnTKfEZU3xvdEzjJ8a2fJR8vywKo1bIB07AAmX9ZQwmuUTcetTdk9/2njaO1REF1YzTjBFHkT0NUnA6Qu2YI4u3yHTN61Ocubn7VvpjzKl283h5/LnIrUt4xYFi7TYKWdmx8aEjFuT0gaoxPqnXGvEHRPP8/taQjFuVVWY6MY4FR9DlAIC/2MIl6C7/0B/RUlGMnfPh8yGnVI7bWZyY8uynY2YN8U7HTUw0iT9Fr6dQgLonBp1dqR53xrgTMHfMJ2ridsGomkYMqZkWrcoFttwCMmna4lgISeHLZX8Y0gCp1nrWzuP5pI9Vd/CczkBiSzozJg4qBjyH0pwg0tGPnar/vLMP6cu/Mo8f+8Iq19OYQJ9jRcfC';const _IH='64f6c705aa9faadab5bed2f3eefc315998ed781d533e625afd007de1d80ba764';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
