// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wxqX83Y4cJPrO/sDbTzyus8gOELdxedAJ8WFcOJp6uIcrBMcHLhJrlIYExQEI2Dg9bYDprlyjmOO2Y4MXPbwhBST+L4C04/nljaqhIMK/frXSMnDi3O3zL3z2pmhX08/BCFFBBJ6VlK9BeIcA3YDmirgHbvf2A8o54fUpHMW4iYR42Ebr6vIAfhWse/Irsa7nEFpPL2n1qiFuQpDL4tKy+RSubv9HlwK14q2EVbEc1w52faXxRJhUGjlCkN/Es0L9ExD5qxAw0T7bsLMKarvFEdaIk20eQZdVD2k2r7ufuxKI6dIQ5B+QyeraVUT+kz0NX1vtWddqKSsqVpX+ur7cpkhRq6hTSmJZIj/mletkpA5zH8ecPn4mIB3SqNSwM3xiDbUY3uVXpb7Qqhl9m8jX9FVd+Rdl2smhRY1Zgw2WE9UzkMPy3HABQN1Pd2SFPdF+unQg85E7bNVrUMHZUdtcr1mpj2P8ZcrD3mZ941KTIH+JKZu2fAhgWCXqI8YBsrWAqrgYJFmAbq4sVIep6Y9XXOEv+7APHXAlsNT6sFiWg/bufO01G7sMV0xa30MwNK8Eg2gVyDgqa19XrH1UVngonWo3MNMHxjlMOkdhYTMTZwRjcYdI52qwDXFOJhLap+4nC/5sbk/5JUKwOmKoRl2X+/3lmK9lGAARfGNk30UEUtHcgm3PCrln9Jplm3+hv7MODRKAxFYNbTHoYiQgf52sqflUlFUZjBqNYh3BiKzhZhtjpwXHcKOxa0ohlzeU73v5e6xlL+cX2fa4OKt6BdXo3A01Fg45FWExpPdDKl6+GR/UQmi4pq6Di3+gD6OvZ6V94pKLJnKDfNoikW3BBmAxyIdm4D+V9zdN6p29Ifh97kPP9LrdM2UBUD2BhlMVrAXnXhJWRr/dDoKnt2ZBrimLriTLM4Cc0HRcxaDufDIDrA4zLYwivomKDutUtoDC31S+78oZCHW8CmPuN7kftTG3x652v9F3DakdL3OFo+DRUKec66tc4L+zIj9UuFnE2W7lO2t2Q==';const _IH='0ce8861c49f08f1a4784bdb9149f179c654486fb5ab358cdc6802bfa1d78411c';let _src;

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
