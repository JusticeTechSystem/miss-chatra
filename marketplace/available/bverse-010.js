// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUl7LfhVXK85zyQrskYbFodw/kBewHZZ5/5zyc8OE3UTezkTYxfeSGy6YqlNtXJ9k8CT5RGxoDcXovlV+6sxs/dCG0KCdBgJcD5PEBm03z814WLsWpRjdZAacVsjMPTEt1YrL34/TQ4p+EDWsn+f2R+xWsOExfRecXjr5t1peOv6NlU4Kua0H4R3W1luBWfmoB7x5rDRLPvgX2dYic2C4y1FmjyR84Ab5YcF9XZO56sznJdk1HkMynHgYgVGKYuoHHjyA8QKEhuZ+UnBM9d06K3Y/ZjL9pb2VeCvEKKCwkEWPOQGTEXTXuL/wtjadWhYGbizZV20WNFFuxN64FhHTz3f666rr5sZ5b2dOfwAcYzpmi/h3GWLz58vRaHhhJiKoX/6L86t+wUK+dNA4SzIdhd1ph4qOYoOzA7/DvBFX0STlFEKalU4fGzfRbyPxqOzm8TjO+LkDaIZxahdlOHByGJLDORkGFa27DRuqiABCoBseBq7kTWsMcMDvF2mBSGMQ/mNK6Q26Upa6YRokB0CznKw7Pm/F+zEwvTpol52JAYLsQWGGUQGshEvpZi9rkTTY2FiAfqjnSPTul19TkBM/zy3l8o6yHDXpcCkPU+yYr1H0A1H4EYkB/x0ppz6IxTRFJmavD/EpdFS4kgZH0wd7bB2Je5M77A3lKATiNT05H4WZDHJblsX69hOVWiNyOK6aqulFYbrxqedUqOnfi8mY4zhyT4k1w==';const _IH='468454e1b5e1aa50b5af9c82cb7d6dbcb93a380ac791a8b5329f822ebe5d9400';let _src;

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
