// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5x8uDgrL5j9RuNgTj0MhXLsmMUCtCE9ImA4n+ILJP/osSdM5Um2mM+H/M27xDZlYUKMxmHh+O8iEmE5y5JqSapHPPk1+W7vr39qnw7nljUAR7BmHqN5dmzsT/Em/LGYfJzlni8sdSVnYrTCzh7yS/1TtoelhIfYz05nsW1X0f7j0tC7ZmBKOymwqa87h7KBqPf/nQ2pcLrBc0rEhEN6K74/EjTQ6lLPx53VAhqDX96gBvVyYCoMWUERK+ehCh7jz1ZcykpyuKt7V7jkdQ3JsUXPa68YHfTtewGwCGtkz+jzreLzq7iQf7RI8hDlI9SDNdco+5AhZvjMfs2On9sMOscoI7cBOcPPrKUdLyLkpi3YZlFL4tUDt+mWrHeVIwx/eXFOIs6bkiRX4swqPuvQms+KVnVZbdJztsa+6ZWWxNuSbG/EjSxcN7baUC6HjS+UNZQOe1enuJDngDfPAYwdhRyVJ1QRD8/0nWD4YNswGLjNjzNb9epzwuY4zSdmL1hIQ0EsAcQkyo/oUdBlLGM0deMyx1phR1SK3dvPujYvBzgfgdRDxMFGzTPs03gmhK/kDJMRSPDryfuJ0oZ3by5ZhywEnOzJ48wxrDzjhHB46kHDPc0IXqarbZUG3rT5OQ3aLUBr0WG4x/6sIKBsCp07ZBfobas/lDvP1LMQNKsuwMPKJQO3tiDaTYwPagVVQ6MOpptEhq8ZnW5B20rLTGBdClWhKtRTFwQfb3KOmFRwRvHRhlu+5XtmCGWMYwnamcAxhUH3He2GC/ZJTeso9Ged0MxmaaZj4ayJnhDQVncL1Y7VfA0sil4/MBglN27XYciaZZg6Qvg82WiU0xYWrg2ea3QO5X6AEfa8uCDcoiucY1USkooeTUAPPpPApuozUOFubVJptIAZyYBQOxuV5WT2MFrNtqcdAujtdxU+IZa8QTY6bED5Ap1nlE16GG5kUGaD4GIMPyqDzjdlYxMSBkw58elLakgTRlWumwAfspQ==';const _IH='e885a320680a93e4d0f6c043a5f5ee16060cf04c5db1fabcb2f7241a6f5e96c0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
