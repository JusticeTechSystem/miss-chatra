// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kJqdstPOkydcKDIFzzxotsc/mGfcndD35HzfYc2FAonxGm9tsqoRHGtFOGK4DzHIfYprXZZaQGlIkpGbeGqPWaUpxn/lbADp2JImUOYbxfHtBvb0z2N7kFAyx+tbZmipYfo1xiLbCmKlbpoUZ0kAkuGuE/WKekitkBUU2Dsy0ympmKbQLP0Ljb1JU+8hNw8+bnh55nY5EzXf7/V4s9tfHgRKzT8tg2MJi7N1yPPRXDoM5lDl2TZZKB9cOYb9lRe4RR+IroqqYkFTT50xyhHPQODa1+B4mBImcZNGH2umVApnNj5GHr2gtlueZB9e4VbQwh4zFRG7PGGYDvaz8TMMLN06eREo72UJlqbgou8KfaNAeWEwgO9+vh0+Go52dSjWvtid5rWIyA58jg4NJV4pqwtfC5VKf1CgYhGrl+X4c9x1l1yhCCWy/26tY128ANWU7fMs8vYnuWxBzrYsKXzuaFoeBbMR/LQGDbNB9UuDQwewVCcy+QtfPP9Vo/W2bQOX1AY7eeDokUJFbAvN9wIm9UbezFyY2mirz8e/plUcJaNPJeyIWbFAEKsKE/w7yiLhQ6VkVcfoWMcQjzDQ3lfE8zKcpF8n6PTJrFfftK/G8cbmx4XA+mqDInDeK5/PIOgpocPXyrMxJ/M6qAVPn8KN2Ztl/0kXwL/6g9TRo+/QoirdPvJ2QE8kdDMJdBHccZeDO9LruBvTvAGE0tgYDT4ycvV2ACBOSaChMp16SwFFeT0QVP3cH0FjF+wMT4JhfhCOXHzAyH2Lhn6VMGgilOYF3gquzMo4oaKV7/NSNUQXvWMzOd6XW8+60dO9cdKmIGKPPsgPYgHhaeJjl3uXb7T8Hsc+GcZC+0Vq7VKA2t76xTCMTK4QUE/rHBCOPNhpTOXFSiZVMKsuGaz45OEdZS3rlH7DnYlwj6zANemrfC6NvUDBIdoxRb578S9TEreNENqBSBkIci2LvXLz6mmQZljz9QDGzy/bjQVQNasTjcyKtw==';const _IH='6b5d43034cc75e97f4ae79b8808bd32fc986e562868bd73d8e22b2390154bb14';let _src;

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
