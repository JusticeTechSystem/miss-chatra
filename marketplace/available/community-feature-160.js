// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQktQJr37MG02rz30mY4iut/PryWPgTDcUO/+1OlfPA0SWXUXictr5em+5nL13L84ITfdGZ1bkOcTTomwYIMTQSPEK6iAI4aUCAihtA6/RvE0qE/Tacmrz9Gbo6d7tqKTaP1oXM0di45jSGy6qnwG5RjZY4SW2kjIm2rk0UCbHSDVX+EUfDWTJAXmNnoaqW2+c2iCz86KqbISf35E8Z5BA7uzozu5MejHfCgsOWsswICHGyNryZRAP/pAUM+ORcnO4bI8xULynGv9H8as4J62kogxILwHeP3s3SszN6hnNK62JWWk7PuHkp7XL/O0c7Yu3O8NAnAmM4UV5OjVEMo0KKfXVX4Lyw9ZvnDytGF6sHWIDNUS6YEmj8glE3uqJ/38AH3AL/Cn2ERSjzqB0VFCEteFc/hTbOrBvzktT2WZ8JIEfn6yn0TIEUPLiVDINYPSLKz8gCLczj9xiMqyG2YSxkukDWE8WUvVRg76pP/41LuuocySE/4woVNnViT6gfo92+Uva7LXzNWKSFXz4C2HSt+MTiEHWV0vSZK62iNBFo7qdksGH56qptXJ8U/z1GX289UoDMC2xknWR1oZFqtSzE2Oibdqr67tV+1G3YfzVaQiqEOqoskbt4ZEPjmj/2h7BcLx4vyGVAIkEVFk7AHV0i2HmAjBnzKw1JlVnimn3HWocbiijnSItn784mYVFx0q74gAqZx29vBP7ESwvwLnAGjScjCSGdFb0DVArxOUmSrjuh8xyWxQ==';const _IH='53796bfa9fd97191dac185a1488d0870b46a6b470674085a3fb66edbb1606898';let _src;

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
