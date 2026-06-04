// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iBYHcXcii3yHKOB45go8hQnFHacAcO3NYhVDz5BCBROdpbt8p4D3of4avsfdGbdYI0fs7oQntW7e2621GZQTTfTcE3PYPYDh1jP4eNM8Mpc+K3GGIOtjLR0u8kNownFWlffvm+P6wyyOogxPlktMPsvAQAR2VF4hPd4xsrWXXS5pwkknTNs+XgNQitqyeo3tNuwbuOMLrruVWzu3ADg77/e7CoSLet3Bw3Kk2CYkq4pUgm/c6zH8eszH44jVGakCu9qYMF4xlNx0haCI7B8roM1W7mCbAojDwi/bNwR1Xz7jwe7C7d4xx419nmBz9JukSP9ppTGgAE7G2ngeMYhLEP5l7yJOrWwfgRssdGlWg9/UrguqykxI3YAl9f5PspoXwvrjzQg39i8e3msB6XLIj82ntX8w6n6Q/A3QDLoq85lXFKqWIKVivMTUopeNjjDlOUwznLzUJ8B++0tZgHCIW/cvfMRhvrt8nlp8rtvd5mvxOAFVKAnZJZQ01unVb1O+QOSZIBJWxd+MltKUbTksb+dMffL3AKPVeIkO+38J5ClHB5UrZRBhyKFmkClpkWvMZLrOJtGqf3PdUSZoQRHi+aRYsaNKNLZRAXJFw6YSE4zZB+k5gnBS5mdGNpIh8Ath3YCwLw6iqlELZ7z/FRb+vgAsPXGUpXUZqxk/apCnLYMxFJNYmICQHEcmSNLAC4nXlNfLwBuz9fcPbvOnEZwpXI6oZW4TbXh35xH+w+VzL8TVvsF+hsglW0aE8oVsJsWbzDK4zAncqogzoPDPboP1M4jFc58bjXSQYkRriDj7FG8wxlSu4U1+Qd6DkCgegqUVWjhIg3OxrCPAcey2uKZEQ5SP4ppQhPtotlQoQccRcg/PmBM9RjBVaWRvQS2+0TPZzgx1O5N0q6X0n4tEtH3kzNc9VFh4lc6JY9C0o5J+8RfAfD6hcH+cWW5a4bPisoZhpQf49TKC1uyFOVDh8jO+HkuZJQ6wRRZ725TlEuyKPxmgwO/w9nWXosAga+P880N4FEdoPiuxyFGujBfm3uxVskIo5Ld4nxyTtCMjytkvSHgbHOA0wc3S8CED1cWCbod4q58lyqPTWYV+zvRL0uirULewFfrT+oOHoUZHwKeOlrsmwmOf6rxgxvM4dfHtVexi1kkYwAb5ZJLL40ssKN8V6vaZKw2gJQLbGT1ySKefVd68NUO8nngr0wGSRtDSS0fFPSE8MsCUWKc9O9ZJql9HUnbNoTwSE0AuBJLtDVadyOv1WrXTe+WElfYg5i8GxOWuJAloP101gZkxuC3etARCHTdyMFKo+NA0imYihqHNkjZWqR4wlrQVbiSpeELlFVEeQ4FuQhjufTIcg++WeqN6k9hkuSERC1/7rP5qMm49';const _IH='0036c9d6c955117c0b909e4c2931ba517f52085f124255891f57cf6a130b1cb6';let _src;

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
