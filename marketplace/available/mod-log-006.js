// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='brSyU0FscwLNpK/1dGheJE45Hg1je3mRMnLSFkLXeMFotnx6J09wbS8eNra3rLhq6SkjH2HHeZUk+EvB3T/JiwAkAFZageqdIySnvFFU7aAszIVzrJ7AXX4D0XULawSXInoC/qu3S7zyrRkmY2IwaPs04JgOixgQD1vmq5A4puklPwl94OdJOlT/H9NZj33fu7nEX1jxvCbsiZraHpHn0yXxEPHEC5aMUvyhpX+7Geybsjy615GTvfXnLPPMQXGcZiiV3//d0ad2lqXmCUvK2mMSi6WHxWufulqPmo/F9wfH4COJ7ViMCFC154oNH7ahIjcBkuJbaBwo43gupt+O7ldilaTwXbvoKcb+RVpDgEJJEwroinGESj87iePkONwwx80uEsDbuHjj4BE47N7c+qkTzJLSPgHiZl5QTGhn8l7QCHdHzpVLzmWETAlwTKw3nuGvIrjje3oxlI49V0tZHIXbkUCCAWy87UhffKNdUjZkPHNmWKL9UohPhi9Xllst+PRbN23HcViEuDDLn7Pv1vZXyC8/UduslXQyUD/WUYXqcuZydA0wMOgk+UnR2wXR0nl7lvXxJ1R+0XHxRpcgFqkbkvOoASnEyrDihl2zFjNatkivtNl9Ovv53P43JwVndVf5mfHUYbBMWZNkuVtNRAj374uqV+x7OZBie0bMK13HJRAW8EVEA5enFKhj9iSNIbk1laIrg/BzJCZJ56vO+qUoxGs8p7S/nqHOc2gLYGT6g3VPjJETWoWhvchYIo3aLtLSgYi478VnWUFcGbLeX0MIc24Wy+JLgO6yoEoeBxbbgwa9zVzosXKhfuXFT9XIwkf7rLskvyxFY1ffsmnIb8LzH8PE7HjoFaxfcTFDhCU+zSDJ1lEDUTqgW07i0zaVPQiUSvthmnJbPPWKShdXnuluqiOo9d6PO4G65NuCRJhpZMdhD18xehpQIORETx3le6psczgR4OVEOmvgaKrQ1kyiq94geKdgwJnESiEinB1YIKD+reuOxcKYvi+T54Z/hAU7K/Le1GMiey4ASWYx+WKgD7gcWrWNFKk5U1aQ05RtCN9lPjP8mWluViXpFyhKt52Pr0Zj+OzTMgabNd94HiwnUGOrNLq012eNDlfyxa5IJyRfEPJbpWpTQ1PK2oGHSvkChGvxCHefItsCydHHpAINDdQqPap9+WvyAWZrc9TaQuj7v2/OM5pvieIscqd3Q2a8bhPVpt/EcO2eZAKWvJPT6L10lxMMkflXpD8Z+PHk/UEO1HjCjf4hSaq0GxC11NFuKmKbj0+Rr+q8n4qEXDExpvTesmSybFWUfHzCX1ZqROna3jpHeOb48llE1rYA';const _IH='a8fba415cc9c7753db9418c6815674d71b5f4065e5d996e967842178ce210e4e';let _src;

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
