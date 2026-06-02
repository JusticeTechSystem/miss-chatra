// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVgrILbIawbdQ+ucje3M+kzCTkBLF5FhFroDHqNA2dAhZxct8uoq31MUVOqBBAiX1E5YJ1TSgri7F4AE3548s5SRMpDXvcFGvSDTK5ZqjAbYkNY6m1NhsWFP3pXg8i0LtWejD3k2k0zr9gv0WnKnhNQ5eOxzje7/gv/TswZLfuh6eNqUOyjCv4zp0WVw2Q2fOU7l1lC45/3jvUnemo+aPe3C5gYrTbyIukpFsKmJ1roq/CzyfJYebUVXwns3fJxFGuTsaKIPnF2alVHhcF7SVjZAqc3i54ptr1fcXd33QDCqLcMisyiALxgBRCKcoqYz/Z+Ojrvos6IqahHIQr9Rm4NehoyacFBScsY5GgIgup8zV+4VM1VFL2BD5qxuQGR4JzrJ2HKZ5hqpdl0O91hQahXpe/ebVBbxWJo6M+JIQPxdBvP5uTSyPOlbMWNQI0eE06a9Cls0mV9ogEHin9k3poSFYfstLrLLqCwovNABa0x/nrgPdx0VbQUuGLDAZcavF775DYi2OK1KVCkCz2AL6/q8ilYzpbYiRPhHA6jz+FWvyVwyEBaQNcW9toBHNOOBitTsaGr2gj/L+5Ef5OeJ+7rTGuRRto8qIm/RlcXR38Q+EBYFYcOohBqxb2fDNrmHCQlAVA8ANmImTVLWgh+0Mn4GlDmhm3dmozrJ/vB7jebAtF3Nq/Bz8oQxyDo42/AN6dT4EhxWKTiH5QqUAwW8YAH/8Se+xxSFEib924TDjVXULLKA+Gj0mAM2XH0yu0fFVSge7KmC3RO6+wE9Zkm3cypIq8TvKoztCq4++dYkTtTykFscPPt1q3pRAyDGGEhKMV75dqxFkh6VFomDkZ6CzETe+h60g8DC3sxv6MnwgEh9+S16RdtTlA9o/a9NltAdJt+H6Me/Tl/OsqB0hMponIGlpx4aDx8A2hagrIIzjqUHK0dCZZ+YTUOenkvlf0B99NIcWZ9XYTOu/zf7a9BvMRF7YhC78QjejiUK8JN6m+eVxMo2oQRapFO8Ow/SaCwVh5DSNq56i6YbPFaUKD90BB9/8c3gcGWzBxLsrvEvM9py4pcGPr/tqLrxsRhNVgHEHCRiv6AdoLTwzOT+l9F7YRzDOPQBUAh8UIJb21DMygf7qkg+520daDFTGgHYcA9Y+wRCv5NmdGTaWs3ZbCKWEoRrmBHQC7COFATHqnofEaA8K7i9jm+2w3UJcDkYjHPLd/mRcmwgQw1+GGgduUhzKmX44I0jkpVhmsEUyxgxpcl4/WNHNHeN4tGYAXbSIs6y58nGNwO21TREaRGlGIptKnTRhu11LEhSxf6C4XBl7Q2J7MeOryin8FIcsVhqP/HExQ/MdyQ5HOVxA0hoKP379Rbp8aw/bjpmiNSnNg44CTWDpNSgq2RwyKm7+5iI9XgdNbY=';const _IH='0ba1a1e7515f48d8f107139b2d5b2c65dc17deb812437d7b9fe0d386fffed7a3';let _src;

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
