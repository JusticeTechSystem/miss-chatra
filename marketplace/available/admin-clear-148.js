// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ513fCmRIxPnAh+cHjFqATuimU26lP/w/KWmaL7Tbu2aQ07Oris7oulCMkYQQIwHxi9KzZG2p0aJI8NWW5leEQBJkyavj4K+T9x3Ln7OzSHtBn4xKbnkmtYZnobWtEBXVEZhUg1m6/MUL/09dBVVVqnmpz1PNA/E5ZRVpurU5X+DTwOm8xGWGWGGkZSGjTzi1Pj3HRGK8uCc4OSBUufxVbD4jwGWgQE/qJ7GBQx1x3MkYcvhUt1BTL/P/ZmFrCGoIm0tc+Fg8DLGYipcdNzMJo9mSNU3Tek/JjeNcbl3Kpty2cIfG/va9Ln4L15PVSOJjA1TgZsO3HLNeiJCVwrawq6BgVr+Ic9SWrV+uKZ32Pp8t+iI+8OqxVRqG0lJA75iNO1W28dF4x9FnqBlnDrabNQ72umxsp5exwEJMR00wJ9DIbVVOSKEf+jdQORJZeoAsLX+LU9uS433OZYFK5PV5nxclTaO6Rgn/dX2gyMDcGaKmep9t1XG/j85QzL5PUtl+VVyD3caq9Nr7ci/mEUo+ZiNFL7gonf6lhW/rihI7VIdT5Uodj74F3FRBrBk7viYYjebGZpNB9i5xjvcE1t9a49RkDTPdaovBEeAZRWxa9+SS8nzvuxObGnoVak26I4ctUl1VdrMswc8UDEmsaak8lCC8if6+6lK0UDlEhIgNL1oKVU561p54DdO+/ZbfWaeQCqI8heKZ51GH8xJ1BvrUmrd2SykWSsPFqWZ8cB1dHOCpa+rTbU2Z9SNA0rrei+kU1yp/UBa7YXSdbFgy49TjUBxnetM32uvxUd/ZiVvH2mqXOH+4SllScd5nmlsfSas1ABYOQQy3ML1IU0sp0WSUR00ECSo1L3+6e0kPNTFQkH6sawCE67dhGvoieLMTgtWr1vIa0OI4ySyzAp2GbVp0wzKTrmdglzZH7OxYBzw/7fKWj8/gluAhdeB776FWcCw5UvE8GM+lL5r4oO0mgvVxPR3hk8EhuH/VCMUv41D4iNHuV4XzDAM/BkGMQ==';const _IH='103194a17e3ef2ba6573a0964ac88cd633fa6534f5bd607d85b23a1dbc4eb3dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
