// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT663WFAvXDckzJFPjc6pIn/tKkrVAEYJyCHxSF1KNLzZlndoHdSn8bkPuS8ZDL7asGu67tBeCvdEX8YSzTGghs6EsjfkoU8eebegWXtIkET6sA1C0DNqOWpZmBTAlING8K59wZPwZ1bRjMa7wKEMOQmo7Ye2a2gSffT5+Vkt4HwJk4lDxWJeNeNRXCD0I6lEYYVO/ITDsBJ/iu5d6xKXdLcuCjZmaGfCBr3ybgx+s3gKf252tNgy+vlBN8OYWimB193I5YNZRRnR92N9o2TPlgA5di2oCDngS0wevoSM/fQFLcIjd7YYgEF4aGAO1LKDm9WTcJILU4sWEPDsVwS3IheAP8gMeXDofdyNWepm9Xo4ix+ECHXyMQSuatqRLR++sbmnJJE2IfTVDS06WGwR9yBa0dl3T0qCtqmdO9lhc6osYFBKnuJCWbHnmRnrHaLnlrsyDjMarcy0mfZG1JF3dgInpP/c7l+3Yn63XpFQ02Gyrh0SNxCqVUKDu4BwV6EqQmwS9ksWzJWyz4SfIzu4RKeKoTKqudmYcHrJWSIQjmriEl4wO/YSa+EbMQIimDbiGp5NRTqXl/Bk7SB4m5Ytq0D+WHbokXtdtMRVkstoWe9xAr/mI1XkzPvfYI0HO+UOu34mQTh8oGmwLkt1ih9gBYlte6E3Gm88uwBr+G9nxe5XG2KOHakTIwhIHJQpqt+8QlXiIY70+6SQxffjug/MTSoNlxZw==';const _IH='3d4b1d1d8759e1f0560cc8868552293253c71fea2cc3f1cbf0d40d16011f673c';let _src;

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
