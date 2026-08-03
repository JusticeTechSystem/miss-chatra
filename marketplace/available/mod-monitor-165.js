// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgBVvoHhF/E7f7U8mOWkj7SMtbBlma8hV2tdsJEthfmBoMnUoBZa8lqdKORHvinFu49dqSblwY10tJKq2v+kFsz0thFjnRgmj31HHrQ9Ev4fQlO/YrfDTHEwZoa8/UTW3cJ2BYuNr53Wh4yOVhBJBSjUmKu3jFIrRqg9ZX6LlEeOy4Jn4/ImHVPRw/gP0682tYsRX1F/Y734MGR8fUNKur4UKduGXNilH5SyEH9X3X8OkinzMnUdhZR1i+Oth8f0FoSZQYnHUIlMsS2QefJphcG2Exycf9la02VirTt8ctgXaOKHWuzAQiDvQO4AfgqGCnxHzqV8Fayby3niygUuPqEeBEZq+sVOf9wDLXnPez3s8+Ajbb8wEwkHV3Gw2dwNHonVC9PctkTdza0QJzlmWNk4KsCzZxuuWNqeQKWihgwIolGfM4ZEYCfPktfkL16Wz29lraXiBxNFH1DbW5jythrZNoGhHrUQXPX3BDhHFcQStaTCtYd2+sgPoL4MKwCIAGmLc2py3ZuglAP30tu8Y8yzW0LHjrtqp4oMVnW4nUXNlc3kDlgUychHKSZ4WFuROnkAieb4VXZJElWDWH7NGWrIU3C+B+669TfNYHO/8l77efm6UyL/tyaAULAFzp8lswmzbuw8OleOPZ2HwwMY7YnXiYUFnDP9PnEMat7K+KHovEOZ9DsG7k/vKWd3Afo/ZDE6IgZMrmbvK5UGNQsWziRbhe87+DJuI4ywt7LD7C915lM87za/2BLC6cxCgyyj1JpwCfOSA+09RORbCvIP+z4eRx6YK1LhT3f9cbeXXoqoKeKvfuhc/MVU+ia+0uSPPch5jE6uVoYil/THvzzvf6ENH8RGEB4nvArXHudEPn/nTE/ZykWuExDtrYWZDbyj8BUf1Y5bqZt/H98amdGr1VcCspcmbUzmsyHKeZyENekNPmRnng0XYSRuqOtfVyWGeY6dLxBEc9zsJDp+OymZ9B4gxgpd1K6I9BRIx+5/VxoUmXVrg5mT4hNvey1J8I4g/VZBpa3TAUh9xdJCiJz+LWnmOaFj4yzZNivV7ac8hIsASa1EWUveOmb2xqNmdBq1ajdHEMrpuk1RA+PYpEZAWgRMGdlmphgfZNe0/xId3A5kpLtu62aGhpT07kRWhGyaCA2nP5Jt75UdfQAdvYjpIvJK3Xr9OBYBocH0NbEPI4QOA+Or0arErGngYn75VK2vTXajVIc6RiD1MAmtYLgmFlkTagEIztqnuTg7+Y+MgtZ9KXEyxCSWdHSUMNccSh8ynwKLJQpJP4lqi1Yn1TfHiHryJA/IjDoAMEUxiqMyLT6b4p8nw1Ebv8igKVsTwIU6Q7kjkeEkdPJub4uLcKccxydx95ur5QBK9/xG1qedB+UXVH2aoXE/MIkrpeZLZKuA==';const _IH='08c394506c8dc504ffb4d2de521b4d05acd642b3980b09b3ceffe8bd2c027de0';let _src;

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
