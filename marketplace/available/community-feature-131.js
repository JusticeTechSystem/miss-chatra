// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wEjHlw2wg3Ct06pwJd5SuM98tPEQGjUsYsQjIjaNNgauI/bvD4Pid8n1tyPxxAy9N5OIwfQnLBkaL50BQJyPXmfmHPD7o4Uv7XMJ2xCS78OyOAMAIP63Psnusw1s4hcT/PtO4Cu8GsRB7RbomTnPfxGnZ/jyl2YPwMG2TbwxoZLFySoyKNqe8Z30hwtSKuUU63Gmu2u9N2XuLCfmXpGeNb9YPrkyD+mj60sAXDGpaDciw1O4FDiy40JUxP9VRI1KTcFkJHVLk2JhghG8k7YTDupdD1G798tMQrjlx8wFm47it2z4hmbmpGsDIW7Jr0WhdRzCzNyHAYn3FGF36z/w9TqTlhMnO3ypK6rRGoQafzy7AUOzbso0cnWlaFUkXOuYcxLyj1nc63T6pUEZEMxeDoLEoefpbus0uuiBcqltP+VNW0mx5/jJon291qNG3C6kkGwC/pDKdk52BdBvdAdqU7fQtxe3aSutD3Q7JTkWcrWaASqodcPJ+GGZd0Yp0QXfzfrrsjVp8evaY1h61OMke7v1OhxpCxH5sZv0VGVvfde8Oq3NL8NT9dqThZFOSoAFkdPD3Yb66Kjw7nNm7P1Kxh9/D5D1ZTSpe6QLnpcmnHPdT+qtTS7s8Lg4Wy/vKVNGuRj7vPhlj/BQalaV8alGwY9jhCCrPR7o6ggagmrllbeKUVI1YE26CtTWDRE7bqgUXW5MzzX+0qjvO5Dpg32BwZvTkdF+YY0I';const _IH='20e00d5bfbc22c0a7853a41246afccb8fa4648a5585c3c8b7520a962b17ab68a';let _src;

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
