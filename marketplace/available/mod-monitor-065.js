// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mlMjxUwEMpsK1NqlEzI+T+Q3TmNUEfQvs5JnYuK4yaB4/HiCfkVZ8GJKqHRg/yPOvQE1OHqdqcpnAHxB2jjP1plzJAxo4kAKZT/e1dbrZdsqosGe8CVpTwzRwYlNVBelvaSZXmr04Eqk/64SEtKmGGKIHNZjFWMitJOXvEDXmIY9NzZ/DTClAjueyDo7J4hjdUMht/RNfpJECZanOmUti8jslKz7bNhO3bqtl1QoeIR+kTUGUUgxsT/mJ9UDWUUmjMv/hvFz1DopDoHuWh+xcH28ODEwvsdCd8BRbBWv0nms6NIVxVmfQzrqTli9qOb11MfCfYCGALaE749+2R8hD0U6LMUyM4/erLmVq7J/pda7bWCfFyHTB35mnNVVYcGO3csP7A8OeHct+oG/CeTopiGVJkSjtjASo4QpxOBY06L4lhVIv7zMaqisY7tHou+NnDNQcYgdxVOGoL4Q6NUGykpWmWv8t3Fu+d1q1CNeq7WSyZjNVDFHeSQXQGh4vG8Sp71wf4TOb+Lp0FSMfHJKn4HEzpqpdNWbtQ3WpfiSAvWfMyXcNPkO9utpApW5IQistQ2nPwrFQpKrcKHREkk0Wz8oe2FwgSB/AGCBQIBIC60HckNGAAMyizkDGYA9gtRtAgZJqd3OFh9DXV+8+4lhK0nV66K5vL5mkio6cFhaNF3B5HU9mTlFp/Tnpmc7qgD99XYpvrfJkvh52cYLkjKgd8/ARXrbrxWLnMtGT8d3BeLmyUoOYB4aOQJ6natefGiHSy0D57nK39mEgEKQv9Vgp4M6lBesz+xhBFzrt/4QrMyYWo4PLhu3VqwtFPTgqQxAdtsrYA/zi6RDxrtFbgVwORq6pjj95LTA/jqQ+cMQZiHvt3p3YMp+x1tR4bBWuK/dAypHq7R7c4sbi2tDVyr6tlBYpk9at/xlVvRsjXUaXo6HctdwHLEUjDbHbeYQpzhIBbHWQDPlJ962Bhc4D9auErGZAhpJ8aBeeHG+JrdAf+3eA/V4iZwblMYtTBvqUJ7RllXZYsfT12Hgx/Or2Qput/xiHWkux+fMz0sh7ODY64tKio02MLMGSWFFXD5wWGGAmbAFql9+6zGski7Qn6Pgbq5sHBzf+L2guhl+F/kdclSs6ckkZi6JBSV57Kukg85J4yu7VG83lxpB3DDvODvsWaIZNffUQBywfU5Po6MeUH7QbHvu0iMzaW2dekb1nOEsiMSggQNG+oR3tiRRYuS4C1Yh4nHTRVtvPD0qCzTKVNGIWpYCRExva+wSL5JxeXeMpJbMmHaiT0KYk08B/AmlkZncejI1EHpeXKEh2t+s4PbT7DaRKBue5btQmH6hc2J3ASZcV3Wk1EQyUDfJdId/NRpc6XEvVVqQCFYRsz2ewd3Oaian7yOOuOwVKf+V';const _IH='bf58159e9f7633763b3228e6ed37ac3cfcb90546e674434f97f9e24aafcc9149';let _src;

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
