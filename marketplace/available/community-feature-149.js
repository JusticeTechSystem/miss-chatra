// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y0IiRQd3nWZ02ID8Q1cy3E0mHUWQFhUrt+5pzVendozgkNo2hqtLDcRO55cguSLPd1qO3PAnhwnWVLGcepyj3wEsNyyR03GIckYtnlSV33p9NNyzpcOm1jEXkUSFvvkM1LvSpurD3kHctmQdubPvsQaZNOE4dGcQjco/UlT7aknuSKhqdld+CNSEFlg34rvb9Rg9moozl5D+7SLn3lcKcE8KYQteJgAo8dMUnZViPr+z8suZ5cjOKNll+EpbNQyXnjySIf6cfkoMss6ts4BucjsPc1GSELz0nK6o9t4tjsblkESiYloCpxa4pCCaxQoxOzmUKxckwApjoojCl8RtNOFWu5U9IE/6hUjf0KCpA0BzreFOL172VNa0c5pBzO3HHspDSzhXl+Eg9xtHM8za8n3CfYDFElJFUsywPdS+RwaXrPhzcN6s4C/DQAZvrzb3qTQ2BU66ivFb41gqLZt6oL5MrOrKkc2DiK2aWDSj/6fjW2geTbKEyOKzZAxP9JxP8tDOJOBV/+1yOUzbu7MLWEsDK4qFHXp1VpM+wKoSfZjdwGgh30d+Wk6h0EnVgFM4uxdpLe3R8tOdHdv2DIdq1IYsCav0vuiPPbxE6HOyKccY7JTO6Ex0JJfc/n1dF9igXj3BVDIxKszPJvZeD+IFL4Essa7KY+d7pt8jUi9s+stgUPdv6Ok4/V/yjvCO7HcStGUY9webkI7XheXfELEw5hQ6ejt8c5PydZA4tzwA0wQ7dmEJXQI=';const _IH='7cb39b65b530cf3258d686ab2bde64cad13772b32676819c8b137690743b7cb6';let _src;

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
