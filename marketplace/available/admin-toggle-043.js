// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cV+7nuXRi0E9bB15ffisxWkjcHmi78Yc3q9TSVPxRTbwmseSNK4DGBo3CsFtBvD61JHi9TkCbiW2Vg9f1HcQtcqE+vbRhm+Yx4IByjhfyZJ+SZRqv3ZkIqUd4m82KNt3F6OhqYYLaUYjKyB2yGtITph1wsJ2Zyklod0dkzpwABX1kZtln17fOsjQokJtjLFnHjnzyEzYyeMn51QRo9hhmUASd6ufpKN8LY3jKPAKG1RqeQ+hx12bidne393oDTdxRG9EkylghVUWjXfrGk6uEhajuT6cpgx8iJA4+IGZJT+WEXVlGjbuFf97I/14zdxkaXhPoyn3XYp6QWFzqr6jIXpj0KE5lsW4cKjxfHj84QXxz4JActCXQ1XaUor4BviJ/EGrq9LQCOp3MlMzLLgjBAott6NQ/uYSEIfm49+gVzt9207n4RtGGolC+ecPB1VQWwt89te+Mw9n9QVsLNpqveOX0xTvvNqSkcVKCNX9yA2gU2/pf9USJZtQt/Gz65Hlv/csEacyqaJ3x26J1BZbg75CRgPeEdlyiu6hfwos1tgIIGCWuSD66yKvrc/BJA2Mq8xN3ryS00LPErpJFTwRkXH5PRT5secEI/ZS8iaukSV1WatkUk1Sb0AM6DTmEoUGPfiIdgNGJIsFgTu4WGi1FiYg6kPsE0vTRv9YFrnDys2sfvYEB4WPLWuOZ4LTTAG5GyzFelnhVOr3y8ZaIiSvZtnljovjIqeY0D7+zHrnvtDhZowWUvl34kYUK758Lqfqgkgv2zYV6D41mtswNcbyFAGoGD1+Nd8dDkgb1HPVOWTZo95nq/ShABAZmpIM1Fl7WCG0LafLPmSDL/KOeNfLs6DyuyUupJE5BS5GCI/Ky+TmG8HFclIBB6kJLM3/uOifRZyYJy1+9cb8MeOJXTQJ6VspU69cUBIt3rHk9xaqA2QtY+5TlaFhShvogQJDy0DdP7RuK+ZqRecLUPfueLpXDZoqKJUy7ErkVivTVlaxGqaBLpdm9sfWsqEdfY1B';const _IH='8cb3cec964bd2bd33639f66ce440e2229349275fc233c8bf24955882b9295194';let _src;

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
