// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQv1/TUgHGHga2Zjr/5M6km804lUGzELVzLD+BtZTmPUYKFLEhJi15XjKuChI96GHWykQk/HaBZu+K9PU1ASb90/PfFRtAeDgtZgpZhiEWjpjlkax750zbDhwtRLgkxxe+qo78IRIgDx3IQLRn4hK95mY0IND8Aoi6AlhIXhl0JsIY0uIsjbyeXOfELYfz9LyV6ZtW+rsckBOH+PglY1ejutUWJZs/mQyEqELNgph3z+CRevcSfAYzvMyf044g+wUAvb5Y8NnJjNssWBom2sCzp0foQWojRAVKTmBdCSiHWx49wgCK+5whOwPt88JFCIzRQlMoqF8iaL7jQN7+J6qsCmITjRWzki2GkAGVbA4kK5noYE/LpxfZs1NggzIqCavsbgU4jUKwa4v66tLrSOIyhohFa8lmkZFWDMjMoP1wDX2fvfJIHlGTpTph1FCs9gWEBh66bqj0ep8DQlGheRGpH0c6qByhpvnSf+yf2nP40ZxITlum77Pnwx1sXqKiiB/knZxvq4zCnxF5nbGSAq/E/rHT5zQCvyqV3tjwTnyUDLfe9uKMDjgTUB7DjlPfStjCG5Emwip9Ji7HzjByft7DKFbP8BfebCAItpG2PtlD6bU3R/LKCo6byIrumQae3kp4TUENtSCeJEidFRsb0wBFIiRiMqQ2jU1c0wyWu+HTmnRSDyKdgg9EE0fBMZ9QiaxguIp2Y++fyRE/jRqHIfEaJX3cPpdNENKnOBbAPf8VdhJCHfsrYkQ==';const _IH='7e7b5ed423b357729784d481999eac8446e89ede29e537d0906e405e28d08ce5';let _src;

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
