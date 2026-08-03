// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQu/mctipuJEms/EgXDjhvPazAuETVxrtdUvPvlxrT7xrlLaSc2wCMYrGU+jwZsjQue162VpkLByPWOCVJXiVK0b08pF9TwBbhDUECAjn3P3Q+9V494kWJm0J59DaSS1uEffYHrxhadQlI+EjMOQli8hw1g30YCZBskwXovtXL6PX/JGANHnhRgH0WAW0s8VYgJg0rO8QIkBT07gz74hJUDM4rnHO6HjmPTWB/gAHlxDuAO5W2oCCgEXOZRYYDo+HB6G0xH4BGsvxBaE3kNcdsvCnA/iTdn/aI3XWbYTEzEs9mCpXHZdVW6CDjpD0OlHvhvR4TtDNraRO9DdNknkSd3siNspfjbx2wfjd58E1R+1MorvCJ9kxcioKRysWZ18iG6B4CjZ7ZVWc8qPE46ZfZZmMqjeI8DLSDUjGxM0K1qsyqFJM5FdQRnEzefT3ArQ0+EKZzERIbE/dT1xyK0HlkwxM0Dx5oBO4tbMuo588Moku1bm9mLGX8C6p0R6934tJq16prDvUZmohLD/jBtk8NvnULZzK9MF7xhLp6lJ0xjtY2R1pZ4kgTNkX9VSY0EyMd/aufDl6GJpTougSxnALlV7etnIXgh7yy3soG8E6pzZNT5TVDlAqKF3RFrmGFhbqs7XSH03ORJUzniQXswWtIe9uB+5+RsaIvrq60iwyGmLGmVXCAonOQCPpNC5sC2fWBK2Nw3JOFZ1arH08yquyz5HGzmP3bT+hcThQDubdP4gz9Oe9U3FWa9ui4Yz4IKwF0ZIv57+g1RFMMgsa05Ij0HI5FSdnsqoc8SbM0TrZ8PNZLf65F4fdA7q/WMVTnVu61KwTpzbORntn0hBq+FOQNDAQi5qvHSyB9HtxXP6R3j8tUDhw1L+t3WZB8gXHr5DaNFNufV7yRk7somdrocsVBl15bbMYrbXrltApAQeLsZZYwPRmIjsb3z9+HrHLDJ4X+tjAoNaa5SOsWAyAXhoDw2JsQenMmeqXRFjx20PFer7AZJV9yHWitrgm8UDbYiy2S5GA==';const _IH='47afe5889a2d5ec3be23c3cf74f596e4cf48c248ded83c7ea97b5d8479d69e81';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
